/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, Prop } from '@stencil/core';
export class Tile {
  constructor() {
    /**
     * Size of the tile - one of 'small', 'medium' or 'large'
     */
    this.size = 'medium';
  }
  render() {
    return (h(Host, { class: {
        'tile-small': this.size === 'small',
        'tile-medium': this.size === 'medium',
        'tile-big': this.size === 'big',
      } },
      h("div", { class: "tile-header text-l-title" },
        h("slot", { name: "header" })),
      h("div", { class: "tile-subheader" },
        h("slot", { name: "subheader" })),
      h("div", { class: "tile-content" },
        h("slot", null)),
      h("div", { class: "tile-footer" },
        h("slot", { name: "footer" }))));
  }
  static get is() { return "ix-tile"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["tile.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tile.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'medium' | 'big'",
        "resolved": "\"big\" | \"medium\" | \"small\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size of the tile - one of 'small', 'medium' or 'large'"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'medium'"
    }
  }; }
}
