import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './button.js';
import { d as defineCustomElement$7 } from './date-picker.js';
import { d as defineCustomElement$6 } from './date-time-card.js';
import { d as defineCustomElement$5 } from './dropdown.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './time-picker.js';

const datetimePickerCss = ".sc-ix-datetime-picker-h{background-color:var(--theme-menu--background);border-radius:4px}.flex.sc-ix-datetime-picker{display:flex;justify-content:center}.done.sc-ix-datetime-picker{display:flex;justify-content:flex-end;margin:0 1rem 1rem 0}.separator.sc-ix-datetime-picker{border:1px solid var(--theme-datepicker-separator--background);width:100%;margin-top:72px;height:1px}";

const DatePicker = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.done = createEvent(this, "done", 7);
    /**
     * Set range size
     */
    this.range = true;
    /**
     * Show Hour Input
     */
    this.showHour = false;
    /**
     * Show Minutes Input
     */
    this.showMinutes = false;
    /**
     * Show Seconds Input
     */
    this.showSeconds = false;
    /**
     * Show Time Reference Input
     */
    this.showTimeReference = false;
  }
  doneEvent() {
    console.log(this.date + ' ' + this.time);
    this.done.emit(this.date + ' ' + this.time);
  }
  render() {
    return (h(Host, null, h("div", { class: "flex" }, h("div", { class: "separator" }), h("ix-date-picker", { corners: "left", individual: false, range: this.range, onDateChange: (date) => (this.date = date.detail) }), h("ix-time-picker", { corners: "right", individual: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, showTimeReference: this.showTimeReference, onTimeChange: (time) => (this.time = time.detail) }), h("div", { class: "separator" })), h("div", { class: "done" }, h("ix-button", { onClick: () => this.doneEvent() }, "Done"))));
  }
  static get style() { return datetimePickerCss; }
}, [2, "ix-datetime-picker", {
    "range": [4],
    "showHour": [4, "show-hour"],
    "showMinutes": [4, "show-minutes"],
    "showSeconds": [4, "show-seconds"],
    "showTimeReference": [4, "show-time-reference"]
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
