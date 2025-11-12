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
  resetInputField,
  ResetConfig,
  shouldSuppressInternalValidation,
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
    if (this.isResetting) {
      this.onInput(newValue);
      return;
    }

    if (!newValue && this.required) {
      this.touched = true;
    }
    this.dirty = newValue !== this.initialValue;
    this.onInput(newValue);
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
  private dirty = false;
  private isResetting = false;
  private initialValue?: string;
  private suppressValidation = false;

  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

  private handleInputKeyDown(event: KeyboardEvent) {
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

    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.value = now.toFormat(this.format);
        this.initialValue = this.value;
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

    if (!this.isResetting) {
      this.dirty = value !== this.initialValue;
    }

    const skipValidation = await shouldSuppressInternalValidation(this);
    this.suppressValidation = skipValidation;

    if (!value) {
      this.isInputInvalid = false;
      this.updateFormInternalValue(value);
      this.valueChange.emit(value);
      this.syncValidationClasses();
      return;
    }

    if (!this.format) {
      return;
    }

    const time = DateTime.fromFormat(value, this.format);
    if (time.isValid) {
      this.isInputInvalid = false;
    } else {
      this.isInputInvalid = true;
      this.invalidReason = time.invalidReason;
    }

    this.updateFormInternalValue(value);
    this.valueChange.emit(value);
    this.syncValidationClasses();
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
    this.isInvalid = this.hostElement.classList.contains('ix-invalid');
  }

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
            if (!this.isResetting) {
              this.touched = true;
            }
            this.onInput(target.value);
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
          onBlur={() => {
            this.ixBlur.emit();
            if (!this.isResetting) {
              this.touched = true;
            }
            this.syncValidationClasses();
          }}
          onKeyDown={(event) => this.handleInputKeyDown(event)}
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
   * Returns whether the input field is dirty (value has been changed).
   * @internal
   */
  @Method()
  isDirty(): Promise<boolean> {
    return Promise.resolve(this.dirty);
  }

  /**
   * @internal
   */
  syncValidationClasses(): void {
    if (this.suppressValidation) {
      return;
    }

    const isValuePresent = this.required ? !!this.value : true;
    const touched = this.touched;
    const isRequiredInvalid = this.required && !isValuePresent && touched;
    const shouldShowPatternMismatch = this.isInputInvalid && touched;

    if (this.required) {
      this.hostElement.classList.toggle(
        'ix-invalid--required',
        isRequiredInvalid
      );
    } else {
      this.hostElement.classList.remove('ix-invalid--required');
    }

    this.hostElement.classList.toggle(
      'ix-invalid--validity-patternMismatch',
      shouldShowPatternMismatch
    );
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
    };

    return resetInputField(resetConfig);
  }

  render() {
    const invalidText = this.isInputInvalid
      ? this.i18nErrorTimeUnparsable
      : this.invalidText;

    return (
      <Host
        class={{
          disabled: this.disabled,
          readonly: this.readonly,
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
          suppressOverflowBehavior={true}
          show={this.show}
          onShowChanged={(event) => {
            this.show = event.detail;
          }}
        >
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
        </ix-dropdown>
      </Host>
    );
  }
}
