/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {
  Definition,
  Html,
  ImageReference,
  Link,
  LinkReference,
  List,
  Nodes,
  Parent,
  Root,
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

const LINE_BREAK_HTML = /^<br\s*\/?>$/i;
const BLOCK_PARENTS = new Set(['root', 'blockquote', 'listItem']);

type DirectiveNode = Extract<
  Nodes,
  { type: 'textDirective' | 'leafDirective' | 'containerDirective' }
>;

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

const textOf = (node: Nodes): string => {
  if ('children' in node) {
    return (node.children as Nodes[]).map(textOf).join('');
  }
  if (node.type === 'image') {
    return node.alt ?? '';
  }
  return 'value' in node && typeof node.value === 'string' ? node.value : '';
};

/** Never copy event handler attributes onto mapped custom elements. */
const isAllowedTagAttribute = (name: string) => !/^on/i.test(name);

const applyTagAttributes = (
  element: HTMLElement,
  attributes: Record<string, string>
) => {
  for (const name of element.getAttributeNames()) {
    if (!(name in attributes)) {
      element.removeAttribute(name);
    }
  }
  for (const [name, value] of Object.entries(attributes)) {
    if (isAllowedTagAttribute(name)) {
      try {
        element.setAttribute(name, value);
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

    this.source = markdown;
    const root = this.parse(markdown);
    this.definitions = collectDefinitions(root);
    this.appendChildren(fragment, root, false);
    return fragment;
  }

  /**
   * Prepares a parsed document for rendering top-level blocks one by one.
   * Block offsets refer to `markdown`.
   */
  begin(markdown: string, root: Root) {
    this.source = markdown;
    this.definitions = collectDefinitions(root);
  }

  /**
   * Renders one top-level block. Definitions render to no nodes.
   */
  renderBlock(node: Nodes, parent: Root): Node[] {
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
        return this.withChildren(this.createElement('li'), node, tight);
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
      case 'definition':
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
    const isDirective = node.type.endsWith('Directive');
    const name = isDirective ? node.name! : node.type;
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
    applyTagAttributes(element, ctx.attributes);
    return {
      element,
      update: (next) => applyTagAttributes(element, next.attributes),
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

const normalizeIdentifier = (identifier: string) => identifier.toLowerCase();

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
