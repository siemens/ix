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
type DateChangeCallback = (
  event: IxDatetimePickerCustomEvent<DateTimeDateChangeEvent>
) => void;
type TimeChangeCallback = (event: IxDatetimePickerCustomEvent<string>) => void;

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
  @State() private fromDate: string;
  @State() private toDate: string;
  @State() private fromTime: string;
  @State() private toTime: string;

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
    // this.setInputValidity();

    const relatedElem = event.relatedTarget as HTMLElement;
    if (relatedElem?.tagName === this.datePicker.tagName) {
      this.focusedInput.focus();
      return;
    }
  };

  // private setInputValidity() {
  //   const param: DateValidatorParam = {
  //     from: this.fromDateInput.value,
  //     to: this.fromTimeInput.value,
  //     format: this.dateFormat,
  //     min: this.minDate,
  //     max: this.maxDate,
  //   };

  //   const valid = this.validator.validate(param);
  //   if (!valid) {
  //     this.fromDateInput.setCustomValidity(this.validator.errorMessage);
  //     this.fromTimeInput.setCustomValidity(this.validator.errorMessage);
  //   } else {
  //     this.fromDateInput.setCustomValidity('');
  //     this.fromTimeInput.setCustomValidity('');
  //   }
  // }

  private readonly onFromDateChange = (
    event: IxDatetimePickerCustomEvent<DateTimeDateChangeEvent>
  ) => {
    this.fromDate = event.detail.from;
  };

  private readonly onToDateChange = (
    event: IxDatetimePickerCustomEvent<DateTimeDateChangeEvent>
  ) => {
    this.toDate = event.detail.from;
  };

  private readonly onFromTimeChange = (
    event: IxDatetimePickerCustomEvent<string>
  ) => {
    this.fromTime = event.detail;
  };

  private readonly onToTimeChange = (
    event: IxDatetimePickerCustomEvent<string>
  ) => {
    this.toTime = event.detail;
  };

  private readonly clear = (isSecondInput: boolean) => {
    if (isSecondInput) {
      this.toDate = undefined;
      this.toTime = undefined;

      this.toDateInput.focus();
    } else {
      this.fromDate = undefined;
      this.fromTime = undefined;

      this.fromDateInput.focus();
    }
  };

  private readonly onFromDateInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this.fromDate !== target.value) {
      this.fromDate = target.value;
    }
  };

  private readonly onToDateInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this.toDate !== target.value) {
      this.toDate = target.value;
    }
  };

  private readonly onFromTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this.fromTime !== target.value) {
      this.fromTime = target.value;
    }
  };

  private readonly onToTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this.toTime !== target.value) {
      this.toTime = target.value;
    }
  };

  componentWillLoad() {
    this.fromDate = this.from;
    this.toDate = this.to;

    this.validator = getValidator(['valid', 'toAfterFrom', 'withinMinMax']);
  }

  private renderInput(
    dateInputChangeCallback: InputChangeCallback,
    timeInputChangeCallback: InputChangeCallback,
    dateChangeCallback: DateChangeCallback,
    timeChangeCallback: TimeChangeCallback,
    isSecondInput: boolean = false
  ): any {
    return (
      <Fragment>
        <div
          class="datetime-input"
          ref={(ref) => {
            if (isSecondInput) {
              this.toTriggerRef = ref;
            } else {
              this.fromTriggerRef = ref;
            }
          }}
        >
          <input
            ref={(ref) => {
              if (isSecondInput) {
                this.toDateInput = ref;
              } else {
                this.fromDateInput = ref;
              }
            }}
            id="input-div"
            type="text"
            class="form-control"
            placeholder={this.dateFormat}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            value={isSecondInput ? this.toDate : this.fromDate}
            onInput={(event) => dateInputChangeCallback(event)}
          />
          <input
            ref={(ref) => {
              if (isSecondInput) {
                this.toTimeInput = ref;
              } else {
                this.fromTimeInput = ref;
              }
            }}
            type="text"
            class="form-control"
            placeholder={this.timeFormat}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            value={isSecondInput ? this.toTime : this.fromTime}
            onInput={(event) => timeInputChangeCallback(event)}
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
              class={{
                hidden:
                  (isSecondInput && !this.toDate && !this.toTime) ||
                  (!isSecondInput && !this.fromDate && !this.fromTime),
              }}
              onClick={() => this.clear(isSecondInput)}
            ></ix-icon-button>
          </span>
          <span class="icon-button">
            <ix-icon-button ghost icon="chevron-down-small"></ix-icon-button>
          </span>
        </div>
        <ix-dropdown
          trigger={isSecondInput ? this.toTriggerRef : this.fromTriggerRef}
          // show={this.showDatePicker}
          // onShowChanged={(event) => this.onShowChange(event)}
          closeBehavior={false}
          onClick={(event) => event.stopPropagation()}
          class="dropdown"
        >
          <ix-datetime-picker
            tabIndex={0}
            ref={(ref) =>
              (this.datePicker = ref as HTMLIxDatetimePickerElement)
            }
            range={false}
            onDateChange={(event) => dateChangeCallback(event)}
            onTimeChange={(event) => timeChangeCallback(event)}
            from={isSecondInput ? this.toDate : this.fromDate}
            dateFormat={this.dateFormat}
            timeFormat={this.timeFormat}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
            onClick={(event) => event.stopPropagation()}
          ></ix-datetime-picker>
        </ix-dropdown>
      </Fragment>
    );
  }

  private renderRangeInput() {
    return (
      <div class="range-inputs">
        <label>From</label>
        {this.renderInput(
          this.onFromDateInputChange,
          this.onFromTimeInputChange,
          this.onFromDateChange,
          this.onFromTimeChange
        )}
        <label>To</label>
        {this.renderInput(
          this.onToDateInputChange,
          this.onToTimeInputChange,
          this.onToDateChange,
          this.onToTimeChange,
          true
        )}
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.range
          ? this.renderRangeInput()
          : this.renderInput(
              this.onFromDateInputChange,
              this.onFromTimeInputChange,
              this.onFromDateChange,
              this.onFromTimeChange
            )}
      </Host>
    );
  }
}
