/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, h, Host, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'cw-datetime-picker',
  styleUrl: 'datetime-picker.scss',
  scoped: true,
})
export class DatePicker {

  /**
   * Set range size
   */
   @Prop() range = true;

  /**
   * Show Hour Input
   */
  @Prop() showHour = false;

  /**
   * Show Minutes Input
   */
  @Prop() showMinutes = false;

  /**
   * Show Seconds Input
   */
  @Prop() showSeconds = false;

  /**
   * Show Time Reference Input
   */
  @Prop() showTimeReference = false;

  private date!: string
  private time!: string

  /**
   * Time event
   */
  @Event() done: EventEmitter<string>;

  private doneEvent() {
    console.log(this.date + ' ' + this.time)
    this.done.emit(this.date + ' ' + this.time);
  }

  render() {
    return (
      <Host>
        <div class="flex">
          <cw-date-picker
            corners="left"
            individual={false}
            range={this.range}
            onDateChange={(date) => this.date = date.detail}
          ></cw-date-picker>
          <cw-time-picker
            corners="right"
            individual={false}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            showTimeReference={this.showTimeReference}
            onTimeChange={(time) => this.time = time.detail}
          ></cw-time-picker>
        </div>
        <div class="done">
          <cw-button onClick={() => this.doneEvent()}>Done</cw-button>
        </div>
      </Host>
    );
  }
}
