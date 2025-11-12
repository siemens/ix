/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/input';
import { makeRef } from '../utils/make-ref';
import { TextareaElement } from './input.fc';
import {
  checkInternalValidity,
  mapValidationResult,
  onInputBlur,
  syncValidationClasses,
  resetInputComponent,
  isTouchedUtil,
  isDirtyUtil,
} from './input.util';
import type { TextareaResizeBehavior } from './textarea.types';

/**
 * @form-ready
 */
@Component({
  tag: 'ix-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
  formAssociated: true,
})
export class Textarea implements IxInputFieldComponent<string> {
  @Element() hostElement!: HTMLIxTextareaElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * The name of the textarea field.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The placeholder text for the textarea field.
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * The value of the textarea field.
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  @Watch('value') watchValuePropHandler(newValue: string) {
    if (this.isResetting) {
      return;
    }
    this.dirty = newValue !== this.initialValue;
    this.updateFormInternalValue(newValue);
    this.valueChange.emit(newValue);
  }

  /**
   * Determines if the textarea field is required.
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Determines if the textarea field is disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * Determines if the textarea field is readonly.
   */
  @Prop() readonly: boolean = false;

  /**
   * The helper text for the textarea field.
   */
  @Prop() helperText?: string;

  /**
   * The info text for the textarea field.
   */
  @Prop() infoText?: string;

  /**
   * Determines if the text should be displayed as a tooltip.
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * The valid text for the textarea field.
   */
  @Prop() validText?: string;

  /**
   * The warning text for the textarea field.
   */
  @Prop() warningText?: string;

  /**
   * The label for the textarea field.
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * The error text for the textarea field.
   */
  @Prop() invalidText?: string;

  /**
   * The height of the textarea field (e.g. "52px").
   */
  @Prop() textareaHeight?: string;

  /**
   * The width of the textarea field (e.g. "200px").
   */
  @Prop() textareaWidth?: string;

  /**
   * The height of the textarea specified by number of rows.
   */
  @Prop() textareaRows?: number;

  /**
   * The width of the textarea specified by number of characters.
   */
  @Prop() textareaCols?: number;

  /**
   * Determines the resize behavior of the textarea field.
   * Resizing can be enabled in one direction, both directions or completely disabled.
   */
  @Prop() resizeBehavior: TextareaResizeBehavior = 'both';

  /**
   * The maximum length of the textarea field.
   */
  @Prop() maxLength?: number;

  /**
   * The minimum length of the textarea field.
   */
  @Prop() minLength?: number;

  /**
   * Event emitted when the value of the textarea field changes.
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Event emitted when the validity state of the textarea field changes.
   */
  @Event() validityStateChange!: EventEmitter<ValidityState>;

  /**
   * Event emitted when the textarea field loses focus.
   */
  @Event() ixBlur!: EventEmitter<void>;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() isInvalidByRequired = false;

  private readonly textAreaRef = makeRef<HTMLTextAreaElement>(() => {
    this.initResizeObserver();
  });
  private touched = false;
  private dirty = false;
  private isResetting = false;
  private initialValue: string = '';
  private resizeObserver?: ResizeObserver;
  private isManuallyResized = false;
  private manualHeight?: string;
  private manualWidth?: string;
  private isProgrammaticResize = false;

  @HookValidationLifecycle()
  updateClassMappings(result: ValidationResults) {
    mapValidationResult(this, result);
  }

  @Watch('textareaHeight')
  @Watch('textareaWidth')
  onDimensionPropsChange() {
    this.isManuallyResized = false;
    this.manualHeight = undefined;
    this.manualWidth = undefined;
    this.isProgrammaticResize = true;
  }

  @Watch('resizeBehavior')
  onResizeBehaviorChange() {
    this.initResizeObserver();
  }

  componentWillLoad() {
    this.initialValue = this.value;
    this.updateFormInternalValue(this.value);
  }

  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }

  private initResizeObserver() {
    this.resizeObserver?.disconnect();

    const textarea = this.textAreaRef.current;
    if (!textarea) return;

    if (this.resizeBehavior === 'none') return;

    let isInitialResize = true;

    this.resizeObserver = new ResizeObserver(() => {
      const textarea = this.textAreaRef.current;
      if (!textarea) return;

      if (isInitialResize) {
        isInitialResize = false;
        return;
      }

      if (this.isProgrammaticResize) {
        this.isProgrammaticResize = false;
        return;
      }

      this.isManuallyResized = true;
      this.manualHeight = textarea.style.height;
      this.manualWidth = textarea.style.width;
    });

    this.resizeObserver.observe(textarea);
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

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(!!this.value);
  }

  /**
   * Get the native textarea element.
   */
  @Method()
  getNativeInputElement(): Promise<HTMLTextAreaElement> {
    return this.textAreaRef.waitForCurrent();
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  /**
   * Check if the textarea field has been touched.
   * @internal
   * */
  @Method()
  isTouched(): Promise<boolean> {
    return isTouchedUtil(this.touched);
  }

  /**
   * Returns whether the textarea has been modified from its initial value.
   * @internal
   */
  @Method()
  isDirty(): Promise<boolean> {
    return isDirtyUtil(this.dirty);
  }

  /**
   * Returns the validity state of the textarea field.
   */
  @Method()
  async getValidityState(): Promise<ValidityState> {
    const textarea = await this.textAreaRef.waitForCurrent();
    return Promise.resolve(textarea.validity);
  }

  /**
   * Synchronizes CSS validation classes with the component's validation state.
   * This method ensures proper visual styling based on validation status, particularly for Vue.
   * @internal
   */
  @Method()
  async syncValidationClasses(): Promise<void> {
    return syncValidationClasses(this);
  }

  /**
   * Resets the textarea to its original untouched state and initial value.
   * This clears the value, removes touched and dirty states, and recomputes validity.
   */
  @Method()
  async reset(): Promise<void> {
    await resetInputComponent(this, this.initialValue, '', this.textAreaRef.current);
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
        }}
      >
        <ix-field-wrapper
          required={this.required}
          label={this.label}
          helperText={this.helperText}
          invalidText={this.invalidText}
          infoText={this.infoText}
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          isInvalid={this.isInvalid}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          controlRef={this.textAreaRef}
        >
          {!!this.maxLength && this.maxLength > 0 && (
            <ix-typography
              class="bottom-text"
              slot="bottom-right"
              textColor="soft"
            >
              {(this.value ?? '').length}/{this.maxLength}
            </ix-typography>
          )}
          <div class="input-wrapper">
            <TextareaElement
              minLength={this.minLength}
              maxLength={this.maxLength}
              textareaCols={this.textareaCols}
              textareaRows={this.textareaRows}
              textareaHeight={
                this.isManuallyResized ? this.manualHeight : this.textareaHeight
              }
              textareaWidth={
                this.isManuallyResized ? this.manualWidth : this.textareaWidth
              }
              resizeBehavior={this.resizeBehavior}
              readonly={this.readonly}
              disabled={this.disabled}
              isInvalid={this.isInvalid}
              required={this.required}
              value={this.value}
              placeholder={this.placeholder}
              textAreaRef={this.textAreaRef}
              valueChange={() => {
                if (this.textAreaRef.current) {
                  setTimeout(() => {
                    checkInternalValidity(this, this.textAreaRef.current!);
                  }, 0);
                }
              }}
              updateFormInternalValue={(value) =>
                this.updateFormInternalValue(value)
              }
              onBlur={() => {
                this.touched = true;
                onInputBlur(this, this.textAreaRef.current);
              }}
            ></TextareaElement>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
