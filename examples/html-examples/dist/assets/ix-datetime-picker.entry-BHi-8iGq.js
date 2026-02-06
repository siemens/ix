import { r as registerInstance, c as createEvent, h, H as Host } from "./global-wi9VneMU.js";
const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-layout-grid{border-radius:0.25rem;box-shadow:var(--theme-shadow-4)}:host ix-time-picker{width:100%}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}:host .row-separator,:host .col-separator{border-bottom:0.0625rem solid var(--theme-datepicker-separator--background)}:host .col-separator{border-right:none}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}:host ix-time-picker{width:initial}:host .col-separator{border-right:0.0625rem solid var(--theme-datepicker-separator--background);border-bottom:none}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{padding:1rem}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}";
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.singleSelection = false;
    this.dateFormat = "yyyy/LL/dd";
    this.timeFormat = "HH:mm:ss";
    this.showTimeReference = false;
    this.i18nDone = "Done";
    this.i18nTime = "Time";
    this.weekStartIndex = 0;
    this.showWeekNumbers = false;
  }
  async onDone() {
    var _a, _b, _c, _d;
    const date = await ((_a = this.datePickerElement) === null || _a === void 0 ? void 0 : _a.getCurrentDate());
    const time = await ((_b = this.timePickerElement) === null || _b === void 0 ? void 0 : _b.getCurrentTime());
    this.dateSelect.emit({
      from: (_c = date === null || date === void 0 ? void 0 : date.from) !== null && _c !== void 0 ? _c : "",
      to: (_d = date === null || date === void 0 ? void 0 : date.to) !== null && _d !== void 0 ? _d : "",
      time: time !== null && time !== void 0 ? time : ""
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
  render() {
    return h(Host, { key: "2b4812deec9408836a8187c3a520cd69b846e935" }, h("ix-layout-grid", { key: "610fad916eb544d6687bcbfb3543b926f7521b9e", class: "no-padding" }, h("ix-row", { key: "63dcab9421e05163577db32fda3bd714a0c00de7", class: "row-separator" }, h("ix-col", { key: "8ac25a8147b15ac20b45c3f1e48bfda34919eae1", class: "col-separator" }, h("ix-date-picker", { key: "1831729d8dcb31e5361fbef4a6290111847b8679", ref: (ref) => this.datePickerElement = ref, corners: "left", singleSelection: this.singleSelection, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, embedded: true, locale: this.locale, showWeekNumbers: this.showWeekNumbers, ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton, ariaLabelNextMonthButton: this.ariaLabelNextMonthButton })), h("ix-col", { key: "51b004e4362c9dc26d0e59909cfb431fd874cbac" }, h("ix-time-picker", { key: "40672098b7e7cc369afd8429b34d14b97bcd1380", class: "min-width", ref: (ref) => this.timePickerElement = ref, embedded: true, dateTimePickerAppearance: true, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), h("ix-row", { key: "876f3e8defe5de50013e8ea7e1f3465bd6e339a1" }, h("ix-col", { key: "1515e3e7b9ac5b121c8b0c3284092698f85652bf" }, h("div", { key: "6aa46d00d240c20de2e92bd5fa62f6ca59f53274", class: "btn-select-date-container" }, h("ix-button", { key: "ca4e27ecc31600f97ac2ab061cbbf29b2c717078", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))))));
  }
};
DatetimePicker.style = datetimePickerCss;
export {
  DatetimePicker as ix_datetime_picker
};
