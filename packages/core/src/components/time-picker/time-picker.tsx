/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

export type TimePickerCorners = DateTimeCardCorners;

@Component({
  tag: 'ix-time-picker',
  styleUrl: 'time-picker.scss',
  shadow: true,
})
export class TimePicker {
  /**
   * Format of time string
   *
   * @since 1.1.0
   */
  @Prop() format: string = 'TT';

  /**
   * Corner style
   */
  @Prop() corners: TimePickerCorners = 'rounded';

  /**
   * @deprecated Will be removed in 2.0.0
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
   * Select time with format string
   *
   * @since 1.1.0
   */
  @Prop() time: string = DateTime.now().toFormat(this.format);

  /**
   * Show time reference input
   *
   * @since 1.1.0 time reference is default aligned with formt tt
   */
  @Prop({ mutable: true }) showTimeReference = undefined;

  @Watch('time')
  watchTimePropHandler(newValue: string) {
    this._time = dayjs(newValue, this.format, true);
    if (!this._time.isValid()) {
      throw new Error('Format is not supported or not correct');
    }
  }

  /**
   * Set time reference
   */
  @Prop({ mutable: true }) timeReference: 'AM' | 'PM' = DateTime.fromFormat(
    this.time,
    this.format
  ).toFormat('a') as 'PM' | 'AM';

  /**
   * Text of date select button
   *
   * @since 1.1.0
   */
  @Prop() textSelectTime = 'Done';

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

  get hour() {
    return this._time.hour;
  }

  get minutes() {
    return this._time.minute;
  }

  get seconds() {
    return this._time.second;
  }

  private _time: DateTime = DateTime.now();

  private setInputValue(
    inputElement: HTMLInputElement,
    value: number,
    max: number
  ) {
    if (value > max) {
      inputElement.value = max.toString();
    } else if (value < 0) {
      inputElement.value = '0';
    } else {
      inputElement.value = value.toString();
    }

    this.updateAndEmitTime();
  }

  private updateAndEmitTime() {
    this._time = this._time.set({
      hour: Number(this.hourInputRef.value),
      minute: Number(this.minuteInputRef.value),
      second: Number(this.secondInputRef.value),
    });

    this.setHourAccordingToReference();

    this.emitTimeChange();
  }

  private toggleInputValue(
    inputElement: HTMLInputElement,
    currentValue: number,
    step: 'up' | 'down',
    max: number
  ) {
    if (step === 'up') {
      if (currentValue === max) {
        inputElement.value = '0';
      } else {
        inputElement.stepUp();
      }
    } else {
      if (currentValue === 0) {
        inputElement.value = max.toString();
      } else {
        inputElement.stepDown();
      }
    }
  }

  private toggleHourInputWithRef(
    inputElement: HTMLInputElement,
    currentValue: number,
    step: 'up' | 'down'
  ) {
    if (step === 'up') {
      if (currentValue === this.getMaxHour()) {
        inputElement.value = '0';
      } else {
        inputElement.stepUp();
      }
    } else {
      if (
        (this.showTimeReference &&
          this.timeReference === 'PM' &&
          currentValue === 12) ||
        currentValue === 0
      ) {
        inputElement.value = this.getMaxDisplayedHour().toString();
      } else {
        inputElement.stepDown();
      }
    }
  }

  private updateInput(
    step: 'up' | 'down',
    { hours = undefined, minutes = undefined, seconds = undefined }
  ) {
    if (hours) {
      if (this.showTimeReference) {
        this.toggleHourInputWithRef(this.hourInputRef, this.hour, step);
      } else {
        this.toggleInputValue(this.hourInputRef, this.hour, step, 23);
      }
    }

    if (minutes) {
      this.toggleInputValue(this.minuteInputRef, this.minutes, step, 59);
    }

    if (seconds) {
      this.toggleInputValue(this.secondInputRef, this.seconds, step, 59);
    }

    this.updateAndEmitTime();
  }

  private changeReference() {
    if (this.timeReference === 'AM') {
      this.timeReference = 'PM';
    } else {
      this.timeReference = 'AM';
    }

    this.setHourAccordingToReference();

    this.emitTimeChange();
  }

