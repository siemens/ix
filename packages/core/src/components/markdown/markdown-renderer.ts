/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconCopy, iconDownload } from '@siemens/ix-icons/icons';
import type {
  Definition,
  FootnoteReference,
  Html,
  ImageReference,
  Link,
  LinkReference,
  List,
  ListItem,
  Nodes,
  Parent,
  Root,
  Table,
} from 'mdast';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import type { CodeBlockHighlight } from '../code-block/code-block.types';
import type {
  MarkdownComponentContext,
  MarkdownComponentInstance,
  MarkdownComponentMapping,
  MarkdownComponents,
  MarkdownPlugin,
} from './markdown.types';
import {
  collectFootnotes,
  type FootnoteInfo,
  type FootnoteReferenceInfo,
} from './markdown-footnotes';
import { normalizeIdentifier } from './markdown-identifier';
import {
  renderBuiltInDirective,
  type DirectiveNode,
} from './markdown-directives';
import { textOf } from './markdown-text';
import { LINE_BREAK_HTML } from './markdown-html';
import { cellText, downloadCsv, toCsv } from './markdown-table';
import { isSafeImageUrl, isSafeLinkUrl } from './markdown-url';

const createProcessor = (plugins: MarkdownPlugin[] = []) =>
  unified().use(remarkParse).use(remarkGfm).use(remarkDirective).use(plugins);

const defaultProcessor = createProcessor();

export type MarkdownParser = (markdown: string) => Root;

/**
 * Creates a parser with the built-in setup, followed by the given plugins.
 */
export const createMarkdownParser = (
  plugins: MarkdownPlugin[] = []
): MarkdownParser => {
  const processor = plugins.length
    ? createProcessor(plugins)
    : defaultProcessor;
  return (markdown) => processor.runSync(processor.parse(markdown)) as Root;
};

const BLOCK_PARENTS = new Set(['root', 'blockquote', 'listItem']);

const DIRECTIVE_MARKERS: Record<DirectiveNode['type'], string> = {
  textDirective: ':',
  leafDirective: '::',
  containerDirective: ':::',
};

export const parseMarkdown: MarkdownParser = createMarkdownParser();

export type MarkdownRendererOptions = {
  /** Syntax highlighter handed to rendered code blocks. */
  highlight?: CodeBlockHighlight;
  /** Parser used for the Markdown source, includes plugins. */
  parse?: MarkdownParser;
  /** Mappings to Custom components. */
  components?: MarkdownComponents;
  /** Reports actions emitted by Custom components. */
  emitAction?: (name: string, attributes: Record<string, string>) => void;
  /** Accessible name of the copy-CSV button of tables. */
  i18nCopyTable?: string;
  /** Accessible name of the download-CSV button of tables. */
  i18nDownloadTable?: string;
  /** Prefix for generated element ids, keeps footnote links unique per view. */
  idPrefix?: string;
};

/**
 * A mounted Custom component, kept across renders of the same block.
 */
export interface MountedComponent {
  name: string;
  mapping: MarkdownComponentMapping;
  instance: MarkdownComponentInstance;
}

type ComponentNode = Nodes & {
  name?: string;
  attributes?: Record<string, string | null | undefined> | null;
};

const isAllowedTagAttribute = (name: string) => !/^on/i.test(name);

/**
 * Applies Directive attributes to a mapped element. Only attributes applied
 * by a previous call are removed, so attributes set by the element itself or
 * its runtime (`hydrated`, classes, reflected properties) are kept.
 */
const applyTagAttributes = (
  element: HTMLElement,
  attributes: Record<string, string>,
  applied: Set<string>
) => {
  for (const name of applied) {
    if (!(name in attributes)) {
      element.removeAttribute(name);
      applied.delete(name);
    }
  }
  for (const [name, value] of Object.entries(attributes)) {
    if (isAllowedTagAttribute(name)) {
      try {
        element.setAttribute(name, value);
        applied.add(name);
      } catch {
        // Invalid attribute names are ignored.
      }
    }
  }
};

const FILENAME_META = /\[([^\]]+)\]/;

/**
 * Converts Markdown into DOM nodes without ever assigning HTML strings.
 * Every created element receives `scopeClass` so scoped component styles apply.
 */
