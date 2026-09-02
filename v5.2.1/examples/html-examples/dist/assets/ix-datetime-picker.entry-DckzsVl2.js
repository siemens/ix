import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-eKMhumbj.js";
import { g as getLuxonDateOnlyFormatMask } from "./luxon-datetime-format-masks-CoQiziG8-DpxwPfu4.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const datetimePickerCss = () => `@charset "UTF-8";:host{--ix-datetime-picker-separator--background:var(--si-sys-border-4)}:host{display:block;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host ix-time-picker{width:100%}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}:host .col-separator{border-bottom:0.0625rem solid var(--ix-datetime-picker-separator--background);border-right:none}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}:host ix-time-picker{width:initial}:host .col-separator{border-right:0.0625rem solid var(--ix-datetime-picker-separator--background);border-bottom:none}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{display:flex;justify-content:flex-end}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}`;
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
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
   * Top label of the time picker.
   *
   * @since 3.0.0
   */
  i18nTime = "Time";
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
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.
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
   */
  timeChange;
  /**
   * Date change event. Emitted when the date changes in the embedded date picker.
   */
  dateChange;
  /**
   * Datetime selection event. Emitted when the user confirms the selection.
   */
  dateSelect;
  datePickerElement;
  timePickerElement;
  selectedFromDate;
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
    this.selectedFromDate = value;
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
    this.warnIfRangeModeIgnoresTimeConstraints();
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
      return { minTime: void 0, maxTime: void 0 };
    }
    const hasDateBounds = !!(this.minDate || this.maxDate);
    if (!hasDateBounds) {
      return {
        minTime: this.minTime,
        maxTime: this.maxTime
      };
    }
    const selectedFromDate = this.getSelectedFromDateTime();
    if (!selectedFromDate?.isValid) {
      return { minTime: void 0, maxTime: void 0 };
    }
    const minDate = this.parseDateConstraint(this.minDate, "start");
    const maxDate = this.parseDateConstraint(this.maxDate, "end");
    const applyMinTime = !!minDate?.isValid && !!selectedFromDate?.isValid && selectedFromDate.hasSame(minDate, "day");
    const applyMaxTime = !!maxDate?.isValid && selectedFromDate.hasSame(maxDate, "day");
    return {
      minTime: applyMinTime ? this.minTime : void 0,
      maxTime: applyMaxTime ? this.maxTime : void 0
    };
  }
  async onDone() {
    const date = await this.datePickerElement?.getCurrentDate();
    const time = await this.timePickerElement?.getCurrentTime();
    this.dateSelect.emit({
      from: date?.from ?? "",
      to: date?.to ?? "",
      time: time ?? ""
    });
  }
  async onDateChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    if (typeof date === "string") {
      this.selectedFromDate = date;
    } else {
      this.selectedFromDate = date?.from;
    }
    this.dateChange.emit(date);
  }
  async onTimeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: time } = event;
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
    return h(Host, { key: "8cb641f70053a953a381edb2734db61e698bfc07" }, h("ix-date-time-card", { key: "24a9ea80f07f5c619c9176fb26551444ad9bac70", hideHeader: true, hasFooter: true, embedded: this.embedded, corners: "rounded", noPadding: true }, h("ix-layout-grid", { key: "b5b88d98d8022efd282115840f33a2f7cd3014bd", class: "no-padding" }, h("ix-row", { key: "7d04212ce3197cedde9eecc6cde8c6f0b207dbd6", class: "row-separator" }, h("ix-col", { key: "e796e1ff2362dc9ea9bab65d853cf31a48af9364", class: "col-separator" }, h("ix-date-picker", {
      key: "193684f86e035ecec16af6f608a36c08c6a0c7c1",
      ref: (ref) => this.datePickerElement = ref,
      corners: "left",
      singleSelection: this.singleSelection,
      onDateChange: (event) => this.onDateChange(event),
      from: this.from,
      to: this.to,
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
    })), h("ix-col", { key: "5b194b6116a3351e1676b0893ef73c202d117fbc" }, h("ix-time-picker", {
      key: "cc4a087e8e94735afaff3f73d5f734a0e0a64c8e",
      class: "min-width",
      ref: (ref) => this.timePickerElement = ref,
      embedded: true,
      dateTimePickerAppearance: true,
      onTimeChange: (event) => this.onTimeChange(event),
      format: this.timeFormat,
      time: this.time,
      minTime,
      maxTime,
      tabIndex: this.embedded ? -1 : 0,
      [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded
    })))), h("div", { key: "290f12f24a185158b8315a6b153b53b9df955fda", slot: "footer", class: "btn-select-date-container" }, h("ix-button", { key: "88b4f71a4f468c87626632b0a761168ab126bb75", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))));
  }
  static get watchers() {
    return {
      "from": [{
        "watchFromPropHandler": 0
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
