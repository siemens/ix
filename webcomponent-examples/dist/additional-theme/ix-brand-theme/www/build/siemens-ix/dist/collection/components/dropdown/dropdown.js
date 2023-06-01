/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { autoPlacement, autoUpdate, computePosition, inline, offset, shift, } from '@floating-ui/dom';
import { h, Host, } from '@stencil/core';
import { getAlignment } from './alignment';
export class Dropdown {
  constructor() {
    this.autoUpdateCleanup = null;
    this.show = false;
    this.trigger = undefined;
    this.anchor = undefined;
    this.closeBehavior = 'both';
    this.placement = 'bottom-start';
    this.positioningStrategy = 'fixed';
    this.adjustDropdownWidthToReferenceWith = false;
    this.adjustDropdownWidthToReferenceWidth = false;
    this.header = undefined;
    this.offset = undefined;
    this.openBind = this.open.bind(this);
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-dropdown-item'));
  }
  async registerListener(element) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.triggerElement.addEventListener('click', this.openBind);
    }
  }
  async unregisterListener(element) {
    const trigger = await this.resolveElement(element);
    trigger.removeEventListener('click', this.openBind);
  }
  resolveElement(element) {
    if (typeof element !== 'string') {
      return Promise.resolve(element);
    }
    const selector = `#${element}`;
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }
  async changedShow(newShow) {
    if (newShow) {
      this.anchorElement = await (this.anchor
        ? this.resolveElement(this.anchor)
        : this.resolveElement(this.trigger));
      if (this.anchorElement) {
        this.applyDropdownPosition();
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
  async applyDropdownPosition() {
    if (this.anchorElement && this.dropdownRef) {
      let positionConfig = {
        strategy: this.positioningStrategy,
        middleware: [],
      };
      if (this.placement.includes('auto')) {
        positionConfig.middleware.push(autoPlacement({
          alignment: getAlignment(this.placement),
        }));
      }
      else {
        positionConfig.placement = this.placement;
      }
      positionConfig.middleware = [
        ...positionConfig.middleware,
        inline(),
        shift(),
      ];
      if (this.offset) {
        positionConfig.middleware.push(offset(this.offset));
      }
      if (this.autoUpdateCleanup) {
        this.autoUpdateCleanup();
        this.autoUpdateCleanup = null;
      }
      this.autoUpdateCleanup = autoUpdate(this.anchorElement, this.dropdownRef, async () => {
        const computeResponse = await computePosition(this.anchorElement, this.dropdownRef, positionConfig);
        Object.assign(this.dropdownRef.style, {
          top: '0',
          left: '0',
          transform: `translate(${Math.round(computeResponse.x)}px,${Math.round(computeResponse.y)}px)`,
        });
      }, {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      });
    }
  }
  async componentDidLoad() {
    if (this.trigger) {
      this.registerListener(this.trigger);
    }
  }
  async componentDidRender() {
    await this.applyDropdownPosition();
  }
  disconnectedCallback() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }
  /**
   * Update position of dropdown
   */
  async updatePosition() {
    this.applyDropdownPosition();
  }
  render() {
    return (h(Host, { ref: (ref) => (this.dropdownRef = ref), class: {
        'dropdown-menu': true,
        show: this.show,
      }, style: {
        margin: '0',
        minWidth: '0px',
        position: this.positioningStrategy,
      } }, h("div", { style: { display: 'contents' } }, this.header ? h("div", { class: "dropdown-header" }, this.header) : '', h("slot", null))));
  }
  static get is() { return "ix-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dropdown.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dropdown.css"]
    };
  }
  static get properties() {
    return {
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
              "path": "./placement"
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
      },
      "positioningStrategy": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'absolute' | 'fixed'",
          "resolved": "\"absolute\" | \"fixed\"",
          "references": {}
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
              "text": "Will be removed in 2.0.0. Property has a typo use `adjustDropdownWidthToReferenceWidth` instead."
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
          "tags": [{
              "name": "deprecated",
              "text": "Will be removed. Not used anymore"
            }],
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
      },
      "offset": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{\n    mainAxis?: number;\n    crossAxis?: number;\n    alignmentAxis?: number;\n  }",
          "resolved": "{ mainAxis?: number; crossAxis?: number; alignmentAxis?: number; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": "Move dropdown along main axis of alignment"
        }
      }
    };
  }
  static get events() {
    return [{
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
      }];
  }
  static get methods() {
    return {
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
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "show",
        "methodName": "changedShow"
      }, {
        "propName": "trigger",
        "methodName": "changedTrigger"
      }];
  }
  static get listeners() {
    return [{
        "name": "click",
        "method": "clickOutside",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
