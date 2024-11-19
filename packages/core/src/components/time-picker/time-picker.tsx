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

interface TimePickerDescriptor {
  unit: 'hour' | 'minute' | 'second';
  placeholder: string;
  hidden: boolean;
}

interface TimeOutputFormat {
  hour: string;
  minute: string;
  second: string;
}

@Component({
  tag: 'ix-time-picker',
  styleUrl: 'time-picker.scss',
  shadow: true,
})
export class TimePicker {
  /**
   * Format of time string
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() format: string = 'TT';

  /**
   * Corner style
   */
  @Prop() corners: TimePickerCorners = 'rounded';

  /**
   * Controls the visual presentation and styling of the component when it is displayed as a standalone element
   */
  @Prop() standaloneAppearance: boolean = true;

  /**
   * @deprecated Not supported since 2.0.0.
   */
  @Prop() individual: boolean = true;

  /**
   * Show hour input
   */
  @Prop() showHour = true;

  /**
   * Show minutes input
   */
  @Prop() showMinutes = true;

  /**
   * Show seconds input
   */
  @Prop() showSeconds = true;

  /**
   * Select time with format string
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() time: string = DateTime.now().toFormat(this.format);

  @Watch('time')
  watchTimePropHandler(newValue: string) {
    this._time = DateTime.fromFormat(newValue, this.format);
    if (!this._time.isValid) {
      throw new Error('Format is not supported or not correct');
    }
  }

  /**
   * Show time reference input
   *
   * @since 1.1.0 time reference is default aligned with format tt
   * @deprecated Since 2.0.0 time reference will be displayed depending on format.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable
  @Prop({ mutable: true }) showTimeReference?: boolean = undefined;

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
   * Text for top label
   *
   * @since 2.1.0
   */
  @Prop() textTime: string = 'Time';

  /**
   * Time event
   */
  @Event() timeSelect!: EventEmitter<string>;

  /**
   * Time event
   * @deprecated Will be removed in 3.0.0. Use `time-select` event.
   */
  @Event() done!: EventEmitter<string>;

  /**
   * Time change event
   */
  @Event() timeChange!: EventEmitter<string>;

  @State() private _time?: DateTime;
  @State() private _timeRef?: 'AM' | 'PM';
  @State() private _formattedTime?: TimeOutputFormat;

  componentWillLoad() {
    this._time = DateTime.fromFormat(this.time, this.format);

    if (!this._time.isValid) {
      console.error(
        `Invalid time format. The configured format does not match the format of the passed time. ${this._time.invalidReason}: ${this._time.invalidExplanation}`
      );
      return;
    }

    this._timeRef = this.format.includes('a')
      ? (DateTime.fromFormat(this.time, this.format).toFormat('a') as
          | 'AM'
          | 'PM')
      : undefined;
    this.formatTime();
  }

  @Watch('_time')
  formatTime() {
    if (!this._time) {
      return;
    }

    const [hour, minute, second] = this._time
      .toFormat(this.format)
      .split(' ')[0]
      .split(':');

    this._formattedTime = {
      hour: hour,
      minute: minute,
      second: second,
    };
  }

  @Watch('_time')
  onInternalTimeChange() {
    this.timeChange.emit(this._time?.toFormat(this.format));
    if (this._timeRef) this._timeRef = this._time?.toFormat('a') as 'AM' | 'PM';
  }

  timeUpdate(unit: 'hour' | 'minute' | 'second', value: number): number {
    let maxValue = DateTime.now().endOf('day').get(unit);

    if (this._timeRef === 'PM' && unit === 'hour') value += 12;
    if (this._timeRef === 'AM' && unit === 'hour') maxValue = 12;

    if (value > maxValue) {
      value = maxValue;
    } else if (value < 0) {
      value = 0;
    }

    this._time = this._time?.set({
      [unit]: value,
    });
    return value;
  }

  changeTimeReference() {
    this._timeRef = this._timeRef === 'AM' ? 'PM' : 'AM';

    if (!this._time?.toFormat('a').includes(this._timeRef)) {
      this._time = this._time?.plus({
        hour: 12,
      });
    }
  }

  /**
   * Get the current time based on the wanted format
   */
  @Method()
  async getCurrentTime() {
    return this._time?.toFormat(this.format);
  }

  render() {
    let timepickerInformation: TimePickerDescriptor[] = [
      {
        unit: 'hour',
        placeholder: 'HH',
        hidden: !this.showHour,
      },
      {
        unit: 'minute',
        placeholder: 'MM',
        hidden: !this.showMinutes,
      },
      {
        unit: 'second',
        placeholder: 'SS',
        hidden: !this.showSeconds,
      },
    ];

    timepickerInformation = timepickerInformation.filter(
      (item) => !item.hidden
    );

    return (
      <Host>
        <ix-date-time-card
          standaloneAppearance={this.standaloneAppearance}
          corners={this.corners}
        >
          <div class="header" slot="header">
            <ix-typography format="h5">{this.textTime || 'Time'}</ix-typography>
          </div>
          <div class="clock">
            {timepickerInformation.map((descriptor, index: number) => (
              <div class="flex">
                <div class={{ columns: true, hidden: descriptor.hidden }}>
                  <ix-icon-button
                    size="16"
                    onClick={() =>
                      (this._time = this._time?.plus({
                        [descriptor.unit]: 1,
                      }))
                    }
                    ghost
                    icon="chevron-up-small"
                    variant="primary"
                    class="arrows"
                  ></ix-icon-button>

                  <input
                    class="form-control"
                    name={descriptor.unit}
                    type="number"
                    placeholder={descriptor.placeholder}
                    value={
                      this._formattedTime
                        ? this._formattedTime[descriptor.unit]
                        : ''
                    }
                    onKeyDown={(e) => {
                      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;

                      const value = e.key === 'ArrowUp' ? 1 : -1;
                      this._time = this._time?.plus({
                        [descriptor.unit]: value,
                      });
                      e.preventDefault();
                    }}
                    onChange={(e: any) => {
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
                      (this._time = this._time?.minus({
                        [descriptor.unit]: 1,
                      }))
                    }
                    ghost
                    icon="chevron-down-small"
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
          <div
            class={{
              button: true,
              hidden: !this.standaloneAppearance,
              standalone: true,
            }}
          >
            <ix-button
              onClick={() => {
                this.timeSelect.emit(this._time?.toFormat(this.format));
                this.done.emit(this._time?.toFormat(this.format));
              }}
            >
              {this.textSelectTime}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
