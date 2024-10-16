/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconEye, iconEyeCancelled } from '@siemens/ix-icons/icons';
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
import { A11yAttributes } from '../utils/a11y';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/input';
import { MakeRef, makeRef } from '../utils/make-ref';
import { InputElement, SlotEnd, SlotStart } from './input.fc';
import {
  applyPaddingEnd,
  checkAllowedKeys,
  getAriaAttributesForInput,
  mapValidationResult,
  onInputBlur,
} from './input.util';

let inputIds = 0;

/**
 * @since 2.6.0
 * @form-ready 2.6.0
 */
@Component({
  tag: 'ix-input',
  styleUrl: 'input.scss',
  shadow: true,
  formAssociated: true,
})
export class Input implements IxInputFieldComponent<string> {
  @Element() hostElement!: HTMLIxInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * The type of the text field. Possible values are 'text', 'email', or 'password'.
   */
  @Prop() type: 'text' | 'email' | 'password' | 'tel' | 'url' = 'text';

  /**
   * The name of the text field.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * The placeholder text for the text field.
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * The value of the text field.
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * Specifies whether the text field is required.
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Specifies whether the text field is disabled.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Specifies whether the text field is readonly.
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * The helper text for the text field.
   */
  @Prop() helperText?: string;

  /**
   * The info text for the text field.
   */
  @Prop() infoText?: string;

  /**
   * Specifies whether to show the text as a tooltip.
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * The valid text for the text field.
   */
  @Prop() validText?: string;

  /**
   * The warning text for the text field.
   */
  @Prop() warningText?: string;

  /**
   * The label for the text field.
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * The error text for the text field.
   */
  @Prop() invalidText?: string;

  /**
   * The pattern for the text field.
   */
  @Prop() pattern?: string;

  /**
   * The maximum length of the text field.
   */
  @Prop() maxLength?: number;

  /**
   * The minimum length of the text field.
   */
  @Prop() minLength?: number;

  /**
   * The allowed characters pattern for the text field.
   */
  @Prop() allowedCharactersPattern?: string;

  /**
   * Event emitted when the value of the text field changes.
   */
  @Event() valueChange!: EventEmitter<string>;

  /**
   * Event emitted when the validity state of the text field changes.
   */
  @Event() validityStateChange!: EventEmitter<ValidityState>;

  /**
   * Event emitted when the text field loses focus.
   */
  @Event() ixBlur!: EventEmitter<void>;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() isInvalidByRequired = false;

  @State() inputType = 'text';

  private readonly inputRef = makeRef<HTMLInputElement>();
  private readonly slotEndRef = makeRef<HTMLDivElement>();
  private readonly slotStartRef = makeRef<HTMLDivElement>();

  private readonly inputId = `input-${inputIds++}`;

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
    setTimeout(() => this.updatePaddings());
  }

  private updatePaddings() {
    const slotStartBoundingRect =
      this.slotStartRef.current?.getBoundingClientRect();
    const slotEndBoundingRect =
      this.slotEndRef.current?.getBoundingClientRect();

    if (slotStartBoundingRect) {
      applyPaddingEnd(this.inputRef.current, slotStartBoundingRect.width, {
        slotEnd: false,
      });
    }

    if (slotEndBoundingRect) {
      applyPaddingEnd(this.inputRef.current, slotEndBoundingRect.width, {
        slotEnd: true,
      });
    }
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
   * Returns the native input element used in the text field.
   */
  @Method()
  getNativeInputElement() {
    return this.inputRef.waitForCurrent();
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  render() {
    const inputAria: A11yAttributes = getAriaAttributesForInput(this);
    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
        }}
      >
        <ix-field-wrapper
          htmlForLabel={this.inputId}
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
          controlRef={this.inputRef as unknown as MakeRef<HTMLElement>}
        >
          <div class="input-wrapper">
            <SlotStart
              slotStartRef={this.slotStartRef}
              onSlotChange={() => this.updatePaddings()}
            ></SlotStart>
            <InputElement
              id={this.inputId}
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
              ariaAttributes={inputAria}
            ></InputElement>
            <SlotEnd
              slotEndRef={this.slotEndRef}
              onSlotChange={() => this.updatePaddings()}
            >
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
            </SlotEnd>
          </div>
          {!!this.maxLength && this.maxLength > 0 && (
            <ix-typography class="bottom-text" slot="bottom-right" color="soft">
              {this.value?.length}/{this.maxLength}
            </ix-typography>
          )}
        </ix-field-wrapper>
      </Host>
    );
  }
}
