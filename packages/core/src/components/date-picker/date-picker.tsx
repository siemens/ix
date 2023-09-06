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
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

import dayjs, { Dayjs, MonthNames, WeekdayNames } from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(isLeapYear);
dayjs.extend(isoWeeksInYear);
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export type DateChangeEvent = {
  from: string;
  to: string;
};

export type LegacyDateChangeEvent = DateChangeEvent | string;

export type DateTimeCorners = DateTimeCardCorners;

interface CalendarWeek {
  weekNumber: number;
  dayNumbers: number[];
}

@Component({
  tag: 'ix-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker {
  /**
   * Date format string.
   * See @link https://day.js.org/docs/en/display/format for all available tokens.
   */
  @Prop() format: string = 'YYYY/MM/DD';

  /**
   * If true a range of dates can be selected.
   */
  @Prop() range: boolean = true;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * Picker date. If the picker is in range mode this property is the start date.
   * If set to `null` no default start date will be pre-selected.
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() from: string | undefined;
  @Watch('from')
  watchFromPropHandler(newValue: string) {
    if (newValue !== undefined) {
      this.currFromDate = dayjs(newValue, this.format);
    }
  }

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() to: string | undefined;
  @Watch('to')
  watchToPropHandler(newValue: string) {
    if (newValue !== undefined) {
      this.currToDate = dayjs(newValue, this.format);
    }
  }

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
   * Text of date select button
   *
   * @since 1.1.0
   */
  @Prop() textSelectDate = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 would result in starting the week on monday.
   *
   * @since 2.0.0
   */
  @Prop() weekStartIndex = 0;

  /**
   * Date change.
   * Triggers if the date changes.
   *
   * @since 2.0.0
   */
  @Event() dateChange: EventEmitter<DateChangeEvent>;

  /**
   * Date range change.
   * Only triggered if date-picker is in range mode
   *
   * @since 1.1.0
   * @deprecated Use date change (triggers on both modes)
   */
  @Event() dateRangeChange: EventEmitter<DateChangeEvent>;

  /**
   * Date selection confirmed via button action
   *
   * @since 1.1.0
   */
  @Event() dateSelect: EventEmitter<DateChangeEvent>;

  /**
   * Get the currently selected date-range
   */
  @Method()
  async getCurrentDate() {
    const _from = this.currFromDate?.format(this.format);
    const _to = this.currToDate?.format(this.format);

    if (this.range) {
      return {
        from: _from,
        to: _to ?? _from,
      };
    }

    return {
      from: _from,
      to: undefined,
    };
  }

  @State() currFromDate: Dayjs;
  @State() currToDate: Dayjs;
  @State() calendar: CalendarWeek[];

  @State() selectedYear: number;
  @State() tempYear: number;
  @State() startYear: number;
  @State() endYear: number;
  @State() selectedMonth: number;
  @State() tempMonth: number;

  @State() dropdownButtonRef: HTMLElement;
  @State() yearContainerRef: HTMLElement;

  private readonly DAYS_IN_WEEK = 7;
  private dayNames: WeekdayNames;
  private monthNames: MonthNames = dayjs.months();

  componentWillLoad() {
    this.currFromDate =
      this.from !== undefined ? dayjs(this.from, this.format) : undefined;
    this.currToDate =
      this.to !== undefined ? dayjs(this.to, this.format) : undefined;

    const year = this.currFromDate?.year() ?? dayjs().year();
    this.startYear = year - 5;
    this.endYear = year + 5;

    this.selectedMonth = this.currFromDate?.month() ?? dayjs().month();
    this.selectedYear = year;
    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;

    this.dayNames = this.rotateWeekDayNames(
      dayjs.weekdays(),
      this.weekStartIndex
    );
  }

  componentWillRender() {
    this.calculateCalendar();
  }

  /**
   * Rotate the WeekdayNames array.
   * Based on the position that should be the new 0-index.
   */
  private rotateWeekDayNames(
    weekdays: WeekdayNames,
    index: number
  ): WeekdayNames {
    const clone = [...weekdays] as WeekdayNames;

    if (index === 0) {
      return clone;
    }

    index = -index;
    const len = weekdays.length;

    clone.push(...clone.splice(0, ((-index % len) + len) % len));
    return clone;
  }

  private onDone() {
    this.getCurrentDate().then((date) => {
      this.dateSelect.emit(date);
    });
  }

  private calculateCalendar() {
    const calendar: CalendarWeek[] = [];
    const month = dayjs().month(this.selectedMonth).year(this.selectedYear);
    const monthStart = month.startOf('month');
    const monthEnd = month.endOf('month');
    let startWeek = monthStart.week();
    let endWeek = monthEnd.week();
    let monthStartWeekDayIndex = monthStart.weekday();
    let monthEndWeekDayIndex = monthEnd.weekday();

    if (this.weekStartIndex !== 0) {
      // Find the positions where to start/stop counting the day-numbers based on which day the week starts
      const weekdays = dayjs.weekdays();
      const monthStartWeekDayName = weekdays[monthStart.weekday()];

      monthStartWeekDayIndex = this.dayNames.findIndex(
        (d) => d === monthStartWeekDayName
      );
      const monthEndWeekDayName = weekdays[monthEnd.weekday()];
      monthEndWeekDayIndex = this.dayNames.findIndex(
        (d) => d === monthEndWeekDayName
      );
    }

    // If the last week has week-number 1
    let correctLastWeek = false;
    if (startWeek > endWeek) {
      endWeek = monthEnd.isoWeeksInYear() + 1;
      correctLastWeek = true;
    }

    let currDayNumber = 1;
    for (let i = startWeek; i <= endWeek && currDayNumber <= 31; i++) {
      const daysArr: number[] = [];

      for (let j = 0; j < this.DAYS_IN_WEEK && currDayNumber <= 31; j++) {
        // Display empty cells until the calender starts/has ended
        if (
          (i === startWeek && j < monthStartWeekDayIndex) ||
          (i === endWeek && j > monthEndWeekDayIndex)
        ) {
          daysArr.push(undefined);
        } else {
          daysArr.push(currDayNumber);
          currDayNumber++;
        }
      }

      calendar.push({
        weekNumber: i,
        dayNumbers: daysArr,
      });
    }

    if (correctLastWeek) {
      calendar[calendar.length - 1].weekNumber = 1;
    }

    this.calendar = calendar;
  }

  private selectTempYear(event: MouseEvent, year: number) {
    event.stopPropagation();
    this.tempYear = year;
  }

  private infiniteScrollYears() {
    const scroll = this.yearContainerRef.scrollTop;
    const maxScroll = this.yearContainerRef.scrollHeight;
    const atTop = scroll === 0;
    const atBottom =
      Math.round(scroll + this.yearContainerRef.offsetHeight) >= maxScroll;
    const limit = 200;

    if (this.endYear - this.startYear > limit) return;

    if (atTop) {
      const first = this.yearContainerRef.firstElementChild as HTMLElement;
      this.startYear -= 5;
      this.yearContainerRef.scrollTo(0, first.offsetTop);

      return;
    }

    if (atBottom) {
      const last = this.yearContainerRef.lastElementChild as HTMLElement;
      this.endYear += 5;
      this.yearContainerRef.scrollTo(0, last.offsetTop);
    }
  }

  private selectMonth(month: number) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;
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

  private selectDay(selectedDay: number) {
    const date = dayjs(
      new Date(this.selectedYear, this.selectedMonth, selectedDay)
    );

    if (!this.range || this.currFromDate === undefined) {
      this.currFromDate = date;
      this.onDateChange();

      return;
    }

    // Reset the range selection
    if (this.currFromDate !== undefined && this.currToDate !== undefined) {
      this.currFromDate = date;
      this.currToDate = undefined;
      this.onDateChange();

      return;
    }
    // Don't do anything if the range doesn't differ by at least one day
    // Otherwise the user would have to do one extra click if they choose to change the range again
    if (date.isSame(this.currFromDate, 'day')) {
      return;
    }
    // Swap from/to if the second date is before the current date
    if (date.isBefore(this.currFromDate)) {
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
      this.dateRangeChange.emit(date);
    });
  }

  private getDayClasses(day: number): any {
    if (!day) {
      return;
    }

    const todayObj = dayjs();
    const selectedDayObj = dayjs(
      new Date(this.selectedYear, this.selectedMonth, day)
    );

    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      today: todayObj.isSame(selectedDayObj, 'day'),
      selected:
        this.currFromDate?.isSame(selectedDayObj, 'day') ||
        this.currToDate?.isSame(selectedDayObj, 'day'),
      range:
        selectedDayObj.isAfter(this.currFromDate, 'day') &&
        this.currToDate !== undefined &&
        selectedDayObj.isBefore(this.currToDate, 'day'),
      disabled: !this.isWithinMinMax(selectedDayObj),
    };
  }

  private isWithinMinMaxYear(year: number): boolean {
    const minDateYear = this.minDate
      ? dayjs(this.minDate, this.format).year()
      : undefined;
    const maxDateYear = this.maxDate
      ? dayjs(this.maxDate, this.format).year()
      : undefined;
    const isBefore = minDateYear ? year < minDateYear : false;
    const isAfter = maxDateYear ? year > maxDateYear : false;

    return !isBefore && !isAfter;
  }

  private isWithinMinMaxMonth(month: number): boolean {
    const minDateObj = this.minDate
      ? dayjs(this.minDate, this.format)
      : undefined;
    const maxDateObj = this.maxDate
      ? dayjs(this.maxDate, this.format)
      : undefined;
    const minDateMonth = minDateObj?.month();
    const maxDateMonth = maxDateObj?.month();
    const isBefore = minDateMonth
      ? this.tempYear === minDateObj.year() && month < minDateMonth
      : false;
    const isAfter = maxDateMonth
      ? this.tempYear === maxDateObj.year() && month > maxDateMonth
      : false;

    return !isBefore && !isAfter;
  }

  private isWithinMinMax(date: Dayjs): boolean {
    const _minDate = this.minDate
      ? dayjs(this.minDate, this.format)
      : undefined;
    const _maxDate = this.maxDate
      ? dayjs(this.maxDate, this.format)
      : undefined;
    const isBefore = _minDate ? date.isBefore(_minDate, 'day') : false;
    const isAfter = _maxDate ? date.isAfter(_maxDate, 'day') : false;

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
            'disabled-item': !this.isWithinMinMaxYear(year),
          }}
          onClick={(event) => this.selectTempYear(event, year)}
        >
          <ix-icon
            class={{
              hidden: this.tempYear !== year,
              arrowPosition: true,
            }}
            name="chevron-right"
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
        <ix-date-time-card corners={this.corners}>
          <div class="header" slot="header">
            <ix-icon-button
              onClick={() => this.changeToAdjacentMonth(-1)}
              ghost
              icon="chevron-left"
              variant="primary"
              class="arrows"
            ></ix-icon-button>

            <div class="selector">
              <ix-button ghost ref={(ref) => (this.dropdownButtonRef = ref)}>
                <span class="fontSize capitalize">
                  {this.monthNames[this.selectedMonth]} {this.selectedYear}
                </span>
              </ix-button>
              <ix-dropdown
                class="dropdown"
                trigger={this.dropdownButtonRef}
                placement="bottom-start"
              >
                <div class="wrapper">
                  <div
                    class="overflow"
                    onScroll={() => this.infiniteScrollYears()}
                    ref={(ref) => (this.yearContainerRef = ref)}
                  >
                    {this.renderYears()}
                  </div>
                  <div class="overflow">
                    {this.monthNames.map((month, index) => (
                      <div
                        key={month}
                        class={{
                          arrowYear: true,
                          selected:
                            this.tempYear === this.selectedYear &&
                            this.tempMonth === index,
                          'disabled-item': !this.isWithinMinMaxMonth(index),
                        }}
                        onClick={() => this.selectMonth(index)}
                      >
                        <ix-icon
                          class={{
                            hidden:
                              this.tempYear !== this.selectedYear ||
                              this.tempMonth !== index,
                            checkPosition: true,
                          }}
                          name="single-check"
                          size="16"
                        ></ix-icon>
                        <div>
                          <span
                            class={{ capitalize: true, monthMargin: true }}
                          >{`${month} ${this.tempYear}`}</span>
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
              icon="chevron-right"
              variant="primary"
              class="arrows"
            ></ix-icon-button>
          </div>

          <div class="grid">
            <div class="calendar-item week-day"></div>
            {this.dayNames.map((name) => (
              <div key={name} class="calendar-item week-day">
                {name.slice(0, 3)}
              </div>
            ))}

            {this.calendar.map((week) => {
              return (
                <Fragment>
                  <div class="calendar-item week-number">{week.weekNumber}</div>
                  {week.dayNumbers.map((day) => (
                    <div
                      key={day}
                      class={this.getDayClasses(day)}
                      onClick={() => this.selectDay(day)}
                    >
                      {day}
                    </div>
                  ))}
                </Fragment>
              );
            })}
          </div>

          <div class={{ button: true, hidden: !this.range }}>
            <ix-button onClick={() => this.onDone()}>
              {this.textSelectDate}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
