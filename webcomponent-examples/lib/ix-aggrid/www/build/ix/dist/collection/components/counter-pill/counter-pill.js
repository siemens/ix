/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host, Prop } from '@stencil/core';
export class CounterPill {
  constructor() {
    /**
     * Pill variant
     */
    this.variant = 'primary';
    /**
     * Show pill as outline
     */
    this.outline = false;
    /**
     * Align pill content left
     */
    this.alignLeft = false;
  }
  render() {
    return (h(Host, { class: {
        outline: this.outline,
        'align-left': this.alignLeft,
      }, style: this.variant === 'custom'
        ? {
          color: this.color,
          backgroundColor: this.background,
        }
        : {}, title: this.el.textContent },
      h("span", { class: "slot-container" },
        h("slot", null))));
  }
  static get is() { return "ix-counter-pill"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["counter-pill.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["counter-pill.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'primary'\n    | 'alarm'\n    | 'critical'\n    | 'warning'\n    | 'info'\n    | 'neutral'\n    | 'success'\n    | 'custom'",
        "resolved": "\"alarm\" | \"critical\" | \"custom\" | \"info\" | \"neutral\" | \"primary\" | \"success\" | \"warning\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Pill variant"
      },
      "attribute": "variant",
      "reflect": true,
      "defaultValue": "'primary'"
    },
    "outline": {
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
        "text": "Show pill as outline"
      },
      "attribute": "outline",
      "reflect": false,
      "defaultValue": "false"
    },
    "background": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Custom color for pill. Only working for `variant='custom'`"
      },
      "attribute": "background",
      "reflect": false
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Custom font color for pill. Only working for `variant='custom'`"
      },
      "attribute": "color",
      "reflect": false
    },
    "alignLeft": {
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
        "text": "Align pill content left"
      },
      "attribute": "align-left",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
