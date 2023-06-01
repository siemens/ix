import { EventEmitter } from '../../stencil-public-runtime';
import { DateTime, MonthNumbers } from 'luxon';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
import { DateChangeEvent, LegacyDateChangeEvent } from './events';
export declare class DatePicker {
  private daysInWeek;
  private dayNames;
  private monthNames;
  /**
   * Date format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   */
  format: string;
  /**
   * If true a range of dates can be selected.
   */
  range: boolean;
  /**
   * @deprecated Will be removed in 2.0.0
   */
  individual: boolean;
  /**
   * Corner style
   */
  corners: DateTimeCardCorners;
  /**
   * Picker date. If the picker is in range mode this property is the start date.
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  from: string;
  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  to: string | null;
  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  minDate: string;
  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  maxDate: string;
  /**
   * Default behavior of the done event is to join the two events (date and time) into one combined string output.
   * This combination can be configured over the delimiter
   *
   * @since 1.1.0
   */
  eventDelimiter: string;
  /**
   * Text of date select button
   *
   * @since 1.1.0
   */
  textSelectDate: string;
  yearValue: number;
  today: DateTime;
  monthValue: number;
  calendar: [number, number[]][];
  years: number[];
  tempYear: number;
  tempMonth: number;
  start: DateTime;
  end: DateTime;
  dropdownButtonRef: HTMLElement;
  yearContainerRef: HTMLElement;
  /**
   * Date change event
   *
   * If datepicker is in range mode the event detail will be sperated with a `-` e.g.
   * `2022/10/22 - 2022/10/24` (start and end). If range mode is choosen consider to use `dateRangeChange`.
   *
   * @depracted String output will be removed. Set ´doneEventDelimiter´ to undefined or null to get date change object instead of a string
   */
  dateChange: EventEmitter<LegacyDateChangeEvent>;
  /**
   * Date range change.
   * Only triggered if datepicker is in range mode
   *
   * @since 1.1.0
   */
  dateRangeChange: EventEmitter<DateChangeEvent>;
  /**
   * Date selection confirmed via button action
   *
   * @deprecated Will be removed in 2.0.0. Use `dateSelect`
   */
  done: EventEmitter<string>;
  /**
   * Date selection confirmed via button action
   *
   * @since 1.1.0
   */
  dateSelect: EventEmitter<DateChangeEvent>;
  get year(): number;
  get day(): import("luxon").DayNumbers;
  get month(): MonthNumbers;
  private onDone;
  private onDateChange;
  private getStartOfMonth;
  private getEndOfMonth;
  private getDaysInMonth;
  private calculateCalendar;
  private changeMonth;
  private selectMonth;
  private infiniteScrollYears;
  private selectTempYear;
  private todayClass;
  private selectDay;
  private getOutputFormat;
  private isWithinMinMax;
  componentWillLoad(): void;
  componentWillRender(): void;
  /**
   * Get the current DateTime
   */
  getCurrentDate(): Promise<{
    start: string;
    end: string;
  }>;
  render(): any;
}
