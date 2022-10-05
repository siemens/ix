/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, Prop } from '@stencil/core';
export class ApplicationHeader {
  render() {
    return (h(Host, null,
      h("div", { class: "logo" },
        h("slot", { name: "logo" })),
      h("span", { class: "name" }, this.name),
      h("slot", null)));
  }
  static get is() { return "ix-application-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["application-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["application-header.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "Application name"
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
}
