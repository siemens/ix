/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, Prop } from '@stencil/core';
export class MenuAboutItem {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "ix-menu-about-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["menu-about-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-about-item.css"]
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
        "text": "About Item label"
      },
      "attribute": "label",
      "reflect": true
    }
  }; }
}
