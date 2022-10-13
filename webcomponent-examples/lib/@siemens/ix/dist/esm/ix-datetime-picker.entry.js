import { r as registerInstance, c as createEvent, h, H as Host } from './index-55cfd20d.js';

const datetimePickerCss = ".sc-ix-datetime-picker-h{background-color:var(--theme-menu--background);border-radius:4px}.flex.sc-ix-datetime-picker{display:flex;justify-content:center}.done.sc-ix-datetime-picker{display:flex;justify-content:flex-end;margin:0 1rem 1rem 0}.separator.sc-ix-datetime-picker{border:1px solid var(--theme-datepicker-separator--background);width:100%;margin-top:72px;height:1px}";

const DatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
DatePicker.style = datetimePickerCss;

export { DatePicker as ix_datetime_picker };
