/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import animejs from 'animejs';
import { createMutationObserver } from '../utils/mutation-observer';
export class Breadcrumb {
  constructor() {
    this.visibleItemCount = 9;
    this.nextItems = [];
    this.ghost = false;
    this.previousButtonRef = undefined;
    this.nextButtonRef = undefined;
    this.items = [];
  }
  get breadcrumbItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
  }
  get crumbItems() {
    return Array.from(this.hostElement.querySelectorAll('.crumb-items .crumb'));
  }
  onItemClick(item) {
    this.itemClick.emit(item);
  }
  componentDidLoad() {
    this.mutationObserver = createMutationObserver(() => {
      const updatedItems = this.getItems();
      const update = () => {
        this.items = updatedItems;
      };
      if (updatedItems.length >= this.items.length) {
        update();
      }
      else if (updatedItems.length < this.items.length) {
        const last = this.crumbItems[this.crumbItems.length - 1];
        this.animationFadeOut(last, () => update());
      }
    });
    this.mutationObserver.observe(this.hostElement.querySelector('.crumb-items'), {
      subtree: true,
      childList: true,
    });
  }
  componentWillLoad() {
    this.items = this.getItems();
  }
  getItems() {
    return this.breadcrumbItems.map((item) => {
      return { label: item.label, icon: item.icon };
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  animationFadeOut(ref, complete) {
    animejs({
      targets: ref,
      translateX: '-100%',
      duration: 150,
      opacity: [1, 0],
      easing: 'linear',
      complete: () => complete(),
    });
  }
  animationFadeIn(ref) {
    animejs({
      targets: ref,
      duration: 150,
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      easing: 'linear',
    });
  }
  handleLastButtonRef(ref, last) {
    var _a;
    if (last) {
      this.animationFadeIn(ref);
    }
    if (last && ((_a = this.nextItems) === null || _a === void 0 ? void 0 : _a.length)) {
      this.nextButtonRef = ref;
    }
  }
  sliceHiddenItems() {
    let sliceIndex = 0;
    if (this.items.length > this.visibleItemCount) {
      sliceIndex = this.items.length - this.visibleItemCount;
    }
    return this.items.slice(sliceIndex);
  }
  clickItem(item, last) {
    if (!last) {
      this.onItemClick(item);
    }
  }
  renderBreadcrumbItems() {
    return this.sliceHiddenItems().map((item, index, array) => {
      var _a;
      const last = index === array.length - 1;
      const isLastItem = last && !((_a = this.nextItems) === null || _a === void 0 ? void 0 : _a.length);
      return (h("div", { ref: (ref) => this.handleLastButtonRef(ref, last), "data-breadcrumb": index, class: {
          crumb: true,
          clickable: true,
          ghost: this.ghost,
          btn: !this.ghost,
          last: isLastItem,
          'remove-hover': isLastItem,
        }, onClick: () => this.clickItem(item.label, last), "data-testid": "item" }, h("span", { class: "crumb-text remove-anchor" }, item.icon ? h("ix-icon", { name: item.icon, size: "16" }) : '', item.label), !isLastItem ? (h("span", { class: "glyph glyph-18 glyph-chevron-right-small text-default-text" })) : null));
    });
  }
  render() {
    var _a, _b, _c;
    return (h(Host, null, h("ix-dropdown", { trigger: ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) > this.visibleItemCount
        ? this.previousButtonRef
        : null }, this.items
      .slice(0, this.items.length - this.visibleItemCount)
      .map((item) => (h("ix-dropdown-item", { label: item.label, onClick: () => this.onItemClick(item.label) })))), ((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) > this.visibleItemCount ? (h("div", { class: "crumb crumb-dropdown", ref: (ref) => (this.previousButtonRef = ref) }, h("span", { class: "remove-anchor more-text" }, h("span", { class: "more-text-ellipsis" }, "..."), h("span", { class: "glyph glyph-16 glyph-chevron-right" })))) : null, h("div", { class: "crumb-items" }, this.renderBreadcrumbItems(), h("slot", null)), h("ix-dropdown", { trigger: this.nextButtonRef }, (_c = this.nextItems) === null || _c === void 0 ? void 0 : _c.map((item) => (h("ix-dropdown-item", { label: item, onClick: (e) => {
        this.nextClick.emit({
          event: e,
          item,
        });
      } }))))));
  }
  static get is() { return "ix-breadcrumb"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["breadcrumb.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["breadcrumb.css"]
    };
  }
  static get properties() {
    return {
      "visibleItemCount": {
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
          "text": "Excess items will get hidden inside of dropdown"
        },
        "attribute": "visible-item-count",
        "reflect": false,
        "defaultValue": "9"
      },
      "nextItems": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items will be accessible through a dropdown"
        },
        "defaultValue": "[]"
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
          "text": "Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)"
        },
        "attribute": "ghost",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "previousButtonRef": {},
      "nextButtonRef": {},
      "items": {}
    };
  }
  static get events() {
    return [{
        "method": "itemClick",
        "name": "itemClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Crumb item clicked event"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "nextClick",
        "name": "nextClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Next item clicked event"
        },
        "complexType": {
          "original": "{ event: UIEvent; item: string }",
          "resolved": "{ event: UIEvent; item: string; }",
          "references": {
            "UIEvent": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
}
