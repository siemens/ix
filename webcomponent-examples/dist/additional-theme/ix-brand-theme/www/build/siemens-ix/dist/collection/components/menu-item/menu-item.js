/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class MenuItem {
  constructor() {
    this.home = false;
    this.bottom = false;
    this.tabIcon = 'document';
    this.notifications = undefined;
    this.active = undefined;
    this.disabled = undefined;
    this.title = undefined;
  }
  get tabLabel() {
    return this.hostElement.querySelector('.tab-text');
  }
  componentDidRender() {
    const spanElement = this.tabLabel;
    const newTitle = spanElement.innerHTML.replace('&amp;', '&');
    if (this.title !== newTitle) {
      this.title = newTitle;
    }
  }
  render() {
    return (h(Host, { class: {
        disabled: this.disabled,
        'home-tab': this.home,
        'bottom-tab': this.bottom,
        active: this.active,
      } }, h("li", { class: "tab", title: this.title }, h("i", { class: `glyph glyph-${this.tabIcon}` }, h("div", { class: "notification" }, this.notifications ? (h("div", { class: "pill" }, this.notifications)) : null)), h("span", { class: "tab-text text-default" }, h("slot", null)))));
  }
  static get is() { return "ix-menu-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-item.css"]
    };
  }
  static get properties() {
    return {
      "home": {
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
          "text": "Move the Tab to a top position."
        },
        "attribute": "home",
        "reflect": false,
        "defaultValue": "false"
      },
      "bottom": {
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
              "text": "Will be removed in 2.0.0. Replaced by slot based implementation"
            }],
          "text": "Caution: this is no longer working. Please use slot=\"bottom\" instead.\n\nPlace tab on bottom"
        },
        "attribute": "bottom",
        "reflect": false,
        "defaultValue": "false"
      },
      "tabIcon": {
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
          "text": "Icon name from @siemens/ix-icons"
        },
        "attribute": "tab-icon",
        "reflect": false,
        "defaultValue": "'document'"
      },
      "notifications": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Show notification cound on tab"
        },
        "attribute": "notifications",
        "reflect": false
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
          "text": "State to display active"
        },
        "attribute": "active",
        "reflect": false
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
          "text": "Disable tab and remove event handlers"
        },
        "attribute": "disabled",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "title": {}
    };
  }
  static get elementRef() { return "hostElement"; }
}
