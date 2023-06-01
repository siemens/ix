/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class BasicNavigation {
  constructor() {
    this.applicationName = undefined;
    this.hideHeader = false;
  }
  get menu() {
    return this.hostElement.querySelector('ix-menu');
  }
  componentDidRender() {
    if (this.menu) {
      this.appendMenu();
      this.adjustMenuHeight();
      this.menu.applicationName = this.applicationName;
    }
  }
  appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
  }
  adjustMenuHeight() {
    if (!this.hideHeader) {
      this.menu.style.height = 'calc(100% - 2.75rem)';
    }
  }
  render() {
    return (h(Host, { class: {
        'hide-header': this.hideHeader,
      } }, !this.hideHeader ? (h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo" }))) : null, h("div", { id: "menu-placeholder" }), h("div", { class: "content", onClick: () => this.menu.toggleMenu(false) }, h("slot", null))));
  }
  static get is() { return "ix-basic-navigation"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["basic-navigation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["basic-navigation.css"]
    };
  }
  static get properties() {
    return {
      "applicationName": {
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
          "text": "Application name"
        },
        "attribute": "application-name",
        "reflect": false
      },
      "hideHeader": {
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
          "text": "Hide application header"
        },
        "attribute": "hide-header",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
