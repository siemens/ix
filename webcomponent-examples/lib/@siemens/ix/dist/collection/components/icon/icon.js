/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, Prop } from '@stencil/core';
export class Icon {
  render() {
    return (h(Host, { style: {
        color: this.color ? `var(--theme-${this.color})` : 'inherit',
      }, class: {
        [`size-12`]: this.size === '12',
        [`size-16`]: this.size === '16',
        [`size-24`]: this.size === '24',
        [`size-32`]: this.size === '32',
      } },
      h("i", { class: {
          glyph: true,
          [`glyph-${this.name}`]: true,
          'glyph-12': this.size === '12',
          'glyph-16': this.size === '16',
          'glyph-24': this.size === '24',
          'glyph-32': this.size === '32',
        } },
        h("slot", null))));
  }
  static get is() { return "ix-icon"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["icon.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'12' | '16' | '24' | '32'",
        "resolved": "\"12\" | \"16\" | \"24\" | \"32\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Size of the icon"
      },
      "attribute": "size",
      "reflect": false
    },
    "color": {
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
        "text": "Color of the icon"
      },
      "attribute": "color",
      "reflect": false
    },
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
        "text": "Use one of our defined icon names e.g. `copy`."
      },
      "attribute": "name",
      "reflect": true
    }
  }; }
}
