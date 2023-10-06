/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { IxDatePickerCustomEvent } from 'src/components';
import { DateChangeEvent } from '../date-picker/date-picker';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
import { DateValidatorParam } from '../utils/validators/datetime-input/date-input-validators';
import { Validator } from '../utils/validators/validator';
import { getValidator } from '../utils/validators/validator.factory';

@Component({
  tag: 'ix-date-input',
  styleUrl: 'date-input.scss',
  shadow: true,
})
export class DateInput {
  @Element() hostElement: HTMLIxDateInputElement;

  /**
   * Label for the input
   */
  @Prop() label: string;

  /**
   * Position of the label
   */
  @Prop() labelPosition: 'top' | 'left' | 'inside' = 'top';

  /**
   * Date format string.
   * See @link https://day.js.org/docs/en/display/format for all available tokens.
   */
  @Prop() format: string = 'YYYY/MM/DD';

  /**
   * If true a date-range can be selected (from/to).
   */
  @Prop() range: boolean = true;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * The selected starting date. If the date-picker is not in range mode this is the selected date.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() from: string | undefined;
  @Watch('from')
  watchFromPropHandler(newValue: string) {
    this._from = newValue;
  }

  /**
   * The selected end date. If the the date-picker is not in range mode this property has no impact.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() to: string | undefined;
  @Watch('to')
  watchToPropHandler(newValue: string) {
    this._to = newValue;
  }

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() minDate: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() maxDate: string;

  /**
   * Text of the button that confirms date selection.
   *
   * @since 1.1.0
   */
  @Prop() textSelectDate = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   *
   * @since 2.0.0
   */
  @Prop() weekStartIndex = 0;

  /**
   * Triggers if the date selection changes.

   */
  @Event() dateChange: EventEmitter<DateChangeEvent>;

  /**
   * Date selection confirmed via button action
   */
  @Event() dateSelect: EventEmitter<DateChangeEvent>;

  /**
   * Triggers every time one of the inputs changes
   */
  @Event() inputChange: EventEmitter<DateChangeEvent>;

  /**
   * Gets the current input
   * @returns DateChangeEvent
   */
  @Method()
  async getCurrentInput(): Promise<DateChangeEvent> {
    return {
      from: this._from,
      to: this._to,
    };
  }

  /**
   * Gets the current error message if the input is invalid
   * @returns string
   */
  @Method()
  async getValidityErrorMessage(): Promise<string> {
    return this.validator.errorMessage;
  }

  @State() private triggerRef: HTMLElement;
  @State() private _from: string;
  @State() private _to: string;

  private firstInput: HTMLInputElement;
  private secondInput: HTMLInputElement;
  private focusedInput!: HTMLInputElement;
  private datePicker!: HTMLIxDatePickerElement;
  private validator: Validator<DateValidatorParam>;

  private onInputFocus = (event: FocusEvent) => {
    this.focusedInput = event.target as HTMLInputElement;
  };

  private onInputBlur = (event: FocusEvent) => {
    this.setInputValidity();

    const relatedElem = event.relatedTarget as HTMLElement;
    if (relatedElem?.tagName === this.datePicker.tagName) {
      this.focusedInput.focus();
      return;
    }
  };

  private setInputValidity() {
    const param: DateValidatorParam = {
      from: this.firstInput.value,
      to: this.secondInput.value,
      format: this.format,
      min: this.minDate,
      max: this.maxDate,
    };

    if (!this.validator.validate(param)) {
      this.firstInput.setCustomValidity(this.validator.errorMessage);
      this.secondInput.setCustomValidity(this.validator.errorMessage);
    } else {
      this.firstInput.setCustomValidity('');
      this.secondInput.setCustomValidity('');
    }
  }

  private onDateChange(event: IxDatePickerCustomEvent<DateChangeEvent>) {
    this._from = event.detail.from;
    this._to = event.detail.to;

    this.dateChange.emit({
      from: this._from,
      to: this._to,
    });
  }

  private readonly clear = () => {
    this._from = undefined;
    this._to = undefined;

    this.focusedInput.focus();
  };

