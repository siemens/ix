/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class CuiToggle {
  constructor() {
    this.checked = false;
    this.disabled = false;
    this.indeterminate = false;
    this.color = 'accent';
    this.textOn = 'On';
    this.textOff = 'Off';
    this.textIndeterminate = 'Mixed';
    this.hideText = false;
  }
  async onKeyDown(event) {
    const targetElement = event.target;
    if (!this.hostElement.contains(targetElement)) {
      return;
    }
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.emitChange(event);
    }
  }
  emitChange(event) {
    if (this.disabled || this.indeterminate) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
  getText() {
    if (this.indeterminate || this.checked === undefined) {
      return this.textIndeterminate;
    }
    return this.checked ? this.textOn : this.textOff;
  }
  render() {
    return (h(Host, { class: {
        disabled: this.disabled,
        checked: this.checked,
        indeterminate: this.indeterminate || this.checked === undefined,
      } }, h("label", { class: "switch", tabindex: this.disabled ? -1 : 0 }, h("input", { tabindex: "-1", type: "checkbox", checked: this.checked, disabled: this.disabled, indeterminate: this.indeterminate || this.checked === undefined, id: this.hostElement.id, onChange: (e) => this.emitChange(e) }), h("span", { class: "slider" }, h("span", { class: "slider-track" }))), !this.hideText ? (h("span", { title: this.getText(), class: "text", onClick: (e) => this.emitChange(e) }, this.getText())) : null));
  }
  static get is() { return "ix-toggle"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["toggle.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["toggle.css"]
    };
  }
  static get properties() {
    return {
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether the slide-toggle element is checked or not."
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "Whether the slide-toggle element is disabled or not."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "indeterminate": {
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
          "text": "If true the control is in indeterminate state"
        },
        "attribute": "indeterminate",
        "reflect": false,
        "defaultValue": "false"
      },
      "color": {
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
              "name": "deprecated",
              "text": "Will be removed in 2.0.0"
            }],
          "text": "Basic and status colors from color palette"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'accent'"
      },
      "textOn": {
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
          "text": "Text for on state"
        },
        "attribute": "text-on",
        "reflect": false,
        "defaultValue": "'On'"
      },
      "textOff": {
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
          "text": "Text for off state"
        },
        "attribute": "text-off",
        "reflect": false,
        "defaultValue": "'Off'"
      },
      "textIndeterminate": {
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
          "text": "Text for indeterminate state"
        },
        "attribute": "text-indeterminate",
        "reflect": false,
        "defaultValue": "'Mixed'"
      },
      "hideText": {
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
          "text": "Hide `on` and `off` text"
        },
        "attribute": "hide-text",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "checkedChange",
        "name": "checkedChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "An event will be dispatched each time the slide-toggle changes its value."
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "onKeyDown",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
