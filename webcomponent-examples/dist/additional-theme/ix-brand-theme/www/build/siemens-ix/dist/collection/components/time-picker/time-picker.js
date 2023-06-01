/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import { DateTime } from 'luxon';
export class TimePicker {
  constructor() {
    this._time = DateTime.now();
    this.format = 'TT';
    this.corners = 'rounded';
    this.individual = true;
    this.showHour = false;
    this.showMinutes = false;
    this.showSeconds = false;
    this.time = DateTime.now().toFormat(this.format);
    this.showTimeReference = undefined;
    this.timeReference = DateTime.fromFormat(this.time, this.format).toFormat('a');
    this.textSelectTime = 'Done';
    this.hourInputRef = undefined;
    this.minuteInputRef = undefined;
    this.secondInputRef = undefined;
    this.referenceInputRef = undefined;
  }
  get hour() {
    return this._time.hour;
  }
  get minutes() {
    return this._time.minute;
  }
  get seconds() {
    return this._time.second;
  }
  updateInput(step, { hours = undefined, minutes = undefined, seconds = undefined }) {
    if (hours)
      step === 'up' ? this.hourInputRef.stepUp() : this.hourInputRef.stepDown();
    if (minutes)
      step === 'up'
        ? this.minuteInputRef.stepUp()
        : this.minuteInputRef.stepDown();
    if (seconds)
      step === 'up'
        ? this.secondInputRef.stepUp()
        : this.secondInputRef.stepDown();
    this._time = this._time.set({
      hour: Number(this.hourInputRef.value),
      minute: Number(this.minuteInputRef.value),
      second: Number(this.secondInputRef.value),
    });
    this.emitTimeChange();
  }
  changeReference() {
    this.referenceInputRef.value =
      this.referenceInputRef.value === 'PM' ? 'AM' : 'PM';
    this.setHourAccordingToReference();
    this.emitTimeChange();
  }
  setHourAccordingToReference() {
    let hour = Number(this.hourInputRef.value);
    if (this.referenceInputRef.value === 'PM')
      hour += 12;
    this._time = this._time.set({ hour });
  }
  emitTimeChange() {
    const time = this._time.toFormat(this.format);
    this.timeChange.emit(time);
  }
  componentWillLoad() {
    this._time = DateTime.fromFormat(this.time, this.format);
    if (this.showTimeReference === undefined) {
      const matchedKeys = Object.keys(DateTime.fromFormatExplain(this.time, this.format).matches);
      this.showTimeReference = matchedKeys.includes('a');
    }
  }
  /**
   * Get current time
   */
  async getCurrentTime() {
    return this._time.toFormat(this.format);
  }
  render() {
    let hideHour = !this.showHour;
    let hideMinutes = !this.showMinutes;
    let hideSeconds = !this.showSeconds;
    const hideTimeReference = !this.showTimeReference;
    const hideIndividual = !this.individual;
    if (!this.showHour && !this.showMinutes && !this.showSeconds) {
      hideHour = false;
      hideMinutes = false;
      hideSeconds = false;
    }
    const hideHourSeperator = hideMinutes || hideHour;
    const hideMinutesSeperator = hideSeconds || hideMinutes;
    return (h(Host, null, h("ix-date-time-card", { individual: this.individual, corners: this.corners }, h("div", { class: "header", slot: "header" }, h("div", { class: "title" }, "Time")), h("div", { class: "clock" }, h("div", { class: { columns: true, hidden: hideHour } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { hours: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "hours", type: "number", placeholder: "00", value: this.hour, min: "0", disabled: true, max: this.showTimeReference === true ? 11 : 23, ref: (ref) => (this.hourInputRef = ref) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { hours: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })), h("div", { class: { 'column-seperator': true, hidden: hideHourSeperator } }, ":"), h("div", { class: { columns: true, hidden: hideMinutes } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { minutes: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "minutes", type: "number", placeholder: "00", value: this.minutes, min: "0", max: "59", disabled: true, ref: (ref) => (this.minuteInputRef = ref) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { minutes: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })), h("div", { class: { 'column-seperator': true, hidden: hideMinutesSeperator } }, ":"), h("div", { class: { columns: true, hidden: hideSeconds } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { seconds: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "seconds", type: "number", placeholder: "00", value: this.seconds, disabled: true, min: "0", max: "59", ref: (ref) => (this.secondInputRef = ref) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { seconds: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })), h("div", { class: {
        columns: true,
        'default-space': true,
        hidden: hideTimeReference,
      } }, h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "reference", type: "text", ref: (ref) => (this.referenceInputRef = ref), value: this.timeReference, disabled: true, class: "text-align" }), h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" }))), h("div", { class: { button: true, hidden: hideIndividual } }, h("ix-button", { onClick: () => this.done.emit(this._time.toFormat(this.format)) }, this.textSelectTime)))));
  }
  static get is() { return "ix-time-picker"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["time-picker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["time-picker.css"]
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
          "tags": [{
              "name": "since",
              "text": "1.1.0"
            }],
          "text": "Format of time string"
        },
        "attribute": "format",
        "reflect": false,
        "defaultValue": "'TT'"
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
        "reflect": false,
        "defaultValue": "DateTime.now().toFormat(this.format)"
      },
      "showTimeReference": {
        "type": "any",
        "mutable": true,
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
              "text": "1.1.0 time reference is default aligned with formt tt"
            }],
          "text": "Show time reference input"
        },
        "attribute": "show-time-reference",
        "reflect": false,
        "defaultValue": "undefined"
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
        "reflect": false,
        "defaultValue": "DateTime.fromFormat(\n    this.time,\n    this.format\n  ).toFormat('a') as 'PM' | 'AM'"
      },
      "textSelectTime": {
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
        "attribute": "text-select-time",
        "reflect": false,
        "defaultValue": "'Done'"
      }
    };
  }
  static get states() {
    return {
      "hourInputRef": {},
      "minuteInputRef": {},
      "secondInputRef": {},
      "referenceInputRef": {}
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
          "text": "Time event"
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
          "tags": [],
          "text": "Time change event"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "getCurrentTime": {
        "complexType": {
          "signature": "() => Promise<string>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string>"
        },
        "docs": {
          "text": "Get current time",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
