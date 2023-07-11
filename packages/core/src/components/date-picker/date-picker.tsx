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
} from '@stencil/core';
import { DateTime, Info, MonthNumbers } from 'luxon';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

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
  private daysInWeek = 7;
  private dayNames = Info.weekdays();
  private monthNames = Info.months();

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
   * @deprecated Will be removed in 2.0.0
   */
  @Prop() individual: boolean = true;

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
  @Prop() from: string | null = DateTime.now().toFormat(this.format);

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() to: string | null = null;

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
   * Default behavior of the done event is to join the two events (date and time) into one combined string output.
   * This combination can be configured over the delimiter
   *
   * @since 1.1.0
   */
  @Prop() eventDelimiter = ' - ';

  /**
   * Text of date select button
   *
   * @since 1.1.0
   */
  @Prop() textSelectDate = 'Done';

  @State() yearValue = this.year;
  @State() today = DateTime.now();
  @State() monthValue: number = this.month;
  @State() calendar: [number, number[]][] = [];

  @State() years = [...Array(10).keys()].map((year) => year + this.year - 5);
  @State() tempYear: number = this.yearValue;
  @State() tempMonth: number = this.monthValue;
  @State() start: DateTime = DateTime.fromObject({
    year: this.year,
    month: this.month,
    day: this.day,
  });

  @State() end: DateTime = this.to
    ? DateTime.fromFormat(this.to, this.format)
    : null;

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
      return DateTime.fromFormat(this.from, this.format).year;
    }

    return DateTime.now().year;
  }

  get day() {
    if (this.from !== null) {
      return DateTime.fromFormat(this.from, this.format).day;
    }

    return null;
  }

  get month() {
    if (this.from !== null) {
      return DateTime.fromFormat(this.from, this.format).month;
    }

    return DateTime.now().month;
  }

  private onDone() {
    this.done.emit(this.getOutputFormat());

    this.dateSelect.emit({
      from: this.start?.toFormat(this.format),
      to: this.end?.toFormat(this.format),
    });
  }

  private onDateChange() {
    const from = this.start?.toFormat(this.format);
    const to = this.end?.toFormat(this.format);

    this.from = from;
    this.to = to;

    if (this.eventDelimiter) {
      this.dateChange.emit(this.getOutputFormat());
    } else {
      this.dateChange.emit({
        from,
        to,
      });
    }

    if (this.range) {
      this.dateRangeChange.emit({
        from,
        to,
      });
    }
  }

  private getStartOfMonth(
    year = DateTime.local().get('year'),
    month = DateTime.local().get('month')
  ) {
    return DateTime.local(year, month).startOf('month');
  }

  private getEndOfMonth(
    year = DateTime.local().get('year'),
    month = DateTime.local().get('month')
  ) {
    return DateTime.local(year, month).endOf('month');
  }

  private getDaysInMonth(
    start = this.getStartOfMonth(),
    end = this.getEndOfMonth()
  ) {
    return Math.ceil(end.diff(start, 'days').days);
  }

  private calculateCalendar() {
    const start = this.getStartOfMonth(this.yearValue, this.monthValue);
    const end = this.getEndOfMonth(this.yearValue, this.monthValue);
    const totalDays = this.getDaysInMonth(start, end);
    const totalWeeks = 6;
    const totalDaysInWeeks = totalWeeks * this.daysInWeek;
    const startWeekDay = start.weekday;
    const prependDays = startWeekDay - 1;
    const appendDays = totalDaysInWeeks - totalDays - prependDays;
    let weekdays: number[][] = [];
    const calendar: [number, number[]][] = [];

    // create list of days
    let days = [...new Array(totalDaysInWeeks).keys()].map((day) => day + 1);

    // add start empty days
    days.unshift(...new Array(prependDays));

    // remove & add end days
    days = days.slice(0, days.length - prependDays - appendDays);
    days.push(...new Array(appendDays));

    // make weeks
    weekdays = days.reduce((result, item, index) => {
      const weekIndex = Math.floor(index / this.daysInWeek);

      if (!result[weekIndex]) result[weekIndex] = [];

      result[weekIndex].push(item);

      return result;
    }, []);

    for (let index = 1; index <= totalWeeks; index++) {
      const week = weekdays[index - 1];
      const firstWeekDay = week.find((day) => day !== undefined);
      const weekNumber = firstWeekDay
        ? DateTime.local(
            this.yearValue,
            this.monthValue,
            weekdays[index - 1][0]
          ).weekNumber
        : undefined;
      calendar.push([weekNumber, week]);
    }

    this.calendar = calendar;
  }

  private changeMonth(number) {
    if (this.monthValue + number < 1) {
      this.yearValue--;
      this.monthValue = 12;
    } else if (this.monthValue + number > 12) {
      this.yearValue++;
      this.monthValue = 1;
    } else {
      this.monthValue += number;
    }
    this.calculateCalendar();
  }

  private selectMonth(month: MonthNumbers) {
    this.monthValue = month;
    this.yearValue = this.tempYear;
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
      this.years = [
        ...[...Array(5).keys()].map((year) => year + this.years[0] - 5),
        ...this.years,
      ];
      this.yearContainerRef.scroll({ behavior: 'smooth', top: scroll + 100 });
    }

    if (atBottom) {
      this.years = [
        ...this.years,
        ...[...Array(5).keys()].map(
          (year) => year + this.years[this.years.length - 1]
        ),
      ];
      this.yearContainerRef.scroll({ behavior: 'smooth', top: scroll - 50 });
    }
  }

  private selectTempYear(event: MouseEvent, year: number) {
    event.stopPropagation();
    this.tempYear = year;
  }

  private getDayClasses(day: number) {
    if (!day) {
      return;
    }

    const todayLocal = DateTime.local();
    const dayLocal = DateTime.local(this.yearValue, this.monthValue, day);
    const dayIso = dayLocal.toISO();
    const startIso = this.start?.toISO();
    const endIso = this.end?.toISO();
    const isToday = Math.ceil(dayLocal.diff(todayLocal, 'days').days) === 0;

    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      today: isToday,
      selected:
        (this.start && dayIso === startIso) || (this.end && dayIso === endIso),
      range: this.start && this.end && dayIso > startIso && dayIso < endIso,
      disabled: !this.isWithinMinMax(dayLocal),
    };
  }

  private selectDay(day: number) {
    const date = DateTime.local(this.yearValue, this.monthValue, day);
    const isStartBeforeEnd = this.start && this.start.toISO() < date.toISO();
    const isSameDay =
      this.start && !this.end && this.start.toISO() === date.toISO();

    if (day === undefined) return;

    if (isSameDay) {
      this.start = null;
      this.onDateChange();
      return;
    }

    if (this.range) {
      if (this.start === null) {
        this.start = date;
      } else if (this.end === null) {
        if (isStartBeforeEnd) {
          this.end = date;
        } else {
          this.end = this.start;
          this.start = date;
        }
      } else {
        this.start = date;
        this.end = null;
      }
    } else {
      this.start = date;
    }

    this.onDateChange();
  }

  private getOutputFormat() {
    if (!this.start) {
      return null;
    }

    if (!this.end) {
      return this.start.toFormat(this.format);
    }

    return [
      this.start.toFormat(this.format),
      this.end.toFormat(this.format),
    ].join(this.eventDelimiter);
  }

  private isWithinMinMax(date: DateTime) {
    const dateIso = date.toISO();
    const _minDate = this.minDate
      ? DateTime.fromFormat(this.minDate, this.format)
      : null;
    const _maxDate = this.maxDate
      ? DateTime.fromFormat(this.maxDate, this.format)
      : null;
    return (
      (!_minDate || _minDate.toISO() <= dateIso) &&
      (!_maxDate || _maxDate.toISO() >= dateIso)
    );
  }

  componentWillLoad() {
    if (this.from === DateTime.now().toFormat(this.format) && this.range) {
      this.from = null;
    }
    if (this.from === null) {
      this.start = null;
    }

    if (this.year !== null) {
      this.yearValue = this.year;
    }
    if (this.month) {
      this.monthValue = this.month;
    }
  }

  componentWillRender() {
    this.calculateCalendar();
  }

  /**
   * Get the current DateTime
   */
  @Method()
  async getCurrentDate() {
    return {
      start: this.start?.toFormat(this.format),
      end: this.end?.toFormat(this.format),
    };
  }

  render() {
    return (
      <Host>
        <ix-date-time-card individual={this.individual} corners={this.corners}>
          <div class="header" slot="header">
            <ix-icon-button
              onClick={() => this.changeMonth(-1)}
              ghost
              icon="chevron-left"
              variant="Primary"
              class="arrows"
            ></ix-icon-button>

            <div class="selector">
              <ix-button ghost ref={(ref) => (this.dropdownButtonRef = ref)}>
                <span class="fontSize capitalize">
                  {this.monthNames[this.monthValue - 1]} {this.yearValue}
                </span>
              </ix-button>
              <ix-dropdown
                class="dropdown"
                trigger={this.dropdownButtonRef}
                placement="bottom"
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
                        onClick={() =>
                          this.selectMonth((index + 1) as MonthNumbers)
                        }
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
              variant="Primary"
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
                      onClick={() => this.selectDay(day)}
                    >
                      {day}
                    </div>
                  ))}
                </Fragment>
              );
            })}
          </div>

          <div class={{ button: true, hidden: !this.individual }}>
            <ix-button onClick={() => this.onDone()}>
              {this.textSelectDate}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
