/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Host, Prop } from '@stencil/core';
export class Chip {
  constructor() {
    /**
     * Chip variant
     */
    this.variant = 'primary';
    /**
     * Display chip in active state. Only working witht `variant="primary"`
     */
    this.active = false;
    /**
     * Show close icon
     */
    this.closable = false;
    /**
     * Show chip with outline style
     */
    this.outline = false;
  }
  getCloseButton() {
    return (h("div", { class: "close-button-container" },
      h("button", { type: "button", class: "btn btn-invisible-secondary btn-icon btn-oval close-button", onClick: (event) => this.close.emit(event) }, this.variant === 'custom' ? (h("i", { class: "glyph glyph-16 glyph-close-small", style: { color: this.color } })) : (h("ix-icon", { name: 'close-small', size: '16' })))));
  }
  render() {
    return (h(Host, { class: {
        outline: this.outline,
      }, tabIndex: "-1", title: this.el.textContent, style: this.variant === 'custom'
        ? {
          color: this.color,
          backgroundColor: this.background,
        }
        : {} },
      this.icon ? (h("ix-icon", { class: 'with-icon', name: this.icon, size: '24' })) : null,
      h("span", { class: "slot-container" },
        h("slot", null)),
      this.closable ? this.getCloseButton() : null));
  }
  static get is() { return "ix-chip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["chip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["chip.css"]
  }; }
  static get properties() { return {
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
        "text": "Display chip in active state. Only working witht `variant=\"primary\"`"
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
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
  }; }
  static get events() { return [{
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
    }]; }
  static get elementRef() { return "el"; }
}
