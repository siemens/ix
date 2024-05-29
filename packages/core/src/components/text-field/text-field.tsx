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
  ValidationResults,
  IxInputFieldComponent,
  HookValidationLifecycle,
} from '../utils/field';
import { makeRef } from '../utils/make-ref';
import anime from 'animejs';

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
  @Prop() type: 'text' | 'email' = 'text';

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

  private inputRef = makeRef<HTMLInputElement>();

  @HookValidationLifecycle()
  updateClassMappings({
    isInvalid,
    isInfo,
    isInvalidByRequired,
    isValid,
    isWarning,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isValid = isValid;
    this.isInfo = isInfo;
    this.isWarning = isWarning;
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

  private onKeyPress(event: KeyboardEvent) {
    if (this.allowedCharactersPattern) {
      const regex = new RegExp(this.allowedCharactersPattern);
      if (!regex.test(event.key)) {
        event.preventDefault();
        this.shakeInput();
      }
    }
  }

  private onBlur() {
    this.ixBlur.emit();

    const input = this.inputRef.current;
    const validityState = input.validity;

    const eventResult = this.validityStateChange.emit(validityState);

    if (eventResult.defaultPrevented) {
      return;
    }

    if (!this.value) {
      return;
    }

    const { valid } = validityState;
    this.hostElement.classList.toggle('ix-invalid', !valid);
  }

  private shakeInput() {
    const xMax = 5;
    anime({
      targets: this.inputRef.current,
      duration: 200,
      easing: 'easeInOutSine',
      loop: 2,
      translateX: [
        {
          value: xMax * -1,
        },
        {
          value: xMax,
        },
        {
          value: xMax / -2,
        },
        {
          value: xMax / 2,
        },
        {
          value: 0,
        },
      ],
    });
  }

  render() {
    return (
      <Host>
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
          <input
            maxLength={this.maxLength}
            minLength={this.minLength}
            ref={this.inputRef}
            pattern={this.pattern}
            type={this.type}
            class={{
              'is-invalid': this.isInvalid,
            }}
            required={this.required}
            value={this.value}
            placeholder={this.placeholder}
            onKeyPress={(event) => this.onKeyPress(event)}
            onChange={(changeEvent) => {
              const target = changeEvent.target as HTMLInputElement;
              this.valueChange.emit(target.value);
            }}
            onInput={(inputEvent) => {
              const target = inputEvent.target as HTMLInputElement;
              this.updateFormInternalValue(target.value);
            }}
            onBlur={() => this.onBlur()}
          ></input>
        </ix-field-wrapper>
      </Host>
    );
  }
}
