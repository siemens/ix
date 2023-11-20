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
import { IxDatetimePickerReworkCustomEvent } from 'src/components';
import {
  DateTimeDateChangeEvent,
  DateTimeSelectEvent,
} from '../datetime-picker-rework/datetime-picker-rework';
import { DateValidatorParam } from '../utils/validators/datetime-input/date-input-validators';
import { TimeValidatorParam } from '../utils/validators/datetime-input/time-input-validators';
import { InputValidator, Validator } from '../utils/validators/validator';
import {
  convertInputValidators,
  DATE_VALIDATORS,
  getValidator,
  TIME_VALIDATORS,
  ValidatorName,
} from '../utils/validators/validator.factory';

export interface DatetimeInputValues {
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
}

export interface DatetimeInputEvent {
  InputName: string;
  Event: Event;
}

type InputChangeCallback = (event: Event) => void;

type DateChangeCallback = (
  event: IxDatetimePickerReworkCustomEvent<DateTimeDateChangeEvent>
) => void;

type TimeChangeCallback = (
  event: IxDatetimePickerReworkCustomEvent<string>
) => void;

/**
 * @since 3.0.0
 */
@Component({
  tag: 'ix-datetime-input',
  styleUrl: 'datetime-input.scss',
  shadow: true,
})
export class DatetimeInput {
  @Element() hostElement: HTMLIxDatetimeInputElement;

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
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate: string;

  /**
   * Date format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   */
  @Prop() dateFormat: string = 'YYYY/MM/DD';

  /**
   * Time format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /**
   * Picker date. If the picker is in range mode this property is the start date.
   *
   * Format is based on `dateFormat`
   */
  @Prop() fromDate: string | undefined;

  @Watch('fromDate')
  watchFromDatePropHandler(newValue: string) {
    this._fromDate = newValue;
  }

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `dateFormat`
   */
  @Prop() toDate: string | undefined;

  @Watch('toDate')
  watchToDatePropHandler(newValue: string) {
    this._toDate = newValue;
  }

  /**
   * Select time with format string
   */
  @Prop() fromTime: string;

  @Watch('fromTime')
  watchFromTimePropHandler(newValue: string) {
    this._fromTime = newValue;
  }

  /**
   * Select time with format string
   */
  @Prop() toTime: string;

  @Watch('toTime')
  watchToTimePropHandler(newValue: string) {
    this._toTime = newValue;
  }

  /**
   * Show time reference input
   * Per default time reference is aligned with @see {this.timeFormat}
   */
  @Prop() showTimeReference = undefined;

  /**
   * Set time reference
   */
  @Prop() timeReference: 'AM' | 'PM';

  /**
   * Text of date select button
   */
  @Prop() textSelectDate = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * Array of validators that are active when the date input is part of a form
   */
  @Prop() validators: InputValidator[] | string[] = [
    'validDate',
    'toAfterFrom',
    'withinMinMax',
    'validTime',
  ];

  /**
   * Triggers if the first date selection changes.
   *
   * @emits string
   */
  @Event() fromDateChange: EventEmitter<string>;

  /**
   * Triggers if the second date selection changes.
   *
   * @emits string
   */
  @Event() toDateChange: EventEmitter<string>;

  /**
   * Triggers if the first time selection changes.
   *
   * @emits string
   */
  @Event() fromTimeChange: EventEmitter<string>;

  /**
   * Triggers if the second time selection changes.
   *
   * @emits string
   */
  @Event() toTimeChange: EventEmitter<string>;

  /**
   * Date selection confirmed via button action
   *
   * @emits DateTimeSelectEvent
   */
  @Event() dateSelect: EventEmitter<DateTimeSelectEvent>;

  /**
   * Triggers every time one of the inputs changes
   *
   * @emits DatetimeInputChangeEvent
   */
  @Event() ixOnChange: EventEmitter<DatetimeInputEvent>;

  /**
   * Triggers if one of the inputs gets focus
   * @emits DatetimeInputEvent
   */
  @Event() ixOnFocus: EventEmitter<DatetimeInputEvent>;

  /**
   * Triggers if one of the inputs loses focus
   * @emits DatetimeInputEvent
   */
  @Event() ixOnBlur: EventEmitter<DatetimeInputEvent>;

  /**
   * Triggers if the inputs get cleared by pressing the clear button
   * @emits string with the name of the input that was cleared
   */
  @Event() ixOnClear: EventEmitter<string>;

  /**
   * Gets the current input
   *
   * @returns DatetimeInputValues
   */
  @Method()
  async getCurrentInput(): Promise<DatetimeInputValues> {
    return {
      fromDate: this._fromDate,
      toDate: this._toDate,
      fromTime: this._fromTime,
      toTime: this._toTime,
    };
  }

