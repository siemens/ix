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
import { OnListener } from '../utils/listener';

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

const LUXON_FORMAT_PATTERNS = {
  hours: /\b[HhK]\b|HH|hh|KK|H{3,4}|h{3,4}|K{1,2}|t|tt|ttt|tttt|T|TT|TTT|TTTT/, // h, hh, H, HH and various time formats that include hours
  minutes: /\bm\b|mm|t|tt|ttt|tttt|T|TT|TTT|TTTT/, // m, mm and time formats that include minutes
  seconds: /\bs\b|ss|t|tt|ttt|tttt|T|TT|TTT|TTTT/, // s, ss and time formats that include seconds
  milliseconds: /\bS\b|SSS|u|uu|uuu|x|X/, // S, SSS (milliseconds), u/uu/uuu (fractional seconds), x/X (timestamps)
};

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
    const timeFormat = DateTime.fromFormat(newValue, this.format);
    if (!timeFormat.isValid) {
      throw new Error('Format is not supported or not correct');
    }

    this._time = DateTime.fromFormat(newValue, this.format);
  }

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
  @Watch('_time')
  onTimeChange() {
    const formattedTimeOld = this.formattedTime;
    this.formattedTime = this.getFormattedTime();

    this.updateScrollPositions(formattedTimeOld);
  }

  @State() private timeRef?: 'AM' | 'PM' | undefined;
  @State() private formattedTime!: TimeOutputFormat;
  @State() private timePickerDescriptors: TimePickerDescriptor[] = [];
  @State() private isUnitFocused: boolean = false;
  @State() private focusedUnit: TimePickerDescriptorUnit = 'hour';
  @State() private focusedValue: number = 0;
  @State() private ampmFocus: 'AM' | 'PM' | undefined;

  private visibilityObserver?: MutationObserver;
  private hasUpdatedScrollPositions = false;

  componentWillLoad() {
    this._time = DateTime.fromFormat(this.time, this.format);

    if (!this._time.isValid) {
      console.error(
        `Invalid time format. The configured format does not match the format of the passed time. ${this._time.invalidReason}: ${this._time.invalidExplanation}`
      );
      return;
    }

    this.setTimeRef();
    this.focusedValue =
      this._time.hour ??
      this._time.minute ??
      this._time.second ??
      this._time.millisecond;
    this.formattedTime = this.getFormattedTime();
    this.setTimePickerDescriptors();
  }

  componentDidLoad() {
    this.updateScrollPositions();
    this.setupVisibilityObserver();
  }

  disconnectedCallback() {
    if (this.visibilityObserver) {
      this.visibilityObserver.disconnect();
      this.visibilityObserver = undefined;
    }
  }

  @OnListener<TimePicker>('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (!this.isUnitFocused && !this.ampmFocus) {
      return;
    }

    let newValue = this.focusedValue;
    let shouldPreventDefault = true;
    const newValueInterval =
      this.focusedUnit === 'hour'
        ? this.hourInterval
        : this.focusedUnit === 'minute'
        ? this.minuteInterval
        : this.focusedUnit === 'second'
        ? this.secondInterval
        : this.millisecondInterval;

    switch (event.key) {
      case 'Tab':
        // Let tab navigation work normally
        shouldPreventDefault = false;
        break;

      case 'ArrowUp':
        if (this.ampmFocus) {
          this.handleAmpmFocus(this.ampmFocus === 'AM' ? 'PM' : 'AM');
          break;
        }

        newValue -= newValueInterval;
        this.updateFocusedValue(newValue);
        break;

      case 'ArrowDown':
        if (this.ampmFocus) {
          this.handleAmpmFocus(this.ampmFocus === 'AM' ? 'PM' : 'AM');
          break;
        }

        newValue += newValueInterval;
        this.updateFocusedValue(newValue);
        break;

      case 'ArrowLeft':
        this.moveFocusToAdjacentUnit(-1);
        break;

      case 'ArrowRight':
        this.moveFocusToAdjacentUnit(1);
        break;

      case 'Enter':
      case ' ':
        if (this.ampmFocus) {
          this.changeTimeReference(this.ampmFocus);
          break;
        }

        this.select(this.focusedUnit, this.focusedValue);
        break;

      default:
        return;
    }

    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }

  onUnitCellBlur() {
    this.isUnitFocused = false;
  }

  onUnitCellFocus() {
    this.isUnitFocused = true;
  }

  private updateFocusedValue(value: number) {
    const numberArray = this.getNumberArrayForUnit(this.focusedUnit);
    const maxValue = numberArray[numberArray.length - 1];
    const minValue = numberArray[0];

    if (value > maxValue) {
      value = minValue;
    } else if (value < minValue) {
      value = maxValue;
    }

    this.focusedValue = value;

    const cellElement = this.hostElement.shadowRoot?.querySelector(
      `[data-element-container-id="${this.focusedUnit}-${value}"]`
    ) as HTMLDivElement;

    if (cellElement) {
      cellElement.setAttribute('tabindex', '0');
      cellElement.focus();
    }
  }

  private moveFocusToAdjacentUnit(direction: number) {
    const currentUnitIndex = this.timePickerDescriptors.findIndex(
      (d) => d.unit === this.focusedUnit
    );
    const newUnitIndex = !this.ampmFocus
      ? currentUnitIndex + direction
      : currentUnitIndex;

    // Check if new index is within bounds
    if (newUnitIndex >= 0 && newUnitIndex < this.timePickerDescriptors.length) {
      const newUnit = this.timePickerDescriptors[newUnitIndex].unit;

      const selectedValue = Number(this.formattedTime[newUnit]);

      this.focusedUnit = newUnit;
      this.updateFocusedValue(selectedValue);
      this.ampmFocus = undefined;
    } else if (
      direction > 0 &&
      this.timeRef !== undefined &&
      newUnitIndex === this.timePickerDescriptors.length
    ) {
      // If moving right and we have AM/PM, focus that
      this.handleAmpmFocus(this.timeRef);
    }
  }

  private handleAmpmFocus(element: 'AM' | 'PM') {
    this.ampmFocus = element;

    const ampmContainer = this.hostElement.shadowRoot?.querySelector(
      `[data-am-pm-id="${element}"]`
    ) as HTMLDivElement;

    if (ampmContainer) {
      ampmContainer.setAttribute('tabindex', '0');
      ampmContainer.focus();
    }
  }

  private setupVisibilityObserver() {
    let dropdownElement: Element | null = this.hostElement;
    while (dropdownElement && dropdownElement.tagName !== 'IX-DROPDOWN') {
      dropdownElement = dropdownElement.parentElement;
    }

    if (!dropdownElement) {
      return;
    }

    this.visibilityObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
          const dropdown = mutation.target as HTMLElement;

          // Check if the dropdown is now visible (has the 'show' class)
          if (dropdown.classList.contains('show')) {
            // Check if elements are fully rendered by looking at their dimensions
            const elementsReady = this.areElementsRendered();

            if (elementsReady && !this.hasUpdatedScrollPositions) {
              this.updateScrollPositions();
              this.hasUpdatedScrollPositions = true;
            }
          } else {
            this.hasUpdatedScrollPositions = false;
          }
        }
      }
    });

    this.visibilityObserver.observe(dropdownElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
  }

  private areElementsRendered(): boolean {
    const elementLists =
      this.hostElement.shadowRoot?.querySelectorAll('.element-list');

    if (!elementLists || elementLists.length === 0) {
      return false;
    }

    return Array.from(elementLists).some(
      (list) => (list as HTMLElement).offsetHeight > 0
    );
  }

  private getFormattedTime(): TimeOutputFormat {
    if (!this._time) {
      return;
    }

    return {
      hour: this._time.toFormat('h'),
      minute: this._time.toFormat('m'),
      second: this._time.toFormat('s'),
      millisecond: this._time.toFormat('S'),
    };
  }

  private timeUpdate(unit: TimePickerDescriptorUnit, value: number): number {
    let maxValue = DateTime.now().endOf('day').get(unit);

    if (this.timeRef === 'PM' && unit === 'hour') value += 12;
    if (this.timeRef === 'AM' && unit === 'hour') maxValue = 12;

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

  private changeTimeReference(timeRef: 'AM' | 'PM') {
    if (!this._time) return;

    const oldTimeRef = this.timeRef;
    this.timeRef = timeRef;

    if (oldTimeRef !== timeRef) {
      const currentHour = this._time.hour;

      if (timeRef === 'PM' && currentHour < 12) {
        this._time = this._time.plus({ hours: 12 });
      } else if (timeRef === 'AM' && currentHour >= 12) {
        this._time = this._time.minus({ hours: 12 });
      }
    }

    this.timeChange.emit(this._time!.toFormat(this.format));
  }

  private isFormat12Hour(format: string): boolean {
    const morningTime = DateTime.fromObject({ hour: 9 });
    const afternoonTime = DateTime.fromObject({ hour: 15 });

    const morningFormatted = morningTime.toFormat(format);
    const afternoonFormatted = afternoonTime.toFormat(format);

    // replace all digits with 'X' to compare the format without the actual numbers
    const hourDigitsOnly = (str: string) => str.replace(/\d+/g, 'X');

    // formatted strings are different --> 12 hour format
    // formatted strings are the same --> 24 hour format
    // if the format contains 't' or 'a' it is also 12 hour format
    return (
      hourDigitsOnly(morningFormatted) !== hourDigitsOnly(afternoonFormatted) ||
      /[ta]/i.test(format)
    );
  }

  private setTimeRef() {
    const uses12HourFormat = this.isFormat12Hour(this.format);

    if (uses12HourFormat) {
      this.timeRef = this._time.hour >= 12 ? 'PM' : 'AM';
    } else {
      this.timeRef = undefined;
    }
  }

  private setTimePickerDescriptors() {
    let hourNumbers = [];
    let minuteNumbers = [];
    let secondNumbers = [];
    let millisecondsNumbers = [];

    if (this.timeRef !== undefined) {
      hourNumbers = Array.from(
        { length: 12 / this.hourInterval },
        (_, i) => i * this.hourInterval + 1
      ).filter((hour) => hour <= 12);

      if (!hourNumbers.includes(12)) {
        hourNumbers.push(12);
      }
    } else {
      hourNumbers = Array.from(
        { length: 24 / this.hourInterval },
        (_, i) => i * this.hourInterval
      );
    }

    minuteNumbers = Array.from(
      { length: 60 / this.minuteInterval },
      (_, i) => i * this.minuteInterval
    );
    secondNumbers = Array.from(
      { length: 60 / this.secondInterval },
      (_, i) => i * this.secondInterval
    );
    millisecondsNumbers = Array.from(
      { length: 1000 / this.millisecondInterval },
      (_, i) => i * this.millisecondInterval
    );

    this.timePickerDescriptors = [
      {
        unit: 'hour',
        header: 'hr',
        hidden: !LUXON_FORMAT_PATTERNS.hours.test(this.format),
        numberArray: hourNumbers,
      },
      {
        unit: 'minute',
        header: 'min',
        hidden: !LUXON_FORMAT_PATTERNS.minutes.test(this.format),
        numberArray: minuteNumbers,
      },
      {
        unit: 'second',
        header: 'sec',
        hidden: !LUXON_FORMAT_PATTERNS.seconds.test(this.format),
        numberArray: secondNumbers,
      },
      {
        unit: 'millisecond',
        header: 'ms',
        hidden: !LUXON_FORMAT_PATTERNS.milliseconds.test(this.format),
        numberArray: millisecondsNumbers,
      },
    ];

    this.timePickerDescriptors = this.timePickerDescriptors.filter(
      (item) => !item.hidden
    );
  }

  private getNumberArrayForUnit(unit: TimePickerDescriptorUnit): number[] {
    const descriptor = this.timePickerDescriptors.find(
      (descriptor) => descriptor.unit === unit
    );
    return descriptor ? descriptor.numberArray : [];
  }

  private isSelected(unit: TimePickerDescriptorUnit, number: number): boolean {
    return this.formattedTime![unit] === String(number);
  }

  private select(unit: TimePickerDescriptorUnit, number: number) {
    this.formattedTime = {
      ...this.formattedTime,
      [unit]: String(number),
    };

    this.timeUpdate(unit, number);
    this.elementListScrollToTop(unit, number);
    this.timeChange.emit(this._time!.toFormat(this.format));
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
        9;

      elementList.scrollTop = scrollPosition;
    }
  }

  /**
   * Updates all scroll positions of the time picker elements
   * Updates only the elements that have changed if `formattedTimeOld` is provided
   */
  private updateScrollPositions(
    formattedTimeOld: TimeOutputFormat | undefined = undefined
  ) {
    for (const key in this.formattedTime) {
      const unitKey = key as keyof TimeOutputFormat;

      if (
        !formattedTimeOld ||
        this.formattedTime[unitKey] !== formattedTimeOld[unitKey]
      ) {
        this.elementListScrollToTop(
          unitKey as TimePickerDescriptorUnit,
          Number(this.formattedTime[unitKey])
        );
      }
    }
  }

  render() {
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
            {this.timePickerDescriptors.map((descriptor, index: number) => (
              <div class="flex">
                <div class={{ columns: true, hidden: descriptor.hidden }}>
                  <div class="column-header">{descriptor.header}</div>
                  <div
                    data-element-list-id={descriptor.unit}
                    class="element-list"
                    tabIndex={-1}
                  >
                    {descriptor.numberArray.map((number) => (
                      <div
                        data-element-container-id={`${descriptor.unit}-${number}`}
                        class={{
                          selected: this.isSelected(descriptor.unit, number),
                          'element-container': true,
                        }}
                        onClick={() => this.select(descriptor.unit, number)}
                        onFocus={() => {
                          this.focusedUnit = descriptor.unit;
                          this.focusedValue = number;
                          this.onUnitCellFocus();
                        }}
                        onBlur={() => this.onUnitCellBlur()}
                        tabindex={
                          number === this.focusedValue &&
                          descriptor.unit === this.focusedUnit
                            ? '0'
                            : '-1'
                        }
                        role="button"
                        aria-label={`${descriptor.header}: ${number}`}
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

                {index !== this.timePickerDescriptors.length - 1 && (
                  <div
                    class={{
                      'column-seperator': true,
                      hidden: descriptor.hidden,
                    }}
                  >
                    {index + 1 < this.timePickerDescriptors.length &&
                    this.timePickerDescriptors[index + 1].unit === 'millisecond'
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
                hidden: this.timeRef === undefined,
              }}
            >
              <div class="element-list element-list--time-refs">
                <div
                  data-am-pm-id="AM"
                  class={{
                    'element-container': true,
                    selected: this.timeRef === 'AM',
                  }}
                  onClick={() => this.changeTimeReference('AM')}
                  tabIndex={this.ampmFocus === 'AM' ? 0 : -1}
                >
                  AM
                </div>
                <div
                  data-am-pm-id="PM"
                  class={{
                    'element-container': true,
                    selected: this.timeRef === 'PM',
                  }}
                  onClick={() => this.changeTimeReference('PM')}
                  tabIndex={this.ampmFocus === 'PM' ? 0 : -1}
                >
                  PM
                </div>
              </div>
            </div>
          </div>
          <div
            class={{
              button: true,
              standalone: true,
            }}
          >
            <ix-button
              onClick={() => {
                this.timeSelect.emit(this._time?.toFormat(this.format));
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
