/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class DatePicker {
  constructor() {
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
  static get is() { return "ix-datetime-picker"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["datetime-picker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["datetime-picker.css"]
    };
  }
  static get properties() {
    return {
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
      "showHour": {
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
          "text": "Show hour input"
        },
        "attribute": "show-hour",
        "reflect": false,
        "defaultValue": "false"
      },
      "showMinutes": {
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
          "text": "Show minutes input"
        },
        "attribute": "show-minutes",
        "reflect": false,
        "defaultValue": "false"
      },
      "showSeconds": {
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
          "text": "Show seconds input"
        },
        "attribute": "show-seconds",
        "reflect": false,
        "defaultValue": "false"
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
      "dateFormat": {
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
          "text": "Date format string.\nSee @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens."
        },
        "attribute": "date-format",
        "reflect": false,
        "defaultValue": "'yyyy/LL/dd'"
      },
      "timeFormat": {
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
          "text": "Time format string.\nSee @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens."
        },
        "attribute": "time-format",
        "reflect": false,
        "defaultValue": "'TT'"
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
        "reflect": false
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
      "time": {
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
          "text": "Select time with format string"
        },
        "attribute": "time",
        "reflect": false
      },
      "showTimeReference": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Show time reference input\nTime reference is default aligned with @see {this.timeFormat}"
        },
        "attribute": "show-time-reference",
        "reflect": false,
        "defaultValue": "undefined"
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
      "timeReference": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'AM' | 'PM'",
          "resolved": "\"AM\" | \"PM\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set time reference"
        },
        "attribute": "time-reference",
        "reflect": false
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
  static get events() {
    return [{
        "method": "done",
        "name": "done",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Done event\n\nSet `doneEventDelimiter` to null or undefine to get the typed event"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "timeChange",
        "name": "timeChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Time change"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "dateChange",
        "name": "dateChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Date change"
        },
        "complexType": {
          "original": "string | Omit<DateTimeSelectEvent, 'time'>",
          "resolved": "string | { from: string; to: string; }",
          "references": {
            "Omit": {
              "location": "global"
            },
            "DateTimeSelectEvent": {
              "location": "import",
              "path": "./event"
            }
          }
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
          "text": "Date selection event is fired after confirm button is pressend"
        },
        "complexType": {
          "original": "DateTimeSelectEvent",
          "resolved": "DateTimeSelectEvent",
          "references": {
            "DateTimeSelectEvent": {
              "location": "import",
              "path": "./event"
            }
          }
        }
      }];
  }
}
