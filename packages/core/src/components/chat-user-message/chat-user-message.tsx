/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconAttach } from '@siemens/ix-icons/icons';
import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core';

/**
 * @since 5.0.0
 * @slot - Message content displayed in the user message bubble
 * @slot actions - Optional actions displayed below the user message bubble
 * @slot attachments - ix-chat-prompt-attachment elements with variant="sent" displayed above the user message bubble
 * @slot attachment-overflow - Optional ix-dropdown-item elements displayed in the attachment overflow dropdown
 */
@Component({
  tag: 'ix-chat-user-message',
  styleUrl: 'chat-user-message.scss',
  shadow: true,
})
export class ChatUserMessage {
  /**
   * Text displayed in the user message bubble. When not set, the default slot is used.
   * @since 5.0.0
   */
  @Prop() message?: string;

  /**
   * Show slotted actions without requiring hover or keyboard focus.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) showActions: boolean = false;

  /**
   * Number of attachments represented by the attachment overflow trigger.
   * @since 5.0.0
   */
  @Prop() attachmentCount?: number;

  /**
   * Label used for the attachment overflow trigger.
   * @since 5.0.0
   */
  @Prop() attachmentOverflowLabel: string = 'Attachments';

  /**
   * Event emitted when the attachment overflow expanded state changes.
   * @since 5.0.0
   */
  @Event() attachmentOverflowChange!: EventEmitter<boolean>;

  @State() hasActions = false;
  @State() hasAttachments = false;

  private getAttachmentCount() {
    const attachmentCount = Number(this.attachmentCount);
    return Number.isFinite(attachmentCount) && attachmentCount > 0
      ? attachmentCount
      : undefined;
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

  private renderAttachmentOverflow() {
    const attachmentCount = this.getAttachmentCount();

    if (!attachmentCount) {
      return null;
    }

    return (
      <ix-dropdown-button
        ariaLabelDropdownButton={`${this.attachmentOverflowLabel} (${attachmentCount})`}
        class="attachment-overflow"
        closeBehavior="inside"
        icon={iconAttach}
        label={`${this.attachmentOverflowLabel} (${attachmentCount})`}
        placement="bottom-end"
        variant="subtle-tertiary"
        onShowChanged={(event: CustomEvent<boolean>) =>
          this.attachmentOverflowChange.emit(event.detail)
        }
      >
        <slot name="attachment-overflow"></slot>
      </ix-dropdown-button>
    );
  }

  render() {
    return (
      <Host
        class={{
          'has-actions': this.hasActions,
          'has-attachments': this.hasAttachments,
          'has-attachment-overflow': !!this.getAttachmentCount(),
          'show-actions': this.showActions,
        }}
        tabIndex={this.hasActions ? 0 : undefined}
      >
        <div class="attachments">
          <slot
            name="attachments"
            onSlotchange={(event) => this.handleAttachmentsSlotChange(event)}
          ></slot>
        </div>
        {this.renderAttachmentOverflow()}
        <div class="message">
          <ix-typography class="message-text" format="body" textColor="std">
            <slot>{this.message}</slot>
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
