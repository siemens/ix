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
  iconCloseSmall,
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
import { createMutationObserver } from '../utils/mutation-observer';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import type { ChatInputAttachmentLayout } from './chat-input.types';

let chatInputIds = 0;

type AttachmentOverflowEntry = {
  canRemove: boolean;
  icon?: string;
  index: number;
  label: string;
  removeAriaLabel: string;
};

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
   * The state of the chat input, which can be either 'input' or 'processing'.
   * @since 5.0.0
   */
  @Prop() state?: 'input' | 'processing' = 'input';

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

  @State() hasAttachments = false;
  @State() hasAttachmentOverflow = false;
  @State() attachmentOverflowItemsCount = 0;
  @State() overflowingAttachmentCount = 0;
  @State() attachmentOverflowEntries: AttachmentOverflowEntry[] = [];
  @State() hasFollowUp = false;

  private readonly attachmentsRef = makeRef<HTMLDivElement>((attachments) => {
    this.initAttachmentResizeObserver(attachments);
    this.scheduleAttachmentOverflowUpdate();
  });
  private readonly attachmentOverflowRef =
    makeRef<HTMLIxDropdownButtonElement>();
  private readonly textareaRef = makeRef<HTMLTextAreaElement>((textarea) => {
    this.updateTextareaHeight(textarea);
  });
  private readonly inputId = `ix-chat-input-${chatInputIds++}`;
  private attachmentResizeObserver?: ResizeObserver;
  private attachmentMutationObserver?: MutationObserver;
  private isAttachmentOverflowUpdateQueued = false;

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
    this.updateHasFollowUp();
  }

  componentDidLoad() {
    this.updateHasFollowUp();
    this.initAttachmentMutationObserver();
    this.scheduleAttachmentOverflowUpdate();
    this.updateTextareaHeight();
  }

  componentDidRender() {
    this.scheduleAttachmentOverflowUpdate();
    this.updateTextareaHeight();
  }

  disconnectedCallback() {
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

  @Watch('attachmentLayout')
  onAttachmentLayoutChange() {
    this.scheduleAttachmentOverflowUpdate();
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

  private getNativeMaxLength() {
    return this.getCharacterLimit();
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

    if (!limit) {
      return undefined;
    }

    if (this.isCharacterLimitReached()) {
      return `Character limit reached (${this.value.length} / ${limit} characters)`;
    }

    if (this.isSoftCharacterLimitWarning()) {
      return `You're nearing the limit (${this.value.length} / ${limit} characters)`;
    }

    return undefined;
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
    this.scheduleAttachmentOverflowUpdate();
  }

  private handleAttachmentOverflowSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.attachmentOverflowItemsCount = slot.assignedElements({
      flatten: true,
    }).length;
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

  private getAttachmentElements() {
    return Array.from(
      this.hostElement.querySelectorAll<HTMLIxChatPromptAttachmentElement>(
        '[slot="attachments"]'
      )
    );
  }

  private getAttachmentOverflowEntry(
    element: HTMLIxChatPromptAttachmentElement,
    index: number
  ): AttachmentOverflowEntry {
    return {
      canRemove: !element.hideRemoveButton,
      icon: element.hideFileIcon ? undefined : element.icon,
      index,
      label: element.fileName || `Attachment ${index + 1}`,
      removeAriaLabel: element.removeAriaLabel,
    };
  }

  private updateAttachmentOverflowEntries(entries: AttachmentOverflowEntry[]) {
    const hasChanged =
      entries.length !== this.attachmentOverflowEntries.length ||
      entries.some((entry, index) => {
        const currentEntry = this.attachmentOverflowEntries[index];
        return (
          entry.canRemove !== currentEntry?.canRemove ||
          entry.icon !== currentEntry?.icon ||
          entry.index !== currentEntry.index ||
          entry.label !== currentEntry?.label ||
          entry.removeAriaLabel !== currentEntry?.removeAriaLabel
        );
      });

    if (hasChanged) {
      this.attachmentOverflowEntries = entries;
    }
  }

  private getAttachmentOverflowEntries(
    attachmentElements: HTMLIxChatPromptAttachmentElement[],
    overflowAttachmentElements: HTMLIxChatPromptAttachmentElement[]
  ) {
    return overflowAttachmentElements.map((element) =>
      this.getAttachmentOverflowEntry(
        element,
        Math.max(attachmentElements.indexOf(element), 0)
      )
    );
  }

  private getAttachmentOverflowItemsCount() {
    return this.hostElement.querySelectorAll('[slot="attachment-overflow"]')
      .length;
  }

  private initAttachmentResizeObserver(attachments: HTMLDivElement) {
    this.attachmentResizeObserver?.disconnect();
    this.attachmentResizeObserver = new ResizeObserver(() =>
      this.scheduleAttachmentOverflowUpdate()
    );
    this.attachmentResizeObserver.observe(attachments);
  }

  private initAttachmentMutationObserver() {
    this.attachmentMutationObserver = createMutationObserver(() => {
      this.updateHasFollowUp();
      this.scheduleAttachmentOverflowUpdate();
    });
    this.attachmentMutationObserver.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }

  private scheduleAttachmentOverflowUpdate() {
    if (this.isAttachmentOverflowUpdateQueued) {
      return;
    }

    this.isAttachmentOverflowUpdateQueued = true;
    requestAnimationFrameNoNgZone(() => {
      this.isAttachmentOverflowUpdateQueued = false;
      this.updateAttachmentOverflow();
    });
  }

  private restoreAttachmentVisibility(attachmentElements: HTMLElement[]) {
    attachmentElements.forEach((element) => {
      element.style.display = '';
    });
  }

  private isElementOverflowing(
    attachments: HTMLDivElement,
    element: HTMLElement
  ) {
    const attachmentsRect = attachments.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    return (
      elementRect.bottom - attachmentsRect.bottom > 1 ||
      elementRect.right - attachmentsRect.right > 1 ||
      attachmentsRect.left - elementRect.left > 1
    );
  }

  private getLayoutOverflowingAttachmentElements(
    attachments: HTMLDivElement,
    attachmentElements: HTMLIxChatPromptAttachmentElement[]
  ) {
    const overflowingAttachmentElements = attachmentElements.filter((element) =>
      this.isElementOverflowing(attachments, element)
    );

    if (overflowingAttachmentElements.length > 0) {
      return overflowingAttachmentElements;
    }

    if (
      attachments.scrollHeight - attachments.clientHeight > 1 ||
      attachments.scrollWidth - attachments.clientWidth > 1
    ) {
      return attachmentElements.slice(-1);
    }

    return [];
  }

  private getLayoutOverflowingAttachmentCount(
    attachments: HTMLDivElement,
    attachmentElements: HTMLIxChatPromptAttachmentElement[]
  ) {
    return this.getLayoutOverflowingAttachmentElements(
      attachments,
      attachmentElements
    ).length;
  }

  private measureAttachmentOverflow(
    attachments: HTMLDivElement,
    attachmentElements: HTMLIxChatPromptAttachmentElement[],
    attachmentOverflowItemsCount: number
  ) {
    const overflowButton = attachments.querySelector<HTMLElement>(
      '.attachment-overflow'
    );
    const overflowButtonDisplay = overflowButton?.style.display;

    this.restoreAttachmentVisibility(attachmentElements);
    if (overflowButton) {
      overflowButton.style.display = 'none';
    }

    const layoutOverflowingAttachmentElements =
      this.getLayoutOverflowingAttachmentElements(
        attachments,
        attachmentElements
      );
    const layoutOverflowingAttachmentCount =
      layoutOverflowingAttachmentElements.length;
    const hasOverflow =
      layoutOverflowingAttachmentCount > 0 || attachmentOverflowItemsCount > 0;

    if (!overflowButton) {
      return {
        entries: this.getAttachmentOverflowEntries(
          attachmentElements,
          layoutOverflowingAttachmentElements
        ),
        hasOverflow,
        overflowingAttachmentCount: layoutOverflowingAttachmentCount,
      };
    }

    overflowButton.style.display = overflowButtonDisplay ?? '';

    if (!hasOverflow) {
      return {
        entries: [],
        hasOverflow: false,
        overflowingAttachmentCount: 0,
      };
    }

    let hiddenAttachmentCount = 0;
    const visibleAttachmentElements = [...attachmentElements];
    const hiddenAttachmentElements: HTMLIxChatPromptAttachmentElement[] = [];

    while (
      visibleAttachmentElements.length > 0 &&
      (this.isElementOverflowing(attachments, overflowButton) ||
        this.getLayoutOverflowingAttachmentCount(
          attachments,
          visibleAttachmentElements
        ) > 0)
    ) {
      const attachmentElement = visibleAttachmentElements.pop();
      if (!attachmentElement) {
        break;
      }

      attachmentElement.style.display = 'none';
      hiddenAttachmentElements.push(attachmentElement);
      hiddenAttachmentCount += 1;
    }

    return {
      entries: this.getAttachmentOverflowEntries(
        attachmentElements,
        hiddenAttachmentElements.reverse()
      ),
      hasOverflow: true,
      overflowingAttachmentCount: hiddenAttachmentCount,
    };
  }

  private updateAttachmentOverflow() {
    const attachments = this.attachmentsRef.current;
    if (!attachments) {
      return;
    }

    const attachmentOverflowItemsCount = this.getAttachmentOverflowItemsCount();
    if (this.attachmentOverflowItemsCount !== attachmentOverflowItemsCount) {
      this.attachmentOverflowItemsCount = attachmentOverflowItemsCount;
    }

    const attachmentElements = this.getAttachmentElements();
    if (this.attachmentLayout !== 'wrap' || attachmentElements.length === 0) {
      this.restoreAttachmentVisibility(attachmentElements);
      this.updateAttachmentOverflowEntries([]);
      if (this.hasAttachmentOverflow) {
        this.hasAttachmentOverflow = false;
      }
      if (this.overflowingAttachmentCount !== 0) {
        this.overflowingAttachmentCount = 0;
      }
      return;
    }

    if (attachments.clientHeight === 0 || attachments.clientWidth === 0) {
      return;
    }

    const { entries, hasOverflow, overflowingAttachmentCount } =
      this.measureAttachmentOverflow(
        attachments,
        attachmentElements,
        attachmentOverflowItemsCount
      );

    this.updateAttachmentOverflowEntries(entries);
    if (this.hasAttachmentOverflow !== hasOverflow) {
      this.hasAttachmentOverflow = hasOverflow;
    }
    if (this.overflowingAttachmentCount !== overflowingAttachmentCount) {
      this.overflowingAttachmentCount = overflowingAttachmentCount;
    }
  }

  private async closeAttachmentOverflow() {
    const dropdown =
      await this.attachmentOverflowRef.current?.getDropdownReference();
    if (dropdown) {
      dropdown.show = false;
    }
  }

  private handleAttachmentOverflowItemClick(index: number) {
    this.getAttachmentElements()[index]?.click();
    this.closeAttachmentOverflow();
  }

  private handleAttachmentOverflowRemoveClick(
    event: MouseEvent,
    index: number
  ) {
    event.stopPropagation();
    this.getAttachmentElements()[index]?.dispatchEvent(
      new CustomEvent('removeClick', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private renderAttachmentOverflowItems() {
    return this.attachmentOverflowEntries.map((entry) => (
      <div
        class="attachment-overflow-menu-item"
        data-attachment-overflow-generated
        data-attachment-overflow-label={entry.label}
      >
        <ix-dropdown-item
          class="attachment-overflow-generated-item"
          icon={entry.icon}
          ariaLabelButton={entry.label}
          onClick={() => this.handleAttachmentOverflowItemClick(entry.index)}
        >
          {entry.label}
        </ix-dropdown-item>
        {entry.canRemove && (
          <ix-icon-button
            aria-label={entry.removeAriaLabel}
            class="attachment-overflow-remove-button"
            icon={iconCloseSmall}
            size="24"
            variant="subtle-tertiary"
            onClick={(event: MouseEvent) =>
              this.handleAttachmentOverflowRemoveClick(event, entry.index)
            }
          ></ix-icon-button>
        )}
      </div>
    ));
  }

  private getAttachmentOverflowCount() {
    const attachmentOverflowCount = Number(this.attachmentOverflowCount);
    if (
      Number.isFinite(attachmentOverflowCount) &&
      attachmentOverflowCount > 0
    ) {
      return attachmentOverflowCount;
    }

    const overflowCount =
      this.attachmentOverflowItemsCount + this.overflowingAttachmentCount;

    return overflowCount > 0 ? overflowCount : undefined;
  }

  private renderAttachmentOverflow() {
    if (!this.hasAttachmentOverflow || this.attachmentLayout !== 'wrap') {
      return null;
    }

    const attachmentOverflowCount = this.getAttachmentOverflowCount() ?? 1;

    return (
      <ix-dropdown-button
        ref={this.attachmentOverflowRef}
        ariaLabelDropdownButton={`Show ${attachmentOverflowCount} more attachments`}
        class="attachment-overflow"
        label={`+ ${attachmentOverflowCount} ${this.attachmentOverflowLabel}`}
        placement="bottom-end"
        variant="tertiary"
        onShowChanged={(event: CustomEvent<boolean>) =>
          this.attachmentOverflowChange.emit(event.detail)
        }
      >
        {this.renderAttachmentOverflowItems()}
        <slot
          name="attachment-overflow"
          onSlotchange={(event) =>
            this.handleAttachmentOverflowSlotChange(event)
          }
        ></slot>
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
            ref={this.attachmentsRef}
            class={{
              attachments: true,
              'attachments--wrap': this.attachmentLayout === 'wrap',
              'attachments--scroll': this.attachmentLayout === 'scroll',
              'has-attachment-overflow': this.hasAttachmentOverflow,
              'has-attachments':
                this.hasAttachments || this.hasAttachmentOverflow,
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
                icon={
                  this.state === 'input' ? iconSendRightFilled : iconCircleStop
                }
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
