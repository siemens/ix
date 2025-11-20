/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconCalendar } from '@siemens/ix-icons/icons';
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
  resetInputField,
  ResetConfig,
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
import type { DateInputValidityState } from './date-input.types';
import {
  closeDropdown as closeDropdownUtil,
  createValidityState,
  handleIconClick,
  openDropdown as openDropdownUtil,
} from '../utils/input/picker-input.util';

/**
 * @form-ready
 *
 * @slot start - Element will be displayed at the start of the input
 * @slot end - Element will be displayed at the end of the input
 */
@Component({
  tag: 'ix-date-input',
  styleUrl: 'date-input.scss',
  shadow: true,
  formAssociated: true,
})
export class DateInput implements IxInputFieldComponent<string | undefined> {
  @Element() hostElement!: HTMLIxDateInputElement;
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
  @Prop({ reflect: true, mutable: true }) value?: string = '';

  @Watch('value') watchValuePropHandler(newValue: string) {
    watchValue({
      newValue,
      isResetting: this.isResetting,
      required: this.required,
      initialValue: this.initialValue,
      onInput: (value: string) => void this.onInput(value),
      setTouched: (touched: boolean) => (this.touched = touched),
      setDirty: (dirty: boolean) => (this.dirty = dirty),
    });
  }

  /**
   * The earliest date that can be selected by the date input/picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate = '';

  /**
   * The latest date that can be selected by the date input/picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate = '';

  /**
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months.
   * It also determines the default order of weekdays based on the locale's conventions.
   * When the locale changes, the weekday labels are rotated according to the `weekStartIndex`.
   * It does not affect the values returned by methods and events.
   */
  @Prop() locale?: string;

  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

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
   * ARIA label for the calendar icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelCalendarButton?: string;

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
   * I18n string for the error message when the date is not parsable
   */
  @Prop({ attribute: 'i18n-error-date-unparsable' }) i18nErrorDateUnparsable =
    'Date is not valid';

  /**
   * Shows week numbers displayed on the left side of the date picker
   *
   * @since 3.0.0
   */
  @Prop() showWeekNumbers = false;

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * ARIA label for the previous month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelPreviousMonthButton?: string;

  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelNextMonthButton?: string;

  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  @Prop({ reflect: true }) suppressSubmitOnEnter: boolean = false;

  /**
   * Text alignment within the date input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
   */
  @Prop() textAlignment: 'start' | 'end' = 'start';

  /**
   * Input change event.
   */
  @Event({ cancelable: false }) valueChange!: EventEmitter<string | undefined>;

  /**
   * Validation state change event.
   */
  @Event() validityStateChange!: EventEmitter<DateInputValidityState>;

  /** @internal */
  @Event() ixFocus!: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur!: EventEmitter<void>;

  @State() show = false;
  @State() from?: string | null = null;
  @State() isInputInvalid = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() focus = false;
  @State() suppressValidation = false;

  private readonly slotStartRef = makeRef<HTMLDivElement>();
  private readonly slotEndRef = makeRef<HTMLDivElement>();

  private readonly datepickerRef = makeRef<HTMLIxDatePickerElement>();

  private readonly inputElementRef = makeRef<HTMLInputElement>();
  private readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  private classObserver?: ClassMutationObserver;
  private invalidReason?: string;
  private touched = false;
  private dirty = false;
  private isResetting = false;
  private initialValue?: string;

  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  updateFormInternalValue(value: string | undefined): void {
    if (value) {
      this.formInternals.setFormValue(value);
    } else {
      this.formInternals.setFormValue(null);
    }
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
    this.initialValue = this.value;

    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
    } else {
      this.watchValue();
    }

    this.checkClassList();
    this.updateFormInternalValue(this.value);
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
    this.from = this.value;
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    if (!this.required) {
      return Promise.resolve(true);
    }

