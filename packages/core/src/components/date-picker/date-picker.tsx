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
  Fragment,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

import { DateTime, Info } from 'luxon';
import { OnListener } from '../utils/listener';

export type DateChangeEvent = {
  from?: string;
  to?: string;
};

export type DateTimeCorners = DateTimeCardCorners;

interface CalendarWeek {
  weekNumber: number;
  dayNumbers: (number | undefined)[];
}

@Component({
  tag: 'ix-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker {
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
   *
   * @since 1.1.0
   */
  @Prop() from: string | undefined;

  @Watch('from')
  watchFromPropHandler(newValue: string) {
    this.currFromDate = newValue
      ? DateTime.fromFormat(newValue, this.format)
      : undefined;

    if (this.currFromDate?.isValid) {
      this.selectedYear = this.currFromDate.year;
      this.selectedMonth = this.currFromDate.month - 1;
    }
  }

  /**
   * The selected end date. If the the date-picker-rework is not in range mode this property has no impact.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() to: string | undefined;

  @Watch('to')
  watchToPropHandler(newValue: string) {
    this.currToDate = newValue
      ? DateTime.fromFormat(newValue, this.format)
      : undefined;

    if (this.currToDate?.isValid) {
      this.selectedYear = this.currToDate.year;
      this.selectedMonth = this.currToDate.month - 1;
    }
  }

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() minDate?: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() maxDate?: string;

  /**
   * Text of the button that confirms date selection.
   *
   * @since 1.1.0
   * @deprecated since 2.1.0. Use `i18nDone`
   */
  @Prop() textSelectDate?: string;

  /**
   * Text of date select button
   *
   * @since 2.1.0
   */
  @Prop({ attribute: 'i18n-done' }) i18nDone = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   *
   * @since 2.1.0
   */
  @Prop() weekStartIndex = 0;

  /**
   * Format of time string
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   *
   * @since 2.1.0
   */
  @Prop() locale?: string;
  @Watch('locale')
  onLocaleChange() {
    this.setTranslations();
  }

  /**
   * @deprecated Not supported since 2.0.0.
   */
  @Prop() individual: boolean = true;

  /**
   * Default behavior of the done event is to join the two events (date and time) into one combined string output.
   * This combination can be configured over the delimiter
   *
   * @since 1.1.0
   * @deprecated Not used anymore see `this.dateChange`
   */
  @Prop() eventDelimiter = ' - ';

  /** @internal */
  @Prop() standaloneAppearance = true;

  /** @internal */
  @Prop() today = DateTime.now().toISO();

  /**
   * Triggers if the date selection changes.
   * Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
   *
   * @since 2.1.0
   */
  @Event() dateChange!: EventEmitter<DateChangeEvent>;

  /**
   * Triggers if the date selection changes.
   * Only triggered if date-picker-rework is in range mode.
   *
   * @since 2.1.0
   */
  @Event() dateRangeChange!: EventEmitter<DateChangeEvent>;

  /**
   * Date selection confirmed via button action
   *
   * @since 1.1.0
   */
  @Event() dateSelect!: EventEmitter<DateChangeEvent>;

  /**
   * Date selection confirmed via button action
   *
   * @deprecated NOT getting dispatched after 2.0.0. Use `dateSelect`.
   */
  @Event() done!: EventEmitter<string>;

  /**
   * Get the currently selected date-range.
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

  @State() selectedYear: number = 0;
  @State() tempYear: number = 0;
  @State() startYear: number = 0;
  @State() endYear: number = 0;
  @State() selectedMonth: number = 0;
  @State() tempMonth: number = 0;

  @State() dayNames: string[] = [];
  @State() monthNames: string[] = [];
  @State() focusedDay: number = 1;

  @State() firstMonthRef?: HTMLElement;
  @State() dropdownButtonRef?: HTMLElement;
  @State() yearContainerRef?: HTMLElement;
  @State() focusedDayElement?: HTMLElement;

  private isDayFocus: boolean = false;
  private monthChangedFromFocus: boolean = false;
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
    const daysInMonth = DateTime.utc(
      this.selectedYear,
      this.selectedMonth + 1
    ).daysInMonth;

    if (!daysInMonth) {
      throw Error('Invalid month or year.');
    }

    return daysInMonth;
  }

  private getDateTimeNow() {
    return DateTime.fromISO(this.today);
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

    const dayElement = this.hostElement.shadowRoot!.querySelector<HTMLElement>(
      `[id=day-cell-${this.focusedDay}]`
    );

    if (!dayElement) {
      console.error('Day element cannot be focused');
    }

    dayElement?.focus();
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

  private selectTempYear(year: number, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.tempYear = year;
  }

  private focusMonth() {
    if (!this.firstMonthRef) {
      console.warn('Month can not be focused');
    }
    this.firstMonthRef?.focus();
  }

  private infiniteScrollYears() {
    if (!this.yearContainerRef) {
      throw Error('Year container not found');
    }
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

  private selectDay(selectedDay: number | undefined) {
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

  private getDayClasses(day: number | undefined): any {
    if (!day) {
      return;
    }

    const todayObj = this.getDateTimeNow();
    const selectedDayObj = DateTime.fromJSDate(
      new Date(this.selectedYear, this.selectedMonth, day)
    );

    const isCurrentFromDateSameAsSelectedDay = this.currFromDate?.hasSame(
      selectedDayObj,
      'day'
    );
    const isCurrentToDateSameAsSelectedDay = this.currToDate?.hasSame(
      selectedDayObj,
      'day'
    );

    const isSelectedDayAfterCurrentFromDate =
      this.currFromDate?.startOf('day') &&
      selectedDayObj.startOf('day') > this.currFromDate?.startOf('day');

    const isSelectedDayBeforeCurrentFromDate =
      this.currToDate?.startOf('day') &&
      selectedDayObj.startOf('day') < this.currToDate?.startOf('day');

    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      today: todayObj.hasSame(selectedDayObj, 'day'),
      selected:
        isCurrentFromDateSameAsSelectedDay || isCurrentToDateSameAsSelectedDay,
      range:
        isSelectedDayAfterCurrentFromDate &&
        isSelectedDayBeforeCurrentFromDate &&
        this.currToDate !== undefined,
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
          onClick={(event) => this.selectTempYear(year, event)}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              this.selectTempYear(year);
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
        <ix-date-time-card
          corners={this.corners}
          standaloneAppearance={this.standaloneAppearance}
        >
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
                        ref={(ref) => {
                          if (month === this.monthNames[0]) {
                            this.firstMonthRef = ref as HTMLElement;
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
                          name="single-check"
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
                      id={`day-cell-${day}`}
                      date-calender-day
                      class={this.getDayClasses(day)}
                      onClick={() => this.selectDay(day)}
                      onKeyUp={(e) => e.key === 'Enter' && this.selectDay(day)}
                      tabIndex={day === this.focusedDay ? 0 : -1}
                      onFocus={() => this.onDayFocus()}
                      onBlur={() => this.onDayBlur()}
                    >
                      {day}
                    </div>
                  ))}
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
            <ix-button onClick={() => this.onDone()}>
              {this.textSelectDate || this.i18nDone}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
