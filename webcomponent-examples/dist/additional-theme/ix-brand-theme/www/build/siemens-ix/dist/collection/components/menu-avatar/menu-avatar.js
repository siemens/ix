/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class MenuAvatar {
  constructor() {
    this.avatarElementId = 'ix-menu-avatar-id';
    this.top = undefined;
    this.bottom = undefined;
    this.i18nLogout = 'Logout';
  }
  render() {
    return (h(Host, null, h("li", { class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32" }, h("g", { fill: "none", "fill-rule": "evenodd" }, h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n                    16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n                  6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n                  9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n                  6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" }))), h("div", { class: "avatar-name" }, h("span", { class: "text-default-single", title: this.top }, this.top), h("span", { class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { trigger: this.avatarElementId, placement: 'right-start', offset: {
        mainAxis: 12,
      } }, h("slot", null), h("ix-menu-avatar-item", { label: this.i18nLogout, icon: "log-out", onClick: (e) => {
        this.logoutClick.emit(e);
      } }))));
  }
  static get is() { return "ix-menu-avatar"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-avatar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-avatar.css"]
    };
  }
  static get properties() {
    return {
      "top": {
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
          "text": "First line of text"
        },
        "attribute": "top",
        "reflect": false
      },
      "bottom": {
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
          "text": "Second line of text"
        },
        "attribute": "bottom",
        "reflect": false
      },
      "i18nLogout": {
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
        "attribute": "i-1-8n-logout",
        "reflect": false,
        "defaultValue": "'Logout'"
      }
    };
  }
  static get events() {
    return [{
        "method": "logoutClick",
        "name": "logoutClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Logout click"
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
