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
  @Prop() dateFormat: string = 'yyyy/LL/dd';

  /**
   * Time format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() timeFormat: string = 'TT';

  /**
   * Picker date. If the picker is in range mode this property is the start date.
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() from: string;

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() to: string | null = null;

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
   * Default behavior of the done event is to join the two events (date and time) into one combined string output.
   * This combination can be configured over the delimiter
   *
   * @since 1.1.0
   */
  @Prop() eventDelimiter = ' - ';

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
   * Done event
   *
   * Set `doneEventDelimiter` to null or undefine to get the typed event
   */
  @Event() done: EventEmitter<string>;

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
   * Date selection event is fired after confirm button is pressend
   *
   * @since 1.1.0
   */
  @Event() dateSelect: EventEmitter<DateTimeSelectEvent>;

  private datePickerElement: HTMLIxDatePickerElement;
  private timePickerElement: HTMLIxTimePickerElement;

  private _from: string;
  private _to: string;
  private _time: string;

  private onDone() {
    this.done.emit(
      [this._from, this._to ?? '', this._time].join(this.eventDelimiter)
    );

    this.dateSelect.emit({
      from: this._from,
      to: this._to,
      time: this._time,
    });
  }

  private async onDateChange(event: CustomEvent<string | DateChangeEvent>) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    this.dateChange.emit(date);

    const currentDateTime = await this.datePickerElement.getCurrentDate();
    this._from = currentDateTime.start;
    this._to = currentDateTime.end;
  }

  private async onTimeChange(event: CustomEvent<string>) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: time } = event;
    this.timeChange.emit(time);

    const currentDateTime = await this.timePickerElement.getCurrentTime();
    this._time = currentDateTime;
  }

  componentDidLoad() {
    this._from = this.from;
    this._to = this.to;
    this._time = this.time;
  }

  render() {
    return (
      <Host>
        <div class="flex">
          <div class="separator"></div>
          <ix-date-picker
            ref={(ref) => (this.datePickerElement = ref)}
            corners="left"
            individual={false}
            range={this.range}
            onDateChange={(event) => this.onDateChange(event)}
            from={this.from}
            to={this.to}
            format={this.dateFormat}
            minDate={this.minDate}
            maxDate={this.maxDate}
            eventDelimiter={this.eventDelimiter}
          ></ix-date-picker>

          <ix-time-picker
            ref={(ref) => (this.timePickerElement = ref)}
            corners="right"
            individual={false}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            showTimeReference={this.showTimeReference}
            onTimeChange={(event) => this.onTimeChange(event)}
            time={this.time}
            format={this.timeFormat}
            timeReference={this.timeReference}
          ></ix-time-picker>
          <div class="separator"></div>
        </div>

        <ix-button class="btn-select-date" onClick={() => this.onDone()}>
          {this.textSelectDate}
        </ix-button>
      </Host>
    );
  }
}
