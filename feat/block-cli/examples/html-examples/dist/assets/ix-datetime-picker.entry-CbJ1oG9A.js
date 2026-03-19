import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { a as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-0-e7_EJl-C_W0MO97.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
const datetimePickerCss = () => `:host{display:block;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-time-picker{width:100%}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}:host .col-separator{border-bottom:0.0625rem solid var(--theme-datepicker-separator--background);border-right:none}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}:host ix-time-picker{width:initial}:host .col-separator{border-right:0.0625rem solid var(--theme-datepicker-separator--background);border-bottom:none}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{display:flex;justify-content:flex-end}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}`;
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
   * If true disables date range selection (from/to).
   */
  singleSelection = false;
  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   */
  minDate;
  /**
   * The latest date that can be selected by the date picker.
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
   * The selected starting date. If the picker is not in range mode this is the selected date.
   * Format has to match the `format` property.
   */
  from;
  /**
   * The selected end date. If the the picker is not in range mode this property has no impact.
   * Format has to match the `format` property.
   */
  to;
  /**
   * Select time with format string
   */
  time;
  /**
   * Show time reference input
   * Time reference is default aligned with @see {this.timeFormat}
   */
  showTimeReference = false;
  /**
   * Set time reference
   */
  timeReference;
  /**
   * Text of date select button
   */
  i18nDone = "Done";
  /**
   * Top label of time picker
   *
   * @since 3.0.0
   */
  i18nTime = "Time";
  /**
   * ARIA label for the previous month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelPreviousMonthButton;
  /**
   * ARIA label for the next month icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelNextMonthButton;
  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   */
  weekStartIndex = 0;
  /**
   * Format of time string
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  locale;
  /**
   * Shows week numbers displayed on the left side of the date picker
   *
   * @since 3.0.0
   */
  showWeekNumbers = false;
  /** @internal */
  embedded = false;
  /**
   * Time change
   */
  timeChange;
  /**
   * Date change
   */
  dateChange;
  /**
   * Datetime selection event is fired after confirm button is pressed
   */
  dateSelect;
  datePickerElement;
  timePickerElement;
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
    return h(Host, { key: "be285a712750642db7c503f755a3674dde269265" }, h("ix-date-time-card", { key: "cb44194ec733a96e3a0310f08e3c6ea8783b9773", hideHeader: true, hasFooter: true, embedded: this.embedded, corners: "rounded", noPadding: true }, h("ix-layout-grid", { key: "aea1e283fa107d6fd1718727326daccf63bcab86", class: "no-padding" }, h("ix-row", { key: "ad8fe8b550600a372fd299c7c62d2c6f1e517908", class: "row-separator" }, h("ix-col", { key: "b09ece66d000c66901142ead599f859a9888970c", class: "col-separator" }, h("ix-date-picker", {
      key: "8ffd354bc30bebac0851c66444faee7ba089653c",
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
    })), h("ix-col", { key: "1c9d946c935dc7bcbde95d6fa889caf97394f4c2" }, h("ix-time-picker", {
      key: "514110c5cf8f9b113aa3f9f0a16c8a7ba1065c0d",
      class: "min-width",
      ref: (ref) => this.timePickerElement = ref,
      embedded: true,
      dateTimePickerAppearance: true,
      onTimeChange: (event) => this.onTimeChange(event),
      format: this.timeFormat,
      time: this.time,
      tabIndex: this.embedded ? -1 : 0,
      [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: this.embedded
    })))), h("div", { key: "d5d2a9e83d11c716360cd601ea7c2f406a61f5b9", slot: "footer", class: "btn-select-date-container" }, h("ix-button", { key: "56ab9876737ea2649912902ea06de0ecc2e9cc7b", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))));
  }
};
DatetimePicker.style = datetimePickerCss();
export {
  DatetimePicker as ix_datetime_picker
};
