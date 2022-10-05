/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Host, Method, Prop, } from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';
export class Modal {
  constructor() {
    /**
     * Should the modal be animtated
     */
    this.animation = true;
    /**
     *
     */
    this.ariaLabelledBy = 'modal-title';
    /**
     * Adds a dimming layer to the modal.
     * This should only be used when it it necessary to focus the user's attention to the dialog content (e.g. errors, warnings, complex tasks).
     */
    this.backdrop = true;
    /**
     * Centered modal
     */
    this.centered = false;
    /**
     * ESC close modal dialog
     */
    this.keyboard = true;
    /**
     * Color of the header {@link icon}
     */
    this.iconColor = 'color-std-text';
    /**
     * Modal scollable
     */
    this.scrollable = true;
    /**
     * Modal size
     */
    this.size = 'sm';
    this.onKeydown = this.handleKeydown.bind(this);
  }
  get modal() {
    return this.hostElement.querySelector('.modal');
  }
  get modalDialog() {
    return this.modal.querySelector('.modal-dialog');
  }
  get modalContent() {
    return this.modalDialog.querySelector('.modal-content');
  }
  get modalBackdrop() {
    return this.hostElement.querySelector('.backdrop');
  }
  slideDown(modal) {
    const duration = this.animation ? Animation.mediumTime : 0;
    anime({
      targets: modal,
      duration,
      opacity: [0, 1],
      translateY: ['-100%', 0],
      easing: 'easeOutSine',
    });
  }
  slideUp(modal, completeCallback) {
    const duration = this.animation ? Animation.mediumTime : 0;
    anime({
      targets: modal,
      duration,
      opacity: [1, 0],
      translateY: [0, '-100%'],
      easing: 'easeInSine',
      complete: () => {
        if (completeCallback) {
          completeCallback();
        }
      },
    });
  }
  componentDidLoad() {
    if (this.backdrop === 'static') {
      this.modalBackdrop.addEventListener('click', this.dismiss.bind(this));
    }
    if (this.backdropClass) {
      this.modalBackdrop.classList.add(this.backdropClass);
    }
    if (this.modalDialogClass) {
      this.modalDialog.classList.add(this.modalDialogClass);
    }
    if (this.windowClass) {
      this.modal.classList.add(this.windowClass);
    }
    if (this.keyboard) {
      window.addEventListener('keydown', this.onKeydown);
    }
    this.slideDown(this.modalContent);
  }
  handleKeydown(ev) {
    if (ev.key === 'Escape') {
      this.dismiss(ev.key);
    }
  }
  disconnectedCallback() {
    window.removeEventListener('keydown', this.onKeydown);
  }
  /**
   * Dismiss modal instance
   * @param reason
   */
  async dismiss(reason) {
    if (this.beforeDismiss) {
      const result = await this.beforeDismiss(reason);
      if (result !== false) {
        this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
      }
    }
    else {
      this.slideUp(this.modalContent, () => this.dismissed.emit(reason));
    }
  }
  /**
   * Close modal
   * @param result
   */
  async close(result) {
    this.slideUp(this.modalContent, () => this.closed.emit(result));
  }
  render() {
    return (h(Host, null,
      h("div", { class: {
          animation: this.animation,
          modal: true,
          backdrop: this.backdrop === 'static' || this.backdrop,
          'align-items-center': this.centered,
          scrollable: this.scrollable,
        }, "aria-describedby": this.ariaDescribedBy, "aria-labelledby": this.ariaLabelledBy },
        h("div", { class: {
            'modal-dialog': true,
            'modal-sm': this.size === 'sm',
            'modal-lg': this.size === 'lg',
            'modal-xl': this.size === 'xl',
          } },
          h("div", { class: "modal-content" },
            this.icon === undefined || this.icon === '' ? ('') : (h("div", { class: "state-icon-container" },
              h("ix-icon", { name: this.icon, size: "32", color: this.iconColor }))),
            h("div", { class: "slot-container" },
              h("slot", null)))))));
  }
  static get is() { return "ix-modal"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["modal.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["modal.css"]
  }; }
  static get properties() { return {
    "animation": {
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
        "text": "Should the modal be animtated"
      },
      "attribute": "animation",
      "reflect": false,
      "defaultValue": "true"
    },
    "ariaDescribedBy": {
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
      "attribute": "aria-described-by",
      "reflect": false
    },
    "ariaLabelledBy": {
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
      "attribute": "aria-labelled-by",
      "reflect": false,
      "defaultValue": "'modal-title'"
    },
    "backdrop": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "boolean | 'static'",
        "resolved": "\"static\" | boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Adds a dimming layer to the modal.\nThis should only be used when it it necessary to focus the user's attention to the dialog content (e.g. errors, warnings, complex tasks)."
      },
      "attribute": "backdrop",
      "reflect": false,
      "defaultValue": "true"
    },
    "backdropClass": {
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
        "text": "Backdrop class"
      },
      "attribute": "backdrop-class",
      "reflect": false
    },
    "beforeDismiss": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(reason?: any) => boolean | Promise<boolean>",
        "resolved": "(reason?: any) => boolean | Promise<boolean>",
        "references": {
          "Promise": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "BeforeDismiss callback"
      }
    },
    "centered": {
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
        "text": "Centered modal"
      },
      "attribute": "centered",
      "reflect": false,
      "defaultValue": "false"
    },
    "content": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HTMLElement | string",
        "resolved": "HTMLElement | string",
        "references": {
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Content of modal"
      },
      "attribute": "content",
      "reflect": false
    },
    "keyboard": {
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
        "text": "ESC close modal dialog"
      },
      "attribute": "keyboard",
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
        "text": "Optional icon displayed next to the title"
      },
      "attribute": "icon",
      "reflect": false
    },
    "iconColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "NotificationColor",
        "resolved": "\"color-alarm\" | \"color-info\" | \"color-std-text\" | \"color-success\" | \"color-warning\"",
        "references": {
          "NotificationColor": {
            "location": "import",
            "path": "../utils/notification-color"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Color of the header {@link icon}"
      },
      "attribute": "icon-color",
      "reflect": false,
      "defaultValue": "'color-std-text'"
    },
    "modalDialogClass": {
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
        "text": "Modal dialog class"
      },
      "attribute": "modal-dialog-class",
      "reflect": false
    },
    "scrollable": {
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
        "text": "Modal scollable"
      },
      "attribute": "scrollable",
      "reflect": false,
      "defaultValue": "true"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'lg' | 'xl'",
        "resolved": "\"lg\" | \"sm\" | \"xl\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Modal size"
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'sm'"
    },
    "headerTitle": {
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
        "text": "Header title"
      },
      "attribute": "header-title",
      "reflect": false
    },
    "windowClass": {
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
        "text": "Window class"
      },
      "attribute": "window-class",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "closed",
      "name": "closed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Modal closed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "dismissed",
      "name": "dismissed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Modal dismissed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "dismiss": {
      "complexType": {
        "signature": "(reason?: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "reason"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Dismiss modal instance",
        "tags": [{
            "name": "param",
            "text": "reason"
          }]
      }
    },
    "close": {
      "complexType": {
        "signature": "(result: any) => Promise<void>",
        "parameters": [{
            "tags": [{
                "name": "param",
                "text": "result"
              }],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Close modal",
        "tags": [{
            "name": "param",
            "text": "result"
          }]
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
