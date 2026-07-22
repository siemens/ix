/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconError, iconTxtDocument } from '@siemens/ix-icons/icons';
import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import type { ChatAttachmentStatus } from './chat-attachment.types';

/**
 * @since 5.2.0
 */
@Component({
  tag: 'ix-chat-attachment',
  styleUrl: 'chat-attachment.scss',
  shadow: true,
})
export class ChatAttachment {
  /**
   * Name of the attached file.
   */
  @Prop() fileName: string = '';

  /**
   * Upload status of the attachment.
   */
  @Prop({ reflect: true }) status: ChatAttachmentStatus = 'default';

  /**
   * Icon displayed before the file name.
   */
  @Prop() icon: string = iconTxtDocument;

  /**
   * Hide the remove action.
   */
  @Prop() hideRemoveButton: boolean = false;

  /**
   * Enable preview interaction for default attachments.
   */
  @Prop({ reflect: true }) previewSupported: boolean = false;

  /**
   * Accessible label for the remove action.
   */
  @Prop() removeAriaLabel: string = 'Remove attachment';

  /**
   * Event emitted when the attachment is clicked.
   */
  @Event() attachmentClick!: EventEmitter<void>;

  /**
   * Event emitted when the remove action is clicked.
   */
  @Event() removeClick!: EventEmitter<void>;

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

  private getChipVariant() {
    if (this.status === 'failed') {
      return 'alarm';
    }

    return 'neutral';
  }

  private renderChipContent() {
    if (this.status === 'loading') {
      return (
        <span class="status-content">
          <ix-spinner size="xx-small" variant="primary"></ix-spinner>
          <span class="status-label">{this.fileName}</span>
        </span>
      );
    }

    if (this.status === 'failed') {
      return <span class="status-label">{this.fileName}</span>;
    }

    return this.renderFileName();
  }

  private handleAttachmentClick() {
    if (this.canPreview()) {
      this.attachmentClick.emit();
    }
  }

  private getIcon() {
    if (this.status === 'default') {
      return this.icon;
    }

    if (this.status === 'loading') {
      return undefined;
    }

    if (this.status === 'failed') {
      return iconError;
    }

    return this.icon;
  }

  render() {
    const isFailed = this.status === 'failed';
    const isLoading = this.status === 'loading';
    const canPreview = this.canPreview();
    return (
      <Host
        class={{
          failed: isFailed,
          loading: isLoading,
          'preview-supported': canPreview,
          'has-remove-button': !this.hideRemoveButton,
        }}
      >
        <ix-chip
          aria-label={canPreview ? this.fileName : undefined}
          ariaLabelCloseButton={this.removeAriaLabel}
          class="attachment-chip"
          closable={!this.hideRemoveButton}
          icon={this.getIcon()}
          variant={this.getChipVariant()}
          outline
          onClick={() => this.handleAttachmentClick()}
          onCloseChip={() => this.removeClick.emit()}
          inactive={!canPreview}
        >
          <span class="content">{this.renderChipContent()}</span>
        </ix-chip>
      </Host>
    );
  }
}
