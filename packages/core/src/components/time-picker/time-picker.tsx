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
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { DefaultMixins } from '../utils/internal/component';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
import { OnListener } from '../utils/listener';
import { closestPassShadow } from '../utils/shadow-dom';
import { buildTimePickerColumnNumberArrays } from './time-picker-column-values';
import { computeTimeWithRawUnitValue } from './time-picker-compute-time';
import {
  getTimePickerConstraintBounds,
  hasActiveTimePickerConstraints,
  isWithinTimePickerConstraints,
  timeOfDayRangeIntersectsInclusiveBounds,
} from './time-picker-constraints';
import {
  formatTimePickerUnitValue,
  getTimePickerColumnSeparator,
} from './time-picker-display';
import { isFormat12Hour, LUXON_FORMAT_PATTERNS } from './time-picker-format';
import { isSelectableForUnitWithinBounds } from './time-picker-range';
import { findNextSelectableRingValue } from './time-picker-step-focus';
import type {
  TimePickerCorners,
  TimePickerDescriptorUnit,
} from './time-picker.types';

interface TimePickerDescriptor {
  unit: TimePickerDescriptorUnit;
  header: string;
  hidden: boolean;
  numberArray: number[];
  focusedValue: number;
}

interface TimeOutputFormat {
  hour: string;
  minute: string;
  second: string;
  millisecond: string;
}

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
  shadow: {
    delegatesFocus: true,
  },
})
export class TimePicker extends Mixin(...DefaultMixins) {
  @Element() override hostElement!: HTMLIxTimePickerElement;

  /**
   * Format of time string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
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
   * Corner style.
   */
  @Prop() corners: TimePickerCorners = 'rounded';

  /**
   * Embedded style (for use in other components).
   */
  @Prop() embedded = false;

  /**
   * @internal Temporary prop needed until datetime-picker is reworked for new design.
   */
  @Prop() dateTimePickerAppearance: boolean = false;

  /**
   * Hides the header of the picker.
   *
   * @since 3.2.0
   */
  @Prop() hideHeader: boolean = false;

  /**
   * Interval for hour selection.
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
   * Interval for minute selection.
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
   * Interval for second selection.
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
   * Interval for millisecond selection.
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

  private warnIfConstraintTimeInvalid(
    prop: 'minTime' | 'maxTime',
    value: string | undefined,
    omitUnparsableWarning?: boolean
  ): void {
    const trimmed = value?.trim();
    if (!trimmed) {
      return;
    }
    const parsed = DateTime.fromFormat(trimmed, this.format);
    if (parsed.isValid) {
      return;
    }
    if (omitUnparsableWarning) {
      return;
    }
    const detail = [parsed.invalidReason, parsed.invalidExplanation]
      .filter(Boolean)
      .join(': ');
    console.warn(
      `[ix-time-picker] ${prop}="${trimmed}" does not match format "${this.format}". ` +
        'The constraint is ignored until the value matches `format`.' +
        (detail ? ` (${detail})` : '')
    );
  }

  private warnIfConstraintRangeInverted(
    minValue: string | undefined,
    maxValue: string | undefined
  ): void {
    const minTrimmed = minValue?.trim();
    const maxTrimmed = maxValue?.trim();

    if (!minTrimmed || !maxTrimmed) {
      return;
    }

    const minParsed = DateTime.fromFormat(minTrimmed, this.format);
    const maxParsed = DateTime.fromFormat(maxTrimmed, this.format);

    if (!minParsed.isValid || !maxParsed.isValid) {
      return;
    }

    if (minParsed > maxParsed) {
      console.warn(
        `[ix-time-picker] minTime="${minTrimmed}" is later than maxTime="${maxTrimmed}" for format "${this.format}". ` +
          'Both constraints are ignored.'
      );
    }
  }

  private warnConstraintTimesIfInvalid(options?: {
    omitUnparsableConstraintWarnings?: boolean;
  }): void {
    const omit = options?.omitUnparsableConstraintWarnings ?? false;
    this.warnIfConstraintTimeInvalid('minTime', this.minTime, omit);
    this.warnIfConstraintTimeInvalid('maxTime', this.maxTime, omit);
    this.warnIfConstraintRangeInverted(this.minTime, this.maxTime);
  }

  /**
   * Selected time value.
   * Format has to match the `format` property.
   */
  @Prop() time?: string;

