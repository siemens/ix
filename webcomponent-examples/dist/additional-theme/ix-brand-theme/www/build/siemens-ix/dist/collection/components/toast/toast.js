/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class Toast {
  constructor() {
    this.type = 'info';
    this.toastTitle = undefined;
    this.autoCloseDelay = 5000;
    this.autoClose = true;
    this.icon = undefined;
    this.iconColor = undefined;
    this.progress = 0;
    this.isRunning = true;
    this.touched = false;
  }
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { name: this.icon, color: this.iconColor, size: "24" });
    }
    switch (this.type) {
      case 'info':
        return h("ix-icon", { name: 'info', size: "24", color: "color-std-text" });
      case 'error':
        return h("ix-icon", { name: 'error', size: "24", color: "color-alarm" });
      case 'success':
        return h("ix-icon", { name: 'success', size: "24", color: "color-success" });
      case 'warning':
        return h("ix-icon", { name: 'warning', size: "24", color: "color-warning" });
      default:
        return '';
    }
  }
  close() {
    if (this.host) {
      this.host.classList.add('animate__fadeOut');
    }
    setTimeout(() => {
      this.closeToast.emit();
    }, 250);
  }
  render() {
    let progressBarElement;
    let progressBarStyle = {};
    const progressBarClass = ['toast-progress-bar'];
    if (!this.touched) {
      progressBarStyle = {
        animationDuration: `${this.autoCloseDelay}ms`,
        animationPlayState: this.isRunning ? 'running' : 'paused',
      };
      progressBarClass.push('toast-progress-bar--animated');
    }
    else {
      progressBarClass.push('toast-progress-bar--touched');
    }
    const updateProgress = () => {
      if (progressBarElement) {
        progressBarElement.style.transform = `scaleX(${this.progress})`;
      }
    };
    return (h(Host, { class: "animate__animated animate__fadeIn" }, h("div", { class: "toast-body", onPointerLeave: () => {
        this.progress = 0;
        updateProgress();
      }, onPointerEnter: () => {
        this.isRunning = false;
        this.touched = true;
        this.progress = 1;
        updateProgress();
      } }, this.type || this.icon ? (h("div", { class: "toast-icon" }, this.getIcon())) : null, h("div", { class: "toast-content" }, this.toastTitle ? (h("div", { class: "toast-title text-default-title-single" }, this.toastTitle)) : null, h("div", { class: "toast-message text-default" }, h("slot", null))), h("div", { class: "toast-close" }, h("ix-icon-button", { icon: "close", size: "24", ghost: true, onClick: () => this.closeToast.emit() }))), this.autoClose ? (h("div", { class: progressBarClass.join(' '), style: progressBarStyle, ref: (r) => (progressBarElement = r), onAnimationEnd: () => this.close(), onTransitionEnd: () => {
        if (this.progress === 0) {
          this.close();
        }
      } })) : null));
  }
  static get is() { return "ix-toast"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["toast.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["toast.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ToastType",
          "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
          "references": {
            "ToastType": {
              "location": "import",
              "path": "./toast-utils"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Toast type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'info'"
      },
      "toastTitle": {
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
          "text": "Toast title"
        },
        "attribute": "toast-title",
        "reflect": false
      },
      "autoCloseDelay": {
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
          "text": "Autoclose title after delay"
        },
        "attribute": "auto-close-delay",
        "reflect": false,
        "defaultValue": "5000"
      },
      "autoClose": {
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
          "text": "Autoclose behavior"
        },
        "attribute": "auto-close",
        "reflect": false,
        "defaultValue": "true"
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
          "text": "Icon of toast"
        },
        "attribute": "icon",
        "reflect": false
      },
      "iconColor": {
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
          "text": "Icon color of toast"
        },
        "attribute": "icon-color",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "progress": {},
      "isRunning": {},
      "touched": {}
    };
  }
  static get events() {
    return [{
        "method": "closeToast",
        "name": "closeToast",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Toast closed"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
}
