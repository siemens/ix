/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createPopper } from '@popperjs/core';
import { Component, Element, Event, h, Host, Listen, Method, Prop, Watch } from '@stencil/core';
export class Dropdown {
  constructor() {
    /**
     * Show dropdown
     */
    this.show = false;
    /**
     * Close behavior
     */
    this.closeBehavior = 'both';
    /**
     * Placement of the dropdown
     */
    this.placement = 'bottom-end';
    /**
     * Position strategy
     */
    this.positioningStrategy = 'fixed';
    /**
     * Adjust dropdown width to the parent width
     * @deprecated - property has a typo and will get removed in the next major version. Use `adjustDropdownWidthToReferenceWidth` instead.
     */
    this.adjustDropdownWidthToReferenceWith = false;
    /**
     * Adjust dropdown width to the parent width
     */
    this.adjustDropdownWidthToReferenceWidth = false;
    this.openBind = this.open.bind(this);
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-dropdown-item'));
  }
  resolveElement(prop) {
    if (typeof prop === 'string') {
      return document.querySelector('#' + prop);
    }
    return prop;
  }
  async componentDidLoad() {
    if (this.trigger) {
      this.registerListener(this.trigger);
    }
  }
  registerListener(element) {
    this.triggerElement = this.resolveElement(element);
    this.triggerElement.addEventListener('click', this.openBind);
  }
  unregisterListener(element) {
    const trigger = this.resolveElement(element);
    trigger.removeEventListener('click', this.openBind);
  }
  componentDidRender() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update();
  }
  async changedShow(newShow) {
    var _a;
    if (newShow) {
      this.anchorElement = this.anchor
        ? this.resolveElement(this.anchor)
        : this.resolveElement(this.trigger);
      if (this.anchorElement) {
        (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
        this.popperInstance = createPopper(this.anchorElement, this.dropdownRef, {
          placement: this.placement,
          strategy: this.positioningStrategy,
          onFirstUpdate: ({ elements }) => {
            if (this.adjustDropdownWidthToReferenceWith ||
              this.adjustDropdownWidthToReferenceWidth) {
              const { popper, reference } = elements;
              const width = reference.getBoundingClientRect().width;
              popper.style.width = `${width}px`;
            }
          },
        });
      }
    }
  }
  changedTrigger(newTriggerValue, oldTriggerValue) {
    if (newTriggerValue) {
      this.registerListener(newTriggerValue);
    }
    if (oldTriggerValue) {
      this.unregisterListener(oldTriggerValue);
    }
  }
  clickOutside(event) {
    const target = event.target;
    if (this.show === false ||
      this.closeBehavior === false ||
      this.anchorElement === target ||
      this.triggerElement === target) {
      return;
    }
    switch (this.closeBehavior) {
      case 'outside':
        if (!this.dropdownRef.contains(target)) {
          this.close();
        }
        break;
      case 'inside':
        if (this.dropdownRef.contains(target)) {
          this.close();
        }
        break;
      default:
        this.close();
    }
  }
  open(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.show = !this.show;
    this.showChanged.emit(this.show);
  }
  close() {
    this.show = false;
    this.showChanged.emit(this.show);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  /**
   * Update position of dropdown
   */
  async updatePosition() {
    var _a;
    await ((_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.update());
  }
  render() {
    return (h(Host, { ref: (ref) => (this.dropdownRef = ref), class: {
        'dropdown-menu': true,
        show: this.show,
      }, style: {
        margin: '0',
        minWidth: '0px',
      } },
      h("div", { style: { display: 'contents' } },
        this.header ? h("div", { class: "dropdown-header" }, this.header) : '',
        h("slot", null))));
  }
  static get is() { return "ix-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown.css"]
  }; }
  static get properties() { return {
    "show": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Show dropdown"
      },
      "attribute": "show",
      "reflect": true,
      "defaultValue": "false"
    },
    "trigger": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | HTMLElement",
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
        "text": "Define an element that triggers the dropdown.\nA trigger can either be a string that will be interprated as id attribute or a DOM element."
      },
      "attribute": "trigger",
      "reflect": false
    },
    "anchor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | HTMLElement",
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
        "text": "Define an anchor element"
      },
      "attribute": "anchor",
      "reflect": false
    },
    "closeBehavior": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "'inside' | 'outside' | 'both' | boolean",
        "resolved": "\"both\" | \"inside\" | \"outside\" | boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Close behavior"
      },
      "attribute": "close-behavior",
      "reflect": false,
      "defaultValue": "'both'"
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
        "text": "Placement of the dropdown"
      },
      "attribute": "placement",
      "reflect": false,
      "defaultValue": "'bottom-end'"
    },
    "positioningStrategy": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "PositioningStrategy",
        "resolved": "\"absolute\" | \"fixed\"",
        "references": {
          "PositioningStrategy": {
            "location": "import",
            "path": "@popperjs/core"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Position strategy"
      },
      "attribute": "positioning-strategy",
      "reflect": false,
      "defaultValue": "'fixed'"
    },
    "adjustDropdownWidthToReferenceWith": {
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
        "tags": [{
            "name": "deprecated",
            "text": "- property has a typo and will get removed in the next major version. Use `adjustDropdownWidthToReferenceWidth` instead."
          }],
        "text": "Adjust dropdown width to the parent width"
      },
      "attribute": "adjust-dropdown-width-to-reference-with",
      "reflect": false,
      "defaultValue": "false"
    },
    "adjustDropdownWidthToReferenceWidth": {
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
        "text": "Adjust dropdown width to the parent width"
      },
      "attribute": "adjust-dropdown-width-to-reference-width",
      "reflect": false,
      "defaultValue": "false"
    },
    "header": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "An optional header shown at the top of the dropdown"
      },
      "attribute": "header",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "showChanged",
      "name": "showChanged",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fire event after visibility of dropdown has changed"
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "updatePosition": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Update position of dropdown",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "show",
      "methodName": "changedShow"
    }, {
      "propName": "trigger",
      "methodName": "changedTrigger"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
