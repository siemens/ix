/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
let windowStartSize = window.innerWidth;
export class Tabs {
  constructor() {
    this.clickAction = {
      timeout: null,
      isClick: true,
    };
    this.small = false;
    this.rounded = false;
    this.selected = 0;
    this.layout = 'auto';
    this.placement = 'bottom';
    this.totalItems = 0;
    this.currentScrollAmount = 0;
    this.scrollAmount = 100;
    this.scrollActionAmount = 0;
  }
  onWindowResize() {
    this.totalItems = 0;
    this.totalItems = this.getTabs().length;
    if (windowStartSize === 0)
      return (windowStartSize = window.innerWidth);
    this.move(windowStartSize - window.innerWidth);
    windowStartSize = window.innerWidth;
  }
  getTabs() {
    return Array.from(this.hostElement.querySelectorAll('ix-tab-item'));
  }
  getTab(tabIndex) {
    return this.getTabs()[tabIndex];
  }
  getTabsWrapper() {
    return this.hostElement.getElementsByClassName('items-content')[0];
  }
  showArrows() {
    try {
      const tabWrapper = this.getTabsWrapper();
      return (tabWrapper.scrollWidth >
        Math.ceil(tabWrapper.getBoundingClientRect().width) &&
        this.layout === 'auto');
    }
    catch (error) {
      return false;
    }
  }
  showPreviousArrow() {
    try {
      return this.showArrows() && this.scrollActionAmount < 0;
    }
    catch (error) {
      return false;
    }
  }
  showNextArrow() {
    try {
      const tabWrapper = this.getTabsWrapper();
      const tabWrapperRect = tabWrapper.getBoundingClientRect();
      return (this.showArrows() &&
        this.scrollActionAmount >
          (tabWrapper.scrollWidth - tabWrapperRect.width) * -1 &&
        window.innerWidth <= tabWrapper.scrollWidth);
    }
    catch (error) {
      return false;
    }
  }
  getArrowStyle(condition) {
    return {
      opacity: condition ? '1' : '0',
      zIndex: condition ? '1' : '-1',
    };
  }
  move(amount, click = false) {
    const tabWrapper = this.getTabsWrapper();
    const maxScrollWidth = (tabWrapper.scrollWidth - tabWrapper.getBoundingClientRect().width) * -1;
    amount = this.currentScrollAmount + amount;
    amount = amount > 0 ? 0 : amount < maxScrollWidth ? maxScrollWidth : amount;
    const styles = [
      `transform: translateX(${amount}px);`,
      click ? 'transition: all ease-in-out 400ms;' : '',
    ].join('');
    tabWrapper.setAttribute('style', styles);
    if (click)
      this.currentScrollAmount = this.scrollActionAmount = amount;
    else
      this.scrollActionAmount = amount;
  }
  moveTabToView(tabIndex) {
    if (!this.showArrows())
      return;
    const tab = this.getTab(tabIndex).getBoundingClientRect();
    const amount = tab.x * -1;
    this.move(amount, true);
  }
  setSelected(index) {
    this.selected = index;
  }
  clickTab(index) {
    if (this.dragStop())
      return;
    this.setSelected(index);
    this.moveTabToView(index);
  }
  dragStart(element, event) {
    if (!this.showArrows())
      return;
    if (event.button > 0)
      return;
    this.clickAction.timeout =
      this.clickAction.timeout === null
        ? setTimeout(() => (this.clickAction.isClick = false), 300)
        : null;
    const tabPositionX = parseFloat(window.getComputedStyle(element).left);
    const mousedownPositionX = event.clientX;
    const move = (event) => this.dragMove(event, tabPositionX, mousedownPositionX);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', move, false);
      this.dragStop();
    });
    window.addEventListener('mousemove', move, false);
  }
  dragMove(event, tabX, mousedownX) {
    this.move(event.clientX + tabX - mousedownX);
  }
  dragStop() {
    clearTimeout(this.clickAction.timeout);
    this.clickAction.timeout = null;
    if (this.clickAction.isClick)
      return false;
    this.currentScrollAmount = this.scrollActionAmount;
    this.clickAction.isClick = true;
    return true;
  }
  componentDidRender() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;
    tabs.forEach((element, index) => {
      if (this.small)
        element.setAttribute('small', 'true');
      if (this.rounded)
        element.setAttribute('rounded', 'true');
      element.setAttribute('layout', this.layout);
      element.setAttribute('selected', index === this.selected ? 'true' : 'false');
      element.setAttribute('placement', this.placement);
    });
  }
  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach((element, index) => {
      const isDisabled = element.getAttribute('disabled') !== null;
      if (!isDisabled)
        element.addEventListener('click', () => this.clickTab(index));
      element.addEventListener('mousedown', (event) => this.dragStart(element, event));
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "overflow-shadow", style: this.getArrowStyle(this.showPreviousArrow()) }), h("div", { class: "arrow", style: this.getArrowStyle(this.showPreviousArrow()), onClick: () => this.move(this.scrollAmount, true) }, h("span", { class: "glyph glyph-chevron-left-small" })), h("div", { class: "tab-items" }, h("div", { class: "items-content" }, h("slot", null))), h("div", { class: "overflow-shadow right", style: this.getArrowStyle(this.showNextArrow()) }), h("div", { class: "arrow right", style: this.getArrowStyle(this.showNextArrow()), onClick: () => this.move(-this.scrollAmount, true) }, h("span", { class: "glyph glyph-chevron-right-small" }))));
  }
  static get is() { return "ix-tabs"; }
  static get originalStyleUrls() {
    return {
      "$": ["tabs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tabs.css"]
    };
  }
  static get properties() {
    return {
      "small": {
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
          "text": "Set tab items to small size"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      },
      "rounded": {
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
          "text": "Set rounded tabs"
        },
        "attribute": "rounded",
        "reflect": false,
        "defaultValue": "false"
      },
      "selected": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set default selected tab by index"
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "0"
      },
      "layout": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'auto' | 'stretched'",
          "resolved": "\"auto\" | \"stretched\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set layout width style"
        },
        "attribute": "layout",
        "reflect": false,
        "defaultValue": "'auto'"
      },
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'bottom' | 'top'",
          "resolved": "\"bottom\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set placement style"
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'bottom'"
      }
    };
  }
  static get states() {
    return {
      "totalItems": {},
      "currentScrollAmount": {},
      "scrollAmount": {},
      "scrollActionAmount": {}
    };
  }
  static get elementRef() { return "hostElement"; }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "onWindowResize",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
