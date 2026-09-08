/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, Host, Prop, State, h } from '@stencil/core';

/**
 * @since 5.2.0
 * @slot - Message content displayed in the user message bubble
 * @slot actions - Optional actions displayed below the user message bubble
 * @slot attachments - ix-chat-attachment elements with variant="sent" displayed above the user message bubble
 */
@Component({
  tag: 'ix-chat-user-message',
  styleUrl: 'chat-user-message.scss',
  shadow: true,
})
export class ChatUserMessage {
  @Element() hostElement!: HTMLIxChatUserMessageElement;

  /**
   * Text displayed in the user message bubble.
   */
  @Prop() message?: string;

  @State() hasActions = false;
  @State() hasAttachments = false;
  @State() hasMessageContent = false;

  componentWillLoad() {
    this.updateHasMessageContent();
  }

  private handleActionsSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasActions =
      slot.assignedElements({
        flatten: true,
      }).length > 0;
  }

  private handleAttachmentsSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasAttachments =
      slot.assignedElements({
        flatten: true,
      }).length > 0;
  }

  private handleMessageSlotChange(event: Event) {
    this.updateHasMessageContent(event.target as HTMLSlotElement);
  }

  private hasAssignedMessageContent(slot?: HTMLSlotElement) {
    if (slot) {
      return slot.assignedNodes({ flatten: true }).some((node) => {
        return node.nodeType === 1 || !!node.textContent?.trim();
      });
    }

    return Array.from(this.hostElement.childNodes).some((node) => {
      if (node.nodeType === 1) {
        return (node as HTMLElement).slot === '';
      }

      return !!node.textContent?.trim();
    });
  }

  private updateHasMessageContent(slot?: HTMLSlotElement) {
    this.hasMessageContent = this.hasAssignedMessageContent(slot);
  }

  render() {
    return (
      <Host
        class={{
          'has-actions': this.hasActions,
          'has-attachments': this.hasAttachments,
        }}
        tabIndex={this.hasActions ? 0 : undefined}
      >
        <div class="attachments">
          <slot
            name="attachments"
            onSlotchange={(event) => this.handleAttachmentsSlotChange(event)}
          ></slot>
        </div>
        <div class="message">
          <ix-typography class="message-text" format="body" textColor="std">
            {this.message}
            <span
              style={{
                display: this.hasMessageContent ? undefined : 'none',
              }}
            >
              <slot
                onSlotchange={(event) => this.handleMessageSlotChange(event)}
              ></slot>
            </span>
          </ix-typography>
        </div>
        <div
          class="actions"
          aria-hidden={!this.hasActions ? 'true' : undefined}
        >
          <slot
            name="actions"
            onSlotchange={(event) => this.handleActionsSlotChange(event)}
          ></slot>
        </div>
      </Host>
    );
  }
}
