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
  hours: /\b[Hh]\b|HH|hh|H{3,4}|h{3,4}|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // m, mm and time formats that include minutes
  minutes: /\bm\b|mm|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // s, ss and time formats that include seconds
  seconds: /\bs\b|ss|tt|ttt|tttt|TT|TTT|TTTT/,
  // S, SSS (milliseconds), u/uu/uuu (fractional seconds), x/X (timestamps)
  milliseconds: /\bS\b|SSS|u|uu|uuu/,
};

const HOUR_INTERVAL_DEFAULT = 1;
const MINUTE_INTERVAL_DEFAULT = 1;
const SECOND_INTERVAL_DEFAULT = 1;
const MILLISECOND_INTERVAL_DEFAULT = 100;

const CONFIRM_BUTTON_DEFAULT = 'Confirm';
const HEADER_DEFAULT = 'Time';

const FORMATTED_TIME_EMPTY: TimeOutputFormat = {
  hour: '',
  minute: '',
  second: '',
  millisecond: '',
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
   * Note: Formats that combine date and time (like f or F) are not supported. Timestamp tokens x and X are not supported either.
   */
  @Prop() format: string = 'TT';
  @Watch('format')
  watchFormatIntervalPropHandler(newValue: string) {
    if (!newValue) {
      return;
    }

    this.initPicker();
    this.updateScrollPositions();
  }

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
   * Hides the header of the picker.
   *
   * @since 3.2.0
   */
  @Prop() hideHeader: boolean = false;

  /**
   * Interval for hour selection
   *
   * @since 3.2.0
   */
  @Prop({ mutable: true }) hourInterval: number = HOUR_INTERVAL_DEFAULT;
  @Watch('hourInterval')
  watchHourIntervalPropHandler(newValue: number) {
    if (
      Number.isInteger(newValue) &&
      newValue >= 0 &&
      newValue <= (this.timeRef ? 12 : 23)
    ) {
      this.setTimePickerDescriptors();
      return;
    }

    this.printIntervalError('hour', newValue);
    this.hourInterval = HOUR_INTERVAL_DEFAULT;
  }

  /**
   * Interval for minute selection
   *
   * @since 3.2.0
   */
  @Prop({ mutable: true }) minuteInterval: number = MINUTE_INTERVAL_DEFAULT;
  @Watch('minuteInterval')
  watchMinuteIntervalPropHandler(newValue: number) {
    if (newValue >= 0 && newValue <= 59) {
      this.setTimePickerDescriptors();
      return;
    }

    this.printIntervalError('minute', newValue);
    this.minuteInterval = MINUTE_INTERVAL_DEFAULT;
  }

  /**
   * Interval for second selection
   *
   * @since 3.2.0
   */
  @Prop({ mutable: true }) secondInterval: number = SECOND_INTERVAL_DEFAULT;
  @Watch('secondInterval')
  watchSecondIntervalPropHandler(newValue: number) {
    if (newValue >= 0 && newValue <= 59) {
      this.setTimePickerDescriptors();
      return;
    }

    this.printIntervalError('second', newValue);
    this.secondInterval = SECOND_INTERVAL_DEFAULT;
  }

  /**
   * Interval for millisecond selection
   *
   * @since 3.2.0
   */
  @Prop({ mutable: true }) millisecondInterval: number =
    MILLISECOND_INTERVAL_DEFAULT;
  @Watch('millisecondInterval')
  watchMillisecondIntervalPropHandler(newValue: number) {
    if (newValue >= 0 && newValue <= 999) {
      this.setTimePickerDescriptors();
      return;
    }

    this.printIntervalError('millisecond', newValue);
    this.millisecondInterval = MILLISECOND_INTERVAL_DEFAULT;
  }

  private printIntervalError(intervalName: string, value: number) {
    console.error(
      `Value ${value} is not valid for ${intervalName}-interval. Falling back to default.`
    );
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

    this._time = timeFormat;
  }

  /**
   * Set time reference
   *
   * @deprecated This is determined by the currently set time. Will be removed in 4.0.0.
   */
  @Prop() timeReference: 'AM' | 'PM' | undefined;

  /**
   * Text of time select button
   *
   * @deprecated Use `i18nConfirmTime` instead. Will be removed in 4.0.0.
   */
  @Prop() textSelectTime = CONFIRM_BUTTON_DEFAULT;

  /**
   * Text of the time confirm button
   */
  @Prop({ attribute: 'i18n-confirm-time' }) i18nConfirmTime =
    CONFIRM_BUTTON_DEFAULT;

  /**
   * Text for top label
   *
   * @deprecated Use `i18nHeader` instead. Will be removed in 4.0.0.
   */
  @Prop() textTime: string = HEADER_DEFAULT;

  /**
   * Text for top header
   */
  @Prop({ attribute: 'i18n-header' }) i18nHeader: string = HEADER_DEFAULT;

  /**
   * Text for hour column header
   */
  @Prop({ attribute: 'i18n-column-header' }) i18nHourColumnHeader: string =
    'hr';

  /**
   * Text for minute column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-minute-column-header' })
  i18nMinuteColumnHeader: string = 'min';

  /**
   * Text for second column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-second-column-header' })
  i18nSecondColumnHeader: string = 'sec';

  /**
   * Text for millisecond column header
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-millisecond-column-header' })
  i18nMillisecondColumnHeader: string = 'ms';

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
    this.setTimeRef();
    this.formattedTime = this.getFormattedTime();

    this.updateScrollPositions(formattedTimeOld);
  }

  @State() private timeRef?: 'AM' | 'PM' | undefined;
  @State() private formattedTime: TimeOutputFormat = FORMATTED_TIME_EMPTY;
  @State() private timePickerDescriptors: TimePickerDescriptor[] = [];
  @State() private isUnitFocused: boolean = false;
  @State() private focusedUnit: TimePickerDescriptorUnit = 'hour';
  @State() private focusedValue: number = 0;

  private visibilityObserver?: MutationObserver;
  private focusScrollAlignment: 'start' | 'end' = 'start';

  componentWillLoad() {
    this.initPicker();
  }

  private initPicker() {
    this._time = DateTime.fromFormat(this.time, this.format);

    if (!this._time.isValid) {
      console.error(
        `Invalid time format. The configured format does not match the format of the passed time. ${this._time.invalidReason}: ${this._time.invalidExplanation}`
      );

      this._time = DateTime.now();
    }

    this.setTimeRef();
    this.setTimePickerDescriptors();
    this.setInitialFocusedValueAndUnit();

    this.watchHourIntervalPropHandler(this.hourInterval);
    this.watchMinuteIntervalPropHandler(this.minuteInterval);
    this.watchSecondIntervalPropHandler(this.secondInterval);
    this.watchMillisecondIntervalPropHandler(this.millisecondInterval);
  }

  componentDidLoad() {
    this.updateScrollPositions();
    this.setupVisibilityObserver();
  }

  componentDidRender() {
    if (this.isUnitFocused) {
      const elementContainer = this.getElementContainer(
        this.focusedUnit,
        this.focusedValue
      );
      const elementList = this.getElementList(this.focusedUnit);

      if (elementContainer) {
        elementContainer.focus({ preventScroll: true });

        if (!this.isElementVisible(elementContainer, elementList)) {
          elementContainer.scrollIntoView({
            block: this.focusScrollAlignment,
          });

          if (this.focusScrollAlignment === 'end') {
            elementList.scrollTop += 3;
          } else {
            elementList.scrollTop -= 3;
          }
        }
      }
    }
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
        // Let tab navigation work normally and reset focused value/unit
        shouldPreventDefault = false;
        this.setInitialFocusedValueAndUnit();
        break;

      case 'ArrowUp':
        newValue -= newValueInterval;
        this.focusScrollAlignment = 'start';
        this.updateFocusedValue(newValue);
        break;

      case 'ArrowDown':
        newValue += newValueInterval;
        this.focusScrollAlignment = 'end';
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

  private getElementList(unit: TimePickerDescriptorUnit): HTMLDivElement {
    return this.hostElement.shadowRoot?.querySelector(
      `[data-element-list-id="${unit}"]`
    ) as HTMLDivElement;
  }

  private getElementContainer(
    unit: TimePickerDescriptorUnit,
    number: number
  ): HTMLDivElement {
    return this.hostElement.shadowRoot?.querySelector(
      `[data-element-container-id="${unit}-${number}"]`
    ) as HTMLDivElement;
  }

  private isElementVisible(
    element: HTMLElement,
    container: HTMLElement
  ): boolean {
    const elementRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return (
      elementRect.top >= containerRect.top &&
      elementRect.bottom <= containerRect.bottom
    );
  }

  private updateFocusedValue(value: number) {
    const numberArray = this.getNumberArrayForUnit(this.focusedUnit);
    const maxValue = numberArray[numberArray.length - 1];
    const minValue = numberArray[0];

    if (value > maxValue) {
      value = minValue;
      this.focusScrollAlignment = 'start';
    } else if (value < minValue) {
      value = maxValue;
      this.focusScrollAlignment = 'end';
    }

    this.focusedValue = value;
  }

  private moveFocusToAdjacentUnit(direction: number) {
    const currentUnitIndex = this.timePickerDescriptors.findIndex(
      (d) => d.unit === this.focusedUnit
    );
    const newUnitIndex = currentUnitIndex + direction;

    // Check if new index is within bounds
    if (newUnitIndex >= 0 && newUnitIndex < this.timePickerDescriptors.length) {
      const newUnit = this.timePickerDescriptors[newUnitIndex].unit;

      const selectedValue = Number(this.formattedTime[newUnit]);

      this.focusedUnit = newUnit;
      this.updateFocusedValue(selectedValue);
    }
  }

  private setInitialFocusedValueAndUnit() {
    const firstVisibleDescriptor = this.timePickerDescriptors.find(
      (descriptor) => !descriptor.hidden
    );
    if (!firstVisibleDescriptor) {
      return;
    }

    const selectedValue = Number(
      this.formattedTime[firstVisibleDescriptor.unit]
    );
    const isValidSelection =
      firstVisibleDescriptor.numberArray.includes(selectedValue);

    this.focusedValue = isValidSelection
      ? selectedValue
      : firstVisibleDescriptor.numberArray[0];

    this.focusedUnit = firstVisibleDescriptor.unit;
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
        continue;
      }

      const dropdown = mutation.target as HTMLElement;

      if (!dropdown.classList.contains('show')) {
        // keep picker in sync with input
        this._time = DateTime.fromFormat(this.time, this.format);
        this.setInitialFocusedValueAndUnit();

        continue;
      }

      const elementsReady = this.areElementsRendered();
      if (!elementsReady) {
        continue;
      }

      this.updateScrollPositions();
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

  private getFormattedTime(): TimeOutputFormat {
    if (!this._time) {
      return FORMATTED_TIME_EMPTY;
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

  private changeTimeReference(newTimeRef: 'AM' | 'PM') {
    if (!this._time) {
      return;
    }

    if (this.timeRef === newTimeRef) {
      return;
    }

    this.timeRef = newTimeRef;
    const currentHour = this._time.hour;

    if (newTimeRef === 'PM' && currentHour < 12) {
      this._time = this._time.plus({ hours: 12 });
    } else if (newTimeRef === 'AM' && currentHour >= 12) {
      this._time = this._time.minus({ hours: 12 });
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

    if (uses12HourFormat && this._time) {
      this.timeRef = this._time!.hour >= 12 ? 'PM' : 'AM';
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
        { length: Math.ceil(12 / this.hourInterval) },
        (_, i) => i * this.hourInterval + 1
      ).filter((hour) => hour <= 12);
    } else {
      hourNumbers = Array.from(
        { length: Math.ceil(24 / this.hourInterval) },
        (_, i) => i * this.hourInterval
      );
    }

    minuteNumbers = Array.from(
      { length: Math.ceil(60 / this.minuteInterval) },
      (_, i) => i * this.minuteInterval
    );
    secondNumbers = Array.from(
      { length: Math.ceil(60 / this.secondInterval) },
      (_, i) => i * this.secondInterval
    );
    millisecondsNumbers = Array.from(
      { length: Math.ceil(1000 / this.millisecondInterval) },
      (_, i) => i * this.millisecondInterval
    );

    this.timePickerDescriptors = [
      {
        unit: 'hour',
        header: this.i18nHourColumnHeader,
        hidden:
          !LUXON_FORMAT_PATTERNS.hours.test(this.format) || !this.showHour,
        numberArray: hourNumbers,
      },
      {
        unit: 'minute',
        header: this.i18nMinuteColumnHeader,
        hidden:
          !LUXON_FORMAT_PATTERNS.minutes.test(this.format) || !this.showMinutes,
        numberArray: minuteNumbers,
      },
      {
        unit: 'second',
        header: this.i18nSecondColumnHeader,
        hidden:
          !LUXON_FORMAT_PATTERNS.seconds.test(this.format) || !this.showSeconds,
        numberArray: secondNumbers,
      },
      {
        unit: 'millisecond',
        header: this.i18nMillisecondColumnHeader,
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
    this.elementListScrollToTop(unit, number, 'smooth');
    this.timeChange.emit(this._time!.toFormat(this.format));
  }

  private elementListScrollToTop(
    unit: TimePickerDescriptorUnit,
    number: number,
    scrollBehaviour: 'smooth' | 'instant'
  ) {
    const elementList = this.getElementList(unit);
    const elementContainer = this.getElementContainer(unit, number);

    if (elementList && elementContainer) {
      const elementListHeight = elementList.clientHeight;
      const elementContainerHeight = elementContainer.clientHeight;

      // Offset which is used to adjust the scroll position to account for margins, elements being hidden, etc.
      let scrollPositionOffset = 15;
      if (this.hideHeader) {
        // 74 --> height of the header container
        scrollPositionOffset -= 74;
      }

      const scrollPosition =
        elementContainer.offsetTop -
        elementListHeight / 2 +
        elementContainerHeight / 2 -
        scrollPositionOffset;

      elementList.scrollTo({
        top: scrollPosition,
        behavior: scrollBehaviour,
      });
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
          Number(this.formattedTime[unitKey]),
          'instant'
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

  private getElementContainerTabIndex(
    number: number,
    descriptorUnit: TimePickerDescriptorUnit
  ): string {
    return number === this.focusedValue && descriptorUnit === this.focusedUnit
      ? '0'
      : '-1';
  }

  private getConfirmButtonText(): string {
    if (this.i18nConfirmTime !== CONFIRM_BUTTON_DEFAULT) {
      return this.i18nConfirmTime;
    }

    if (this.textSelectTime !== CONFIRM_BUTTON_DEFAULT) {
      return this.textSelectTime;
    }

    return this.i18nConfirmTime;
  }

  private getHeaderText(): string {
    if (this.i18nHeader !== HEADER_DEFAULT) {
      return this.i18nHeader;
    }

    if (this.textTime != HEADER_DEFAULT) {
      return this.textTime;
    }

    return this.i18nHeader;
  }

  render() {
    return (
      <Host>
        <ix-date-time-card
          standaloneAppearance={this.standaloneAppearance}
          timePickerAppearance={true}
          corners={this.corners}
          hasFooter={true}
          hideHeader={this.hideHeader}
        >
          <div class="header" slot="header">
            <ix-typography format="h5">{this.getHeaderText()}</ix-typography>
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
                        tabindex={this.getElementContainerTabIndex(
                          number,
                          descriptor.unit
                        )}
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
                  this.timeSelect.emit(this._time?.toFormat(this.format));
                }}
              >
                {this.getConfirmButtonText()}
              </ix-button>
            )}
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
