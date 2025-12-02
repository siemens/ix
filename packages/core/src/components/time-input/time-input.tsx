/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconClock } from '@siemens/ix-icons/icons';
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { SlotEnd, SlotStart } from '../input/input.fc';
import {
  DisposableChangesAndVisibilityObservers,
  addDisposableChangesAndVisibilityObservers,
  adjustPaddingForStartAndEnd,
} from '../input/input.util';
import {
  ClassMutationObserver,
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
  createClassMutationObserver,
  shouldSuppressInternalValidation,
  syncState,
  watchValue,
  onInput,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  getNativeInput,
  renderFieldWrapper,
  createEventConfig,
  createInputMethods,
  createDropdownMethods,
  createKeyDownHandler,
  handleValidationLifecycle,
} from '../utils/input';
import { makeRef } from '../utils/make-ref';
import { IxTimePickerCustomEvent } from '../../components';
import type { TimeInputValidityState } from './time-input.types';
import {
  closeDropdown as closeDropdownUtil,
  createValidityState,
  handleIconClick,
  openDropdown as openDropdownUtil,
} from '../utils/input/picker-input.util';

/**
 * @since 3.2.0
 * @form-ready
 * @slot start - Element will be displayed at the start of the input
 * @slot end - Element will be displayed at the end of the input
 */
@Component({
  tag: 'ix-time-input',
  styleUrl: 'time-input.scss',
  shadow: true,
  formAssociated: true,
})
export class TimeInput implements IxInputFieldComponent<string> {
  @Element() hostElement!: HTMLIxTimeInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * Name of the input element
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Placeholder of the input element
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * Value of the input element
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  @Watch('value') watchValuePropHandler(newValue: string) {
    watchValue({
      newValue,
      required: this.required,
      onInput: (value: string) => void this.onInput(value),
      setTouched: (touched: boolean) => (this.touched = touched),
      isClearing: this._isClearing,
    });
  }

  /**
   * Format of time string
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format: string = 'TT';

  /**
   * Required attribute
   */
  @Prop() required?: boolean;

  @Watch('required')
  onRequiredChange() {
    this.syncValidationClasses();
  }

  /**
   * Helper text below the input field
   */
  @Prop() helperText?: string;

  /**
   * Label of the input field
   */
  @Prop() label?: string;

  /**
   * Error text below the input field
   */
  @Prop({ reflect: true }) invalidText?: string;

  /**
   * Readonly attribute
   */
  @Prop() readonly: boolean = false;

  /**
   * Disabled attribute
   */
  @Prop() disabled: boolean = false;

  /**
   * Info text below the input field
   */
  @Prop() infoText?: string;

  /**
   * Warning text below the input field
   */
  @Prop() warningText?: string;

  /**
   * Valid text below the input field
   */
  @Prop() validText?: string;

  /**
   * Show text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * I18n string for the error message when the time is not parsable
   */
  @Prop({ attribute: 'i18n-error-time-unparsable' }) i18nErrorTimeUnparsable =
    'Time is not valid';

  /**
   * Interval for hour selection
   */
  @Prop() hourInterval: number = 1;

  /**
   * Interval for minute selection
   */
  @Prop() minuteInterval: number = 1;

  /**
   * Interval for second selection
   */
  @Prop() secondInterval: number = 1;

  /**
   * Interval for millisecond selection
   */
  @Prop() millisecondInterval: number = 100;

  /**
   * Text of time-picker time select button
   */
  @Prop({ attribute: 'i18n-select-time' }) i18nSelectTime: string = 'Confirm';

  /**
   * Text for time-picker top label
   */
  @Prop({ attribute: 'i18n-time' }) i18nTime: string = 'Time';

  /**
   * Text for time-picker hour column header
   */
  @Prop({ attribute: 'i18n-hour-column-header' }) i18nHourColumnHeader: string =
    'hr';

  /**
   * Text for time-picker minute column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-minute-column-header' })
  i18nMinuteColumnHeader: string = 'min';

  /**
   * Text for time-picker second column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-second-column-header' })
  i18nSecondColumnHeader: string = 'sec';

  /**
   * Text for time-picker millisecond column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-millisecond-column-header' })
  i18nMillisecondColumnHeader: string = 'ms';

  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  @Prop({ reflect: true }) suppressSubmitOnEnter: boolean = false;

  /**
   * Hides the header of the picker.
   *
   * @since 4.0.0
   */
  @Prop() hideHeader: boolean = false;

  /**
   * Text alignment within the time input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
   */
  @Prop() textAlignment: 'start' | 'end' = 'start';

  /**
   * Input change event.
   */
  @Event({ cancelable: false }) valueChange!: EventEmitter<string>;

  /**
   * Validation state change event.
   */
  @Event() validityStateChange!: EventEmitter<TimeInputValidityState>;

  /** @internal */
  @Event() ixFocus!: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur!: EventEmitter<void>;

  @State() show = false;
  @State() time: string | null = null;
  @State() isInputInvalid = false;
  @State() suppressValidation = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() focus = false;

