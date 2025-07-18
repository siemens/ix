/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconMinus, iconPlus } from '@siemens/ix-icons/icons';
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
} from '@stencil/core';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
} from '../utils/input';
import { makeRef } from '../utils/make-ref';
import { InputElement, SlotEnd, SlotStart } from './input.fc';
import {
  addDisposableChangesAndVisibilityObservers,
  adjustPaddingForStartAndEnd,
  checkAllowedKeys,
  checkInternalValidity,
  DisposableChangesAndVisibilityObservers,
  mapValidationResult,
  onInputBlur,
  onInputChange,
} from './input.util';

let numberInputIds = 0;

/**
 * @form-ready
 * @slot start - Element will be displayed at the start of the input
 * @slot end - Element will be displayed at the end of the input
 */
@Component({
  tag: 'ix-number-input',
  styleUrl: 'number-input.scss',
  shadow: true,
  formAssociated: true,
})
export class NumberInput implements IxInputFieldComponent<number> {
  @Element() hostElement!: HTMLIxNumberInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * name of the input element
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * placeholder of the input element
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * The value of the input field
   */
  @Prop({ reflect: true, mutable: true }) value: number = 0;

  /**
   * Indicates if the field is required
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Disables the input field
   */
  @Prop() disabled: boolean = false;

  /**
   * Indicates if the field is read-only
   */
  @Prop() readonly: boolean = false;

  /**
   * The helper text for the input field
   */
  @Prop() helperText?: string;

  /**
   * The info text for the input field
   */
  @Prop() infoText?: string;

  /**
   * Indicates if the text should be shown as a tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * The valid text for the input field
   */
  @Prop() validText?: string;

  /**
   * The warning text for the input field
   */
  @Prop() warningText?: string;

  /**
   * The label for the input field
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * The error text for the input field
   */
  @Prop() invalidText?: string;

  /**
   * The pattern for the input field
   */
  @Prop() pattern?: string;

  /**
   * The minimum value for the input field
   */
  @Prop() min?: string | number;

  /**
   * The maximum value for the input field
   */
  @Prop() max?: string | number;

  /**
   * The allowed characters pattern for the input field
   */
  @Prop() allowedCharactersPattern?: string;

  /**
   * Indicates if the stepper buttons should be shown
   */
  @Prop() showStepperButtons?: boolean;

  /**
   * Step value to increment or decrement the input value
   *
   * @since 3.0.0
   */
  @Prop() step?: string | number;

  /**
   * Event emitted when the value of the input field changes
   */
  @Event() valueChange!: EventEmitter<number>;

  /**
   * Event emitted when the validity state of the input field changes
   */
  @Event() validityStateChange!: EventEmitter<ValidityState>;

  /**
   * Event emitted when the input field loses focus
   */
  @Event() ixBlur!: EventEmitter<void>;

  /**
   * Event emitted when the value of the input field changed
   */
  @Event() ixChange!: EventEmitter<void>;

  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() isInvalidByRequired = false;

  private readonly inputRef = makeRef<HTMLInputElement>();
  private readonly slotEndRef = makeRef<HTMLDivElement>();
  private readonly slotStartRef = makeRef<HTMLDivElement>();
  private readonly numberInputId = `number-input-${numberInputIds++}`;
  private touched = false;

  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  @HookValidationLifecycle()
  updateClassMappings(result: ValidationResults) {
    mapValidationResult(this, result);
  }

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
  }

  connectedCallback() {
    this.disposableChangesAndVisibilityObservers =
      addDisposableChangesAndVisibilityObservers(
        this.hostElement,
        this.updatePaddings.bind(this)
      );
  }

  disconnectedCallback() {
    this.disposableChangesAndVisibilityObservers?.();
  }

  private updatePaddings() {
    adjustPaddingForStartAndEnd(
      this.slotStartRef.current,
      this.slotEndRef.current,
      this.inputRef.current
    );
  }

  updateFormInternalValue(value: number) {
    this.formInternals.setFormValue(value.toString());
    this.value = value;
  }

  /** @internal */
  @Method()
  async getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return this.formInternals.form;
  }

  /** @internal */
  @Method()
  async hasValidValue(): Promise<boolean> {
    const nativeInput = await this.getNativeInputElement();
    if (nativeInput.value === '') {
      return Promise.resolve(false);
    }

    return Promise.resolve(
      this.value !== null && this.value !== undefined && !isNaN(this.value)
    );
  }

  /**
   * Returns the native input element used under the hood
   */
  @Method()
  getNativeInputElement(): Promise<HTMLInputElement> {
    return this.inputRef.waitForCurrent();
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  /**
   * Returns true if the input field has been touched
   * @internal
   */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  render() {
    const showStepperButtons =
      this.showStepperButtons && (this.disabled || this.readonly) === false;

    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
        }}
      >
        <ix-field-wrapper
          id={this.numberInputId}
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
          controlRef={this.inputRef}
        >
          <div
            class={{
              'input-wrapper': true,
              'show-stepper-buttons': !!this.showStepperButtons,
            }}
          >
            <SlotStart
              slotStartRef={this.slotStartRef}
              onSlotChange={() => this.updatePaddings()}
            ></SlotStart>

            <InputElement
              id={this.numberInputId}
              readonly={this.readonly}
              disabled={this.disabled}
              step={this.step}
              min={this.min}
              max={this.max}
              pattern={this.pattern}
              type={'number'}
              isInvalid={this.isInvalid}
              required={this.required}
              value={this.value}
              placeholder={this.placeholder}
              inputRef={this.inputRef}
              onKeyPress={(event) => checkAllowedKeys(this, event)}
              valueChange={(value) => this.valueChange.emit(Number(value))}
              updateFormInternalValue={(value) =>
                this.updateFormInternalValue(Number(value))
              }
              onBlur={() => {
                onInputBlur(this, this.inputRef.current);
                this.touched = true;
              }}
              onChange={() => onInputChange(this, this.inputRef.current)}
            ></InputElement>
            <SlotEnd
              slotEndRef={this.slotEndRef}
              onSlotChange={() => this.updatePaddings()}
            >
              <div
                class={{
                  'number-stepper-container': true,
                  'container-hidden': !showStepperButtons,
                }}
              >
                <ix-icon-button
                  ghost
                  icon={iconMinus}
                  size="16"
                  class="number-stepper-button step-minus"
                  aria-label="decrement number"
                  onClick={() => {
                    if (!this.inputRef.current) {
                      return;
                    }
                    this.inputRef.current.stepDown();
                    checkInternalValidity(this, this.inputRef.current);
                    this.updateFormInternalValue(
                      Number(this.inputRef.current.value)
                    );
                    this.valueChange.emit(this.value);
                  }}
                ></ix-icon-button>
                <ix-icon-button
                  ghost
                  icon={iconPlus}
                  size="16"
                  class="number-stepper-button step-plus"
                  aria-label="increment number"
                  onClick={() => {
                    if (!this.inputRef.current) {
                      return;
                    }
                    this.inputRef.current.stepUp();
                    checkInternalValidity(this, this.inputRef.current);
                    this.updateFormInternalValue(
                      Number(this.inputRef.current.value)
                    );
                    this.valueChange.emit(this.value);
                  }}
                ></ix-icon-button>
              </div>
            </SlotEnd>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
