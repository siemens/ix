import { EventEmitter } from '../../stencil-public-runtime';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';
export declare class TimePicker {
  hostElement: HTMLIxTimePickerElement;
  /**
   * Set corners style
   */
  corners: DateTimeCardCorners;
  /**
   * set styles
   */
  individual: boolean;
  /**
   * Show Hour Input
   */
  showHour: boolean;
  /**
   * Show Minutes Input
   */
  showMinutes: boolean;
  /**
   * Show Seconds Input
   */
  showSeconds: boolean;
  /**
   * Show Time Reference Input
   */
  showTimeReference: boolean;
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
  private time;
  private updateInput;
  private changeReference;
  private setHourAccordingToReference;
  render(): any;
}
