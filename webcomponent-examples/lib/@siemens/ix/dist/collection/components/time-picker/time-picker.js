/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Host, Prop, State } from '@stencil/core';
import { DateTime } from 'luxon';
export class TimePicker {
  constructor() {
    /**
     * Set corners style
     */
    this.corners = 'rounded';
    /**
     * set styles
     */
    this.individual = true;
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
    this.time = DateTime.fromFormat('00:00:00 AM', 'tt');
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
    this.time = this.time.set({
      hour: Number(this.hourInputRef.value),
      minute: Number(this.minuteInputRef.value),
      second: Number(this.secondInputRef.value),
    });
    this.setHourAccordingToReference();
    this.timeChange.emit(this.time.toFormat('TT'));
  }
  changeReference() {
    this.referenceInputRef.value =
      this.referenceInputRef.value === 'PM' ? 'AM' : 'PM';
    this.setHourAccordingToReference();
    this.timeChange.emit(this.time.toFormat('TT'));
  }
  setHourAccordingToReference() {
    let hour = Number(this.hourInputRef.value);
    if (this.referenceInputRef.value === 'PM')
      hour += 12;
    this.time = this.time.set({ hour });
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
    return (h(Host, null,
      h("ix-date-time-card", { individual: this.individual, corners: this.corners },
        h("div", { class: "header", slot: "header" },
          h("div", { class: "title" }, "Time")),
        h("div", { class: "clock" },
          h("div", { class: { columns: true, hidden: hideHour } },
            h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { hours: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }),
            h("input", { name: "hours", type: "number", placeholder: "00", min: "0", disabled: true, max: this.showTimeReference === true ? 11 : 23, ref: (ref) => (this.hourInputRef = ref) }),
            h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { hours: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })),
          h("div", { class: { 'column-seperator': true, hidden: hideHourSeperator } }, ":"),
          h("div", { class: { columns: true, hidden: hideMinutes } },
            h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { minutes: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }),
            h("input", { name: "minutes", type: "number", placeholder: "00", min: "0", max: "59", disabled: true, ref: (ref) => (this.minuteInputRef = ref) }),
            h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { minutes: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })),
          h("div", { class: { 'column-seperator': true, hidden: hideMinutesSeperator } }, ":"),
          h("div", { class: { columns: true, hidden: hideSeconds } },
            h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { seconds: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }),
            h("input", { name: "seconds", type: "number", placeholder: "00", disabled: true, min: "0", max: "59", ref: (ref) => (this.secondInputRef = ref) }),
            h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { seconds: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })),
          h("div", { class: {
              columns: true,
              'default-space': true,
              hidden: hideTimeReference,
            } },
            h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }),
            h("input", { name: "reference", type: "text", ref: (ref) => (this.referenceInputRef = ref), value: "AM", disabled: true, class: "text-align" }),
            h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" }))),
        h("div", { class: { button: true, hidden: hideIndividual } },
          h("ix-button", { onClick: () => this.done.emit(this.time.toFormat('TT')) }, "Done")))));
  }
  static get is() { return "ix-time-picker"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["time-picker.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["time-picker.css"]
  }; }
  static get properties() { return {
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
  static get states() { return {
    "hourInputRef": {},
    "minuteInputRef": {},
    "secondInputRef": {},
    "referenceInputRef": {}
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
    }]; }
  static get elementRef() { return "hostElement"; }
}
