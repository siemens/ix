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
import { getLuxonDateOnlyFormatMask } from '../utils/luxon-datetime-format-masks';
import type { DateRangeValue } from '../utils/calendar.util';

type DatetimePickerSelection = Pick<DateRangeValue, 'from' | 'to'> & {
  time?: string;
};

@Component({
  tag: 'ix-datetime-picker',
  styleUrl: 'datetime-picker.scss',
  shadow: true,
})
export class DatetimePicker
  implements Omit<IxDatePickerComponent, 'corners' | 'format'>
{
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
   * If true, a selection is only applied after the user confirms it with the
   * confirm button. `dateChange` and `timeChange` are deferred until then,
   * and the cancel button discards the pending selection.
   *
   * @since 6.0.0
   */
  @Prop() requireConfirmation = false;

  /**
   * Text of the confirm button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-confirm' }) i18nConfirm: string = 'Confirm';

  /**
   * Text of the cancel button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-cancel' }) i18nCancel: string = 'Cancel';

  /**
   * Top label of the time picker.
   *
   * @since 3.0.0
   */
  @Prop({ attribute: 'i18n-time' }) i18nTime: string = 'Time';

  /**
   * Label for the AM button in 12-hour mode.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-am' }) i18nAm: string = 'AM';

  /**
   * Label for the PM button in 12-hour mode.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-pm' }) i18nPm: string = 'PM';

  /**
   * Text for the time picker hour column header.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-hour-column-header' }) i18nHourColumnHeader: string =
    'hr';

  /**
   * Text for the time picker minute column header.
   *
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-minute-column-header' })
  i18nMinuteColumnHeader: string = 'min';

  /**
   * Text for the time picker second column header.
   *
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-second-column-header' })
  i18nSecondColumnHeader: string = 'sec';

  /**
   * Text for the time picker millisecond column header.
   *
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-millisecond-column-header' })
  i18nMillisecondColumnHeader: string = 'ms';

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
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
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

  /**
   * Emitted when the pending selection is discarded via the cancel button.
   * Only emitted when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Event() dateCancel!: EventEmitter<void>;

  private datePickerElement?: HTMLIxDatePickerElement;
  private timePickerElement?: HTMLIxTimePickerElement;
  @State() private selectedFromDate?: string;

  /** Committed selection while `requireConfirmation` is enabled. */
  @State() private actual: DatetimePickerSelection = {};

  /**
   * Changes made in the embedded pickers while `requireConfirmation` is
   * enabled but not yet confirmed. `undefined` when there is nothing pending.
   */
  @State() private pending?: {
    date?: DateTimeDateChangeEvent;
    time?: string;
  };

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
    this.resetActual();
  }

  @Watch('to')
  @Watch('time')
  watchSelectionPropHandler() {
    this.resetActual();
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
    this.resetActual();
    this.warnIfRangeModeIgnoresTimeConstraints();
  }

  private resetActual() {
    this.actual = { from: this.from, to: this.to, time: this.time };
    this.pending = undefined;
  }

  /**
   * Values passed to the embedded pickers: the props, or with
   * `requireConfirmation` the pending selection on top of the committed one.
   */
  private get pickerSelection(): DatetimePickerSelection {
    if (!this.requireConfirmation) {
      return { from: this.from, to: this.to, time: this.time };
    }

    const { date, time } = this.pending ?? {};

    return {
      from: date === undefined ? this.actual.from : this.dateFrom(date),
      to: date === undefined ? this.actual.to : this.dateTo(date),
      time: time ?? this.actual.time,
    };
  }

  private dateFrom(date: DateTimeDateChangeEvent): string | undefined {
    return typeof date === 'string' ? date : date?.from;
  }

  private dateTo(date: DateTimeDateChangeEvent): string | undefined {
    return typeof date === 'string' ? undefined : date?.to;
  }

  private get dateOnlyFormat(): string {
    return getLuxonDateOnlyFormatMask(this.dateFormat);
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

  private async onConfirm() {
    const pending = this.pending;

    if (pending) {
      this.actual = this.pickerSelection;
      this.pending = undefined;

      if (pending.date !== undefined) {
        this.dateChange.emit(pending.date);
      }

      if (pending.time !== undefined) {
        this.timeChange.emit(pending.time);
      }
    }

    await this.onDone();
  }

  private onCancel() {
    this.discardPending();
    this.dateCancel.emit();
  }

  private discardPending() {
    this.pending = undefined;
    this.selectedFromDate = this.actual.from;
  }

  /**
   * Discards a pending selection made while `requireConfirmation` is enabled.
   * @internal
   */
  @Method()
  async discardPendingSelection(): Promise<void> {
    this.discardPending();
  }

  private async onDone() {
    const date = await this.datePickerElement?.getCurrentDate();
    const time = await this.timePickerElement?.getCurrentTime();
    const isoTime = await this.timePickerElement?.getCurrentIsoTime();

    this.dateSelect.emit({
      from: date?.from ?? '',
      to: date?.to ?? '',
      time: time ?? '',
      isoFrom: date?.isoFrom,
      isoTo: date?.isoTo,
      isoTime,
    });
  }

  private async onDateChange(event: CustomEvent<string | DateChangeEvent>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: date } = event;
    this.selectedFromDate = this.dateFrom(date);

    if (this.requireConfirmation) {
      this.pending = { ...this.pending, date };
      return;
    }

    this.dateChange.emit(date);
  }

  private async onTimeChange(event: CustomEvent<string>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: time } = event;

    if (this.requireConfirmation) {
      this.pending = { ...this.pending, time };
      return;
    }

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
    const selection = this.pickerSelection;

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
                  onDateRangeChange={(event) => {
                    // Pending range changes must not leave the component
                    if (this.requireConfirmation) {
                      event.stopPropagation();
                    }
                  }}
                  from={selection.from}
                  to={selection.to}
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
                  locale={this.locale}
                  time={selection.time}
                  minTime={minTime}
                  maxTime={maxTime}
                  i18nAm={this.i18nAm}
                  i18nPm={this.i18nPm}
                  i18nHeader={this.i18nTime}
                  i18nHourColumnHeader={this.i18nHourColumnHeader}
                  i18nMinuteColumnHeader={this.i18nMinuteColumnHeader}
                  i18nSecondColumnHeader={this.i18nSecondColumnHeader}
                  i18nMillisecondColumnHeader={this.i18nMillisecondColumnHeader}
                  {...{
                    tabIndex: this.embedded ? -1 : 0,
                    [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded,
                  }}
                ></ix-time-picker>
              </ix-col>
            </ix-row>
          </ix-layout-grid>

          <ix-confirmation-footer
            slot="footer"
            layout="responsive"
            requireConfirmation={this.requireConfirmation}
            i18nDone={this.i18nDone}
            i18nConfirm={this.i18nConfirm}
            i18nCancel={this.i18nCancel}
            onDoneClick={() => this.onDone()}
            onConfirmClick={() => this.onConfirm()}
            onCancelClick={() => this.onCancel()}
          ></ix-confirmation-footer>
        </ix-date-time-card>
      </Host>
    );
  }
}
