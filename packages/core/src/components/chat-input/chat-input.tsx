/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconError,
  iconInfo,
  iconSendRightFilled,
} from '@siemens/ix-icons/icons';
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import type {
  CharacterLimitMode,
  ChatInputAttachmentLayout,
} from './chat-input.types';

let chatInputIds = 0;

/**
 * @since 5.0.0
 * @form-ready
 * @slot follow-up - Optional refresh action and follow-up prompt buttons displayed above the chat input
 * @slot attachments - Attachments displayed above the prompt text area
 * @slot attachment-overflow - Optional ix-dropdown-item elements displayed in the attachment overflow dropdown
 * @slot start - Element will be displayed in the left action area
 * @slot end - Element will be displayed in the right action area before the submit button
 */
@Component({
  tag: 'ix-chat-input',
  styleUrl: 'chat-input.scss',
  shadow: true,
  formAssociated: true,
})
export class ChatInput {
  @Element() hostElement!: HTMLIxChatInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * The name of the chat input.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The placeholder text for the chat input.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) placeholder =
    'Enter a command, question or topic...';

  /**
   * The value of the chat input.
   * @since 5.0.0
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * Specifies whether the chat input is disabled.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Specifies whether the chat input is readonly.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * Accessible label for the native textarea.
   * @since 5.0.0
   */
  @Prop() textareaLabel: string = 'Chat input';

  /**
   * The maximum length of the chat input.
   * @since 5.0.0
   */
  @Prop() maxLength?: number;

  /**
   * Character limit used for the optional inline character limit message.
   * Falls back to `maxLength` when not set.
   * @since 5.0.0
   */
  @Prop() characterLimit?: number;

  /**
   * Controls whether the character limit only warns or prevents further input.
   * @since 5.0.0
   */
  @Prop() characterLimitMode: CharacterLimitMode = 'hard';

  /**
   * Percentage of the character limit that triggers the soft warning.
   * @since 5.0.0
   */
  @Prop() characterLimitWarningThreshold: number = 0.9;

  /**
   * Layout used for attachments in the attachments slot.
   * @since 5.0.0
   */
  @Prop() attachmentLayout: ChatInputAttachmentLayout = 'wrap';

  /**
   * Number of attachments represented by the attachment overflow trigger.
   * @since 5.0.0
   */
  @Prop() attachmentOverflowCount?: number;

  /**
   * Label displayed after the attachment overflow count.
   * @since 5.0.0
   */
  @Prop() attachmentOverflowLabel: string = 'more';

  /**
   * Minimum number of visible text rows.
   * @since 5.0.0
   */
  @Prop() minRows: number = 1;

  /**
   * Maximum number of visible text rows before the input becomes scrollable.
   * @since 5.0.0
   */
  @Prop() maxRows: number = 6;

  /**
   * If true, pressing Enter inserts a line break instead of submitting the prompt.
   * @since 5.0.0
   */
  @Prop() insertLineBreakOnEnter: boolean = false;

  /**
   * Disclaimer text displayed below the chat input.
   * @since 5.0.0
   */
  @Prop() disclaimer =
    'This content is AI-generated. Always verify the information for accuracy.';

  /**
   * Event emitted when the value of the chat input changes.
   * @since 5.0.0
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Event emitted when the chat input loses focus.
   * @since 5.0.0
   */
  @Event() ixBlur!: EventEmitter<void>;

  /**
   * Event emitted when the chat input loses focus and the value has changed.
   * @since 5.0.0
   */
  @Event() ixChange!: EventEmitter<string>;

  /**
   * Event emitted when the prompt is submitted by the send button or Enter key.
   * @since 5.0.0
   */
  @Event() promptSubmit!: EventEmitter<string>;

  /**
   * Event emitted when the attachment overflow expanded state changes.
   * @since 5.0.0
   */
  @Event() attachmentOverflowChange!: EventEmitter<boolean>;

  /** @internal */
  public initialValue?: string;

  @State() hasAttemptedCharacterLimitExceeded = false;
  @State() hasAttachments = false;
  @State() hasFollowUp = false;

  private readonly textareaRef = makeRef<HTMLTextAreaElement>((textarea) => {
    this.updateTextareaHeight(textarea);
  });
  private readonly inputId = `ix-chat-input-${chatInputIds++}`;

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
    this.updateHasFollowUp();
  }

  componentDidLoad() {
    this.updateHasFollowUp();
    this.updateTextareaHeight();
  }

  componentDidRender() {
    this.updateTextareaHeight();
  }

  @Watch('value')
  onValueChange(value: string) {
    this.formInternals.setFormValue(value);
    this.updateTextareaHeight();
  }

  @Watch('minRows')
  @Watch('maxRows')
  onRowsChange() {
    this.updateTextareaHeight();
  }

  updateFormInternalValue(value: string) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  /** @internal */
  @Method()
  async getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return this.formInternals.form;
  }

  /**
   * Returns the native textarea element used by the chat input.
   * @since 5.0.0
   */
  @Method()
  async getNativeInputElement(): Promise<HTMLTextAreaElement> {
    return this.textareaRef.waitForCurrent();
  }

  /**
   * Focuses the chat input.
   * @since 5.0.0
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  private canSubmit() {
    return (
      !this.disabled &&
      !this.readonly &&
      this.value.trim().length > 0 &&
      !this.isHardCharacterLimitExceeded()
    );
  }

  private emitIxChangeIfNeeded() {
    if (this.initialValue !== this.value) {
      this.ixChange.emit(this.value);
      this.initialValue = this.value;
    }
  }

  private submitPrompt() {
    if (!this.canSubmit()) {
      return;
    }

    this.emitIxChangeIfNeeded();
    this.promptSubmit.emit(this.value);
  }

  private updateTextareaHeight(textarea = this.textareaRef.current) {
    if (!textarea) {
      return;
    }

    const computedStyle = getComputedStyle(textarea);
    const lineHeight = Number.parseFloat(computedStyle.lineHeight) || 24;
    const minRows = Math.max(this.minRows, 1);
    const maxRows = Math.max(this.maxRows, minRows);
    const borderHeight =
      textarea.offsetHeight - textarea.clientHeight ||
      Number.parseFloat(computedStyle.borderTopWidth) +
        Number.parseFloat(computedStyle.borderBottomWidth);
    const minHeight = lineHeight * minRows + borderHeight;
    const maxHeight = lineHeight * maxRows + borderHeight;

    textarea.style.height = 'auto';
    textarea.style.minHeight = `${minHeight}px`;

    const nextHeight = Math.min(
      Math.max(textarea.scrollHeight + borderHeight, minHeight),
      maxHeight
    );

    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY =
      textarea.scrollHeight + borderHeight > maxHeight ? 'auto' : 'hidden';
  }

  private getCharacterLimit() {
    const limit = this.characterLimit ?? this.maxLength;
    return typeof limit === 'number' && Number.isFinite(limit) && limit > 0
      ? limit
      : undefined;
  }

  private getNativeMaxLength() {
    const limit = this.getCharacterLimit();

    if (this.characterLimitMode === 'hard') {
      return limit;
    }

    return undefined;
  }

  private getNormalizedCharacterLimitWarningThreshold() {
    if (!Number.isFinite(this.characterLimitWarningThreshold)) {
      return 0.9;
    }

    return Math.min(Math.max(this.characterLimitWarningThreshold, 0), 1);
  }

  private isSoftCharacterLimitWarning() {
    const limit = this.getCharacterLimit();

    if (!limit || this.characterLimitMode !== 'soft') {
      return false;
    }

    const warningLength = Math.ceil(
      limit * this.getNormalizedCharacterLimitWarningThreshold()
    );

    return this.value.length >= warningLength;
  }

  private isHardCharacterLimitExceeded() {
    const limit = this.getCharacterLimit();

    if (!limit || this.characterLimitMode !== 'hard') {
      return false;
    }

    return this.value.length > limit;
  }

  private isHardCharacterLimitWarning() {
    const limit = this.getCharacterLimit();

    if (!limit || this.characterLimitMode !== 'hard') {
      return false;
    }

    return this.hasAttemptedCharacterLimitExceeded || this.value.length > limit;
  }

  private getCharacterLimitMessage() {
    const limit = this.getCharacterLimit();

    if (!limit) {
      return undefined;
    }

    if (this.isHardCharacterLimitWarning()) {
      return `Character limit exceeded (${this.value.length} / ${limit} characters)`;
    }

    if (this.isSoftCharacterLimitWarning()) {
      return `You're nearing the limit (${this.value.length} / ${limit} characters)`;
    }

    return undefined;
  }

  private getCharacterLimitState(): CharacterLimitMode | undefined {
    if (this.isHardCharacterLimitWarning()) {
      return 'hard';
    }

    if (this.isSoftCharacterLimitWarning()) {
      return 'soft';
    }

    return undefined;
  }

  private handleCharacterLimitKeyDown(event: KeyboardEvent) {
    const limit = this.getCharacterLimit();

    if (
      !limit ||
      this.characterLimitMode !== 'hard' ||
      event.key.length !== 1 ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey
    ) {
      return;
    }

    const textarea = event.target as HTMLTextAreaElement;
    const selectionLength = textarea.selectionEnd - textarea.selectionStart;
    const nextLength = textarea.value.length - selectionLength + 1;

    if (nextLength > limit) {
      event.preventDefault();
      this.hasAttemptedCharacterLimitExceeded = true;
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    this.handleCharacterLimitKeyDown(event);

    if (
      event.key !== 'Enter' ||
      event.shiftKey ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      this.insertLineBreakOnEnter
    ) {
      return;
    }

    event.preventDefault();
    this.submitPrompt();
  }

  private renderCharacterLimit() {
    const message = this.getCharacterLimitMessage();
    const state = this.getCharacterLimitState();

    if (!message || !state) {
      return null;
    }

    return (
      <ix-typography
        class={{
          'character-limit': true,
          'character-limit--soft': state === 'soft',
          'character-limit--hard': state === 'hard',
        }}
        textColor={state === 'hard' ? 'alarm' : 'std'}
      >
        <ix-icon
          aria-hidden="true"
          name={state === 'hard' ? iconError : iconInfo}
          size="16"
        ></ix-icon>
        {message}
      </ix-typography>
    );
  }

  private handleAttachmentsSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasAttachments =
      slot.assignedElements({
        flatten: true,
      }).length > 0;
  }

  private handleFollowUpSlotChange(event: Event) {
    this.hasFollowUp = this.hasAssignedContent(event.target as HTMLSlotElement);
  }

  private hasAssignedContent(slot: HTMLSlotElement) {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }

  private updateHasFollowUp() {
    this.hasFollowUp =
      this.hostElement.querySelectorAll('[slot="follow-up"]').length > 0;
  }

  private getAttachmentOverflowCount() {
    const attachmentOverflowCount = Number(this.attachmentOverflowCount);
    return Number.isFinite(attachmentOverflowCount) &&
      attachmentOverflowCount > 0
      ? attachmentOverflowCount
      : undefined;
  }

  private renderAttachmentOverflow() {
    const attachmentOverflowCount = this.getAttachmentOverflowCount();

    if (!attachmentOverflowCount || this.attachmentLayout !== 'wrap') {
      return null;
    }

    return (
      <ix-dropdown-button
        ariaLabelDropdownButton={`Show ${attachmentOverflowCount} more attachments`}
        class="attachment-overflow"
        closeBehavior="inside"
        label={`+ ${attachmentOverflowCount} ${this.attachmentOverflowLabel}`}
        placement="bottom-end"
        variant="tertiary"
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
          disabled: this.disabled,
          readonly: this.readonly,
          'has-follow-up': this.hasFollowUp,
        }}
      >
        <div class="follow-up-prompts">
          <slot
            name="follow-up"
            onSlotchange={(event) => this.handleFollowUpSlotChange(event)}
          ></slot>
        </div>
        <div class="chat-input">
          <div
            class={{
              attachments: true,
              'attachments--wrap': this.attachmentLayout === 'wrap',
              'attachments--scroll': this.attachmentLayout === 'scroll',
              'has-attachments':
                this.hasAttachments || !!this.getAttachmentOverflowCount(),
            }}
          >
            <slot
              name="attachments"
              onSlotchange={(event) => this.handleAttachmentsSlotChange(event)}
            ></slot>
            {this.renderAttachmentOverflow()}
          </div>
          <textarea
            id={this.inputId}
            ref={this.textareaRef}
            readOnly={this.readonly}
            disabled={this.disabled}
            maxLength={this.getNativeMaxLength()}
            rows={this.minRows}
            value={this.value}
            placeholder={this.placeholder}
            aria-label={this.textareaLabel}
            onFocus={() => {
              this.initialValue = this.value;
            }}
            onInput={(event) => {
              const textarea = event.target as HTMLTextAreaElement;
              this.updateFormInternalValue(textarea.value);
              this.valueChange.emit(textarea.value);
              this.hasAttemptedCharacterLimitExceeded = false;
              this.updateTextareaHeight(textarea);
            }}
            onKeyDown={(event) => this.handleKeyDown(event)}
            onBlur={() => {
              this.ixBlur.emit();
              this.emitIxChangeIfNeeded();
            }}
          ></textarea>
          {this.renderCharacterLimit()}
          <div class="action-row">
            <div class="left-actions">
              <slot name="start"></slot>
            </div>
            <div class="right-actions">
              <slot name="end"></slot>
              <ix-icon-button
                aria-label="Submit prompt"
                class="submit-button"
                disabled={!this.canSubmit()}
                icon={iconSendRightFilled}
                size="24"
                variant="subtle-tertiary"
                onClick={() => this.submitPrompt()}
              ></ix-icon-button>
            </div>
          </div>
        </div>
        {this.disclaimer && (
          <ix-typography class="disclaimer" format="body-sm" textColor="soft">
            {this.disclaimer}
          </ix-typography>
        )}
      </Host>
    );
  }
}
