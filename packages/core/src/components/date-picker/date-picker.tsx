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
import localeData from 'dayjs/plugin/localeData';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
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
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

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
   * Date range change.
   * Only triggered if date-picker is in range mode
   *
   * @since 1.1.0
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
    const _from = this.currFromDate.format(this.format);
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

  @State() today = dayjs();
  @State() currFromDate: Dayjs;
  @State() currToDate: Dayjs;
  @State() calendar: CalendarWeek[];

  @State() selectedYear: number;
  @State() tempYear: number;
  @State() minYear: number;
  @State() maxYear: number;
  @State() selectedMonth: number;
  @State() tempMonth: number;

  @State() dropdownButtonRef: HTMLElement;
  @State() yearContainerRef: HTMLElement;

  private readonly DAYS_IN_WEEK = 7;
  private dayNames: WeekdayNames;
  private monthNames: MonthNames = dayjs.months();

  private onDone() {
    if (this.range && this.currToDate === undefined) {
      this.currToDate = this.currFromDate;
    }

    this.dateSelect.emit({
      from: this.currFromDate.format(this.format),
      to: this.currToDate?.format(this.format) ?? '',
    });
  }

  private calculateCalendar() {
    const calendar: CalendarWeek[] = [];
    const month = dayjs().month(this.selectedMonth).year(this.selectedYear);
    const monthStart = month.startOf('month');
    const monthEnd = month.endOf('month');
    let startWeek = monthStart.week();
    let endWeek = monthEnd.week();
    let monthStartWeekDay = monthStart.weekday() - this.weekStartIndex;
    let monthEndWeekDay = monthEnd.weekday() - this.weekStartIndex;
    monthStartWeekDay = monthStartWeekDay === -1 ? 6 : monthStartWeekDay;
    monthEndWeekDay = monthEndWeekDay === -1 ? 6 : monthEndWeekDay;

    let currDayNumber = 1;

    for (let i = startWeek; i <= endWeek; i++) {
      const daysArr: number[] = [];

      for (let j = 0; j < this.DAYS_IN_WEEK; j++) {
        if (
          (i === startWeek && j < monthStartWeekDay) ||
          (i === endWeek && j > monthEndWeekDay)
        ) {
          // empty cell
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

    this.calendar = calendar;
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

  private selectMonth(month: number) {
    this.selectedMonth = month;
    this.selectedYear = this.tempYear;
    this.tempMonth = month;
  }

  private infiniteScrollYears() {
    const scroll = this.yearContainerRef.scrollTop;
    const maxScroll = this.yearContainerRef.scrollHeight;
    const atTop = scroll === 0;
    const atBottom =
      scroll + this.yearContainerRef.getBoundingClientRect().height ===
      maxScroll;
    const limit = 200;

    if (this.maxYear - this.minYear > limit) return;

    if (atTop) {
      const first = this.yearContainerRef.firstElementChild as HTMLElement;
      this.minYear -= 5;
      this.yearContainerRef.scrollTo(0, first.offsetTop);

      return;
    }

    if (atBottom) {
      const last = this.yearContainerRef.lastElementChild as HTMLElement;
      this.maxYear += 5;
      this.yearContainerRef.scrollTo(0, last.offsetTop);
    }
  }

  private selectTempYear(event: MouseEvent, year: number) {
    event.stopPropagation();
    this.tempYear = year;
  }

  private getDayClasses(selectedDay: number): any {
    if (!selectedDay) {
      return;
    }

    const todayObj = dayjs();
    const selectedDayObj = dayjs(
      new Date(this.selectedYear, this.selectedMonth, selectedDay)
    );

    return {
      'calendar-item': true,
      'empty-day': selectedDay === undefined,
      today: todayObj.isSame(selectedDayObj, 'day'),
      selected:
        this.currFromDate.isSame(selectedDayObj, 'day') ||
        this.currToDate?.isSame(selectedDayObj, 'day'),
      range:
        selectedDayObj.isAfter(this.currFromDate, 'day') &&
        this.currToDate !== undefined &&
        selectedDayObj.isBefore(this.currToDate, 'day'),
      disabled: !this.isWithinMinMax(selectedDayObj),
    };
  }

  private onDateChange() {
    const _from = this.currFromDate.format(this.format);
    const _to = this.currToDate?.format(this.format);

    if (this.range) {
      this.dateRangeChange.emit({
        from: _from,
        to: _to ?? _from,
      });
    }
  }

  private selectDay(day: number) {
    const date = dayjs(new Date(this.selectedYear, this.selectedMonth, day));

    if (!this.range) {
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

  /**
   * Rotate the WeekdayNames array.
   * Based on the position that should be the new 0-index.
   */
  private rotateWeekDayNames(
    weekdays: WeekdayNames,
    index: number
  ): dayjs.WeekdayNames {
    const clone = [...weekdays] as WeekdayNames;

    if (index === 0) {
      return clone;
    }

    index = -index;
    const len = weekdays.length;

    clone.push(...clone.splice(0, ((-index % len) + len) % len));
    return clone;
  }

  componentWillLoad() {
    this.currFromDate =
      this.from !== undefined ? dayjs(this.from, this.format) : dayjs();

    this.currToDate =
      this.to !== undefined ? dayjs(this.to, this.format) : undefined;

    this.selectedMonth = this.currFromDate.month();
    this.selectedYear = this.currFromDate.year();

    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;

    this.selectedYear = this.currFromDate.year();
    this.tempYear = this.selectedYear;
    this.minYear = this.currFromDate.year() - 5;
    this.maxYear = this.currFromDate.year() + 5;

    this.dayNames = this.rotateWeekDayNames(
      dayjs.weekdays(),
      this.weekStartIndex
    );
  }

  componentWillRender() {
    this.calculateCalendar();
  }

  private renderYears(): any[] {
    const rows = [];

    for (let year = this.minYear; year <= this.maxYear; year++) {
      rows.push(
        <div
          key={year}
          class={{ arrowYear: true }}
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
                          selected: this.tempMonth - 1 === index,
                        }}
                        onClick={() => this.selectMonth(index)}
                      >
                        <ix-icon
                          class={{
                            hidden: this.tempMonth - 1 !== index,
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
