/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Fragment, h, Host, } from '@stencil/core';
import { DateTime, Info } from 'luxon';
export class DatePicker {
  constructor() {
    this.daysInWeek = 7;
    this.dayNames = Info.weekdays();
    this.monthNames = Info.months();
    this.format = 'yyyy/LL/dd';
    this.range = true;
    this.individual = true;
    this.corners = 'rounded';
    this.from = DateTime.now().toFormat(this.format);
    this.to = null;
    this.minDate = undefined;
    this.maxDate = undefined;
    this.eventDelimiter = ' - ';
    this.textSelectDate = 'Done';
    this.yearValue = this.year;
    this.today = DateTime.now();
    this.monthValue = this.month;
    this.calendar = [];
    this.years = [...Array(10).keys()].map((year) => year + this.year - 5);
    this.tempYear = this.yearValue;
    this.tempMonth = this.monthValue;
    this.start = DateTime.fromObject({
      year: this.year,
      month: this.month,
      day: this.day,
    });
    this.end = this.to
      ? DateTime.fromFormat(this.to, this.format)
      : null;
    this.dropdownButtonRef = undefined;
    this.yearContainerRef = undefined;
  }
  get year() {
    return DateTime.fromFormat(this.from, this.format).year;
  }
  get day() {
    return DateTime.fromFormat(this.from, this.format).day;
  }
  get month() {
    return DateTime.fromFormat(this.from, this.format).month;
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
  getStartOfMonth(year = DateTime.local().get('year'), month = DateTime.local().get('month')) {
    return DateTime.local(year, month).startOf('month');
  }
  getEndOfMonth(year = DateTime.local().get('year'), month = DateTime.local().get('month')) {
    return DateTime.local(year, month).endOf('month');
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
        ? DateTime.local(this.yearValue, this.monthValue, weekdays[index - 1][0]).weekNumber
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
    const today = DateTime.local();
    const daaay = DateTime.local(this.yearValue, this.monthValue, day);
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
    const date = DateTime.local(this.yearValue, this.monthValue, day);
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
      ? DateTime.fromFormat(this.minDate, this.format)
      : null;
    const _maxDate = this.maxDate
      ? DateTime.fromFormat(this.maxDate, this.format)
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
  static get is() { return "ix-date-picker"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["date-picker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["date-picker.css"]
    };
  }
  static get properties() {
    return {
      "format": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Date format string.\nSee @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens."
        },
        "attribute": "format",
        "reflect": false,
        "defaultValue": "'yyyy/LL/dd'"
      },
      "range": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If true a range of dates can be selected."
        },
        "attribute": "range",
        "reflect": false,
        "defaultValue": "true"
      },
      "individual": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "deprecated",
              "text": "Will be removed in 2.0.0"
            }],
          "text": ""
        },
        "attribute": "individual",
        "reflect": false,
        "defaultValue": "true"
      },
      "corners": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "DateTimeCardCorners",
          "resolved": "\"left\" | \"right\" | \"rounded\"",
          "references": {
            "DateTimeCardCorners": {
              "location": "import",
              "path": "../date-time-card/date-time-card"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Corner style"
        },
        "attribute": "corners",
        "reflect": false,
        "defaultValue": "'rounded'"
      },
      "from": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Picker date. If the picker is in range mode this property is the start date.\n\nFormat is based on `format`"
        },
        "attribute": "from",
        "reflect": false,
        "defaultValue": "DateTime.now().toFormat(this.format)"
      },
      "to": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | null",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Picker date. If the picker is in range mode this property is the end date.\nIf the picker is not in range mode leave this value `null`\n\nFormat is based on `format`"
        },
        "attribute": "to",
        "reflect": false,
        "defaultValue": "null"
      },
      "minDate": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "The earliest date that can be selected by the date picker.\nIf not set there will be no restriction."
        },
        "attribute": "min-date",
        "reflect": false
      },
      "maxDate": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "The latest date that can be selected by the date picker.\nIf not set there will be no restriction."
        },
        "attribute": "max-date",
        "reflect": false
      },
      "eventDelimiter": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Default behavior of the done event is to join the two events (date and time) into one combined string output.\nThis combination can be configured over the delimiter"
        },
        "attribute": "event-delimiter",
        "reflect": false,
        "defaultValue": "' - '"
      },
      "textSelectDate": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Text of date select button"
        },
        "attribute": "text-select-date",
        "reflect": false,
        "defaultValue": "'Done'"
      }
    };
  }
  static get states() {
    return {
      "yearValue": {},
      "today": {},
      "monthValue": {},
      "calendar": {},
      "years": {},
      "tempYear": {},
      "tempMonth": {},
      "start": {},
      "end": {},
      "dropdownButtonRef": {},
      "yearContainerRef": {}
    };
  }
  static get events() {
    return [{
        "method": "dateChange",
        "name": "dateChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "depracted",
              "text": "String output will be removed. Set \u00B4doneEventDelimiter\u00B4 to undefined or null to get date change object instead of a string"
            }],
          "text": "Date change event\n\nIf datepicker is in range mode the event detail will be sperated with a `-` e.g.\n`2022/10/22 - 2022/10/24` (start and end). If range mode is choosen consider to use `dateRangeChange`."
        },
        "complexType": {
          "original": "LegacyDateChangeEvent",
          "resolved": "DateChangeEvent | string",
          "references": {
            "LegacyDateChangeEvent": {
              "location": "import",
              "path": "./events"
            }
          }
        }
      }, {
        "method": "dateRangeChange",
        "name": "dateRangeChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Date range change.\nOnly triggered if datepicker is in range mode"
        },
        "complexType": {
          "original": "DateChangeEvent",
          "resolved": "DateChangeEvent",
          "references": {
            "DateChangeEvent": {
              "location": "import",
              "path": "./events"
            }
          }
        }
      }, {
        "method": "done",
        "name": "done",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "deprecated",
              "text": "Will be removed in 2.0.0. Use `dateSelect`"
            }],
          "text": "Date selection confirmed via button action"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "dateSelect",
        "name": "dateSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Date selection confirmed via button action"
        },
        "complexType": {
          "original": "DateChangeEvent",
          "resolved": "DateChangeEvent",
          "references": {
            "DateChangeEvent": {
              "location": "import",
              "path": "./events"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "getCurrentDate": {
        "complexType": {
          "signature": "() => Promise<{ start: string; end: string; }>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<{ start: string; end: string; }>"
        },
        "docs": {
          "text": "Get the current DateTime",
          "tags": []
        }
      }
    };
  }
}
