/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Event, Fragment, h, Host, Prop, State } from '@stencil/core';
import { DateTime, Info } from 'luxon';
export class DatePicker {
  constructor() {
    /**
     * output date format
     */
    this.format = 'yyyy/LL/dd';
    /**
     * Set range size
     */
    this.range = true;
    /**
     * set styles
     */
    this.individual = true;
    /**
     * Set corners style
     */
    this.corners = 'rounded';
    this.daysInWeek = 7;
    this.dayNames = Info.weekdays();
    this.monthNames = Info.months();
    this.year = DateTime.now().year;
    this.month = DateTime.now().month;
    this.calendar = [];
    this.today = DateTime.now();
    this.years = [...Array(10).keys()].map((year) => year + DateTime.now().year - 5);
    this.tempYear = this.year;
    this.tempMonth = this.month;
    this.start = null;
    this.end = null;
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
    const start = this.getStartOfMonth(this.year, this.month);
    const end = this.getEndOfMonth(this.year, this.month);
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
        result[weekIndex] = []; // start a new chunk
      result[weekIndex].push(item);
      return result;
    }, []);
    for (let index = 1; index <= totalWeeks; index++) {
      const week = weekdays[index - 1];
      const firstWeekDay = week.find((day) => day !== undefined);
      const weekNumber = firstWeekDay
        ? DateTime.local(this.year, this.month, weekdays[index - 1][0])
          .weekNumber
        : undefined;
      calendar.push([weekNumber, week]);
    }
    this.calendar = calendar;
  }
  changeMonth(number) {
    if (this.month + number < 1) {
      this.year--;
      this.month = 12;
    }
    else if (this.month + number > 12) {
      this.year++;
      this.month = 1;
    }
    else {
      this.month += number;
    }
    this.calculateCalendar();
  }
  selectMonth(month) {
    this.month = month;
    this.year = this.tempYear;
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
    const daaay = DateTime.local(this.year, this.month, day);
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
      disabled: this.start &&
        daaay.toISO() < this.start.toISO() &&
        this.end === null &&
        this.range,
    };
  }
  selectDay(day) {
    const date = DateTime.local(this.year, this.month, day);
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
      this.dateChange.emit(this.getOutputFormat());
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
    this.dateChange.emit(this.getOutputFormat());
  }
  getOutputFormat() {
    if (!this.end)
      return this.start.toFormat(this.format);
    return (this.start.toFormat(this.format) + ' - ' + this.end.toFormat(this.format));
  }
  componentWillRender() {
    this.calculateCalendar();
  }
  render() {
    return (h(Host, null,
      h("ix-date-time-card", { individual: this.individual, corners: this.corners },
        h("div", { class: "header", slot: "header" },
          h("ix-icon-button", { onClick: () => this.changeMonth(-1), ghost: true, icon: "chevron-left", variant: "Primary", class: "arrows" }),
          h("div", { class: "selector" },
            h("ix-button", { ghost: true, ref: (ref) => (this.dropdownButtonRef = ref) },
              h("span", { class: "fontSize capitalize" },
                this.monthNames[this.month - 1],
                " ",
                this.year)),
            h("ix-dropdown", { class: "dropdown", trigger: this.dropdownButtonRef, placement: "bottom" },
              h("div", { class: "wrapper" },
                h("div", { class: "overflow", onScroll: () => this.infiniteScrollYears(), ref: (ref) => (this.yearContainerRef = ref) }, this.years.map((year) => (h("div", { class: { arrowYear: true }, onClick: (event) => this.selectTempYear(event, year) },
                  h("ix-icon", { class: {
                      hidden: this.tempYear !== year,
                      arrowPosition: true,
                    }, name: "chevron-right", size: "12" }),
                  h("div", { style: { 'min-width': 'max-content' } }, `${year}`))))),
                h("div", { class: "overflow" }, this.monthNames.map((month, index) => (h("div", { class: {
                    arrowYear: true,
                    selected: this.tempMonth - 1 === index,
                  }, onClick: () => this.selectMonth((index + 1)) },
                  h("ix-icon", { class: {
                      hidden: this.tempMonth - 1 !== index,
                      checkPosition: true,
                    }, name: "single-check", size: "16" }),
                  h("div", null,
                    h("span", { class: { capitalize: true, monthMargin: true } }, `${month} ${this.tempYear}`))))))))),
          h("ix-icon-button", { onClick: () => this.changeMonth(1), ghost: true, icon: "chevron-right", variant: "Primary", class: "arrows" })),
        h("div", { class: "grid" },
          h("div", { class: "calendar-item week-day" }),
          this.dayNames.map((name) => (h("div", { class: "calendar-item week-day" }, name.slice(0, 3)))),
          this.calendar.map((week) => {
            return (h(Fragment, null,
              h("div", { class: "calendar-item week-number" }, week[0]),
              week[1].map((day) => (h("div", { class: this.todayClass(day), onClick: () => this.selectDay(day) }, day)))));
          })),
        h("div", { class: { button: true, hidden: !this.individual } },
          h("ix-button", { onClick: () => this.done.emit(this.getOutputFormat()) }, "Done")))));
  }
  static get is() { return "ix-date-picker"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["date-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["date-picker.css"]
  }; }
  static get properties() { return {
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
        "text": "output date format"
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
        "text": "Set range size"
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
        "tags": [],
        "text": "set styles"
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
        "text": "Set corners style"
      },
      "attribute": "corners",
      "reflect": false,
      "defaultValue": "'rounded'"
    }
  }; }
  static get states() { return {
    "year": {},
    "month": {},
    "calendar": {},
    "today": {},
    "years": {},
    "tempYear": {},
    "tempMonth": {},
    "start": {},
    "end": {},
    "dropdownButtonRef": {},
    "yearContainerRef": {}
  }; }
  static get events() { return [{
      "method": "dateChange",
      "name": "dateChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Time change event"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "done",
      "name": "done",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "done event"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
