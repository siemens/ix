/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { hasDefaultSlotContent, hasSlottedContent } from '../utils/shadow-dom';

/**
 * Welcome screen of a chat: a greeting, free content and Prompt suggestions.
 * Place it in the `welcome` slot of `ix-chat`, which shows it only while the chat has no messages.
 *
 * @since 6.1.0
 * @slot - Free content displayed below the heading, e.g. a short description of what the assistant can do
 * @slot suggestions - Prompt suggestions (`ix-chat-prompt-suggestion`)
 */
@Component({
  tag: 'ix-chat-welcome',
  styleUrl: 'chat-welcome.scss',
  shadow: true,
})
export class ChatWelcome {
  @Element() hostElement!: HTMLIxChatWelcomeElement;
  /**
   * Greeting displayed as heading, e.g. "How can I help you today?"
   */
  @Prop() heading?: string;

  @State() hasContent = false;
  @State() hasSuggestions = false;

  componentWillLoad() {
    this.hasContent = hasDefaultSlotContent(this.hostElement);
    this.hasSuggestions = !!this.hostElement.querySelector(
      ':scope > [slot="suggestions"]'
    );
  }

  render() {
    return (
      <Host>
        {this.heading && <h2 class="heading">{this.heading}</h2>}
        <div class="content" hidden={!this.hasContent}>
          <slot
            onSlotchange={(event) =>
              (this.hasContent = hasSlottedContent(
                event.target as HTMLSlotElement
              ))
            }
          ></slot>
        </div>
        <div class="suggestions" hidden={!this.hasSuggestions}>
          <slot
            name="suggestions"
            onSlotchange={(event) =>
              (this.hasSuggestions = hasSlottedContent(
                event.target as HTMLSlotElement
              ))
            }
          ></slot>
        </div>
      </Host>
    );
  }
}
