/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Fragment, h, Host, Prop, State } from '@stencil/core';
import { DateChangeEvent, IxDatePickerCustomEvent } from 'src/components';
import { DateValidatorParam } from '../utils/validators/date-input/date-input-validators';
import { Validator } from '../utils/validators/validator';
import { getValidator } from '../utils/validators/validator.factory';

@Component({
  tag: 'datetime-input',
  styleUrl: 'datetime-input.scss',
  shadow: true,
})
export class DatetimeInput {
  // @Element() hostElement: htmlixdatetimeinputelement;
  /**
   * Label for the input
   */
  @Prop() label: string;

  /**
   * Position of the label
   */
  @Prop() labelPosition: 'above' | 'inline' = 'above';

  /**
   * Set range size
   */
  @Prop() range = true;

  /**
   * Show hour input
   */
  @Prop() showHour = false;

  /**
   * Show minutes input
   */
  @Prop() showMinutes = false;

  /**
   * Show seconds input
   */
  @Prop() showSeconds = false;

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
   * Date format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() dateFormat: string = 'YYYY/MM/DD';

  /**
   * Time format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /**
   * Picker date. If the picker is in range mode this property is the start date.
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() from: string | undefined;

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() to: string | undefined;

  /**
   * Select time with format string
   *
   * @since 1.1.0
   */
  @Prop() time: string;

  /**
   * Show time reference input
   * Time reference is default aligned with @see {this.timeFormat}
   *
   * @since 1.1.0
   */
  @Prop() showTimeReference = undefined;

  /**
   * Set time reference
   */
  @Prop() timeReference: 'AM' | 'PM';

  /**
   * Text of date select button
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

  @State() private triggerRef: HTMLElement;
  // @State() private datePickerRef: HTMLElement;
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

    // this.focusedInput = undefined;
  };

  private setInputValidity() {
    const param: DateValidatorParam = {
      from: this.firstInput.value,
      to: this.secondInput.value,
      format: this.dateFormat,
      min: this.minDate,
      max: this.maxDate,
    };

    const valid = this.validator.validate(param);
    if (!valid) {
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
  }

  private readonly clear = () => {
    this._from = undefined;
    this._to = undefined;

    this.focusedInput.focus();
  };

  // onShowChange(event: IxDropdownCustomEvent<boolean>) {
  // this.showDatePicker = event.detail;
  // this.showDatePicker = true;
  // if (this.focusedInput) {
  //   event.preventDefault();
  // }
  // }

  onFromInputChange(event) {
    if (this._from !== event.target.value) this._from = event.target.value;
  }

  onToInputChange(event) {
    if (this._to !== event.target.value) this._to = event.target.value;
  }

  componentWillLoad() {
    this._from = this.from;
    this._to = this.to;

    this.validator = getValidator(['valid', 'toAfterFrom', 'withinMinMax']);
  }

  renderRangeInput(): any {
    return (
      <Fragment>
        <input
          id="firstInput"
          ref={(ref) => (this.firstInput = ref as HTMLInputElement)}
          type="text"
          class="form-control"
          placeholder={this.dateFormat}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
          onInput={(event) => this.onFromInputChange(event)}
        />
        <span class="vertical-align">
          <ix-icon name="arrow-right"></ix-icon>
        </span>
        <input
          id="secondInput"
          ref={(ref) => (this.secondInput = ref as HTMLInputElement)}
          type="text"
          class="form-control"
          placeholder={this.timeFormat}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._to}
          onInput={(event) => this.onToInputChange(event)}
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
          placeholder={this.dateFormat}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
        />
      </Fragment>
    );
  }

  render() {
    return (
      <Host>
        {this.labelPosition === 'above' ? (
          <label htmlFor="firstInput">{this.label}</label>
        ) : (
          ''
        )}
        <div
          id="dateinput"
          class="date-input"
          ref={(ref) => (this.triggerRef = ref)}
        >
          {this.labelPosition === 'inline' ? (
            <span class="vertical-align label">
              <label htmlFor="firstInput">{this.label}</label>
            </span>
          ) : (
            ''
          )}
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
          // show={this.showDatePicker}
          // onShowChanged={(event) => this.onShowChange(event)}
          closeBehavior="outside"
          onClick={(event) => event.stopImmediatePropagation()}
          class="dropdown"
        >
          <ix-datetime-picker></ix-datetime-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
