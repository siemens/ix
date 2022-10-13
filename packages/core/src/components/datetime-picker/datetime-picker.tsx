/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { DateTime } from 'luxon';

@Component({
  tag: 'ix-datetime-picker',
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

   /**
   * Set year
   */
  @Prop() setYear = null;

  /**
   * Set month
   */
  @Prop() setMonth = null;

  /**
   * Set today
   */
  @Prop() setToday: DateTime = null;

   /**
   * Set hour
   */
  @Prop() setHour: number = 0

  /**
   * Set minutes
   */
  @Prop() setMin: number = 0

    /**
   * Set seconds
   */
  @Prop() setSeconds: number = 0

  /**
   * Set seconds
   */
  @Prop() setTimeReference: string = "AM"

  private date!: string;
  private time!: string;

  /**
   * Time event
   */
  @Event() done: EventEmitter<string>;

  private doneEvent() {
    console.log(this.date + ' ' + this.time);
    this.done.emit(this.date + ' ' + this.time);
  }

  render() {
    return (
      <Host>
        <div class="flex">
          <ix-date-picker
            corners="left"
            individual={false}
            range={this.range}
            onDateChange={(date) => (this.date = date.detail)}
            setYear={this.setYear}
            setMonth={this.setMonth}
            setToday={this.setToday}
          ></ix-date-picker>
          <ix-time-picker
            corners="right"
            individual={false}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            showTimeReference={this.showTimeReference}
            onTimeChange={(time) => (this.time = time.detail)}
            setHour={this.setHour}
            setMin={this.setMin}
            setSeconds={this.setSeconds}
            setTimeReference={this.setTimeReference}
          ></ix-time-picker>
        </div>
        <div class="done">
          <ix-button onClick={() => this.doneEvent()}>Done</ix-button>
        </div>
      </Host>
    );
  }
}
