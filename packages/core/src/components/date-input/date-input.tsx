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
  Host,
  Listen,
  Method,
  Mixin,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { SlotEnd, SlotStart } from '../input/input.fc';
import {
  clearInputValue,
  DisposableChangesAndVisibilityObservers,
  PickerValidityStateTracker,
  addDisposableChangesAndVisibilityObservers,
  adjustPaddingForStartAndEnd,
  createPickerValidityStateTracker,
  emitPickerValidityState,
  handleSubmitOnEnterKeydown,
  onInputBlurWithChange,
  syncRequiredValidationClass,
} from '../input/input.util';
import {
  ClassMutationObserver,
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
  createClassMutationObserver,
  reportFieldValidity,
  shouldSuppressInternalValidation,
} from '../utils/input';
import {
  closeDropdown as closeDropdownUtil,
  createValidityState,
  focusInputIfKeyboardMode,
  handleIconClick,
  handlePickerHostFocusout,
  handlePickerInputBlur,
  openDropdown as openDropdownUtil,
  resetPickerValueIfInvalid,
  syncCustomInputValidity,
} from '../utils/input/picker-input.util';
import { MakeRef, makeRef } from '../utils/make-ref';
import type { DateInputValidityState } from './date-input.types';
import { DefaultMixins } from '../utils/internal/component';
import {
  InputPickerMixin,
  InputPickerMixinContract,
} from '../utils/internal/mixins/input/input-picker.mixin';
import { forceTabIndex } from '../utils/a11y';

/**
 * @form-ready
 *
 * @slot start - Element will be displayed at the start of the input
 * @slot end - Element will be displayed at the end of the input
 */
