/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { arrow, autoPlacement, autoUpdate, computePosition, inline, offset, shift, } from '@floating-ui/dom';
import { h, Host } from '@stencil/core';
import { getAlignment } from '../dropdown/alignment';
/**
 * @slot tooltip-message - Custom tooltip message with html support
 */
export class ValidationTooltip {
  constructor() {
    this.onSubmitBind = this.onSubmit.bind(this);
    this.onInputFocusBind = this.onInputFocus.bind(this);
    this.message = undefined;
    this.placement = 'top';
    this.isInputValid = true;
    this.tooltipPosition = undefined;
    this.arrowPosition = undefined;
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
  destoryAutoUpdate() {
    this.tooltipElement.style.display = 'none';
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }
  applyTooltipPosition() {
    this.tooltipElement.style.display = 'block';
    let positionConfig = {
      strategy: 'fixed',
      middleware: [
        inline(),
        shift(),
        offset({
          mainAxis: 8,
        }),
      ],
    };
    if (this.placement.includes('auto')) {
      positionConfig.middleware.push(autoPlacement({
        alignment: getAlignment(this.placement),
      }));
    }
    else {
      positionConfig.placement = this.placement;
    }
    this.autoUpdateCleanup = autoUpdate(this.inputElement, this.tooltipElement, async () => {
      positionConfig.middleware = [
        ...positionConfig.middleware,
        arrow({
          element: this.arrow,
        }),
      ];
      const computeResponse = await computePosition(this.inputElement, this.tooltipElement, positionConfig);
      if (computeResponse.middlewareData.arrow) {
        const { x, y } = computeResponse.middlewareData.arrow;
        this.arrowPosition = {
          x,
          y,
        };
        Object.assign(this.arrow.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
        });
      }
      this.tooltipPosition = {
        x: computeResponse.x,
        y: computeResponse.y,
      };
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true,
    });
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
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destoryAutoUpdate();
    this.formElement.removeEventListener('submit', this.onSubmitBind);
    this.inputElement.removeEventListener('focus', this.onInputFocusBind);
  }
  validationChanged() {
    if (!this.isInputValid) {
      this.applyTooltipPosition();
    }
    else {
      this.destoryAutoUpdate();
    }
  }
  render() {
    var _a, _b;
    return (h(Host, null, h("slot", null), h("div", { role: "tooltip", style: {
        display: 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        transform: `translate(${Math.round(((_a = this.tooltipPosition) === null || _a === void 0 ? void 0 : _a.x) || 0)}px,${Math.round(((_b = this.tooltipPosition) === null || _b === void 0 ? void 0 : _b.y) || 0)}px)`,
      }, class: "validation-tooltip text-default" }, this.message, h("slot", { name: "tooltip-message" }), h("div", { id: "arrow" }))));
  }
  static get is() { return "ix-validation-tooltip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["validation-tooltip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["validation-tooltip.css"]
    };
  }
  static get properties() {
    return {
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
              "path": "../dropdown/placement"
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
    };
  }
  static get states() {
    return {
      "isInputValid": {},
      "tooltipPosition": {},
      "arrowPosition": {}
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "isInputValid",
        "methodName": "validationChanged"
      }];
  }
}
