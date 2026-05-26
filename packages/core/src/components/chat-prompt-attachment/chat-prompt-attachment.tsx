/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconCloseSmall,
  iconRefresh,
  iconTxtDocument,
} from '@siemens/ix-icons/icons';
import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import type {
  ChatPromptAttachmentStatus,
  ChatPromptAttachmentVariant,
} from './chat-prompt-attachment.types';

/**
 * @since 5.0.0
 */
@Component({
  tag: 'ix-chat-prompt-attachment',
  styleUrl: 'chat-prompt-attachment.scss',
  shadow: true,
})
export class ChatPromptAttachment {
  /**
   * Name of the attached file.
   * @since 5.0.0
   */
  @Prop() fileName: string = '';

  /**
   * Upload status of the attachment.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) status: ChatPromptAttachmentStatus = 'default';

  /**
   * Visual variant of the attachment.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) variant: ChatPromptAttachmentVariant = 'prompt';

  /**
   * Icon displayed before the file name.
   * @since 5.0.0
   */
  @Prop() icon: string = iconTxtDocument;

  /**
   * Hide the leading file icon for default attachments.
   * @since 5.0.0
   */
  @Prop() hideFileIcon: boolean = false;

  /**
   * Hide the remove action.
   * @since 5.0.0
   */
  @Prop() hideRemoveButton: boolean = false;

  /**
   * Enable preview interaction for default attachments.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) previewSupported: boolean = false;

  /**
   * Text displayed while the attachment is uploading.
   * @since 5.0.0
   */
  @Prop() loadingLabel: string = 'Uploading';

  /**
   * Text displayed when the attachment upload failed.
   * @since 5.0.0
   */
  @Prop() failedLabel: string = 'Upload failed';

  /**
   * Accessible label for the remove action.
   * @since 5.0.0
   */
  @Prop() removeAriaLabel: string = 'Remove attachment';

  /**
   * Accessible label for the retry action.
   * @since 5.0.0
   */
  @Prop() retryAriaLabel: string = 'Retry attachment upload';

  /**
   * Event emitted when the attachment is clicked.
   * @since 5.0.0
   */
  @Event() attachmentClick!: EventEmitter<void>;

  /**
   * Event emitted when the remove action is clicked.
   * @since 5.0.0
   */
  @Event() removeClick!: EventEmitter<void>;

  /**
   * Event emitted when the retry action is clicked.
   * @since 5.0.0
   */
  @Event() retryClick!: EventEmitter<void>;

  private canPreview() {
    return this.previewSupported && this.status === 'default';
  }

  private splitFileName() {
    const fileName = this.fileName.trim();
    const extensionStart = fileName.lastIndexOf('.');

    if (extensionStart <= 0 || extensionStart === fileName.length - 1) {
      return { name: fileName, extension: '' };
    }

    return {
      name: fileName.slice(0, extensionStart),
      extension: fileName.slice(extensionStart),
    };
  }

  private renderFileName() {
    const { name, extension } = this.splitFileName();

    return (
      <span class="file-name" title={this.fileName}>
        <span class="file-name__base">{name || this.fileName}</span>
        {!!extension && <span class="file-name__extension">{extension}</span>}
      </span>
    );
  }

  private renderStatusContent() {
    if (this.status === 'loading') {
      return (
        <span class="status-content">
          <ix-spinner size="xx-small" variant="primary"></ix-spinner>
          <span class="status-label">{this.loadingLabel}</span>
        </span>
      );
    }

    if (this.status === 'failed') {
      return <span class="status-label">{this.failedLabel}</span>;
    }

    return (
      <span class="file-content">
        {!this.hideFileIcon && <ix-icon name={this.icon} size="16"></ix-icon>}
        {this.renderFileName()}
      </span>
    );
  }

  private handleHostClick() {
    if (this.canPreview()) {
      this.attachmentClick.emit();
    }
  }

  private handleHostKeyDown(event: KeyboardEvent) {
    if (
      event.target !== event.currentTarget ||
      (event.key !== 'Enter' && event.key !== ' ')
    ) {
      return;
    }

    event.preventDefault();

    if (this.canPreview()) {
      this.attachmentClick.emit();
    }
  }

  render() {
    const isFailed = this.status === 'failed';
    const isLoading = this.status === 'loading';
    const canPreview = this.canPreview();
    const isSent = this.variant === 'sent';

    return (
      <Host
        class={{
          failed: isFailed,
          loading: isLoading,
          'preview-supported': canPreview,
          sent: isSent,
          'has-remove-button': !this.hideRemoveButton,
        }}
        role={canPreview ? 'button' : undefined}
        tabIndex={canPreview ? 0 : undefined}
        onClick={() => this.handleHostClick()}
        onKeyDown={(event: KeyboardEvent) => this.handleHostKeyDown(event)}
      >
        <span class="content">{this.renderStatusContent()}</span>
        {isFailed && (
          <ix-icon-button
            aria-label={this.retryAriaLabel}
            class="retry-button"
            icon={iconRefresh}
            size="16"
            variant="subtle-tertiary"
            onClick={(event: MouseEvent) => {
              event.stopPropagation();
              this.retryClick.emit();
            }}
          ></ix-icon-button>
        )}
        {!this.hideRemoveButton && (
          <ix-icon-button
            aria-label={this.removeAriaLabel}
            class="remove-button"
            icon={iconCloseSmall}
            size="16"
            variant="subtle-tertiary"
            onClick={(event: MouseEvent) => {
              event.stopPropagation();
              this.removeClick.emit();
            }}
          ></ix-icon-button>
        )}
      </Host>
    );
  }
}