    return Promise.resolve(!!this.value);
  }

  /** @internal */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return Promise.resolve(this.formInternals.form);
  }

  async onInput(value: string | undefined) {
    if (!this.isResetting) {
      this.dirty = value !== this.initialValue;
    }

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
      this.handleValidInput(value);
      return;
    }

    const date = DateTime.fromFormat(value, this.format);
    const minDate = DateTime.fromFormat(this.minDate, this.format);
    const maxDate = DateTime.fromFormat(this.maxDate, this.format);

    const isDateInvalid = !date.isValid || date < minDate || date > maxDate;
    this.isInputInvalid = isDateInvalid;
    this.invalidReason = isDateInvalid
      ? date.invalidReason || undefined
      : undefined;

    if (isDateInvalid) {
      this.handleInvalidInput(value);
    } else {
      this.handleValidInput(value);
    }
  }

  private emitChangesAndSync(value: string | undefined): void {
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

  private handleValidInput(value: string | undefined): void {
    this.from = value;
    this.closeDropdown();
    this.emitChangesAndSync(value);
  }

  private handleInvalidInput(value: string | undefined): void {
    if (!this.isResetting) {
      this.touched = true;
    }
    this.from = undefined;
    this.emitChangesAndSync(value);
  }

  onCalenderClick(event: Event) {
    handleIconClick(
      event,
      this.show,
      () => this.openDropdown(),
      this.inputElementRef
    );
  }

  async openDropdown() {
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
      isResetting: this.isResetting,
      show: this.show,
      setTouched: (touched: boolean) => (this.touched = touched),
      onInput: (value: string) => void this.onInput(value),
      openDropdown: () => this.openDropdown(),
      ixFocus: this.ixFocus,
      ixBlur: this.ixBlur,
      syncValidationClasses: () => this.syncValidationClasses(),
      handleInputKeyDown: (event: KeyboardEvent) =>
        this.handleInputKeyDown(event),
      alwaysSetTouchedOnBlur: true,
    });
  }

  private handleInputKeyDown(event: KeyboardEvent) {
    return createKeyDownHandler(
      this.suppressSubmitOnEnter,
      this.formInternals
    )(event);
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
          disabled={this.disabled}
          readOnly={this.readonly}
          readonly={this.readonly}
          required={this.required}
          ref={this.inputElementRef}
          type="text"
          value={this.value ?? ''}
          placeholder={this.placeholder}
          name={this.name}
          onInput={onInput(eventConfig)}
          onClick={onClick(eventConfig)}
          onFocus={onFocus(eventConfig)}
          onBlur={onBlur(eventConfig)}
          onKeyDown={onKeyDown(eventConfig)}
          style={{
            textAlign: this.textAlignment,
          }}
        ></input>
        <SlotEnd
          slotEndRef={this.slotEndRef}
          onSlotChange={() => this.updatePaddings()}
        >
          <ix-icon-button
            data-testid="open-calendar"
            class={{ 'calendar-hidden': this.disabled || this.readonly }}
            variant="subtle-tertiary"
            icon={iconCalendar}
            onClick={(event) => this.onCalenderClick(event)}
            aria-label={this.ariaLabelCalendarButton}
          ></ix-icon-button>
        </SlotEnd>
      </div>
    );
  }

  @HookValidationLifecycle()
  hookValidationLifecycle(results: ValidationResults) {
    const shouldShowInputInvalid = this.isInputInvalid && this.touched;

    // Use utility but with custom logic for shouldShowInputInvalid
    handleValidationLifecycle(
      this.suppressValidation,
      shouldShowInputInvalid, // Pass shouldShowInputInvalid instead of this.isInputInvalid
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

    if (this.suppressValidation) {
      return;
    }

    const shouldShowInputInvalid = this.isInputInvalid && this.touched;

    if (shouldShowInputInvalid) {
      this.isInvalid = true;
    }
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
      dirty: this.dirty,
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
      isResetting: this.isResetting,
      touched: this.touched,
      openDropdown: async () => {
        return openDropdownUtil(this.dropdownElementRef);
      },
      ixFocus: this.ixFocus,
      ixBlur: this.ixBlur,
      syncValidationClasses: () => this.syncValidationClasses(),
      onInput: (value: string) => this.onInput(value),
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
   * Returns whether the text field has been modified from its initial value.
   * @internal
   */
  @Method()
  isDirty(): Promise<boolean> {
    return this.commonMethods.isDirty();
  }

  /**
   * @internal
   */
  syncValidationClasses(): void {
    return this.commonMethods.syncValidationClasses();
  }

  /**
   * Resets the input field to its original untouched state and initial value.
   * Clears touched and dirty states and recomputes validity.
   */
  @Method()
  async reset(): Promise<void> {
    const resetConfig: ResetConfig = {
      initialValue: this.initialValue,
      format: this.format,
      updateFormInternalValue: this.updateFormInternalValue.bind(this),
      onInput: this.onInput.bind(this),
      valueChangeEmitter: this.valueChange,
      setState: {
        setIsResetting: (value: boolean) => (this.isResetting = value),
        setTouched: (value: boolean) => (this.touched = value),
        setDirty: (value: boolean) => (this.dirty = value),
        setIsInputInvalid: (value: boolean) => (this.isInputInvalid = value),
        setIsInvalid: (value: boolean) => (this.isInvalid = value),
        setInvalidReason: (value: string | undefined) =>
          (this.invalidReason = value),
        setValue: (value: string) => (this.value = value),
      },
      componentSpecificCleanup: () => {
        this.from = undefined;
      },
    };

    await resetInputField(resetConfig);
  }

  render() {
    const invalidText =
      this.isInputInvalid && !this.suppressValidation
        ? this.i18nErrorDateUnparsable
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
        <ix-date-picker
          ref={this.datepickerRef}
          format={this.format}
          locale={this.locale}
          singleSelection
          from={this.from ?? ''}
          minDate={this.minDate}
          maxDate={this.maxDate}
          onDateChange={(event) => {
            const { from } = event.detail;
            this.onInput(from);
          }}
          showWeekNumbers={this.showWeekNumbers}
          ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
          ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
          embedded
        ></ix-date-picker>
      ),
      testId: 'date-dropdown',
      trigger: () => this.inputElementRef.waitForCurrent(),
      dropdownRef: this.dropdownElementRef,
      show: this.show,
      onShow: (event) => {
        this.show = event.detail;
      },
    });
  }
}