  private readonly slotStartRef = makeRef<HTMLDivElement>();
  private readonly slotEndRef = makeRef<HTMLDivElement>();

  private readonly timePickerRef = makeRef<HTMLIxTimePickerElement>();

  private readonly inputElementRef = makeRef<HTMLInputElement>();
  private readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  private classObserver?: ClassMutationObserver;
  private invalidReason?: string;
  private touched = false;
  private _isClearing = false;

  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  private handleInputKeyDown(event: KeyboardEvent) {
    return createKeyDownHandler(
      this.suppressSubmitOnEnter,
      this.formInternals
    )(event);
  }

  updateFormInternalValue(value: string): void {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  connectedCallback(): void {
    this.classObserver = createClassMutationObserver(this.hostElement, () =>
      this.checkClassList()
    );

    this.disposableChangesAndVisibilityObservers =
      addDisposableChangesAndVisibilityObservers(
        this.hostElement,
        this.updatePaddings.bind(this)
      );
  }

  componentWillLoad(): void {
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.value = now.toFormat(this.format);
      }
    }

    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.time = null;
    } else {
      this.watchValue();
    }

    this.checkClassList();
    this.updateFormInternalValue(this.value);
  }

  componentDidLoad(): void {
    this.syncValidationClasses();
  }

  private updatePaddings() {
    adjustPaddingForStartAndEnd(
      this.slotStartRef.current,
      this.slotEndRef.current,
      this.inputElementRef.current
    );
  }

  disconnectedCallback(): void {
    this.classObserver?.destroy();
    this.disposableChangesAndVisibilityObservers?.();
  }

  @Watch('value')
  watchValue() {
    this.time = this.value;
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(!!this.value);
  }

  /** @internal */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return Promise.resolve(this.formInternals.form);
  }

  async onInput(value: string) {
    this.value = value;

    this.suppressValidation = await shouldSuppressInternalValidation(this);

    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = undefined;
      this.emitChangesAndSync(value);
      return;
    }

    if (!this.format) {
      return;
    }

    if (this.suppressValidation) {
      this.isInputInvalid = false;
      this.invalidReason = undefined;
      this.emitChangesAndSync(value);
      return;
    }

    const time = DateTime.fromFormat(value, this.format);
    this.isInputInvalid = !time.isValid;
    this.invalidReason = time.isValid ? undefined : time.invalidReason;

    this.emitChangesAndSync(value);
  }

  private emitChangesAndSync(value: string): void {
    syncState({
      updateFormInternalValue: (val) => this.updateFormInternalValue(val),
      valueChange: this.valueChange,
      value: value,
      hostElement: this.hostElement,
      suppressValidation: this.suppressValidation,
      required: this.required,
      touched: this.touched,
      isInputInvalid: this.isInputInvalid,
    });
  }

  onTimeIconClick(event: Event) {
    handleIconClick(
      event,
      this.show,
      () => this.openDropdown(),
      this.inputElementRef
    );
  }

  async openDropdown() {
    // keep picker in sync with input
    this.time = this.value;
    return openDropdownUtil(this.dropdownElementRef);
  }

  async closeDropdown() {
    return closeDropdownUtil(this.dropdownElementRef);
  }

  private checkClassList() {
    this.isInvalid = this.dropdownMethods.checkClassList();
  }

  private getEventConfig() {
    return createEventConfig({
      show: this.show,
      setTouched: (touched: boolean) => (this.touched = touched),
      onInput: (value: string) => void this.onInput(value),
      openDropdown: () => this.openDropdown(),
      ixFocus: this.ixFocus,
      ixBlur: this.ixBlur,
      syncValidationClasses: () => this.syncValidationClasses(),
      handleInputKeyDown: (event: KeyboardEvent) =>
        this.handleInputKeyDown(event),
    });
  }

  private renderInput() {
    const eventConfig = this.getEventConfig();

    return (
      <div class="input-wrapper">
        <SlotStart
          slotStartRef={this.slotStartRef}
          onSlotChange={() => this.updatePaddings()}
        ></SlotStart>
        <input
          autoComplete="off"
          class={{
            'is-invalid': this.isInputInvalid,
          }}
          style={{
            textAlign: this.textAlignment,
          }}
          disabled={this.disabled}
          readOnly={this.readonly}
          required={this.required}
          ref={this.inputElementRef}
          type="text"
          value={this.value}
          placeholder={this.placeholder}
          name={this.name}
          onInput={onInput(eventConfig)}
          onClick={onClick(eventConfig)}
          onFocus={onFocus(eventConfig)}
          onBlur={onBlur(eventConfig)}
          onKeyDown={onKeyDown(eventConfig)}
        ></input>
        <SlotEnd
          slotEndRef={this.slotEndRef}
          onSlotChange={() => this.updatePaddings()}
        >
          <ix-icon-button
            data-testid="open-time-picker"
            class={{ 'time-icon-hidden': this.disabled || this.readonly }}
            variant="subtle-tertiary"
            icon={iconClock}
            onClick={(event) => this.onTimeIconClick(event)}
            aria-label="Toggle time picker"
            aria-expanded={this.show}
          ></ix-icon-button>
        </SlotEnd>
      </div>
    );
  }

  @HookValidationLifecycle()
  hookValidationLifecycle(results: ValidationResults) {
    handleValidationLifecycle(
      this.suppressValidation,
      this.isInputInvalid,
      results,
      {
        setIsInvalid: (value) => (this.isInvalid = value),
        setIsInfo: (value) => (this.isInfo = value),
        setIsValid: (value) => (this.isValid = value),
        setIsWarning: (value) => (this.isWarning = value),
      }
    );
  }

  @Watch('isInputInvalid')
  async onInputValidationChange() {
    const state = await this.getValidityState();
    this.validityStateChange.emit({
      patternMismatch: state.patternMismatch,
      invalidReason: this.invalidReason,
    });
  }

  /** @internal */
  @Method()
  getValidityState(): Promise<ValidityState> {
    return Promise.resolve(
      createValidityState(this.isInputInvalid, !!this.required, this.value)
    );
  }

  /**
   * Get the native input element
   */
  @Method()
  getNativeInputElement(): Promise<HTMLInputElement> {
    return getNativeInput(this.inputElementRef);
  }

  private get commonMethods() {
    return createInputMethods({
      inputElementRef: this.inputElementRef,
      touched: this.touched,
      hostElement: this.hostElement,
      suppressValidation: this.suppressValidation,
      required: this.required,
      value: this.value,
      isInputInvalid: this.isInputInvalid,
    });
  }

  private get dropdownMethods() {
    return createDropdownMethods({
      dropdownElementRef: this.dropdownElementRef,
      hostElement: this.hostElement,
      show: this.show,
      touched: this.touched,
      openDropdown: async () => {
        this.time = this.value;
        return openDropdownUtil(this.dropdownElementRef);
      },
      ixFocus: this.ixFocus,
      ixBlur: this.ixBlur,
      syncValidationClasses: () => this.syncValidationClasses(),
      onInput: (value: string) => void this.onInput(value),
      handleInputKeyDown: (event: KeyboardEvent) =>
        this.handleInputKeyDown(event),
    });
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    return this.commonMethods.focusInput();
  }

  /**
   * Returns whether the text field has been touched.
   * @internal
   */
  @Method()
  isTouched(): Promise<boolean> {
    return this.commonMethods.isTouched();
  }

  /**
   * @internal
   */
  syncValidationClasses(): void {
    return this.commonMethods.syncValidationClasses();
  }

  /**
   * Clears the input field value and resets validation state.
   * Sets the value to empty and removes touched state to suppress validation.
   */
  @Method()
  async clear(): Promise<void> {
    this._isClearing = true;
    this.touched = false;
    this.isInputInvalid = false;
    this.isInvalid = false;
    this.invalidReason = undefined;
    this.value = '';
    this.time = null;
    this.updateFormInternalValue('');
    this.valueChange.emit('');
    this.syncValidationClasses();
    this._isClearing = false;
  }

  render() {
    const invalidText = this.isInputInvalid
      ? this.i18nErrorTimeUnparsable
      : this.invalidText;

    return renderFieldWrapper({
      host: this.hostElement,
      disabled: this.disabled,
      readonly: this.readonly,
      label: this.label,
      helper: this.helperText,
      invalid: this.isInvalid,
      invalidText,
      info: this.infoText,
      isInfo: this.isInfo,
      warning: this.isWarning,
      warningText: this.warningText,
      valid: this.isValid,
      validText: this.validText,
      tooltip: this.showTextAsTooltip,
      required: this.required,
      inputRef: this.inputElementRef,
      input: this.renderInput(),
      dropdown: (
        <ix-time-picker
          ref={this.timePickerRef}
          format={this.format}
          time={this.time ?? ''}
          hourInterval={this.hourInterval}
          minuteInterval={this.minuteInterval}
          secondInterval={this.secondInterval}
          millisecondInterval={this.millisecondInterval}
          embedded
          hideHeader={this.hideHeader}
          i18nConfirmTime={this.i18nSelectTime}
          i18nHeader={this.i18nTime}
          i18nHourColumnHeader={this.i18nHourColumnHeader}
          i18nSecondColumnHeader={this.i18nSecondColumnHeader}
          i18nMinuteColumnHeader={this.i18nMinuteColumnHeader}
          i18nMillisecondColumnHeader={this.i18nMillisecondColumnHeader}
          onTimeSelect={(event: IxTimePickerCustomEvent<string>) => {
            this.onInput(event.detail);
            this.show = false;
          }}
        ></ix-time-picker>
      ),
      testId: 'time-dropdown',
      trigger: () => this.inputElementRef.waitForCurrent(),
      dropdownRef: this.dropdownElementRef,
      show: this.show,
      onShow: (event) => {
        this.show = event.detail;
      },
    });
  }
}
