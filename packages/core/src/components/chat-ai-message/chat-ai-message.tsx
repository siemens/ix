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
 * @since 5.2.0
 * @slot - AI-generated message content
 * @slot actions - Optional actions displayed below the AI message
 * @slot sources - Optional sources displayed next to the AI message actions
 */
@Component({
  tag: 'ix-chat-ai-message',
  styleUrl: 'chat-ai-message.scss',
  shadow: true,
})
export class ChatAiMessage {
  @State() hasActions = false;
  @State() hasSources = false;

  private hasAssignedContent(slot: HTMLSlotElement) {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }

  private handleActionsSlotChange(event: Event) {
    this.hasActions = this.hasAssignedContent(event.target as HTMLSlotElement);
  }

  private handleSourcesSlotChange(event: Event) {
    this.hasSources = this.hasAssignedContent(event.target as HTMLSlotElement);
  }

  render() {
    const hasMeta = this.hasActions || this.hasSources;

    return (
      <Host
        class={{
          'has-actions': this.hasActions,
          'has-sources': this.hasSources,
          'has-meta': hasMeta,
        }}
      >
        <div class="message">
          <slot></slot>
        </div>
        <div class="meta" aria-hidden={!hasMeta ? 'true' : undefined}>
          <div class="actions">
            <slot
              name="actions"
              onSlotchange={(event) => this.handleActionsSlotChange(event)}
            ></slot>
          </div>
          <div class="sources">
            <slot
              name="sources"
              onSlotchange={(event) => this.handleSourcesSlotChange(event)}
            ></slot>
          </div>
        </div>
      </Host>
    );
  }
}
