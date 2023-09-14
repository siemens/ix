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
} from '@stencil/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

export type TimePickerCorners = DateTimeCardCorners;

dayjs.extend(customParseFormat);

interface TimePickerDescriptor {
  unit: 'hours' | 'minutes' | 'seconds';
  placeholder: string;
  hidden: boolean;
}

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

  /**
   * Set time reference
   */
  @Prop({ mutable: true }) timeReference: 'AM' | 'PM' | undefined =
    this.is12HourFormat()
      ? (dayjs(this.time, this.format).format('A') as 'AM' | 'PM')
      : undefined;

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
  @State() referenceInputRef: HTMLInputElement;
  @State() private _time: dayjs.Dayjs;
  private formatMap: {};

  get hour() {
    return this._time.hour();
  }

  get minutes() {
    return this._time.minute();
  }

  get seconds() {
    return this._time.second();
  }

  get timePeriod() {
    const period = this.is12HourFormat()
      ? (dayjs(this._time, this.format).format('A') as 'AM' | 'PM')
      : undefined;

    return period;
  }

  private modifyInputOnChange(
    currentValue: number,
    inputRef: HTMLInputElement,
    unit: 'hours' | 'minutes' | 'seconds'
  ) {
    const max: number = this.getMaxDisplayedUnit(unit);
    let value = currentValue;
    if (this.timeReference === 'PM' && unit === 'hours') value += 12;

    if (currentValue >= max) value = max;
    if (value < 0) value = 0;

    this._time = this._time.set(unit, value);
    inputRef.value = value.toString();

    this.emitTimeChange();
  }

  private modifyInputOnClick(
    step: 'up' | 'down',
    unit: 'hours' | 'minutes' | 'seconds'
  ) {
    step === 'up'
      ? (this._time = this._time.add(1, unit))
      : (this._time = this._time.subtract(1, unit));

    this.emitTimeChange();
  }

  private changeReference() {
    this.timeReference = this.timeReference === 'AM' ? 'PM' : 'AM';

    if (!this._time.format('A').includes(this.timeReference)) {
      this._time = this._time.add(12, 'hour');
    }

    this.emitTimeChange();
  }

  private emitTimeChange() {
    const time = this._time.format(this.format);
    this.timeChange.emit(time);
  }

  componentWillLoad() {
    this.formatMap = {
      hours: this.is12HourFormat() ? 'h' : 'H',
      minutes: 'm',
      seconds: 's',
    };

    this._time = dayjs(this.time, this.format);
    if (!this._time.isValid()) {
      throw new Error('Format is not supported or not correct');
    }
  }

  /**
   * Get current time
   */
  @Method()
  async getCurrentTime() {
    return this._time.format(this.format);
  }

  private getMaxDisplayedUnit(unit: 'hours' | 'minutes' | 'seconds') {
    return +dayjs().endOf('day').format(this.formatMap[unit]);
  }

  private formatTime(unit: 'hours' | 'minutes' | 'seconds') {
    let formattedTime = this._time.format(this.formatMap[unit]);
    if (+formattedTime < 10) formattedTime = '0' + formattedTime;
    return formattedTime;
  }

  private is12HourFormat() {
    return this.format.includes('h');
  }

  render() {
    const timepickerInformation: TimePickerDescriptor[] = [
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

    const allHidden: boolean = timepickerInformation.every(
      (info) => info.hidden
    );

    if (allHidden) {
      timepickerInformation.forEach((info) => {
        info.hidden = false;
      });
    }

    const sum = +this.showHour + +this.showMinutes + +this.showSeconds;

    return (
      <Host>
        <ix-date-time-card
          individual={this.standaloneAppearance}
          corners={this.corners}
        >
          <div class="header" slot="header">
            <ix-typography variant="default-title">Time</ix-typography>
          </div>
          <div class="clock">
            {timepickerInformation.map((descriptor, index: number) => (
              <div class="time">
                <div class={{ columns: true, hidden: descriptor.hidden }}>
                  <ix-icon-button
                    size="16"
                    onClick={() =>
                      this.modifyInputOnClick('up', descriptor.unit)
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
                    max={this.getMaxDisplayedUnit(descriptor.unit)}
                    value={this.formatTime(descriptor.unit)}
                    onChange={(e) => {
                      let inputElement = e.target as HTMLInputElement;
                      this.modifyInputOnChange(
                        +inputElement.value,
                        inputElement,
                        descriptor.unit
                      );
                    }}
                  ></input>

                  <ix-icon-button
                    size="16"
                    onClick={() =>
                      this.modifyInputOnClick('down', descriptor.unit)
                    }
                    ghost
                    icon="chevron-down"
                    variant="primary"
                    class="arrows"
                  ></ix-icon-button>
                </div>

                {index !== timepickerInformation.length - 1 && sum != 1 && (
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
                hidden: !this.is12HourFormat(),
              }}
            >
              <ix-icon-button
                size="16"
                onClick={() => this.changeReference()}
                ghost
                icon="chevron-up"
                variant="primary"
                class="arrows"
              ></ix-icon-button>
              <div class="time-reference">{this.timePeriod}</div>
              <ix-icon-button
                size="16"
                onClick={() => this.changeReference()}
                ghost
                icon="chevron-down"
                variant="primary"
                class="arrows"
              ></ix-icon-button>
            </div>
          </div>

          <div class={{ button: true, hidden: false }}>
            <ix-button
              onClick={() => this.done.emit(this._time.format(this.format))}
            >
              {this.textSelectTime}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
