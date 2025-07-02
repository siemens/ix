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
   *
   * @deprecated This is now determined by the format that is used. Will be removed in 4.0.0
   */
  @Prop() showHour = true;

  /**
   * Show minutes input
   *
   * @deprecated This is now determined by the format that is used. Will be removed in 4.0.0
   */
  @Prop() showMinutes = true;

  /**
   * Show seconds input
   *
   * @deprecated This is now determined by the format that is used. Will be removed in 4.0.0
   */
  @Prop() showSeconds = true;

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate?: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate?: string;

  /**
   * Date format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() dateFormat: string = 'yyyy/LL/dd';

  /**
   * Time format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /**
   * The selected starting date. If the picker is not in range mode this is the selected date.
   * Format has to match the `format` property.
   */
  @Prop() from?: string;

  /**
   * The selected end date. If the the picker is not in range mode this property has no impact.
   * Format has to match the `format` property.
   */
  @Prop() to?: string;

  /**
   * Select time with format string
   */
  @Prop() time?: string;

  /**
   * Show time reference input
   * Time reference is default aligned with @see {this.timeFormat}
   */
  @Prop() showTimeReference: boolean = false;

  /**
   * Set time reference
   */
  @Prop() timeReference?: 'AM' | 'PM';

  /**
   * Text of date select button
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone: string = 'Done';

  /**
   * Top label of time picker
   *
   * @since 3.0.0
   */
  @Prop() i18nTime: string = 'Time';

  /**
   * ARIA label for the previous month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelPreviousMonthButton?: string;

  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelNextMonthButton?: string;

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * Format of time string
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() locale?: string;

  /**
   * Shows week numbers displayed on the left side of the date picker
   *
   * @since 3.0.0
   */
  @Prop() showWeekNumbers = false;

  /**
   * Time change
   */
  @Event() timeChange!: EventEmitter<string>;

  /**
   * Date change
   */
  @Event() dateChange!: EventEmitter<DateTimeDateChangeEvent>;

  /**
   * Datetime selection event is fired after confirm button is pressed
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
                showWeekNumbers={this.showWeekNumbers}
                ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
                ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
              ></ix-date-picker>
            </ix-col>

            <ix-col>
              <ix-time-picker
                class="min-width"
                ref={(ref) => (this.timePickerElement = ref)}
                standaloneAppearance={false}
                dateTimePickerAppearance={true}
                onTimeChange={(event) => this.onTimeChange(event)}
                format={this.timeFormat}
                textTime={this.i18nTime}
                time={this.time}
                showHour={this.showHour}
                showMinutes={this.showMinutes}
                showSeconds={this.showSeconds}
              ></ix-time-picker>
              <div class="btn-select-date-container">
                <ix-button
                  class="btn-select-date"
                  onClick={() => this.onDone()}
                >
                  {this.i18nDone}
                </ix-button>
              </div>
            </ix-col>
          </ix-row>
        </ix-layout-grid>
      </Host>
    );
  }
}
