import { EventEmitter } from '../../stencil-public-runtime';
export declare class DatePicker {
  /**
   * Set range size
   */
  range: boolean;
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
  private date;
  private time;
  /**
   * Time event
   */
  done: EventEmitter<string>;
  private doneEvent;
  render(): any;
}
