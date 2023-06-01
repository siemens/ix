import { EventEmitter } from '../../stencil-public-runtime';
import { DateTimeSelectEvent } from './event';
export declare class DatePicker {
  /**
   * Set range size
   */
  range: boolean;
  /**
   * Show hour input
   */
  showHour: boolean;
  /**
   * Show minutes input
   */
  showMinutes: boolean;
  /**
   * Show seconds input
   */
  showSeconds: boolean;
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
   * Date format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   *
   * @since 1.1.0
   */
  dateFormat: string;
  /**
   * Time format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   *
   * @since 1.1.0
   */
  timeFormat: string;
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
   * Select time with format string
   *
   * @since 1.1.0
   */
  time: string;
  /**
   * Show time reference input
   * Time reference is default aligned with @see {this.timeFormat}
   *
   * @since 1.1.0
   */
  showTimeReference: any;
  /**
   * Default behavior of the done event is to join the two events (date and time) into one combined string output.
   * This combination can be configured over the delimiter
   *
   * @since 1.1.0
   */
  eventDelimiter: string;
  /**
   * Set time reference
   */
  timeReference: 'AM' | 'PM';
  /**
   * Text of date select button
   *
   * @since 1.1.0
   */
  textSelectDate: string;
  /**
   * Done event
   *
   * Set `doneEventDelimiter` to null or undefine to get the typed event
   */
  done: EventEmitter<string>;
  /**
   * Time change
   *
   * @since 1.1.0
   */
  timeChange: EventEmitter<string>;
  /**
   * Date change
   *
   * @since 1.1.0
   */
  dateChange: EventEmitter<string | Omit<DateTimeSelectEvent, 'time'>>;
  /**
   * Date selection event is fired after confirm button is pressend
   *
   * @since 1.1.0
   */
  dateSelect: EventEmitter<DateTimeSelectEvent>;
  private datePickerElement;
  private timePickerElement;
  private _from;
  private _to;
  private _time;
  private onDone;
  private onDateChange;
  private onTimeChange;
  componentDidLoad(): void;
  render(): any;
}
