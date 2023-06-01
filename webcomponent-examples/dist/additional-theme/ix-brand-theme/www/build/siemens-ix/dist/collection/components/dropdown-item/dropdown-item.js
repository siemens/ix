/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class DropdownItem {
  constructor() {
    this.label = undefined;
    this.icon = undefined;
    this.hover = false;
    this.disabled = false;
    this.checked = false;
  }
  /**
   * Internal usage only
   */
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }
  render() {
    return (h(Host, { class: {
        checked: this.checked,
        'icon-text': this.label !== undefined && this.icon !== undefined,
        'icon-only': this.label === undefined && this.icon !== undefined,
      } }, h("button", { class: {
        'dropdown-item': true,
        hover: this.hover,
        disabled: this.disabled,
      }, onClick: () => this.emitItemClick() }, this.checked ? (h("ix-icon", { class: "checkmark", name: "single-check", size: "16" })) : null, this.icon ? (h("span", { class: {
        glyph: true,
        [`glyph-${this.icon}`]: true,
      } })) : null, this.label ? h("span", { class: "label" }, this.label) : null, h("slot", null))));
  }
  static get is() { return "ix-dropdown-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["dropdown-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dropdown-item.css"]
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
          "text": "Label of dropdown item"
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
          "text": "Icon of dropdown item"
        },
        "attribute": "icon",
        "reflect": false
      },
      "hover": {
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
          "text": "Display hover state"
        },
        "attribute": "hover",
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
          "text": "Disable item and remove event listeners"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "checked": {
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
          "text": "Whether the item is checked or not. If true a checkmark will mark the item as checked."
        },
        "attribute": "checked",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "itemClick",
        "name": "itemClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Click on item"
        },
        "complexType": {
          "original": "HTMLIxDropdownItemElement",
          "resolved": "HTMLIxDropdownItemElement",
          "references": {
            "HTMLIxDropdownItemElement": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "emitItemClick": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Internal usage only",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
