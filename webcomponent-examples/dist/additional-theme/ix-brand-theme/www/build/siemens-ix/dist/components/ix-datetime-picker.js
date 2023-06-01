import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './button.js';
import { d as defineCustomElement$7 } from './date-picker.js';
import { d as defineCustomElement$6 } from './date-time-card.js';
import { d as defineCustomElement$5 } from './dropdown.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './time-picker.js';

const datetimePickerCss = ".sc-ix-datetime-picker-h{display:block;background-color:var(--theme-menu--background);border-radius:4px}.flex.sc-ix-datetime-picker{display:flex;justify-content:center}.done.sc-ix-datetime-picker{display:inline-flex;justify-content:flex-end;padding:1rem;width:100%}.separator.sc-ix-datetime-picker{border:1px solid var(--theme-datepicker-separator--background);width:100%;margin-top:72px;height:1px}";

const DatePicker = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.done = createEvent(this, "done", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.range = true;
    this.showHour = false;
    this.showMinutes = false;
    this.showSeconds = false;
    this.minDate = undefined;
    this.maxDate = undefined;
    this.dateFormat = 'yyyy/LL/dd';
    this.timeFormat = 'TT';
    this.from = undefined;
    this.to = null;
    this.time = undefined;
    this.showTimeReference = undefined;
    this.eventDelimiter = ' - ';
    this.timeReference = undefined;
    this.textSelectDate = 'Done';
  }
  onDone() {
    var _a;
    this.done.emit([this._from, (_a = this._to) !== null && _a !== void 0 ? _a : '', this._time].join(this.eventDelimiter));
    this.dateSelect.emit({
      from: this._from,
      to: this._to,
      time: this._time,
    });
  }
  async onDateChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: date } = event;
    this.dateChange.emit(date);
    const currentDateTime = await this.datePickerElement.getCurrentDate();
    this._from = currentDateTime.start;
    this._to = currentDateTime.end;
  }
  async onTimeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    const { detail: time } = event;
    this.timeChange.emit(time);
    const currentDateTime = await this.timePickerElement.getCurrentTime();
    this._time = currentDateTime;
  }
  componentDidLoad() {
    this._from = this.from;
    this._to = this.to;
    this._time = this.time;
  }
  render() {
    return (h(Host, null, h("div", { class: "flex" }, h("div", { class: "separator" }), h("ix-date-picker", { ref: (ref) => (this.datePickerElement = ref), corners: "left", individual: false, range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, eventDelimiter: this.eventDelimiter }), h("ix-time-picker", { ref: (ref) => (this.timePickerElement = ref), corners: "right", individual: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, showTimeReference: this.showTimeReference, onTimeChange: (event) => this.onTimeChange(event), time: this.time, format: this.timeFormat, timeReference: this.timeReference }), h("div", { class: "separator" })), h("div", { class: "done" }, h("ix-button", { onClick: () => this.onDone() }, this.textSelectDate))));
  }
  static get style() { return datetimePickerCss; }
}, [2, "ix-datetime-picker", {
    "range": [4],
    "showHour": [4, "show-hour"],
    "showMinutes": [4, "show-minutes"],
    "showSeconds": [4, "show-seconds"],
    "minDate": [1, "min-date"],
    "maxDate": [1, "max-date"],
    "dateFormat": [1, "date-format"],
    "timeFormat": [1, "time-format"],
    "from": [1],
    "to": [1],
    "time": [1],
    "showTimeReference": [8, "show-time-reference"],
    "eventDelimiter": [1, "event-delimiter"],
    "timeReference": [1, "time-reference"],
    "textSelectDate": [1, "text-select-date"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-datetime-picker", "ix-button", "ix-date-picker", "ix-date-time-card", "ix-dropdown", "ix-icon", "ix-icon-button", "ix-time-picker"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-datetime-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DatePicker);
      }
      break;
    case "ix-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ix-date-picker":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ix-date-time-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-time-picker":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxDatetimePicker = DatePicker;
const defineCustomElement = defineCustomElement$1;

export { IxDatetimePicker, defineCustomElement };
