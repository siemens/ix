/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Nodes } from 'mdast';
import type { Pluggable } from 'unified';
import type { CodeBlockHighlight } from '../code-block/code-block.types';

/**
 * Syntax node (mdast) of the parsed Markdown.
 */
export type MdastNode = Nodes;

/**
 * Remark plugin (or `[plugin, options]` tuple). Plugins run after the
 * built-in parser setup.
 */
export type MarkdownPlugin = Pluggable;

export type MarkdownComponentContext = {
  /** Node type or Directive name. */
  name: string;
  /** Directive attributes, as strings. */
  attributes: Record<string, string>;
  /** Label / plain text content. */
  text: string;
  /** Inner Markdown source. */
  markdown: string;
  /** Read-only syntax node. */
  node: Readonly<MdastNode>;
  /** Reports an action to the app via the `actionClick` event. */
  emitAction(name: string, attributes?: Record<string, string>): void;
};

export type MarkdownComponentInstance = {
  element: HTMLElement;
  /**
   * Called when the open block changes and mapping and node type are
   * unchanged. Otherwise the component is remounted.
   */
  update?(ctx: MarkdownComponentContext): void;
  /** Called when the block disappears or the Markdown view disconnects. */
  destroy?(): void;
};

export type MarkdownComponentFactory = (
  ctx: MarkdownComponentContext
) => MarkdownComponentInstance;

/**
 * A custom-element tag name or a factory.
 */
export type MarkdownComponentMapping = string | MarkdownComponentFactory;

/**
 * Keys are Markdown node types (also plugin-produced ones, and built-in ones
 * to override them) or Directive names.
 */
export type MarkdownComponents = Record<string, MarkdownComponentMapping>;

export type MarkdownExtension = {
  plugins?: MarkdownPlugin[];
  components?: MarkdownComponents;
};

export type MarkdownOptions = {
  /** Remark plugins, run after the built-in parser setup. */
  plugins?: MarkdownPlugin[];
  /** Mappings from node types or Directive names to Custom components. */
  components?: MarkdownComponents;
  /** Extensions, merged into the options. Own `components` win. */
  extensions?: MarkdownExtension[];
  /**
   * Syntax highlighter for fenced code blocks.
   * Must return a DOM node, never an HTML string.
   */
  highlight?: CodeBlockHighlight;
};

export type ResolvedMarkdownOptions = {
  plugins: MarkdownPlugin[];
  components: MarkdownComponents;
  highlight?: CodeBlockHighlight;
};

/**
 * Merges extensions into the options: extension plugins run first, then the
 * own plugins; own components override extension components.
 */
export const resolveMarkdownOptions = (
  options?: MarkdownOptions
): ResolvedMarkdownOptions => {
  const extensions = options?.extensions ?? [];
  return {
    plugins: [
      ...extensions.flatMap((ext) => ext.plugins ?? []),
      ...(options?.plugins ?? []),
    ],
    components: Object.assign(
      {},
      ...extensions.map((ext) => ext.components),
      options?.components
    ),
    highlight: options?.highlight,
  };
};
