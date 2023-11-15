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

/**
 * @internal
 */
@Component({
  tag: 'ix-datetime-picker-rework',
  styleUrl: 'datetime-picker-rework.scss',
  shadow: true,
})
export class DatetimePickerRework {
  /**
   * If true a date-range can be selected (from/to).
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
   * See {@link "https://day.js.org/docs/en/display/format"} for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() dateFormat: string = 'YYYY/MM/DD';

  /**
   * Time format string.
   * See {@link "https://day.js.org/docs/en/display/format"} for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /**
   * The selected starting date. If the date-picker-rework is not in range mode this is the selected date.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() from: string | undefined;

  /**
   * The selected end date. If the the date-picker-rework is not in range mode this property has no impact.
   * Format has to match the `format` property.
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
   * DayJS locale object used for translation.
   * See {@link "https://day.js.org/docs/en/i18n/loading-into-browser"} or the ix-date-picker documentation to see how to load a locale.
   */
  @Prop() dayJsLocale: ILocale;

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

  private datePickerElement: HTMLIxDatePickerReworkElement;
  private timePickerElement: HTMLIxTimePickerReworkElement;

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
        <ix-layout-grid class="no-padding">
          <ix-row>
            <ix-col class="no-padding">
              <ix-date-picker-rework
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
              ></ix-date-picker-rework>
            </ix-col>

            <ix-col class="no-padding">
              <ix-time-picker-rework
                class="min-width"
                ref={(ref) => (this.timePickerElement = ref)}
                corners="right"
                standaloneAppearance={false}
                showHours={this.showHour}
                showMinutes={this.showMinutes}
                showSeconds={this.showSeconds}
                onTimeChange={(event) => this.onTimeChange(event)}
                format={this.timeFormat}
                time={this.time}
              ></ix-time-picker-rework>
            </ix-col>
          </ix-row>
          <ix-row>
            <ix-col>
              <ix-button
                class="btn-select-date btn-md-width"
                onClick={() => this.onDone()}
              >
                {this.textSelectDate}
              </ix-button>
            </ix-col>
          </ix-row>
        </ix-layout-grid>
      </Host>
    );
  }
}
