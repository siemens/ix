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
  // h, hh, H, HH and various time formats that include hours
  hours: /\b[HhK]\b|HH|hh|KK|H{3,4}|h{3,4}|K{1,2}|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // m, mm and time formats that include minutes
  minutes: /\bm\b|mm|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // s, ss and time formats that include seconds
  seconds: /\bs\b|ss|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // S, SSS (milliseconds), u/uu/uuu (fractional seconds), x/X (timestamps)
  milliseconds: /\bS\b|SSS|u|uu|uuu|x|X/,
};

const HOUR_INTERVAL_DEFAULT = 1;
const MINUTE_INTERVAL_DEFAULT = 1;
const SECOND_INTERVAL_DEFAULT = 1;
const MILLISECOND_INTERVAL_DEFAULT = 100;

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
   * @internal Temporary prop needed until datetime-picker is reworked for new design
   */
  @Prop() dateTimePickerAppearance: boolean = false;

  /**
   * Show hour input
   *
   * @deprecated This is now determined by the format that is used. Will be removed in 4.0.0
   */
  @Prop() showHour = true;

  /**
   * Show minutes input
   *
   * @deprecated This is now determined by the format that is used. Will be removed in 4.0.0
   */
  @Prop() showMinutes = true;

  /**
   * Show seconds input
   *
   * @deprecated This is now determined by the format that is used. Will be removed in 4.0.0
   */
  @Prop() showSeconds = true;

  /**
   * Interval for hour selection
   *
   * @since 3.1.0
   */
  @Prop({ mutable: true }) hourInterval: number = HOUR_INTERVAL_DEFAULT;
  @Watch('hourInterval')
  watchHourIntervalPropHandler(newValue: number) {
    if (this.timeRef && newValue >= 0 && newValue <= 12) {
      return;
    }

    if (!this.timeRef && newValue >= 0 && newValue <= 23) {
      return;
    }

    this.hourInterval = HOUR_INTERVAL_DEFAULT;
  }

  /**
   * Interval for minute selection
   *
   * @since 3.1.0
   */
  @Prop({ mutable: true }) minuteInterval: number = MINUTE_INTERVAL_DEFAULT;
  @Watch('minuteInterval')
  watchMinuteIntervalPropHandler(newValue: number) {
    if (newValue >= 0 && newValue <= 59) {
      return;
    }

    this.minuteInterval = MINUTE_INTERVAL_DEFAULT;
  }

  /**
   * Interval for second selection
   *
   * @since 3.1.0
   */
  @Prop({ mutable: true }) secondInterval: number = SECOND_INTERVAL_DEFAULT;
  @Watch('secondInterval')
  watchSecondIntervalPropHandler(newValue: number) {
    if (newValue >= 0 && newValue <= 59) {
      return;
    }

    this.secondInterval = SECOND_INTERVAL_DEFAULT;
  }

  /**
   * Interval for millisecond selection
   *
   * @since 3.1.0
   */
  @Prop({ mutable: true }) millisecondInterval: number =
    MILLISECOND_INTERVAL_DEFAULT;
  @Watch('millisecondInterval')
  watchMillisecondIntervalPropHandler(newValue: number) {
    if (newValue >= 0 && newValue <= 999) {
      return;
    }

    this.millisecondInterval = MILLISECOND_INTERVAL_DEFAULT;
  }

  /**
   * Select time with format string
   * Format has to match the `format` property.
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
   * Set time reference
   *
   * @deprecated This is determined by the currently set time
   */
  @Prop() timeReference: 'AM' | 'PM' | undefined;

  /**
   * Text of time select button
   */
  @Prop() textSelectTime = 'Confirm';

  /**
   * Text for top label
   */
  @Prop() textTime: string = 'Time';

  /**
   * Text for hour column header
   */
  @Prop() textHourColumnHeader: string = 'hr';

  /**
   * Text for minute column header
   */
  @Prop() textMinuteColumnHeader: string = 'min';

  /**
   * Text for second column header
   */
  @Prop() textSecondColumnHeader: string = 'sec';

  /**
   * Text for millisecond column header
   */
  @Prop() textMillisecondColumnHeader: string = 'ms';

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
  @State() private formattedTime?: TimeOutputFormat;
  @State() private timePickerDescriptors: TimePickerDescriptor[] = [];
  @State() private isUnitFocused: boolean = false;
  @State() private focusedUnit: TimePickerDescriptorUnit = 'hour';
  @State() private focusedValue: number = 0;

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

    this.watchHourIntervalPropHandler(this.hourInterval);
    this.watchMinuteIntervalPropHandler(this.minuteInterval);
    this.watchSecondIntervalPropHandler(this.secondInterval);
    this.watchMillisecondIntervalPropHandler(this.millisecondInterval);
  }

  componentDidLoad() {
    this.updateScrollPositions();
    this.setupVisibilityObserver();
  }

  disconnectedCallback() {
    if (this.visibilityObserver) {
      this.visibilityObserver.disconnect();
    }
  }

  @OnListener<TimePicker>('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (!this.isUnitFocused) {
      return;
    }

    let newValue = this.focusedValue;
    let shouldPreventDefault = true;
    let newValueInterval;

    switch (this.focusedUnit) {
      case 'hour':
        newValueInterval = this.hourInterval;
        break;
      case 'minute':
        newValueInterval = this.minuteInterval;
        break;
      case 'second':
        newValueInterval = this.secondInterval;
        break;
      case 'millisecond':
        newValueInterval = this.millisecondInterval;
        break;
    }

    switch (event.key) {
      case 'Tab':
        // Let tab navigation work normally
        shouldPreventDefault = false;
        break;

      case 'ArrowUp':
        newValue -= newValueInterval;
        this.updateFocusedValue(newValue);
        break;

      case 'ArrowDown':
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
    const newUnitIndex = currentUnitIndex + direction;

    // Check if new index is within bounds
    if (newUnitIndex >= 0 && newUnitIndex < this.timePickerDescriptors.length) {
      const newUnit = this.timePickerDescriptors[newUnitIndex].unit;

      const selectedValue = Number(this.formattedTime![newUnit]);

      this.focusedUnit = newUnit;
      this.updateFocusedValue(selectedValue);
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

    this.visibilityObserver = new MutationObserver((mutations) =>
      this.mutationObserverCallback(mutations)
    );

    this.visibilityObserver.observe(dropdownElement, {
      attributes: true,
      attributeFilter: ['class', 'style'],
    });
  }

  private mutationObserverCallback(mutations: MutationRecord[]) {
    for (const mutation of mutations) {
      if (mutation.type !== 'attributes') {
        this.hasUpdatedScrollPositions = false;
        continue;
      }

      const dropdown = mutation.target as HTMLElement;
      if (!dropdown.classList.contains('show')) {
        continue;
      }

      const elementsReady = this.areElementsRendered();
      if (!elementsReady || this.hasUpdatedScrollPositions) {
        continue;
      }

      this.updateScrollPositions();
      this.hasUpdatedScrollPositions = true;
    }
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

  private getFormattedTime(): TimeOutputFormat | undefined {
    if (!this._time) {
      return undefined;
    }

    return {
      hour:
        this.timeRef !== undefined
          ? this._time.toFormat('h')
          : this._time.toFormat('H'),
      minute: this._time.toFormat('m'),
      second: this._time.toFormat('s'),
      millisecond: this._time.toFormat('S'),
    };
  }

  private timeUpdate(unit: TimePickerDescriptorUnit, value: number): number {
    let maxValue = DateTime.now().endOf('day').get(unit);

    if (unit === 'hour') {
      if (this.timeRef === 'PM') {
        // 12 PM should remain 12, other PM hours add 12
        value = value === 12 ? 12 : value + 12;
      } else if (this.timeRef === 'AM') {
        // 12 AM should be 0, other AM hours remain as is
        value = value === 12 ? 0 : value;
        maxValue = 12;
      }
    }

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
    // Remove any text that's inside quotes (literal text in Luxon format strings)
    let cleanFormat = '';
    let inQuote = false;

    for (let i = 0; i < format.length; i++) {
      const char = format[i];
      if (char === "'") {
        inQuote = !inQuote;
      } else if (!inQuote) {
        cleanFormat += char;
      }
    }

    // Check for specific 12-hour format tokens
    // Case-sensitive matching to distinguish between 'h' and 'H'
    return /h|a|t/.test(cleanFormat);
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
        header: this.textHourColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.hours.test(this.format) && this.showHour,
        numberArray: hourNumbers,
      },
      {
        unit: 'minute',
        header: this.textMinuteColumnHeader,
        hidden:
          !LUXON_FORMAT_PATTERNS.minutes.test(this.format) && this.showMinutes,
        numberArray: minuteNumbers,
      },
      {
        unit: 'second',
        header: this.textSecondColumnHeader,
        hidden:
          !LUXON_FORMAT_PATTERNS.seconds.test(this.format) && this.showSeconds,
        numberArray: secondNumbers,
      },
      {
        unit: 'millisecond',
        header: this.textMillisecondColumnHeader,
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
      ...this.formattedTime!,
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
        13;

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

  private formatUnitValue(
    unit: TimePickerDescriptorUnit,
    value: number
  ): string {
    if (unit === 'millisecond') {
      return value.toString().padStart(3, '0');
    }

    return value < 10 ? `0${value}` : value.toString();
  }

  private getColumnSeparator(currentIndex: number): string {
    if (currentIndex + 1 < this.timePickerDescriptors.length) {
      const nextUnit = this.timePickerDescriptors[currentIndex + 1].unit;
      return nextUnit === 'millisecond' ? '.' : ':';
    }

    return ':';
  }

  render() {
    return (
      <Host>
        <ix-date-time-card
          standaloneAppearance={this.standaloneAppearance}
          corners={this.corners}
          hasFooter={true}
        >
          <div class="header" slot="header">
            <ix-typography format="h5">{this.textTime || 'Time'}</ix-typography>
          </div>
          <div class="clock">
            {this.timePickerDescriptors.map((descriptor, index: number) => (
              <div class="flex">
                <div class={{ columns: true, hidden: descriptor.hidden }}>
                  <div class="column-header" title={descriptor.header}>
                    {descriptor.header}
                  </div>
                  <div
                    data-element-list-id={descriptor.unit}
                    class="element-list"
                    tabIndex={-1}
                  >
                    {descriptor.numberArray.map((number) => (
                      <button
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
                        {this.formatUnitValue(descriptor.unit, number)}
                      </button>
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
                    {this.getColumnSeparator(index)}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            class={{
              footer: true,
              'footer--compact': this.timePickerDescriptors.length <= 2,
            }}
            slot="footer"
          >
            {this.timeRef && (
              <div
                class={{
                  'time-ref-buttons': true,
                  'time-ref-buttons--datetime-picker-appearance':
                    this.dateTimePickerAppearance,
                }}
              >
                <button
                  data-am-pm-id="AM"
                  class={{ selected: this.timeRef === 'AM' }}
                  onClick={() => this.changeTimeReference('AM')}
                >
                  AM
                </button>
                <button
                  data-am-pm-id="PM"
                  class={{ selected: this.timeRef === 'PM' }}
                  onClick={() => this.changeTimeReference('PM')}
                >
                  PM
                </button>
              </div>
            )}
            {!this.dateTimePickerAppearance && (
              <ix-button
                class="confirm-button"
                onClick={() => {
                  console.log(this._time?.toFormat(this.format));
                  this.timeSelect.emit(this._time?.toFormat(this.format));
                }}
              >
                {this.textSelectTime}
              </ix-button>
            )}
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