  @Watch('time')
  watchTimePropHandler(newValue: string) {
    const timeFormat = DateTime.fromFormat(newValue, this.format);
    if (!timeFormat.isValid) {
      throw new Error('Format is not supported or not correct');
    }

    this._time = timeFormat;
  }

  /** Earliest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0 */
  @Prop() minTime?: string;

  /** Latest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0 */
  @Prop() maxTime?: string;

  @Watch('minTime')
  watchMinTimePropHandler() {
    this.warnConstraintTimesIfInvalid();
    this.syncKeyboardFocusWithConstraints();
  }

  @Watch('maxTime')
  watchMaxTimePropHandler() {
    this.warnConstraintTimesIfInvalid();
    this.syncKeyboardFocusWithConstraints();
  }

  /**
   * Get default time value
   * @returns DateTime.now() for empty state (no selection)
   */
  private getDefaultTime(): DateTime | undefined {
    return DateTime.now();
  }

  /**
   * Text of the time confirm button.
   */
  @Prop({ attribute: 'i18n-confirm-time' }) i18nConfirmTime =
    CONFIRM_BUTTON_DEFAULT;

  /**
   * Text for the top header.
   */
  @Prop({ attribute: 'i18n-header' }) i18nHeader: string = HEADER_DEFAULT;

  /**
   * Text for the hour column header.
   */
  @Prop({ attribute: 'i18n-hour-column-header' }) i18nHourColumnHeader: string =
    'hr';

  /**
   * Text for the minute column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-minute-column-header' })
  i18nMinuteColumnHeader: string = 'min';

  /**
   * Text for the second column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-second-column-header' })
  i18nSecondColumnHeader: string = 'sec';

  /**
   * Text for the millisecond column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-millisecond-column-header' })
  i18nMillisecondColumnHeader: string = 'ms';

  /**
   * Time event. Emitted when the user confirms the selected time.
   */
  @Event() timeSelect!: EventEmitter<string>;

  /**
   * Time change event. Emitted when the selected time changes while interacting with the picker.
   */
  @Event() timeChange!: EventEmitter<string>;

  /**
   * Get the current time based on the wanted format
   */
  @Method()
  async getCurrentTime(): Promise<string | undefined> {
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

  override componentWillLoad() {
    this.initPicker();
  }

  private initPicker() {
    let parsedTime: DateTime | undefined;
    let timePropDoesNotMatchFormat = false;

    if (this.time) {
      parsedTime = DateTime.fromFormat(this.time, this.format);

      if (!parsedTime.isValid) {
        timePropDoesNotMatchFormat = true;
        console.error(
          `Invalid time format. The configured format does not match the format of the passed time. ${parsedTime.invalidReason}: ${parsedTime.invalidExplanation}`
        );
        parsedTime = this.getDefaultTime();
      }
    } else {
      parsedTime = this.getDefaultTime();
    }

    this._time = parsedTime;

    this.setTimeRef();
    this.formattedTime = this.getFormattedTime();
    this.setTimePickerDescriptors();
    this.setInitialFocusedValueAndUnit();

    this.watchHourIntervalPropHandler(this.hourInterval);
    this.watchMinuteIntervalPropHandler(this.minuteInterval);
    this.watchSecondIntervalPropHandler(this.secondInterval);
    this.watchMillisecondIntervalPropHandler(this.millisecondInterval);

    this.warnConstraintTimesIfInvalid({
      omitUnparsableConstraintWarnings: timePropDoesNotMatchFormat,
    });
  }

  override componentDidLoad() {
    super.componentDidLoad?.();
    this.updateScrollPositions();
    this.setupVisibilityObserver();
  }

  override componentDidRender() {
    if (!this.isUnitFocused) {
      return;
    }
    const elementContainer = this.getElementContainer(
      this.focusedUnit,
      this.focusedValue
    );
    const elementList = this.getElementList(this.focusedUnit);

    if (!elementContainer) {
      return;
    }

    if (hasKeyboardMode()) {
      const active = this.hostElement.shadowRoot?.activeElement;
      if (active !== elementContainer) {
        elementContainer.focus({ preventScroll: true });
      }
    }

    if (!this.isElementVisible(elementContainer, elementList)) {
      this.scrollElementIntoView(
        elementContainer,
        elementList,
        this.focusScrollAlignment
      );
    }
  }

  override disconnectedCallback() {
    if (this.visibilityObserver) {
      this.visibilityObserver.disconnect();
    }
  }

  @OnListener<TimePicker>('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (!this.isUnitFocused) {
      return;
    }

    let shouldPreventDefault = true;

    switch (event.key) {
      case 'Tab':
        shouldPreventDefault = false;
        this.isUnitFocused = false;
        break;

      case 'ArrowUp':
        this.focusScrollAlignment = 'start';
        this.stepFocusedValue(-1);
        break;

      case 'ArrowDown':
        this.focusScrollAlignment = 'end';
        this.stepFocusedValue(1);
        break;

      case 'Enter':
      case ' ': {
        const { bounds } = this.getUnitSelectionContext();
        const base = this.buildCandidateBaseBeforeUnit(this.focusedUnit);
        if (
          this.canSelectUnitValue(
            this.focusedUnit,
            this.focusedValue,
            bounds,
            base
          )
        ) {
          this.select(this.focusedUnit, this.focusedValue);
        }
        break;
      }

      default:
        return;
    }

    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }

