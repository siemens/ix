import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DXu0UsM0.js";
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
    return h(Host, { key: "4b7691ed3ca2d693ae9f9786053da8527d9b3a0d" }, h("ix-layout-grid", { key: "cf6d54c106a65a512ee33e2a93589998a6875f51", class: "no-padding" }, h("ix-row", { key: "6459729a40bc0680f8a713443b0f76258b3c741d", class: "row-separator" }, h("ix-col", { key: "a7f3e8a3c56b4c1f92e3da594d39b4afce520cdf", class: "col-separator" }, h("ix-date-picker", { key: "b0a26b9603b67e4815d078177b9d53c32d5f5bad", ref: (ref) => this.datePickerElement = ref, corners: "left", singleSelection: this.singleSelection, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, weekStartIndex: this.weekStartIndex, embedded: true, locale: this.locale, showWeekNumbers: this.showWeekNumbers, ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton, ariaLabelNextMonthButton: this.ariaLabelNextMonthButton })), h("ix-col", { key: "56cc3b47549b581174853da9496174dafff2564c" }, h("ix-time-picker", { key: "194562b86ca400c7f0cc97239abdaa80655a2a30", class: "min-width", ref: (ref) => this.timePickerElement = ref, embedded: true, dateTimePickerAppearance: true, onTimeChange: (event) => this.onTimeChange(event), format: this.timeFormat, time: this.time }))), h("ix-row", { key: "dbeb6e1c878294a01001e590c98ab699b41f0559" }, h("ix-col", { key: "9a23a9353b90cfa322e5769b4c6e2bcc30a7150d" }, h("div", { key: "6b81dff2960dbe75cd25cc4c60716ea85f2ea546", class: "btn-select-date-container" }, h("ix-button", { key: "cf31f05c47ba79cd92e5f15b3e17af186eeb9236", class: "btn-select-date", onClick: () => this.onDone() }, this.i18nDone))))));
  }
};
DatetimePicker.style = datetimePickerCss;
export {
  DatetimePicker as ix_datetime_picker
};
