/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconChevronLeftSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
  Mixin,
} from '@stencil/core';
import { DateTime } from 'luxon';
import {
  formatWithLocale,
  parseWithLocale,
  toISODate,
  tryParseWithLocale,
} from '../utils/datetime/date-time-locale';
import type { DateTimeCardCorners } from '../date-time-card/date-time-card.types';
import {
  CalendarRow,
  calendarRowsFor,
  dayOfMonth,
  isDayWithinRange,
  isMonthWithinRange,
  isPartialRange,
  isSameDayOrUnset,
  isSameRange,
  isYearWithinRange,
  monthNameOf,
  monthsOfYear,
  WeekdayIndex,
  weekdayLabelsFrom,
  weekdayNamesFrom,
  weekStartFrom,
} from '../utils/datetime/calendar.util';
import type {
  NavigationBoundaryDirection,
  NavigationBoundaryHandler,
} from '../dropdown/dropdown-focus';
import { queryElements } from '../utils/focus/focus-utilities';
import { DefaultMixins } from '../utils/internal/component';
import { waitForComponentReady } from '../utils/component-ready';
import { makeRef } from '../utils/make-ref';
import type { DateRange } from '../utils/datetime/date-time.types';
import { PendingSelection } from '../utils/datetime/pending-selection';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { IxDatePickerComponent } from './date-picker-component';
import type { DateChangeEvent } from './date-picker.events';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
import { DatePickerYearMonth } from './date-picker.types';
import { ConfirmationFooter } from '../utils/confirmation-footer/confirmation-footer.fc';

/** Number of years added when the year list is scrolled or navigated past its end. */
const YEAR_RANGE_EXTENSION = 5;

/**
 * Calendar for selecting a single date or a date range.
 *
 * @documentation https://ix.siemens.io//docs/components/date-picker/guide.md
 * @figma-main-component-id 561:6290
 */
