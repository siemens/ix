/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconCircleStop,
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
  Mixin,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import { createMutationObserver } from '../utils/mutation-observer';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { DefaultMixins } from '../utils/internal/component';
import { ComponentIdMixin } from '../utils/internal/mixins/id.mixin';

/**
 * @since 5.1.0
 * @form-ready
 * @slot follow-up - Optional refresh action and follow-up prompt buttons displayed above the chat input
 * @slot attachments - Attachments displayed above the prompt text area
 * @slot start - Element will be displayed in the left action area
 * @slot end - Element will be displayed in the right action area before the submit button
 */
@Component({
  tag: 'ix-chat-input',
  styleUrl: 'chat-input.scss',
  shadow: true,
  formAssociated: true,
})
export class ChatInput extends Mixin(...DefaultMixins, ComponentIdMixin) {
  @Element() override hostElement!: HTMLIxChatInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * The state of the chat input, which can be either 'input' or 'processing'.
   * @since 5.1.0
   */
  @Prop() state?: 'input' | 'processing' = 'input';

  /**
   * The name of the chat input.
   * @since 5.1.0
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The placeholder text for the chat input.
   * @since 5.1.0
   */
  @Prop({ reflect: true }) placeholder =
    'Enter a command, question or topic...';

  /**
   * The value of the chat input.
   * @since 5.1.0
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * Specifies whether the chat input is disabled.
   * @since 5.1.0
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Specifies whether the chat input is readonly.
   * @since 5.1.0
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * Accessible label for the native textarea.
   * @since 5.1.0
   */
  @Prop() textareaLabel: string = 'Chat input';

  /**
   * The maximum length of the chat input.
   * @since 5.1.0
   */
  @Prop() maxLength?: number;

  /**
   * Character limit used for the optional inline character limit message.
   * Falls back to `maxLength` when not set.
   * @since 5.1.0
   */
  @Prop() characterLimit?: number;

  /**
   * i18n label for the hard character limit message.
   * Use `{current}` and `{limit}` placeholders to place the values in any order.
   * @since 5.1.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-character-limit-reached' })
  i18nCharacterLimitReached =
    'Character limit reached ({current} / {limit} characters)';

  /**
   * i18n label for the soft character limit warning.
   * Use `{current}` and `{limit}` placeholders to place the values in any order.
   * @since 5.1.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-character-limit-warning' })
  i18nCharacterLimitWarning =
    "You're nearing the limit ({current} / {limit} characters)";

  /**
   * Percentage of the character limit that triggers the soft warning. Define a number between 0 and 1 (e.g. 0.8 for 80%).
   * @since 5.1.0
   */
  @Prop() characterLimitWarningThreshold: number = 0.9;

  /**
   * Minimum number of visible text rows.
   * @since 5.1.0
   */
  @Prop() minRows: number = 1;

  /**
   * Maximum number of visible text rows before the input becomes scrollable.
   * @since 5.1.0
   */
  @Prop() maxRows: number = 6;

  /**
   * If true, pressing Enter inserts a line break instead of submitting the prompt.
   * @since 5.1.0
   */
  @Prop() insertLineBreakOnEnter: boolean = false;

  /**
   * Disclaimer text displayed below the chat input.
   * @since 5.1.0
   */
  @Prop() disclaimer =
    'This content is AI-generated. Always verify the information for accuracy.';

  /**
   * Event emitted when the value of the chat input changes.
   * @since 5.1.0
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Event emitted when the chat input loses focus.
   * @since 5.1.0
   */
  @Event() ixBlur!: EventEmitter<void>;

  /**
   * Event emitted when the chat input loses focus and the value has changed.
   * @since 5.1.0
   */
  @Event() ixChange!: EventEmitter<string>;

  /**
   * Event emitted when the prompt is submitted by the send button or Enter key.
   * @since 5.1.0
   */
  @Event() promptSubmit!: EventEmitter<string>;

  /** @internal */
  public initialValue?: string;

  @State() hasAttachments = false;
  @State() hasAttachmentScrollbar = false;
  @State() hasFollowUp = false;

  private readonly attachmentsRef = makeRef<HTMLDivElement>((attachments) => {
    this.initAttachmentResizeObserver(attachments);
    this.scheduleAttachmentScrollbarUpdate();
  });
  private readonly textareaRef = makeRef<HTMLTextAreaElement>((textarea) => {
    this.updateTextareaHeight(textarea);
  });
  private attachmentResizeObserver?: ResizeObserver;
  private attachmentMutationObserver?: MutationObserver;
  private isAttachmentScrollbarUpdateQueued = false;

  override componentWillLoad() {
    super.componentWillLoad!();
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
    this.updateHasFollowUp();
  }

  override componentDidLoad() {
    super.componentDidLoad!();
    this.updateHasFollowUp();
    this.initAttachmentMutationObserver();
    this.scheduleAttachmentScrollbarUpdate();
    this.updateTextareaHeight();
  }

  override componentDidRender() {
    super.componentDidRender!();
    this.scheduleAttachmentScrollbarUpdate();
    this.updateTextareaHeight();
  }

