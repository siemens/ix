import { EventEmitter } from '../../stencil-public-runtime';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
export declare class TimePicker {
  hostElement: HTMLIxTimePickerElement;
  /**
   * Format of time string
   *
   * @since 1.1.0
   */
  format: string;
  /**
   * Corner style
   */
  corners: DateTimeCardCorners;
  /**
   * @deprecated Will be removed in 2.0.0
   */
  individual: boolean;
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
   * Select time with format string
   *
   * @since 1.1.0
   */
  time: string;
  /**
   * Show time reference input
   *
   * @since 1.1.0 time reference is default aligned with formt tt
   */
  showTimeReference: any;
  /**
   * Set time reference
   */
  timeReference: 'AM' | 'PM';
  /**
   * Text of date select button
   *
   * @since 1.1.0
   */
  textSelectTime: string;
  /**
   * Time event
   */
  done: EventEmitter<string>;
  /**
   * Time change event
   */
  timeChange: EventEmitter<string>;
  hourInputRef: HTMLInputElement;
  minuteInputRef: HTMLInputElement;
  secondInputRef: HTMLInputElement;
  referenceInputRef: HTMLInputElement;
  get hour(): import("luxon").HourNumbers;
  get minutes(): import("luxon").SecondNumbers;
  get seconds(): import("luxon").SecondNumbers;
  private _time;
  private updateInput;
  private changeReference;
  private setHourAccordingToReference;
  private emitTimeChange;
  componentWillLoad(): void;
  /**
   * Get current time
   */
  getCurrentTime(): Promise<string>;
  render(): any;
}
