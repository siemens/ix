/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, State, h } from '@stencil/core';

/**
 * @since 5.1.0
 * @slot - Chat messages, for example ix-chat-user-message and ix-chat-ai-message
 * @slot prompt - Chat input displayed below the chat messages
 */
@Component({
  tag: 'ix-chat',
  styleUrl: 'chat.scss',
  shadow: true,
})
export class Chat {
  @State() hasPrompt = false;

  private hasAssignedContent(slot: HTMLSlotElement) {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }

  private handlePromptSlotChange(event: Event) {
    this.hasPrompt = this.hasAssignedContent(event.target as HTMLSlotElement);
  }

  render() {
    return (
      <Host
        class={{
          'has-prompt': this.hasPrompt,
        }}
      >
        <div class="messages" part="messages">
          <slot></slot>
        </div>
        <div class="prompt" part="prompt">
          <slot
            name="prompt"
            onSlotchange={(event) => this.handlePromptSlotChange(event)}
          ></slot>
        </div>
      </Host>
    );
  }
}
