/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
import { TypedEvent } from '../utils/typed-event';
export class ToastContainer {
  constructor() {
    this.containerId = 'toast-container';
    this.containerClass = 'toast-container';
    this.position = 'bottom-right';
  }
  get hostContainer() {
    return document.getElementById(this.containerId);
  }
  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const toastContainer = document.createElement('div');
      toastContainer.id = this.containerId;
      toastContainer.classList.add(this.containerClass);
      toastContainer.classList.add(`toast-container--${this.position}`);
      document.body.appendChild(toastContainer);
    }
  }
  /**
   * Display a toast message
   * @param config
   */
  async showToast(config) {
    const toast = document.createElement('ix-toast');
    const onClose = new TypedEvent();
    function removeToast(result) {
      toast.remove();
      onClose.emit(result);
    }
    toast.toastTitle = config.title;
    toast.type = config.type;
    toast.autoClose = config.autoClose;
    toast.autoCloseDelay = config.autoCloseDelay;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.addEventListener('closeToast', (event) => {
      const { detail } = event;
      removeToast(detail);
    });
    if (typeof config.message === 'string') {
      toast.innerText = config.message;
    }
    else {
      toast.appendChild(config.message);
    }
    this.hostContainer.appendChild(toast);
    return {
      onClose,
      close: (result) => {
        removeToast(result);
      },
    };
  }
  render() {
    return h(Host, null);
  }
  static get is() { return "ix-toast-container"; }
  static get encapsulation() { return "scoped"; }
  static get properties() {
    return {
      "containerId": {
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
        "attribute": "container-id",
        "reflect": false,
        "defaultValue": "'toast-container'"
      },
      "containerClass": {
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
        "attribute": "container-class",
        "reflect": false,
        "defaultValue": "'toast-container'"
      },
      "position": {
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
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'bottom-right'"
      }
    };
  }
  static get methods() {
    return {
      "showToast": {
        "complexType": {
          "signature": "(config: ToastConfig) => Promise<{ onClose: TypedEvent<any>; close: (result?: any) => void; }>",
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
            "ToastConfig": {
              "location": "import",
              "path": "./toast-utils"
            },
            "CustomEvent": {
              "location": "global"
            }
          },
          "return": "Promise<{ onClose: TypedEvent<any>; close: (result?: any) => void; }>"
        },
        "docs": {
          "text": "Display a toast message",
          "tags": [{
              "name": "param",
              "text": "config"
            }]
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
