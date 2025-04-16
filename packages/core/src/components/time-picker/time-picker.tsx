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
  Element,
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

type TimePickerDescriptorUnit = 'hour' | 'minute' | 'second' | 'millisecond';

interface TimePickerDescriptor {
  unit: TimePickerDescriptorUnit;
  header: string;
  hidden: boolean;
  numberArray: number[];
}

interface TimeOutputFormat {
  hour: string;
  minute: string;
  second: string;
  millisecond: string;
}

@Component({
  tag: 'ix-time-picker',
  styleUrl: 'time-picker.scss',
  shadow: true,
})
export class TimePicker {
  @Element() hostElement!: HTMLIxTimePickerElement;

  /**
   * Format of time string
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() format: string = 'tt';

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
   * Show milliseconds input
   */
  @Prop() showMilliseconds = true;

  /**
   * Interval for hour selection
   */
  @Prop() hourInterval: number = 1;

  /**
   * Interval for minute selection
   */
  @Prop() minuteInterval: number = 1;

  /**
   * Interval for second selection
   */
  @Prop() secondInterval: number = 1;

  /**
   * Interval for millisecond selection
   */
  @Prop() millisecondInterval: number = 100;

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
  @Prop() textSelectTime = 'Confirm';

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

  /**
   * Get the current time based on the wanted format
   */
  @Method()
  async getCurrentTime() {
    return this._time?.toFormat(this.format);
  }

  @State() private _time?: DateTime;
  @State() private _timeRef?: 'AM' | 'PM' | undefined;
  @State() private _formattedTime!: TimeOutputFormat;
  @State() private _hourNumbers: number[] = [];
  @State() private _minuteNumbers: number[] = [];
  @State() private _secondNumbers: number[] = [];
  @State() private _millisecondsNumbers: number[] = [];

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
    this.generateNumberArrays();
  }

  componentDidLoad() {
    // Scroll to the selected time
    for (const key in this._formattedTime) {
      const unitKey = key as keyof TimeOutputFormat;

      this.elementListScrollToTop(
        unitKey as TimePickerDescriptorUnit,
        Number(this._formattedTime[unitKey])
      );
    }
  }

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
      millisecond: this._time.toFormat('SSS'),
    };
  }

  @Watch('_time')
  onTimeChange() {
    this.formatTime();

    this.timeChange.emit(this._time!.toFormat(this.format));

    if (this._timeRef) {
      this._timeRef = this._time!.toFormat('a') as 'AM' | 'PM';
    }
  }

  timeUpdate(unit: TimePickerDescriptorUnit, value: number): number {
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

  changeTimeReference(timeRef: 'AM' | 'PM') {
    this._timeRef = timeRef;
  }

  private generateNumberArrays() {
    if (this._timeRef !== undefined) {
      this._hourNumbers = Array.from(
        { length: 12 / this.hourInterval },
        (_, i) => i * this.hourInterval + 1
      ).filter((hour) => hour <= 12);

      if (!this._hourNumbers.includes(12)) {
        this._hourNumbers.push(12);
      }
    } else {
      this._hourNumbers = Array.from(
        { length: 24 / this.hourInterval },
        (_, i) => i * this.hourInterval
      );
    }

    this._minuteNumbers = Array.from(
      { length: 60 / this.minuteInterval },
      (_, i) => i * this.minuteInterval
    );
    this._secondNumbers = Array.from(
      { length: 60 / this.secondInterval },
      (_, i) => i * this.secondInterval
    );
    this._millisecondsNumbers = Array.from(
      { length: 1000 / this.millisecondInterval },
      (_, i) => i * this.millisecondInterval
    );
  }

  private isSelected(unit: TimePickerDescriptorUnit, number: number): boolean {
    return this._formattedTime![unit] === String(number);
  }

  private select(unit: TimePickerDescriptorUnit, number: number) {
    this._formattedTime = {
      ...this._formattedTime,
      [unit]: String(number),
    };

    this.timeUpdate(unit, number);
    this.elementListScrollToTop(unit, number);
  }

  private elementListScrollToTop(
    unit: TimePickerDescriptorUnit,
    number: number
  ) {
    const elementList = this.hostElement.shadowRoot?.querySelector(
      `[data-element-list-id="${unit}"]`
    ) as HTMLDivElement;

    const elementContainer = this.hostElement.shadowRoot?.querySelector(
      `[data-element-container-id="${unit}-${number}"]`
    ) as HTMLDivElement;

    if (elementList && elementContainer) {
      const elementListHeight = elementList.clientHeight;
      const elementContainerHeight = elementContainer.clientHeight;

      const scrollPosition =
        elementContainer.offsetTop -
        elementListHeight / 2 +
        elementContainerHeight / 2 -
        77;

      elementList.scrollTop = scrollPosition;
    }
  }

  render() {
    let timepickerInformation: TimePickerDescriptor[] = [
      {
        unit: 'hour',
        header: 'hr',
        hidden: !this.showHour,
        numberArray: this._hourNumbers,
      },
      {
        unit: 'minute',
        header: 'min',
        hidden: !this.showMinutes,
        numberArray: this._minuteNumbers,
      },
      {
        unit: 'second',
        header: 'sec',
        hidden: !this.showSeconds,
        numberArray: this._secondNumbers,
      },
      {
        unit: 'millisecond',
        header: 'ms',
        hidden: !this.showMilliseconds,
        numberArray: this._millisecondsNumbers,
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
                  <div class="column-header">{descriptor.header}</div>
                  <div
                    data-element-list-id={descriptor.unit}
                    class="element-list"
                  >
                    {descriptor.numberArray.map((number) => (
                      <div
                        data-element-container-id={`${descriptor.unit}-${number}`}
                        class={{
                          selected: this.isSelected(descriptor.unit, number),
                          'element-container': true,
                        }}
                        onClick={() => this.select(descriptor.unit, number)}
                      >
                        {descriptor.unit === 'millisecond'
                          ? number.toString().padStart(3, '0')
                          : number < 10
                          ? `0${number}`
                          : number}
                      </div>
                    ))}
                    <div class="element-list-padding"></div>
                  </div>
                </div>

                {index !== timepickerInformation.length - 1 && (
                  <div
                    class={{
                      'column-seperator': true,
                      hidden: descriptor.hidden,
                    }}
                  >
                    {index + 1 < timepickerInformation.length &&
                    timepickerInformation[index + 1].unit === 'millisecond'
                      ? '.'
                      : ':'}
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
              <div class="element-list element-list--time-refs">
                <div
                  class={{
                    'element-container': true,
                    selected: this._timeRef === 'AM',
                  }}
                  onClick={() => this.changeTimeReference('AM')}
                >
                  AM
                </div>
                <div
                  class={{
                    'element-container': true,
                    selected: this._timeRef === 'PM',
                  }}
                  onClick={() => this.changeTimeReference('PM')}
                >
                  PM
                </div>
              </div>
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
