/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class DateTimeCard {
  constructor() {
    this.individual = true;
    this.corners = 'rounded';
  }
  cardClasses() {
    return {
      card: true,
      individual: this.individual,
      left: this.corners === 'left',
      right: this.corners === 'right',
    };
  }
  render() {
    return (h(Host, null, h("div", { class: this.cardClasses() }, h("div", { class: "header" }, h("slot", { name: "header" })), h("div", { class: "separator" }), h("div", { class: "content" }, h("slot", null)))));
  }
  static get is() { return "ix-date-time-card"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["date-time-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["date-time-card.css"]
    };
  }
  static get properties() {
    return {
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
              "location": "local"
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
    };
  }
  static get elementRef() { return "hostElement"; }
}
