/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
import { dropdownController } from '../dropdown/dropdown-controller';
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
} from '../utils/input';
import { makeRef } from '../utils/make-ref';

export type TimeInputValidityState = {
  patternMismatch: boolean;
  invalidReason?: string;
};

/**
 * @since 3.0.0
 * @form-ready 3.0.0
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
   * name of the input element
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * placeholder of the input element
   */
  @Prop({ reflect: true }) placeholder?: string;

  /**
   * value of the input element
   */
  @Prop({ reflect: true, mutable: true }) value: string = '';

  /**
   * Locale identifier (e.g. 'en' or 'de').
   *
   * @since 3.0.0
   */
  @Prop() locale?: string;

  /**
   * Format of time string
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() format: string = 'tt';

  /**
   * required attribute
   */
  @Prop() required?: boolean;

  /**
   * helper text below the input field
   */
  @Prop() helperText?: string;

  /**
   * label of the input field
   */
  @Prop() label?: string;

  /**
   * error text below the input field
   */
  @Prop({ reflect: true }) invalidText?: string;

  /**
   * readonly attribute
   */
  @Prop() readonly: boolean = false;

  /**
   * disabled attribute
   */
  @Prop() disabled: boolean = false;

  /**
   * info text below the input field
   */
  @Prop() infoText?: string;

  /**
   * warning text below the input field
   */
  @Prop() warningText?: string;

  /**
   * valid text below the input field
   */
  @Prop() validText?: string;

  /**
   * show text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * i18n string for the error message when the time is not parsable
   */
  @Prop({ attribute: 'i18n-error-time-unparsable' }) i18nErrorTimeUnparsable =
    'Time is not valid';

  /**
   * Show hour input
   */
  @Prop() showHour = true;

  /**
   * Show minutes input
   */
  @Prop() showMinutes = true;

  /**
   * Show seconds input
   */
  @Prop() showSeconds = true;

  /**
   * Show milliseconds input
   */
  @Prop() showMilliseconds = false;

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

  private disposableChangesAndVisibilityObservers?: DisposableChangesAndVisibilityObservers;

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
    // Set default value if not provided
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
    if (!value) {
      this.isInputInvalid = false;
      this.updateFormInternalValue(value);
      this.valueChange.emit(value);
      return;
    }

    if (!this.format) {
      return;
    }

    const time = DateTime.fromFormat(value, this.format);
    if (time.isValid) {
      this.isInputInvalid = false;
      this.updateFormInternalValue(value);
    } else {
      this.isInputInvalid = true;
      this.invalidReason = time.invalidReason;
      this.updateFormInternalValue(value);
    }

    this.valueChange.emit(value);
  }

  onTimeIconClick(event: Event) {
    if (!this.show) {
      event.stopPropagation();
      event.preventDefault();
      this.openDropdown();
    }

    if (this.inputElementRef.current) {
      this.inputElementRef.current.focus();
    }
  }

  async openDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    dropdownController.dismissAll();
    if (!id) {
      return;
    }

    const dropdown = dropdownController.getDropdownById(id);
    if (!dropdown) {
      return;
    }
    dropdownController.present(dropdown);
  }

  async closeDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    if (!id) {
      return;
    }

    const dropdown = dropdownController.getDropdownById(id);
    if (!dropdown) {
      return;
    }
    dropdownController.dismiss(dropdown);
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
          disabled={this.disabled}
          readOnly={this.readonly}
          required={this.required}
          ref={this.inputElementRef}
          type="text"
          value={this.value}
          placeholder={this.placeholder}
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
            this.openDropdown();
            this.ixFocus.emit();
          }}
          onBlur={() => {
            this.ixBlur.emit();
            this.touched = true;
          }}
        ></input>
        <SlotEnd
          slotEndRef={this.slotEndRef}
          onSlotChange={() => this.updatePaddings()}
        >
          <ix-icon-button
            data-testid="open-time-picker"
            class={{ 'time-icon-hidden': this.disabled || this.readonly }}
            ghost
            icon={iconClock}
            onClick={(event) => this.onTimeIconClick(event)}
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
    return Promise.resolve({
      badInput: false,
      customError: false,
      patternMismatch: this.isInputInvalid,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: !this.isInputInvalid,
      valueMissing: !!this.required && !this.value,
    });
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
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            showMilliseconds={this.showMilliseconds}
            hourInterval={this.hourInterval}
            minuteInterval={this.minuteInterval}
            secondInterval={this.secondInterval}
            millisecondInterval={this.millisecondInterval}
            onTimeChange={(event) => {
              this.onInput(event.detail);
            }}
            onTimeSelect={() => {
              this.show = false;
            }}
          ></ix-time-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
