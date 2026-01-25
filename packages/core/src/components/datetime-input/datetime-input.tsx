/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 * SPDX-License-Identifier: MIT
 */

import { iconCalendar } from '@siemens/ix-icons/icons';
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
import { DateTime } from 'luxon';
import { SlotEnd, SlotStart } from '../input/input.fc';
import {
  DisposableChangesAndVisibilityObservers,
  addDisposableChangesAndVisibilityObservers,
  adjustPaddingForStartAndEnd,
  handleSubmitOnEnterKeydown,
} from '../input/input.util';
import {
  ClassMutationObserver,
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
  createClassMutationObserver,
  getValidationText,
} from '../utils/input';
import {
  closeDropdown as closeDropdownUtil,
  createValidityState,
  handleIconClick,
  openDropdown as openDropdownUtil,
} from '../utils/input/picker-input.util';
import { makeRef } from '../utils/make-ref';
import { DateTimeInputValidityState } from './datetime-input.types';

/**
 * @form-ready
 *
 * @slot start - Element will be displayed at the start of the input
 * @slot end - Element will be displayed at the end of the input
 */

@Component({
  tag: 'ix-datetime-input',
  styleUrl: 'datetime-input.scss',
  shadow: true,
  formAssociated: true,
})
export class DatetimeInput
  implements IxInputFieldComponent<string | undefined>
{
  @Element() hostElement!: HTMLIxDatetimeInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /** Name of the form control for form submission */
  @Prop({ reflect: true }) name?: string;

  /** Placeholder text when input is empty */
  @Prop({ reflect: true }) placeholder?: string;

  /** Value in display format (e.g., "2026/01/21 13:07:04" for default dateFormat + timeFormat) */
  @Prop({ reflect: true, mutable: true }) value?: string = '';

  /** Luxon date format for display (e.g., 'yyyy/LL/dd' → "2026/01/20") */
  @Prop() dateFormat: string = 'yyyy/LL/dd';

  /** Luxon time format for display (e.g., 'HH:mm:ss' → "13:07:04") */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /** Locale for date/time formatting (e.g., 'en-US', 'de-DE') */
  @Prop() locale?: string;

  /** Whether the field is required */
  @Prop() required: boolean = false;

  /** Whether the input is disabled */
  @Prop() disabled: boolean = false;

  /** Whether the input is read-only (calendar icon hidden) */
  @Prop() readonly: boolean = false;

  /** Minimum allowed date in date format (matching dateFormat, e.g., "2026/01/20") */
  @Prop() minDate?: string;

  /** Maximum allowed date in date format (matching dateFormat, e.g., "2026/12/31") */
  @Prop() maxDate?: string;

  /** Label text displayed above the input */
  @Prop() label?: string;

  /** Helper text displayed below the input */
  @Prop() helperText?: string;

  /** Validation message for invalid state */
  @Prop({ reflect: true }) invalidText?: string;

  /** Informational message */
  @Prop() infoText?: string;

  /** Warning message */
  @Prop() warningText?: string;

  /** Success/valid message */
  @Prop() validText?: string;

  /** Show helper text as tooltip instead of below input */
  @Prop() showTextAsTooltip: boolean = false;

  /** Error message when datetime cannot be parsed */
  @Prop() i18nErrorDateTimeUnparsable: string = 'Date time is not valid';

  /** Text for confirm button in picker (prop name matches datetime-picker) */
  @Prop() i18nDone: string = 'Confirm';

  /** Header text for time picker section */
  @Prop() i18nTime: string = 'Time';

  /** ARIA label for previous month navigation button */
  @Prop() ariaLabelPreviousMonthButton?: string;

  /** ARIA label for next month navigation button */
  @Prop() ariaLabelNextMonthButton?: string;

  /** ARIA label for the calendar icon button */
  @Prop() ariaLabelCalendarButton?: string;

  /** Show week numbers in date picker */
  @Prop() showWeekNumbers: boolean = false;

  /** First day of week (0=Sunday, 1=Monday, etc.) */
  @Prop() weekStartIndex: number = 0;

  /** Prevent form submission when Enter is pressed */
  @Prop({ reflect: true }) suppressSubmitOnEnter: boolean = false;

  /** Text alignment within the input field */
  @Prop() textAlignment: 'start' | 'end' = 'start';

  /** Emitted when the datetime value changes. Payload is display format or undefined */
  @Event() valueChange!: EventEmitter<string | undefined>;

  /** Emitted when validation state changes */
  @Event() validityStateChange!: EventEmitter<DateTimeInputValidityState>;

  /** Emitted when the input receives focus */
  @Event() ixFocus!: EventEmitter<void>;

  /** Emitted when the input loses focus */
  @Event() ixBlur!: EventEmitter<void>;

  /** Whether the current input value is invalid */
  @State() isInputInvalid: boolean = false;

  /** Validation state: Invalid */
  @State() isInvalid: boolean = false;

  /** Validation state: Valid */
  @State() isValid: boolean = false;

  /** Validation state: Info */
  @State() isInfo: boolean = false;

  /** Validation state: Warning */
  @State() isWarning: boolean = false;

  private readonly slotStartRef = makeRef<HTMLDivElement>();
  private readonly slotEndRef = makeRef<HTMLDivElement>();
  private readonly inputElementRef = makeRef<HTMLInputElement>();
  private readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  private readonly datetimePickerRef = makeRef<HTMLIxDatetimePickerElement>();

  /** Dropdown open/closed state */
  @State() show: boolean = false;

  /** Date value for picker (in picker's format) */
  @State() from?: string | null = null;

  /** Time value for picker (in picker's format) */
  @State() time?: string | null = null;

  private classObserver?: ClassMutationObserver;
  private invalidReason?: string;
  private touched = false;
  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  @Watch('value')
  watchValuePropHandler(newValue: string) {
    this.onInput(newValue);
    this.syncPickerState();
  }

  private get combinedFormat(): string {
    return `${this.dateFormat} ${this.timeFormat}`;
  }

  private syncPickerState() {
    if (!this.value) {
      this.from = null;
      this.time = null;
      return;
    }

    const dateTime = DateTime.fromFormat(this.value, this.combinedFormat, {
      locale: this.locale,
    });

    if (dateTime.isValid) {
      this.from = dateTime.toFormat(this.dateFormat);
      this.time = dateTime.toFormat(this.timeFormat);
    } else {
      this.from = null;
      this.time = null;
    }
  }

  async onInput(value: string | undefined) {
    this.value = value;
    if (!value) {
      this.valueChange.emit(value);
      return;
    }

    if (!this.dateFormat || !this.timeFormat) {
      return;
    }

    const dateTime = DateTime.fromFormat(value, this.combinedFormat, {
      locale: this.locale,
    });

    const minDateTime = this.parseConstraintDate(this.minDate, 'start');
    const maxDateTime = this.parseConstraintDate(this.maxDate, 'end');

    const validationResult = this.validateConstraints(
      dateTime,
      minDateTime,
      maxDateTime
    );

    this.isInputInvalid = validationResult.isInvalid;
    this.invalidReason = validationResult.reason;

    if (this.isInputInvalid) {
      this.from = null;
      this.time = null;
    } else {
      this.updateFormInternalValue(value);
      this.closeDropdown();
    }

    this.valueChange.emit(value);
  }

  private parseConstraintDate(
    dateString: string | undefined,
    boundary: 'start' | 'end'
  ): DateTime | null {
    if (!dateString) {
      return null;
    }

    const parsed = DateTime.fromFormat(dateString, this.dateFormat, {
      locale: this.locale,
    });

    if (!parsed.isValid) {
      return null;
    }

    return boundary === 'start' ? parsed.startOf('day') : parsed.endOf('day');
  }

  private validateConstraints(
    dateTime: DateTime,
    minDateTime: DateTime | null,
    maxDateTime: DateTime | null
  ): { isInvalid: boolean; reason: string | undefined } {
    const isFormatInvalid = !dateTime.isValid;
    const isBeforeMin = !!(
      minDateTime?.isValid &&
      dateTime.isValid &&
      dateTime < minDateTime
    );
    const isAfterMax = !!(
      maxDateTime?.isValid &&
      dateTime.isValid &&
      dateTime > maxDateTime
    );

    const isInvalid = isFormatInvalid || isBeforeMin || isAfterMax;

    let reason: string | undefined;
    if (isBeforeMin) {
      reason = 'rangeUnderflow';
    } else if (isAfterMax) {
      reason = 'rangeOverflow';
    } else if (isFormatInvalid) {
      reason = dateTime.invalidReason || undefined;
    }

    return { isInvalid, reason };
  }

  private handleInputKeyDown(event: KeyboardEvent) {
    handleSubmitOnEnterKeydown(
      event,
      this.suppressSubmitOnEnter,
      this.formInternals.form
    );
  }

  private initPickerValues() {
    this.syncPickerState();
  }

  private readonly onCalendarClick = (event: Event) => {
    handleIconClick(
      event,
      this.show,
      () => this.openDropdown(),
      this.inputElementRef
    );
  };

  private async openDropdown() {
    this.initPickerValues();
    return openDropdownUtil(this.dropdownElementRef);
  }

  private async closeDropdown() {
    return closeDropdownUtil(this.dropdownElementRef);
  }

  updateFormInternalValue(value: string | undefined): void {
    if (value) {
      this.formInternals.setFormValue(value);
    } else {
      this.formInternals.setFormValue(null);
    }
    this.value = value;
  }

  /**
   * @internal
   */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(!!this.value);
  }

  /**
   * @internal
   */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement | null> {
    return Promise.resolve(this.formInternals.form);
  }

  /**
   * Get the native input element
   * @internal
   */
  @Method()
  getNativeInputElement(): Promise<HTMLInputElement> {
    return this.inputElementRef.waitForCurrent();
  }

  /**
   * Focus the native input element
   * @internal
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  /**
   * @internal
   */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  /**
   * @internal
   */
  @Method()
  getValidityState(): Promise<ValidityState> {
    return Promise.resolve(
      createValidityState(this.isInputInvalid, !!this.required, this.value)
    );
  }

  @Watch('isInputInvalid')
  async onInputValidationChange() {
    this.isInvalid = this.isInputInvalid;

    const state = await this.getValidityState();
    const validityState: DateTimeInputValidityState = {
      valid: state.valid,
      valueMissing: state.valueMissing,
      rangeUnderflow: this.invalidReason === 'rangeUnderflow',
      rangeOverflow: this.invalidReason === 'rangeOverflow',
      typeMismatch: state.patternMismatch,
      customError: state.customError,
      badInput: state.badInput,
      patternMismatch: false,
      stepMismatch: state.stepMismatch,
      tooLong: state.tooLong,
      tooShort: state.tooShort,
      invalidReason: this.invalidReason,
    };
    this.validityStateChange.emit(validityState);
  }

  @HookValidationLifecycle()
  hookValidationLifecycle({
    isInfo,
    isInvalid,
    isInvalidByRequired,
    isValid,
    isWarning,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired || this.isInputInvalid;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
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
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
      this.time = null;
    } else {
      this.syncPickerState();
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

  private checkClassList() {
    this.isInvalid = this.hostElement.classList.contains('ix-invalid');
  }

  private readonly handleDateSelect = (event: CustomEvent) => {
    const { from, time } = event.detail;

    if (!from || !time) {
      return;
    }

    const displayValue = `${from} ${time}`;
    this.onInput(displayValue);
  };

  private renderInput() {
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
          name={this.name}
          placeholder={this.placeholder}
          readonly={this.readonly}
          ref={this.inputElementRef}
          required={this.required}
          style={{
            textAlign: this.textAlignment,
          }}
          type="text"
          value={this.value ?? ''}
          onBlur={() => {
            this.ixBlur.emit();
            this.touched = true;
          }}
          onClick={(event) => {
            if (this.show) {
              event.stopPropagation();
              event.preventDefault();
            }
          }}
          onFocus={async () => {
            this.openDropdown();
            this.ixFocus.emit();
          }}
          onInput={(event) => {
            const target = event.target as HTMLInputElement;
            this.onInput(target.value);
          }}
          onKeyDown={(event) => this.handleInputKeyDown(event)}
        ></input>
        <SlotEnd
          slotEndRef={this.slotEndRef}
          onSlotChange={() => this.updatePaddings()}
        >
          <ix-icon-button
            aria-expanded={this.show}
            aria-label={
              this.ariaLabelCalendarButton || 'Toggle datetime picker'
            }
            class={{ 'calendar-hidden': this.disabled || this.readonly }}
            data-testid="open-datetime-picker"
            icon={iconCalendar}
            variant="subtle-tertiary"
            onClick={(event) => this.onCalendarClick(event)}
          ></ix-icon-button>
        </SlotEnd>
      </div>
    );
  }

  render() {
    const invalidText = getValidationText(
      this.isInputInvalid,
      this.invalidText,
      this.i18nErrorDateTimeUnparsable
    );

    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
        }}
      >
        <ix-field-wrapper
          controlRef={this.inputElementRef}
          helperText={this.helperText}
          infoText={this.infoText}
          invalidText={invalidText}
          isInfo={this.isInfo}
          isInvalid={this.isInvalid}
          isValid={this.isValid}
          isWarning={this.isWarning}
          label={this.label}
          required={this.required}
          showTextAsTooltip={this.showTextAsTooltip}
          validText={this.validText}
          warningText={this.warningText}
        >
          {this.renderInput()}
        </ix-field-wrapper>
        <ix-dropdown
          closeBehavior="outside"
          data-testid="datetime-dropdown"
          ref={this.dropdownElementRef}
          show={this.show}
          suppressOverflowBehavior={true}
          trigger={this.inputElementRef.waitForCurrent()}
          onShowChanged={(event) => {
            this.show = event.detail;
          }}
        >
          <ix-datetime-picker
            ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
            ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
            dateFormat={this.dateFormat}
            from={this.from ?? ''}
            i18nDone={this.i18nDone}
            i18nTime={this.i18nTime}
            locale={this.locale}
            maxDate={this.maxDate}
            minDate={this.minDate}
            ref={this.datetimePickerRef}
            showWeekNumbers={this.showWeekNumbers}
            singleSelection
            time={this.time ?? ''}
            timeFormat={this.timeFormat}
            weekStartIndex={this.weekStartIndex}
            onDateSelect={this.handleDateSelect}
          ></ix-datetime-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
