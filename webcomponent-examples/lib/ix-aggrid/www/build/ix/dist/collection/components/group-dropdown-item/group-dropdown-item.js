/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, Prop } from '@stencil/core';
export class GroupDropdownItem {
  render() {
    return (h(Host, null,
      h("ix-dropdown-item", { label: this.label, icon: this.icon },
        h("slot", null))));
  }
  static get is() { return "ix-group-dropdown-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["group-dropdown-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["group-dropdown-item.css"]
  }; }
  static get properties() { return {
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
        "text": "Group dropdown label"
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
        "text": "Group dropdown icon"
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
