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
  Html,
  ImageReference,
  Link,
  LinkReference,
  List,
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
import { isSafeImageUrl, isSafeLinkUrl } from './markdown-url';

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkDirective);

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

export const parseMarkdown = (markdown: string): Root =>
  processor.runSync(processor.parse(markdown)) as Root;

export type MarkdownRendererOptions = {
  /** Syntax highlighter handed to rendered code blocks. */
  highlight?: CodeBlockHighlight;
  /** Accessible name of the copy-CSV button of tables. */
  i18nCopyTable?: string;
  /** Accessible name of the download-CSV button of tables. */
  i18nDownloadTable?: string;
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

  constructor(
    private readonly document: Document,
    private readonly scopeClass: string,
    private readonly options: MarkdownRendererOptions = {}
  ) {}

  render(markdown: string): DocumentFragment {
    const fragment = this.document.createDocumentFragment();
    if (!markdown) {
      return fragment;
    }

    this.source = markdown;
    this.showTableActions = true;
    const root = parseMarkdown(markdown);
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

const cellText = (node: Nodes): string => {
  if (node.type === 'break') {
    return '\n';
  }
  if (node.type === 'html') {
    return LINE_BREAK_HTML.test(node.value.trim()) ? '\n' : node.value;
  }
  if ('children' in node) {
    return (node.children as Nodes[]).map(cellText).join('');
  }
  return 'value' in node && typeof node.value === 'string' ? node.value : '';
};

const escapeCsv = (value: string) =>
  /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;

const toCsv = (rows: string[][]) =>
  rows.map((row) => row.map(escapeCsv).join(',')).join('\r\n');

const downloadCsv = (document: Document, csv: string) => {
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'table.csv';
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

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
