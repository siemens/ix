/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Nodes, Root } from 'mdast';
/*! remend (https://github.com/vercel/streamdown/tree/main/packages/remend), Apache-2.0. Licensed under the Apache License, Version 2.0; http://www.apache.org/licenses/LICENSE-2.0 */
import remend from 'remend';
import {
  destroyComponents,
  MarkdownRenderer,
  type MarkdownParser,
  type MountedComponent,
} from './markdown-renderer';

interface RenderedBlock {
  /** Start offset of the block in the (repaired) source; acts as its key. */
  start: number;
  text: string;
  nodes: Node[];
  components: MountedComponent[];
  settled: boolean;
}

type BlockNode = Root['children'][number];

/** Key of the footnotes section, which follows all source blocks. */
const FOOTNOTES_KEY = -1;

const DIRECTIVE_START = /^:{1,3}[A-Za-z]/;

/**
 * Trailing text directive whose label or attributes are not closed yet, e.g.
 * `:button[Re` or `:button[Retry]{acti`.
 */
const UNFINISHED_TEXT_DIRECTIVE =
  /(?<![A-Za-z0-9:]):[A-Za-z][\w-]*(?:\[[^\]]*|(?:\[[^\]]*\])?\{[^}]*)$/;

const hasOffsets = (node: Nodes) =>
  node.position?.start.offset !== undefined &&
  node.position?.end.offset !== undefined;

/**
 * An unfinished table is a paragraph whose lines all look like table rows
 * but that is not yet followed by a delimiter row.
 */
const isUnfinishedTable = (source: string, node: BlockNode) =>
  node.type === 'paragraph' &&
  source
    .slice(node.position!.start.offset, node.position!.end.offset)
    .split('\n')
    .every((line) => line.trimStart().startsWith('|'));

/**
 * A directive that is not yet recognisable still parses as a paragraph whose
 * text starts with the directive marker. Complete directives parse into
 * directive nodes and are rendered right away.
 */
const isUnfinishedDirective = (source: string, node: BlockNode) => {
  if (node.type !== 'paragraph') {
    return false;
  }
  const first = node.children[0];
  return (
    first?.type === 'text' &&
    DIRECTIVE_START.test(source.slice(node.position!.start.offset).trimStart())
  );
};

const isHeldBack = (source: string, node: BlockNode) =>
  hasOffsets(node) &&
  (isUnfinishedTable(source, node) || isUnfinishedDirective(source, node));

/**
 * Cuts a trailing unfinished text directive from the open paragraph.
 */
const hideUnfinishedTextDirective = (
  source: string,
  root: Root,
  parse: MarkdownParser
) => {
  const last = root.children.at(-1);
  if (last?.type !== 'paragraph' || !hasOffsets(last)) {
    return { source, root };
  }
  const start = last.position!.start.offset!;
  const match = UNFINISHED_TEXT_DIRECTIVE.exec(source.slice(start));
  if (!match) {
    return { source, root };
  }
  const trimmed = source.slice(0, start + match.index).trimEnd();
  return { source: trimmed, root: parse(trimmed) };
};

/**
 * Closes unfinished syntax in the trailing (open) block of `source`.
 */
const repairOpenBlock = (source: string, root: Root, parse: MarkdownParser) => {
  const last = root.children.at(-1);
  if (!last || !hasOffsets(last)) {
    return { source, root };
  }

  const start = last.position!.start.offset!;
  const repaired = source.slice(0, start) + remend(source.slice(start));
  if (repaired === source) {
    return { source, root };
  }
  return { source: repaired, root: parse(repaired) };
};

/**
 * Keeps the DOM of a Markdown view in sync with its Markdown source.
 * Top-level blocks are keyed by start offset. While streaming, every block
 * followed by another block is settled and its DOM is reused when its source
 * did not change; only the open block is re-rendered.
 */
export class MarkdownStreamReconciler {
  private blocks: RenderedBlock[] = [];

  constructor(
    private readonly host: HTMLElement,
    private renderer: MarkdownRenderer
  ) {}

  setRenderer(renderer: MarkdownRenderer) {
    this.renderer = renderer;
  }

  /**
   * @param force Re-renders settled blocks too, e.g. after options changed.
   */
  update(markdown: string, streaming: boolean, force = false) {
    const next = this.renderBlocks(markdown ?? '', streaming, force);
    this.patch(next, streaming);
    const kept = new Set(next.flatMap((block) => block.components));
    destroyComponents(
      this.blocks
        .flatMap((block) => block.components)
        .filter((component) => !kept.has(component))
    );
    this.blocks = next;
  }

  /**
   * Destroys all Custom components and removes the rendered nodes.
   */
  dispose() {
    destroyComponents(this.blocks.flatMap((block) => block.components));
    for (const node of this.blocks.flatMap((block) => block.nodes)) {
      node.parentNode?.removeChild(node);
    }
    this.blocks = [];
  }

