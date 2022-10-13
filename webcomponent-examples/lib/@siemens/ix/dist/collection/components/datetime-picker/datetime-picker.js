/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Event, h, Host, Prop } from '@stencil/core';
export class DatePicker {
  constructor() {
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
    return (h(Host, null,
      h("div", { class: "flex" },
        h("div", { class: "separator" }),
        h("ix-date-picker", { corners: "left", individual: false, range: this.range, onDateChange: (date) => (this.date = date.detail) }),
        h("ix-time-picker", { corners: "right", individual: false, showHour: this.showHour, showMinutes: this.showMinutes, showSeconds: this.showSeconds, showTimeReference: this.showTimeReference, onTimeChange: (time) => (this.time = time.detail) }),
        h("div", { class: "separator" })),
      h("div", { class: "done" },
        h("ix-button", { onClick: () => this.doneEvent() }, "Done"))));
  }
  static get is() { return "ix-datetime-picker"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["datetime-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["datetime-picker.css"]
  }; }
  static get properties() { return {
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
        "text": "Show Hour Input"
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
        "text": "Show Minutes Input"
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
        "text": "Show Seconds Input"
      },
      "attribute": "show-seconds",
      "reflect": false,
      "defaultValue": "false"
    },
    "showTimeReference": {
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
        "text": "Show Time Reference Input"
      },
      "attribute": "show-time-reference",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
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
    }]; }
}
