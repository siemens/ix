/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
export class IconButton {
  constructor() {
    this.variant = 'Secondary';
    this.outline = undefined;
    this.invisible = undefined;
    this.ghost = undefined;
    this.oval = undefined;
    this.icon = undefined;
    this.size = '24';
    this.color = undefined;
    this.selected = false;
    this.disabled = false;
    this.type = 'button';
  }
  getIconButtonClasses() {
    return Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled)), { 'icon-button': true, 'btn-icon-12': this.size === '12', 'btn-icon-16': this.size === '16', 'btn-icon-32': this.size === '32' || this.size === '24' || !this.size });
  }
  render() {
    return (h(Host, { class: { disabled: this.disabled } }, h("button", { class: this.getIconButtonClasses(), type: this.type }, h("ix-icon", { size: this.size, name: this.icon, color: this.color }), h("div", { style: { display: 'none' } }, h("slot", null)))));
  }
  static get is() { return "ix-icon-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["icon-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["icon-button.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'Primary' | 'Secondary'",
          "resolved": "\"Primary\" | \"Secondary\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Variant of button"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'Secondary'"
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
          "text": "Button outline"
        },
        "attribute": "outline",
        "reflect": false
      },
      "invisible": {
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
          "tags": [{
              "name": "deprecated",
              "text": "Use ghost property"
            }],
          "text": "Button invisible"
        },
        "attribute": "invisible",
        "reflect": false
      },
      "ghost": {
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
          "text": "Button invisible"
        },
        "attribute": "ghost",
        "reflect": false
      },
      "oval": {
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
          "text": "Button in oval shape"
        },
        "attribute": "oval",
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
          "text": "Button icon"
        },
        "attribute": "icon",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'32' | '24' | '16' | '12'",
          "resolved": "\"12\" | \"16\" | \"24\" | \"32\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Size of icon in button"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'24'"
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
          "text": "Color of icon in  button"
        },
        "attribute": "color",
        "reflect": false
      },
      "selected": {
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
          "text": "Selected state only working with outline or invisible"
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      },
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
          "text": "Disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'button' | 'submit'",
          "resolved": "\"button\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Type of the button"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      }
    };
  }
}
