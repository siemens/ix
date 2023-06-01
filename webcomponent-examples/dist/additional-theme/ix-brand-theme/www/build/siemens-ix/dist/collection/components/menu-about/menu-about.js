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
    this.label = 'About & legal information';
    this.show = false;
    this.labels = [];
  }
  get aboutItems() {
    return Array.from(this.el.querySelectorAll('ix-menu-about-item'));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.aboutItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }
  componentWillLoad() {
    if (this.aboutItems.length) {
      this.setTab(this.activeTabLabel || this.aboutItems[0].label);
    }
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  componentWillRender() {
    this.updateLabels();
  }
  updateLabels() {
    this.labels = this.aboutItems.map((i) => i.label);
  }
  watchActiveTabLabel(value) {
    // Wait a DOM render cycle to get changed labels
    setTimeout(() => this.setTab(value));
  }
  getSelectedTabIndex(label) {
    const selectedItem = this.aboutItems.find((item) => item.label === label);
    return this.aboutItems.indexOf(selectedItem);
  }
  getTabItems() {
    return this.aboutItems.map(({ label }) => {
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
      } }, h("div", { class: "about-header" }, h("h2", { class: "text-h2" }, this.label), h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), h("ix-tabs", { selected: this.getSelectedTabIndex(this.activeTabLabel), class: "about-tabs" }, this.getTabItems()), h("div", { class: "about-items" }, h("slot", null))));
  }
  static get is() { return "ix-menu-about"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-about.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-about.css"]
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
          "text": "Active tab"
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
          "text": "Label of first tab"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "'About & legal information'"
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
  static get states() {
    return {
      "labels": {}
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
          "text": "About and Legal closed"
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
