/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { DateTime } from 'luxon';

@Component({
  tag: 'ix-datetime-picker',
  styleUrl: 'datetime-picker.scss',
  scoped: true,
})
export class DatePicker {
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
   */
  @Prop() minDate: DateTime;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate: DateTime;

  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() dateFormat: string = 'yyyy/LL/dd';

  /**
   * Time format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
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
   *
   * @since 1.1.0 time reference is default aligned with formt tt
   */
  @Prop() showTimeReference = undefined;

  /**
   * Set time reference
   */
  @Prop() timeReference: 'AM' | 'PM';

  private date!: string;
  private _time!: string;

  /**
   * Done event
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
  @Event() dateChange: EventEmitter<string>;

  private emitDone() {
    this.done.emit(this.date + ' ' + this._time);
  }

  private emitDateChange(event: CustomEvent<string>) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    this.date = date;
    this.dateChange.emit(date);
  }

  private emitTimeChange(event: CustomEvent<string>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: time } = event;
    this._time = time;
    this.timeChange.emit(time);
  }

  render() {
    return (
      <Host>
        <div class="flex">
          <div class="separator"></div>
          <ix-date-picker
            corners="left"
            individual={false}
            range={this.range}
            onDateChange={(event) => this.emitDateChange(event)}
            from={this.from}
            to={this.to}
            format={this.dateFormat}
            minDate={this.minDate}
            maxDate={this.maxDate}
          ></ix-date-picker>

          <ix-time-picker
            corners="right"
            individual={false}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            showTimeReference={this.showTimeReference}
            onTimeChange={(event) => this.emitTimeChange(event)}
            time={this.time}
            format={this.timeFormat}
            timeReference={this.timeReference}
          ></ix-time-picker>
          <div class="separator"></div>
        </div>

        <div class="done">
          <ix-button onClick={() => this.emitDone()}>Done</ix-button>
        </div>
      </Host>
    );
  }
}