@Component({
  tag: 'ix-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: {
    delegatesFocus: true,
  },
})
export class DatePicker
  extends Mixin(...DefaultMixins)
  implements IxDatePickerComponent
{
  @Element() override hostElement!: HTMLIxDatePickerElement;

  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

  /**
   * If true, disables date range selection (from/to).
   */
  @Prop() singleSelection: boolean = false;

  /**
   * Corner style.
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * The selected starting date. If the date picker is not in range mode, this is the selected date.
   * Format has to match the `format` property.
   */
  @Prop() from: string | undefined;

  @Watch('from')
  watchFromPropHandler(newValue: string | undefined) {
    this.onDatePropChange('from', newValue);
  }

  /**
   * The selected end date. If the date picker is not in range mode, this property has no impact.
   * Format has to match the `format` property.
   */
  @Prop() to: string | undefined;

  @Watch('to')
  watchToPropHandler(newValue: string | undefined) {
    this.onDatePropChange('to', newValue);
  }

  /**
   * Applies a `from`/`to` prop change. A change that echoes the displayed
   * selection back (e.g. two-way binding to `dateChange`) keeps a pending
   * selection pending and the done baseline unchanged.
   */
  private onDatePropChange(key: 'from' | 'to', value: string | undefined) {
    const date = value
      ? tryParseWithLocale(value, this.format, this.locale)
      : undefined;

    // An unparsable date keeps the committed date
    if (value && !date) {
      this.selection = this.selection.discard();
      return;
    }

    const selection = this.selection.withPropChange(key, date);
    if (selection === this.selection) {
      return;
    }

    this.selection = selection;
    this.resetDoneBaseline();

    if (date) {
      this.updateSelectedYearMonth(date);
    }
  }

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate = '';

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate = '';

  @Watch('format')
  @Watch('minDate')
  @Watch('maxDate')
  onDateBoundOrFormatChange() {
    this.refreshDates();
  }

  /**
   * Text of the date select button.
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone = 'Done';

  /**
   * If true, a selection is only applied after the user confirms it with the
   * confirm button, which emits `dateSelect`. `dateChange` still reports
   * every pick. The cancel button discards the
   * pending selection.
   *
   * @since 6.0.0
   */
  @Prop() requireConfirmation = false;

  /**
   * Text of the confirm button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-confirm' }) i18nConfirm = 'Confirm';

  /**
   * Text of the cancel button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-cancel' }) i18nCancel = 'Cancel';

  /**
   * ARIA label for the previous month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  @Prop() ariaLabelPreviousMonthButton?: string =
    'Change calendar view to previous month';

  /**
   * ARIA label for the next month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  @Prop() ariaLabelNextMonthButton?: string =
    'Change calendar view to next month';

  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 5.0.0
   */
  @Prop() ariaLabelMonthSelection?: string = 'Select month';

  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 5.0.0
   */
  @Prop() ariaLabelYearSelection?: string = 'Select year';

  /**
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * The public `weekStartIndex` prop, narrowed and sanitised for the calendar
   * helpers. Converting in one place keeps the raw number from reaching them.
   */
  private get weekStart(): WeekdayIndex {
    return weekStartFrom(this.weekStartIndex);
  }

  /**
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months.
   * When the locale changes, the weekday labels are rotated according to the `weekStartIndex`.
   * The locale is also applied when formatting and parsing date values.
   * For locale-dependent format tokens (e.g. `MMMM`, `MMM`), the output will reflect the locale.
   * Use the `isoFrom` and `isoTo` fields on events for locale-independent values.
   */
  @Prop() locale?: string;

  @Watch('locale')
  onLocaleChange() {
    this.setTranslations();
    this.refreshDates();
    this.calendarDirty = true;
  }

  /**
   * Re-parse every date the component holds as a string with the current
   * `format` and `locale`.
   */
  private refreshDates() {
    this.refreshBoundDates();
    this.refreshSelectedDates();
  }

  private refreshBoundDates() {
    this._minDateObj = this.minDate
      ? parseWithLocale(this.minDate, this.format, this.locale)
      : undefined;
    this._maxDateObj = this.maxDate
      ? parseWithLocale(this.maxDate, this.format, this.locale)
      : undefined;
  }

  /**
   * Re-parse `from`/`to` with the current `format` and `locale`.
   */
  private refreshSelectedDates() {
    const parse = (value?: string) =>
      value ? tryParseWithLocale(value, this.format, this.locale) : undefined;

    this.selection = this.selection.reset({
      from: parse(this.from),
      to: parse(this.to),
    });
    this.resetDoneBaseline();
  }

  /**
   * Shows week numbers displayed on the left side of the date picker.
   *
   * @since 3.0.0
   */
  @Prop() showWeekNumbers = false;

  /** @internal */
  @Prop() embedded = false;

  /** @internal */
  @Prop() today = DateTime.now().toISO();

  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  @Prop() enableTopLayer: boolean = false;

  /**
   * Emitted on any date selection change. The `DateChangeEvent` contains `from` and `to` properties
   * formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   * When a pending selection is discarded, it is emitted with the confirmed
   * selection again. Use `dateSelect` to receive only the applied selection.
   */
  @Event() dateChange!: EventEmitter<DateChangeEvent>;

  /**
   * Date range change event. Emitted when the date range selection changes and the component is in range mode.
   * The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   *
   * Emitted together with `dateChange`.
   *
   * @deprecated since 6.0.0, use `dateChange` instead, which carries the same
   * `from`/`to` range. Will be removed in 7.0.0.
   */
  @Event() dateRangeChange!: EventEmitter<DateChangeEvent>;

  /**
   * Date selection event. Emitted when the selection is applied via the done
   * button, or via the confirm button with `requireConfirmation`. With
   * `singleSelection` and without `requireConfirmation` there is no button,
   * so it is emitted together with `dateChange` when a date is picked.
   * The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   */
  @Event() dateSelect!: EventEmitter<DateChangeEvent>;

  /**
   * Emitted when the pending selection is discarded via the cancel button.
   *
   * @since 6.0.0
   */
  @Event() dateCancel!: EventEmitter<void>;

  /**
   * Get the confirmed date or range. The object returned contains `from` and `to` properties
   * formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   *
   * With `requireConfirmation`, a pending selection is not returned until it is
   * confirmed. Listen to `dateChange` to get every pick.
   */
  @Method()
  async getCurrentDate(): Promise<DateChangeEvent> {
    const { from, to } = this.selection.committed;

    return this.toDateChangeEvent(from, to);
  }

  private toDateChangeEvent(from?: DateTime, to?: DateTime): DateChangeEvent {
    const _from = from?.isValid
      ? formatWithLocale(from, this.format, this.locale)
      : undefined;
    const _to = to?.isValid
      ? formatWithLocale(to, this.format, this.locale)
      : undefined;

    if (!this.singleSelection) {
      return {
        from: _from,
        to: _to,
        isoFrom: toISODate(from),
        isoTo: toISODate(to),
      };
    }

    return {
      from: _from,
      to: undefined,
      isoFrom: toISODate(from),
      isoTo: undefined,
    };
  }

  /**
   * The committed selection and, with `requireConfirmation`, an unconfirmed
   * selection. Without `requireConfirmation` picks are committed right away.
   */
  @State() private selection = PendingSelection.create<DateRange<DateTime>>(
    {},
    (a, b) =>
      this.singleSelection
        ? isSameDayOrUnset(a.from, b.from)
        : isSameRange(a, b)
  );

  /**
   * Selection the done button compares against while `requireConfirmation`
   * is disabled: the selection at load, at the last done click or at the last
   * external `from`/`to` change.
   */
  @State() private doneBaseline: DateRange<DateTime> = {};

  private resetDoneBaseline() {
    this.doneBaseline = this.selection.committed;
  }

  private isIncomplete(range: DateRange<DateTime>): boolean {
    return !this.singleSelection && isPartialRange(range);
  }

  private isPrimaryActionDisabled(): boolean {
    if (this.requireConfirmation) {
      const { pending } = this.selection;

      return !pending || this.isIncomplete(pending);
    }

    const current = this.selection.committed;

    return (
      this.isIncomplete(current) || isSameRange(current, this.doneBaseline)
    );
  }

  private get selectedFrom(): DateTime | undefined {
    return this.selection.displayed.from;
  }

  private get selectedTo(): DateTime | undefined {
    return this.selection.displayed.to;
  }

  /**
   * The month on display, as the first of that month. Carries the displayed
   * year with it, so the two can never drift apart. The calendar grid, the
   * header and the month/year dropdown all read it, so they always agree.
   * Write it through {@link setDisplayedMonth}.
   */
  @State() selectedMonthDate: DateTime = DateTime.local().startOf('month');

  @State() startYear = 0;
  @State() endYear = 0;
  @State() private yearDropdownInitialized = false;

  private readonly monthDropdownButtonRef =
    makeRef<HTMLIxDropdownButtonElement>();

  private readonly yearDropdownButtonRef =
    makeRef<HTMLIxDropdownButtonElement>();

  private readonly yearMonthSelectionDropdownRef =
    makeRef<HTMLIxDropdownElement>();

  @State() dayNames: string[] = [];
  @State() dayLabels: string[] = [];
  @State() focusedDay: number = 1;

  private isDayFocus = false;
  private monthChangedFromFocus = false;
  private calendar: CalendarRow[] = [];
  private _minDateObj?: DateTime;
  private _maxDateObj?: DateTime;
  private calendarDirty = true;

  onKeyDown(event: KeyboardEvent) {
    if (!this.isDayFocus) {
      return;
    }

    if (this.yearMonthSelectionDropdownRef.current?.show) {
      return;
    }

    if (['PageUp', 'PageDown', 'Home', 'End'].includes(event.key)) {
      switch (event.key) {
        case 'PageUp':
          this.navigateCalendar(-1, event.shiftKey);
          break;
        case 'PageDown':
          this.navigateCalendar(1, event.shiftKey);
          break;
        case 'Home':
          this.focusFirstDayOfCurrentWeek();
          break;
        case 'End':
          this.focusLastDayOfCurrentWeek();
          break;
      }

      return;
    }

    let _focusedDay = this.focusedDay;
    switch (event.key) {
      case 'ArrowLeft':
        _focusedDay--;
        break;
      case 'ArrowRight':
        _focusedDay++;
        break;
      case 'ArrowUp':
        _focusedDay = _focusedDay - 7;
        break;
      case 'ArrowDown':
        _focusedDay = _focusedDay + 7;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.setFocusedDay(_focusedDay);
  }

  private setFocusedDay(day: number = 0) {
    if (day > this.getDaysInCurrentMonth()) {
      day = day - this.getDaysInCurrentMonth();
      this.changeCalendarView(1);
      this.monthChangedFromFocus = true;
    } else if (day < 1) {
      this.changeCalendarView(-1);
      day = day + this.getDaysInCurrentMonth();
      this.monthChangedFromFocus = true;
    }

    this.focusedDay = day;
  }

  private getDaysInCurrentMonth(): number {
    return this.selectedMonthDate.daysInMonth ?? 0;
  }

  private getFirstDayOfWeek(day: number): number {
    const week = this.calendar.find((w) => w.dayNumbers.includes(day));
    if (!week) {
      return day;
    }
    const firstDay = week.dayNumbers.find((d) => d !== undefined);
    return firstDay ?? day;
  }

  private getLastDayOfWeek(day: number): number {
    const week = this.calendar.find((w) => w.dayNumbers.includes(day));
    if (!week) {
      return day;
    }
    const lastDay = [...week.dayNumbers].reverse().find((d) => d !== undefined);
    return lastDay ?? day;
  }

  private getDateTimeNow() {
    return DateTime.fromISO(this.today);
  }

  /**
   * @internal
   */
  @Method()
  async updateSelectedYearMonth(date: DatePickerYearMonth) {
    this.setDisplayedMonth(
      DateTime.fromObject({
        year: date.year,
        month: date.month,
      })
    );
  }

  /**
   * The single way to move the calendar. `month` may be any day of the target
   * month; it is normalised to the first of that month.
   */
  private setDisplayedMonth(month: DateTime) {
    if (this.selectedMonthDate?.hasSame(month, 'month')) {
      return;
    }
    this.selectedMonthDate = month.startOf('month');
  }

  @Watch('selectedMonthDate')
  onCalendarStateChange() {
    this.calendarDirty = true;
  }

  @Watch('weekStartIndex')
  onWeekStartIndexChange() {
    this.setTranslations();
    this.calendarDirty = true;
  }

  onDayBlur() {
    this.isDayFocus = false;
  }

  onDayFocus() {
    this.isDayFocus = true;
  }

  override componentWillLoad() {
    this.setTranslations();
    this.refreshDates();

    const initialMonth = (
      this.selection.committed.from ?? this.getDateTimeNow()
    ).startOf('month');

    this.startYear = initialMonth.year - 101;
    this.endYear = initialMonth.year + 101;

    this.setDisplayedMonth(initialMonth);
  }

  private keyboardNavigationYearSelection?: () => void;
  private keyboardNavigationMonthSelection?: () => void;

  override disconnectedCallback() {
    this.keyboardNavigationYearSelection?.();
    this.keyboardNavigationMonthSelection?.();
    // A detached picker no longer renders; release a pending year extension.
    this.resolveYearRangeRendered?.();
  }

  override componentDidLoad() {
    super.componentDidLoad?.();
  }

  override componentWillRender() {
    if (this.calendarDirty) {
      this.calendar = calendarRowsFor(this.selectedMonthDate, this.weekStart);
      this.calendarDirty = false;
    }
  }

  override componentDidRender() {
    this.resolveYearRangeRendered?.();
    this.resolveYearRangeRendered = undefined;

    if (!this.monthChangedFromFocus && !this.isDayFocus) {
      return;
    }

    const dayElem = this.hostElement.shadowRoot!.querySelector(
      `[id=day-cell-${this.focusedDay}]`
    ) as HTMLElement;

    dayElem?.focus();
    this.monthChangedFromFocus = false;
  }

  /** @internal */
  @Method()
  async navigateCalendar(direction: -1 | 1, byYear: boolean): Promise<void> {
    this.navigateByMonthOrYear(byYear ? 'year' : 'month', direction);
  }

  /** @internal */
  @Method()
  async focusFirstDayOfCurrentWeek(): Promise<void> {
    this.focusedDay = this.getFirstDayOfWeek(this.focusedDay);
  }

  /** @internal */
  @Method()
  async focusLastDayOfCurrentWeek(): Promise<void> {
    this.focusedDay = this.getLastDayOfWeek(this.focusedDay);
  }

  /** @internal */
  @Method()
  async isCalendarDayFocused(): Promise<boolean> {
    return this.isDayFocus && !this.yearMonthSelectionDropdownRef.current?.show;
  }

  /** @internal */
  @Method()
  async focusActiveDay(): Promise<void> {
    const shadowRoot = this.hostElement.shadowRoot!;
    const dayElement =
      (shadowRoot.querySelector('.calendar-item.selected') as HTMLElement) ??
      (shadowRoot.querySelector('.calendar-item.today') as HTMLElement) ??
      (shadowRoot.querySelector('.calendar-item.first-day') as HTMLElement);
    if (!dayElement) {
      return;
    }
    const day = dayElement.dataset.calendarDay;
    if (day) {
      this.focusedDay = parseInt(day, 10);
    }
    dayElement.focus();
  }

  /**
   * Discards a pending selection made while `requireConfirmation` is enabled,
   * reports the restored selection with `dateChange` and shows the month of
   * the committed selection again. Without a pending selection the displayed
   * month is kept.
   * @internal
   */
  @Method()
  async discardPendingSelection(): Promise<void> {
    if (!this.selection.hasPending) {
      return;
    }

    this.selection = this.selection.discard();
    const { from, to } = this.selection.committed;
    this.emitDateChange(from, to);

    if (from) {
      this.setDisplayedMonth(from);
    }
  }

  private setTranslations() {
    this.dayNames = weekdayNamesFrom(this.weekStart, this.locale);
    this.dayLabels = weekdayLabelsFrom(this.weekStart, this.locale);
  }

  private async onDone() {
    this.resetDoneBaseline();
    const date = await this.getCurrentDate();
    this.dateSelect.emit(date);
  }

  private async onConfirm() {
    this.selection = this.selection.commit();

    // The picks were already reported with `dateChange`
    this.dateSelect.emit(await this.getCurrentDate());
  }

  private async onCancel() {
    await this.discardPendingSelection();
    this.dateCancel.emit();
  }

  private changeCalendarView(number: -1 | 1) {
    this.setDisplayedMonth(this.selectedMonthDate.plus({ months: number }));
  }

  private navigateByMonthOrYear(unit: 'month' | 'year', direction: -1 | 1) {
    const targetMonth = this.selectedMonthDate.plus(
      unit === 'year' ? { years: direction } : { months: direction }
    );

    this.focusedDay = Math.min(this.focusedDay, targetMonth.daysInMonth ?? 0);

    this.setDisplayedMonth(targetMonth);
    this.monthChangedFromFocus = true;
  }

  private selectDay(selectedDay: number, target: Element) {
    if (target.classList.contains('disabled')) {
      return;
    }

    const date = dayOfMonth(this.selectedMonthDate, selectedDay);
    let from = this.selectedFrom;
    let to = this.selectedTo;

    if (this.singleSelection || (from !== undefined && to !== undefined)) {
      from = date;
      to = undefined;
      this.applySelection(from, to);
      return;
    }
    if (from === undefined) {
      from = date;
      this.applySelection(from, to);
      return;
    }
    if (date < from) {
      to = from;
      from = date;
    } else {
      // Set the range normally
      to = date;
    }

    this.applySelection(from, to);
  }

  private applySelection(from?: DateTime, to?: DateTime) {
    this.selection = this.requireConfirmation
      ? this.selection.select({ from, to })
      : this.selection.reset({ from, to });

    this.emitDateChange(from, to);

    if (this.singleSelection && !this.requireConfirmation && !this.embedded) {
      this.dateSelect.emit(this.toDateChangeEvent(from, to));
    }
  }

  private emitDateChange(from?: DateTime, to?: DateTime) {
    const date = this.toDateChangeEvent(from, to);

    this.dateChange.emit(date);
    if (!this.singleSelection) {
      this.dateRangeChange.emit(date);
    }
  }

  private getUtilitiesBasedOnDay(day: number) {
    const todayObj = this.getDateTimeNow();
    const selectedDayObj = dayOfMonth(this.selectedMonthDate, day);
    return {
      isFirstDay: () => day === 1,
      isToday: () => todayObj.hasSame(selectedDayObj, 'day'),
      isSelected: () =>
        !!(
          this.selectedFrom?.hasSame(selectedDayObj, 'day') ||
          this.selectedTo?.hasSame(selectedDayObj, 'day')
        ),
      isRange: () =>
        !!(
          this.selectedFrom &&
          selectedDayObj.startOf('day') > this.selectedFrom.startOf('day') &&
          this.selectedTo !== undefined &&
          selectedDayObj.startOf('day') < this.selectedTo.startOf('day')
        ),
    };
  }

  private getDayClasses(
    day: number,
    util: ReturnType<DatePicker['getUtilitiesBasedOnDay']>
  ): Record<string, boolean> {
    const selectedDayObj = dayOfMonth(this.selectedMonthDate, day);

    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      'first-day': util.isFirstDay(),
      today: util.isToday(),
      selected: util.isSelected(),
      range: util.isRange(),
      disabled: !this.isWithinMinMaxDate(selectedDayObj),
    };
  }

  private isWithinMinMaxYear(year: number): boolean {
    return isYearWithinRange(year, this._minDateObj, this._maxDateObj);
  }

  /** `month` is the first of the month being offered, so it carries its year. */
  private isWithinMinMaxMonth(month: DateTime): boolean {
    return isMonthWithinRange(month, this._minDateObj, this._maxDateObj);
  }

  private isWithinMinMaxDate(date: DateTime): boolean {
    return isDayWithinRange(date, this._minDateObj, this._maxDateObj);
  }

  private renderMonths() {
    return monthsOfYear(this.selectedMonthDate.year).map((month) => {
      const name = monthNameOf(month, this.locale);

      return (
        <ix-dropdown-item
          checked={month.hasSame(this.selectedMonthDate, 'month')}
          key={name}
          class={{
            'month-dropdown-item': true,
            'disabled-item': !this.isWithinMinMaxMonth(month),
          }}
          onClick={() => {
            this.setDisplayedMonth(month);
          }}
        >
          <span class="capitalize monthMargin">{name}</span>
        </ix-dropdown-item>
      );
    });
  }

  private renderYears() {
    const rows = [];

    for (let year = this.startYear; year <= this.endYear; year++) {
      const selected = this.selectedMonthDate.year === year;

      rows.push(
        <ix-dropdown-item
          key={year}
          data-year={year}
          checked={selected}
          class={{
            'month-dropdown-item': true,
            'disabled-item': !this.isWithinMinMaxYear(year),
          }}
          onClick={() => {
            this.setDisplayedMonth(this.selectedMonthDate.set({ year }));
          }}
        >
          <div style={{ 'min-width': 'max-content' }}>{`${year}`}</div>
        </ix-dropdown-item>
      );
    }

    return rows;
  }

  public changeFocusedDay() {
    if (this.monthChangedFromFocus) {
      return;
    }

    requestAnimationFrameNoNgZone(() => {
      const shadowRoot = this.hostElement.shadowRoot!;

      const selectedDayElement = shadowRoot.querySelector(
        '.calendar-item.selected'
      ) as HTMLElement;

      const todayElement = shadowRoot.querySelector(
        '.calendar-item.today'
      ) as HTMLElement;

      let dayElement = selectedDayElement ?? todayElement;

      if (!dayElement) {
        // This only happens if the user uses the year/month selector to pick a date
        // and then switches to a month that has either today’s date or the selected
        dayElement = shadowRoot.querySelector(
          '.calendar-item.first-day'
        ) as HTMLElement;
      }

      if (!dayElement) {
        return;
      }

      const currentDay = dayElement.dataset.calendarDay;

      if (currentDay) {
        this.focusedDay = parseInt(currentDay, 10);
      }
    });
  }

  private async intersect(entries: IntersectionObserverEntry[]) {
    const yearDropdownButton = this.yearDropdownButtonRef.current;

    if (!yearDropdownButton) {
      return;
    }

    const container = await yearDropdownButton.getDropdownReference();
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        if (target.dataset.sentinel === 'top') {
          this.startYear -= YEAR_RANGE_EXTENSION;

          if (!this.skipFirstScrollOffset) {
            requestAnimationFrameNoNgZone(() => {
              const first = queryElements(container, 'ix-dropdown-item')[0];
              container.scrollTo(0, first.offsetTop);
            });
          }
          this.skipFirstScrollOffset = false;
        } else {
          this.endYear += YEAR_RANGE_EXTENSION;
        }
      }
    });
  }

  /**
   * Scrolls the selected month/year of an opened dropdown into the middle.
   * Only the dropdown is scrolled: `scrollIntoView` would also scroll the
   * surrounding containers, which can move the trigger out of view and
   * close the dropdown.
   */
  private async centerCheckedItem(
    dropdownButton?: HTMLIxDropdownButtonElement | null
  ) {
    // Year items render lazily on first open and may not be hydrated yet, so
    // the `checked` attribute is not reflected. Match on the property instead.
    const checkedItem = Array.from(
      dropdownButton?.querySelectorAll('ix-dropdown-item') ?? []
    ).find((item) => item.checked);

    if (!dropdownButton || !checkedItem) {
      return;
    }

    await waitForComponentReady(checkedItem);

    const container = await dropdownButton.getDropdownReference();
    const containerRect = container.getBoundingClientRect();
    const itemRect = checkedItem.getBoundingClientRect();

    container.scrollTop +=
      itemRect.top -
      containerRect.top -
      (container.clientHeight - itemRect.height) / 2;
  }

  private resolveYearRangeRendered?: () => void;
  private pendingYearRangeExtension?: Promise<HTMLElement | undefined>;

  /**
   * Arrow keys past the first/last year extend the year list, like scrolling
   * does, and move to the newly added adjacent year instead of wrapping.
   * Key presses arriving while an extension renders share it, so a key repeat
   * cannot extend the list twice and skip years.
   */
  private readonly extendYearRange: NavigationBoundaryHandler = (direction) => {
    this.pendingYearRangeExtension ??= this.renderYearRangeExtension(
      direction
    ).finally(() => {
      this.pendingYearRangeExtension = undefined;
    });

    return this.pendingYearRangeExtension;
  };

  private async renderYearRangeExtension(
    direction: NavigationBoundaryDirection
  ): Promise<HTMLElement | undefined> {
    const targetYear =
      direction === 'next' ? this.endYear + 1 : this.startYear - 1;
    const rendered = new Promise<void>((resolve) => {
      this.resolveYearRangeRendered = resolve;
    });

    if (direction === 'next') {
      this.endYear += YEAR_RANGE_EXTENSION;
    } else {
      this.startYear -= YEAR_RANGE_EXTENSION;
    }

    await rendered;

    const targetItem =
      this.yearDropdownButtonRef.current?.querySelector<HTMLIxDropdownItemElement>(
        `ix-dropdown-item[data-year="${targetYear}"]`
      );

    if (!targetItem) {
      return undefined;
    }

    // The new items are children of the year dropdown button, so the date
    // picker's render does not wait for them. Until an item has rendered, it
    // lacks its focus-visible class and focusing it would leave no year active.
    await waitForComponentReady(targetItem);

    return targetItem;
  }

  private skipFirstScrollOffset = true;
  private intersectStart = new IntersectionObserver(
    (entries) => this.intersect(entries),
    { threshold: 0.5 }
  );
  private intersectEnd = new IntersectionObserver(
    (entries) => this.intersect(entries),
    { threshold: 0.5 }
  );

  override render() {
    // Formatted once per render rather than per day cell, which would repeat
    // the same locale lookup up to 42 times.
    const monthLabel = monthNameOf(this.selectedMonthDate, this.locale);
    const yearLabel = this.selectedMonthDate.year;

    return (
      <Host
        onKeyDown={(event: KeyboardEvent) => this.onKeyDown(event)}
        onFocusin={() => {
          if (hasKeyboardMode()) {
            this.changeFocusedDay();
          }
        }}
      >
        <ix-date-time-card corners={this.corners} embedded={this.embedded}>
          <div class="header" slot="header">
            <ix-icon-button
              onClick={() => this.changeCalendarView(-1)}
              icon={iconChevronLeftSmall}
              variant="tertiary"
              class="arrows"
              aria-label={this.ariaLabelPreviousMonthButton}
            ></ix-icon-button>
            <div class="selector">
              <ix-dropdown-button
                class="month-selector"
                focusCheckedItem={true}
                aria-label={this.ariaLabelMonthSelection}
                ref={this.monthDropdownButtonRef}
                variant="tertiary"
                label={null}
                onShowChanged={(event) => {
                  // Need to stop event propagation to trigger initial focus handling of the calendar days
                  event.stopPropagation();

                  if (event.detail) {
                    requestAnimationFrameNoNgZone(() =>
                      this.centerCheckedItem(
                        this.monthDropdownButtonRef.current
                      )
                    );
                  }
                }}
              >
                <ix-typography
                  format="body-sbold"
                  class="capitalize"
                  slot="button-label"
                >
                  {monthLabel}
                </ix-typography>
                {this.renderMonths()}
              </ix-dropdown-button>

              <ix-dropdown-button
                class="year-selector"
                focusCheckedItem={true}
                aria-label={this.ariaLabelYearSelection}
                navigationBoundaryHandler={this.extendYearRange}
                ref={this.yearDropdownButtonRef}
                variant="tertiary"
                label={null}
                onShowChange={(event) => {
                  if (event.detail) {
                    this.yearDropdownInitialized = true;
                  }
                }}
                onShowChanged={(event) => {
                  // Need to stop event propagation to trigger initial focus handling of the calendar days
                  event.stopPropagation();

                  if (event.detail) {
                    requestAnimationFrameNoNgZone(() => {
                      this.intersectStart.observe(
                        this.hostElement.shadowRoot!.querySelector(
                          '[data-sentinel="top"]'
                        ) as HTMLElement
                      );
                      this.intersectEnd.observe(
                        this.hostElement.shadowRoot!.querySelector(
                          '[data-sentinel="bottom"]'
                        ) as HTMLElement
                      );
                      this.centerCheckedItem(
                        this.yearDropdownButtonRef.current
                      );
                    });
                  } else {
                    this.intersectStart.disconnect();
                    this.intersectEnd.disconnect();
                  }
                }}
              >
                <div class="infinite-scrolling-spacer">
                  <div class="sentinel" data-sentinel="top"></div>
                </div>
                <ix-typography
                  format="body-sbold"
                  class="capitalize"
                  slot="button-label"
                >
                  {yearLabel}
                </ix-typography>
                {this.yearDropdownInitialized ? this.renderYears() : null}
                <div class="infinite-scrolling-spacer">
                  <div class="sentinel" data-sentinel="bottom"></div>
                </div>
              </ix-dropdown-button>
            </div>
            <ix-icon-button
              onClick={() => this.changeCalendarView(1)}
              icon={iconChevronRightSmall}
              variant="tertiary"
              class="arrows"
              aria-label={this.ariaLabelNextMonthButton}
            ></ix-icon-button>
          </div>
          <div
            role="grid"
            class={{
              grid: true,
              'grid--show-week-numbers': this.showWeekNumbers,
            }}
          >
            <div role="row">
              {this.showWeekNumbers && (
                <div class="calendar-item week-day" role="columnheader"></div>
              )}
              {this.dayNames.map((name, column) => (
                <div
                  key={name}
                  class="calendar-item week-day"
                  role="columnheader"
                  aria-label={name}
                >
                  <div class="overflow">{this.dayLabels[column]}</div>
                </div>
              ))}
            </div>
            {this.calendar.map((week) => {
              return (
                <div role="row">
                  {this.showWeekNumbers && (
                    <div class="calendar-item week-number" role="rowheader">
                      {week.weekNumber}
                    </div>
                  )}
                  {week.dayNumbers.map((day) => {
                    if (!day) {
                      return <div role="gridcell"></div>;
                    }
                    const util = this.getUtilitiesBasedOnDay(day);

                    return (
                      <div
                        role="gridcell"
                        aria-selected={util.isSelected() ? 'true' : 'false'}
                        key={day}
                        id={`day-cell-${day}`}
                        data-calendar-day={day}
                        data-date-value={`${week.weekNumber}-${day}`}
                        class={this.getDayClasses(day, util)}
                        onClick={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          this.selectDay(day, target);
                        }}
                        onKeyDown={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            this.selectDay(day, target);
                          }
                        }}
                        tabIndex={day === this.focusedDay ? 0 : -1}
                        autofocus={util.isToday()}
                        onFocus={() => this.onDayFocus()}
                        onBlur={() => this.onDayBlur()}
                        aria-label={`${day} ${monthLabel} ${yearLabel}`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {(this.requireConfirmation ||
            !(this.singleSelection || this.embedded)) && (
            <ConfirmationFooter
              class="button"
              requireConfirmation={this.requireConfirmation}
              i18nDone={this.i18nDone}
              i18nConfirm={this.i18nConfirm}
              i18nCancel={this.i18nCancel}
              primaryActionDisabled={this.isPrimaryActionDisabled()}
              onDone={() => this.onDone()}
              onConfirm={() => this.onConfirm()}
              onCancel={() => this.onCancel()}
            />
          )}
        </ix-date-time-card>
      </Host>
    );
  }
}
