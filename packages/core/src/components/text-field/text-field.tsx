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
  ValidationResults,
  IxInputFieldComponent,
  HookValidationLifecycle,
} from '../utils/field';
import { makeRef } from '../utils/make-ref';
import { InputElement, PostfixSlot, PrefixSlot } from './input.fc';
import {
  checkAllowedKeys,
  mapValidationResult,
  onInputBlur,
  applyPostfixPadding,
} from './text-field.util';
import { iconEye, iconEyeCancelled } from '@siemens/ix-icons/icons';

@Component({
  tag: 'ix-text-field',
  styleUrl: 'text-field.scss',
  shadow: true,
  formAssociated: true,
})
export class TextField implements IxInputFieldComponent<string> {
  @Element() hostElement: HTMLIxTextFieldElement;
  @AttachInternals() formInternals: ElementInternals;

  /**
   * tbd
   */
  @Prop() type: 'text' | 'email' | 'password' = 'text';

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
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) required: boolean;

  /**
   * tbd
   */
  @Prop({ reflect: true }) disabled: boolean;

  /**
   * tbd
   */
  @Prop({ reflect: true }) readonly: boolean;

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
  @Prop() showTextBehind?: boolean;

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
   * tbd
   */
  @Prop() pattern?: string;

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
  @Prop() allowedCharactersPattern?: string;

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

  @State() inputType = 'text';

  private inputRef = makeRef<HTMLInputElement>();
  private postfixRef = makeRef<HTMLDivElement>();
  private prefixRef = makeRef<HTMLDivElement>();

  @HookValidationLifecycle()
  updateClassMappings(result: ValidationResults) {
    mapValidationResult(this, result);
  }

  @Watch('type')
  updateInputType() {
    this.inputType = this.type;
  }

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
    this.inputType = this.type;
  }

  componentDidRender() {
    const prefixBoundingRect = this.prefixRef.current?.getBoundingClientRect();
    const postfixBoundingRect =
      this.postfixRef.current?.getBoundingClientRect();

    if (prefixBoundingRect) {
      applyPostfixPadding(this.inputRef.current, prefixBoundingRect.width, {
        postfix: false,
      });
    }

    if (postfixBoundingRect) {
      applyPostfixPadding(this.inputRef.current, postfixBoundingRect.width, {
        postfix: true,
      });
    }
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
          showTextBehind={this.showTextBehind}
        >
          {this.maxLength && (
            <ix-typography slot="top-left" color="weak">
              {this.value.length}/{this.maxLength}
            </ix-typography>
          )}
          <div class="input-wrapper">
            <PrefixSlot prefixRef={this.prefixRef}></PrefixSlot>
            <InputElement
              readonly={this.readonly}
              disabled={this.disabled}
              maxLength={this.maxLength}
              minLength={this.minLength}
              pattern={this.pattern}
              type={this.inputType}
              isInvalid={this.isInvalid}
              required={this.required}
              value={this.value}
              placeholder={this.placeholder}
              inputRef={this.inputRef}
              onKeyPress={(event) => checkAllowedKeys(this, event)}
              valueChange={(value) => this.valueChange.emit(value)}
              updateFormInternalValue={(value) =>
                this.updateFormInternalValue(value)
              }
              onBlur={() => onInputBlur(this, this.inputRef.current)}
            ></InputElement>
            <PostfixSlot postfixRef={this.postfixRef}>
              {this.type === 'password' && (
                <ix-icon-button
                  color="color-weak-text"
                  class={'password-eye'}
                  ghost
                  icon={
                    this.inputType === 'password' ? iconEye : iconEyeCancelled
                  }
                  onClick={() => {
                    if (this.inputType === 'password') {
                      this.inputType = 'text';
                      return;
                    }

                    this.inputType = 'password';
                  }}
                ></ix-icon-button>
              )}
            </PostfixSlot>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