export class MarkdownRenderer {
  private definitions = new Map<string, Definition>();
  private source = '';
  private showTableActions = true;
  private footnotes = new Map<string, FootnoteInfo>();
  private footnoteReferences = new WeakMap<
    FootnoteReference,
    FootnoteReferenceInfo
  >();

  constructor(
    private readonly document: Document,
    private readonly scopeClass: string,
    private readonly options: MarkdownRendererOptions = {}
  ) {}

  private mounted: MountedComponent[] = [];
  private previous: MountedComponent[] = [];

  parse(markdown: string): Root {
    return (this.options.parse ?? parseMarkdown)(markdown);
  }

  /**
   * Starts rendering a block. Custom components of the previous render of the
   * same block, in document order, are updated in place when possible.
   */
  startBlock(previous: MountedComponent[] = []) {
    this.previous = previous;
    this.mounted = [];
  }

  /**
   * Ends the block and returns its Custom components.
   */
  finishBlock(): MountedComponent[] {
    const mounted = this.mounted;
    this.previous = [];
    this.mounted = [];
    return mounted;
  }

  render(markdown: string): DocumentFragment {
    const fragment = this.document.createDocumentFragment();
    if (!markdown) {
      return fragment;
    }

    this.showTableActions = true;
    const root = this.parse(markdown);
    this.begin(markdown, root);
    this.appendChildren(fragment, root, false);
    this.renderFootnotes().forEach((node) => fragment.appendChild(node));
    return fragment;
  }

  /**
   * Prepares a parsed document for rendering top-level blocks one by one.
   * Block offsets refer to `markdown`.
   */
  begin(markdown: string, root: Root) {
    this.source = markdown;
    this.definitions = collectDefinitions(root);
    this.collectFootnotes(root);
  }

  /**
   * Renders the footnotes section for the document passed to `begin`.
   * Returns no nodes when no footnote is referenced.
   */
  renderFootnotes(): Node[] {
    const used = [...this.footnotes.values()]
      .filter((info) => info.references > 0)
      .sort((a, b) => a.number - b.number);
    if (used.length === 0) {
      return [];
    }

    const section = this.createElement('section', 'footnotes');
    section.setAttribute('aria-label', 'Footnotes');
    const list = this.createElement('ol');
    for (const info of used) {
      const item = this.createElement('li');
      item.id = this.footnoteId(info.number);
      this.appendChildren(item, info.definition, false);

      const target =
        item.lastElementChild?.localName === 'p' ? item.lastElementChild : item;
      for (let index = 0; index < info.references; index++) {
        const back = this.createElement('a', 'footnote-backref');
        back.href = `#${this.footnoteReferenceId(info.number, index)}`;
        back.textContent = '\u21a9';
        back.setAttribute(
          'aria-label',
          info.references > 1
            ? `Back to reference ${info.number}-${index + 1}`
            : `Back to reference ${info.number}`
        );
        target.append(' ', back);
      }
      list.appendChild(item);
    }
    section.appendChild(list);
    return [section];
  }

  private collectFootnotes(root: Root) {
    ({ footnotes: this.footnotes, references: this.footnoteReferences } =
      collectFootnotes(root));
  }

  private footnoteId(number: number) {
    return `${this.options.idPrefix ?? ''}fn-${number}`;
  }

  private footnoteReferenceId(number: number, index: number) {
    return `${this.options.idPrefix ?? ''}fnref-${number}${
      index > 0 ? `-${index + 1}` : ''
    }`;
  }

  private renderFootnoteReference(node: FootnoteReference): Node {
    const info = this.footnoteReferences.get(node);
    if (!info) {
      return this.text(`[^${node.label ?? node.identifier}]`);
    }
    const sup = this.createElement('sup');
    const anchor = this.createElement('a', 'footnote-ref');
    anchor.id = this.footnoteReferenceId(info.number, info.index);
    anchor.href = `#${this.footnoteId(info.number)}`;
    anchor.textContent = String(info.number);
    sup.appendChild(anchor);
    return sup;
  }

  private renderTaskItem(node: ListItem, checked: boolean): HTMLElement {
    const item = this.createElement('li', 'task-list-item');
    const checkbox = this.document.createElement('ix-checkbox');
    checkbox.checked = checked;
    checkbox.disabled = true;

    const [first, ...rest] = node.children;
    if (first?.type === 'paragraph') {
      this.appendChildren(checkbox, first, true);
      item.appendChild(checkbox);
      rest.forEach((child) => this.appendNode(item, child, node, true));
    } else {
      item.appendChild(checkbox);
      node.children.forEach((child) =>
        this.appendNode(item, child, node, true)
      );
    }
    return item;
  }

