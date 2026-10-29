import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-DV2yP7rM.js";
import { D as DateTime, p as parseWithLocale, a as toISOTime, t as toISODate } from "./date-time-locale-CgHCyd5r-CshVRSUN.js";
import { c as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap--BMv7KVW-iRNtP4uT.js";
import { g as getLuxonDateOnlyFormatMask } from "./luxon-datetime-format-masks-CoQiziG8-DpxwPfu4.js";
import { i as isPartialRange } from "./calendar.util-Dw1_RCEh-C_QR7-2B.js";
import { b as isSameStringOrUnset } from "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import { P as PendingSelection, C as ConfirmationFooter } from "./confirmation-footer.fc-wHiEKiL4-n1KBQzZ2.js";
import { g as getTimeConstraintsOnDay, i as isTimeWithinConstraints } from "./time-picker-constraints-CbdV6RUE-pf6Q1q6X.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const datetimePickerCss = () => `@charset "UTF-8";:host{--ix-datetime-picker-separator--background:var(--si-sys-color-border-4)}:host{--ix-datetime-picker-col-separator--border-width:var(--si-sys-sizing-border-width-default)}:host{display:block;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .confirmation-footer{--ix-confirmation-footer--gap:var(--si-sys-sizing-spacing-x-40);display:flex;justify-content:flex-end;flex-wrap:wrap;gap:var(--ix-confirmation-footer--gap)}:host .confirmation-footer.layout-center{flex-direction:column;align-items:center}:host .confirmation-footer.layout-full-width{width:100%}:host .confirmation-footer.layout-full-width ix-button{flex:1 1 0}@media (max-width: 576px){:host .confirmation-footer.layout-responsive{width:100%}:host .confirmation-footer.layout-responsive ix-button{flex:1 1 0}}:host ix-time-picker{width:100%}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}:host .col-separator{border-bottom:var(--ix-datetime-picker-col-separator--border-width) solid var(--ix-datetime-picker-separator--background);border-right:none}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .min-width{width:-moz-min-content;width:min-content}:host ix-time-picker{width:initial}:host .col-separator{border-right:var(--ix-datetime-picker-col-separator--border-width) solid var(--ix-datetime-picker-separator--background);border-bottom:none}}:host .individual{box-shadow:none;border:none}`;
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.dateCancel = createEvent(this, "dateCancel", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * If true, disables date range selection (from/to).
   */
  singleSelection = false;
  /**
   * The earliest date that can be selected.
   * If not set there will be no restriction.
   */
  minDate;
  /**
   * The latest date that can be selected.
   * If not set there will be no restriction.
   */
  maxDate;
  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  dateFormat = "yyyy/LL/dd";
  /**
   * Time format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  timeFormat = "HH:mm:ss";
  /**
   * Earliest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  minTime;
  /**
   * Latest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  maxTime;
  /**
   * The selected starting date. If the picker is not in range mode, this is the selected date.
   * Format has to match the `dateFormat` property.
   */
  from;
  /**
   * The selected end date. If the picker is not in range mode, this property has no impact.
   * Format has to match the `dateFormat` property.
   */
  to;
  /**
   * Selected time value for the embedded time picker.
   * Format has to match the `timeFormat` property.
   */
  time;
  /**
   * Show AM/PM time reference control.
   */
  showTimeReference = false;
  /**
   * Time reference (AM or PM).
   */
  timeReference;
  /**
   * Text of the date select button.
   */
  i18nDone = "Done";
  /**
   * If true, a selection is only applied after the user confirms it with the
   * confirm button, which emits `dateSelect`. The cancel button discards the
   * pending selection.
   *
   * If false, the done button emits `dateSelect`. In both modes `dateChange`
   * and `timeChange` are emitted for every selection.
   *
   * @since 6.0.0
   */
  requireConfirmation = false;
  /**
   * Text of the confirm button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  i18nConfirm = "Confirm";
  /**
   * Text of the cancel button shown when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  i18nCancel = "Cancel";
  /**
   * Top label of the time picker.
   *
   * @since 3.0.0
   */
  i18nTime = "Time";
  /**
   * Label for the AM button in 12-hour mode.
   *
   * @since 6.0.0
   */
  i18nAm = "AM";
  /**
   * Label for the PM button in 12-hour mode.
   *
   * @since 6.0.0
   */
  i18nPm = "PM";
  /**
   * Text for the time picker hour column header.
   *
   * @since 6.0.0
   */
  i18nHourColumnHeader = "hr";
  /**
   * Text for the time picker minute column header.
   *
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMinuteColumnHeader = "min";
  /**
   * Text for the time picker second column header.
   *
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nSecondColumnHeader = "sec";
  /**
   * Text for the time picker millisecond column header.
   *
   * @since 6.0.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMillisecondColumnHeader = "ms";
  /**
   * ARIA label for the previous month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelPreviousMonthButton = "Previous month";
  /**
   * ARIA label for the next month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelNextMonthButton = "Next month";
  /**
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
   */
  weekStartIndex = 0;
  /**
   * Locale identifier (e.g. 'en' or 'de').
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  locale;
  /**
   * Shows week numbers displayed on the left side of the date picker.
   *
   * @since 3.0.0
   */
  showWeekNumbers = false;
  /** @internal */
  embedded = false;
  /**
   * Time change event. Emitted when the time changes in the embedded time picker.
   *
   * Emitted for every pick, also for a selection that is not confirmed yet
   * (`requireConfirmation`). When a pending selection is discarded, it is
   * emitted with the confirmed time again, or the default time if none is
   * confirmed, which is also emitted on load. Use `dateSelect` for the
   * applied selection.
   */
  timeChange;
  /**
   * Date change event. Emitted when the date changes in the embedded date picker.
   *
   * Emitted for every pick, also for a range with only a start date and for
   * a selection that is not confirmed yet (`requireConfirmation`). When a
   * pending selection is discarded, it is emitted with the confirmed date
   * again. Use `dateSelect` for the applied selection.
   */
  dateChange;
  /**
   * Datetime selection event. Emitted when the selection is applied via the
   * done button, or via the confirm button with `requireConfirmation`.
   */
  dateSelect;
  /**
   * Emitted when the pending selection is discarded via the cancel button,
   * after `dateChange`/`timeChange` reported the restored selection.
   * Only emitted when `requireConfirmation` is enabled.
   *
   * @since 6.0.0
   */
  dateCancel;
  datePickerElement;
  timePickerElement;
  selectedFromDate;
  /** Incremented on discard, so in-flight date changes can detect it. */
  discardGeneration = 0;
  /**
   * Committed selection: the selection at load, at the last confirm or done
   * click, or at the last external `from`/`to`/`time` change. Changes made in
   * the embedded pickers since then are pending: they are already emitted
   * with `dateChange`/`timeChange`, but not yet applied with `dateSelect`.
   */
  selection = PendingSelection.create({}, (a, b) => isSameStringOrUnset(a.from, b.from) && isSameStringOrUnset(a.to, b.to) && isSameStringOrUnset(a.time, b.time));
  hasTimeConstraintsConfigured() {
    return !!(this.minTime?.trim() || this.maxTime?.trim());
  }
  warnIfRangeModeIgnoresTimeConstraints() {
    if (this.singleSelection || !this.hasTimeConstraintsConfigured()) {
      return;
    }
    console.warn("[ix-datetime-picker] `minTime`/`maxTime` are ignored when range selection is enabled (`singleSelection=false`).");
  }
  watchFromPropHandler(value) {
    if (this.applyPropChange("from", value)) {
      this.selectedFromDate = value;
    }
  }
  watchToPropHandler(value) {
    this.applyPropChange("to", value);
  }
  watchTimePropHandler(value) {
    this.applyPropChange("time", value);
  }
  /**
   * Applies a prop change unless it echoes the shown selection back (e.g.
   * two-way binding to `dateChange`/`timeChange`), and returns whether it
   * was applied. The other committed values are kept, as a consumer may bind
   * only some of the props, so the remaining props can be stale.
   */
  applyPropChange(key, value) {
    const selection = this.selection.withPropChange(key, value);
    const isApplied = selection !== this.selection;
    this.selection = selection;
    return isApplied;
  }
  watchSingleSelectionPropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  watchMinTimePropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  watchMaxTimePropHandler() {
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  componentWillLoad() {
    this.selectedFromDate = this.from;
    this.resetActual();
    this.warnIfRangeModeIgnoresTimeConstraints();
  }
  resetActual() {
    this.selection = this.selection.reset({
      from: this.from,
      to: this.to,
      time: this.time
    });
  }
  /** Values passed to the embedded pickers: pending, else committed. */
  get pickerSelection() {
    return this.selection.displayed;
  }
  dateFrom(date) {
    return typeof date === "string" ? date : date?.from;
  }
  dateTo(date) {
    return typeof date === "string" ? void 0 : date?.to;
  }
  get dateOnlyFormat() {
    return getLuxonDateOnlyFormatMask(this.dateFormat);
  }
  parseDateValue(value) {
    if (!value) {
      return null;
    }
    let parsed = DateTime.fromFormat(value, this.dateFormat, {
      locale: this.locale
    });
    if (!parsed.isValid) {
      parsed = DateTime.fromFormat(value, this.dateOnlyFormat, {
        locale: this.locale
      });
    }
    if (!parsed.isValid) {
      return null;
    }
    return parsed;
  }
  parseDateConstraint(value, boundary) {
    const parsed = this.parseDateValue(value);
    if (!parsed) {
      return null;
    }
    return boundary === "start" ? parsed.startOf("day") : parsed.endOf("day");
  }
  getSelectedFromDateTime() {
    const parsed = this.parseDateValue(this.selectedFromDate);
    if (!parsed) {
      return null;
    }
    return parsed.startOf("day");
  }
  getEffectiveTimeConstraints() {
    if (!this.singleSelection) {
      return {};
    }
    return getTimeConstraintsOnDay({ minTime: this.minTime, maxTime: this.maxTime }, this.getSelectedFromDateTime(), this.parseDateConstraint(this.minDate, "start"), this.parseDateConstraint(this.maxDate, "end"));
  }
  /** Picks `change` on top of the shown selection. */
  select(change) {
    this.selection = this.selection.select({
      ...this.pickerSelection,
      ...change
    });
  }
  /** Whether `selection` has a date, and an end date in range mode. */
  hasCompleteDate(selection) {
    return !!selection.from && (this.singleSelection || !isPartialRange(selection));
  }
  /**
   * Whether the shown time is outside the time constraints of the shown date.
   * Picking another date can move a valid time out of the constraints.
   */
  isTimeOutsideConstraints() {
    const { time } = this.pickerSelection;
    if (!time) {
      return false;
    }
    const { minTime, maxTime } = this.getEffectiveTimeConstraints();
    const parsed = parseWithLocale(time, this.timeFormat, this.locale);
    return parsed.isValid && !isTimeWithinConstraints(parsed, minTime, maxTime, this.timeFormat, this.locale);
  }
  /**
   * Disabled for an incomplete selection, for a time outside the time
   * constraints, and when nothing changed since the committed selection.
   * Without a complete committed selection, the shown selection can be
   * applied as it is.
   */
  isPrimaryActionDisabled() {
    if (!this.hasCompleteDate(this.pickerSelection) || this.isTimeOutsideConstraints()) {
      return true;
    }
    const { committed } = this.selection;
    const hasCommittedSelection = this.hasCompleteDate(committed) && !!committed.time;
    return hasCommittedSelection && !this.selection.hasPending;
  }
  /**
   * Without a committed time the time picker shows the current time, which
   * becomes part of the selection once it is applied.
   */
  async includeShownTime() {
    if (this.selection.hasPending || this.selection.committed.time) {
      return;
    }
    const time = await this.timePickerElement?.getDisplayedTime();
    if (time) {
      this.select({ time });
    }
  }
  async onConfirm() {
    await this.includeShownTime();
    this.selection = this.selection.commit();
    await this.emitDateSelect();
  }
  async onCancel() {
    await this.discardPending();
    this.dateCancel.emit();
  }
  async discardPending() {
    this.discardGeneration++;
    const shown = this.pickerSelection;
    this.selection = this.selection.discard();
    this.selectedFromDate = this.selection.committed.from;
    await this.emitRestoredSelection(shown);
  }
  /** Reports the parts of `shown` that differ from the restored selection. */
  async emitRestoredSelection(shown) {
    const { from, to, time } = this.selection.committed;
    if (!isSameStringOrUnset(shown.from, from) || !isSameStringOrUnset(shown.to, to)) {
      this.dateChange.emit(this.toDateChangeEvent(from, to));
    }
    if (!time) {
      await this.timePickerElement?.discardPendingSelection();
    } else if (!isSameStringOrUnset(shown.time, time)) {
      this.timeChange.emit(time);
    }
  }
  /** The `dateChange` payload the embedded date picker emits for a range. */
  toDateChangeEvent(from, to) {
    const toIso = (value) => {
      const date = this.parseDateValue(value);
      return date ? toISODate(date) : void 0;
    };
    if (this.singleSelection) {
      return { from, to: void 0, isoFrom: toIso(from), isoTo: void 0 };
    }
    return { from, to, isoFrom: toIso(from), isoTo: toIso(to) };
  }
  /**
   * Discards a pending selection made while `requireConfirmation` is enabled.
   * Without `requireConfirmation` the selection was already emitted, so the
   * props are taken as the new committed selection instead.
   * @internal
   */
  async discardPendingSelection() {
    if (this.requireConfirmation) {
      await this.discardPending();
      return;
    }
    this.selectedFromDate = this.from;
    this.resetActual();
    if (!this.selection.committed.time) {
      await this.timePickerElement?.discardPendingSelection();
    }
  }
  async onDone() {
    await this.includeShownTime();
    this.selection = this.selection.commit();
    await this.emitDateSelect();
  }
  async emitDateSelect() {
    this.dateSelect.emit(await this.getCurrentSelection());
  }
  /**
   * The selection shown in the embedded pickers. The time comes from the
   * tracked `timeChange` events, as the time picker only commits a time on
   * its own confirm button. Without a picked time it falls back to the time
   * the time picker shows.
   * @internal
   */
  async getCurrentSelection() {
    const date = await this.datePickerElement?.getCurrentDate();
    const time = this.pickerSelection.time || await this.timePickerElement?.getDisplayedTime();
    return {
      from: date?.from ?? "",
      to: date?.to ?? "",
      time: time ?? "",
      isoFrom: date?.isoFrom,
      isoTo: date?.isoTo,
      isoTime: time ? toISOTime(parseWithLocale(time, this.timeFormat, this.locale)) : void 0
    };
  }
  async onDateChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    this.selectedFromDate = this.dateFrom(date);
    const discardGeneration = this.discardGeneration;
    const fallbackTime = this.selection.committed.time || await this.timePickerElement?.getDisplayedTime();
    if (discardGeneration !== this.discardGeneration) {
      return;
    }
    this.select({
      from: this.dateFrom(date),
      to: this.dateTo(date),
      time: this.pickerSelection.time || fallbackTime
    });
    this.dateChange.emit(date);
  }
  async onTimeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: time } = event;
    this.select({ time });
    this.timeChange.emit(time);
  }
  /** @internal */
  async getDatepickerElement() {
    return this.datePickerElement;
  }
  /** @internal */
  async getTimepickerElement() {
    return this.timePickerElement;
  }
  render() {
    const { minTime, maxTime } = this.getEffectiveTimeConstraints();
    const selection = this.pickerSelection;
    return h(Host, { key: "310d495ba0a2ffcfee54c9beef0ca7112453d872" }, h("ix-date-time-card", { key: "83f7defa76712c78935ee5665c4e1a7ccf593255", hideHeader: true, hasFooter: true, embedded: this.embedded, corners: "rounded", noPadding: true }, h("ix-layout-grid", { key: "11e339e5029aa6f3dce336cb26ddc126435f87a4", class: "no-padding" }, h("ix-row", { key: "0950cb734e5266f8f10d652067d1fa322d7f6da9", class: "row-separator" }, h("ix-col", { key: "245669066c1948eef2cbf2c73889cbb51438561d", class: "col-separator" }, h("ix-date-picker", {
      key: "1756e2da46ab1d29cb782249641b301f5e767c03",
      ref: (ref) => this.datePickerElement = ref,
      corners: "left",
      singleSelection: this.singleSelection,
      onDateChange: (event) => this.onDateChange(event),
      // `dateChange` reports the range, so the embedded event must not leak
      onDateRangeChange: (event) => event.stopPropagation(),
      // `dateSelect` carries the time, so the date-only event must not leak
      onDateSelect: (event) => event.stopPropagation(),
      from: selection.from,
      to: selection.to,
      format: this.dateFormat,
      minDate: this.minDate,
      maxDate: this.maxDate,
      weekStartIndex: this.weekStartIndex,
      embedded: true,
      locale: this.locale,
      showWeekNumbers: this.showWeekNumbers,
      ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton,
      ariaLabelNextMonthButton: this.ariaLabelNextMonthButton,
      tabIndex: this.embedded ? -1 : 0,
      [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded
    })), h("ix-col", { key: "fec4d5ffd50eb1c7bb2f94949d5df65eb5560b90" }, h("ix-time-picker", {
      key: "12fc33a0be0195bbdd1b6fe8ec5df45fd2a62181",
      class: "min-width",
      ref: (ref) => this.timePickerElement = ref,
      embedded: true,
      hideFooter: true,
      onTimeChange: (event) => this.onTimeChange(event),
      format: this.timeFormat,
      locale: this.locale,
      time: selection.time,
      minTime,
      maxTime,
      i18nAm: this.i18nAm,
      i18nPm: this.i18nPm,
      i18nHeader: this.i18nTime,
      i18nHourColumnHeader: this.i18nHourColumnHeader,
      i18nMinuteColumnHeader: this.i18nMinuteColumnHeader,
      i18nSecondColumnHeader: this.i18nSecondColumnHeader,
      i18nMillisecondColumnHeader: this.i18nMillisecondColumnHeader,
      tabIndex: this.embedded ? -1 : 0,
      [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded
    })))), h(ConfirmationFooter, { key: "41fa1019624f532d1e5cd578ecf7d26f2d1e4eac", slot: "footer", layout: "responsive", requireConfirmation: this.requireConfirmation, i18nDone: this.i18nDone, i18nConfirm: this.i18nConfirm, i18nCancel: this.i18nCancel, primaryActionDisabled: this.isPrimaryActionDisabled(), onDone: () => this.onDone(), onConfirm: () => this.onConfirm(), onCancel: () => this.onCancel() })));
  }
  static get watchers() {
    return {
      "from": [{
        "watchFromPropHandler": 0
      }],
      "to": [{
        "watchToPropHandler": 0
      }],
      "time": [{
        "watchTimePropHandler": 0
      }],
      "singleSelection": [{
        "watchSingleSelectionPropHandler": 0
      }],
      "minTime": [{
        "watchMinTimePropHandler": 0
      }],
      "maxTime": [{
        "watchMaxTimePropHandler": 0
      }]
    };
  }
};
DatetimePicker.style = datetimePickerCss();
export {
  DatetimePicker as ix_datetime_picker
};