  @State() private fromInputDiv: HTMLDivElement;
  @State() private toInputDiv: HTMLDivElement;
  @State() private errorMessage: string;
  @State() private _fromDate: string;
  @State() private _toDate: string;
  @State() private _fromTime: string;
  @State() private _toTime: string;

  private fromDateInput: HTMLInputElement;
  private fromTimeInput: HTMLInputElement;
  private toDateInput: HTMLInputElement;
  private toTimeInput: HTMLInputElement;
  private focusedInput!: HTMLInputElement;
  private datePicker!: HTMLIxDatetimePickerReworkElement;
  private dateValidator: Validator<DateValidatorParam>;
  private timeValidator: Validator<TimeValidatorParam>;
  private wasValidated: boolean;

  private onInputFocus = (event: FocusEvent) => {
    this.focusedInput = event.target as HTMLInputElement;

    this.ixOnFocus.emit({
      InputName: this.getFocusedInputName(),
      Event: event,
    });
  };

  private onInputBlur = (event: FocusEvent) => {
    const relatedElem = event.relatedTarget as HTMLElement;
    if (relatedElem?.tagName === this.datePicker.tagName) {
      this.focusedInput.focus();
      return;
    }

    this.ixOnBlur.emit({
      InputName: this.getFocusedInputName(),
      Event: event,
    });
  };

  private readonly onFromDateChange = (
    event: IxDatetimePickerReworkCustomEvent<DateTimeDateChangeEvent>
  ) => {
    this._fromDate = event.detail.from;

    this.fromDateChange.emit(this._fromDate);
    this.updateValidity();
  };

  private readonly onToDateChange = (
    event: IxDatetimePickerReworkCustomEvent<DateTimeDateChangeEvent>
  ) => {
    this._toDate = event.detail.from;

    this.toDateChange.emit(this._toDate);
    this.updateValidity();
  };

  private readonly onFromTimeChange = (
    event: IxDatetimePickerReworkCustomEvent<string>
  ) => {
    this._fromTime = event.detail;

    this.fromTimeChange.emit(this._fromTime);
    this.updateValidity();
  };

  private readonly onToTimeChange = (
    event: IxDatetimePickerReworkCustomEvent<string>
  ) => {
    this._toTime = event.detail;

    this.toTimeChange.emit(this._toTime);
    this.updateValidity();
  };

  private readonly clear = (isSecondInput: boolean) => {
    if (isSecondInput) {
      this._toDate = undefined;
      this._toTime = undefined;

      this.toDateInput.focus();
      this.ixOnClear.emit('to');
    } else {
      this._fromDate = undefined;
      this._fromTime = undefined;

      this.fromDateInput.focus();
      this.ixOnClear.emit('from');
    }
  };

