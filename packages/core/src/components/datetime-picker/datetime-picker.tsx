/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import type { DateChangeEvent } from '../date-picker/date-picker';

export type DateTimeSelectEvent = {
  from: string;
  to: string;
  time: string;
};

export type DateTimeDateChangeEvent =
  | string
  | Omit<DateTimeSelectEvent, 'time'>;

@Component({
  tag: 'ix-datetime-picker',
  styleUrl: 'datetime-picker.scss',
  shadow: true,
})
export class DateTimePicker {
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

  /**
   * Time change
   *
   * @since 1.1.0
   */
  @Event() timeChange: EventEmitter<string>;

  /**
   * Date change
   *
   * @since 1.1.0
   */
  @Event() dateChange: EventEmitter<DateTimeDateChangeEvent>;

  /**
   * Datetime selection event is fired after confirm button is pressed
   *
   * @since 1.1.0
   */
  @Event() dateSelect: EventEmitter<DateTimeSelectEvent>;

  private datePickerElement: HTMLIxDatePickerElement;
  private timePickerElement: HTMLIxTimePickerElement;

  private async onDone() {
    const date = await this.datePickerElement.getCurrentDate();
    const time = await this.timePickerElement.getCurrentTime();

    this.dateSelect.emit({
      from: date.from,
      to: date.to,
      time: time,
    });
  }

  private async onDateChange(event: CustomEvent<string | DateChangeEvent>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: date } = event;
    this.dateChange.emit(date);
  }

  private async onTimeChange(event: CustomEvent<string>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: time } = event;
    this.timeChange.emit(time);
  }

  render() {
    return (
      <Host>
        <div class="flex flex-md-row">
          <div class="separator-md"></div>
          <ix-date-picker
            ref={(ref) => (this.datePickerElement = ref)}
            corners="left"
            range={this.range}
            onDateChange={(event) => this.onDateChange(event)}
            from={this.from}
            to={this.to}
            format={this.dateFormat}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
            standaloneAppearance={false}
          ></ix-date-picker>
          <ix-time-picker
            ref={(ref) => (this.timePickerElement = ref)}
            corners="right"
            standaloneAppearance={false}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            onTimeChange={(event) => this.onTimeChange(event)}
            format={this.timeFormat}
            time={this.time}
          ></ix-time-picker>
          <div class="separator-md"></div>
        </div>

        <ix-button
          class="btn-select-date btn-md-width"
          onClick={() => this.onDone()}
        >
          {this.textSelectDate}
        </ix-button>
      </Host>
    );
  }
}
