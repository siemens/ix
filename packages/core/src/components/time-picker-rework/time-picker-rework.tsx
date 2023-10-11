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
  forceUpdate,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import dayjs, { UnitType } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

export type TimePickerCorners = DateTimeCardCorners;

dayjs.extend(customParseFormat);

interface TimePickerDescriptor {
  unit: 'hours' | 'minutes' | 'seconds';
  placeholder: string;
  hidden: boolean;
}

interface TimeOutputFormat {
  hours: string;
  minutes: string;
  seconds: string;
}

/**
 * @internal
 */
@Component({
  tag: 'ix-time-picker-rework',
  styleUrl: 'time-picker-rework.scss',
  shadow: true,
})
export class TimePickerRework {
  /**
   * Format of time string
   *
   * @since 1.1.0
   */
  // @Prop() format: string = 'HH:mm:ss';
  @Prop() format: string = 'HH:mm:ss';

  /**
   * Corner style
   */
  @Prop() corners: TimePickerCorners = 'rounded';

  /**
   * Controls the visual presentation and styling of the component when it is displayed as a standalone element
   */
  @Prop() standaloneAppearance: boolean = true;

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
  @Prop() time: string = dayjs().format(this.format);

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
  @Prop() timeReference: 'AM' | 'PM' | undefined;

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

  @State() private _time: dayjs.Dayjs;
  @State() private _timeRef: 'AM' | 'PM' | undefined;
  @State() private _formattedTime: TimeOutputFormat;

  constructor() {
    this._time = dayjs(this.time, this.format);
    this._timeRef = this.format.includes('h')
      ? (dayjs(this.time, this.format).format('A') as 'AM' | 'PM')
      : undefined;
    this.formatTime();
  }

  @Watch('time')
  onExternalTimeChange() {
    this._time = dayjs(this.time, this.format);
  }

  @Watch('_time')
  formatTime() {
    const [hour, minutes, seconds] = this._time
      .format(this.format)
      .split(' ')[0]
      .split(':');

    this._formattedTime = {
      hours: hour,
      minutes: minutes,
      seconds: seconds,
    };

    forceUpdate(this);
  }

  @Watch('_time')
  onInternalTimeChange() {
    this.timeChange.emit(this._time.format(this.format));
    if (this._timeRef) this._timeRef = this._time.format('A') as 'AM' | 'PM';
  }

  timeUpdate(unit: UnitType, value: number): number {
    let maxValue = dayjs().endOf('day').get(unit);

    if (this._timeRef === 'PM' && unit === 'hours') value += 12;
    if (this._timeRef === 'AM' && unit === 'hours') maxValue = 12;

    if (value > maxValue) {
      value = maxValue;
    } else if (value < 0) {
      value = 0;
    }

    this._time = this._time.set(unit, value);
    return value;
  }

  changeTimeReference() {
    this._timeRef = this._timeRef === 'AM' ? 'PM' : 'AM';

    if (!this._time.format('A').includes(this._timeRef)) {
      this._time = this._time.add(12, 'hour');
    }
  }

  /**
   * Get the current time based on the wanted format
   */
  @Method()
  async getCurrentTime() {
    return this._time.format(this.format);
  }

  render() {
    let timepickerInformation: TimePickerDescriptor[] = [
      {
        unit: 'hours',
        placeholder: 'HH',
        hidden: !this.showHour,
      },
      {
        unit: 'minutes',
        placeholder: 'MM',
        hidden: !this.showMinutes,
      },
      {
        unit: 'seconds',
        placeholder: 'SS',
        hidden: !this.showSeconds,
      },
    ];

    /*
         Check count of hidden elements
         */
    const hiddenCount = timepickerInformation.filter(
      (item) => item.hidden
    ).length;

    /*
         If all hidden, every element getting set to visible,
         otherwise hidden element getting removed
         */
    if (hiddenCount == timepickerInformation.length) {
      timepickerInformation.forEach((info) => {
        info.hidden = false;
      });
    } else {
      timepickerInformation = timepickerInformation.filter(
        (item) => !item.hidden
      );
    }

    return (
      <Host>
        <div class="container">
          <ix-date-time-card
            standaloneAppearance={this.standaloneAppearance}
            corners={this.corners}
          >
            <div class="header" slot="header">
              <ix-typography variant="default-title">Time</ix-typography>
            </div>
            <div class="clock">
              {timepickerInformation.map((descriptor, index: number) => (
                <div class="flex">
                  <div class={{ columns: true, hidden: descriptor.hidden }}>
                    <ix-icon-button
                      size="16"
                      onClick={() =>
                        (this._time = this._time.add(1, descriptor.unit))
                      }
                      ghost
                      icon="chevron-up"
                      variant="primary"
                      class="arrows"
                    ></ix-icon-button>

                    <input
                      class="form-control"
                      name={descriptor.unit}
                      type="number"
                      placeholder={descriptor.placeholder}
                      min="0"
                      max={dayjs().endOf('day').get(descriptor.unit)}
                      value={this._formattedTime[descriptor.unit]}
                      onChange={(e) => {
                        let inputElement = e.target as HTMLInputElement;
                        inputElement.value = this.timeUpdate(
                          descriptor.unit,
                          +inputElement.value
                        ).toString();
                      }}
                    ></input>

                    <ix-icon-button
                      size="16"
                      onClick={() =>
                        (this._time = this._time.subtract(1, descriptor.unit))
                      }
                      ghost
                      icon="chevron-down"
                      variant="primary"
                      class="arrows"
                    ></ix-icon-button>
                  </div>

                  {index !== timepickerInformation.length - 1 && (
                    <div
                      class={{
                        'column-seperator': true,
                        hidden: descriptor.hidden,
                      }}
                    >
                      :
                    </div>
                  )}
                </div>
              ))}

              <div
                class={{
                  columns: true,
                  'default-space': true,
                  hidden: this._timeRef === undefined,
                }}
              >
                <ix-icon-button
                  size="16"
                  onClick={() => this.changeTimeReference()}
                  ghost
                  icon="chevron-up"
                  variant="primary"
                  class="arrows"
                ></ix-icon-button>
                <div class="time-reference">{this._timeRef}</div>
                <ix-icon-button
                  size="16"
                  onClick={() => this.changeTimeReference()}
                  ghost
                  icon="chevron-down"
                  variant="primary"
                  class="arrows"
                ></ix-icon-button>
              </div>
            </div>
            <div class={{ button: true, hidden: !this.standaloneAppearance }}>
              <ix-button
                onClick={() => this.done.emit(this._time.format(this.format))}
              >
                {this.textSelectTime}
              </ix-button>
            </div>
          </ix-date-time-card>
        </div>
      </Host>
    );
  }
}
