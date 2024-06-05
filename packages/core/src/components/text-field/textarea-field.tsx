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
   * tbd
   */
  @Prop({ reflect: true }) name: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * tbd
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * tbd
   */
  @Prop({ reflect: true }) required: boolean;

  /**
   * tbd
   */
  @Prop() disabled: boolean;

  /**
   * tbd
   */
  @Prop() readonly: boolean;

  /**
   * tbd
   */
  @Prop() helperText: string;

  /**
   * tbd
   */
  @Prop() infoText?: string;

  /**
   * tbd
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * tbd
   */
  @Prop() validText?: string;

  /**
   * tbd
   */
  @Prop() warningText?: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) label: string;

  /**
   * tbd
   */
  @Prop() errorText: string;

  /**
   * Helpful if you want to set a initial height for the textarea
   */
  @Prop() textareaHeight: string;

  /**
   * tbd
   */
  @Prop() maxLength?: number;

  /**
   * tbd
   */
  @Prop() minLength?: number;

  /**
   * tbd
   */
  @Event() valueChange: EventEmitter<string>;

  /**
   * Expose the validation state https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  @Event() validityStateChange: EventEmitter<ValidityState>;

  /**
   * tbd
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
          errorText={this.errorText}
          infoText={this.infoText}
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          isInvalid={this.isInvalid}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
        >
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
              textareaHeight={this.textareaHeight}
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
