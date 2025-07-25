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
  iconSingleCheck,
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
} from '@stencil/core';
import { DateTime, Info } from 'luxon';
import type { DateTimeCardCorners } from '../date-time-card/date-time-card.types';
import { OnListener } from '../utils/listener';
import { makeRef } from '../utils/make-ref';
import { IxDatePickerComponent } from './date-picker-component';
import type { DateChangeEvent } from './date-picker.events';

interface CalendarWeek {
  weekNumber: number;
  dayNumbers: (number | undefined)[];
}

@Component({
  tag: 'ix-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker implements IxDatePickerComponent {
  @Element() hostElement!: HTMLIxDatePickerElement;

  /**
   * Date format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

  /**
   * If true a date-range can be selected (from/to).
   */
  @Prop() range: boolean = true;

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
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months.
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
  @Prop() standaloneAppearance = true;

  /** @internal */
  @Prop() today = DateTime.now().toISO();

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
  async getCurrentDate() {
    const _from = this.currFromDate?.isValid
      ? this.currFromDate?.toFormat(this.format)
      : undefined;
    const _to = this.currToDate?.isValid
      ? this.currToDate?.toFormat(this.format)
      : undefined;

    if (this.range) {
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

  @State() currFromDate?: DateTime;
  @State() currToDate?: DateTime;

  @State() selectedYear = 0;
  @State() tempYear = 0;
  @State() startYear = 0;
  @State() endYear = 0;
  @State() selectedMonth = 0;
  @State() tempMonth = 0;

  private readonly dropdownButtonRef = makeRef<HTMLElement>();
  private readonly yearContainerRef = makeRef<HTMLElement>();
  private readonly firstMonthRef = makeRef<HTMLElement>();

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

    if (_focusedDay > this.getDaysInCurrentMonth()) {
      _focusedDay = _focusedDay - this.getDaysInCurrentMonth();
      this.changeToAdjacentMonth(1);
      this.monthChangedFromFocus = true;
    } else if (_focusedDay < 1) {
      this.changeToAdjacentMonth(-1);
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

  componentWillLoad() {
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

  componentWillRender() {
    this.calculateCalendar();
  }

  componentDidRender() {
    if (!this.monthChangedFromFocus && !this.isDayFocus) {
      return;
    }

    const dayElem = this.hostElement.shadowRoot!.querySelector(
      `[id=day-cell-${this.focusedDay}]`
    ) as HTMLElement;
    dayElem.focus();
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

  private selectTempYear(event: MouseEvent, year: number) {
    event?.stopPropagation();
    this.tempYear = year;
  }

  private focusMonth() {
    this.firstMonthRef.current?.focus();
  }

  private infiniteScrollYears() {
    const yearContainer = this.yearContainerRef.current;

    if (!yearContainer) {
      return;
    }

    const scroll = yearContainer.scrollTop;
    const maxScroll = yearContainer.scrollHeight;
    const atTop = scroll === 0;
    const atBottom =
      Math.round(scroll + yearContainer.offsetHeight) >= maxScroll;
    const limit = 200;

    if (this.endYear - this.startYear > limit) return;

    if (atTop) {
      const first = yearContainer.firstElementChild as HTMLElement;
      this.startYear -= 5;
      yearContainer.scrollTo(0, first.offsetTop);

      return;
    }

    if (atBottom) {
      const last = yearContainer.lastElementChild as HTMLElement;
      this.endYear += 5;
      yearContainer.scrollTo(0, last.offsetTop);
    }
  }

  private selectMonth(month: number) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;

    const dropdown = this.hostElement.shadowRoot!.querySelector('ix-dropdown');
    if (dropdown) {
      dropdown.show = false;
    }
  }

  private changeToAdjacentMonth(number: -1 | 1) {
    if (this.selectedMonth + number < 0) {
      this.selectedYear--;
      this.selectedMonth = 11;
    } else if (this.selectedMonth + number > 11) {
      this.selectedYear++;
      this.selectedMonth = 0;
    } else {
      this.selectedMonth += number;
    }
  }

  private selectDay(selectedDay: number, target: Element) {
    if (target.classList.contains('disabled')) {
      return;
    }

    const date = DateTime.fromJSDate(
      new Date(this.selectedYear, this.selectedMonth, selectedDay)
    );

    if (!this.range || this.currFromDate === undefined) {
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
      if (this.range) {
        this.dateRangeChange.emit(date);
      }
    });
  }

  private getDayClasses(day: number): any {
    const todayObj = this.getDateTimeNow();
    const selectedDayObj = DateTime.fromJSDate(
      new Date(this.selectedYear, this.selectedMonth, day)
    );

    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      today: todayObj.hasSame(selectedDayObj, 'day'),
      selected:
        this.currFromDate?.hasSame(selectedDayObj, 'day') ||
        this.currToDate?.hasSame(selectedDayObj, 'day'),
      range:
        this.currFromDate &&
        selectedDayObj.startOf('day') > this.currFromDate.startOf('day') &&
        this.currToDate !== undefined &&
        selectedDayObj.startOf('day') < this.currToDate?.startOf('day'),
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

  private renderYears(): any[] {
    const rows = [];

    for (let year = this.startYear; year <= this.endYear; year++) {
      rows.push(
        <div
          key={year}
          class={{
            arrowYear: true,
            'month-dropdown-item': true,
            'disabled-item': !this.isWithinMinMaxYear(year),
          }}
          onClick={(event) => this.selectTempYear(event, year)}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              this.tempYear = year;
              this.focusMonth();
            }
          }}
          tabIndex={0}
        >
          <ix-icon
            class={{
              hidden: this.tempYear !== year,
              arrowPosition: true,
            }}
            name={iconChevronRightSmall}
            size="12"
          ></ix-icon>
          <div style={{ 'min-width': 'max-content' }}>{`${year}`}</div>
        </div>
      );
    }

    return rows;
  }

  render() {
    return (
      <Host>
        <ix-date-time-card
          corners={this.corners}
          standaloneAppearance={this.standaloneAppearance}
        >
          <div class="header" slot="header">
            <ix-icon-button
              onClick={() => this.changeToAdjacentMonth(-1)}
              ghost
              icon={iconChevronLeftSmall}
              variant="primary"
              class="arrows"
              aria-label={this.ariaLabelPreviousMonthButton}
            ></ix-icon-button>
            <div class="selector">
              <ix-button
                ghost
                ref={this.dropdownButtonRef}
                data-testid="year-month-button"
              >
                <span class="fontSize capitalize">
                  {this.monthNames[this.selectedMonth]} {this.selectedYear}
                </span>
              </ix-button>
              <ix-dropdown
                data-testid="year-month-dropdown"
                class="dropdown"
                trigger={this.dropdownButtonRef.waitForCurrent()}
                ignoreRelatedSubmenu
                placement="bottom-start"
              >
                <div class="wrapper">
                  <div
                    data-testid="year-container"
                    class="overflow"
                    onScroll={() => this.infiniteScrollYears()}
                    ref={this.yearContainerRef}
                  >
                    {this.renderYears()}
                  </div>
                  <div class="overflow" data-testid="month-container">
                    {this.monthNames.map((month, index) => (
                      <div
                        key={month}
                        ref={(ref) => {
                          if (month === this.monthNames[0]) {
                            this.firstMonthRef(ref);
                          }
                        }}
                        class={{
                          arrowYear: true,
                          'month-dropdown-item': true,
                          selected:
                            this.tempYear === this.selectedYear &&
                            this.tempMonth === index,
                          'disabled-item': !this.isWithinMinMaxMonth(index),
                        }}
                        onClick={() => this.selectMonth(index)}
                        onKeyUp={(event) =>
                          event.key === 'Enter' && this.selectMonth(index)
                        }
                        tabIndex={0}
                      >
                        <ix-icon
                          class={{
                            hidden:
                              this.tempYear !== this.selectedYear ||
                              this.tempMonth !== index,
                            checkPosition: true,
                          }}
                          name={iconSingleCheck}
                          size="16"
                        ></ix-icon>
                        <div>
                          <span class="capitalize monthMargin">{`${month} ${this.tempYear}`}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ix-dropdown>
            </div>
            <ix-icon-button
              onClick={() => this.changeToAdjacentMonth(1)}
              ghost
              icon={iconChevronRightSmall}
              variant="primary"
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
                        key={day}
                        id={`day-cell-${day}`}
                        date-calender-day
                        class={this.getDayClasses(day)}
                        onClick={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          this.selectDay(day, target);
                        }}
                        onKeyUp={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          if (e.key === 'Enter') {
                            this.selectDay(day, target);
                          }
                        }}
                        tabIndex={day === this.focusedDay ? 0 : -1}
                        onFocus={() => this.onDayFocus()}
                        onBlur={() => this.onDayBlur()}
                        aria-label={`${this.selectedMonth}: ${day}`}
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
              hidden: !this.range || !this.standaloneAppearance,
            }}
          >
            <ix-button onClick={() => this.onDone()}>{this.i18nDone}</ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
