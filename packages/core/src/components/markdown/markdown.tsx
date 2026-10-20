/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Build, Component, Element, Host, Prop, h } from '@stencil/core';
import type { CodeBlockHighlight } from '../code-block/code-block.types';
import { MarkdownRenderer } from './markdown-renderer';

export type MarkdownOptions = {
  /**
   * Syntax highlighter for fenced code blocks.
   * Must return a DOM node, never an HTML string.
   */
  highlight?: CodeBlockHighlight;
};

/**
 * Scope class Stencil assigns to elements of the scoped `ix-markdown`
 * component. Imperatively created elements need it to receive styles.
 */
const SCOPE_CLASS = 'sc-ix-markdown';

/**
 * Renders Markdown with iX look and feel. Raw HTML is shown as text,
 * only `<br>` becomes a line break. Links are limited to http(s), mailto and
 * relative URLs, images to http(s) URLs.
 *
 * @since 6.1.0
 */
@Component({
  tag: 'ix-markdown',
  styleUrl: 'markdown.scss',
  scoped: true,
})
export class Markdown {
  @Element() hostElement!: HTMLIxMarkdownElement;

  /**
   * Markdown source to render.
   */
  @Prop() markdown: string = '';

  /**
   * Options for rendering, e.g. a `highlight` hook for fenced code.
   */
  @Prop() options?: MarkdownOptions;

  private renderedMarkdown?: string;
  private renderedOptions?: MarkdownOptions;

  componentDidRender() {
    this.renderMarkdown();
  }

  private renderMarkdown() {
    if (
      !Build.isBrowser ||
      (this.renderedMarkdown === this.markdown &&
        this.renderedOptions === this.options)
    ) {
      return;
    }

    const renderer = new MarkdownRenderer(document, SCOPE_CLASS, {
      highlight: this.options?.highlight,
    });
    const fragment = renderer.render(this.markdown ?? '');
    reuseCodeBlocks(this.hostElement, fragment);
    this.hostElement.replaceChildren(fragment);
    this.renderedMarkdown = this.markdown;
    this.renderedOptions = this.options;
  }

  render() {
    return <Host></Host>;
  }
}

/**
 * Moves the new code block state onto already mounted code blocks so they
 * update in place instead of being remounted.
 */
const reuseCodeBlocks = (host: HTMLElement, fragment: DocumentFragment) => {
  const mounted = Array.from(host.querySelectorAll('ix-code-block'));
  fragment.querySelectorAll('ix-code-block').forEach((next, index) => {
    const current = mounted[index];
    if (!current) {
      return;
    }
    current.code = next.code;
    current.language = next.language;
    current.filename = next.filename;
    current.highlight = next.highlight;
    next.replaceWith(current);
  });
};
