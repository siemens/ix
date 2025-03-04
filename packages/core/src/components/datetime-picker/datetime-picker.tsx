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
import { IxDatePickerComponent } from '../date-picker/date-picker-component';

export type DateTimeSelectEvent = {
  from?: string;
  to?: string;
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
export class DatetimePicker
  implements Omit<IxDatePickerComponent, 'corners' | 'format'>
{
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
  @Prop() minDate?: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() maxDate?: string;

  /**
   * Date format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() dateFormat: string = 'yyyy/LL/dd';

  /**
   * Time format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /**
   * The selected starting date. If the picker is not in range mode this is the selected date.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() from?: string;

  /**
   * The selected end date. If the the picker is not in range mode this property has no impact.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() to?: string;

  /**
   * Select time with format string
   *
   * @since 1.1.0
   */
  @Prop() time?: string;

  /**
   * Show time reference input
   * Time reference is default aligned with @see {this.timeFormat}
   *
   * @since 1.1.0
   */
  @Prop() showTimeReference: boolean = false;

  /**
   * Set time reference
   */
  @Prop() timeReference?: 'AM' | 'PM';

  /**
   * Text of date select button
   *
   * @since 1.1.0
   * @deprecated since 2.1.0. Use `i18nDone`
   */
  @Prop() textSelectDate?: string;

  /**
   * Text of date select button
   *
   * @since 2.1.0
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone: string = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   *
   * @since 2.1.0
   */
  @Prop() weekStartIndex = 0;

  /**
   * Format of time string
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   *
   * @since 2.1.0
   */
  @Prop() locale?: string;

  /**
   * Default behavior of the done event is to join the two events (date and time) into one combined string output.
   * This combination can be configured over the delimiter
   *
   * @since 1.1.0
   * @deprecated Not used anymore see `done` event
   */
  @Prop() eventDelimiter = ' - ';

  /**
   * Done event
   *
   * Set `doneEventDelimiter` to null or undefine to get the typed event
   * @deprecated Use `this.dateChange`
   */
  @Event() done!: EventEmitter<string>;

  /**
   * Time change
   *
   * @since 1.1.0
   */
  @Event() timeChange!: EventEmitter<string>;

  /**
   * Date change
   *
   * @since 1.1.0
   */
  @Event() dateChange!: EventEmitter<DateTimeDateChangeEvent>;

  /**
   * Datetime selection event is fired after confirm button is pressed
   *
   * @since 1.1.0
   */
  @Event() dateSelect!: EventEmitter<DateTimeSelectEvent>;

  private datePickerElement?: HTMLIxDatePickerElement;
  private timePickerElement?: HTMLIxTimePickerElement;

  private async onDone() {
    const date = await this.datePickerElement?.getCurrentDate();
    const time = await this.timePickerElement?.getCurrentTime();

    this.dateSelect.emit({
      from: date?.from ?? '',
      to: date?.to ?? '',
      time: time ?? '',
    });

    this.done.emit(
      [date?.from, date?.to ?? '', time].join(this.eventDelimiter)
    );
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
            <ix-col>
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
                locale={this.locale}
              ></ix-date-picker>
            </ix-col>

            <ix-col class="d-flex flex-column">
              <ix-time-picker
                class="min-width"
                ref={(ref) => (this.timePickerElement = ref)}
                standaloneAppearance={false}
                showHour={this.showHour}
                showMinutes={this.showMinutes}
                showSeconds={this.showSeconds}
                onTimeChange={(event) => this.onTimeChange(event)}
                format={this.timeFormat}
                time={this.time}
              ></ix-time-picker>
              <div class="btn-select-date-container">
                <ix-button
                  class="btn-select-date"
                  onClick={() => this.onDone()}
                >
                  {this.textSelectDate || this.i18nDone}
                </ix-button>
              </div>
            </ix-col>
          </ix-row>
        </ix-layout-grid>
      </Host>
    );
  }
}
