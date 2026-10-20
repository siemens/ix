/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Build, Component, Element, Host, Prop, h } from '@stencil/core';
import { MarkdownRenderer } from './markdown-renderer';

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

  private renderedMarkdown?: string;

  componentDidRender() {
    this.renderMarkdown();
  }

  private renderMarkdown() {
    if (!Build.isBrowser || this.renderedMarkdown === this.markdown) {
      return;
    }

    const renderer = new MarkdownRenderer(document, SCOPE_CLASS);
    this.hostElement.replaceChildren(renderer.render(this.markdown ?? ''));
    this.renderedMarkdown = this.markdown;
  }

  render() {
    return <Host></Host>;
  }
}
