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
  h,
} from '@stencil/core';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/field';
import { makeRef } from '../utils/make-ref';
import { TextareaElement } from './input.fc';
import { mapValidationResult, onInputBlur } from './text-field.util';

/**
 * @since 2.4.0
 * @form-ready 2.4.0
 */
@Component({
  tag: 'ix-textarea-field',
  styleUrl: 'textarea-field.scss',
  shadow: true,
  formAssociated: true,
})
export class TextareaField implements IxInputFieldComponent<string> {
  @Element() hostElement: HTMLIxTextareaFieldElement;
  @AttachInternals() formInternals: ElementInternals;

  /**
   * The name of the textarea field.
   */
  @Prop({ reflect: true }) name: string;

  /**
   * The placeholder text for the textarea field.
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * The value of the textarea field.
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * Determines if the textarea field is required.
   */
  @Prop({ reflect: true }) required: boolean;

  /**
   * Determines if the textarea field is disabled.
   */
  @Prop() disabled: boolean;

  /**
   * Determines if the textarea field is readonly.
   */
  @Prop() readonly: boolean;

  /**
   * The helper text for the textarea field.
   */
  @Prop() helperText: string;

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
  @Prop({ reflect: true }) label: string;

  /**
   * The error text for the textarea field.
   */
  @Prop() invalidText: string;

  /**
   * The height of the textarea field.
   * Helpful if you want to set an initial height for the textarea.
   */
  @Prop() textareaHeight: string = '300px';

  /**
   * The height of the textarea field.
   * Helpful if you want to set an initial height for the textarea.
   */
  @Prop() textareaWidth: string = '100%';

  /**
   * The number of rows of the textarea field.
   * Helpful if you want to set an initial height for the textarea.
   */
  @Prop() textareaRows: string = '5';

  /**
   * The height of the textarea field.
   * Helpful if you want to set an initial height for the textarea.
   */
  @Prop({ reflect: true }) textareaCols: string = '20';

  /**
   * Determines the resize behavior of the textarea field.
   * 'dimensions' means the textarea will be resized based on textareaHeight and textareaWidth.
   * 'rowsCols' means the textarea will be resized based on textareaRows and textareaCols.
   */
  @Prop() resizeBehavior: 'dimensions' | 'rowsCols' = 'rowsCols';

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
  @Event() valueChange: EventEmitter<string>;

  /**
   * Event emitted when the validity state of the textarea field changes.
   */
  @Event() validityStateChange: EventEmitter<ValidityState>;

  /**
   * Event emitted when the textarea field loses focus.
   */
  @Event() ixBlur: EventEmitter<void>;

  @State() isInvalid = false;
  @State() isValid: boolean;
  @State() isInfo: boolean;
  @State() isWarning: boolean;
  @State() isInvalidByRequired: boolean;

  private textAreaRef = makeRef<HTMLTextAreaElement>();

  @HookValidationLifecycle()
  updateClassMappings(result: ValidationResults) {
    mapValidationResult(this, result);
  }

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
  }

  updateFormInternalValue(value: string) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  /** @internal */
  @Method()
  async getAssociatedFormElement(): Promise<HTMLFormElement> {
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

  getSizeValue(behavior: string, value: string) {
    console.log(this.resizeBehavior === behavior ? value : null);
    return this.resizeBehavior === behavior ? value : null;
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
          <slot name="label" slot="label"></slot>

          {this.maxLength && (
            <ix-typography slot="bottom-right" color="weak">
              {this.value.length}/{this.maxLength}
            </ix-typography>
          )}
          <div
            class={{
              'input-wrapper': true,
            }}
          >
            <TextareaElement
              minLength={this.minLength}
              maxLength={this.maxLength}
              textareaHeight={this.getSizeValue(
                'dimensions',
                this.textareaHeight
              )}
              textareaWidth={this.getSizeValue(
                'dimensions',
                this.textareaWidth
              )}
              textareaCols={this.getSizeValue('rowsCols', this.textareaCols)}
              textareaRows={this.getSizeValue('rowsCols', this.textareaRows)}
              readonly={this.readonly}
              disabled={this.disabled}
              isInvalid={this.isInvalid}
              required={this.required}
              value={this.value}
              placeholder={this.placeholder}
              textAreaRef={this.textAreaRef}
              valueChange={(value) => this.valueChange.emit(value)}
              updateFormInternalValue={(value) =>
                this.updateFormInternalValue(value)
              }
              onBlur={() => onInputBlur(this, this.textAreaRef.current)}
            ></TextareaElement>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
