import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as luxon } from './luxon.js';
import { d as defineCustomElement$5 } from './button.js';
import { d as defineCustomElement$4 } from './date-time-card.js';
import { d as defineCustomElement$3 } from './dropdown.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './icon-button.js';

const datePickerCss = ".sc-ix-date-picker-h .header.sc-ix-date-picker{display:flex;align-items:center;justify-content:space-between}.sc-ix-date-picker-h .selector.sc-ix-date-picker{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0.25rem 1rem}.sc-ix-date-picker-h .selector.sc-ix-date-picker .dropdown.sc-ix-date-picker{color:var(--theme-menu-item--color);font-size:14px;line-height:20px}.sc-ix-date-picker-h .selector.sc-ix-date-picker .fontSize.sc-ix-date-picker{font-size:16px}.sc-ix-date-picker-h .selector.sc-ix-date-picker .capitalize.sc-ix-date-picker{text-transform:capitalize}.sc-ix-date-picker-h .selector.sc-ix-date-picker .arrowYear.sc-ix-date-picker{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}.sc-ix-date-picker-h .selector.sc-ix-date-picker .arrowYear.sc-ix-date-picker:hover{background-color:var(--theme-select-list-item--background--hover)}.sc-ix-date-picker-h .selector.sc-ix-date-picker .arrowYear.selected.sc-ix-date-picker{background-color:var(--theme-select-list-item--background--selected)}.sc-ix-date-picker-h .selector.sc-ix-date-picker .arrowYear.sc-ix-date-picker .arrowPosition.sc-ix-date-picker{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}.sc-ix-date-picker-h .selector.sc-ix-date-picker .arrowYear.sc-ix-date-picker .checkPosition.sc-ix-date-picker{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}.sc-ix-date-picker-h .selector.sc-ix-date-picker .arrowYear.sc-ix-date-picker .monthMargin.sc-ix-date-picker{margin-left:10px}.sc-ix-date-picker-h .wrapper.sc-ix-date-picker{display:flex}.sc-ix-date-picker-h .wrapper.sc-ix-date-picker .overflow.sc-ix-date-picker{overflow-y:scroll;max-height:250px}.sc-ix-date-picker-h .grid.sc-ix-date-picker{display:grid;grid-template-columns:repeat(8, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;color:var(--theme-datepicker-today--color)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.sc-ix-date-picker{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--theme-datepicker-day--background);border:1px solid var(--theme-datepicker-day--background);width:40px;height:40px;cursor:pointer}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.sc-ix-date-picker{border:1px solid var(--theme-datepicker-today--border-color)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.sc-ix-date-picker:hover{background-color:var(--theme-datepicker-day--background--hover)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.sc-ix-date-picker:active{background-color:var(--theme-datepicker-day--background--active)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.selected.sc-ix-date-picker{box-shadow:inset 0 0 0 1px white}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.selected.sc-ix-date-picker:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.selected.sc-ix-date-picker:active{background-color:var(--theme-datepicker-day--background--selected-active)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.selected.disabled.sc-ix-date-picker{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);border:1px solid var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.range.sc-ix-date-picker{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range);border:1px solid var(--theme-datepicker-today--border-color--range);box-shadow:inset 0 0 0 1px white}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.range.sc-ix-date-picker:hover{background-color:var(--theme-datepicker-day--background--range-hover);border:1px solid var(--theme-datepicker-today--border-color--range-hover)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.range.sc-ix-date-picker:active{background-color:var(--theme-datepicker-day--background--range-active);border:1px solid var(--theme-datepicker-today--border-color--range-active)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.range.disabled.sc-ix-date-picker{background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled);border:1px solid var(--theme-datepicker-today--border-color--range-disabled)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.today.disabled.sc-ix-date-picker{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default;pointer-events:none}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.sc-ix-date-picker:hover{background-color:var(--theme-datepicker-day--background--hover)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.sc-ix-date-picker:active{background-color:var(--theme-datepicker-day--background--active)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.selected.sc-ix-date-picker{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);border:1px solid var(--theme-datepicker-day--background--selected)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.selected.sc-ix-date-picker:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.selected.sc-ix-date-picker:active{background-color:var(--theme-datepicker-day--background--selected-active)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.selected.disabled.sc-ix-date-picker{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.range.sc-ix-date-picker{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.range.sc-ix-date-picker:hover{background-color:var(--theme-datepicker-day--background--range-hover)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.range.sc-ix-date-picker:active{background-color:var(--theme-datepicker-day--background--range-active)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.range.disabled.sc-ix-date-picker{pointer-events:none;background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.disabled.sc-ix-date-picker{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled)}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.week-day.sc-ix-date-picker{color:var(--theme-datepicker-weekday--color);font-size:12px;line-height:20px;border:none;background:none;cursor:initial}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.empty-day.sc-ix-date-picker{border:none;background:none;cursor:initial}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.week-number.sc-ix-date-picker{font-size:10px;line-height:14px;color:var(--theme-datepicker-ix--color);border:none;background:none;cursor:initial}.sc-ix-date-picker-h .grid.sc-ix-date-picker .calendar-item.sc-ix-date-picker:focus-visible{background-color:var(--theme-datepicker-day--background--selected);border:inset 1px solid var(--theme-datepicker-day--border-color--selected);color:var(--theme-datepicker-day--color--selected);font-size:14px;line-height:20px;letter-spacing:0}.sc-ix-date-picker-h .button.sc-ix-date-picker{display:flex;justify-content:flex-end}.sc-ix-date-picker-h .hidden.sc-ix-date-picker{display:none}";

