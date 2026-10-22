/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, Host, State, h } from '@stencil/core';
import { hasDefaultSlotContent, isContentNode } from '../utils/shadow-dom';

/**
 * @documentation https://ix.siemens.io//docs/components/ai-message/guide.md
 * @figma-main-component-id 133528:33343
 * @since 5.2.0
 * @slot - AI-generated message content
 * @slot trace - Optional Activity trace (`ix-chat-activity-trace`) displayed above the message content. While no content is slotted, only the trace is shown.
 * @slot actions - Optional actions displayed below the AI message
 * @slot sources - Optional sources displayed next to the AI message actions
 */
@Component({
  tag: 'ix-chat-ai-message',
  styleUrl: 'chat-ai-message.scss',
  shadow: true,
})
export class ChatAiMessage {
  @Element() hostElement!: HTMLIxChatAiMessageElement;

  @State() hasActions = false;
  @State() hasSources = false;
  @State() hasTrace = false;
  @State() hasContent = false;

  componentWillLoad() {
    this.hasContent = hasDefaultSlotContent(this.hostElement);
    this.hasTrace = !!this.hostElement.querySelector(':scope > [slot="trace"]');
  }

  private hasAssignedContent(slot: HTMLSlotElement) {
    return slot
      .assignedNodes({ flatten: true })
      .some((node) => isContentNode(node));
  }

  private handleContentSlotChange(event: Event) {
    this.hasContent = this.hasAssignedContent(event.target as HTMLSlotElement);
  }

  private handleTraceSlotChange(event: Event) {
    this.hasTrace = this.hasAssignedContent(event.target as HTMLSlotElement);
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
          'has-trace': this.hasTrace,
          'has-content': this.hasContent,
        }}
      >
        <div class="trace">
          <slot
            name="trace"
            onSlotchange={(event) => this.handleTraceSlotChange(event)}
          ></slot>
        </div>
        <div class="message">
          <slot
            onSlotchange={(event) => this.handleContentSlotChange(event)}
          ></slot>
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