  onUnitCellBlur(unit: TimePickerDescriptorUnit, event: FocusEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement | null;
    const relatedUnit =
      relatedTarget?.dataset?.elementContainerId?.split('-')[0];
    const movingWithinSameColumn = relatedUnit === unit;

    // Check if column lost focus to scroll back to selected value
    if (relatedTarget && !movingWithinSameColumn) {
      if (relatedUnit !== unit) {
        this.elementListScrollToTop(
          unit,
          Number(this.formattedTime[unit]),
          'smooth'
        );
      }
    }

    // Still within this column (e.g. roving focus between cells)
    if (movingWithinSameColumn) {
      return;
    }

    this.isUnitFocused = false;
    const focusedValue = this.resolvePreservedFocusedValueOnColumnBlur(unit);
    this.focusedValue = focusedValue;
    this.updateDescriptorFocusedValue(unit, focusedValue);
  }

  onUnitCellFocus(unit: TimePickerDescriptorUnit, value: number) {
    this.isUnitFocused = true;
    this.focusedUnit = unit;
    this.focusedValue = value;

    this.updateDescriptorFocusedValue(unit, value);
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

  private scrollElementIntoView(
    element: HTMLElement,
    container: HTMLElement,
    alignment: 'start' | 'end'
  ) {
    const SCROLL_BUFFER = 1;
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    if (alignment === 'end') {
      container.scrollTop +=
        elementRect.bottom - containerRect.bottom + SCROLL_BUFFER;
    } else {
      container.scrollTop +=
        elementRect.top - containerRect.top - SCROLL_BUFFER;
    }
  }

  private setInitialFocusedValueAndUnit() {
    const firstVisibleDescriptor = this.timePickerDescriptors.find(
      (descriptor) => !descriptor.hidden
    );
    if (!firstVisibleDescriptor) {
      return;
    }

    this.focusedValue = this.getConstrainedFocusedValueForUnit(
      firstVisibleDescriptor.unit,
      firstVisibleDescriptor.numberArray
    );
    this.focusedUnit = firstVisibleDescriptor.unit;
  }

  private setupVisibilityObserver() {
    const dropdown = closestPassShadow(this.hostElement, 'ix-dropdown');
    if (!dropdown) {
      return;
    }

    this.visibilityObserver = new MutationObserver((mutations) =>
      this.mutationObserverCallback(mutations)
    );

    this.visibilityObserver.observe(dropdown, {
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
        if (this.time) {
          const timeFormat = DateTime.fromFormat(this.time, this.format);
          if (timeFormat.isValid) {
            this._time = DateTime.fromFormat(this.time, this.format);
            this.setInitialFocusedValueAndUnit();
          }
        }

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

  private changeTimeReference(newTimeRef: 'AM' | 'PM') {
    if (this.timeRef === newTimeRef) {
      return;
    }

    if (!this._time) {
      this._time = DateTime.now().startOf('day');
    }

    const previousTime = this._time;
    const previousRef = this.timeRef;

    this.timeRef = newTimeRef;
    const currentHour = this._time.hour;

    if (newTimeRef === 'PM' && currentHour < 12) {
      this._time = this._time.plus({ hours: 12 });
    } else if (newTimeRef === 'AM' && currentHour >= 12) {
      this._time = this._time.minus({ hours: 12 });
    }

    if (!this.isWithinTimeConstraints(this._time)) {
      this._time = previousTime;
      this.timeRef = previousRef;
      return;
    }

    this.timeChange.emit(this._time.toFormat(this.format));
  }

  /** `_time` or “now” (constraints, AM/PM, confirm). */
  private referenceOrNow(): DateTime {
    return this._time ?? DateTime.now();
  }

  private setTimeRef() {
    const uses12HourFormat = isFormat12Hour(this.format);

    if (!uses12HourFormat) {
      this.timeRef = undefined;
      return;
    }

    const clock = this.referenceOrNow();
    this.timeRef = clock.hour >= 12 ? 'PM' : 'AM';
  }

  private getConstraintBounds(referenceClock?: DateTime): {
    min: DateTime | null;
    max: DateTime | null;
  } {
    const baseDay = (referenceClock ?? this.referenceOrNow()).startOf('day');
    return getTimePickerConstraintBounds(
      this.minTime,
      this.maxTime,
      this.format,
      baseDay
    );
  }

  /** Bounds and `selectionBase` from {@link referenceOrNow}. */
  private getUnitSelectionContext(): {
    bounds: { min: DateTime | null; max: DateTime | null };
    selectionBase: DateTime;
  } {
    const referenceClock = this.referenceOrNow();
    return {
      bounds: this.getConstraintBounds(referenceClock),
      selectionBase: this._time ?? referenceClock.startOf('day'),
    };
  }

  private isWithinTimeConstraints(candidate: DateTime): boolean {
    const { min, max } = this.getConstraintBounds();
    return isWithinTimePickerConstraints(candidate, min, max);
  }

  private canSelectUnitValue(
    unit: TimePickerDescriptorUnit,
    rawValue: number,
    bounds?: { min: DateTime | null; max: DateTime | null },
    selectionBase?: DateTime
  ): boolean {
    const base = selectionBase ?? this._time ?? DateTime.now().startOf('day');
    const effectiveBounds = bounds ?? this.getConstraintBounds();

    if (
      unit === 'hour' &&
      hasActiveTimePickerConstraints(effectiveBounds.min, effectiveBounds.max)
    ) {
      const dayStart = base.startOf('day');
      const hourStart = computeTimeWithRawUnitValue(
        dayStart,
        'hour',
        rawValue,
        this.timeRef
      );
      if (!hourStart) {
        return false;
      }
      const hourEnd = hourStart.set({
        minute: 59,
        second: 59,
        millisecond: 999,
      });
      return timeOfDayRangeIntersectsInclusiveBounds(
        hourStart,
        hourEnd,
        effectiveBounds.min,
        effectiveBounds.max
      );
    }

    const candidate = computeTimeWithRawUnitValue(
      base,
      unit,
      rawValue,
      this.timeRef
    );
    if (!candidate) {
      return false;
    }
    if (bounds) {
      return this.isSelectableForUnitWithinBounds(unit, candidate, bounds);
    }
    return this.isWithinTimeConstraints(candidate);
  }

  private isSelectableForUnitWithinBounds(
    unit: TimePickerDescriptorUnit,
    candidate: DateTime,
    bounds: { min: DateTime | null; max: DateTime | null }
  ): boolean {
    return isSelectableForUnitWithinBounds(unit, candidate, bounds);
  }

  /** Provisional `unit` for cross-column base: roving cell, earlier descriptors, else displayed digits. */
  private getProvisionalRawValue(unit: TimePickerDescriptorUnit): number {
    if (this.focusedUnit === unit) {
      return this.focusedValue;
    }
    const order = this.timePickerDescriptors.map((d) => d.unit);
    const iFocused = order.indexOf(this.focusedUnit);
    const iUnit = order.indexOf(unit);
    if (iUnit !== -1 && iFocused !== -1 && iUnit < iFocused) {
      const d = this.timePickerDescriptors.find((x) => x.unit === unit);
      if (d) {
        return d.focusedValue;
      }
    }
    const raw = this.formattedTime?.[unit];
    if (raw === '' || raw === undefined) {
      return 0;
    }
    return Number(raw);
  }

  /** Base time for `canSelect`/`select` on `targetUnit`: committed hour; mid-columns via {@link getProvisionalRawValue}. */
  private buildCandidateBaseBeforeUnit(
    targetUnit: TimePickerDescriptorUnit
  ): DateTime {
    const { selectionBase } = this.getUnitSelectionContext();
    const order = this.timePickerDescriptors.map((d) => d.unit);
    const targetIndex = order.indexOf(targetUnit);

    if (targetIndex <= 0) {
      return selectionBase;
    }

    let base = this._time ?? selectionBase;

    for (let i = 1; i < targetIndex; i++) {
      const unit = order[i];
      if (unit === undefined) {
        continue;
      }
      const raw = this.getProvisionalRawValue(unit);
      const next = computeTimeWithRawUnitValue(base, unit, raw, this.timeRef);
      if (next) {
        base = next;
      }
    }

    return base;
  }

  private getConstrainedFocusedValueForUnitWithBase(
    unit: TimePickerDescriptorUnit,
    numberArray: number[],
    baseBeforeUnit: DateTime
  ): number {
    const { bounds } = this.getUnitSelectionContext();
    const pickFirstSelectable = (): number | null => {
      const found = numberArray.find((n) =>
        this.canSelectUnitValue(unit, n, bounds, baseBeforeUnit)
      );
      return found ?? null;
    };

    const selected = Number(this.formattedTime[unit]);
    if (!numberArray.includes(selected)) {
      return pickFirstSelectable() ?? numberArray[0];
    }
    if (this.canSelectUnitValue(unit, selected, bounds, baseBeforeUnit)) {
      return selected;
    }
    return pickFirstSelectable() ?? numberArray[0];
  }

  private getConstrainedFocusedValueForUnit(
    unit: TimePickerDescriptorUnit,
    numberArray: number[]
  ): number {
    return this.getConstrainedFocusedValueForUnitWithBase(
      unit,
      numberArray,
      this.buildCandidateBaseBeforeUnit(unit)
    );
  }

  private resolvePreservedFocusedValueOnColumnBlur(
    unit: TimePickerDescriptorUnit
  ): number {
    const arr = this.getNumberArrayForUnit(unit);
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const current = this.focusedValue;
    if (
      arr.includes(current) &&
      this.canSelectUnitValue(unit, current, bounds, base)
    ) {
      return current;
    }
    return this.getConstrainedFocusedValueForUnit(unit, arr);
  }

  private syncKeyboardFocusWithConstraints(): void {
    if (!this.timePickerDescriptors.length) {
      return;
    }
    for (const d of this.timePickerDescriptors) {
      const next = this.getConstrainedFocusedValueForUnit(
        d.unit,
        d.numberArray
      );
      if (next !== d.focusedValue) {
        this.updateDescriptorFocusedValue(d.unit, next);
      }
    }
    const arr = this.getNumberArrayForUnit(this.focusedUnit);
    if (arr.length) {
      const nextFocused = this.getConstrainedFocusedValueForUnit(
        this.focusedUnit,
        arr
      );
      if (nextFocused !== this.focusedValue) {
        this.focusedValue = nextFocused;
      }
    }
  }

  private findFirstSelectableInUnit(
    unit: TimePickerDescriptorUnit
  ): number | null {
    const arr = this.getNumberArrayForUnit(unit);
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const found = arr.find((n) =>
      this.canSelectUnitValue(unit, n, bounds, base)
    );
    return found ?? null;
  }

  private getColumnTabStopValue(unit: TimePickerDescriptorUnit): number | null {
    const d = this.timePickerDescriptors.find((x) => x.unit === unit);
    const arr = d?.numberArray ?? [];
    if (!d || !arr.length) {
      return null;
    }
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const candidate = d.focusedValue;
    if (
      arr.includes(candidate) &&
      this.canSelectUnitValue(unit, candidate, bounds, base)
    ) {
      return candidate;
    }
    return this.findFirstSelectableInUnit(unit);
  }

  private stepFocusedValue(direction: 1 | -1) {
    const unit = this.focusedUnit;
    const arr = this.getNumberArrayForUnit(unit);
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const next = findNextSelectableRingValue(
      arr,
      this.focusedValue,
      direction,
      (candidate) => this.canSelectUnitValue(unit, candidate, bounds, base)
    );
    if (next === null) {
      return;
    }
    this.focusedValue = next;
    this.updateDescriptorFocusedValue(unit, next);
  }

  private isConfirmDisabled(): boolean {
    const referenceClock = this.referenceOrNow();
    const { min, max } = this.getConstraintBounds(referenceClock);
    if (!hasActiveTimePickerConstraints(min, max)) {
      return false;
    }
    return !isWithinTimePickerConstraints(referenceClock, min, max);
  }

  private setTimePickerDescriptors() {
    const { hourNumbers, minuteNumbers, secondNumbers, millisecondsNumbers } =
      buildTimePickerColumnNumberArrays(
        {
          hourInterval: this.hourInterval,
          minuteInterval: this.minuteInterval,
          secondInterval: this.secondInterval,
          millisecondInterval: this.millisecondInterval,
        },
        this.timeRef
      );

    const { selectionBase } = this.getUnitSelectionContext();

    const columns: {
      unit: TimePickerDescriptorUnit;
      header: string;
      hidden: boolean;
      numberArray: number[];
    }[] = [
      {
        unit: 'hour',
        header: this.i18nHourColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.hours.test(this.format),
        numberArray: hourNumbers,
      },
      {
        unit: 'minute',
        header: this.i18nMinuteColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.minutes.test(this.format),
        numberArray: minuteNumbers,
      },
      {
        unit: 'second',
        header: this.i18nSecondColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.seconds.test(this.format),
        numberArray: secondNumbers,
      },
      {
        unit: 'millisecond',
        header: this.i18nMillisecondColumnHeader,
        hidden: !LUXON_FORMAT_PATTERNS.milliseconds.test(this.format),
        numberArray: millisecondsNumbers,
      },
    ];

    let base = selectionBase;
    const descriptors: TimePickerDescriptor[] = [];

    for (const col of columns) {
      if (col.hidden) {
        continue;
      }
      const focusedValue = this.getConstrainedFocusedValueForUnitWithBase(
        col.unit,
        col.numberArray,
        base
      );
      descriptors.push({
        unit: col.unit,
        header: col.header,
        hidden: false,
        numberArray: col.numberArray,
        focusedValue,
      });
      const next = computeTimeWithRawUnitValue(
        base,
        col.unit,
        focusedValue,
        this.timeRef
      );
      if (next) {
        base = next;
      }
    }

    this.timePickerDescriptors = descriptors;
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

  /** Roving tabindex: one tab stop per column; active column only the focused cell has `tabindex=0`. */
  private getUnitCellTabIndex(
    unit: TimePickerDescriptorUnit,
    number: number
  ): number {
    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    const cellIsSelectable = this.canSelectUnitValue(
      unit,
      number,
      bounds,
      base
    );

    if (!cellIsSelectable) {
      return -1;
    }

    if (this.isUnitFocused && this.focusedUnit === unit) {
      return this.focusedValue === number ? 0 : -1;
    }

    const stop = this.getColumnTabStopValue(unit);
    if (stop === null) {
      return -1;
    }
    return stop === number ? 0 : -1;
  }

  private select(unit: TimePickerDescriptorUnit, number: number) {
    if (this.isSelected(unit, number)) {
      return;
    }

    const { bounds } = this.getUnitSelectionContext();
    const base = this.buildCandidateBaseBeforeUnit(unit);
    if (!this.canSelectUnitValue(unit, number, bounds, base)) {
      return;
    }

    const candidate = computeTimeWithRawUnitValue(
      base,
      unit,
      number,
      this.timeRef
    );
    if (!candidate) {
      return;
    }
    if (this._time && candidate.toMillis() === this._time.toMillis()) {
      return;
    }

    this._time = candidate;
    this.elementListScrollToTop(unit, number, 'smooth');
    this.timeChange.emit(this._time.toFormat(this.format));
  }

  private updateDescriptorFocusedValue(
    unit: TimePickerDescriptorUnit,
    value: number
  ) {
    const descriptorIndex = this.timePickerDescriptors.findIndex(
      (d) => d.unit === unit
    );
    if (descriptorIndex !== -1) {
      this.timePickerDescriptors = [
        ...this.timePickerDescriptors.slice(0, descriptorIndex),
        {
          ...this.timePickerDescriptors[descriptorIndex],
          focusedValue: value,
        },
        ...this.timePickerDescriptors.slice(descriptorIndex + 1),
      ];
    }
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
      let scrollPositionOffset = 11;
      if (this.hideHeader) {
        // 56 + 1 --> height of the header container and separator
        scrollPositionOffset -= 57;
      }

      const scrollPosition =
        elementContainer.offsetTop -
        elementListHeight / 2 +
        elementContainerHeight -
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
    return formatTimePickerUnitValue(unit, value);
  }

  private getColumnSeparator(currentIndex: number): string {
    return getTimePickerColumnSeparator(
      currentIndex,
      this.timePickerDescriptors
    );
  }

  override render() {
    const { bounds } = this.getUnitSelectionContext();

    return (
      <Host>
        <ix-date-time-card
          embedded={this.embedded}
          timePickerAppearance={true}
          corners={this.corners}
          hasFooter={!this.dateTimePickerAppearance}
          hideHeader={this.hideHeader}
        >
          <div class="header" slot="header">
            <ix-typography format="body">{this.i18nHeader}</ix-typography>
          </div>
          <div class="clock">
            {this.timePickerDescriptors.map((descriptor, index: number) => {
              return (
                <div class="flex">
                  <div
                    class={{ columns: true, hidden: descriptor.hidden }}
                    hidden={descriptor.hidden}
                  >
                    <div class="column-header" title={descriptor.header}>
                      {descriptor.header}
                    </div>
                    <div
                      data-element-list-id={descriptor.unit}
                      class="element-list"
                      tabindex={-1}
                    >
                      {descriptor.numberArray.map((number) => {
                        const cellTabIndex = this.getUnitCellTabIndex(
                          descriptor.unit,
                          number
                        );

                        const disabled = !this.canSelectUnitValue(
                          descriptor.unit,
                          number,
                          bounds,
                          this.buildCandidateBaseBeforeUnit(descriptor.unit)
                        );

                        return (
                          <button
                            data-element-container-id={`${descriptor.unit}-${number}`}
                            class={{
                              selected: this.isSelected(
                                descriptor.unit,
                                number
                              ),
                              'element-container': true,
                              disabled,
                            }}
                            disabled={disabled}
                            onClick={() => {
                              this.select(descriptor.unit, number);
                            }}
                            onFocus={() =>
                              this.onUnitCellFocus(descriptor.unit, number)
                            }
                            onBlur={(e: FocusEvent) =>
                              this.onUnitCellBlur(descriptor.unit, e)
                            }
                            aria-label={`${descriptor.header}: ${number}`}
                            tabindex={cellTabIndex}
                          >
                            {this.formatUnitValue(descriptor.unit, number)}
                          </button>
                        );
                      })}
                      <div class="element-list-padding"></div>
                    </div>
                  </div>

                  {index !== this.timePickerDescriptors.length - 1 && (
                    <div
                      class={{
                        'column-separator': true,
                        hidden: descriptor.hidden,
                      }}
                    >
                      {this.getColumnSeparator(index)}
                    </div>
                  )}
                </div>
              );
            })}

            {this.timeRef && (
              <div class="flex">
                <div class="column-separator"></div>
                <div class="columns">
                  <div class="column-header" title="AM/PM" />
                  <div class="element-list" tabindex={-1}>
                    <button
                      data-am-pm-id="AM"
                      class={{
                        selected: this.timeRef === 'AM',
                        'element-container': true,
                      }}
                      onClick={() => this.changeTimeReference('AM')}
                      tabindex="0"
                      aria-label="AM"
                    >
                      AM
                    </button>
                    <button
                      data-am-pm-id="PM"
                      class={{
                        selected: this.timeRef === 'PM',
                        'element-container': true,
                      }}
                      onClick={() => this.changeTimeReference('PM')}
                      tabindex="0"
                      aria-label="PM"
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            class={{
              footer: true,
              'footer--compact': this.timePickerDescriptors.length <= 2,
            }}
            slot="footer"
          >
            <ix-button
              class="confirm-button"
              disabled={this.isConfirmDisabled()}
              onClick={() => {
                this.timeSelect.emit(this._time?.toFormat(this.format));
              }}
            >
              {this.i18nConfirmTime}
            </ix-button>
          </div>
        </ix-date-time-card>
      </Host>
    );
  }
}