const DatePicker = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.dateChange = createEvent(this, "dateChange", 7);
    this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
    this.done = createEvent(this, "done", 7);
    this.dateSelect = createEvent(this, "dateSelect", 7);
    this.daysInWeek = 7;
    this.dayNames = luxon.Info.weekdays();
    this.monthNames = luxon.Info.months();
    this.format = 'yyyy/LL/dd';
    this.range = true;
    this.individual = true;
    this.corners = 'rounded';
    this.from = luxon.DateTime.now().toFormat(this.format);
    this.to = null;
    this.minDate = undefined;
    this.maxDate = undefined;
    this.eventDelimiter = ' - ';
    this.textSelectDate = 'Done';
    this.yearValue = this.year;
    this.today = luxon.DateTime.now();
    this.monthValue = this.month;
    this.calendar = [];
    this.years = [...Array(10).keys()].map((year) => year + this.year - 5);
    this.tempYear = this.yearValue;
    this.tempMonth = this.monthValue;
    this.start = luxon.DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
    });
    this.end = this.to
      ? luxon.DateTime.fromFormat(this.to, this.format)
      : null;
    this.dropdownButtonRef = undefined;
    this.yearContainerRef = undefined;
  }
  get year() {
    return luxon.DateTime.fromFormat(this.from, this.format).year;
  }
  get day() {
    return luxon.DateTime.fromFormat(this.from, this.format).day;
  }
  get month() {
    return luxon.DateTime.fromFormat(this.from, this.format).month;
  }
  onDone() {
    var _a, _b;
    this.done.emit(this.getOutputFormat());
    this.dateSelect.emit({
      from: (_a = this.start) === null || _a === void 0 ? void 0 : _a.toFormat(this.format),
      to: (_b = this.end) === null || _b === void 0 ? void 0 : _b.toFormat(this.format),
    });
  }
  onDateChange() {
    var _a, _b, _c, _d;
    if (this.eventDelimiter) {
      this.dateChange.emit(this.getOutputFormat());
    }
    else {
      this.dateChange.emit({
        from: (_a = this.start) === null || _a === void 0 ? void 0 : _a.toFormat(this.format),
        to: (_b = this.end) === null || _b === void 0 ? void 0 : _b.toFormat(this.format),
      });
    }
    if (this.range) {
      this.dateRangeChange.emit({
        from: (_c = this.start) === null || _c === void 0 ? void 0 : _c.toFormat(this.format),
        to: (_d = this.end) === null || _d === void 0 ? void 0 : _d.toFormat(this.format),
      });
    }
  }
  getStartOfMonth(year = luxon.DateTime.local().get('year'), month = luxon.DateTime.local().get('month')) {
    return luxon.DateTime.local(year, month).startOf('month');
  }
  getEndOfMonth(year = luxon.DateTime.local().get('year'), month = luxon.DateTime.local().get('month')) {
    return luxon.DateTime.local(year, month).endOf('month');
  }
  getDaysInMonth(start = this.getStartOfMonth(), end = this.getEndOfMonth()) {
    return Math.ceil(end.diff(start, 'days').days);
  }
  calculateCalendar() {
    const start = this.getStartOfMonth(this.yearValue, this.monthValue);
    const end = this.getEndOfMonth(this.yearValue, this.monthValue);
    const totalDays = this.getDaysInMonth(start, end);
    const totalWeeks = 6;
    const totalDaysInWeeks = totalWeeks * this.daysInWeek;
    const startWeekDay = start.weekday;
    const prependDays = startWeekDay - 1;
    const appendDays = totalDaysInWeeks - totalDays - prependDays;
    let weekdays = [];
    const calendar = [];
    // create list of days
    let days = [...new Array(totalDaysInWeeks).keys()].map((day) => day + 1);
    // add start empty days
    days.unshift(...new Array(prependDays));
    // remove & add end days
    days = days.slice(0, days.length - prependDays - appendDays);
    days.push(...new Array(appendDays));
    // make weeks
    weekdays = days.reduce((result, item, index) => {
      const weekIndex = Math.floor(index / this.daysInWeek);
      if (!result[weekIndex])
        result[weekIndex] = [];
      result[weekIndex].push(item);
      return result;
    }, []);
    for (let index = 1; index <= totalWeeks; index++) {
      const week = weekdays[index - 1];
      const firstWeekDay = week.find((day) => day !== undefined);
      const weekNumber = firstWeekDay
        ? luxon.DateTime.local(this.yearValue, this.monthValue, weekdays[index - 1][0]).weekNumber
        : undefined;
      calendar.push([weekNumber, week]);
    }
    this.calendar = calendar;
  }
  changeMonth(number) {
    if (this.monthValue + number < 1) {
      this.yearValue--;
      this.monthValue = 12;
    }
    else if (this.monthValue + number > 12) {
      this.yearValue++;
      this.monthValue = 1;
    }
    else {
      this.monthValue += number;
    }
    this.calculateCalendar();
  }
  selectMonth(month) {
    this.monthValue = month;
    this.yearValue = this.tempYear;
    this.tempMonth = month;
  }
  infiniteScrollYears() {
    const scroll = this.yearContainerRef.scrollTop;
    const maxScroll = this.yearContainerRef.scrollHeight;
    const atTop = scroll === 0;
    const atBottom = scroll + this.yearContainerRef.getBoundingClientRect().height ===
      maxScroll;
    const limit = 200;
    if (this.years.length > limit)
      return;
    if (atTop) {
      this.years = [
        ...[...Array(5).keys()].map((year) => year + this.years[0] - 5),
        ...this.years,
      ];
      this.yearContainerRef.scroll({ behavior: 'smooth', top: scroll + 100 });
    }
    if (atBottom) {
      this.years = [
        ...this.years,
        ...[...Array(5).keys()].map((year) => year + this.years[this.years.length - 1]),
      ];
      this.yearContainerRef.scroll({ behavior: 'smooth', top: scroll - 50 });
    }
  }
  selectTempYear(event, year) {
    event.stopPropagation();
    this.tempYear = year;
  }
  todayClass(day) {
    const today = luxon.DateTime.local();
    const daaay = luxon.DateTime.local(this.yearValue, this.monthValue, day);
    const isToday = Math.ceil(daaay.diff(today, 'days').days) === 0;
    return {
      'calendar-item': true,
      'empty-day': day === undefined,
      today: isToday,
      selected: (this.start && daaay.toISO() === this.start.toISO()) ||
        (this.end && daaay.toISO() === this.end.toISO()),
      range: this.start &&
        this.end &&
        daaay.toISO() > this.start.toISO() &&
        daaay.toISO() < this.end.toISO(),
      disabled: !this.isWithinMinMax(daaay) ||
        (this.start &&
          daaay.toISO() < this.start.toISO() &&
          this.end === null &&
          this.range),
    };
  }
  selectDay(day) {
    const date = luxon.DateTime.local(this.yearValue, this.monthValue, day);
    const isNotDay = day === undefined;
    const isFirstDay = this.start === null;
    const isLastDay = this.end === null;
    const isPeriod = this.start !== null && this.end !== null;
    const isStartBeforeEnd = this.start && this.start.toISO() < date.toISO();
    const isSameDay = this.start && !this.end && this.start.toISO() === date.toISO();
    if (isNotDay)
      return;
    if (isSameDay) {
      this.start = null;
      this.onDateChange();
      return;
    }
    if (!this.range) {
      this.start = date;
    }
    if (this.range && isFirstDay) {
      this.start = date;
    }
    if (this.range && isLastDay && isStartBeforeEnd) {
      this.end = date;
    }
    if (this.range && isPeriod) {
      this.start = date;
      this.end = null;
    }
    this.onDateChange();
  }
  getOutputFormat() {
    if (!this.start) {
      return null;
    }
    if (!this.end) {
      return this.start.toFormat(this.format);
    }
    return [
      this.start.toFormat(this.format),
      this.end.toFormat(this.format),
    ].join(this.eventDelimiter);
  }
  isWithinMinMax(date) {
    const dateIso = date.toISO();
    const _minDate = this.minDate
      ? luxon.DateTime.fromFormat(this.minDate, this.format)
      : null;
    const _maxDate = this.maxDate
      ? luxon.DateTime.fromFormat(this.maxDate, this.format)
      : null;
    return ((!_minDate || _minDate.toISO() <= dateIso) &&
      (!_maxDate || _maxDate.toISO() >= dateIso));
  }
  componentWillLoad() {
    if (this.year !== null) {
      this.yearValue = this.year;
    }
    if (this.month) {
      this.monthValue = this.month;
    }
  }
  componentWillRender() {
    this.calculateCalendar();
  }
  /**
   * Get the current DateTime
   */
  async getCurrentDate() {
    var _a, _b;
    return {
      start: (_a = this.start) === null || _a === void 0 ? void 0 : _a.toFormat(this.format),
      end: (_b = this.end) === null || _b === void 0 ? void 0 : _b.toFormat(this.format),
    };
  }
  render() {
    return (h(Host, null, h("ix-date-time-card", { individual: this.individual, corners: this.corners }, h("div", { class: "header", slot: "header" }, h("ix-icon-button", { onClick: () => this.changeMonth(-1), ghost: true, icon: "chevron-left", variant: "Primary", class: "arrows" }), h("div", { class: "selector" }, h("ix-button", { ghost: true, ref: (ref) => (this.dropdownButtonRef = ref) }, h("span", { class: "fontSize capitalize" }, this.monthNames[this.monthValue - 1], " ", this.yearValue)), h("ix-dropdown", { class: "dropdown", trigger: this.dropdownButtonRef, placement: "bottom" }, h("div", { class: "wrapper" }, h("div", { class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: (ref) => (this.yearContainerRef = ref) }, this.years.map((year) => (h("div", { class: { arrowYear: true }, onClick: (event) => this.selectTempYear(event, year) }, h("ix-icon", { class: {
        hidden: this.tempYear !== year,
        arrowPosition: true,
      }, name: "chevron-right", size: "12" }), h("div", { style: { 'min-width': 'max-content' } }, `${year}`))))), h("div", { class: "overflow" }, this.monthNames.map((month, index) => (h("div", { class: {
        arrowYear: true,
        selected: this.tempMonth - 1 === index,
      }, onClick: () => this.selectMonth((index + 1)) }, h("ix-icon", { class: {
        hidden: this.tempMonth - 1 !== index,
        checkPosition: true,
      }, name: "single-check", size: "16" }), h("div", null, h("span", { class: { capitalize: true, monthMargin: true } }, `${month} ${this.tempYear}`))))))))), h("ix-icon-button", { onClick: () => this.changeMonth(1), ghost: true, icon: "chevron-right", variant: "Primary", class: "arrows" })), h("div", { class: "grid" }, h("div", { class: "calendar-item week-day" }), this.dayNames.map((name) => (h("div", { class: "calendar-item week-day" }, name.slice(0, 3)))), this.calendar.map((week) => {
      return (h(Fragment, null, h("div", { class: "calendar-item week-number" }, week[0]), week[1].map((day) => (h("div", { class: this.todayClass(day), onClick: () => this.selectDay(day) }, day)))));
    })), h("div", { class: { button: true, hidden: !this.individual } }, h("ix-button", { onClick: () => this.onDone() }, this.textSelectDate)))));
  }
  static get style() { return datePickerCss; }
}, [2, "ix-date-picker", {
    "format": [1],
    "range": [4],
    "individual": [4],
    "corners": [1],
    "from": [1],
    "to": [1],
    "minDate": [1, "min-date"],
    "maxDate": [1, "max-date"],
    "eventDelimiter": [1, "event-delimiter"],
    "textSelectDate": [1, "text-select-date"],
    "yearValue": [32],
    "today": [32],
    "monthValue": [32],
    "calendar": [32],
    "years": [32],
    "tempYear": [32],
    "tempMonth": [32],
    "start": [32],
    "end": [32],
    "dropdownButtonRef": [32],
    "yearContainerRef": [32],
    "getCurrentDate": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-date-picker", "ix-button", "ix-date-time-card", "ix-dropdown", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-date-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DatePicker);
      }
      break;
    case "ix-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-date-time-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { DatePicker as D, defineCustomElement as d };