  private readonly onFromDateInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._fromDate !== target.value) {
      this._fromDate = target.value;
    }

    this.onInputChange(event);
  };

  private readonly onToDateInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._toDate !== target.value) {
      this._toDate = target.value;
    }

    this.onInputChange(event);
  };

  private readonly onFromTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._fromTime !== target.value) {
      this._fromTime = target.value;
    }

    this.onInputChange(event);
  };

  private readonly onToTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._toTime !== target.value) {
      this._toTime = target.value;
    }

    this.onInputChange(event);
  };

  private readonly onDateSelect = (
    event: IxDatetimePickerReworkCustomEvent<DateTimeSelectEvent>
  ) => {
    this.dateSelect.emit(event.detail);

    this.hostElement.shadowRoot.querySelector('ix-dropdown').show = false;
  };

  private getFocusedInputName() {
    if (this.focusedInput === this.fromDateInput) {
      return 'fromDate';
    }

    if (this.focusedInput === this.toDateInput) {
      return 'toDate';
    }

    if (this.focusedInput === this.fromTimeInput) {
      return 'fromTime';
    }

    if (this.focusedInput === this.toTimeInput) {
      return 'toTime';
    }
  }

  private onInputChange(event: Event) {
    this.ixOnChange.emit({
      InputName: this.getFocusedInputName(),
      Event: event,
    });

    this.updateValidity();
  }

  private updateValidity() {
    if (this.wasValidated) {
      this.setInputValidity();
    }
  }

  private readonly setInputValidity = () => {
    const dateParam: DateValidatorParam = {
      from: this.fromDateInput.value,
      to: this.toDateInput.value,
      format: this.dateFormat,
      min: this.minDate,
      max: this.maxDate,
    };
    const isDateValid = this.dateValidator.validate(dateParam);

    if (!isDateValid) {
      this.fromDateInput.setCustomValidity(this.dateValidator.errorMessage);
      this.fromTimeInput.setCustomValidity(this.dateValidator.errorMessage);
    } else {
      this.fromDateInput.setCustomValidity('');
      this.fromTimeInput.setCustomValidity('');
    }

    const timeParam: TimeValidatorParam = {
      fromTime: this.fromTimeInput.value,
      toTime: this.toTimeInput.value,
      format: this.timeFormat,
    };
    const isTimeValid = this.timeValidator.validate(timeParam);

    if (!isTimeValid) {
      this.fromTimeInput.setCustomValidity(this.timeValidator.errorMessage);
      this.toTimeInput.setCustomValidity(this.timeValidator.errorMessage);
    } else {
      this.fromTimeInput.setCustomValidity('');
      this.toTimeInput.setCustomValidity('');
    }

    const isValid = isDateValid && isTimeValid;

    this.fromInputDiv.classList.toggle('is-invalid', !isValid);
    this.toInputDiv.classList.toggle('is-invalid', !isValid);
    this.hostElement.classList.toggle('invalid', !isValid);
    this.hostElement.classList.toggle('is-valid', isValid);

    this.wasValidated = true;
    this.errorMessage =
      this.dateValidator.errorMessage ?? this.timeValidator.errorMessage;
  };

  componentWillLoad() {
    this._fromDate = this.fromDate;
    this._toDate = this.toDate;
    this._fromTime = this.fromTime;
    this._toTime = this.toTime;

    const timeValidatorEntries = convertInputValidators(this.validators).filter(
      (v) => TIME_VALIDATORS.includes(v.name as ValidatorName)
    );
    const dateValidatorEntries = convertInputValidators(this.validators).filter(
      (v) => DATE_VALIDATORS.includes(v.name as ValidatorName)
    );
    this.dateValidator = getValidator(dateValidatorEntries);
    this.timeValidator = getValidator(timeValidatorEntries);

    const hiddenInput = document.createElement('input');
    hiddenInput.style.display = 'none';
    this.hostElement.appendChild(hiddenInput);

    hiddenInput.form.addEventListener('submit', this.setInputValidity);
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
          class={{
            'second-input': isSecondInput,
          }}
        >
          {this.range && (
            <span class="label-color">{isSecondInput ? 'To' : 'From'}</span>
          )}
          <div
            class="datetime-input"
            ref={(ref) => {
              if (isSecondInput) {
                this.toInputDiv = ref;
              } else {
                this.fromInputDiv = ref;
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
              value={isSecondInput ? this._toDate : this._fromDate}
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
              value={isSecondInput ? this._toTime : this._fromTime}
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
                    (isSecondInput && !this._toDate && !this._toTime) ||
                    (!isSecondInput && !this._fromDate && !this._fromTime),
                }}
                onClick={() => this.clear(isSecondInput)}
              ></ix-icon-button>
            </span>
            <span class="icon-button">
              <ix-icon-button ghost icon="chevron-down-small"></ix-icon-button>
            </span>
          </div>
        </div>
        <ix-dropdown
          trigger={isSecondInput ? this.toInputDiv : this.fromInputDiv}
          closeBehavior="outside"
          // onClick={(event) => event.stopPropagation()}
          class="dropdown"
        >
          <ix-datetime-picker-rework
            onClick={(event) => event.stopPropagation()}
            tabIndex={0}
            ref={(ref) =>
              (this.datePicker = ref as HTMLIxDatetimePickerReworkElement)
            }
            range={false}
            onDateChange={(event) => dateChangeCallback(event)}
            onTimeChange={(event) => timeChangeCallback(event)}
            from={isSecondInput ? this._toDate : this._fromDate}
            time={isSecondInput ? this._toTime : this._fromTime}
            dateFormat={this.dateFormat}
            timeFormat={this.timeFormat}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
            showTimeReference={this.showTimeReference}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            timeReference={this.timeReference}
            onDateSelect={(event) => this.onDateSelect(event)}
          ></ix-datetime-picker-rework>
        </ix-dropdown>
      </Fragment>
    );
  }

  private renderRangeInput() {
    return (
      <div class="range-input-container">
        <div class="range-input">
          {this.renderInput(
            this.onFromDateInputChange,
            this.onFromTimeInputChange,
            this.onFromDateChange,
            this.onFromTimeChange
          )}
        </div>
        <div class="range-input">
          {this.renderInput(
            this.onToDateInputChange,
            this.onToTimeInputChange,
            this.onToDateChange,
            this.onToTimeChange,
            true
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        {!this.range && <label>{this.label}</label>}
        {this.range
          ? this.renderRangeInput()
          : this.renderInput(
              this.onFromDateInputChange,
              this.onFromTimeInputChange,
              this.onFromDateChange,
              this.onFromTimeChange
            )}
        <div class="invalid-feedback">{this.errorMessage}</div>
      </Host>
    );
  }
}