  private renderBlocks(markdown: string, streaming: boolean, force: boolean) {
    let source = markdown;
    let root = this.renderer.parse(source);
    if (streaming) {
      const parse = (value: string) => this.renderer.parse(value);
      ({ source, root } = hideUnfinishedTextDirective(source, root, parse));
      ({ source, root } = repairOpenBlock(source, root, parse));
    }

    const children = root.children;
    if (streaming) {
      const last = children.at(-1);
      if (last && isHeldBack(source, last)) {
        children.pop();
      }
    }

    this.renderer.begin(source, root);
    const settledCount = streaming ? children.length - 1 : children.length;
    const previous = new Map(this.blocks.map((block) => [block.start, block]));

    let anchor = 0;
    let synthetic = 0;
    const blocks = children.map((child, index): RenderedBlock => {
      // Plugin-produced nodes may have no position. They get a key after the
      // previous block and are compared by their content.
      let start: number;
      let text: string;
      if (hasOffsets(child)) {
        start = child.position!.start.offset!;
        anchor = child.position!.end.offset!;
        synthetic = 0;
        text = source.slice(start, anchor);
      } else {
        start = anchor + ++synthetic / 1024;
        text = JSON.stringify(child);
      }
      const old = previous.get(start);

      if (
        !force &&
        streaming &&
        index < settledCount &&
        old?.settled &&
        old.text === text
      ) {
        return old;
      }
      const settled = index < settledCount;
      this.renderer.startBlock(old?.components);
      const nodes = this.renderer.renderBlock(child, root, settled);
      const components = this.renderer.finishBlock();
      if (old) {
        reuseCodeBlocks(old.nodes, nodes);
      }
      return { start, text, nodes, components, settled };
    });

    const footnotes = this.renderer.renderFootnotes();
    if (footnotes.length > 0) {
      blocks.push({
        start: FOOTNOTES_KEY,
        text: '',
        nodes: footnotes,
        components: [],
        settled: false,
      });
    }
    return blocks;
  }

  private patch(next: RenderedBlock[], streaming: boolean) {
    const reused = new Set<RenderedBlock>();
    next.forEach((block, index) => {
      const old = this.blocks.find((b) => b.start === block.start);
      if (!old || old === block || reused.has(old)) {
        return;
      }
      if (!streaming && sameNodes(old.nodes, block.nodes)) {
        next[index] = old;
        reused.add(old);
      }
    });

    const keep = new Set(next.flatMap((block) => block.nodes));
    for (const block of this.blocks) {
      for (const node of block.nodes) {
        if (!keep.has(node)) {
          node.parentNode?.removeChild(node);
        }
      }
    }

    let cursor: ChildNode | null = this.host.firstChild;
    for (const block of next) {
      for (const node of block.nodes) {
        if (node === cursor) {
          cursor = cursor.nextSibling;
        } else {
          this.host.insertBefore(node, cursor);
        }
      }
    }
  }
}

/** Added by the Stencil runtime or the component to mounted elements. */
const RUNTIME_ATTRIBUTES = new Set(['hydrated', 'tabindex']);

const ownAttributes = (element: Element) =>
  element
    .getAttributeNames()
    .filter(
      (name) =>
        !RUNTIME_ATTRIBUTES.has(name) &&
        !(name === 'class' && element.classList.length === 0)
    );

/**
 * Like `isEqualNode`, but ignores attributes added by the component runtime
 * to already mounted elements.
 */
const sameNode = (a: Node, b: Node): boolean => {
  if (a.nodeType !== b.nodeType || a.nodeName !== b.nodeName) {
    return false;
  }
  if (a instanceof Element && b instanceof Element) {
    const names = ownAttributes(a);
    if (
      names.length !== ownAttributes(b).length ||
      names.some((name) => a.getAttribute(name) !== b.getAttribute(name))
    ) {
      return false;
    }
  } else if (a.nodeValue !== b.nodeValue) {
    return false;
  }
  return sameNodes(Array.from(a.childNodes), Array.from(b.childNodes));
};

const sameNodes = (a: Node[], b: Node[]) =>
  a.length === b.length && a.every((node, i) => sameNode(node, b[i]));

const collectCodeBlocks = (nodes: Node[]) =>
  nodes.flatMap((node) =>
    node instanceof Element
      ? node.localName === 'ix-code-block'
        ? [node as HTMLIxCodeBlockElement]
        : Array.from(node.querySelectorAll('ix-code-block'))
      : []
  );

/**
 * Moves the new code block state onto already mounted code blocks and puts
 * them into the new nodes, so they update in place instead of being remounted.
 */
const reuseCodeBlocks = (current: Node[], next: Node[]) => {
  const mounted = collectCodeBlocks(current);
  collectCodeBlocks(next).forEach((fresh, index) => {
    const existing = mounted[index];
    if (!existing) {
      return;
    }
    existing.code = fresh.code;
    existing.language = fresh.language;
    existing.filename = fresh.filename;
    existing.highlight = fresh.highlight;
    if (fresh.parentNode) {
      fresh.replaceWith(existing);
    } else {
      next[next.indexOf(fresh)] = existing;
    }
  });
};
