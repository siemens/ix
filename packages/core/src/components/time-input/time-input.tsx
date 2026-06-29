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
import { IxTimePickerCustomEvent } from '../../components';
import { SlotEnd, SlotStart } from '../input/input.fc';
import {
  clearInputValue,
  syncRequiredValidationClass,
  DisposableChangesAndVisibilityObservers,
  PickerValidityStateTracker,
  addDisposableChangesAndVisibilityObservers,
  adjustPaddingForStartAndEnd,
  createPickerValidityStateTracker,
  emitPickerValidityState,
  handleSubmitOnEnterKeydown,
  onEnterKeyChangeEmit,
  onInputBlurWithChange,
} from '../input/input.util';
import {
  getTimePickerConstraintBounds,
  isWithinTimePickerConstraints,
} from '../time-picker/time-picker-constraints';
import {
  ClassMutationObserver,
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
  createClassMutationObserver,
  getValidationText,
} from '../utils/input';
import {
  reportFieldValidity,
  shouldSuppressInternalValidation,
} from '../utils/input/validation';
import {
  closeDropdown as closeDropdownUtil,
  createValidityState,
  focusInputIfKeyboardMode,
  handleIconClick,
  openDropdown as openDropdownUtil,
  suppressInputBlurWhenFocusMovedToPicker,
  syncCustomInputValidity,
} from '../utils/input/picker-input.util';
import { DefaultMixins } from '../utils/internal/component';
import {
  InputPickerMixin,
  InputPickerMixinContract,
} from '../utils/internal/mixins/input/input-picker.mixin';
import { MakeRef, makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import type { TimeInputValidityState } from './time-input.types';
import { forceTabIndex } from '../utils/a11y';

/**
 * @since 3.2.0
 * @form-ready
 * @slot start - Element will be displayed at the start of the input
 * @slot end - Element will be displayed at the end of the input
 */
@Component({
  tag: 'ix-time-input',
  styleUrl: 'time-input.scss',
  shadow: {
    delegatesFocus: true,
  },
  formAssociated: true,
})
export class TimeInput
  extends Mixin(...DefaultMixins, InputPickerMixin)
  implements IxInputFieldComponent<string>, InputPickerMixinContract
{
  @Element() override hostElement!: HTMLIxTimeInputElement;
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
  @Prop({ reflect: true, mutable: true }) value: string = '';

  @Watch('value') watchValuePropHandler(newValue: string) {
    this.onInput(newValue);
  }

  /**
   * Format of time string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format: string = 'TT';

  /**
   * Earliest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  @Prop() minTime?: string;

  /**
   * Latest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  @Prop() maxTime?: string;

  @Watch('minTime')
  watchMinTimePropHandler() {
    this.revalidateCurrentValue();
  }

  @Watch('maxTime')
  watchMaxTimePropHandler() {
    this.revalidateCurrentValue();
  }

  /**
   * Required attribute.
   */
  @Prop() required?: boolean;

  @Watch('required')
  async watchRequiredPropHandler() {
    await syncRequiredValidationClass(this.hostElement, this);
    this.syncValidityToFormInternals();
  }

  @Listen('invalid')
  async onInvalid(event: Event) {
    event.preventDefault();
    reportFieldValidity(this, this._hasInvalidInput);
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
   * I18n string for the error message when the time is not parsable.
   */
  @Prop({ attribute: 'i18n-error-time-unparsable' }) i18nErrorTimeUnparsable =
    'Time is not valid';

  /**
   * I18n string for the error message when the time field is empty and required.
   *
   * @since 5.1.0
   * @default 'Time is required'
   */
  @Prop({ attribute: 'i18n-error-required' }) i18nErrorRequired =
    'Time is required';

  /**
   * Interval for hour selection.
   */
  @Prop() hourInterval: number = 1;

  /**
   * Interval for minute selection.
   */
  @Prop() minuteInterval: number = 1;

  /**
   * Interval for second selection.
   */
  @Prop() secondInterval: number = 1;

  /**
   * Interval for millisecond selection.
   */
  @Prop() millisecondInterval: number = 100;

  /**
   * Text of the time picker confirm button.
   */
  @Prop({ attribute: 'i18n-select-time' }) i18nSelectTime: string = 'Confirm';

  /**
   * Text for the time picker top label.
   */
  @Prop({ attribute: 'i18n-time' }) i18nTime: string = 'Time';

  /**
   * Text for the time picker hour column header.
   */
  @Prop({ attribute: 'i18n-hour-column-header' }) i18nHourColumnHeader: string =
    'hr';

  /**
   * Text for the time picker minute column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-minute-column-header' })
  i18nMinuteColumnHeader: string = 'min';

  /**
   * Text for the time picker second column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-second-column-header' })
  i18nSecondColumnHeader: string = 'sec';

  /**
   * Text for the time picker millisecond column header.
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
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * ARIA label for the time picker toggle button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 5.0.0
   */
  @Prop() ariaLabelTimeToggleButton?: string = 'Toggle time picker';

  /**
   * Value change event. Emitted when the input value changes.
   */
  @Event({ cancelable: false }) valueChange!: EventEmitter<string>;

  /**
   * Validation state change event. Emitted when the validation state changes.
   */
  @Event() validityStateChange!: EventEmitter<TimeInputValidityState>;

  /** @internal */
  @Event() ixFocus!: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur!: EventEmitter<void>;

  /**
   * Change event. Emitted when the time input loses focus and the value has changed.
   *
   * @since 4.4.0
   */
  @Event() ixChange!: EventEmitter<string>;

  @State() show = false;
  @State() time: string | null = null;
  @State() isInputInvalid = false;
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
  private _hasInvalidInput = false;
  private _reportValidityCalled = false;

  public initialValue?: string;

  public invalidReason?: string;

  public touched = false;

  public validityTracker: PickerValidityStateTracker =
    createPickerValidityStateTracker();

  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  private handleInputKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.show = true;
      requestAnimationFrameNoNgZone(() => {
        const focusableTimeButton =
          this.timePickerRef.current?.shadowRoot?.querySelector<HTMLElement>(
            'button[tabindex="0"]'
          );
        focusableTimeButton?.focus();
      });
    }
    onEnterKeyChangeEmit(event, this, this.value);

    handleSubmitOnEnterKeydown(
      event,
      this.suppressSubmitOnEnter,
      this.formInternals.form
    );
  }

  updateFormInternalValue(value: string): void {
    this.formInternals.setFormValue(value);
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
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.value = now.toFormat(this.format);
      }
    }

    await this.onInput(this.value);

    this.checkClassList();
    this.updateFormInternalValue(this.value);
    this.syncValidityToFormInternals();
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

  /**
   * Clears the input value and resets the touched state. Unlike clearing the value directly, this method restores the initial, non-invalid state and removes visible validation errors.
   *
   * @since 5.1.0
   */
  @Method()
  async clear(): Promise<void> {
    this._hasInvalidInput = false;
    this._reportValidityCalled = false;
    await clearInputValue(this, {
      defaultValue: '',
      additionalCleanup: () => {
        this.syncPickerTimeFromValue();
      },
    });
    this.syncValidityToFormInternals();
  }

  /**
   * Trigger validation and show visual error state immediately, independently
   *
   * of user interaction — for example, in AJAX submissions or manual validation.
   *
   * Not suppressed by `<form novalidate>` — errors surface regardless.
   *
   * @returns `true` if valid, `false` otherwise.
   *
   * @since 5.1.0
   */
  @Method()
  async reportValidity(): Promise<boolean> {
    const hasInvalidInput =
      !!this.value && !!this.validateNonEmptyValue(this.value)?.isInputInvalid;

    this._hasInvalidInput = hasInvalidInput;
    this._reportValidityCalled = true;

    return reportFieldValidity(this, hasInvalidInput);
  }

  private syncValidityToFormInternals(): void {
    syncCustomInputValidity(
      this.formInternals,
      this._hasInvalidInput,
      this.required,
      this.value,
      this.invalidText ?? this.i18nErrorTimeUnparsable,
      this.i18nErrorRequired
    );
  }

  private isWithinConfiguredBounds(parsed: DateTime): boolean {
    const baseDay = parsed.startOf('day');
    const { min, max } = getTimePickerConstraintBounds(
      this.minTime,
      this.maxTime,
      this.format,
      baseDay
    );
    return isWithinTimePickerConstraints(parsed, min, max);
  }

  private syncPickerTimeFromValue(): void {
    const trimmed = this.value?.trim() ?? '';
    if (!trimmed) {
      this.time = null;
      return;
    }

    const parsed = DateTime.fromFormat(trimmed, this.format);
    if (!parsed.isValid) {
      this.time = null;
      return;
    }

    this.time = trimmed;
  }

  private validateNonEmptyValue(value: string): {
    isInputInvalid: boolean;
    invalidReason: string | undefined;
  } | null {
    if (!this.format) {
      return null;
    }

    const time = DateTime.fromFormat(value, this.format);
    if (time.isValid && this.isWithinConfiguredBounds(time)) {
      return {
        isInputInvalid: false,
        invalidReason: undefined,
      };
    }

    return {
      isInputInvalid: true,
      invalidReason: time.isValid
        ? 'customError'
        : (time.invalidReason ?? undefined),
    };
  }

  private async revalidateCurrentValue() {
    if (!this.value) {
      return;
    }

    const validity = this.validateNonEmptyValue(this.value);
    if (!validity) {
      return;
    }

    this._hasInvalidInput = validity.isInputInvalid;

    const suppressValidation = await shouldSuppressInternalValidation(this);
    this.isInputInvalid =
      !suppressValidation && this._hasInvalidInput && this.touched;

    if (this._hasInvalidInput) {
      this.invalidReason = validity.invalidReason;
    } else {
      this.invalidReason = undefined;
      this._reportValidityCalled = false;
      // Clear validation classes when value becomes valid
      this.hostElement.classList.remove(
        'ix-invalid--required',
        'ix-invalid--validity-invalid',
        'ix-invalid--validity-patternMismatch'
      );
      await syncRequiredValidationClass(this.hostElement, this);
    }

    this.emitValidityStateChangeIfChanged();
    this.syncPickerTimeFromValue();
    this.syncValidityToFormInternals();
  }

  private async handleEmptyInput(value: string): Promise<void> {
    this._hasInvalidInput = false;
    this.isInputInvalid = false;
    this.invalidReason = undefined;

    this.hostElement.classList.remove(
      'ix-invalid--validity-invalid',
      'ix-invalid--validity-patternMismatch'
    );

    const suppressValidation = await shouldSuppressInternalValidation(this);
    const shouldShowRequired = suppressValidation
      ? this._reportValidityCalled && !!this.required
      : this.touched && !!this.required;

    this.hostElement.classList.toggle(
      'ix-invalid--required',
      shouldShowRequired
    );

    this.updateFormInternalValue(value);
    this.syncPickerTimeFromValue();
    this.syncValidityToFormInternals();
    this.emitValidityStateChangeIfChanged();
    this.valueChange.emit(value);
  }

  private emitSuppressedValidationChange(value: string): void {
    this.syncPickerTimeFromValue();
    this.syncValidityToFormInternals();
    this.emitValidityStateChangeIfChanged();
    this.valueChange.emit(value);
  }

  private acceptValidAfterReportValidity(
    value: string,
    hasInvalidInput: boolean,
    invalidReason?: string
  ): void {
    this._hasInvalidInput = hasInvalidInput;
    this.isInputInvalid = false;
    this.invalidReason = invalidReason;
    this.isInvalid = false;
    this.hostElement.classList.remove(
      'ix-invalid--required',
      'ix-invalid--validity-invalid',
      'ix-invalid--validity-patternMismatch'
    );
    this.updateFormInternalValue(value);

    if (!hasInvalidInput) {
      this.closeDropdown();
      focusInputIfKeyboardMode(this.inputElementRef.current);
    }

    this.emitSuppressedValidationChange(value);
  }

  private keepReportValidityErrorsVisible(
    value: string,
    invalidReason?: string
  ): void {
    this.invalidReason = invalidReason;
    this.isInvalid = true;
    this.hostElement.classList.remove(
      'ix-invalid--required',
      'ix-invalid--validity-patternMismatch'
    );
    this.hostElement.classList.add('ix-invalid--validity-invalid');
    this.emitSuppressedValidationChange(value);
  }

  private validateInSuppressedMode(value: string): void {
    const validity = this.validateNonEmptyValue(value);
    const hasInvalidInput = !!validity?.isInputInvalid;

    this._hasInvalidInput = hasInvalidInput;

    if (!this._reportValidityCalled) {
      this.acceptValidAfterReportValidity(
        value,
        hasInvalidInput,
        hasInvalidInput ? validity?.invalidReason : undefined
      );
      return;
    }

    this.isInputInvalid = hasInvalidInput;
    if (hasInvalidInput) {
      this.keepReportValidityErrorsVisible(value, validity?.invalidReason);
      return;
    }

    this._reportValidityCalled = false;
    this.acceptValidAfterReportValidity(value, false);
  }

  private async handleValidatedInput(value: string): Promise<void> {
    const validity = this.validateNonEmptyValue(value);
    if (!validity) {
      return;
    }

    this._hasInvalidInput = validity.isInputInvalid;
    this.isInputInvalid = this._hasInvalidInput && this.touched;

    if (this._hasInvalidInput) {
      this.invalidReason = validity.invalidReason;
    } else {
      this.invalidReason = undefined;
      await syncRequiredValidationClass(this.hostElement, this);
      this.updateFormInternalValue(value);
      this.closeDropdown();
      focusInputIfKeyboardMode(this.inputElementRef.current);
    }

    this.syncPickerTimeFromValue();
    this.syncValidityToFormInternals();
    this.emitValidityStateChangeIfChanged();
    this.valueChange.emit(value);
  }

  async onInput(value: string) {
    this.value = value;
    if (!value) {
      await this.handleEmptyInput(value);
      return;
    }

    if (!this.format) {
      return;
    }

    const suppressValidation = await shouldSuppressInternalValidation(this);
    if (suppressValidation) {
      this.validateInSuppressedMode(value);
      return;
    }

    await this.handleValidatedInput(value);
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
    this.syncPickerTimeFromValue();

    return openDropdownUtil(this.dropdownElementRef);
  }

  async closeDropdown() {
    return closeDropdownUtil(this.dropdownElementRef);
  }

  private checkClassList() {
    this.isInvalid =
      this.hostElement.classList.contains('ix-invalid') || this.isInputInvalid;
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
            this.initialValue = this.value;
            this.ixFocus.emit();
          }}
          onBlur={(event: FocusEvent) =>
            suppressInputBlurWhenFocusMovedToPicker({
              event,
              isDropdownOpen: this.show,
              hostElement: this.hostElement,
              onBlur: async () => {
                this.touched = true;

                const suppressValidation =
                  await shouldSuppressInternalValidation(this);
                if (!suppressValidation) {
                  this.isInputInvalid = this._hasInvalidInput;
                }

                onInputBlurWithChange(
                  this,
                  this.inputElementRef.current,
                  this.value
                );
                this.emitValidityStateChangeIfChanged();
                this.syncValidityToFormInternals();
                if (
                  suppressValidation &&
                  this._reportValidityCalled &&
                  this._hasInvalidInput
                ) {
                  requestAnimationFrameNoNgZone(() => {
                    this.hostElement.classList.add(
                      'ix-invalid--validity-invalid'
                    );
                  });
                }
              },
              pickerElement: this.timePickerRef.current,
            })
          }
          onKeyDown={(event) => this.handleInputKeyDown(event)}
        ></input>
        <SlotEnd
          slotEndRef={this.slotEndRef}
          onSlotChange={() => this.updatePaddings()}
        >
          <ix-icon-button
            tabindex={-1}
            ref={(ref) => forceTabIndex(ref, -1)}
            data-testid="open-time-picker"
            class={{ 'time-icon-hidden': this.disabled || this.readonly }}
            variant="subtle-tertiary"
            size="16"
            icon={iconClock}
            onClick={(event) => this.onTimeIconClick(event)}
            aria-label={this.ariaLabelTimeToggleButton}
            aria-expanded={this.show}
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

  private emitValidityStateChangeIfChanged() {
    return emitPickerValidityState(this);
  }

  /** @internal */
  @Method()
  getValidityState(): Promise<ValidityState> {
    return Promise.resolve(
      createValidityState(
        this.isInputInvalid,
        !!this.required && this.touched,
        this.value
      )
    );
  }

  private getInvalidText(): string | undefined {
    const isRequiredEmpty = !!this.required && !this.value && this.touched;

    let invalidText = getValidationText(
      this.isInputInvalid,
      this.invalidText,
      this.i18nErrorTimeUnparsable
    );

    if (!invalidText) {
      invalidText = getValidationText(
        isRequiredEmpty,
        this.invalidText,
        this.i18nErrorRequired
      );
    }

    return invalidText;
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

  getPickerElement(): MakeRef<HTMLIxDropdownElement> | null {
    return this.dropdownElementRef;
  }

  override render() {
    const invalidText = this.getInvalidText();

    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
        }}
        onFocusout={() => {
          this.closeDropdown();
        }}
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
          data-testid="time-dropdown"
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
            targetElement: this.timePickerRef,
            trapFocusInShadowDom: true,
          }}
        >
          <ix-time-picker
            ref={this.timePickerRef}
            format={this.format}
            time={this.time ?? ''}
            minTime={this.minTime}
            maxTime={this.maxTime}
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
              if (this.initialValue !== event.detail) {
                this.ixChange.emit(event.detail);
                this.initialValue = event.detail;
              }
              this.show = false;
              focusInputIfKeyboardMode(this.inputElementRef.current);
            }}
          ></ix-time-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
