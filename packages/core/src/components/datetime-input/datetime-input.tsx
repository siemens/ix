/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Fragment, h, Host, Prop, State } from '@stencil/core';
import {
  DateTimeDateChangeEvent,
  IxDatetimePickerCustomEvent,
} from 'src/components';
import { DateValidatorParam } from '../utils/validators/date-input/date-input-validators';
import { Validator } from '../utils/validators/validator';
import { getValidator } from '../utils/validators/validator.factory';

type InputChangeCallback = (event: Event) => void;

@Component({
  tag: 'ix-datetime-input',
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

  @State() private fromTriggerRef: HTMLElement;
  @State() private toTriggerRef: HTMLElement;
  // @State() private datePickerRef: HTMLElement;
  @State() private _from: string;
  @State() private _to: string;
  @State() private _fromTime: string;
  @State() private _toTime: string;

  private fromDateInput: HTMLInputElement;
  private fromTimeInput: HTMLInputElement;
  private toDateInput: HTMLInputElement;
  private toTimeInput: HTMLInputElement;
  private focusedInput!: HTMLInputElement;
  private datePicker!: HTMLIxDatetimePickerElement;
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
      from: this.fromDateInput.value,
      to: this.fromTimeInput.value,
      format: this.dateFormat,
      min: this.minDate,
      max: this.maxDate,
    };

    const valid = this.validator.validate(param);
    if (!valid) {
      this.fromDateInput.setCustomValidity(this.validator.errorMessage);
      this.fromTimeInput.setCustomValidity(this.validator.errorMessage);
    } else {
      this.fromDateInput.setCustomValidity('');
      this.fromTimeInput.setCustomValidity('');
    }
  }

  private onDateChange(
    event: IxDatetimePickerCustomEvent<DateTimeDateChangeEvent>
  ) {
    this._from = event.detail.from;
  }

  private onFromTimeChange(event: IxDatetimePickerCustomEvent<string>) {
    this._fromTime = event.detail;
  }

  private readonly clear = () => {
    this._from = undefined;
    this._to = undefined;
    this._fromTime = undefined;

    this.focusedInput.focus();
  };

  private readonly onFromInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._from !== target.value) this._from = target.value;
  };

  private readonly onToInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._to !== target.value) this._to = target.value;
  };

  private readonly onFromTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._fromTime !== target.value) this._fromTime = target.value;
  };

  private readonly onToTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._toTime !== target.value) this._toTime = target.value;
  };

  componentWillLoad() {
    this._from = this.from;
    this._to = this.to;

    this.validator = getValidator(['valid', 'toAfterFrom', 'withinMinMax']);
  }

  private renderInput(
    dateChangeCallback: InputChangeCallback,
    timeChangeCallback: InputChangeCallback,
    date: { value: string },
    time: { value: string },
    dateInput: HTMLInputElement,
    timeInput: HTMLInputElement,
    triggerRef: HTMLElement
  ): any {
    return (
      <Fragment>
        <div class="datetime-input" ref={(ref) => (triggerRef = ref)}>
          {this.labelPosition === 'inline' ? (
            <span class="vertical-align label">
              <label htmlFor="firstInput">{this.label}</label>
            </span>
          ) : (
            ''
          )}
          <input
            ref={(ref) => (dateInput = ref as HTMLInputElement)}
            type="text"
            class="form-control"
            placeholder={this.dateFormat}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            value={date.value}
            onInput={(event) => dateChangeCallback(event)}
          />
          <input
            ref={(ref) => (timeInput = ref as HTMLInputElement)}
            type="text"
            class="form-control"
            placeholder={this.timeFormat}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            value={time.value}
            onInput={(event) => timeChangeCallback(event)}
          />
          <span
            class={{
              'icon-button': true,
              clear: true,
            }}
          >
            <ix-icon-button
              ghost
              icon="clear"
              class={{ hidden: !this._from && !this._to && !this._fromTime }}
              onClick={this.clear}
            ></ix-icon-button>
          </span>
          <span class="icon-button">
            <ix-icon-button ghost icon="chevron-down-small"></ix-icon-button>
          </span>
        </div>
        <ix-dropdown
          trigger={triggerRef}
          // show={this.showDatePicker}
          // onShowChanged={(event) => this.onShowChange(event)}
          closeBehavior="outside"
          onClick={(event) => event.stopImmediatePropagation()}
          class="dropdown"
        >
          <ix-datetime-picker
            tabIndex={0}
            // ref={(ref) =>
            //   (this.datePicker = ref as HTMLIxDatetimePickerElement)
            // }
            range={false}
            onDateChange={(event) => this.onDateChange(event)}
            onTimeChange={(event) => this.onFromTimeChange(event)}
            from={this._from}
            to={this._to}
            dateFormat={this.dateFormat}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
          ></ix-datetime-picker>
        </ix-dropdown>
      </Fragment>
    );
  }

  private renderRangeInput() {
    return (
      <div class="range-inputs">
        {this.renderInput(
          this.onFromInputChange,
          this.onFromTimeInputChange,
          { value: this._from },
          { value: this._fromTime },
          this.fromDateInput,
          this.fromTimeInput,
          this.fromTriggerRef
        )}
        {this.renderInput(
          this.onToInputChange,
          this.onToTimeInputChange,
          { value: this._to },
          { value: this._fromTime },
          this.toDateInput,
          this.toTimeInput,
          this.toTriggerRef
        )}
      </div>
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
        {this.range
          ? this.renderRangeInput()
          : this.renderInput(
              this.onFromInputChange,
              this.onFromTimeInputChange,
              { value: this._from },
              { value: this._fromTime },
              this.fromDateInput,
              this.fromTimeInput,
              this.fromTriggerRef
            )}
      </Host>
    );
  }
}
