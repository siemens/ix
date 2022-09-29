/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createPopper } from '@popperjs/core';
import { Component, Element, Event, h, Host, Prop, State } from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
export class SplitButton {
  constructor() {
    /**
     * Color variant of button
     */
    this.variant = 'Primary';
    /**
     * Button outline variant
     */
    this.outline = false;
    /**
     * Button invisible
     *
     * @deprecated use ghost property
     */
    this.invisible = false;
    /**
     * Button invisible
     */
    this.ghost = false;
    /**
     * Button icon
     */
    this.icon = '';
    /**
     * Splitbutton icon
     */
    this.splitIcon = 'context-menu';
    /**
     * Disabled
     */
    this.disabled = false;
    /**
     * Placement of the dropdown
     */
    this.placement = 'bottom-start';
    this.toggle = false;
  }
  get splitItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-split-button-item'));
  }
  clickOutside(e) {
    if (!this.hostElement.contains(e.target)) {
      this.toggle = false;
    }
  }
  componentDidLoad() {
    const element = this.hostElement.querySelector('.anchor');
    this.popover = this.hostElement.querySelector('ix-dropdown');
    this.popperInstance = createPopper(element, this.popover, {
      strategy: 'fixed',
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 0],
          },
        },
        {
          name: 'flip',
          options: {
            padding: 8,
          },
        },
      ],
    });
    window.addEventListener('click', this.clickOutside.bind(this));
  }
  disconnectedCallback() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    window.removeEventListener('click', this.clickOutside.bind(this));
  }
  toggleDropdown() {
    this.toggle = !this.toggle;
  }
  render() {
    return (h(Host, { class: "btn-group" },
      h("button", { class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, !this.label, false, false, this.disabled), onClick: (e) => this.buttonClick.emit(e) },
        this.icon ? h("ix-icon", { name: this.icon }) : null,
        " ",
        this.label),
      h("button", { class: Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, false, false, this.disabled)), {
          anchor: true,
        }), onClick: () => this.toggleDropdown() },
        h("ix-icon", { name: this.splitIcon }),
        h("ix-dropdown", { show: this.toggle },
          h("slot", null)))));
  }
  static get is() { return "ix-split-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["split-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["split-button.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Buttons",
        "resolved": "\"Primary\" | \"Secondary\"",
        "references": {
          "Buttons": {
            "location": "import",
            "path": "../utils/button-variants"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Color variant of button"
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'Primary'"
    },
    "outline": {
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
        "text": "Button outline variant"
      },
      "attribute": "outline",
      "reflect": false,
      "defaultValue": "false"
    },
    "invisible": {
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
            "text": "use ghost property"
          }],
        "text": "Button invisible"
      },
      "attribute": "invisible",
      "reflect": false,
      "defaultValue": "false"
    },
    "ghost": {
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
        "text": "Button invisible"
      },
      "attribute": "ghost",
      "reflect": false,
      "defaultValue": "false"
    },
    "label": {
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
        "text": "Button label"
      },
      "attribute": "label",
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
        "text": "Button icon"
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "''"
    },
    "splitIcon": {
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
        "text": "Splitbutton icon"
      },
      "attribute": "split-icon",
      "reflect": false,
      "defaultValue": "'context-menu'"
    },
    "disabled": {
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
        "text": "Disabled"
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
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
      "defaultValue": "'bottom-start'"
    }
  }; }
  static get states() { return {
    "toggle": {}
  }; }
  static get events() { return [{
      "method": "buttonClick",
      "name": "buttonClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Button clicked"
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "hostElement"; }
}
