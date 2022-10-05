/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Prop } from '@stencil/core';
import { getButtonClasses } from './base-button';
export class Button {
  constructor() {
    /**
     * Button varaint
     */
    this.variant = 'Primary';
    /**
     * Outline button
     */
    this.outline = false;
    /**
     * Invisible button
     *
     * @deprecated use ghost property
     */
    this.invisible = false;
    /**
     * Button with no background or outline
     */
    this.ghost = false;
    /**
     * Show button as selected. Should be used with outline or invisible
     */
    this.selected = false;
    /**
     * Disable the button
     */
    this.disabled = false;
    /**
     * Type of the button
     */
    this.type = 'button';
  }
  render() {
    return (h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) },
      h("slot", null)));
  }
  static get is() { return "ix-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["./button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
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
        "text": "Show button as selected. Should be used with outline or invisible"
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
  }; }
}