  onFromInputChange(event) {
    if (this._from !== event.target.value) this._from = event.target.value;
    this.onInputChange();
  }

  onToInputChange(event) {
    if (this._to !== event.target.value) this._to = event.target.value;
    this.onInputChange();
  }

  onInputChange() {
    this.inputChange.emit({
      from: this.firstInput.value,
      to: this.secondInput.value,
    });
  }

  private readonly parentFormSubmitted = () => {
    this.setInputValidity();
    const isValid = [
      this.firstInput.validity.valid,
      this.secondInput.validity.valid,
    ].some((valid) => valid);

    this.triggerRef.classList.toggle('is-invalid', !isValid);
    this.hostElement.classList.toggle('is-invalid', !isValid);
    this.hostElement.classList.toggle('is-valid', isValid);
  };

  componentWillLoad() {
    this._from = this.from;
    this._to = this.to;

    this.validator = getValidator(['validDate', 'toAfterFrom', 'withinMinMax']);

    const hiddenInput = document.createElement('input');
    hiddenInput.style.display = 'none';
    this.hostElement.appendChild(hiddenInput);

    hiddenInput.form.addEventListener('submit', this.parentFormSubmitted);
  }

  renderRangeInput(): any {
    return (
      <Fragment>
        <input
          id="firstInput"
          ref={(ref) => (this.firstInput = ref as HTMLInputElement)}
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
          onInput={(event) => this.onFromInputChange(event)}
          required
        />
        <span class="vertical-align">
          <ix-icon name="arrow-right"></ix-icon>
        </span>
        <input
          id="secondInput"
          ref={(ref) => (this.secondInput = ref as HTMLInputElement)}
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._to}
          onInput={(event) => this.onToInputChange(event)}
          required
        />
      </Fragment>
    );
  }

  renderSingleInput(): any {
    return (
      <Fragment>
        <input
          ref={(ref) => (this.firstInput = ref as HTMLInputElement)}
          id="firstInput"
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
          onInput={(event) => this.onFromInputChange(event)}
        />
      </Fragment>
    );
  }

  renderLabel(isInsideInput: boolean): any {
    if (
      !this.label ||
      (isInsideInput && !(this.labelPosition === 'inside')) ||
      (!isInsideInput && this.labelPosition === 'inside')
    ) {
      return '';
    }

    return (
      <span
        id="date-input-label"
        class={{
          'vertical-align':
            this.labelPosition === 'left' || this.labelPosition === 'inside',
          'left-position': this.labelPosition === 'left',
          'inside-position': this.labelPosition === 'inside',
        }}
      >
        {this.label}
      </span>
    );
  }

  render() {
    return (
      <Host class={{ 'label-flex': this.labelPosition === 'left' }}>
        {/* renders if position is top/left */}
        {this.renderLabel(false)}
        <div
          class="date-input"
          aria-labelledby="date-input-label"
          ref={(ref) => (this.triggerRef = ref)}
        >
          {/* renders if position is inside */}
          {this.renderLabel(true)}
          {this.range ? this.renderRangeInput() : this.renderSingleInput()}
          <span
            class={{
              'icon-button': true,
              clear: true,
            }}
          >
            <ix-icon-button
              ghost
              icon="clear"
              class={{ hidden: !this._from && !this._to }}
              onClick={this.clear}
            ></ix-icon-button>
          </span>
          <span class="icon-button">
            <ix-icon-button ghost icon="chevron-down-small"></ix-icon-button>
          </span>
        </div>
        <ix-dropdown
          trigger={this.triggerRef}
          closeBehavior="outside"
          onClick={(event) => event.stopPropagation()}
          class="dropdown"
        >
          <ix-date-picker
            tabIndex={0}
            ref={(ref) => (this.datePicker = ref as HTMLIxDatePickerElement)}
            corners={this.corners}
            range={this.range}
            onDateChange={(event) => this.onDateChange(event)}
            from={this._from}
            to={this._to}
            format={this.format}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
            onClick={(event) => event.stopImmediatePropagation()}
          ></ix-date-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
