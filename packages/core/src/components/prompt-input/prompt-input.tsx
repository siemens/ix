/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconAdd,
  iconMicrophone,
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
  Watch,
  h,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';

let promptInputIds = 0;

/**
 * @since 5.0.0
 * @form-ready
 * @slot start - Element will be displayed in the left action area
 * @slot end - Element will be displayed in the right action area before the submit button
 */
@Component({
  tag: 'ix-prompt-input',
  styleUrl: 'prompt-input.scss',
  shadow: true,
  formAssociated: true,
})
export class PromptInput {
  @Element() hostElement!: HTMLIxPromptInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * The name of the prompt input.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The placeholder text for the prompt input.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) placeholder =
    'Enter a command, question or topic...';

  /**
   * The value of the prompt input.
   * @since 5.0.0
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * Specifies whether the prompt input is disabled.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Specifies whether the prompt input is readonly.
   * @since 5.0.0
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * Accessible label for the native textarea.
   * @since 5.0.0
   */
  @Prop() textareaLabel: string = 'Prompt input';

  /**
   * The maximum length of the prompt input.
   * @since 5.0.0
   */
  @Prop() maxLength?: number;

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
   * Disclaimer text displayed below the prompt input.
   * @since 5.0.0
   */
  @Prop() disclaimer =
    'This content is AI-generated. Always verify the information for accuracy.';

  /**
   * Event emitted when the value of the prompt input changes.
   * @since 5.0.0
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Event emitted when the prompt input loses focus.
   * @since 5.0.0
   */
  @Event() ixBlur!: EventEmitter<void>;

  /**
   * Event emitted when the prompt input loses focus and the value has changed.
   * @since 5.0.0
   */
  @Event() ixChange!: EventEmitter<string>;

  /**
   * Event emitted when the prompt is submitted by the send button or Enter key.
   * @since 5.0.0
   */
  @Event() promptSubmit!: EventEmitter<string>;

  /**
   * Event emitted when one of the default action buttons is clicked.
   * @since 5.0.0
   */
  @Event() actionClick!: EventEmitter<'start' | 'end'>;

  /** @internal */
  public initialValue?: string;

  private readonly textareaRef = makeRef<HTMLTextAreaElement>((textarea) => {
    this.updateTextareaHeight(textarea);
  });
  private readonly inputId = `ix-prompt-input-${promptInputIds++}`;

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
  }

  componentDidLoad() {
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
   * Returns the native textarea element used by the prompt input.
   * @since 5.0.0
   */
  @Method()
  async getNativeInputElement(): Promise<HTMLTextAreaElement> {
    return this.textareaRef.waitForCurrent();
  }

  /**
   * Focuses the prompt input.
   * @since 5.0.0
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  private canSubmit() {
    return !this.disabled && !this.readonly && this.value.trim().length > 0;
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

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
        }}
      >
        <div class="prompt-input">
          <textarea
            id={this.inputId}
            ref={this.textareaRef}
            readOnly={this.readonly}
            disabled={this.disabled}
            maxLength={this.maxLength}
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
