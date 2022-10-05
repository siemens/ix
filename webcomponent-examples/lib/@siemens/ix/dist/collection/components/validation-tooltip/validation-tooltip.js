/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import '@popperjs/core';
import { createPopper } from '@popperjs/core';
import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
/**
 * @slot tooltip-message - Custom tooltip message with html support
 */
export class ValidationTooltip {
  constructor() {
    /**
     * Placement of the tooltip
     */
    this.placement = 'top';
    this.isInputValid = true;
    this.onSubmitBind = this.onSubmit.bind(this);
    this.onInputFocusBind = this.onInputFocus.bind(this);
  }
  get arrow() {
    return this.hostElement.querySelector('#arrow');
  }
  get inputElement() {
    return this.hostElement.querySelector('input');
  }
  get formElement() {
    return this.inputElement.form;
  }
  get tooltipElement() {
    return this.hostElement.querySelector('.validation-tooltip');
  }
  componentDidLoad() {
    if (!this.inputElement) {
      throw Error('Validation tooltip is only working with an direct input child.');
    }
    if (!this.formElement) {
      throw Error('Validation tooltip is only working with an form element.');
    }
    this.formElement.addEventListener('submit', this.onSubmitBind);
    this.inputElement.addEventListener('focus', this.onInputFocusBind);
    this.observer = new MutationObserver(() => {
      if (this.inputElement.classList.contains('is-invalid')) {
        this.isInputValid = false;
        this.validationChanged();
      }
    });
    this.observer.observe(this.inputElement, {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  onInputFocus() {
    this.isInputValid = true;
  }
  onSubmit() {
    if (this.formElement.classList.contains('needs-validation')) {
      this.isInputValid = this.inputElement.validity.valid;
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.popper) === null || _b === void 0 ? void 0 : _b.destroy();
    this.formElement.removeEventListener('submit', this.onSubmitBind);
    this.inputElement.removeEventListener('focus', this.onInputFocusBind);
  }
  validationChanged() {
    if (!this.isInputValid) {
      this.tooltipElement.style.display = 'block';
      this.popper = createPopper(this.inputElement, this.tooltipElement, {
        placement: this.placement,
        strategy: 'absolute',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'arrow',
            options: {
              element: this.arrow,
            },
          },
        ],
      });
    }
    else {
      this.tooltipElement.style.display = 'none';
      this.popper.destroy();
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("div", { role: "tooltip", style: { display: 'none' }, class: "validation-tooltip text-default" },
        this.message,
        h("slot", { name: "tooltip-message" }),
        h("div", { id: "arrow", "data-popper-arrow": true }))));
  }
  static get is() { return "ix-validation-tooltip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["validation-tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["validation-tooltip.css"]
  }; }
  static get properties() { return {
    "message": {
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
        "text": "Message of the tooltip"
      },
      "attribute": "message",
      "reflect": false
    },
    "placement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Placement",
        "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
        "references": {
          "Placement": {
            "location": "import",
            "path": "@popperjs/core"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Placement of the tooltip"
      },
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'top'"
    }
  }; }
  static get states() { return {
    "isInputValid": {}
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "isInputValid",
      "methodName": "validationChanged"
    }]; }
}
