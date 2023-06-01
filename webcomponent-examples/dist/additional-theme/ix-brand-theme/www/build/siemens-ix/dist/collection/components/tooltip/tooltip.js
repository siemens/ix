/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { arrow, autoPlacement, autoUpdate, computePosition, offset, shift, } from '@floating-ui/dom';
import { h, Host } from '@stencil/core';
/**
 * @since 1.3.0
 */
export class Tooltip {
  constructor() {
    this.onMouseEnterBind = this.showTooltip.bind(this);
    this.onMouseLeaveBind = this.hideTooltip.bind(this);
    this.tooltipCloseTimeInMS = 50;
    this.for = undefined;
    this.interactive = false;
    this.titleContent = undefined;
    this.titleIcon = undefined;
    this.visible = false;
  }
  get arrowElement() {
    return this.hostElement.shadowRoot.querySelector('.arrow');
  }
  destroyAutoUpdate() {
    if (this.disposeAutoUpdate) {
      this.disposeAutoUpdate();
    }
  }
  showTooltip(e) {
    clearTimeout(this.hideTooltipTimeout);
    this.visible = true;
    this.computeTooltipPosition(e.target);
  }
  hideTooltip() {
    this.hideTooltipTimeout = setTimeout(() => {
      this.visible = false;
    }, this.tooltipCloseTimeInMS);
    this.destroyAutoUpdate();
  }
  async computeTooltipPosition(target) {
    this.disposeAutoUpdate = autoUpdate(target, this.hostElement, async () => {
      const computeResponse = await computePosition(target, this.hostElement, {
        strategy: 'absolute',
        placement: 'top',
        middleware: [
          shift(),
          offset(8),
          arrow({
            element: this.arrowElement,
          }),
          autoPlacement({
            alignment: 'start',
            allowedPlacements: ['top', 'bottom', 'right', 'left'],
          }),
        ],
      });
      if (computeResponse.middlewareData.arrow) {
        const { x, y } = computeResponse.middlewareData.arrow;
        Object.assign(this.arrowElement.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
        });
      }
      const { x, y } = computeResponse;
      Object.assign(this.hostElement.style, {
        left: x !== null ? `${x}px` : '',
        top: y !== null ? `${y}px` : '',
      });
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true,
    });
  }
  queryAnchorElements() {
    return Array.from(document.querySelectorAll(this.for));
  }
  registerTriggerListener() {
    const elements = this.queryAnchorElements();
    elements.forEach((e) => {
      e.addEventListener('mouseenter', this.onMouseEnterBind);
      e.addEventListener('mouseleave', this.onMouseLeaveBind);
    });
  }
  registerTooltipListener() {
    this.hostElement.addEventListener('mouseenter', () => {
      if (this.interactive) {
        clearTimeout(this.hideTooltipTimeout);
      }
    });
    this.hostElement.addEventListener('mouseleave', () => {
      this.hideTooltip();
    });
  }
  componentDidLoad() {
    if (this.interactive) {
      this.tooltipCloseTimeInMS = 150;
    }
    this.observer = new MutationObserver(() => {
      this.registerTriggerListener();
    });
    this.observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-ix-tooltip'],
      childList: true,
      subtree: true,
    });
    this.registerTriggerListener();
    this.registerTooltipListener();
  }
  disconnectedCallback() {
    this.observer.disconnect();
    this.destroyAutoUpdate();
  }
  render() {
    var _a;
    const tooltipContentClass = {
      'tooltip-content': true,
    };
    return (h(Host, { class: {
        visible: this.visible,
      } }, h("div", { class: 'tooltip-title' }, this.titleIcon ? (h("ix-icon", { size: "12", name: this.titleIcon })) : null, (_a = (h("ix-typography", { variant: "default-title" }, this.titleContent, h("slot", { name: "title" })))) !== null && _a !== void 0 ? _a : null), h("div", { class: tooltipContentClass }, h("slot", null)), h("div", { class: "arrow" })));
  }
  static get is() { return "ix-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tooltip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tooltip.css"]
    };
  }
  static get properties() {
    return {
      "for": {
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
          "text": "CSS selector for hover trigger element e.g. `for=\"[data-my-custom-select]\"`"
        },
        "attribute": "for",
        "reflect": false
      },
      "interactive": {
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
          "text": "Define if the user can access the tooltip via mouse."
        },
        "attribute": "interactive",
        "reflect": false,
        "defaultValue": "false"
      },
      "titleContent": {
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
          "text": "Title of the tooltip"
        },
        "attribute": "title-content",
        "reflect": false
      },
      "titleIcon": {
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
          "text": "Title icon of the tooltip"
        },
        "attribute": "title-icon",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "visible": {}
    };
  }
  static get elementRef() { return "hostElement"; }
}