@Component({
  tag: 'ix-date-input',
  styleUrl: 'date-input.scss',
  shadow: {
    delegatesFocus: true,
  },
  formAssociated: true,
})
export class DateInput
  extends Mixin(...DefaultMixins, InputPickerMixin)
  implements IxInputFieldComponent<string | undefined>, InputPickerMixinContract
{
  @Element() override hostElement!: HTMLIxDateInputElement;
  @AttachInternals() formInternals!: ElementInternals;

  /**
   * Name of the input element.
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Placeholder of the input element.
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * Value of the input element.
   */
  @Prop({ reflect: true, mutable: true }) value?: string = '';

  @Watch('value') watchValuePropHandler(newValue: string) {
    this.onInput(newValue);
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
   * Required attribute.
   */
  @Prop() required?: boolean;

  @Watch('required')
  async onRequiredChange() {
    await syncRequiredValidationClass(this.hostElement, this);
  }

  /**
   * Helper text below the input field.
   */
  @Prop() helperText?: string;

  /**
   * Label of the input field.
   */
  @Prop() label?: string;

  /**
   * ARIA label for the calendar icon button.
   * Will be set as aria-label on the nested HTML button element.
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelCalendarButton?: string = 'Open calendar';

  /**
   * Error text below the input field.
   */
  @Prop({ reflect: true }) invalidText?: string;

  /**
   * Readonly attribute.
   */
  @Prop() readonly: boolean = false;

  /**
   * Disabled attribute.
   */
  @Prop() disabled: boolean = false;

  /**
   * Info text below the input field.
   */
  @Prop() infoText?: string;

  /**
   * Warning text below the input field.
   */
  @Prop() warningText?: string;

  /**
   * Valid text below the input field.
   */
  @Prop() validText?: string;

  /**
   * Show text as tooltip.
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * I18n string for the error message when the date is not parsable.
   */
  @Prop({ attribute: 'i18n-error-date-unparsable' }) i18nErrorDateUnparsable =
    'Date is not valid';

  /**
   * I18n string for the error message when a required field is empty.
   *
   * @since 5.1.0
   */
  @Prop({ attribute: 'i18n-error-required' }) i18nErrorRequired =
    'This field is required';

  /**
   * Shows week numbers displayed on the left side of the date picker.
   *
   * @since 3.0.0
   */
  @Prop() showWeekNumbers = false;

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * ARIA label for the previous month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  @Prop() ariaLabelPreviousMonthButton?: string = 'Previous month';

  /**
   * ARIA label for the next month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  @Prop() ariaLabelNextMonthButton?: string = 'Next month';

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
   * Value change event. Emitted when the input value changes.
   */
  @Event({ cancelable: false }) valueChange!: EventEmitter<string | undefined>;

  /**
   * Validation state change event. Emitted when the validation state changes.
   */
  @Event() validityStateChange!: EventEmitter<DateInputValidityState>;

  /** @internal */
  @Event() ixFocus!: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur!: EventEmitter<void>;
  /**
   * Change event. Emitted when the date input loses focus and the value has changed.
   *
   * @since 4.4.0
   */
  @Event() ixChange!: EventEmitter<string | undefined>;
  @State() show = false;
  @State() from?: string | null = null;
  @State() isInputInvalid = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() focus = false;

  private readonly slotStartRef = makeRef<HTMLDivElement>();
  private readonly slotEndRef = makeRef<HTMLDivElement>();
  private readonly datepickerRef = makeRef<HTMLIxDatePickerElement>();
  private readonly inputElementRef = makeRef<HTMLInputElement>();
  private readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();

  private classObserver?: ClassMutationObserver;

  /**
   * Tracks actual parse/format invalidity regardless of touched state.
   * Used for internal validity queries (getValidityState, reportValidity).
   * Visual feedback is gated on `touched`.
   */
  private _hasInvalidInput = false;

  /**
   * Set to `true` by `onBlur` when a genuine (non-suppressed) external blur
   * runs validation.  Read and reset by `onFocusout` to avoid re-running the
   * same validation path a second time (onBlur → onFocusout both fire for a
   * direct tab-away).
   */
  private _blurHandledValidation = false;

  /**
   * Set to `true` only by an explicit `reportValidity()` call — NOT by blur.
   * Used as the gate in novalidate forms to keep showing errors after an
   * explicit validation request until the value is actually corrected.
   * Regular blur in a novalidate form must never set this flag so that normal
   * novalidate suppression is preserved.
   */
  private _reportValidityCalled = false;

  public initialValue?: string;

  public invalidReason?: string;

  public touched = false;

  public validityTracker: PickerValidityStateTracker =
    createPickerValidityStateTracker();

  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  private syncFormInternalsValidity(): void {
    syncCustomInputValidity(
      this.formInternals,
      this._hasInvalidInput,
      this.required,
      this.value,
      this.invalidReason ?? this.i18nErrorDateUnparsable,
      this.i18nErrorRequired
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

  override connectedCallback(): void {
    this.classObserver = createClassMutationObserver(this.hostElement, () =>
      this.checkClassList()
    );

    this.disposableChangesAndVisibilityObservers =
      addDisposableChangesAndVisibilityObservers(
        this.hostElement,
        this.updatePaddings.bind(this)
      );
  }

  override async componentWillLoad(): Promise<void> {
    await this.onInput(this.value);
    if (this._hasInvalidInput) {
      this.from = null;
    } else {
      this.watchValue();
    }

    this.checkClassList();
    this.updateFormInternalValue(this.value);
    this.syncFormInternalsValidity();
  }

  private updatePaddings() {
    adjustPaddingForStartAndEnd(
      this.slotStartRef.current,
      this.slotEndRef.current,
      this.inputElementRef.current
    );
  }

  override disconnectedCallback(): void {
    this.classObserver?.destroy();
    this.disposableChangesAndVisibilityObservers?.();
  }

  @Watch('value')
  watchValue() {
    this.from = this.value;
  }

  @Listen('invalid')
  async onInvalid(event: Event) {
    // Prevent the browser's native validation tooltip — the component provides
    // its own styled error message via ix-field-wrapper. Calling preventDefault()
    // suppresses the bubble but does not affect the validity result returned by
    // form.reportValidity().
    event.preventDefault();
    await reportFieldValidity(this, this._hasInvalidInput);
  }

  /**
   * Clears the input value and resets the touched state.
   *
   * Unlike clearing the value directly, this method restores the initial,
   * non-invalid state and removes visible validation errors.
   *
   * @since 5.1.0
   */
  @Method()
  async clear(): Promise<void> {
    this._hasInvalidInput = false;
    this._reportValidityCalled = false;
    await clearInputValue(this, {
      additionalCleanup: () => {
        this.from = undefined;
      },
    });
    this.syncFormInternalsValidity();
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

  private getDateValidation(value: string): {
    isValid: boolean;
    invalidReason?: string;
  } {
    const date = DateTime.fromFormat(value, this.format);
    const minDate = DateTime.fromFormat(this.minDate, this.format);
    const maxDate = DateTime.fromFormat(this.maxDate, this.format);

    return {
      isValid:
        date.isValid &&
        (!minDate.isValid || date >= minDate) &&
        (!maxDate.isValid || date <= maxDate),
      invalidReason: date.invalidReason ?? undefined,
    };
  }

  private async handleEmptyInput(value: string | undefined): Promise<void> {
    this._hasInvalidInput = false;
    this.isInputInvalid = false;
    this.invalidReason = undefined;
    // Remove any stale parse-error host classes from a prior reportValidity()
    // call. The value is now empty so those errors no longer apply.
    this.hostElement.classList.remove(
      'ix-invalid--validity-invalid',
      'ix-invalid--validity-patternMismatch'
    );
    // In a regular form, show the required-missing error once the user has
    // interacted (touched via blur or reportValidity).
    // In a novalidate form, only show it when reportValidity() was explicitly
    // called — a plain blur must not surface errors (novalidate intent).
    const suppress = await shouldSuppressInternalValidation(this);
    const shouldShowRequired = suppress
      ? this._reportValidityCalled && !!this.required
      : this.touched && !!this.required;

    if (shouldShowRequired) {
      this.hostElement.classList.add('ix-invalid--required');
    } else {
      this.hostElement.classList.remove('ix-invalid--required');
    }
    this.updateFormInternalValue(value);
    this.syncFormInternalsValidity();
    emitPickerValidityState(this);
    this.valueChange.emit(value);
  }

  private emitSuppressedValidationChange(value: string): void {
    this.syncFormInternalsValidity();
    emitPickerValidityState(this);
    this.valueChange.emit(value);
  }

  // Clears all error state and accepts the value as valid.
  // Used for normal novalidate input AND when the user corrects a
  // reportValidity() error.
  private acceptSuppressedValidationValue(value: string): void {
    this._hasInvalidInput = false;
    this.isInputInvalid = false;
    this.invalidReason = undefined;
    this.isInvalid = false;
    this.hostElement.classList.remove(
      'ix-invalid--required',
      'ix-invalid--validity-invalid',
      'ix-invalid--validity-patternMismatch'
    );
    this.updateFormInternalValue(value);

    resetPickerValueIfInvalid(
      value,
      (currentValue) => this.getDateValidation(currentValue).isValid,
      () => {
        this.from = undefined;
      }
    );

    this.closeDropdown();
    focusInputIfKeyboardMode(this.inputElementRef.current);
    this.emitSuppressedValidationChange(value);
  }

  // Keeps the parse-error classes and message visible after reportValidity().
  private keepSuppressedValidationErrorVisible(
    value: string,
    invalidReason?: string
  ): void {
    this.invalidReason = invalidReason;
    this.from = undefined;
    this.isInvalid = true;
    this.hostElement.classList.remove('ix-invalid--required');
    this.hostElement.classList.add('ix-invalid--validity-invalid');
    this.emitSuppressedValidationChange(value);
  }

  private handleSuppressedValidationInput(value: string): void {
    // When reportValidity() was called explicitly, keep validating in the
    // novalidate form until the value is actually fixed (WCAG 1.4.1 / 3.3.1).
    // NOTE: `touched` is intentionally NOT used — it is set by plain blur too,
    // and blur in a novalidate form must never surface errors.
    if (!this._reportValidityCalled) {
      this.acceptSuppressedValidationValue(value);
      return;
    }

    const validation = this.getDateValidation(value);
    this._hasInvalidInput = !validation.isValid;
    this.isInputInvalid = this._hasInvalidInput;

    if (this._hasInvalidInput) {
      this.keepSuppressedValidationErrorVisible(
        value,
        validation.invalidReason
      );
      return;
    }

    // Value is now valid — reset the flag so normal novalidate suppression resumes.
    this._reportValidityCalled = false;
    this.acceptSuppressedValidationValue(value);
  }

  private handleValidatedInput(value: string): void {
    const validation = this.getDateValidation(value);

    this._hasInvalidInput = !validation.isValid;
    // Only show visual invalid state when the user has interacted
    this.isInputInvalid = this._hasInvalidInput && this.touched;

    if (this._hasInvalidInput) {
      this.invalidReason = validation.invalidReason;
      this.from = undefined;
    } else {
      this.invalidReason = undefined;
      this.updateFormInternalValue(value);
      this.closeDropdown();
      focusInputIfKeyboardMode(this.inputElementRef.current);
    }

    this.syncFormInternalsValidity();
    emitPickerValidityState(this);
    this.valueChange.emit(value);
  }

  async onInput(value: string | undefined) {
    this.value = value;
    if (!value) {
      await this.handleEmptyInput(value);
      return;
    }

    if (!this.format) {
      return;
    }

    // Set _hasInvalidInput synchronously BEFORE the async suppression check so
    // that if blur fires during the microtask gap, it always reads the correct
    // state. handleValidatedInput and handleSuppressedValidationInput will
    // overwrite it with the same (or reset) value afterwards.
    const validation = this.getDateValidation(value);
    this._hasInvalidInput = !validation.isValid;

    const suppressValidation = await shouldSuppressInternalValidation(this);
    if (suppressValidation) {
      this.handleSuppressedValidationInput(value);
      return;
    }

    this.handleValidatedInput(value);
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
    this.isInvalid = this.hostElement.classList.contains('ix-invalid');
  }

  private handleInputKeyDown(event: KeyboardEvent) {
    handleSubmitOnEnterKeydown(
      event,
      this.suppressSubmitOnEnter,
      this.formInternals.form
    );
  }

  private renderInput() {
    return (
      <div class="input-wrapper">
        <SlotStart
          slotStartRef={this.slotStartRef}
          onSlotChange={() => this.updatePaddings()}
        ></SlotStart>
        <input
          aria-haspopup="true"
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
          onInput={(event) => {
            const target = event.target as HTMLInputElement;
            this.onInput(target.value);
          }}
          onClick={(event) => {
            if (this.show) {
              event.stopPropagation();
              event.preventDefault();
            }
          }}
          onFocus={async () => {
            this.ixFocus.emit();
          }}
          onBlur={(e: FocusEvent) =>
            handlePickerInputBlur(e, this.show, this.hostElement, () => {
              this.touched = true;
              this.isInputInvalid = this._hasInvalidInput;
              onInputBlurWithChange(
                this,
                this.inputElementRef.current,
                this.value
              );
              emitPickerValidityState(this);
              // Signal to onFocusout (which fires right after) that validation
              // has already been committed so it should not repeat it.
              this._blurHandledValidation = true;
            })
          }
          onKeyDown={(event) => this.handleInputKeyDown(event)}
          style={{
            textAlign: this.textAlignment,
          }}
        ></input>
        <SlotEnd
          slotEndRef={this.slotEndRef}
          onSlotChange={() => this.updatePaddings()}
        >
          <ix-icon-button
            tabindex={-1}
            ref={(ref) => forceTabIndex(ref, -1)}
            aria-label={this.ariaLabelCalendarButton}
            data-testid="open-calendar"
            class={{ 'calendar-hidden': this.disabled || this.readonly }}
            variant="subtle-tertiary"
            size="16"
            icon={iconCalendar}
            onClick={(event) => this.onCalenderClick(event)}
          ></ix-icon-button>
        </SlotEnd>
      </div>
    );
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

  /** @internal */
  @Method()
  getValidityState(): Promise<ValidityState> {
    // Gate patternMismatch on touched — same as isInputInvalid.
    // HookValidationLifecycle reads this to set ix-invalid--validity-patternMismatch
    // on the host, which drives visual feedback. We must not show errors before
    // the user has interacted.
    // The actual form validity for form.reportValidity() is handled separately
    // by syncFormInternalsValidity() which always reflects the true parse state.
    return Promise.resolve(
      createValidityState(
        this._hasInvalidInput && this.touched,
        !!this.required && this.touched,
        this.value
      )
    );
  }

  /**
   * Get the native input element
   */
  @Method()
  getNativeInputElement(): Promise<HTMLInputElement> {
    return this.inputElementRef.waitForCurrent();
  }

  /**
   * Focuses the input field
   */
  @Method()
  async focusInput(): Promise<void> {
    return (await this.getNativeInputElement()).focus();
  }

  /**
   * Returns whether the text field has been touched.
   * @internal
   */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  /**
   * Triggers validation and shows visual error state immediately, regardless
   * of whether the user has interacted with the field.
   *
   * Use this when submitting via AJAX (no HTML form) or when you need to
   * programmatically surface validation errors — equivalent to calling
   * `reportValidity()` on a native `<input>` element.
   *
   * Unlike form submit, this explicit validation call is not suppressed by a
   * surrounding `<form novalidate>` and will still surface errors.
   *
   * @returns `true` if the field is valid, `false` otherwise.
   *
   * @since 5.1.0
   */
  @Method()
  async reportValidity(): Promise<boolean> {
    const hasInvalidInput =
      !!this.value &&
      !!this.format &&
      !this.getDateValidation(this.value).isValid;

    // Sync _hasInvalidInput so that subsequent blur events preserve the error
    // state surfaced by this explicit call. Without this, blur resets
    // isInputInvalid back to _hasInvalidInput (which is false in novalidate
    // forms due to suppression), causing the error message to disappear while
    // the red border stays.
    this._hasInvalidInput = hasInvalidInput;

    // Mark that an explicit validation call was made. This allows
    // handleSuppressedValidationInput and handleEmptyInput to keep showing
    // errors in novalidate forms until the value is corrected — while normal
    // blur events in novalidate forms remain suppressed.
    this._reportValidityCalled = true;

    return reportFieldValidity(this, hasInvalidInput);
  }

  getPickerElement(): MakeRef<HTMLIxDropdownElement> | null {
    return this.dropdownElementRef;
  }

  override render() {
    // Error text priority:
    //   1. Parse error  — "Date is not valid" (or i18n override / custom invalidText)
    //   2. Required empty — "This field is required" (or custom invalidText)
    //   3. Consumer-supplied invalidText only
    const isRequiredEmpty = !!this.required && !this.value && this.touched;
    const invalidText = this.isInputInvalid
      ? (this.invalidText ?? this.i18nErrorDateUnparsable)
      : isRequiredEmpty
        ? (this.invalidText ?? this.i18nErrorRequired)
        : this.invalidText;

    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
        }}
        onFocusout={(e: FocusEvent) =>
          handlePickerHostFocusout(e, this.hostElement, (hasRelatedTarget) => {
            // Only close the dropdown when focus went to a known external
            // element.  When relatedTarget is null (focus to <body> or a
            // programmatic blur from tests) the dropdown's closeBehavior
            // handles it, and closing here risks a flicker during rerenders.
            if (hasRelatedTarget) {
              this.closeDropdown();
            }

            // When the input's onBlur was suppressed (picker was open,
            // focus moved to an internal element) we must now run the full
            // validation — the user has truly left the component.
            // When onBlur already ran validation (direct tab-away), skip it
            // here to avoid double-emitting ixBlur / ixChange.
            if (this._blurHandledValidation) {
              this._blurHandledValidation = false;
              return;
            }

            this.touched = true;
            this.isInputInvalid = this._hasInvalidInput;
            onInputBlurWithChange(
              this,
              this.inputElementRef.current,
              this.value
            );
            emitPickerValidityState(this);
          })
        }
      >
        <ix-field-wrapper
          label={this.label}
          helperText={this.helperText}
          isInvalid={this.isInvalid}
          invalidText={invalidText}
          infoText={this.infoText}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          warningText={this.warningText}
          isValid={this.isValid}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          required={this.required}
          controlRef={this.inputElementRef}
        >
          {this.renderInput()}
        </ix-field-wrapper>
        <ix-dropdown
          data-testid="date-dropdown"
          trigger={this.inputElementRef.waitForCurrent()}
          ref={this.dropdownElementRef}
          closeBehavior="outside"
          enableTopLayer={this.enableTopLayer}
          suppressOverflowBehavior
          show={this.show}
          onShowChanged={(event) => {
            this.show = event.detail;
          }}
          focusTrapOptions={{
            targetElement: this.datepickerRef,
            trapFocusInShadowDom: true,
          }}
          callbackFocusElement={async () => {
            this.datepickerRef.current?.focusActiveDay();
            return true;
          }}
          keyboardActivationKeys={['ArrowUp', 'ArrowDown']}
        >
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
                this.ixChange.emit(from);
                this.initialValue = from;
              }
            }}
            showWeekNumbers={this.showWeekNumbers}
            ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
            ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
            embedded
          ></ix-date-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
