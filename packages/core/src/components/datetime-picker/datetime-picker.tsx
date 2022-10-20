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
   * Show hour input
   */
  @Prop() showHour = false;

  /**
   * Show minutes input
   */
  @Prop() showMinutes = false;

  /**
   * Show seconds input
   */
  @Prop() showSeconds = false;

  /**
   * Show time reference input
   */
  @Prop() showTimeReference = false;

   /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() minDate: DateTime;

   /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  @Prop() maxDate: DateTime;

   /**
   * Set year
   */
  @Prop() year = DateTime.now().year;

  /**
   * Set month
   */
  @Prop() month = DateTime.now().month;

  /**
   * Set month
   */
  @Prop() day: number = null;

   /**
   * Set hour
   */
  @Prop() hour: number = 0

  /**
   * Set minutes
   */
  @Prop() minutes: number = 0

    /**
   * Set seconds
   */
  @Prop() seconds: number = 0

  /**
   * Set seconds
   */
  @Prop() timeReference: string = "AM"

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
        <div class="separator"></div>
          <ix-date-picker
            corners="left"
            individual={false}
            range={this.range}
            onDateChange={(date) => (this.date = date.detail)}
            year={this.year}
            month={this.month}
            day={this.day}
            minDate={this.minDate}
            maxDate={this.maxDate}
          ></ix-date-picker>

          <ix-time-picker
            corners="right"
            individual={false}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            showTimeReference={this.showTimeReference}
            onTimeChange={(time) => (this.time = time.detail)}
            hour={this.hour}
            minutes={this.minutes}
            seconds={this.seconds}
            timeReference={this.timeReference}
          ></ix-time-picker>
          <div class="separator"></div>
        </div>

        <div class="done">
          <ix-button onClick={() => this.doneEvent()}>Done</ix-button>
        </div>
      </Host>
    );
  }
}
