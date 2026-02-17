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
import { Slot } from '../input/input.fc';
import {
  onInputFocus,
  onInputBlurWithChange,
  onEnterKeyChangeEmit,
} from '../input/input.util';
import {
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
  getValidationText,
  shouldSuppressInternalValidation,
  watchValue,
  renderFieldWrapper,
  handleValidationLifecycle,
  onInput,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
} from '../utils/input';
import {
  createPickerValidityStateTracker,
  emitPickerValidityState,
  handleIconClick,
  createInputRenderer,
  createRenderConfig,
  createInputConfig,
} from '../utils/input/picker-input.util';
import type {
  PickerInputValidityState as DateInputValidityState,
  PickerValidityStateTracker,
} from '../utils/input/picker-input.types';
import { BasePickerInput } from '../utils/input/base-picker-input';
import { makeRef } from '../utils/make-ref';

const DATE_DROPDOWN_TEST_ID = 'date-dropdown';

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
export class DateInput
  extends BasePickerInput
  implements IxInputFieldComponent<string | undefined>
{
  @Element() hostElement!: HTMLIxDateInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  @State() isInputInvalid: boolean = false;
  @State() protected show = false;
  @State() protected suppressValidation = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() protected focus = false;

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
      required: this.required,
      onInput: (value: string) => void this.onInput(value),
      setTouched: (touched: boolean) => (this.touched = touched),
      isClearing: this.isClearing,
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
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * Input change event.
   */
  @Event({ cancelable: false }) valueChange!: EventEmitter<string | undefined>;

  /**
   * Validation state change event.
   */
  @Event() validityStateChange!: EventEmitter<DateInputValidityState>;

  /**
   * Native change event.
   * @since 4.4.0
   */
  @Event() ixChange!: EventEmitter<string>;

  /** @internal */
  @Event() ixFocus!: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur!: EventEmitter<void>;

  @State() from?: string | null = null;

  private readonly datepickerRef = makeRef<HTMLIxDatePickerElement>();

  /** @internal */
  initialValue?: string;

  /** @internal */
  public validityTracker: PickerValidityStateTracker =
    createPickerValidityStateTracker();

  connectedCallback(): void {
    this.initializeObservers();
  }

  componentWillLoad(): void {
    this.initialValue = this.value;
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
    } else {
      this.watchValue();
    }

    this.updateFormInternalValue(this.value);
  }

  disconnectedCallback(): void {
    this.destroyObservers();
  }

  @Watch('value')
  watchValue() {
    this.from = this.value;
  }

  @HookValidationLifecycle()
  hookValidationLifecycle(results: ValidationResults) {
    const shouldShowInputInvalid = this.isInputInvalid && this.touched;

    handleValidationLifecycle(
      this.suppressValidation,
      shouldShowInputInvalid,
      results,
      {
        setIsInvalid: (value) => (this.isInvalid = value),
        setIsInfo: (value) => (this.isInfo = value),
        setIsValid: (value) => (this.isValid = value),
        setIsWarning: (value) => (this.isWarning = value),
      }
    );
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
    this.value = value;
    this.suppressValidation = await shouldSuppressInternalValidation(this);

    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = undefined;
      emitPickerValidityState(this);
      this.updateFormInternalValue(value);
      this.valueChange.emit(value);
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
      ? (date.invalidReason ?? undefined)
      : undefined;

    emitPickerValidityState(this);

    if (isDateInvalid) {
      this.handleInvalidInput(value);
    } else {
      this.handleValidInput(value);
    }
  }

  async onCalendarClick(event: Event) {
    await handleIconClick(
      event,
      this.show,
      () => this.dropdownMethods.openDropdown(),
      this.inputElementRef
    );
  }

  updateFormInternalValue(value: string | undefined): void {
    if (value) {
      this.formInternals.setFormValue(value);
    } else {
      this.formInternals.setFormValue(null);
    }
    this.value = value;
  }

  private emitChangesAndSyncValue(value: string | undefined): void {
    this.emitChangesAndSync(
      value,
      this.valueChange,
      (val) => this.updateFormInternalValue(val),
      this.required
    );
  }

  private handleValidInput(value: string | undefined): void {
    this.from = value;
    this.dropdownMethods.closeDropdown();
    this.emitChangesAndSyncValue(value);
  }

  private handleInvalidInput(value: string | undefined): void {
    this.touched = true;
    this.from = undefined;
    this.emitChangesAndSyncValue(value);
  }

  private renderInput() {
    const renderPickerInputFn = createInputRenderer(h, Slot);
    const config = createInputConfig(
      this,
      <ix-icon-button
        data-testid="open-calendar"
        class={{ 'calendar-hidden': this.disabled || this.readonly }}
        variant="subtle-tertiary"
        icon={iconCalendar}
        onClick={(event) => this.onCalendarClick(event)}
        aria-label={this.ariaLabelCalendarButton}
        aria-expanded={this.show}
      ></ix-icon-button>,
      this.value ?? ''
    );
    const eventConfig = this.getEventConfig();
    return renderPickerInputFn(config, {
      onInput: onInput(eventConfig),
      onClick: onClick(eventConfig),
      onFocus: async () => {
        onInputFocus(this, this.value);
        await onFocus(eventConfig)();
      },
      onBlur: () => {
        onInputBlurWithChange(this, this.inputElementRef.current, this.value);
        onBlur(eventConfig)();
      },
      onKeyDown: (event: KeyboardEvent) => {
        onEnterKeyChangeEmit(event, this, this.value);
        onKeyDown(eventConfig)(event);
      },
    });
  }

  render() {
    const invalidText = getValidationText(
      this.isInputInvalid,
      this.invalidText,
      this.i18nErrorDateUnparsable
    );

    const config = createRenderConfig(
      this,
      this.renderInput(),
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
          if (this.initialValue !== from) {
            this.ixChange.emit(from ?? '');
            this.initialValue = from ?? undefined;
          }
        }}
        showWeekNumbers={this.showWeekNumbers}
        ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
        ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
        embedded
      ></ix-date-picker>,
      DATE_DROPDOWN_TEST_ID
    );

    config.invalidText = invalidText;

    return renderFieldWrapper(config);
  }
}