  override disconnectedCallback() {
    super.disconnectedCallback!();
    this.attachmentResizeObserver?.disconnect();
    this.attachmentMutationObserver?.disconnect();
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
   * @since 5.1.0
   */
  @Method()
  async getNativeInputElement(): Promise<HTMLTextAreaElement> {
    return this.textareaRef.waitForCurrent();
  }

  /**
   * Focuses the chat input.
   * @since 5.1.0
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
      !this.isCharacterLimitReached()
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

  private getNormalizedCharacterLimitWarningThreshold() {
    if (!Number.isFinite(this.characterLimitWarningThreshold)) {
      return 0.9;
    }

    return Math.min(Math.max(this.characterLimitWarningThreshold, 0), 1);
  }

  private isSoftCharacterLimitWarning() {
    const limit = this.getCharacterLimit();

    if (!limit || this.isCharacterLimitReached()) {
      return false;
    }

    const warningLength = Math.ceil(
      limit * this.getNormalizedCharacterLimitWarningThreshold()
    );

    return this.value.length >= warningLength;
  }

  private isCharacterLimitReached() {
    const limit = this.getCharacterLimit();

    if (!limit) {
      return false;
    }

    return this.value.length >= limit;
  }

  private getCharacterLimitMessage() {
    const limit = this.getCharacterLimit();
    const current = this.value.length;

    if (!limit) {
      return undefined;
    }

    if (this.isCharacterLimitReached()) {
      return this.formatCharacterLimitMessage(
        this.i18nCharacterLimitReached,
        current,
        limit
      );
    }

    if (this.isSoftCharacterLimitWarning()) {
      return this.formatCharacterLimitMessage(
        this.i18nCharacterLimitWarning,
        current,
        limit
      );
    }

    return undefined;
  }

  private formatCharacterLimitMessage(
    template: string,
    current: number,
    limit: number
  ) {
    return template
      .split('{current}')
      .join(String(current))
      .split('{limit}')
      .join(String(limit));
  }

  private getCharacterLimitState(): 'soft' | 'hard' | undefined {
    if (this.isCharacterLimitReached()) {
      return 'hard';
    }

    if (this.isSoftCharacterLimitWarning()) {
      return 'soft';
    }

    return undefined;
  }

  private handleKeyDown(event: KeyboardEvent) {
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
    this.scheduleAttachmentScrollbarUpdate();
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

  private initAttachmentResizeObserver(attachments: HTMLDivElement) {
    this.attachmentResizeObserver?.disconnect();
    this.attachmentResizeObserver = new ResizeObserver(() =>
      this.scheduleAttachmentScrollbarUpdate()
    );
    this.attachmentResizeObserver.observe(attachments);
  }

  private initAttachmentMutationObserver() {
    this.attachmentMutationObserver = createMutationObserver(() => {
      this.updateHasFollowUp();
      this.scheduleAttachmentScrollbarUpdate();
    });
    this.attachmentMutationObserver.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }

  private scheduleAttachmentScrollbarUpdate() {
    if (this.isAttachmentScrollbarUpdateQueued) {
      return;
    }

    this.isAttachmentScrollbarUpdateQueued = true;
    requestAnimationFrameNoNgZone(() => {
      this.isAttachmentScrollbarUpdateQueued = false;
      this.updateAttachmentScrollbar();
    });
  }

  private updateAttachmentScrollbar() {
    const attachments = this.attachmentsRef.current;
    if (!attachments) {
      return;
    }

    const computedStyle = getComputedStyle(attachments);
    const hasHorizontalScrollbar =
      ['auto', 'scroll'].includes(computedStyle.overflowX) &&
      attachments.scrollWidth - attachments.clientWidth > 1;
    const hasVerticalScrollbar =
      ['auto', 'scroll'].includes(computedStyle.overflowY) &&
      attachments.scrollHeight - attachments.clientHeight > 1;
    const hasAttachmentScrollbar =
      this.hasAttachments && (hasHorizontalScrollbar || hasVerticalScrollbar);

    if (this.hasAttachmentScrollbar !== hasAttachmentScrollbar) {
      this.hasAttachmentScrollbar = hasAttachmentScrollbar;
    }
  }

  override render() {
    const disabledSubmitButton = !this.canSubmit() && this.state === 'input';
    const submitButtonIcon =
      this.state === 'input' ? iconSendRightFilled : iconCircleStop;

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
            ref={this.attachmentsRef}
            class={{
              attachments: true,
              'attachments--scroll': true,
              'has-attachment-scrollbar': this.hasAttachmentScrollbar,
              'has-attachments': this.hasAttachments,
            }}
          >
            <slot
              name="attachments"
              onSlotchange={(event) => this.handleAttachmentsSlotChange(event)}
            ></slot>
          </div>
          <textarea
            id={this.getHostElementId() + '-textarea'}
            ref={this.textareaRef}
            readOnly={this.readonly}
            disabled={this.disabled}
            maxLength={this.getCharacterLimit()}
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
                disabled={disabledSubmitButton}
                icon={submitButtonIcon}
                size="24"
                variant="tertiary"
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
