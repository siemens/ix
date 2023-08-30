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

import dayjs, { Dayjs, WeekdayNames } from 'dayjs';
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

@Component({
  tag: 'ix-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker {
  private readonly DAYS_IN_WEEK = 7;
  private dayNames: WeekdayNames;
  private monthNames = dayjs.months();

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
      this.startDate = dayjs(newValue, this.format);
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
      this.endDate = dayjs(newValue, this.format);
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
   */
  @Prop() weekStartIndex = 1;

  @State() selectedYear = this.year;
  @State() today = dayjs();
  @State() selectedMonth: number;
  @State() calendar: [number, number[]][];

  @State() years = [...Array(10).keys()].map((year) => year + this.year - 5);
  @State() tempYear: number = this.selectedYear;
  @State() tempMonth: number;
  @State() startDate: Dayjs;
  @State() endDate: Dayjs;

  @State() dropdownButtonRef: HTMLElement;
  @State() yearContainerRef: HTMLElement;

  /**
   * Date change event
   *
   * If datepicker is in range mode the event detail will be sperated with a `-` e.g.
   * `2022/10/22 - 2022/10/24` (start and end). If range mode is chosen consider to use `dateRangeChange`.
   *
   * @deprecated String output will be removed. Set ´doneEventDelimiter´ to undefined or null to get date change object instead of a string
   */
  @Event() dateChange: EventEmitter<LegacyDateChangeEvent>;

  /**
   * Date range change.
   * Only triggered if datepicker is in range mode
   *
   * @since 1.1.0
   */
  @Event() dateRangeChange: EventEmitter<DateChangeEvent>;

  /**
   * Date selection confirmed via button action
   *
   * @deprecated Will be removed in 2.0.0. Use `dateSelect`
   */
  @Event() done: EventEmitter<string>;

  /**
   * Date selection confirmed via button action
   *
   * @since 1.1.0
   */
  @Event() dateSelect: EventEmitter<DateChangeEvent>;

  get year() {
    if (this.from !== null) {
      return dayjs(this.from, this.format).year();
      // return DateTime.fromFormat(this.from, this.format).year;
    }

    return dayjs().year();
    // return DateTime.now().year;
  }

  get month() {
    if (this.from !== null) {
      // return DateTime.fromFormat(this.from, this.format).month;
      // let test = dayjs('2023/01/02', this.format).weekday();
      // console.log(test);
      let test = dayjs().month(0).year(2023).startOf('month').weekday();
      console.log(test);
      return test;
    }

    return dayjs().month();
  }

  private onDone() {
    // this.done.emit(this.getOutputFormat());

    // this.dateSelect.emit({
    //   from: this.start?.toFormat(this.format),
    //   to: this.end?.toFormat(this.format),
    // });
  }

  private onDateChange() {
    // const from = this.start?.toFormat(this.format);
    // const to = this.end?.toFormat(this.format);

    // this.from = from;
    // this.to = to;

    // if (this.range) {
    //   this.dateRangeChange.emit({
    //     from,
    //     to,
    //   });
    // }
  }

  private calculateCalendar() {
    const calendar: [number, number[]][] = [];
    const month = dayjs().month(this.selectedMonth).year(this.selectedYear);
    const monthStart = month.startOf('month');
    const monthEnd = month.endOf('month');
    const startWeek = monthStart.week();
    const endWeek = monthEnd.week();
    const monthStartWeekDay = monthStart.weekday() - this.weekStartIndex;
    const monthEndWeekDay = monthEnd.weekday() - this.weekStartIndex;

    let currDayNumber = 1;
    for (let i = startWeek; i <= endWeek; i++) {
      const daysArr: number[] = [];

      for (let j = 0; j < this.DAYS_IN_WEEK; j++) {
        if (
          (i === startWeek && j < monthStartWeekDay) ||
          (i === endWeek && j > monthEndWeekDay)
        ) {
          daysArr.push(undefined);
        } else {
          daysArr.push(currDayNumber);
          currDayNumber++;
        }
      }

      calendar.push([i, daysArr]);
    }

    this.calendar = calendar;
  }

  private changeMonth(number) {
    if (this.selectedMonth + number < 1) {
      this.selectedYear--;
      this.selectedMonth = 12;
    } else if (this.selectedMonth + number > 12) {
      this.selectedYear++;
      this.selectedMonth = 1;
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

    if (this.years.length > limit) return;

    if (atTop) {
      const first = this.yearContainerRef.firstElementChild as HTMLElement;
      this.years = [
        ...[...Array(5).keys()].map((year) => year + this.years[0] - 5),
        ...this.years,
      ];
      this.yearContainerRef.scrollTo(0, first.offsetTop);
    }

    if (atBottom) {
      const last = this.yearContainerRef.lastElementChild as HTMLElement;
      this.years = [
        ...this.years,
        ...[...Array(5).keys()].map(
          (year) => year + this.years[this.years.length - 1]
        ),
      ];
      this.yearContainerRef.scrollTo(0, last.offsetTop);
    }
  }

  private selectTempYear(event: MouseEvent, year: number) {
    event.stopPropagation();
    this.tempYear = year;
  }

  private getDayClasses(day: number): any {
    if (!day) {
      return;
    }

    const todayObj = dayjs();
    const dayObj = dayjs(new Date(this.selectedYear, this.selectedMonth, day));
    const isToday = todayObj.isSame(dayObj, 'day');

    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      today: isToday,
      selected:
        this.startDate.isSame(dayObj, 'day') ||
        this.endDate?.isSame(this.endDate, 'day'),
      range:
        dayObj.isAfter(this.startDate, 'day') &&
        dayObj.isBefore(this.endDate, 'day'),
      // disabled: !this.isWithinMinMax(dayObj),
    };
  }

  // private selectDay(day: number) {
  //   const date = DateTime.local(this.selectedYear, this.selectedMonth, day);
  //   const isStartBeforeEnd = this.start && this.start.toISO() < date.toISO();
  //   const isSameDay =
  //     this.start && !this.end && this.start.toISO() === date.toISO();

  //   if (day === undefined) return;

  //   if (isSameDay) {
  //     this.start = null;
  //     this.onDateChange();
  //     return;
  //   }

  //   if (this.range) {
  //     if (this.start === null) {
  //       this.start = date;
  //     } else if (this.end === null) {
  //       if (isStartBeforeEnd) {
  //         this.end = date;
  //       } else {
  //         this.end = this.start;
  //         this.start = date;
  //       }
  //     } else {
  //       this.start = date;
  //       this.end = null;
  //     }
  //   } else {
  //     this.start = date;
  //   }

  //   this.onDateChange();
  // }

  // private isWithinMinMax(date: DateTime) {
  //   const dateIso = date.toISO();
  //   const _minDate = this.minDate
  //     ? DateTime.fromFormat(this.minDate, this.format)
  //     : null;
  //   const _maxDate = this.maxDate
  //     ? DateTime.fromFormat(this.maxDate, this.format)
  //     : null;
  //   return (
  //     (!_minDate || _minDate.toISO() <= dateIso) &&
  //     (!_maxDate || _maxDate.toISO() >= dateIso)
  //   );
  // }

  /**
   * Rotate the WeekdayNames array.
   * Based on position that should be the new 0-index.
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
    this.startDate =
      this.from !== undefined ? dayjs(this.from, this.format) : dayjs();

    this.endDate =
      this.to !== undefined ? dayjs(this.to, this.format) : undefined;

    this.selectedMonth = this.startDate.month();
    this.selectedYear = this.startDate.year();

    this.tempMonth = this.selectedMonth;
    this.tempYear = this.selectedYear;
  }

  componentWillRender() {
    this.dayNames = this.rotateWeekDayNames(
      dayjs.weekdays(),
      this.weekStartIndex
    );

    this.calculateCalendar();
  }

  /**
   * Get the current DateTime
   */
  @Method()
  async getCurrentDate() {
    return {
      start: this.startDate.format(this.format),
      end: this.endDate.format(this.format),
    };
  }

  render() {
    return (
      <Host>
        <ix-date-time-card corners={this.corners}>
          <div class="header" slot="header">
            <ix-icon-button
              onClick={() => this.changeMonth(-1)}
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
                    {this.years.map((year) => (
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
                        <div
                          style={{ 'min-width': 'max-content' }}
                        >{`${year}`}</div>
                      </div>
                    ))}
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
              onClick={() => this.changeMonth(1)}
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
                  <div class="calendar-item week-number">{week[0]}</div>
                  {week[1].map((day) => (
                    <div
                      key={day}
                      class={this.getDayClasses(day)}
                      // onClick={() => this.selectDay(day)}
                    >
                      {day}
                    </div>
                  ))}
                </Fragment>
              );
            })}
            {/* {this.calendar.forEach((days: number[], week: number) => {
              <Fragment>
                <div class="calendar-item week-number">{week}</div>
                {days.map((day) => {
                  <div key={day}>{day}</div>;
                })}
              </Fragment>;
            })} */}
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
