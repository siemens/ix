import { r as registerInstance, c as createEvent, h, H as Host } from "./index.8b3d29f9.js";
const datetimePickerCss = ":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .min-width{width:-moz-min-content;width:min-content}:host .no-padding{padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date{left:unset !important}}:host .individual{box-shadow:none;border:none}:host .btn-select-date{position:absolute;bottom:1rem;right:1rem;left:1rem}";
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
    return h(Host, { key: "83ee67741b982fbf3a6191c04fa3edbbdb6e6f44" }, h("ix-layout-grid", { key: "f5f2c66badc930b769638f8f087058b51e44aca7", class: "no-padding" }, h("ix-row", { key: "15361bfa7b0cba0688507273601701160016d69b" }, h("ix-col", { key: "c4d1d8a41b939e7970277d7a8d9a1c68db7bfa91", class: "no-padding" }, h("ix-date-picker", { key: "77bc6717428ef6fd131cd364b15b5e62a79e8f7f", ref: (ref) => this.datePickerElement = ref, corners: "left", range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, standaloneAppearance: false, locale: this.locale })), h("ix-col", { key: "52d25a39e84d6e0bc35bfe2159c368d2611570c3", class: "no-padding" }, h("ix-time-picker", { key: "c19954e799ec9a0f5afb7df35472e58911ea7209", class: "min-width", ref: (ref) => this.timePickerElement = ref, corners: "right", standaloneAppearance: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), h("ix-row", { key: "cc6b061a09a9e3b8e06d7acd6bfe801dc884cc92" }, h("ix-col", { key: "86d98b8b9d25f0d77707c7104ed3b53efed3fd04" }, h("ix-button", { key: "5e843ec14cc32176420a8304779e7563117af40d", class: "btn-select-date btn-md-width", onClick: () => this.onDone() }, this.textSelectDate || this.i18nDone)))));
  }
};
DatetimePicker.style = IxDatetimePickerStyle0;
export {
  DatetimePicker as ix_datetime_picker
};
