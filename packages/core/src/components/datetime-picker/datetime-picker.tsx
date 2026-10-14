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
import { getLuxonDateOnlyFormatMask } from '../utils/datetime/luxon-datetime-format-masks';
import {
  parseWithLocale,
  toISODate,
  toISOTime,
} from '../utils/datetime/date-time-locale';
import { isPartialRange } from '../utils/datetime/calendar.util';
import type { DateRange } from '../utils/datetime/date-time.types';
import { isSameStringOrUnset } from '../utils/condition-checks';
import { PendingSelection } from '../utils/datetime/pending-selection';

type DatetimePickerSelection = DateRange<string> & {
  time?: string;
};

/**
 * Combined calendar and time selector for picking a date and time.
 *
 * @documentation https://ix.siemens.io//docs/components/date-time-picker/guide.md
 * @figma-main-component-id 70466:78415
 */
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
   * confirm button, which emits `dateSelect`. The cancel button discards the
   * pending selection.
   *
   * If false, the done button emits `dateSelect`. In both modes `dateChange`
   * and `timeChange` are emitted for every selection.
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
   *
   * Emitted for every pick, also for a selection that is not confirmed yet
   * (`requireConfirmation`). When a pending selection is discarded, it is
   * emitted with the confirmed time again, or the default time if none is
   * confirmed, which is also emitted on load. Use `dateSelect` for the
   * applied selection.
   */
  @Event() timeChange!: EventEmitter<string>;

  /**
   * Date change event. Emitted when the date changes in the embedded date picker.
   *
   * Emitted for every pick, also for a range with only a start date and for
   * a selection that is not confirmed yet (`requireConfirmation`). When a
   * pending selection is discarded, it is emitted with the confirmed date
   * again. Use `dateSelect` for the applied selection.
   */
  @Event() dateChange!: EventEmitter<DateTimeDateChangeEvent>;

  /**
   * Datetime selection event. Emitted when the selection is applied via the
   * done button, or via the confirm button with `requireConfirmation`.
   */
  @Event() dateSelect!: EventEmitter<DateTimeSelectEvent>;

  /**
   * Emitted when the pending selection is discarded via the cancel button,
   * after `dateChange`/`timeChange` reported the restored selection.
   * Only emitted when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Event() dateCancel!: EventEmitter<void>;

  private datePickerElement?: HTMLIxDatePickerElement;
  private timePickerElement?: HTMLIxTimePickerElement;
  @State() private selectedFromDate?: string;

  /** Incremented on discard, so in-flight date changes can detect it. */
  private discardGeneration = 0;

  /**
   * Committed selection: the selection at load, at the last confirm or done
   * click, or at the last external `from`/`to`/`time` change. Changes made in
   * the embedded pickers since then are pending: they are already emitted
   * with `dateChange`/`timeChange`, but not yet applied with `dateSelect`.
   */
  @State() private selection = PendingSelection.create<DatetimePickerSelection>(
    {},
    (a, b) =>
      isSameStringOrUnset(a.from, b.from) &&
      isSameStringOrUnset(a.to, b.to) &&
      isSameStringOrUnset(a.time, b.time)
  );

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
    if (this.applyPropChange('from', value)) {
      this.selectedFromDate = value;
    }
  }

  @Watch('to')
  watchToPropHandler(value: string | undefined) {
    this.applyPropChange('to', value);
  }

  @Watch('time')
  watchTimePropHandler(value: string | undefined) {
    this.applyPropChange('time', value);
  }

  /**
   * Applies a prop change unless it echoes the shown selection back (e.g.
   * two-way binding to `dateChange`/`timeChange`), and returns whether it
   * was applied. The other committed values are kept, as a consumer may bind
   * only some of the props, so the remaining props can be stale.
   */
  private applyPropChange(
    key: keyof DatetimePickerSelection,
    value: string | undefined
  ): boolean {
    const selection = this.selection.withPropChange(key, value);
    const isApplied = selection !== this.selection;
    this.selection = selection;

    return isApplied;
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
    this.selection = this.selection.reset({
      from: this.from,
      to: this.to,
      time: this.time,
    });
  }

  /** Values passed to the embedded pickers: pending, else committed. */
  private get pickerSelection(): DatetimePickerSelection {
    return this.selection.displayed;
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

  /** Picks `change` on top of the shown selection. */
  private select(change: DatetimePickerSelection) {
    this.selection = this.selection.select({
      ...this.pickerSelection,
      ...change,
    });
  }

  /** Whether `selection` has a date, and an end date in range mode. */
  private hasCompleteDate(selection: DatetimePickerSelection): boolean {
    return (
      !!selection.from && (this.singleSelection || !isPartialRange(selection))
    );
  }

  /**
   * Disabled for an incomplete selection, and when nothing changed since the
   * committed selection. Without a complete committed selection, the shown
   * selection can be applied as it is.
   */
  private isPrimaryActionDisabled(): boolean {
    if (!this.hasCompleteDate(this.pickerSelection)) {
      return true;
    }

    const { committed } = this.selection;
    const hasCommittedSelection =
      this.hasCompleteDate(committed) && !!committed.time;

    return hasCommittedSelection && !this.selection.hasPending;
  }

  /**
   * Without a committed time the time picker shows the current time, which
   * becomes part of the selection once it is applied.
   */
  private async includeShownTime() {
    if (this.selection.hasPending || this.selection.committed.time) {
      return;
    }

    const time = await this.timePickerElement?.getDisplayedTime();
    if (time) {
      this.select({ time });
    }
  }

  private async onConfirm() {
    await this.includeShownTime();

    // The picks were already reported with `dateChange`/`timeChange`
    this.selection = this.selection.commit();

    await this.emitDateSelect();
  }

  private async onCancel() {
    await this.discardPending();
    this.dateCancel.emit();
  }

  private async discardPending() {
    this.discardGeneration++;
    const shown = this.pickerSelection;
    this.selection = this.selection.discard();
    this.selectedFromDate = this.selection.committed.from;
    await this.emitRestoredSelection(shown);
  }

  /** Reports the parts of `shown` that differ from the restored selection. */
  private async emitRestoredSelection(shown: DatetimePickerSelection) {
    const { from, to, time } = this.selection.committed;

    if (
      !isSameStringOrUnset(shown.from, from) ||
      !isSameStringOrUnset(shown.to, to)
    ) {
      this.dateChange.emit(this.toDateChangeEvent(from, to));
    }

    if (!time) {
      // The time picker reports its reset default time with `timeChange`
      await this.timePickerElement?.discardPendingSelection();
    } else if (!isSameStringOrUnset(shown.time, time)) {
      this.timeChange.emit(time);
    }
  }

  /** The `dateChange` payload the embedded date picker emits for a range. */
  private toDateChangeEvent(from?: string, to?: string): DateChangeEvent {
    const toIso = (value?: string) => {
      const date = this.parseDateValue(value);
      return date ? toISODate(date) : undefined;
    };

    if (this.singleSelection) {
      return { from, to: undefined, isoFrom: toIso(from), isoTo: undefined };
    }

    return { from, to, isoFrom: toIso(from), isoTo: toIso(to) };
  }

  /**
   * Discards a pending selection made while `requireConfirmation` is enabled.
   * Without `requireConfirmation` the selection was already emitted, so the
   * props are taken as the new committed selection instead.
   * @internal
   */
  @Method()
  async discardPendingSelection(): Promise<void> {
    if (this.requireConfirmation) {
      await this.discardPending();
      return;
    }

    this.selectedFromDate = this.from;
    this.resetActual();

    if (!this.selection.committed.time) {
      await this.timePickerElement?.discardPendingSelection();
    }
  }

  private async onDone() {
    await this.includeShownTime();
    this.selection = this.selection.commit();
    await this.emitDateSelect();
  }

  private async emitDateSelect() {
    this.dateSelect.emit(await this.getCurrentSelection());
  }

  /**
   * The selection shown in the embedded pickers. The time comes from the
   * tracked `timeChange` events, as the time picker only commits a time on
   * its own confirm button. Without a picked time it falls back to the time
   * the time picker shows.
   * @internal
   */
  @Method()
  async getCurrentSelection(): Promise<DateTimeSelectEvent> {
    const date = await this.datePickerElement?.getCurrentDate();
    const time =
      this.pickerSelection.time ||
      (await this.timePickerElement?.getDisplayedTime());

    return {
      from: date?.from ?? '',
      to: date?.to ?? '',
      time: time ?? '',
      isoFrom: date?.isoFrom,
      isoTo: date?.isoTo,
      isoTime: time
        ? toISOTime(parseWithLocale(time, this.timeFormat, this.locale))
        : undefined,
    };
  }

  private async onDateChange(event: CustomEvent<string | DateChangeEvent>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: date } = event;
    this.selectedFromDate = this.dateFrom(date);
    const discardGeneration = this.discardGeneration;

    // Without a committed time the time picker shows the current time, which
    // becomes part of the selection once a date is picked
    const fallbackTime =
      this.selection.committed.time ||
      (await this.timePickerElement?.getDisplayedTime());

    // The pending selection was discarded meanwhile
    if (discardGeneration !== this.discardGeneration) {
      return;
    }

    // Read the selection only after the await, so a time picked meanwhile wins
    this.select({
      from: this.dateFrom(date),
      to: this.dateTo(date),
      time: this.pickerSelection.time || fallbackTime,
    });

    this.dateChange.emit(date);
  }

  private async onTimeChange(event: CustomEvent<string>) {
    event.preventDefault();
    event.stopPropagation();

    const { detail: time } = event;
    this.select({ time });

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
                  // `dateChange` reports the range, so the embedded event must not leak
                  onDateRangeChange={(event) => event.stopPropagation()}
                  // `dateSelect` carries the time, so the date-only event must not leak
                  onDateSelect={(event) => event.stopPropagation()}
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
                  hideFooter
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
            primaryActionDisabled={this.isPrimaryActionDisabled()}
            onDoneClick={() => this.onDone()}
            onConfirmClick={() => this.onConfirm()}
            onCancelClick={() => this.onCancel()}
          ></ix-confirmation-footer>
        </ix-date-time-card>
      </Host>
    );
  }
}
