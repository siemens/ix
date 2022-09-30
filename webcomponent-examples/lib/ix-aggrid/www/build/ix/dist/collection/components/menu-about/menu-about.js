/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, forceUpdate, h, Host, Prop, State, Watch } from '@stencil/core';
export class MenuAbout {
  constructor() {
    /**
     *
     */
    this.i18nImprintLabel = 'Imprint';
    /**
     * Active tab
     */
    this.activeTabLabel = this.i18nImprintLabel;
    /**
     * Label of first tab
     */
    this.label = 'About & legal information';
    /**
     * Internal
     */
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
    var _a;
    this.setTab(this.activeTabLabel || ((_a = this.aboutItems[0]) === null || _a === void 0 ? void 0 : _a.label));
  }
  componentDidLoad() {
    var _a;
    this.setTab(this.activeTabLabel || ((_a = this.aboutItems[0]) === null || _a === void 0 ? void 0 : _a.label));
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
  render() {
    return (h(Host, { class: {
        animate__animated: true,
        animate__fadeInLeft: this.show,
        animate__fadeOutLeft: !this.show,
      } },
      h("div", { class: "about-header" },
        h("h2", { class: "text-h2" }, this.label),
        h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })),
      h("ix-tabs", { selected: this.getSelectedTabIndex(this.activeTabLabel), class: "about-tabs" }, this.labels.map((label) => (h("ix-tab-item", { onClick: () => this.setTab(label) }, label)))),
      h("div", { class: "about-items" },
        h("slot", null))));
  }
  static get is() { return "ix-menu-about"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["menu-about.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["menu-about.css"]
  }; }
  static get properties() { return {
    "i18nImprintLabel": {
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
        "text": ""
      },
      "attribute": "i-1-8n-imprint-label",
      "reflect": true,
      "defaultValue": "'Imprint'"
    },
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
      "reflect": true,
      "defaultValue": "this.i18nImprintLabel"
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
  }; }
  static get states() { return {
    "labels": {}
  }; }
  static get events() { return [{
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
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "activeTabLabel",
      "methodName": "watchActiveTabLabel"
    }]; }
}
