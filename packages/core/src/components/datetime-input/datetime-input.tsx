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
  PickerValidityStateTracker,
  addDisposableChangesAndVisibilityObservers,
  adjustPaddingForStartAndEnd,
  createPickerValidityStateTracker,
  emitPickerValidityState,
  handleSubmitOnEnterKeydown,
  onInputBlurWithChange,
  onInputFocus,
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
 * @since 5.0.0
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

  /** Value in display format (e.g., "2026/01/21 13:07:04" for default format) */
  @Prop({ reflect: true, mutable: true }) value?: string = '';

  /**
   * Luxon date and time format for display (e.g., 'yyyy/LL/dd HH:mm:ss' → "2026/01/20 13:07:04").
   *
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd HH:mm:ss';

  /** Locale for date/time formatting (e.g., 'en-US', 'de-DE') */
  @Prop() locale?: string;

  /** Whether the field is required */
  @Prop() required: boolean = false;

  /** Whether the input is disabled */
  @Prop() disabled: boolean = false;

  /** Whether the input is read-only (calendar icon hidden) */
  @Prop() readonly: boolean = false;

  /** Minimum allowed date (matching format or date-only, e.g., "2026/01/20") */
  @Prop() minDate?: string;

  /** Maximum allowed date (matching format or date-only, e.g., "2026/12/31") */
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
  @Prop() ariaLabelPreviousMonthButton?: string = 'Previous month';

  /** ARIA label for next month navigation button */
  @Prop() ariaLabelNextMonthButton?: string = 'Next month';

  /**
   * ARIA label for the calendar icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelCalendarButton?: string = 'Toggle calendar';

  /** Show week numbers in date picker */
  @Prop() showWeekNumbers: boolean = false;

  /** First day of week (0=Sunday, 1=Monday, etc.) */
  @Prop() weekStartIndex: number = 0;

  /** Prevent form submission when Enter is pressed */
  @Prop({ reflect: true }) suppressSubmitOnEnter: boolean = false;

  /** Text alignment within the input field */
  @Prop() textAlignment: 'start' | 'end' = 'start';

  /**
   * Enable Popover API rendering for dropdown.
   */
  @Prop() enableTopLayer: boolean = false;

  /** Emitted when the datetime value changes. Payload is display format or undefined */
  @Event() valueChange!: EventEmitter<string | undefined>;

  /** Emitted when validation state changes */
  @Event() validityStateChange!: EventEmitter<DateTimeInputValidityState>;

  /** Emitted when the input receives focus */
  @Event() ixFocus!: EventEmitter<void>;

  /** Emitted when the input loses focus */
  @Event() ixBlur!: EventEmitter<void>;

  /**
   * Emitted when the date/time value changes via user interaction.
   *
   * Fires in two scenarios:
   * - When the input loses focus (blur) and the value has changed
   * - When a new date/time is selected in the picker and confirmed
   *
   * Does NOT fire when:
   * - The picker is opened/closed without confirming a change
   * - The input is blurred without modifying the value
   * - The value is changed programmatically via the value property
   */
  @Event() ixChange!: EventEmitter<string | undefined>;

  @State() isInputInvalid: boolean = false;

  @State() isInvalid: boolean = false;

  @State() isValid: boolean = false;

  @State() isInfo: boolean = false;

  @State() isWarning: boolean = false;

  private readonly slotStartRef = makeRef<HTMLDivElement>();
  private readonly slotEndRef = makeRef<HTMLDivElement>();
  private readonly inputElementRef = makeRef<HTMLInputElement>();
  private readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  private readonly datetimePickerRef = makeRef<HTMLIxDatetimePickerElement>();

  @State() show: boolean = false;

  @State() from?: string | null = null;

  @State() time?: string | null = null;

  private classObserver?: ClassMutationObserver;

  public initialValue?: string;

  public invalidReason?: string;

  public touched = false;

  public validityTracker: PickerValidityStateTracker =
    createPickerValidityStateTracker();
  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  @Watch('value')
  watchValuePropHandler(newValue: string) {
    this.onInput(newValue);
    this.syncPickerState();
  }

  private get combinedFormat(): string {
    return this.format;
  }

  private get dateOnlyFormat(): string {
    const timeTokenIndex = this.format.search(/[HhmsaSZ]/);
    if (timeTokenIndex === -1) return this.format;
    let end = timeTokenIndex;
    while (end > 0 && " \t'T".includes(this.format[end - 1])) {
      end--;
    }
    return this.format.slice(0, end);
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
      this.from = dateTime.toFormat(this.format);
      this.time = dateTime.toFormat(this.format);
    } else {
      this.from = null;
      this.time = null;
    }
  }

  async onInput(value: string | undefined) {
    this.value = value;
    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = undefined;
      this.emitValidityStateChangeIfChanged();
      this.formInternals.setFormValue(null);
      this.valueChange.emit(value);
      return;
    }

    if (!this.format) {
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
      this.formInternals.setFormValue(null);
    } else {
      this.formInternals.setFormValue(value);
    }

    this.emitValidityStateChangeIfChanged();
    this.valueChange.emit(value);
  }

  private parseConstraintDate(
    dateString: string | undefined,
    boundary: 'start' | 'end'
  ): DateTime | null {
    if (!dateString) {
      return null;
    }

    const localeOpts = { locale: this.locale };

    let parsed = DateTime.fromFormat(dateString, this.format, localeOpts);

    if (!parsed.isValid) {
      parsed = DateTime.fromFormat(dateString, this.dateOnlyFormat, localeOpts);
    }

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

    // If no value is set, initialize picker to current datetime for better UX
    // (shows current time scrolled into view, but nothing is selected until user clicks)
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.from = now.toFormat(this.format);
        this.time = now.toFormat(this.format);
      }
    }
  }

  onCalendarClick(event: Event) {
    handleIconClick(
      event,
      this.show,
      () => this.openDropdown(),
      this.inputElementRef
    );
  }

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
  }

  /**
   * Returns whether the input has a value.
   * @internal
   */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(!!this.value);
  }

  /**
   * Returns the associated HTML form element.
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
   * Returns whether the input field has been touched.
   * @internal
   */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  /**
   * Returns the validity state of the input.
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
      typeMismatch: !!(
        this.invalidReason &&
        this.invalidReason !== 'rangeUnderflow' &&
        this.invalidReason !== 'rangeOverflow'
      ),
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

  private emitValidityStateChangeIfChanged() {
    return emitPickerValidityState(this);
  }

  private emitChange(value: string | undefined) {
    if (this.initialValue !== value) {
      this.ixChange.emit(value);
      this.initialValue = value;
    }
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
    this.initialValue = this.value;
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

    const dateOnly = DateTime.fromFormat(from, this.format, {
      locale: this.locale,
    });
    const timeOnly = DateTime.fromFormat(time, this.format, {
      locale: this.locale,
    });

    const dateTimeCombined = dateOnly.set({
      hour: timeOnly.hour,
      minute: timeOnly.minute,
      second: timeOnly.second,
      millisecond: timeOnly.millisecond,
    });

    const displayValue = dateTimeCombined.toFormat(this.format);
    this.onInput(displayValue);
    this.emitChange(displayValue);
    this.closeDropdown();
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
            onInputBlurWithChange(
              this,
              this.inputElementRef.current,
              this.value
            );
            this.touched = true;
            this.emitValidityStateChangeIfChanged();
          }}
          onClick={(event) => {
            if (this.show) {
              event.stopPropagation();
              event.preventDefault();
            }
          }}
          onFocus={() => {
            onInputFocus(this, this.value);
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
            aria-label={this.ariaLabelCalendarButton}
            tabindex={-1}
            class={{ 'calendar-hidden': this.disabled || this.readonly }}
            variant="subtle-tertiary"
            icon={iconCalendar}
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
          class="datetime-dropdown"
          closeBehavior="outside"
          data-testid="datetime-dropdown"
          enableTopLayer={this.enableTopLayer}
          ref={this.dropdownElementRef}
          show={this.show}
          suppressOverflowBehavior
          trigger={this.inputElementRef.waitForCurrent()}
          onShowChanged={(event) => {
            this.show = event.detail;
          }}
          focusTrapOptions={{
            targetElement: this.datetimePickerRef,
            trapFocusInShadowDom: true,
          }}
          callbackFocusElement={async () => {
            const datetimePicker = this.datetimePickerRef.current;
            if (datetimePicker) {
              const datePickerElement =
                await datetimePicker.getDatepickerElement();
              datePickerElement?.focusActiveDay();
            }
            return true;
          }}
          keyboardActivationKeys={['ArrowUp', 'ArrowDown']}
        >
          <ix-datetime-picker
            ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
            ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
            dateFormat={this.format}
            embedded
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
            timeFormat={this.format}
            weekStartIndex={this.weekStartIndex}
            onDateSelect={this.handleDateSelect}
          ></ix-datetime-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
