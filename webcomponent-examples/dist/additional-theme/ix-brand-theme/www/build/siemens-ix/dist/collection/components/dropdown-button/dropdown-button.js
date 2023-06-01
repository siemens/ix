/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
/**
 * @since 1.3.0
 */
export class DropdownButton {
  constructor() {
    this.variant = 'Primary';
    this.outline = false;
    this.ghost = false;
    this.active = false;
    this.disabled = false;
    this.label = '';
    this.icon = undefined;
    this.dropdownAnchor = undefined;
  }
  getTriangle() {
    return (h("div", { class: {
        triangle: true,
        hide: this.label !== '',
        primary: this.variant === 'Primary',
        secondary: this.variant === 'Secondary',
        ghost: this.ghost,
        outline: this.outline,
        disabled: this.disabled,
      } }));
  }
  render() {
    return (h(Host, null, h("div", { class: "dropdown-button", ref: (ref) => {
        this.dropdownAnchor = ref;
      } }, h("ix-button", { variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, class: { hide: this.label === '' } }, h("ix-icon", { name: this.icon, size: "24", class: { hide: this.icon === '' || this.icon === undefined } }), this.label, h("ix-icon", { name: "chevron-down-small", size: "24" })), h("ix-icon-button", { icon: this.icon, variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, class: { hide: this.label !== '' } }), this.getTriangle()), h("ix-dropdown", { class: "dropdown", trigger: this.dropdownAnchor, placement: "bottom", positioningStrategy: 'fixed', adjustDropdownWidthToReferenceWidth: true }, h("slot", null))));
  }
  static get is() { return "ix-dropdown-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["dropdown-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dropdown-button.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Buttons",
          "resolved": "\"Primary\" | \"Secondary\"",
          "references": {
            "Buttons": {
              "location": "import",
              "path": "../utils/button-variants"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Button varaint"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'Primary'"
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
          "text": "Outline button"
        },
        "attribute": "outline",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Button with no background or outline"
        },
        "attribute": "ghost",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Active button"
        },
        "attribute": "active",
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
          "text": "Disable button"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
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
          "text": "Set label"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
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
      }
    };
  }
  static get states() {
    return {
      "dropdownAnchor": {}
    };
  }
}
