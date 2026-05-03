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
  h,
  Host,
  State,
  Prop,
  Method,
  Watch,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { IxDatePickerComponent } from '../date-picker/date-picker-component';
import type { DateChangeEvent } from '../date-picker/date-picker.events';
import type {
  DateTimeDateChangeEvent,
  DateTimeSelectEvent,
} from './datetime-picker.types';
import { TRAP_FOCUS_INCLUDE_ATTRIBUTE } from '../utils/focus/focus-trap';

@Component({
  tag: 'ix-datetime-picker',
  styleUrl: 'datetime-picker.scss',
  shadow: true,
})
export class DatetimePicker
  implements Omit<IxDatePickerComponent, 'corners' | 'format'>
{
  /** Used when `dateFormat` has no date prefix before time tokens (Luxon `[HhmsaSZ]`). */
  private static readonly defaultDateOnlyFormat = 'yyyy/LL/dd';

  @Element() hostElement!: HTMLIxDatetimePickerElement;

  /**
   * If true, disables date range selection (from/to).
   */
  @Prop() singleSelection = false;

  /**
   * The earliest date that can be selected.
   * If not set there will be no restriction.
   */
  @Prop() minDate?: string;

  /**
   * The latest date that can be selected.
   * If not set there will be no restriction.
   */
  @Prop() maxDate?: string;

  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() dateFormat: string = 'yyyy/LL/dd';

  /**
   * Time format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /**
   * Earliest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  @Prop() minTime?: string;

  /**
   * Latest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  @Prop() maxTime?: string;

  /**
   * The selected starting date. If the picker is not in range mode, this is the selected date.
   * Format has to match the `dateFormat` property.
   */
  @Prop() from?: string;

  /**
   * The selected end date. If the picker is not in range mode, this property has no impact.
   * Format has to match the `dateFormat` property.
   */
  @Prop() to?: string;

  /**
   * Selected time value for the embedded time picker.
   * Format has to match the `timeFormat` property.
   */
  @Prop() time?: string;

  /**
   * Show AM/PM time reference control.
   */
  @Prop() showTimeReference: boolean = false;

  /**
   * Time reference (AM or PM).
   */
  @Prop() timeReference?: 'AM' | 'PM';

  /**
   * Text of the date select button.
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone: string = 'Done';

  /**
   * Top label of the time picker.
   *
   * @since 3.0.0
   */
  @Prop({ attribute: 'i18n-time' }) i18nTime: string = 'Time';

  /**
   * ARIA label for the previous month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  @Prop() ariaLabelPreviousMonthButton?: string = 'Previous month';

  /**
   * ARIA label for the next month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  @Prop() ariaLabelNextMonthButton?: string = 'Next month';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * Locale identifier (e.g. 'en' or 'de').
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() locale?: string;

  /**
   * Shows week numbers displayed on the left side of the date picker.
   *
   * @since 3.0.0
   */
  @Prop() showWeekNumbers = false;

  /** @internal */
  @Prop() embedded = false;

  /**
   * Time change event. Emitted when the time changes in the embedded time picker.
   */
  @Event() timeChange!: EventEmitter<string>;

  /**
   * Date change event. Emitted when the date changes in the embedded date picker.
   */
  @Event() dateChange!: EventEmitter<DateTimeDateChangeEvent>;

  /**
   * Datetime selection event. Emitted when the user confirms the selection.
   */
  @Event() dateSelect!: EventEmitter<DateTimeSelectEvent>;

  private datePickerElement?: HTMLIxDatePickerElement;
  private timePickerElement?: HTMLIxTimePickerElement;
  @State() private selectedFromDate?: string;

  private hasTimeConstraintsConfigured(): boolean {
    return !!(this.minTime?.trim() || this.maxTime?.trim());
  }

  private warnIfRangeModeIgnoresTimeConstraints(): void {
    if (this.singleSelection || !this.hasTimeConstraintsConfigured()) {
      return;
    }

    console.warn(
      '[ix-datetime-picker] `minTime`/`maxTime` are ignored when range selection is enabled (`singleSelection=false`).'
    );
  }

  @Watch('from')
  watchFromPropHandler(value: string | undefined) {
    this.selectedFromDate = value;
  }

  @Watch('singleSelection')
  watchSingleSelectionPropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }

  @Watch('minTime')
  watchMinTimePropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }

  @Watch('maxTime')
  watchMaxTimePropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }

  componentWillLoad() {
    this.selectedFromDate = this.from;
    this.warnIfRangeModeIgnoresTimeConstraints();
  }

  private get dateOnlyFormat(): string {
    const timeTokenIndex = this.dateFormat.search(/[HhmsaSZ]/);
    if (timeTokenIndex === -1) {
      return this.dateFormat;
    }

    let end = timeTokenIndex;
    while (end > 0 && " \t'T".includes(this.dateFormat[end - 1])) {
      end--;
    }

    const prefix = this.dateFormat.slice(0, end).trimEnd();
    return prefix === '' ? DatetimePicker.defaultDateOnlyFormat : prefix;
  }

  private parseDateValue(value: string | undefined): DateTime | null {
    if (!value) {
      return null;
    }

    let parsed = DateTime.fromFormat(value, this.dateFormat, {
      locale: this.locale,
    });

    if (!parsed.isValid) {
      parsed = DateTime.fromFormat(value, this.dateOnlyFormat, {
        locale: this.locale,
      });
    }

    if (!parsed.isValid) {
      return null;
    }

    return parsed;
  }

  private parseDateConstraint(
    value: string | undefined,
    boundary: 'start' | 'end'
  ): DateTime | null {
    const parsed = this.parseDateValue(value);
    if (!parsed) {
      return null;
    }

    return boundary === 'start' ? parsed.startOf('day') : parsed.endOf('day');
  }

  private getSelectedFromDateTime(): DateTime | null {
    const parsed = this.parseDateValue(this.selectedFromDate);
    if (!parsed) {
      return null;
    }

    return parsed.startOf('day');
  }

  private getEffectiveTimeConstraints(): {
    minTime: string | undefined;
    maxTime: string | undefined;
  } {
    if (!this.singleSelection) {
      return { minTime: undefined, maxTime: undefined };
    }

    const hasDateBounds = !!(this.minDate || this.maxDate);
    if (!hasDateBounds) {
      return {
        minTime: this.minTime,
        maxTime: this.maxTime,
      };
    }

    const selectedFromDate = this.getSelectedFromDateTime();
    if (!selectedFromDate?.isValid) {
      return { minTime: undefined, maxTime: undefined };
    }

    const minDate = this.parseDateConstraint(this.minDate, 'start');
    const maxDate = this.parseDateConstraint(this.maxDate, 'end');

    const applyMinTime =
      !!minDate?.isValid &&
      !!selectedFromDate?.isValid &&
      selectedFromDate.hasSame(minDate, 'day');

    const applyMaxTime =
      !!maxDate?.isValid && selectedFromDate.hasSame(maxDate, 'day');

    return {
      minTime: applyMinTime ? this.minTime : undefined,
      maxTime: applyMaxTime ? this.maxTime : undefined,
    };
  }

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
    if (typeof date === 'string') {
      this.selectedFromDate = date;
    } else {
      this.selectedFromDate = date?.from;
    }
    this.dateChange.emit(date);
  }

  private async onTimeChange(event: CustomEvent<string>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: time } = event;
    this.timeChange.emit(time);
  }

  /** @internal */
  @Method()
  async getDatepickerElement() {
    return this.datePickerElement;
  }

  /** @internal */
  @Method()
  async getTimepickerElement() {
    return this.timePickerElement;
  }

  render() {
    const { minTime, maxTime } = this.getEffectiveTimeConstraints();

    return (
      <Host>
        <ix-date-time-card
          hideHeader={true}
          hasFooter={true}
          embedded={this.embedded}
          corners="rounded"
          noPadding
        >
          <ix-layout-grid class="no-padding">
            <ix-row class="row-separator">
              <ix-col class="col-separator">
                <ix-date-picker
                  ref={(ref) => (this.datePickerElement = ref)}
                  corners="left"
                  singleSelection={this.singleSelection}
                  onDateChange={(event) => this.onDateChange(event)}
                  from={this.from}
                  to={this.to}
                  format={this.dateFormat}
                  minDate={this.minDate}
                  maxDate={this.maxDate}
                  weekStartIndex={this.weekStartIndex}
                  embedded
                  locale={this.locale}
                  showWeekNumbers={this.showWeekNumbers}
                  ariaLabelPreviousMonthButton={
                    this.ariaLabelPreviousMonthButton
                  }
                  ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
                  {...{
                    tabIndex: this.embedded ? -1 : 0,
                    [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded,
                  }}
                ></ix-date-picker>
              </ix-col>

              <ix-col>
                <ix-time-picker
                  class="min-width"
                  ref={(ref) => (this.timePickerElement = ref)}
                  embedded
                  dateTimePickerAppearance={true}
                  onTimeChange={(event) => this.onTimeChange(event)}
                  format={this.timeFormat}
                  time={this.time}
                  minTime={minTime}
                  maxTime={maxTime}
                  {...{
                    tabIndex: this.embedded ? -1 : 0,
                    [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded,
                  }}
                ></ix-time-picker>
              </ix-col>
            </ix-row>
          </ix-layout-grid>

          <div slot="footer" class="btn-select-date-container">
            <ix-button class="btn-select-date" onClick={() => this.onDone()}>
              {this.i18nDone}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
