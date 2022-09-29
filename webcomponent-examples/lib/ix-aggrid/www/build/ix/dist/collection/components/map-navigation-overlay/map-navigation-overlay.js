/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Event, h, Host, Prop } from '@stencil/core';
export class MapNavigationOverlay {
  render() {
    return (h(Host, null,
      h("div", { class: "overlay-header" },
        h("div", { class: {
            'color-indicator': true,
            'd-none': this.color === 'undefined' || this.color === undefined,
          }, style: {
            'background-color': this.color
              ? `var(--theme-${this.color})`
              : '',
          } }),
        h("div", { class: "overlay-header-content" },
          h("ix-icon", { size: "32", name: this.icon }),
          h("span", { class: "overlay-header-title", title: this.name }, this.name)),
        h("ix-icon-button", { class: "overlay-close", invisible: true, icon: "close", size: "24", onClick: () => this.closeClick.emit() })),
      h("slot", null)));
  }
  static get is() { return "ix-map-navigation-overlay"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["map-navigation-overlay.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["map-navigation-overlay.css"]
  }; }
  static get properties() { return {
    "name": {
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
        "text": "Title of overlay"
      },
      "attribute": "name",
      "reflect": false
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
        "text": "Icon of overlay"
      },
      "attribute": "icon",
      "reflect": false
    },
    "color": {
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
        "text": "Color of icon"
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "closeClick",
      "name": "closeClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event closed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
