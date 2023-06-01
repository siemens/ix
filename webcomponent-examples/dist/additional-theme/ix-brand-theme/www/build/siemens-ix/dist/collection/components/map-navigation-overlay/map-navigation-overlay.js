/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import anime from 'animejs';
export class MapNavigationOverlay {
  constructor() {
    this.name = undefined;
    this.icon = undefined;
    this.color = undefined;
  }
  componentWillLoad() {
    anime({
      targets: this.hostElement,
      duration: MapNavigationOverlay.slowTime,
      backdropFilter: [0, 'blur(1rem)'],
      translateX: ['-4rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        this.hostElement.classList.remove('d-none');
      },
    });
  }
  closeOverlay() {
    anime({
      targets: this.hostElement,
      duration: MapNavigationOverlay.slowTime,
      backdropFilter: ['blur(1rem)', 0],
      translateX: [0, '-4rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        this.closeClick.emit();
        this.hostElement.classList.add('d-none');
      },
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "overlay-header" }, h("div", { class: {
        'color-indicator': true,
        'd-none': this.color === 'undefined' || this.color === undefined,
      }, style: {
        'background-color': this.color
          ? `var(--theme-${this.color})`
          : '',
      } }), h("div", { class: "overlay-header-content" }, h("ix-icon", { size: "32", name: this.icon }), h("span", { class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { class: "overlay-close", ghost: true, icon: "close", size: "24", onClick: () => this.closeOverlay() })), h("slot", null)));
  }
  static get is() { return "ix-map-navigation-overlay"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["map-navigation-overlay.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["map-navigation-overlay.css"]
    };
  }
  static get properties() {
    return {
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
    };
  }
  static get events() {
    return [{
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
      }];
  }
  static get elementRef() { return "hostElement"; }
}
MapNavigationOverlay.slowTime = 500;
