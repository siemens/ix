/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class Chip {
  constructor() {
    this.variant = 'primary';
    this.active = true;
    this.closable = false;
    this.icon = undefined;
    this.background = undefined;
    this.color = undefined;
    this.outline = false;
  }
  getCloseButton() {
    return (h("div", { class: "close-button-container" }, h("button", { type: "button", class: "btn btn-invisible-secondary btn-icon btn-oval close-button", onClick: (event) => this.close.emit(event) }, this.variant === 'custom' ? (h("i", { class: "glyph glyph-16 glyph-close-small", style: { color: this.color } })) : (h("ix-icon", { name: 'close-small', size: '16' })))));
  }
  render() {
    const isInactive = this.active === false;
    let customStyle = {};
    if (this.variant === 'custom' && this.outline === false) {
      customStyle = {
        color: this.color,
        backgroundColor: this.background,
      };
    }
    if (this.variant === 'custom' && this.outline === true) {
      customStyle = {
        color: this.color,
        borderColor: this.background,
      };
    }
    return (h(Host, { class: {
        outline: this.outline,
        inactive: isInactive,
      }, tabIndex: "-1", title: this.el.textContent, style: Object.assign({}, customStyle) }, h("ix-icon", { class: {
        'with-icon': true,
        hidden: this.icon === undefined || this.icon === '',
      }, name: this.icon, size: '24' }), h("span", { class: "slot-container" }, h("slot", null)), isInactive === false && this.closable ? this.getCloseButton() : null));
  }
  static get is() { return "ix-chip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["chip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chip.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'primary'\n    | 'alarm'\n    | 'critical'\n    | 'warning'\n    | 'info'\n    | 'neutral'\n    | 'success'\n    | 'custom'",
          "resolved": "\"alarm\" | \"critical\" | \"custom\" | \"info\" | \"neutral\" | \"primary\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Chip variant"
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "'primary'"
      },
      "active": {
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
          "text": "Determines if the chip is interactive. If false no user input (e.g. mouse states, keyboard navigation)\nwill be possible and also the close button will not be present."
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "true"
      },
      "closable": {
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
          "text": "Show close icon"
        },
        "attribute": "closable",
        "reflect": false,
        "defaultValue": "false"
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Show icon"
        },
        "attribute": "icon",
        "reflect": false
      },
      "background": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Custom color for pill. Only working for `variant='custom'`"
        },
        "attribute": "background",
        "reflect": false
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Custom font color for pill. Only working for `variant='custom'`"
        },
        "attribute": "color",
        "reflect": false
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
          "text": "Show chip with outline style"
        },
        "attribute": "outline",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "close",
        "name": "close",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fire event if close button is clicked"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
