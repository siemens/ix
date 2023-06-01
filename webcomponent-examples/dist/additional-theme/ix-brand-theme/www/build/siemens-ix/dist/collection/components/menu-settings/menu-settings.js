/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { forceUpdate, h, Host, } from '@stencil/core';
export class MenuAbout {
  constructor() {
    this.activeTabLabel = undefined;
    this.label = 'Settings';
    this.show = false;
  }
  get settingsItems() {
    return Array.from(this.el.querySelectorAll('ix-menu-settings-item'));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.settingsItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }
  componentWillLoad() {
    if (this.settingsItems.length) {
      this.setTab(this.activeTabLabel || this.settingsItems[0].label);
    }
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  watchActiveTabLabel(value) {
    this.setTab(value);
  }
  getTabItems() {
    return this.settingsItems.map(({ label }) => {
      return (h("ix-tab-item", { class: {
          active: label === this.activeTabLabel,
        }, onClick: () => this.setTab(label) }, label));
    });
  }
  render() {
    return (h(Host, { class: {
        animate__animated: true,
        animate__fadeInLeft: this.show,
        animate__fadeOutLeft: !this.show,
      } }, h("div", { class: "settings-header" }, h("h2", { class: "text-h2" }, this.label), h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), h("ix-tabs", null, this.getTabItems()), h("slot", null)));
  }
  static get is() { return "ix-menu-settings"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-settings.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-settings.css"]
    };
  }
  static get properties() {
    return {
      "activeTabLabel": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "active tab"
        },
        "attribute": "active-tab-label",
        "reflect": false
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
          "text": "Label"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "'Settings'"
      },
      "show": {
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
          "text": "Internal"
        },
        "attribute": "show",
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
          "text": "Popover closed"
        },
        "complexType": {
          "original": "MouseEvent",
          "resolved": "MouseEvent",
          "references": {
            "MouseEvent": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "activeTabLabel",
        "methodName": "watchActiveTabLabel"
      }];
  }
}
