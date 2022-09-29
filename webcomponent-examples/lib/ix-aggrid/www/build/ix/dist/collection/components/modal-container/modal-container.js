/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { Component, Element, h, Host, Method } from '@stencil/core';
import { TypedEvent } from '../utils/typed-event';
export class ModalContainer {
  /**
   * Display modal dialog
   *
   * @param config
   */
  async showModal(config) {
    const onClose = new TypedEvent();
    const onDismiss = new TypedEvent();
    const modal = document.createElement('ix-modal');
    let { title, content } = config, modifiedConfig = __rest(config, ["title", "content"]);
    Object.assign(modal, Object.assign({ headerTitle: title }, modifiedConfig));
    if (typeof content === 'string') {
      const template = document.createElement('template');
      content = content.trim();
      template.innerHTML = content;
      modal.appendChild(template.content.firstChild);
    }
    else {
      modal.appendChild(content);
    }
    this.hostElement.appendChild(modal);
    modal.addEventListener('closed', (event) => {
      this.hostElement.removeChild(modal);
      onClose.emit(event.detail);
    });
    modal.addEventListener('dismissed', (event) => {
      this.hostElement.removeChild(modal);
      onDismiss.emit(event.detail);
    });
    return {
      onClose,
      onDismiss,
    };
  }
  render() {
    return h(Host, null);
  }
  static get is() { return "ix-modal-container"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["modal-container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal-container.css"]
  }; }
  static get methods() { return {
    "showModal": {
      "complexType": {
        "signature": "(config: ModalConfig) => Promise<{ onClose: TypedEvent<any>; onDismiss: TypedEvent<any>; }>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "config"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "TypedEvent": {
            "location": "import",
            "path": "../utils/typed-event"
          },
          "ModalConfig": {
            "location": "import",
            "path": "../modal/modal-utils"
          },
          "CustomEvent": {
            "location": "global"
          }
        },
        "return": "Promise<{ onClose: TypedEvent<any>; onDismiss: TypedEvent<any>; }>"
      },
      "docs": {
        "text": "Display modal dialog",
        "tags": [{
            "name": "param",
            "text": "config"
          }]
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
