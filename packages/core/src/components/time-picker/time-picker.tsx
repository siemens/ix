/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
    h,
    Host,
    Prop,
    State
} from '@stencil/core';
import { DateTime } from 'luxon';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

@Component({
  tag: 'ix-time-picker',
  styleUrl: 'time-picker.scss',
  scoped: true,
})
export class TimePicker {
  @Element() hostElement!: HTMLIxTimePickerElement;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * @deprecated - will get removed with next major release
   */
  @Prop() individual: boolean = true;

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

  /**
   * Time event
   */
  @Event() done: EventEmitter<string>;

  /**
   * Time change event
   */
  @Event() timeChange: EventEmitter<string>;

  @State() hourInputRef: HTMLInputElement;
  @State() minuteInputRef: HTMLInputElement;
  @State() secondInputRef: HTMLInputElement;
  @State() referenceInputRef: HTMLInputElement;

  private time: DateTime = DateTime.fromFormat('00:00:00 AM', 'tt');

  private updateInput(
    step: 'up' | 'down',
    { hours = undefined, minutes = undefined, seconds = undefined }
  ) {
    if (hours)
      step === 'up' ? this.hourInputRef.stepUp() : this.hourInputRef.stepDown();
    if (minutes)
      step === 'up'
        ? this.minuteInputRef.stepUp()
        : this.minuteInputRef.stepDown();
    if (seconds)
      step === 'up'
        ? this.secondInputRef.stepUp()
        : this.secondInputRef.stepDown();

    this.time = this.time.set({
      hour: Number(this.hourInputRef.value),
      minute: Number(this.minuteInputRef.value),
      second: Number(this.secondInputRef.value),
    });
    this.setHourAccordingToReference();

    this.timeChange.emit(this.time.toFormat('TT'));
  }

  private changeReference() {
    this.referenceInputRef.value =
      this.referenceInputRef.value === 'PM' ? 'AM' : 'PM';

    this.setHourAccordingToReference();

    this.timeChange.emit(this.time.toFormat('TT'));
  }

  private setHourAccordingToReference() {
    let hour = Number(this.hourInputRef.value);

    if (this.referenceInputRef.value === 'PM') hour += 12;

    this.time = this.time.set({ hour });
  }
  render() {
    let hideHour = !this.showHour;
    let hideMinutes = !this.showMinutes;
    let hideSeconds = !this.showSeconds;
    const hideTimeReference = !this.showTimeReference;
    const hideIndividual = !this.individual;

    if (!this.showHour && !this.showMinutes && !this.showSeconds) {
      hideHour = false;
      hideMinutes = false;
      hideSeconds = false;
    }

    const hideHourSeperator = hideMinutes || hideHour;
    const hideMinutesSeperator = hideSeconds || hideMinutes;

    return (
      <Host>
        <ix-date-time-card individual={this.individual} corners={this.corners}>
          <div class="header" slot="header">
            <div class="title">Time</div>
          </div>

          <div class="clock">
            <div class={{ columns: true, hidden: hideHour }}>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('up', { hours: true })}
                ghost
                icon="chevron-up"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
              <input
                name="hours"
                type="number"
                placeholder="00"
                value={this.hour}
                min="0"
                disabled
                max={this.showTimeReference === true ? 11 : 23}
                ref={(ref) => (this.hourInputRef = ref)}
              ></input>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('down', { hours: true })}
                ghost
                icon="chevron-down"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
            </div>

            <div
              class={{ 'column-seperator': true, hidden: hideHourSeperator }}
            >
              :
            </div>

            <div class={{ columns: true, hidden: hideMinutes }}>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('up', { minutes: true })}
                ghost
                icon="chevron-up"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
              <input
                name="minutes"
                type="number"
                placeholder="00"
                value={this.minutes}
                min="0"
                max="59"
                disabled
                ref={(ref) => (this.minuteInputRef = ref)}
              ></input>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('down', { minutes: true })}
                ghost
                icon="chevron-down"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
            </div>

            <div
              class={{ 'column-seperator': true, hidden: hideMinutesSeperator }}
            >
              :
            </div>

            <div class={{ columns: true, hidden: hideSeconds }}>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('up', { seconds: true })}
                ghost
                icon="chevron-up"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
              <input
                name="seconds"
                type="number"
                placeholder="00"
                value={this.seconds}
                disabled
                min="0"
                max="59"
                ref={(ref) => (this.secondInputRef = ref)}
              ></input>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('down', { seconds: true })}
                ghost
                icon="chevron-down"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
            </div>

            <div
              class={{
                columns: true,
                'default-space': true,
                hidden: hideTimeReference,
              }}
            >
              <ix-icon-button
                size="16"
                onClick={() => this.changeReference()}
                ghost
                icon="chevron-up"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
              <input
                name="reference"
                type="text"
                ref={(ref) => (this.referenceInputRef = ref)}
                value={this.timeReference}
                disabled
                class="text-align"
              ></input>
              <ix-icon-button
                size="16"
                onClick={() => this.changeReference()}
                ghost
                icon="chevron-down"
                variant="Primary"
                class="arrows"
              ></ix-icon-button>
            </div>
          </div>

          <div class={{ button: true, hidden: hideIndividual }}>
            <ix-button onClick={() => this.done.emit(this.time.toFormat('TT'))}>
              Done
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