  private appendNode(
    target: Node,
    child: Nodes,
    parent: Parent,
    tight: boolean
  ) {
    const rendered = this.renderNode(child, parent, tight);
    if (rendered) {
      target.appendChild(rendered);
    }
  }

  /**
   * Renders one top-level block. Definitions render to no nodes.
   * @param settled Open blocks do not offer table export actions yet.
   */
  renderBlock(node: Nodes, parent: Root, settled = true): Node[] {
    this.showTableActions = settled;
    const rendered = this.renderNode(node, parent, false);
    if (!rendered) {
      return [];
    }
    return rendered instanceof DocumentFragment
      ? Array.from(rendered.childNodes)
      : [rendered];
  }

  private createElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    className?: string
  ): HTMLElementTagNameMap[K] {
    const element = this.document.createElement(tagName);
    element.classList.add(this.scopeClass);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  private text(value: string): Text {
    return this.document.createTextNode(value);
  }

  private appendChildren(target: Node, parent: Parent, tight: boolean) {
    for (const child of parent.children as Nodes[]) {
      const rendered = this.renderNode(child, parent, tight);
      if (rendered) {
        target.appendChild(rendered);
      }
    }
  }

  private withChildren<T extends Node>(
    target: T,
    parent: Parent,
    tight = false
  ): T {
    this.appendChildren(target, parent, tight);
    return target;
  }

  private fragment(parent: Parent): DocumentFragment {
    return this.withChildren(this.document.createDocumentFragment(), parent);
  }

  private renderNode(node: Nodes, parent: Parent, tight: boolean): Node | null {
    const mapped = this.renderMapped(node);
    if (mapped) {
      return mapped;
    }

    switch (node.type) {
      case 'paragraph':
        if (tight) {
          return this.fragment(node);
        }
        return this.withChildren(this.createElement('p'), node);
      case 'heading':
        return this.withChildren(
          this.createElement(`h${node.depth}`, `heading-${node.depth}`),
          node
        );
      case 'blockquote':
        return this.withChildren(this.createElement('blockquote'), node);
      case 'list':
        return this.renderList(node);
      case 'listItem':
        if (typeof node.checked === 'boolean') {
          return this.renderTaskItem(node, node.checked);
        }
        return this.withChildren(this.createElement('li'), node, tight);
      case 'table':
        return this.renderTable(node);
      case 'code':
        return this.renderCode(node.value, node.lang, node.meta);
      case 'text':
        return this.text(node.value);
      case 'emphasis':
        return this.withChildren(this.createElement('em'), node);
      case 'strong':
        return this.withChildren(this.createElement('strong'), node);
      case 'delete':
        return this.withChildren(this.createElement('del'), node);
      case 'inlineCode': {
        const code = this.createElement('code', 'inline-code');
        code.textContent = node.value;
        return code;
      }
      case 'break':
        return this.createElement('br');
      case 'link':
        return this.renderLink(node, node.url, node.title);
      case 'linkReference':
        return this.renderLinkReference(node);
      case 'image':
        return this.renderImage(node.url, node.alt, node.title);
      case 'imageReference':
        return this.renderImageReference(node);
      case 'html':
        return this.renderHtml(node, parent);
      case 'thematicBreak':
        return this.document.createElement('ix-divider');
      case 'footnoteReference':
        return this.renderFootnoteReference(node);
      case 'definition':
      case 'footnoteDefinition':
        return null;
      case 'textDirective':
      case 'leafDirective':
      case 'containerDirective':
        return this.renderDirective(node);
      default:
        return this.renderUnknown(node);
    }
  }

  private findMapping(node: ComponentNode) {
    const components = this.options.components;
    if (!components) {
      return undefined;
    }
    const name = node.type.endsWith('Directive') ? node.name : node.type;
    if (name === undefined) {
      return undefined;
    }
    return Object.hasOwn(components, name)
      ? { name, mapping: components[name] }
      : undefined;
  }

  private createContext(
    name: string,
    node: ComponentNode
  ): MarkdownComponentContext {
    const attributes: Record<string, string> = {};
    for (const [key, value] of Object.entries(node.attributes ?? {})) {
      attributes[key] = value ?? '';
    }
    return {
      name,
      attributes,
      text: textOf(node),
      markdown: this.innerSource(node),
      node,
      emitAction: (action, actionAttributes = {}) =>
        this.options.emitAction?.(action, { ...actionAttributes }),
    };
  }

  private innerSource(node: Nodes): string {
    const children = 'children' in node ? (node.children as Nodes[]) : [];
    const start = children[0]?.position?.start.offset;
    const end = children.at(-1)?.position?.end.offset;
    if (start !== undefined && end !== undefined) {
      return this.source.slice(start, end);
    }
    if (!('children' in node) && 'value' in node) {
      return typeof node.value === 'string' ? node.value : '';
    }
    return '';
  }

  /**
   * Renders a node through its Custom component mapping, if any. Components
   * are matched by order with the previous render of the block.
   */
  private renderMapped(node: Nodes): Node | null {
    const found = this.findMapping(node);
    if (!found) {
      return null;
    }

    const ctx = this.createContext(found.name, node);
    const taken = this.previous[this.mounted.length];
    if (taken && taken.name === found.name && taken.mapping === found.mapping) {
      taken.instance.update?.(ctx);
      this.mounted.push(taken);
      return taken.instance.element;
    }

    const instance = this.mountComponent(found.mapping, ctx);
    if (!instance) {
      return null;
    }
    this.mounted.push({ name: found.name, mapping: found.mapping, instance });
    return instance.element;
  }

  private mountComponent(
    mapping: MarkdownComponentMapping,
    ctx: MarkdownComponentContext
  ): MarkdownComponentInstance | undefined {
    if (typeof mapping === 'function') {
      return mapping(ctx);
    }

    let element: HTMLElement;
    try {
      element = this.document.createElement(mapping);
    } catch {
      return undefined;
    }
    const applied = new Set<string>();
    applyTagAttributes(element, ctx.attributes, applied);
    return {
      element,
      update: (next) => applyTagAttributes(element, next.attributes, applied),
    };
  }

  private renderList(node: List): HTMLElement {
    const list = this.createElement(node.ordered ? 'ol' : 'ul');
    if (node.ordered && typeof node.start === 'number' && node.start !== 1) {
      (list as HTMLOListElement).start = node.start;
    }
    const tight = !node.spread && !node.children.some((item) => item.spread);
    return this.withChildren(list, node, tight);
  }

  private renderTable(node: Table): HTMLElement {
    const container = this.createElement('div', 'table-block');
    const rows = node.children.map((row) =>
      row.children.map((cell) => cellText(cell))
    );

    if (this.showTableActions) {
      container.appendChild(this.renderTableActions(rows));
    }

    const scroll = this.createElement('div', 'table-scroll');
    const table = this.createElement('table');
    const align = node.align ?? [];
    const head = this.createElement('thead');
    const body = this.createElement('tbody');
    node.children.forEach((row, rowIndex) => {
      const tr = this.createElement('tr');
      row.children.forEach((cell, cellIndex) => {
        const td = this.createElement(rowIndex === 0 ? 'th' : 'td');
        if (rowIndex === 0) {
          td.scope = 'col';
        }
        const alignment = align[cellIndex];
        if (alignment) {
          td.classList.add(`align-${alignment}`);
        }
        tr.appendChild(this.withChildren(td, cell));
      });
      (rowIndex === 0 ? head : body).appendChild(tr);
    });
    table.appendChild(head);
    if (body.childNodes.length > 0) {
      table.appendChild(body);
    }
    scroll.appendChild(table);
    container.appendChild(scroll);
    return container;
  }

  private renderTableActions(rows: string[][]): HTMLElement {
    const actions = this.createElement('div', 'table-actions');
    const csv = () => toCsv(rows);

    const copy = this.createActionButton(
      iconCopy,
      this.options.i18nCopyTable ?? 'Copy table as CSV'
    );
    copy.addEventListener('click', () => {
      navigator.clipboard?.writeText(csv()).catch(() => undefined);
    });

    const download = this.createActionButton(
      iconDownload,
      this.options.i18nDownloadTable ?? 'Download table as CSV'
    );
    download.addEventListener('click', () => downloadCsv(this.document, csv()));

    actions.append(copy, download);
    return actions;
  }

  private createActionButton(icon: string, label: string) {
    const button = this.document.createElement('ix-icon-button');
    button.classList.add(this.scopeClass);
    button.variant = 'tertiary';
    button.size = '16';
    button.icon = icon;
    button.setAttribute('aria-label', label);
    return button;
  }

  private renderCode(
    value: string,
    language?: string | null,
    meta?: string | null
  ): HTMLElement {
    const block = this.document.createElement('ix-code-block');
    block.code = value;
    if (language) {
      block.language = language;
    }
    const filename = meta?.match(FILENAME_META)?.[1];
    if (filename) {
      block.filename = filename;
    }
    if (this.options.highlight) {
      block.highlight = this.options.highlight;
    }
    return block;
  }

  private renderLink(
    node: Link | LinkReference,
    url: string,
    title?: string | null
  ): Node {
    if (!isSafeLinkUrl(url)) {
      return this.fragment(node);
    }

    const anchor = this.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener';
    if (title) {
      anchor.title = title;
    }
    return this.withChildren(anchor, node);
  }

  private renderLinkReference(node: LinkReference): Node {
    const definition = this.definitions.get(
      normalizeIdentifier(node.identifier)
    );
    if (!definition) {
      return this.fragment(node);
    }
    return this.renderLink(node, definition.url, definition.title);
  }

  private renderImage(
    url: string,
    alt?: string | null,
    title?: string | null
  ): Node | null {
    if (!isSafeImageUrl(url)) {
      return null;
    }

    const image = this.createElement('img');
    image.src = url;
    image.alt = alt ?? '';
    if (title) {
      image.title = title;
    }
    return image;
  }

  private renderImageReference(node: ImageReference): Node | null {
    const definition = this.definitions.get(
      normalizeIdentifier(node.identifier)
    );
    if (!definition) {
      return null;
    }
    return this.renderImage(definition.url, node.alt, definition.title);
  }

  private renderHtml(node: Html, parent: Parent): Node {
    const content = LINE_BREAK_HTML.test(node.value.trim())
      ? this.createElement('br')
      : this.text(node.value);

    if (!BLOCK_PARENTS.has(parent.type)) {
      return content;
    }

    const paragraph = this.createElement('p');
    paragraph.appendChild(content);
    return paragraph;
  }

  /**
   * Directives without a label or content are most likely ordinary prose
   * such as `a:b`, so they keep their source text.
   */
  private renderDirective(node: DirectiveNode): Node {
    const builtIn = renderBuiltInDirective(node, {
      document: this.document,
      createElement: (tagName) => this.createElement(tagName),
      text: (value) => this.text(value),
      appendChildren: (target, parent) =>
        this.appendChildren(target, parent, false),
      emitAction: this.options.emitAction,
    });
    if (builtIn) {
      return builtIn;
    }
    if (node.children.length > 0) {
      return this.fragment(node);
    }

    const text = this.text(this.sourceOf(node));
    if (node.type === 'textDirective') {
      return text;
    }
    const paragraph = this.createElement('p');
    paragraph.appendChild(text);
    return paragraph;
  }

  private sourceOf(node: DirectiveNode): string {
    const start = node.position?.start.offset;
    const end = node.position?.end.offset;
    if (start === undefined || end === undefined) {
      return `${DIRECTIVE_MARKERS[node.type]}${node.name}`;
    }
    return this.source.slice(start, end);
  }

  private renderUnknown(node: Nodes): Node | null {
    if ('children' in node) {
      return this.fragment(node);
    }
    if ('value' in node && typeof node.value === 'string') {
      return this.text(node.value);
    }
    return null;
  }
}

const collectDefinitions = (root: Root): Map<string, Definition> => {
  const definitions = new Map<string, Definition>();
  const visit = (node: Nodes) => {
    if (node.type === 'definition') {
      const id = normalizeIdentifier(node.identifier);
      if (!definitions.has(id)) {
        definitions.set(id, node);
      }
      return;
    }
    if ('children' in node) {
      (node.children as Nodes[]).forEach(visit);
    }
  };
  visit(root);
  return definitions;
};

export const destroyComponents = (components: MountedComponent[]) =>
  components.forEach((component) => component.instance.destroy?.());
