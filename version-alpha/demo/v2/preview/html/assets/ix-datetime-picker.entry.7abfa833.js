import { r as registerInstance, c as createEvent, h, H as Host } from "./global.aa474cf6.js";
const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{padding:0 1rem 1rem}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}";
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.range = true;
    this.showHour = true;
    this.showMinutes = true;
    this.showSeconds = true;
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
    return h(Host, { key: "dd665870ff9bffac05640617ded60ca70bfb4060" }, h("ix-layout-grid", { key: "b67a7dfbfad4383ece3a69c6da13c2fd76a48d60", class: "no-padding" }, h("ix-row", { key: "7e5f0d44bdb53dd28ceb5d2389f389d582d2a7d4" }, h("ix-col", { key: "aa9c25a9dc54da2d99f486c127980105287bfb0c" }, h("ix-date-picker", { key: "0627d2e1c77a29fec14cc79fea96945626881313", ref: (ref) => this.datePickerElement = ref, corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale, showWeekNumbers: this.showWeekNumbers })), h("ix-col", { key: "86804434e7b28a88011f93a37f33ed01cc9699d7" }, h("ix-time-picker", { key: "b68dd97d4d0fbbdc1e52f72c27eb975f52a60402", class: "min-width", ref: (ref) => this.timePickerElement = ref, standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, textTime: this.i18nTime, time: this.time }), h("div", { key: "d2d929c1c7bcca8326d2b7d1ba94ffb1be7f5b39", class: "btn-select-date-container" }, h("ix-button", { key: "5052d32b58dfaafb5e5f0038df5ea8aa3c1752e3", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))))));
  }
};
DatetimePicker.style = datetimePickerCss;
export {
  DatetimePicker as ix_datetime_picker
};
