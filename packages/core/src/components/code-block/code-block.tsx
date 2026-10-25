/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconCopy,
  iconDocument,
  iconSingleCheck,
} from '@siemens/ix-icons/icons';
import { Component, Element, Host, Prop, State, h } from '@stencil/core';

import type { CodeBlockHighlight } from './code-block.types';

const COPIED_FEEDBACK_DURATION = 1500;

type HighlightResult = {
  code: string;
  language?: string;
  highlight: CodeBlockHighlight;
  node?: Node;
};

/**
 * @since 6.1.0
 */
@Component({
  tag: 'ix-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {
  @Element() hostElement!: HTMLIxCodeBlockElement;

  /**
   * The code to display.
   */
  @Prop() code: string = '';

  /**
   * Language of the code, shown as a label in the header.
   */
  @Prop() language?: string;

  /**
   * Optional filename, shown as a chip in the header.
   */
  @Prop() filename?: string;

  /**
   * Accessible label of the copy button.
   */
  @Prop({ attribute: 'i18n-copy' }) i18nCopy = 'Copy code';

  /**
   * Label announced and shown after the code was copied.
   */
  @Prop({ attribute: 'i18n-copied' }) i18nCopied = 'Copied';

  /**
   * Optional syntax highlighter. Receives the code and language and returns a
   * DOM node that replaces the plain code body. HTML strings are not supported.
   */
  @Prop() highlight?: CodeBlockHighlight;

  @State() private copied = false;

  private highlightedContainer?: HTMLDivElement;
  private highlighted?: HighlightResult;
  private mountedHighlight?: HighlightResult;

  private copiedTimeout?: ReturnType<typeof setTimeout>;

  disconnectedCallback() {
    this.resetCopied();
  }

  componentWillRender() {
    this.updateHighlighted();
  }

  componentDidRender() {
    const node = this.highlighted?.node;
    if (
      !node ||
      !this.highlightedContainer ||
      this.mountedHighlight === this.highlighted
    ) {
      return;
    }

    // A returned DocumentFragment is emptied when mounted, so mount each
    // highlight result only once.
    this.highlightedContainer.replaceChildren(node);
    this.mountedHighlight = this.highlighted;
  }

  private updateHighlighted() {
    const { code, language, highlight } = this;
    if (!highlight) {
      this.highlighted = undefined;
      return;
    }

    const current = this.highlighted;
    if (
      current?.code === code &&
      current.language === language &&
      current.highlight === highlight
    ) {
      return;
    }

    const result = highlight(code, language);
    this.highlighted = {
      code,
      language,
      highlight,
      node: result instanceof Node ? result : undefined,
    };
  }

  private resetCopied() {
    clearTimeout(this.copiedTimeout);
    this.copiedTimeout = undefined;
    this.copied = false;
  }

  private async copyCode() {
    try {
      await navigator.clipboard.writeText(this.code);
    } catch {
      // Only confirm a successful copy.
      return;
    }

    if (!this.hostElement.isConnected) {
      return;
    }

    clearTimeout(this.copiedTimeout);
    this.copied = true;
    this.copiedTimeout = setTimeout(
      () => this.resetCopied(),
      COPIED_FEEDBACK_DURATION
    );
  }

  render() {
    return (
      <Host>
        <div class="header">
          {this.filename && (
            <span class="filename">
              <ix-icon
                name={iconDocument}
                size="16"
                aria-hidden="true"
              ></ix-icon>
              <span class="filename-text">{this.filename}</span>
            </span>
          )}
          {this.language && <span class="language">{this.language}</span>}
          <span class="copied" role="status">
            {this.copied ? this.i18nCopied : ''}
          </span>
          <ix-icon-button
            class="copy"
            variant="tertiary"
            size="16"
            icon={this.copied ? iconSingleCheck : iconCopy}
            aria-label={this.copied ? this.i18nCopied : this.i18nCopy}
            onClick={() => this.copyCode()}
          ></ix-icon-button>
        </div>
        {this.highlighted?.node ? (
          <div
            class="body highlighted"
            tabIndex={0}
            ref={(ref) => (this.highlightedContainer = ref)}
          ></div>
        ) : (
          <pre class="body" tabIndex={0}>
            <code>{this.code}</code>
          </pre>
        )}
      </Host>
    );
  }
}
