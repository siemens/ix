/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
  Prop,
  State,
} from '@stencil/core';
import { DateTime, Info, MonthNumbers } from 'luxon';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

@Component({
  tag: 'ix-date-picker',
  styleUrl: 'date-picker.scss',
  scoped: true,
})
export class DatePicker {
  private daysInWeek = 7;
  private dayNames = Info.weekdays();
  private monthNames = Info.months();

  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

  /**
   * If true a range of dates can be selected.
   */
  @Prop() range: boolean = true;

  /**
   * @deprecated - will get removed with next major release
   */
  @Prop() individual: boolean = true;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * Year to display initially.
   */
  @Prop() year = DateTime.now().year;

  /**
   * Month to display initially.
   */
  @Prop() month = DateTime.now().month;

  @State() yearValue = this.year;
  @State() today = DateTime.now();
  @State() monthValue: number = this.month;
  @State() calendar: [number, number[]][] = [];

  @State() years = [...Array(10).keys()].map((year) => year + this.year - 5);
  @State() tempYear: number = this.yearValue;
  @State() tempMonth: number = this.monthValue;
  @State() start: DateTime = null;
  @State() end: DateTime = null;

  @State() dropdownButtonRef: HTMLElement;
  @State() yearContainerRef: HTMLElement;

  /**
   * Date change event
   */
  @Event() dateChange: EventEmitter<string>;

  /**
   * Done event
   */
  @Event() done: EventEmitter<string>;

  private selectionProps() {
    if (this.year !== null) {
      this.yearValue = this.year;
    }

    if (this.month !== null) {
      this.monthValue = this.month;
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
    this.selectionProps();
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

      if (!result[weekIndex]) result[weekIndex] = []; // start a new chunk

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

  private todayClass(day: number) {
    const today = DateTime.local();
    const daaay = DateTime.local(this.yearValue, this.monthValue, day);
    const isToday = Math.ceil(daaay.diff(today, 'days').days) === 0;
    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      today: isToday,
      selected:
        (this.start && daaay.toISO() === this.start.toISO()) ||
        (this.end && daaay.toISO() === this.end.toISO()),
      range:
        this.start &&
        this.end &&
        daaay.toISO() > this.start.toISO() &&
        daaay.toISO() < this.end.toISO(),
      disabled:
        this.start &&
        daaay.toISO() < this.start.toISO() &&
        this.end === null &&
        this.range,
    };
  }

  private selectDay(day: number) {
    const date = DateTime.local(this.yearValue, this.monthValue, day);
    const isNotDay = day === undefined;
    const isFirstDay = this.start === null;
    const isLastDay = this.end === null;
    const isPeriod = this.start !== null && this.end !== null;
    const isStartBeforeEnd = this.start && this.start.toISO() < date.toISO();
    const isSameDay =
      this.start && !this.end && this.start.toISO() === date.toISO();

    if (isNotDay) return;

    if (isSameDay) {
      this.start = null;
      this.dateChange.emit(this.getOutputFormat());
      return;
    }

    if (!this.range) {
      this.start = date;
    }

    if (this.range && isFirstDay) {
      this.start = date;
    }

    if (this.range && isLastDay && isStartBeforeEnd) {
      this.end = date;
    }

    if (this.range && isPeriod) {
      this.start = date;
      this.end = null;
    }

    this.dateChange.emit(this.getOutputFormat());
  }

  private getOutputFormat() {
    if (!this.end) return this.start.toFormat(this.format);

    return (
      this.start.toFormat(this.format) + ' - ' + this.end.toFormat(this.format)
    );
  }

  componentWillRender() {
    this.calculateCalendar();
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
              <div class="calendar-item week-day">{name.slice(0, 3)}</div>
            ))}

            {this.calendar.map((week) => {
              return (
                <Fragment>
                  <div class="calendar-item week-number">{week[0]}</div>
                  {week[1].map((day) => (
                    <div
                      class={this.todayClass(day)}
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
            <ix-button onClick={() => this.done.emit(this.getOutputFormat())}>
              Done
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
