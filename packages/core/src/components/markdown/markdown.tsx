/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Build,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import { createMarkdownParser, MarkdownRenderer } from './markdown-renderer';
import { MarkdownStreamReconciler } from './markdown-stream';
import { MarkdownOptions, resolveMarkdownOptions } from './markdown.types';

export type MarkdownAction = {
  name: string;
  attributes: Record<string, string>;
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
   * Options for rendering: remark `plugins`, `components` that map node
   * types or Directive names to Custom components, `extensions` and a
   * `highlight` hook for fenced code. A plain object that can be shared
   * between views. Replace the object to apply changes.
   */
  @Prop() options?: MarkdownOptions;

  /**
   * Set while the Markdown source is still growing, e.g. while an LLM
   * answer is streamed. The unfinished last block is repaired for display,
   * completed blocks keep their DOM. When it turns `false`, the final
   * result is reconciled.
   */
  @Prop() streaming: boolean = false;

  /**
   * Emitted when a Custom component calls `emitAction`.
   */
  @Event() actionClick!: EventEmitter<MarkdownAction>;

  private reconciler?: MarkdownStreamReconciler;
  private renderedMarkdown?: string;
  private renderedOptions?: MarkdownOptions;
  private renderedStreaming?: boolean;
  private frame?: number;
  private resolved?: ReturnType<typeof resolveMarkdownOptions>;
  private parser?: ReturnType<typeof createMarkdownParser>;

  componentDidRender() {
    this.scheduleRender();
  }

  connectedCallback() {
    this.scheduleRender();
  }

  disconnectedCallback() {
    this.reconciler?.dispose();
    this.renderedMarkdown = undefined;
    this.renderedOptions = undefined;
    this.renderedStreaming = undefined;
    if (this.frame !== undefined) {
      cancelAnimationFrame(this.frame);
      this.frame = undefined;
    }
  }

  /**
   * Coalesces updates to at most one render per animation frame.
   */
  private scheduleRender() {
    if (!Build.isBrowser || this.frame !== undefined) {
      return;
    }
    if (!this.isDirty()) {
      return;
    }
    this.frame = requestAnimationFrame(() => {
      this.frame = undefined;
      this.renderMarkdown();
    });
  }

  private isDirty() {
    return (
      this.renderedMarkdown !== this.markdown ||
      this.renderedOptions !== this.options ||
      this.renderedStreaming !== this.streaming
    );
  }

  private renderMarkdown() {
    if (!this.isDirty()) {
      return;
    }

    if (!this.parser || this.renderedOptions !== this.options) {
      this.resolved = resolveMarkdownOptions(this.options);
      this.parser = createMarkdownParser(this.resolved.plugins);
    }
    const renderer = new MarkdownRenderer(document, SCOPE_CLASS, {
      highlight: this.resolved?.highlight,
      components: this.resolved?.components,
      parse: this.parser,
      emitAction: (name, attributes) =>
        this.actionClick.emit({ name, attributes }),
    });
    if (!this.reconciler) {
      this.reconciler = new MarkdownStreamReconciler(
        this.hostElement,
        renderer
      );
    }
    this.reconciler.setRenderer(renderer);
    this.reconciler.update(
      this.markdown ?? '',
      this.streaming,
      this.renderedOptions !== this.options
    );
    this.renderedMarkdown = this.markdown;
    this.renderedOptions = this.options;
    this.renderedStreaming = this.streaming;
  }

  render() {
    return <Host aria-busy={this.streaming ? 'true' : undefined}></Host>;
  }
}
