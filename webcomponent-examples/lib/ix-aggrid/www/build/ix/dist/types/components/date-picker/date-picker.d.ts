import { EventEmitter } from '../../stencil-public-runtime';
import { DateTime, MonthNumbers } from 'luxon';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
export declare class DatePicker {
  /**
   * output date format
   */
  format: string;
  /**
   * Set range size
   */
  range: boolean;
  /**
   * set styles
   */
  individual: boolean;
  /**
   * Set corners style
   */
  corners: DateTimeCardCorners;
  private daysInWeek;
  private dayNames;
  private monthNames;
  year: number;
  month: MonthNumbers;
  calendar: [number, number[]][];
  today: DateTime;
  years: number[];
  tempYear: number;
  tempMonth: number;
  start: DateTime;
  end: DateTime;
  dropdownButtonRef: HTMLElement;
  yearContainerRef: HTMLElement;
  /**
   * Time change event
   */
  dateChange: EventEmitter<string>;
  /**
   * done event
   */
  done: EventEmitter<string>;
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
  componentWillRender(): void;
  render(): any;
}
