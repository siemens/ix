/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
import { getButtonClasses } from './base-button';
export class Button {
  constructor() {
    this.variant = 'Primary';
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.selected = false;
    this.disabled = false;
    this.type = 'button';
  }
  render() {
    return (h(Host, { class: {
        'button-disabled': this.disabled,
      } }, h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, h("slot", null))));
  }
  static get is() { return "ix-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["./button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.css"]
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
              "text": "use ghost property"
            }],
          "text": "Invisible button"
        },
        "attribute": "invisible",
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
          "text": "Show button as selected. Should be used with outline or ghost"
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
          "text": "Disable the button"
        },
        "attribute": "disabled",
        "reflect": true,
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
