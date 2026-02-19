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
  Fragment,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
  Mixin,
} from '@stencil/core';
import { DateTime, Info } from 'luxon';
import type { DateTimeCardCorners } from '../date-time-card/date-time-card.types';
import { queryElements } from '../utils/focus/focus-utilities';
import { DefaultMixins } from '../utils/internal/component';
import { OnListener } from '../utils/listener';
import { makeRef } from '../utils/make-ref';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { IxDatePickerComponent } from './date-picker-component';
import type { DateChangeEvent } from './date-picker.events';

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
   * If true disables date range selection (from/to).
   */
  @Prop() singleSelection: boolean = false;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * The selected starting date. If the date-picker-rework is not in range mode this is the selected date.
   * Format has to match the `format` property.
   */
  @Prop() from: string | undefined;

  @Watch('from')
  watchFromPropHandler(newValue: string) {
    if (!newValue) {
      this.currFromDate = undefined;

      return;
    }

    const date = this.parseDateString(newValue);

    if (date) {
      this.currFromDate = date;
      this.updateSelectedYearMonth(date);
    }
  }

  /**
   * The selected end date. If the the date-picker-rework is not in range mode this property has no impact.
   * Format has to match the `format` property.
   */
  @Prop() to: string | undefined;

  @Watch('to')
  watchToPropHandler(newValue: string) {
    if (!newValue) {
      this.currToDate = undefined;

      return;
    }

    const date = this.parseDateString(newValue);

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

  /**
   * Text of date select button
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone = 'Done';

  /**
   * ARIA label for the previous month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelPreviousMonthButton?: string =
    'Change calendar view to previous month';

  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelNextMonthButton?: string =
    'Change calendar view to next month';

  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelMonthSelection?: string = 'Select month';

  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  @Prop() ariaLabelYearSelection?: string = 'Select year';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  @Prop() weekStartIndex = 0;

  /**
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months.
   * It also determines the default order of weekdays based on the locale's conventions.
   * When the locale changes, the weekday labels are rotated according to the `weekStartIndex`.
   * It does not affect the values returned by methods and events.
   */
  @Prop() locale?: string;

  @Watch('locale')
  onLocaleChange() {
    this.setTranslations();
  }

  /**
   * Shows week numbers displayed on the left side of the date picker
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
   * Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   */
  @Event() dateChange!: EventEmitter<DateChangeEvent>;

  /**
   * Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  @Event() dateRangeChange!: EventEmitter<DateChangeEvent>;

  /**
   * Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  @Event() dateSelect!: EventEmitter<DateChangeEvent>;

  /**
   * Get the currently selected date or range. The object returned contains `from` and `to` properties.
   * The property strings are formatted according to the `format` property and not affected by the `locale` property.
   * The locale applied is always `en-US`.
   */
  @Method()
  async getCurrentDate(): Promise<DateChangeEvent> {
    const _from = this.currFromDate?.isValid
      ? this.currFromDate?.toFormat(this.format)
      : undefined;
    const _to = this.currToDate?.isValid
      ? this.currToDate?.toFormat(this.format)
      : undefined;

    if (!this.singleSelection) {
      return {
        from: _from,
        to: _to,
      };
    }

    return {
      from: _from,
      to: undefined,
    };
  }

  @State()
  currFromDate?: DateTime;
  @State() currToDate?: DateTime;

  @State() selectedYear = 0;
  @State() tempYear = 0;
  @State() startYear = 0;
  @State() endYear = 0;
  @State() selectedMonth = 0;
  @State() tempMonth = 0;

  private readonly yearDropdownButtonRef =
    makeRef<HTMLIxDropdownButtonElement>();

  private readonly yearMonthSelectionDropdownRef =
    makeRef<HTMLIxDropdownElement>();

  @State() dayNames!: string[];
  @State() monthNames!: string[];
  @State() focusedDay: number = 1;

  private isDayFocus = false;
  private monthChangedFromFocus = false;
  private readonly DAYS_IN_WEEK = 7;
  private calendar: CalendarWeek[] = [];

  @OnListener<DatePicker>('keydown')
  handleKeyUp(event: KeyboardEvent) {
    if (!this.isDayFocus) {
      return;
    }

    if (this.yearMonthSelectionDropdownRef.current?.show) {
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
      case 'Home':
        _focusedDay = this.getFirstDayOfWeek(_focusedDay);
        break;
      case 'End':
        _focusedDay = this.getLastDayOfWeek(_focusedDay);
        break;
      case 'PageUp':
        this.navigateByMonthOrYear(event.shiftKey ? 'year' : 'month', -1);
        event.preventDefault();
        return;
      case 'PageDown':
        this.navigateByMonthOrYear(event.shiftKey ? 'year' : 'month', 1);
        event.preventDefault();
        return;
      default:
        return;
    }

    event.preventDefault();

    if (_focusedDay > this.getDaysInCurrentMonth()) {
      _focusedDay = _focusedDay - this.getDaysInCurrentMonth();
      this.changeCalendarView(1);
      this.monthChangedFromFocus = true;
    } else if (_focusedDay < 1) {
      this.changeCalendarView(-1);
      _focusedDay = _focusedDay + this.getDaysInCurrentMonth();
      this.monthChangedFromFocus = true;
    }

    this.focusedDay = _focusedDay;
  }

  private getDaysInCurrentMonth(): number {
    return (
      DateTime.utc(this.selectedYear, this.selectedMonth + 1).daysInMonth || 0
    );
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

  private parseDateString(dateString: string): DateTime | undefined {
    const date = DateTime.fromFormat(dateString, this.format);

    if (!date.isValid) {
      console.error(date.invalidExplanation);

      return undefined;
    }

    return date;
  }

  private updateSelectedYearMonth(date: DateTime) {
    this.selectedYear = date.year;
    this.selectedMonth = date.month - 1;
  }

  onDayBlur() {
    this.isDayFocus = false;
  }

  onDayFocus() {
    this.isDayFocus = true;
  }

  override componentWillLoad() {
    this.setTranslations();

    this.currFromDate = this.from
      ? DateTime.fromFormat(this.from, this.format)
      : undefined;
    this.currToDate = this.to
      ? DateTime.fromFormat(this.to, this.format)
      : undefined;

    const year = this.currFromDate?.year ?? this.getDateTimeNow().year;
    this.startYear = year - 5;
    this.endYear = year + 5;

    this.selectedMonth =
      (this.currFromDate?.month ?? this.getDateTimeNow().month) - 1;
    this.selectedYear = year;
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
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
    this.calculateCalendar();
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

  /**
   * @internal
   */
  @Method()
  async focusFirstCalenderDay() {
    const firstDayCell = this.hostElement.shadowRoot!.querySelector(
      '[date-calender-day].calendar-item'
    )! as HTMLElement;

    if (firstDayCell) {
      firstDayCell.focus();
    }
  }

  private setTranslations() {
    this.dayNames = this.rotateWeekDayNames(
      Info.weekdays('long', {
        locale: this.locale,
      }),
      this.weekStartIndex
    );

    this.monthNames = Info.months('long', {
      locale: this.locale,
    });
  }

  /**
   * Rotate the WeekdayNames array.
   * Based on the position that should be the new 0-index.
   */
  private rotateWeekDayNames(weekdays: string[], index: number): string[] {
    const clone = [...weekdays];

    if (index === 0) {
      return clone;
    }

    index = -index;
    const len = weekdays.length;

    clone.push(...clone.splice(0, ((-index % len) + len) % len));
    return clone;
  }

  private async onDone() {
    const date = await this.getCurrentDate();
    this.dateSelect.emit(date);
  }

  private calculateCalendar() {
    const calendar: CalendarWeek[] = [];
    const month = DateTime.utc(this.selectedYear, this.selectedMonth + 1);
    const monthStart = month.startOf('month');
    const monthEnd = month.endOf('month');
    let startWeek = monthStart.weekNumber;
    let endWeek = monthEnd.weekNumber;
    let monthStartWeekDayIndex = monthStart.weekday - 1;
    let monthEndWeekDayIndex = monthEnd.weekday - 1;

    if (this.weekStartIndex !== 0) {
      // Find the positions where to start/stop counting the day-numbers based on which day the week starts
      const weekdays = Info.weekdays();
      const monthStartWeekDayName = weekdays[monthStart.weekday];

      monthStartWeekDayIndex = this.dayNames.findIndex(
        (d) => d === monthStartWeekDayName
      );
      const monthEndWeekDayName = weekdays[monthEnd.weekday];
      monthEndWeekDayIndex = this.dayNames.findIndex(
        (d) => d === monthEndWeekDayName
      );
    }

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

      for (let j = 0; j < this.DAYS_IN_WEEK && currDayNumber <= 31; j++) {
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

  private selectMonth(month: number) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;
  }

  private changeCalendarView(number: -1 | 1) {
    if (this.selectedMonth + number < 0) {
      this.selectedYear--;
      this.selectedMonth = 11;
    } else if (this.selectedMonth + number > 11) {
      this.selectedYear++;
      this.selectedMonth = 0;
    } else {
      this.selectedMonth += number;
    }

    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
  }

  private navigateByMonthOrYear(unit: 'month' | 'year', direction: -1 | 1) {
    let targetYear = this.selectedYear;
    let targetMonth = this.selectedMonth;

    if (unit === 'year') {
      targetYear += direction;
    } else {
      targetMonth += direction;
      if (targetMonth < 0) {
        targetMonth = 11;
        targetYear--;
      } else if (targetMonth > 11) {
        targetMonth = 0;
        targetYear++;
      }
    }

    const daysInTargetMonth =
      DateTime.utc(targetYear, targetMonth + 1).daysInMonth || 0;
    this.focusedDay = Math.min(this.focusedDay, daysInTargetMonth);

    this.selectedYear = targetYear;
    this.selectedMonth = targetMonth;
    this.tempYear = targetYear;
    this.tempMonth = targetMonth;
    this.monthChangedFromFocus = true;
  }

  private selectDay(selectedDay: number, target: Element) {
    if (target.classList.contains('disabled')) {
      return;
    }

    const date = DateTime.fromJSDate(
      new Date(this.selectedYear, this.selectedMonth, selectedDay)
    );

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
    const selectedDayObj = DateTime.fromJSDate(
      new Date(this.selectedYear, this.selectedMonth, day)
    );
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

  private getDayClasses(day: number): Record<string, boolean> {
    const selectedDayObj = DateTime.fromJSDate(
      new Date(this.selectedYear, this.selectedMonth, day)
    );

    const util = this.getUtilitiesBasedOnDay(day);
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
    const minDateYear = this.minDate
      ? DateTime.fromFormat(this.minDate, this.format).year
      : undefined;
    const maxDateYear = this.maxDate
      ? DateTime.fromFormat(this.maxDate, this.format).year
      : undefined;
    const isBefore = minDateYear ? year < minDateYear : false;
    const isAfter = maxDateYear ? year > maxDateYear : false;

    return !isBefore && !isAfter;
  }

  private isWithinMinMaxMonth(month: number): boolean {
    const minDateObj = this.minDate
      ? DateTime.fromFormat(this.minDate, this.format)
      : undefined;
    const maxDateObj = this.maxDate
      ? DateTime.fromFormat(this.maxDate, this.format)
      : undefined;
    const minDateMonth = minDateObj?.month;
    const maxDateMonth = maxDateObj?.month;
    const isBefore = minDateMonth
      ? this.tempYear === minDateObj.year && month < minDateMonth
      : false;
    const isAfter = maxDateMonth
      ? this.tempYear === maxDateObj.year && month > maxDateMonth
      : false;

    return !isBefore && !isAfter;
  }

  private isWithinMinMaxDate(date: DateTime): boolean {
    const _minDate = this.minDate
      ? DateTime.fromFormat(this.minDate, this.format)
      : undefined;
    const _maxDate = this.maxDate
      ? DateTime.fromFormat(this.maxDate, this.format)
      : undefined;
    const isBefore = _minDate
      ? date.startOf('day') < _minDate.startOf('day')
      : false;
    const isAfter = _maxDate
      ? date.startOf('day') > _maxDate.startOf('day')
      : false;

    return !isBefore && !isAfter;
  }

  private renderMonths() {
    return this.monthNames.map((month, index) => {
      const selected =
        this.tempYear === this.selectedYear && this.tempMonth === index;

      return (
        <ix-dropdown-item
          checked={selected}
          key={month}
          class={{
            'month-dropdown-item': true,
            'disabled-item': !this.isWithinMinMaxMonth(index),
          }}
          onClick={() => {
            this.selectMonth(index);
          }}
        >
          <span class="capitalize monthMargin">{`${month} ${this.tempYear}`}</span>
        </ix-dropdown-item>
      );
    });
  }

  private renderYears() {
    const rows = [];

    for (let year = this.startYear; year <= this.endYear; year++) {
      const selected = this.tempYear === year;

      rows.push(
        <ix-dropdown-item
          key={year}
          checked={selected}
          class={{
            'month-dropdown-item': true,
            'disabled-item': !this.isWithinMinMaxYear(year),
          }}
          onClick={() => {
            this.tempYear = year;
            this.selectedYear = this.tempYear;
          }}
        >
          <div style={{ 'min-width': 'max-content' }}>{`${year}`}</div>
        </ix-dropdown-item>
      );
    }

    return rows;
  }

  private changeFocusedDay() {
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
        // This is only the case if user use the year/month selector to select a date
        // and changing to a month with has ether a today or selected day
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
    const container =
      await this.yearDropdownButtonRef.current!.getDropdownReference();
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
    return (
      <Host
        onFocusin={() => {
          this.changeFocusedDay();
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
                aria-label={this.ariaLabelMonthSelection}
                variant="tertiary"
                label={null}
                onShowChanged={(event) => {
                  // Need to stop event propagation to trigger initial focus handling of the calendar days
                  event.stopPropagation();
                }}
              >
                <ix-typography bold class="capitalize" slot="button-label">
                  {this.monthNames[this.selectedMonth]}
                </ix-typography>
                {this.renderMonths()}
              </ix-dropdown-button>

              <ix-dropdown-button
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
                        this.yearDropdownButtonRef.current!.querySelector(
                          'ix-dropdown-item[checked]'
                        ) as HTMLElement;

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
                  {this.selectedYear}
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
            class={{
              grid: true,
              'grid--show-week-numbers': this.showWeekNumbers,
            }}
          >
            {this.showWeekNumbers && <div class="calendar-item week-day"></div>}
            {this.dayNames.map((name) => (
              <div key={name} class="calendar-item week-day">
                <div class="overflow">{name.slice(0, 3)}</div>
              </div>
            ))}
            {this.calendar.map((week) => {
              return (
                <Fragment>
                  {this.showWeekNumbers && (
                    <div class="calendar-item week-number">
                      {week.weekNumber}
                    </div>
                  )}
                  {week.dayNumbers.map((day) => {
                    return day ? (
                      <div
                        role="button"
                        key={day}
                        id={`day-cell-${day}`}
                        data-calendar-day={day}
                        data-date-value={`${week.weekNumber}-${day}`}
                        class={this.getDayClasses(day)}
                        onClick={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          this.selectDay(day, target);
                        }}
                        onKeyDown={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          if (e.key === 'Enter') {
                            this.selectDay(day, target);
                          }
                        }}
                        tabIndex={day === this.focusedDay ? 0 : -1}
                        autofocus={this.getUtilitiesBasedOnDay(day).isToday()}
                        onFocus={() => this.onDayFocus()}
                        onBlur={() => this.onDayBlur()}
                        aria-label={`${day} ${Info.months()[this.selectedMonth]} ${this.selectedYear}`}
                      >
                        {day}
                      </div>
                    ) : (
                      <div></div>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
          <div
            class={{
              button: true,
              hidden: this.singleSelection || this.embedded,
            }}
          >
            <ix-button onClick={() => this.onDone()}>{this.i18nDone}</ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