  private setHourAccordingToReference() {
    if (!this.showTimeReference) {
      return;
    }

    let hour = Number(this.hourInputRef.value);

    if (this.timeReference === 'PM') hour += 12;

    this._time = this._time.set({ hour });
  }

  private emitTimeChange() {
    const time = this._time.toFormat(this.format);
    this.timeChange.emit(time);
  }

  componentWillLoad() {
    this._time = DateTime.fromFormat(this.time, this.format);
    if (this.showTimeReference === undefined) {
      const matchedKeys = Object.keys(
        DateTime.fromFormatExplain(this.time, this.format).matches
      );
      this.showTimeReference = matchedKeys.includes('a');
    }
  }

  /**
   * Get current time
   */
  @Method()
  async getCurrentTime() {
    return this._time.toFormat(this.format);
  }

  private getDisplayedHour() {
    if (this.showTimeReference && this.timeReference === 'PM') {
      return this._time.hour - 12;
    }

    return this._time.hour;
  }

  private getMaxDisplayedHour() {
    if (this.showTimeReference) {
      return 11;
    }

    return 23;
  }

  private getMaxHour() {
    if (this.showTimeReference && this.timeReference === 'AM') {
      return 11;
    }

    return 23;
  }

  render() {
    let hideHour = !this.showHour;
    let hideMinutes = !this.showMinutes;
    let hideSeconds = !this.showSeconds;
    const hideTimeReference = !this.showTimeReference;
    const hideIndividual = !this.individual;

    if (hideHour && hideMinutes && hideSeconds) {
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
            <ix-typography variant="default-title">Time</ix-typography>
          </div>

          <div class="clock">
            <div class={{ columns: true, hidden: hideHour }}>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('up', { hours: true })}
                ghost
                icon={'chevron-up'}
                variant="primary"
                class="arrows"
              ></ix-icon-button>
              <input
                class="form-control"
                name="hours"
                type="number"
                placeholder="HH"
                min="0"
                max={this.getMaxDisplayedHour()}
                value={this.getDisplayedHour()}
                ref={(ref) => (this.hourInputRef = ref)}
                onChange={() =>
                  this.setInputValue(
                    this.hourInputRef,
                    Number(this.hourInputRef.value),
                    this.getMaxDisplayedHour()
                  )
                }
              ></input>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('down', { hours: true })}
                ghost
                icon={'chevron-down'}
                variant="primary"
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
                icon={'chevron-up'}
                variant="primary"
                class="arrows"
              ></ix-icon-button>
              <input
                class="form-control"
                name="minutes"
                type="number"
                placeholder="MM"
                min="0"
                max="59"
                value={this.minutes}
                ref={(ref) => (this.minuteInputRef = ref)}
                onChange={() =>
                  this.setInputValue(
                    this.minuteInputRef,
                    Number(this.minuteInputRef.value),
                    59
                  )
                }
              ></input>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('down', { minutes: true })}
                ghost
                icon={'chevron-down'}
                variant="primary"
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
                icon={'chevron-up'}
                variant="primary"
                class="arrows"
              ></ix-icon-button>
              <input
                class="form-control"
                name="seconds"
                type="number"
                placeholder="SS"
                min="0"
                max="59"
                value={this.seconds}
                ref={(ref) => (this.secondInputRef = ref)}
                onChange={() =>
                  this.setInputValue(
                    this.secondInputRef,
                    Number(this.secondInputRef.value),
                    59
                  )
                }
              ></input>
              <ix-icon-button
                size="16"
                onClick={() => this.updateInput('down', { seconds: true })}
                ghost
                icon={'chevron-down'}
                variant="primary"
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
                icon={'chevron-up'}
                variant="primary"
                class="arrows"
              ></ix-icon-button>
              <div class="time-reference">{this.timeReference}</div>
              <ix-icon-button
                size="16"
                onClick={() => this.changeReference()}
                ghost
                icon={'chevron-down'}
                variant="primary"
                class="arrows"
              ></ix-icon-button>
            </div>
          </div>
          <div class={{ button: true, hidden: hideIndividual }}>
            <ix-button
              onClick={() => this.done.emit(this._time.toFormat(this.format))}
            >
              {this.textSelectTime}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
