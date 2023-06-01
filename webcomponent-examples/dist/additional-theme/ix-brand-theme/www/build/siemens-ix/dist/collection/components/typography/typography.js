/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { VariantsMapping } from './types';
/**
 * @internal
 */
export class IxTypography {
  constructor() {
    this.variant = 'default';
  }
  render() {
    const typographyClass = {
      [VariantsMapping[this.variant]]: true,
    };
    return (h("div", { class: typographyClass }, h("slot", null)));
  }
  static get is() { return "ix-typography"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["typography.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["typography.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TypographyVariants",
          "resolved": "\"caption\" | \"caption-single\" | \"default\" | \"default-single\" | \"default-title\" | \"default-title-single\" | \"display-large\" | \"h2\" | \"large\" | \"large-single\" | \"small\" | \"x-small\"",
          "references": {
            "TypographyVariants": {
              "location": "import",
              "path": "./types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Font variant"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'default'"
      }
    };
  }
}
