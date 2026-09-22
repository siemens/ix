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
} from '../utils/date-time-locale';
import type { DateTimeCardCorners } from '../date-time-card/date-time-card.types';
import {
  DAYS_IN_WEEK,
  dayOfMonth,
  isDayWithinRange,
  isMonthWithinRange,
  isYearWithinRange,
  monthNameOf,
  monthsOfYear,
  WeekdayIndex,
  weekdayColumnOf,
  weekdayNamesFrom,
  weekStartFrom,
} from '../utils/calendar-units';
import { queryElements } from '../utils/focus/focus-utilities';
import { DefaultMixins } from '../utils/internal/component';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { IxDatePickerComponent } from './date-picker-component';
import type { DateChangeEvent } from './date-picker.events';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';

interface CalendarWeek {
  weekNumber: number;
  dayNumbers: (number | undefined)[];
}

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
  watchFromPropHandler(newValue: string) {
    if (!newValue) {
      this.currFromDate = undefined;

      return;
    }

    const date = tryParseWithLocale(newValue, this.format, this.locale);

    if (date) {
      this.currFromDate = date;
      this.updateSelectedYearMonth(date);
    }
  }

  /**
   * The selected end date. If the date picker is not in range mode, this property has no impact.
   * Format has to match the `format` property.
   */
  @Prop() to: string | undefined;

  @Watch('to')
  watchToPropHandler(newValue: string) {
    if (!newValue) {
      this.currToDate = undefined;

      return;
    }

    const date = tryParseWithLocale(newValue, this.format, this.locale);

    if (date) {
      this.currToDate = date;
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
   * It also determines the default order of weekdays based on the locale's conventions.
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
    this.currFromDate = this.from
      ? tryParseWithLocale(this.from, this.format, this.locale)
      : undefined;
    this.currToDate = this.to
      ? tryParseWithLocale(this.to, this.format, this.locale)
      : undefined;
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
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties
   * formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  @Event() dateChange!: EventEmitter<DateChangeEvent>;

  /**
   * Date range change event. Emitted when the date range selection changes and the component is in range mode.
   * The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   */
  @Event() dateRangeChange!: EventEmitter<DateChangeEvent>;

  /**
   * Date selection event. Emitted when the selection is confirmed via the date select button.
   * The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   */
  @Event() dateSelect!: EventEmitter<DateChangeEvent>;

  /**
   * Get the currently selected date or range. The object returned contains `from` and `to` properties
   * formatted according to the `format` and `locale` properties.
   * Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
   */
  @Method()
  async getCurrentDate(): Promise<DateChangeEvent> {
    const _from = this.currFromDate?.isValid
      ? formatWithLocale(this.currFromDate, this.format, this.locale)
      : undefined;
    const _to = this.currToDate?.isValid
      ? formatWithLocale(this.currToDate, this.format, this.locale)
      : undefined;

    if (!this.singleSelection) {
      return {
        from: _from,
        to: _to,
        isoFrom: toISODate(this.currFromDate),
        isoTo: toISODate(this.currToDate),
      };
    }

    return {
      from: _from,
      to: undefined,
      isoFrom: toISODate(this.currFromDate),
      isoTo: undefined,
    };
  }

  @State()
  currFromDate?: DateTime;
  @State() currToDate?: DateTime;

  /**
   * The month shown in the calendar grid, as the first of that month. Carries
   * the displayed year with it, so the two can never drift apart.
   */
  @State() selectedMonthDate: DateTime = DateTime.local().startOf('month');

  /**
   * The month highlighted in the month/year dropdown, as the first of that
   * month. Tracks `selectedMonthDate` except while the dropdown is open and
   * the user has picked a year but not yet a month.
   */
  @State() tempMonthDate: DateTime = DateTime.local().startOf('month');

  @State() startYear = 0;
  @State() endYear = 0;

  private readonly yearDropdownButtonRef =
    makeRef<HTMLIxDropdownButtonElement>();

  private readonly yearMonthSelectionDropdownRef =
    makeRef<HTMLIxDropdownElement>();

  @State() dayNames: string[] = [];
  @State() focusedDay: number = 1;

  private isDayFocus = false;
  private monthChangedFromFocus = false;
  private calendar: CalendarWeek[] = [];
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
  async updateSelectedYearMonth(date: DateTime) {
    this.selectedMonthDate = date.startOf('month');
    this.tempMonthDate = this.selectedMonthDate;
  }

  @Watch('selectedMonthDate')
  @Watch('weekStartIndex')
  onCalendarStateChange() {
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

    const initialMonth = (this.currFromDate ?? this.getDateTimeNow()).startOf(
      'month'
    );

    this.startYear = initialMonth.year - 101;
    this.endYear = initialMonth.year + 101;

    this.selectedMonthDate = initialMonth;
    this.tempMonthDate = initialMonth;
  }

  private keyboardNavigationYearSelection?: () => void;
  private keyboardNavigationMonthSelection?: () => void;

  override disconnectedCallback() {
    this.keyboardNavigationYearSelection?.();
    this.keyboardNavigationMonthSelection?.();
  }

  override componentDidLoad() {
    super.componentDidLoad?.();
  }

  override componentWillRender() {
    if (this.calendarDirty) {
      this.calculateCalendar();
      this.calendarDirty = false;
    }
  }

  override componentDidRender() {
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

  private setTranslations() {
    this.dayNames = weekdayNamesFrom(this.weekStart, this.locale);
  }

  private async onDone() {
    const date = await this.getCurrentDate();
    this.dateSelect.emit(date);
  }

  private calculateCalendar() {
    const calendar: CalendarWeek[] = [];
    const monthStart = this.selectedMonthDate;
    const monthEnd = monthStart.endOf('month');
    let startWeek = monthStart.weekNumber;
    let endWeek = monthEnd.weekNumber;
    const monthStartWeekDayIndex = weekdayColumnOf(monthStart, this.weekStart);
    const monthEndWeekDayIndex = weekdayColumnOf(monthEnd, this.weekStart);

    let correctLastWeek = false;
    if (endWeek === 1) {
      endWeek = monthEnd.weeksInWeekYear + 1;
      correctLastWeek = true;
    }

    let correctFirstWeek = false;
    if (startWeek === monthStart.weeksInWeekYear) {
      startWeek = 1;
      endWeek++;

      correctFirstWeek = true;
    }

    let currDayNumber = 1;
    for (
      let weekIndex = startWeek;
      weekIndex <= endWeek && currDayNumber <= 31;
      weekIndex++
    ) {
      const daysArr: (number | undefined)[] = [];

      for (let j = 0; j < DAYS_IN_WEEK && currDayNumber <= 31; j++) {
        // Display empty cells until the calender starts/has ended
        if (
          (weekIndex === startWeek && j < monthStartWeekDayIndex) ||
          (weekIndex === endWeek && j > monthEndWeekDayIndex)
        ) {
          daysArr.push(undefined);
        } else {
          daysArr.push(currDayNumber++);
        }
      }

      if (correctFirstWeek || correctLastWeek) {
        if (weekIndex === 1) {
          calendar.push({
            weekNumber: monthStart.weeksInWeekYear,
            dayNumbers: daysArr,
          });
        } else if (weekIndex === monthEnd.weekNumber) {
          calendar.push({
            weekNumber: 1,
            dayNumbers: daysArr,
          });
        } else {
          calendar.push({
            weekNumber: weekIndex - 1,
            dayNumbers: daysArr,
          });
        }
        continue;
      }

      calendar.push({
        weekNumber: weekIndex,
        dayNumbers: daysArr,
      });
    }

    this.calendar = calendar;
  }

  /** `month` is the first of the month to show, as built by `monthsOfYear`. */
  private selectMonth(month: DateTime) {
    this.selectedMonthDate = month;
    this.tempMonthDate = month;
  }

  private changeCalendarView(number: -1 | 1) {
    this.selectedMonthDate = this.selectedMonthDate.plus({ months: number });
    this.tempMonthDate = this.selectedMonthDate;
  }

  private navigateByMonthOrYear(unit: 'month' | 'year', direction: -1 | 1) {
    const targetMonth = this.selectedMonthDate.plus(
      unit === 'year' ? { years: direction } : { months: direction }
    );

    this.focusedDay = Math.min(this.focusedDay, targetMonth.daysInMonth ?? 0);

    this.selectedMonthDate = targetMonth;
    this.tempMonthDate = targetMonth;
    this.monthChangedFromFocus = true;
  }

  private selectDay(selectedDay: number, target: Element) {
    if (target.classList.contains('disabled')) {
      return;
    }

    const date = dayOfMonth(this.selectedMonthDate, selectedDay);

    if (this.singleSelection || this.currFromDate === undefined) {
      this.currFromDate = date;
      this.onDateChange();

      return;
    }

    // Reset the range selection
    if (this.currToDate !== undefined) {
      this.currFromDate = date;
      this.currToDate = undefined;
      this.onDateChange();

      return;
    }

    // Swap from/to if the second date is before the current date
    if (date < this.currFromDate) {
      this.currToDate = this.currFromDate;
      this.currFromDate = date;
      this.onDateChange();

      return;
    }

    // Set the range normally
    this.currToDate = date;
    this.onDateChange();
  }

  private onDateChange() {
    this.getCurrentDate().then((date) => {
      this.dateChange.emit(date);
      if (!this.singleSelection) {
        this.dateRangeChange.emit(date);
      }
    });
  }

  private getUtilitiesBasedOnDay(day: number) {
    const todayObj = this.getDateTimeNow();
    const selectedDayObj = dayOfMonth(this.selectedMonthDate, day);
    return {
      isFirstDay: () => day === 1,
      isToday: () => todayObj.hasSame(selectedDayObj, 'day'),
      isSelected: () =>
        !!(
          this.currFromDate?.hasSame(selectedDayObj, 'day') ||
          this.currToDate?.hasSame(selectedDayObj, 'day')
        ),
      isRange: () =>
        !!(
          this.currFromDate &&
          selectedDayObj.startOf('day') > this.currFromDate.startOf('day') &&
          this.currToDate !== undefined &&
          selectedDayObj.startOf('day') < this.currToDate?.startOf('day')
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
    return monthsOfYear(this.tempMonthDate.year).map((month) => {
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
            this.selectMonth(month);
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
      const selected = this.tempMonthDate.year === year;

      rows.push(
        <ix-dropdown-item
          key={year}
          checked={selected}
          class={{
            'month-dropdown-item': true,
            'disabled-item': !this.isWithinMinMaxYear(year),
          }}
          onClick={() => {
            this.tempMonthDate = this.tempMonthDate.set({ year });
            this.selectedMonthDate = this.selectedMonthDate.set({ year });
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
          this.startYear -= 5;

          if (!this.skipFirstScrollOffset) {
            requestAnimationFrameNoNgZone(() => {
              const first = queryElements(container, 'ix-dropdown-item')[0];
              container.scrollTo(0, first.offsetTop);
            });
          }
          this.skipFirstScrollOffset = false;
        } else {
          this.endYear += 5;
        }
      }
    });
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
                variant="tertiary"
                label={null}
                onShowChanged={(event) => {
                  // Need to stop event propagation to trigger initial focus handling of the calendar days
                  event.stopPropagation();
                }}
              >
                <ix-typography bold class="capitalize" slot="button-label">
                  {monthLabel}
                </ix-typography>
                {this.renderMonths()}
              </ix-dropdown-button>

              <ix-dropdown-button
                class="year-selector"
                focusCheckedItem={true}
                aria-label={this.ariaLabelYearSelection}
                ref={this.yearDropdownButtonRef}
                variant="tertiary"
                label={null}
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
                      const selectedYearItem =
                        this.yearDropdownButtonRef.current?.querySelector(
                          'ix-dropdown-item[checked]'
                        ) as HTMLElement | null;

                      if (!selectedYearItem) {
                        return;
                      }

                      requestAnimationFrameNoNgZone(() => {
                        selectedYearItem.scrollIntoView({
                          block: 'center',
                        });
                      });
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
                <ix-typography bold class="capitalize" slot="button-label">
                  {yearLabel}
                </ix-typography>
                {this.renderYears()}
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
              {this.dayNames.map((name) => (
                <div
                  key={name}
                  class="calendar-item week-day"
                  role="columnheader"
                >
                  <div class="overflow">{name.slice(0, 3)}</div>
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
          <div
            class={{
              button: true,
              hidden: this.singleSelection || this.embedded,
            }}
          >
            <ix-button
              hidden={this.singleSelection || this.embedded}
              onClick={() => this.onDone()}
            >
              {this.i18nDone}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
