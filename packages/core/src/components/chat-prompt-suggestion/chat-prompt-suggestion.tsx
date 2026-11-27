/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  h,
} from '@stencil/core';

/**
 * A Prompt suggestion the user can pick instead of typing a prompt.
 * Rendered as a button whose text is its accessible name.
 *
 * Place it in the `suggestions` slot of `ix-chat-welcome` or, as a Follow-up prompt,
 * in the `follow-up` slot of `ix-chat-input`.
 * Listen to `suggestionSelect` to fill the input or submit the prompt directly.
 *
 * @since 6.1.0
 * @slot - Text of the suggestion
 */
@Component({
  tag: 'ix-chat-prompt-suggestion',
  styleUrl: 'chat-prompt-suggestion.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class ChatPromptSuggestion {
  @Element() hostElement!: HTMLIxChatPromptSuggestionElement;

  /**
   * Emitted when the user selects the suggestion, with the suggestion text as detail.
   */
  @Event() suggestionSelect!: EventEmitter<string>;

  private getText() {
    return (this.hostElement.textContent ?? '').replace(/\s+/g, ' ').trim();
  }

  render() {
    return (
      <Host>
        <ix-button
          class="suggestion"
          variant="secondary"
          onClick={() => this.suggestionSelect.emit(this.getText())}
        >
          <slot></slot>
        </ix-button>
      </Host>
    );
  }
}
