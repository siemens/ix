/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class BreadcrumbItem {
  constructor() {
    this.label = undefined;
    this.icon = undefined;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "ix-breadcrumb-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["breadcrumb-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["breadcrumb-item.css"]
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
          "text": "Breadcrumb label"
        },
        "attribute": "label",
        "reflect": false
      },
      "icon": {
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
          "text": "Icon to be displayed next ot the label"
        },
        "attribute": "icon",
        "reflect": false
      }
    };
  }
}
