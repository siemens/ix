/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import { IxSelectItemLabelChangeEvent } from './events';
export class SelectItem {
  constructor() {
    this.label = undefined;
    this.value = undefined;
    this.selected = false;
    this.hover = false;
  }
  /**
   * @internal
   * @param event
   */
  async onItemClick(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.itemClick.emit(this.value);
  }
  componentDidRender() {
    if (!this.value) {
      throw Error('ix-select-item must have a `value` property');
    }
  }
  labelChange(newValue, oldValue) {
    this.hostElement.dispatchEvent(new IxSelectItemLabelChangeEvent({
      newValue: newValue,
      oldValue: oldValue,
    }));
  }
  render() {
    return (h(Host, null, h("ix-dropdown-item", { checked: this.selected, hover: this.hover, label: this.label ? this.label : this.value, onItemClick: (e) => this.onItemClick(e) })));
  }
  static get is() { return "ix-select-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["select-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["select-item.css"]
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
          "text": "Displayed name of the item"
        },
        "attribute": "label",
        "reflect": true
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Item value"
        },
        "attribute": "value",
        "reflect": true
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
          "text": "Whether the item is selected."
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "hover",
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
          "text": "Item clicked"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "onItemClick": {
        "complexType": {
          "signature": "(event?: CustomEvent<HTMLIxDropdownItemElement>) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "event"
                }],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "CustomEvent": {
              "location": "global"
            },
            "HTMLIxDropdownItemElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }, {
              "name": "param",
              "text": "event"
            }]
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "label",
        "methodName": "labelChange"
      }];
  }
}
