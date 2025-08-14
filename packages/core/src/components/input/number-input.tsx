/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
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
  Watch,
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
} from './input.util';

let numberInputIds = 0;

const INVALID_NUMBER_INPUT_REGEX = /[^\dEe+\-.,]/;

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
export class NumberInput implements IxInputFieldComponent<number | undefined> {
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
   * The value of the input field. Supports numeric values, scientific notation (1E6, 1E-6), or undefined for empty.
   */
  @Prop({ reflect: true, mutable: true }) value?: number = 0;

  /**
   * Indicates if the field is required. When required, empty values (undefined) are not accepted.
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
   * Step value to increment or decrement the input value. Default step value is 1.
   *
   * @since 3.0.0
   */
  @Prop() step?: string | number = 1;

  /**
   * Event emitted when the value of the input field changes
   */
  @Event() valueChange!: EventEmitter<number | undefined>;

  /**
   * Event emitted when the validity state of the input field changes
   */
  @Event() validityStateChange!: EventEmitter<ValidityState>;

  /**
   * Event emitted when the input field loses focus
   */
  @Event() ixBlur!: EventEmitter<void>;

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

  @Watch('value')
  onValueChange(newValue: number | undefined) {
    this.updateFormInternalValue(newValue);
  }

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

  private convertNumberStringToFloat(input: string): number | undefined {
    if (!input || input.trim() === '') {
      return undefined;
    }

    const parsed = parseFloat(input);
    return isNaN(parsed) ? undefined : parsed;
  }

  private isScientificNotation(input: string): boolean {
    const parsed = parseFloat(input);
    return !isNaN(parsed) && isFinite(parsed) && /[eE]/.test(input);
  }

  private formatValue(value: number | undefined): string {
    if (value === undefined || value === null) {
      return '';
    }
    return value.toString();
  }

  updateFormInternalValue(value: number | undefined) {
    const formValue =
      value !== undefined && value !== null ? value.toString() : '';
    this.formInternals.setFormValue(formValue);
    this.value = value;
  }

  private readonly handleInputChange = (inputValue: string) => {
    const parsedValue = this.convertNumberStringToFloat(inputValue);
    const isScientificNotation = this.isScientificNotation(inputValue.trim());

    if (isScientificNotation) {
      this.formInternals.setFormValue(inputValue);
    }

    this.valueChange.emit(parsedValue);
  };

  private readonly handleBlur = () => {
    if (!this.inputRef.current) return;

    const inputValue = this.inputRef.current.value;

    const parsedValue = this.convertNumberStringToFloat(inputValue);

    if (parsedValue !== undefined) {
      this.inputRef.current.value = this.formatValue(parsedValue);
    }

    this.updateFormInternalValue(parsedValue);

    onInputBlur(this, this.inputRef.current);
    this.touched = true;
  };

  private readonly handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled || this.readonly) {
      return;
    }

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        this.handleStepOperation('up');
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.handleStepOperation('down');
        break;
    }
  };

  private readonly handleBeforeInput = (e: InputEvent) => {
    if (this.disabled || this.readonly) return;

    if (e.inputType === 'insertText') {
      const character = e.data;

      if (character && INVALID_NUMBER_INPUT_REGEX.test(character)) {
        e.preventDefault();
      }
    }

    if (e.inputType === 'insertFromPaste') {
      const dt = e.dataTransfer || (e as any).clipboardData;
      const text = dt?.getData?.('text') ?? '';
      if (INVALID_NUMBER_INPUT_REGEX.test(text)) {
        e.preventDefault();
      }
    }
  };

  private readonly handlePaste = (e: ClipboardEvent) => {
    // Fallback for browsers that don’t fire beforeinput for paste
    const text = e.clipboardData?.getData('text') ?? '';
    if (INVALID_NUMBER_INPUT_REGEX.test(text)) {
      e.preventDefault();
    }
  };

  private handleStepOperation(operation: 'up' | 'down') {
    if (!this.inputRef.current) {
      return;
    }

    const currentValue = this.value ?? 0;
    const stepValue =
      typeof this.step === 'string' ? parseFloat(this.step) : (this.step ?? 1);

    let newValue: number;

    if (operation === 'up') {
      newValue = currentValue + stepValue;
    } else {
      newValue = currentValue - stepValue;
    }

    if (this.min !== undefined) {
      const minValue =
        typeof this.min === 'string' ? parseFloat(this.min) : this.min;
      newValue = Math.max(newValue, minValue);
    }

    if (this.max !== undefined) {
      const maxValue =
        typeof this.max === 'string' ? parseFloat(this.max) : this.max;
      newValue = Math.min(newValue, maxValue);
    }

    this.inputRef.current.value = newValue.toString();
    this.updateFormInternalValue(newValue);
    checkInternalValidity(this, this.inputRef.current);
    this.valueChange.emit(newValue);
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
      return Promise.resolve(!this.required);
    }

    const parsedValue = this.convertNumberStringToFloat(nativeInput.value);
    return Promise.resolve(parsedValue !== undefined);
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
              value={this.formatValue(this.value)}
              placeholder={this.placeholder}
              inputRef={this.inputRef}
              onKeyPress={(event) => checkAllowedKeys(this, event)}
              onKeyDown={(event) => this.handleKeyDown(event)}
              onBeforeInput={(event) => this.handleBeforeInput(event)}
              onPaste={(event) => this.handlePaste(event)}
              valueChange={this.handleInputChange}
              updateFormInternalValue={(value) => {
                const isScientificNotation = this.isScientificNotation(
                  value.trim()
                );

                if (!isScientificNotation) {
                  const parsedValue = this.convertNumberStringToFloat(value);
                  this.updateFormInternalValue(parsedValue);
                }
              }}
              onBlur={this.handleBlur}
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
                  onClick={() => this.handleStepOperation('down')}
                ></ix-icon-button>
                <ix-icon-button
                  ghost
                  icon={iconPlus}
                  size="16"
                  class="number-stepper-button step-plus"
                  aria-label="increment number"
                  onClick={() => this.handleStepOperation('up')}
                ></ix-icon-button>
              </div>
            </SlotEnd>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
