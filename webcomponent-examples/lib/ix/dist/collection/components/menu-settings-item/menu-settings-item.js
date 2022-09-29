/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, Prop } from '@stencil/core';
export class MenuSettingsItem {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "ix-menu-settings-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["menu-settings-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-settings-item.css"]
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
        "text": "Label"
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
}
