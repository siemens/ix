'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');

const datetimePickerCss = ".sc-ix-datetime-picker-h{display:block;background-color:var(--theme-menu--background);border-radius:4px}.flex.sc-ix-datetime-picker{display:flex;justify-content:center}.done.sc-ix-datetime-picker{display:inline-flex;justify-content:flex-end;padding:1rem;width:100%}.separator.sc-ix-datetime-picker{border:1px solid var(--theme-datepicker-separator--background);width:100%;margin-top:72px;height:1px}";

const DatePicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.done = index.createEvent(this, "done", 7);
    this.timeChange = index.createEvent(this, "timeChange", 7);
    this.dateChange = index.createEvent(this, "dateChange", 7);
    this.dateSelect = index.createEvent(this, "dateSelect", 7);
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
    return (index.h(index.Host, null, index.h("div", { class: "flex" }, index.h("div", { class: "separator" }), index.h("ix-date-picker", { ref: (ref) => (this.datePickerElement = ref), corners: "left", individual: false, range: this.range, onDateChange: (event) => this.onDateChange(event), from: this.from, to: this.to, format: this.dateFormat, minDate: this.minDate, maxDate: this.maxDate, eventDelimiter: this.eventDelimiter }), index.h("ix-time-picker", { ref: (ref) => (this.timePickerElement = ref), corners: "right", individual: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, showTimeReference: this.showTimeReference, onTimeChange: (event) => this.onTimeChange(event), time: this.time, format: this.timeFormat, timeReference: this.timeReference }), index.h("div", { class: "separator" })), index.h("div", { class: "done" }, index.h("ix-button", { onClick: () => this.onDone() }, this.textSelectDate))));
  }
};
DatePicker.style = datetimePickerCss;

exports.ix_datetime_picker = DatePicker;
