/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
import { makeRef } from '../utils/make-ref';
import {
  ClassMutationObserver,
  HookValidationLifecycle,
  IxInputFieldComponent,
  ValidationResults,
  createClassMutationObserver,
} from '../utils/field';
import { PostfixSlot, PrefixSlot } from '../text-field/input.fc';
import { adjustPaddingForPrefixAndPostfix } from '../text-field/text-field.util';
import { iconCalendar } from '@siemens/ix-icons/icons';

export type DateFieldValidityState = {
  patternMismatch: boolean;
  invalidReason?: string;
};

@Component({
  tag: 'ix-date-field',
  styleUrl: 'date-field.scss',
  shadow: true,
  formAssociated: true,
})
export class DateField implements IxInputFieldComponent<string> {
  @Element() hostElement: HTMLIxDateFieldElement;
  @AttachInternals() formInternals: ElementInternals;

  /**
   * name of the input element
   */
  @Prop({ reflect: true }) name: string;

  /**
   * placeholder of the input element
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * value of the input element
   */
  @Prop({ reflect: true, mutable: true }) value: any;

  /**
   * Date format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

  /**
   * required attribute
   */
  @Prop() required: boolean;

  /**
   * helper text below the input field
   */
  @Prop() helperText: string;

  /**
   * label of the input field
   */
  @Prop() label: string;

  /**
   * error text below the input field
   */
  @Prop({ reflect: true }) invalidText: string;

  /**
   * readonly attribute
   */
  @Prop() readonly: boolean;
  /**
   * disabled attribute
   */
  @Prop() disabled: boolean;

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
   * i18n string for the error message when the date is not parsable
   */
  @Prop({ attribute: 'i18n-error-date-unparsable' }) i18nErrorDateUnparsable =
    'Date is not valid';

  /**
   * Input change event.
   */
  @Event({ cancelable: false }) valueChange: EventEmitter<string>;

  /**
   * Validation state change event.
   */
  @Event() validityStateChange: EventEmitter<DateFieldValidityState>;

  /** @internal */
  @Event() ixFocus: EventEmitter<void>;

  /** @internal */
  @Event() ixBlur: EventEmitter<void>;

  @State() show = false;
  @State() from: string;
  @State() isInputInvalid = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;
  @State() focus = false;

  private prefixRef = makeRef<HTMLDivElement>();
  private postfixRef = makeRef<HTMLDivElement>();

  private datepickerRef = makeRef<HTMLIxDatePickerElement>();

  private inputElementRef = makeRef<HTMLInputElement>();
  private dropdownElementRef = makeRef<HTMLIxDropdownElement>();
  private classObserver: ClassMutationObserver;
  private invalidReason: string;

  updateFormInternalValue(value: any): void {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  connectedCallback(): void {
    this.classObserver = createClassMutationObserver(this.hostElement, () =>
      this.checkClassList()
    );
  }

  componentWillLoad(): void {
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
    } else {
      this.watchValue();
    }

    this.checkClassList();
  }

  componentDidRender(): void {
    setTimeout(() => this.updatePaddings());
  }

  private updatePaddings() {
    adjustPaddingForPrefixAndPostfix(
      this.prefixRef.current,
      this.postfixRef.current,
      this.inputElementRef.current
    );
  }

  disconnectedCallback(): void {
    if (this.classObserver) {
      this.classObserver.destroy();
    }
  }

  @Watch('value')
  watchValue() {
    this.from = this.value;
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(!!this.value);
  }

  /** @internal */
  @Method()
  getAssociatedFormElement(): Promise<HTMLFormElement> {
    return Promise.resolve(this.formInternals.form);
  }

  async onInput(value: string) {
    this.value = value;
    if (!value) {
      this.valueChange.emit(value);
      return;
    }

    if (!this.format) {
      return;
    }

    const date = DateTime.fromFormat(value, this.format);
    if (date.isValid) {
      this.isInputInvalid = false;

      this.updateFormInternalValue(value);
      this.closeDropdown();
    } else {
      this.isInputInvalid = true;
      this.invalidReason = date.invalidReason;
    }

    this.valueChange.emit(value);
  }

  async openDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    dropdownController.dismissAll();
    dropdownController.present(dropdownController.getDropdownById(id));
  }

  async closeDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    if (id) {
      dropdownController.dismiss(dropdownController.getDropdownById(id));
    }
  }

  private checkClassList() {
    this.isInvalid = this.hostElement.classList.contains('ix-invalid');
  }

  private renderInput() {
    return (
      <div class="input-wrapper">
        <PrefixSlot
          prefixRef={this.prefixRef}
          onSlotChange={() => this.updatePaddings()}
        ></PrefixSlot>
        <input
          autoComplete="off"
          class={{
            'is-invalid': this.isInputInvalid,
          }}
          required={this.required}
          ref={this.inputElementRef}
          type="text"
          value={this.value}
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
          onBlur={() => this.ixBlur.emit()}
        ></input>
        <PostfixSlot
          postfixRef={this.postfixRef}
          onSlotChange={() => this.updatePaddings()}
        >
          <ix-icon-button
            ghost
            icon={iconCalendar}
            onClick={(event) => {
              if (!this.show) {
                event.stopPropagation();
                event.preventDefault();
                this.openDropdown();
                this.inputElementRef.current.focus();
              }
            }}
          ></ix-icon-button>
        </PostfixSlot>
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

  render() {
    const invalidText = this.isInputInvalid
      ? this.i18nErrorDateUnparsable
      : this.invalidText;

    return (
      <Host>
        <ix-field-wrapper
          label={this.label}
          helperText={this.helperText}
          isInvalid={this.isInvalid}
          invalidText={invalidText}
          infoText={this.infoText}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          required={this.required}
          controlRef={this.inputElementRef}
        >
          <slot name="label" slot="label"></slot>

          {this.renderInput()}
        </ix-field-wrapper>
        <ix-dropdown
          trigger={this.inputElementRef.waitForCurrent()}
          ref={this.dropdownElementRef}
          closeBehavior="outside"
          show={this.show}
          onShowChanged={(event) => {
            this.show = event.detail;
          }}
        >
          <ix-date-picker
            ref={this.datepickerRef}
            format={this.format}
            range={false}
            from={this.from}
            onDateChange={(event) => {
              const { from } = event.detail;
              this.onInput(from);
            }}
          ></ix-date-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
