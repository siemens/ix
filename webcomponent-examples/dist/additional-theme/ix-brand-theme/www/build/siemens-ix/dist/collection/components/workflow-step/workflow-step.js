/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Fragment, h, Host, } from '@stencil/core';
export class WorkflowStep {
  constructor() {
    this.vertical = false;
    this.disabled = false;
    this.status = 'open';
    this.clickable = false;
    this.selected = false;
    this.position = 'undefined';
    this.iconName = 'circle';
    this.iconColor = 'workflow-step-icon-default--color';
  }
  select() {
    if (!this.clickable)
      return;
    if (this.disabled)
      return;
    this.selected = true;
    this.selectedHandler();
  }
  selectedHandler() {
    const selectedStyle = this.selected ? '--selected' : '';
    if (this.status === 'open') {
      this.iconName = this.selected ? 'circle-dot' : 'circle';
      this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
    }
    if (this.status === 'done' && !this.disabled) {
      this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
    }
  }
  watchPropHandler() {
    switch (this.status) {
      case 'open':
        this.iconName = 'circle';
        this.iconColor = 'workflow-step-icon-default--color';
        break;
      case 'success':
        this.iconName = 'success';
        this.iconColor = 'color-success';
        break;
      case 'done':
        this.iconName = 'success';
        this.iconColor = 'workflow-step-icon-done--color';
        break;
      case 'warning':
        this.iconName = 'warning';
        this.iconColor = 'color-warning';
        break;
      case 'error':
        this.iconName = 'error';
        this.iconColor = 'color-alarm';
        break;
      default:
        this.iconName = 'circle';
        break;
    }
    if (this.disabled) {
      this.iconColor = 'workflow-step-icon-success--color--disabled';
    }
  }
  componentDidLoad() {
    this.watchPropHandler();
    this.selectedHandler();
    this.customIconSlot = !!this.hostElement.querySelector('[slot="custom-icon"]');
  }
  render() {
    const icons = !this.customIconSlot ? (h(Fragment, null, h("ix-icon", { color: "color-1", name: this.iconName === 'warning' ? 'triangle-filled' : 'circle-filled', class: "absolute", size: "24" }), h("ix-icon", { color: this.iconColor, name: this.iconName, class: "absolute", size: "24" }))) : ('');
    return (h(Host, null, h("div", { tabIndex: 0, onClick: () => this.select(), class: {
        step: true,
        selected: this.selected,
        vertical: this.vertical,
        disabled: this.disabled,
      } }, h("div", { class: "wrapper" }, h("div", { class: {
        line: true,
        selected: this.selected,
        [this.status]: true,
        [this.position]: true,
      } }), h("div", { class: "iconWrapper" }, icons, h("slot", { name: "custom-icon" }))), h("div", { class: "text" }, h("slot", null)))));
  }
  static get is() { return "ix-workflow-step"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["workflow-step.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["workflow-step.css"]
    };
  }
  static get properties() {
    return {
      "vertical": {
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
          "text": "Select orientation"
        },
        "attribute": "vertical",
        "reflect": false,
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
          "text": "Set disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'open' | 'success' | 'done' | 'warning' | 'error'",
          "resolved": "\"done\" | \"error\" | \"open\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set status"
        },
        "attribute": "status",
        "reflect": false,
        "defaultValue": "'open'"
      },
      "clickable": {
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
          "text": "Activate navigation click"
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "selected": {
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
          "text": "Set selected"
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'first' | 'last' | 'undefined'",
          "resolved": "\"first\" | \"last\" | \"undefined\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Activate navigation click"
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'undefined'"
      }
    };
  }
  static get states() {
    return {
      "iconName": {},
      "iconColor": {}
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "selected",
        "methodName": "selectedHandler"
      }, {
        "propName": "status",
        "methodName": "watchPropHandler"
      }];
  }
}
