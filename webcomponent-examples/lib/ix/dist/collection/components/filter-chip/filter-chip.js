/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Host, Prop } from '@stencil/core';
export class FilterChip {
  constructor() {
    /**
     * If true the filter chip will be in disabled state
     */
    this.disabled = false;
  }
  onCloseClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeClick.emit();
  }
  render() {
    return (h(Host, { class: { disabled: this.disabled }, title: this.el.textContent },
      h("div", { class: "slot-container" },
        h("slot", null)),
      h("button", { disabled: this.disabled, class: "btn btn-invisible-secondary btn-oval", onClick: (e) => this.onCloseClick(e) },
        h("ix-icon", { name: "close-small", size: "16" }))));
  }
  static get is() { return "ix-filter-chip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["filter-chip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["filter-chip.css"]
  }; }
  static get properties() { return {
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
        "text": "If true the filter chip will be in disabled state"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "closeClick",
      "name": "closeClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Close clicked"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
