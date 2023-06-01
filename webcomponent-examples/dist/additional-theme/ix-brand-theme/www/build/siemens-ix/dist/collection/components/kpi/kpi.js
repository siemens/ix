/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class Kpi {
  constructor() {
    this.label = undefined;
    this.value = undefined;
    this.unit = undefined;
    this.state = 'neutral';
    this.orientation = 'horizontal';
  }
  getStateIcon() {
    switch (this.state) {
      case 'alarm':
        return (h("ix-icon", { color: "kpi-display-icon--color", name: "alarm", size: "16" }));
      case 'warning':
        return (h("ix-icon", { color: "kpi-display-icon--color", name: "warning", size: "16" }));
      default:
        return '';
    }
  }
  getTooltipText() {
    let tooltip = `${this.label}: ${this.value}`;
    if (this.unit) {
      tooltip = tooltip.concat(` ${this.unit}`);
    }
    return tooltip;
  }
  render() {
    return (h(Host, { title: this.getTooltipText(), tabindex: "1", class: {
        stacked: this.orientation === 'vertical',
      } }, h("div", { class: {
        'kpi-container': true,
        alarm: this.state === 'alarm',
        warning: this.state === 'warning',
      } }, h("span", { class: "kpi-label" }, this.getStateIcon(), h("span", { class: "kpi-label-text" }, this.label)), h("span", { class: "kpi-value-container" }, h("span", { class: "kpi-value" }, this.value), this.unit ? h("span", { class: "kpi-unit" }, this.unit) : ''))));
  }
  static get is() { return "ix-kpi"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["kpi.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["kpi.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": ""
        },
        "attribute": "label",
        "reflect": false
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": false
      },
      "unit": {
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
          "text": ""
        },
        "attribute": "unit",
        "reflect": false
      },
      "state": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'neutral' | 'warning' | 'alarm'",
          "resolved": "\"alarm\" | \"neutral\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "state",
        "reflect": false,
        "defaultValue": "'neutral'"
      },
      "orientation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'horizontal' | 'vertical'",
          "resolved": "\"horizontal\" | \"vertical\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "orientation",
        "reflect": false,
        "defaultValue": "'horizontal'"
      }
    };
  }
}
