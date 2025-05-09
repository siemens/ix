import { r as registerInstance, c as createEvent, h, H as Host } from "./global.7dd975c7.js";
const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .no-padding{padding:0}:host ix-col{display:flex;flex-direction:column;padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date-container{display:inline-flex;flex-grow:1}:host .btn-select-date-container ix-button{margin-left:auto;margin-top:auto}:host .min-width{width:-moz-min-content;width:min-content}}:host .individual{box-shadow:none;border:none}:host .btn-select-date-container{padding:0 1rem 1rem}@media (max-width: 576px){:host .btn-select-date-container .btn-select-date{width:100%}}";
const IxDatetimePickerStyle0 = datetimePickerCss;
const DatetimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.done = createEvent(this, "done", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.range = true;
    this.showHour = true;
    this.showMinutes = true;
    this.showSeconds = true;
    this.minDate = void 0;
    this.maxDate = void 0;
    this.dateFormat = "yyyy/LL/dd";
    this.timeFormat = "HH:mm:ss";
    this.from = void 0;
    this.to = void 0;
    this.time = void 0;
    this.showTimeReference = false;
    this.timeReference = void 0;
    this.textSelectDate = void 0;
    this.i18nDone = "Done";
    this.weekStartIndex = 0;
    this.locale = void 0;
    this.eventDelimiter = " - ";
  }
  async onDone() {
    var _a, _b, _c, _d, _e;
    const date = await ((_a = this.datePickerElement) === null || _a === void 0 ? void 0 : _a.getCurrentDate());
    const time = await ((_b = this.timePickerElement) === null || _b === void 0 ? void 0 : _b.getCurrentTime());
    this.dateSelect.emit({
      from: (_c = date === null || date === void 0 ? void 0 : date.from) !== null && _c !== void 0 ? _c : "",
      to: (_d = date === null || date === void 0 ? void 0 : date.to) !== null && _d !== void 0 ? _d : "",
      time: time !== null && time !== void 0 ? time : ""
    });
    this.done.emit([date === null || date === void 0 ? void 0 : date.from, (_e = date === null || date === void 0 ? void 0 : date.to) !== null && _e !== void 0 ? _e : "", time].join(this.eventDelimiter));
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
    return h(Host, { key: "ea71affcf0b1bbbd1808c7245ad30280288e67d6" }, h("ix-layout-grid", { key: "11af10aa4a2c7738c300ad0fc9130991f2d8b112", class: "no-padding" }, h("ix-row", { key: "46d0fad2121d415125de4a29c0815933a5e77303" }, h("ix-col", { key: "a7c10cc24b94e622d11f0e33ac358616ec3cabdf" }, h("ix-date-picker", { key: "66051e5913c36d72e698e4baff451a81c22b12c1", ref: (ref) => this.datePickerElement = ref, corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale })), h("ix-col", { key: "0bb0946651287def31ff240279691cda09508436", class: "d-flex flex-column" }, h("ix-time-picker", { key: "31e8794aadbbd3945615b62e40bcec004891b99d", class: "min-width", ref: (ref) => this.timePickerElement = ref, standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }), h("div", { key: "dcb60b9dd749cf695212b5b1fc26d1762b45bd79", class: "btn-select-date-container" }, h("ix-button", { key: "2044c8aa877193340bd0f3cee8cc8a04c33c059b", class: "btn-select-date", onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone))))));
  }
};
DatetimePicker.style = IxDatetimePickerStyle0;
export {
  DatetimePicker as ix_datetime_picker
};
