import { r as registerInstance, c as createEvent, h, H as Host } from "./global.00f6d77e.js";
const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .min-width{width:-moz-min-content;width:min-content}:host .no-padding{padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date{left:unset !important}}:host .individual{box-shadow:none;border:none}:host .btn-select-date{position:absolute;bottom:1rem;right:1rem;left:1rem}";
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
    this.showTimeReference = void 0;
    this.timeReference = void 0;
    this.textSelectDate = void 0;
    this.i18nDone = "Done";
    this.weekStartIndex = 0;
    this.locale = void 0;
    this.eventDelimiter = " - ";
  }
  async onDone() {
    var _a;
    const date = await this.datePickerElement.getCurrentDate();
    const time = await this.timePickerElement.getCurrentTime();
    this.dateSelect.emit({
      from: date.from,
      to: date.to,
      time
    });
    this.done.emit([date.from, (_a = date.to) !== null && _a !== void 0 ? _a : "", time].join(this.eventDelimiter));
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
    return h(Host, { key: "245fa3202c8983bc8eff53d4078c2a6a8daa0810" }, h("ix-layout-grid", { key: "1bc34611a653f3dea08ee0be6a336766da38b914", class: "no-padding" }, h("ix-row", { key: "26eef283266f46fb5a19fcaf1d78f985119cec3a" }, h("ix-col", { key: "d4ac83db8977067d5c178fb48eac1acc1adca898", class: "no-padding" }, h("ix-date-picker", { key: "967af43189787bc677ff273de023b43d9e3b0019", ref: (ref) => this.datePickerElement = ref, corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale })), h("ix-col", { key: "53bbc9d021687f71f211b6d4091e421b7374ae56", class: "no-padding" }, h("ix-time-picker", { key: "da5a855b94d37b1424de7f10804e707e9d082139", class: "min-width", ref: (ref) => this.timePickerElement = ref, corners: "right", standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), h("ix-row", { key: "aa564cb9741fda50e046a508cb9e2ad985ed11d7" }, h("ix-col", { key: "a13d931565a1165e262070e6e3d637fce6da38c6" }, h("ix-button", { key: "6769327a6e405d2b2705c3a64b4b2031e8f80de4", class: "btn-select-date btn-md-width", onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone)))));
  }
};
DatetimePicker.style = IxDatetimePickerStyle0;
export {
  DatetimePicker as ix_datetime_picker
};
