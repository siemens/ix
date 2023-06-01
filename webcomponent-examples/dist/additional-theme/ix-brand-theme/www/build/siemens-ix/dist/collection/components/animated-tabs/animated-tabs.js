/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';
import { convertToAbbreviationString } from '../utils/rwd.util';
export class AnimatedTabs {
  constructor() {
    this.easing = 'easeInOutSine';
    this.firstRender = true;
    this.tabs = undefined;
    this.activeIndex = undefined;
    this.disableAnimations = false;
    this.selectedIndex = 0;
    this.tabPlacement = 'top';
  }
  onTabSelectionChange(newSelectionIndex, oldSelectionIndex) {
    this.updateTabAnimation(oldSelectionIndex, newSelectionIndex);
  }
  onMouseDown() {
    this.activeIndex = undefined;
  }
  get animatedTabs() {
    return Array.from(this.hostElement.querySelectorAll('ix-animated-tab'));
  }
  get tabsContainer() {
    return this.hostElement.querySelector('.tabs-container');
  }
  get contentContainer() {
    return this.hostElement.querySelector('.content-container');
  }
  componentWillLoad() {
    this.tabs = this.animatedTabs;
  }
  componentDidLoad() {
    this.onTabSelectionChange(this.selectedIndex, -1);
    this.observer = new MutationObserver(() => {
      // Will trigger a re-render even if only the count attribute of a child tab changed
      this.tabs = this.animatedTabs;
    });
    this.observer.observe(this.contentContainer, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['count'],
    });
  }
  //@ts-expect-error
  disconnectCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  isSelected(tab) {
    return this.tabs.indexOf(tab) === this.selectedIndex;
  }
  showTab(tab) {
    if (this.isSelected(tab)) {
      tab.classList.remove('d-none');
    }
  }
  hideTab(tab) {
    if (!this.isSelected(tab)) {
      tab.classList.add('d-none');
    }
  }
  slideOutLeft(tab) {
    if (this.disableAnimations) {
      this.hideTab(tab);
      return;
    }
    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [1, 0],
      translateX: [0, '-100%'],
      easing: this.easing,
      complete: () => {
        this.hideTab(tab);
      },
    });
  }
  slideOutRight(tab) {
    if (this.disableAnimations) {
      this.hideTab(tab);
      return;
    }
    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [1, 0],
      translateX: [0, '100%'],
      easing: this.easing,
      complete: () => {
        this.hideTab(tab);
      },
    });
  }
  slideInLeft(tab) {
    if (this.firstRender) {
      tab.classList.remove('d-none');
      this.firstRender = false;
      return;
    }
    if (this.disableAnimations) {
      this.showTab(tab);
      return;
    }
    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [0, 1],
      translateX: ['-100%', 0],
      easing: this.easing,
      begin: () => {
        this.showTab(tab);
      },
    });
  }
  slideInRight(tab) {
    if (this.firstRender) {
      tab.classList.remove('d-none');
      this.firstRender = false;
      return;
    }
    if (this.disableAnimations) {
      this.showTab(tab);
      return;
    }
    anime({
      targets: tab,
      duration: Animation.mediumTime,
      opacity: [0, 1],
      translateX: ['100%', 0],
      easing: this.easing,
      begin: () => {
        this.showTab(tab);
      },
    });
  }
  updateTabAnimation(oldIndex, newIndex) {
    var _a;
    (_a = this.tabs) === null || _a === void 0 ? void 0 : _a.forEach((tab, tabIndex) => {
      if (tabIndex === oldIndex) {
        if (tabIndex < newIndex) {
          this.slideOutLeft(tab);
        }
        else if (tabIndex > newIndex) {
          this.slideOutRight(tab);
        }
      }
      else if (tabIndex === newIndex) {
        if (tabIndex < oldIndex) {
          this.slideInLeft(tab);
        }
        else if (tabIndex > oldIndex) {
          this.slideInRight(tab);
        }
      }
      else {
        tab.classList.add('d-none');
      }
    });
  }
  onTabClick(index) {
    this.selectedIndex = index;
    this.tabClick.emit(index);
  }
  onTabMouseDown(index) {
    this.activeIndex = index;
  }
  render() {
    return (h(Host, { class: { 'flex-column-reverse': this.tabPlacement === 'bottom' } }, h("ul", { class: "tabs-container" }, this.animatedTabs.map((element, index) => (h("li", { class: { bottom: this.tabPlacement === 'bottom' }, onClick: () => this.onTabClick(index), onMouseDown: () => this.onTabMouseDown(index) }, h("div", { class: {
        'tab-container': true,
        selected: this.selectedIndex === index,
      } }, h("ix-icon", { name: element.icon }), element.count ? (h("span", { class: {
        count: true,
        bottom: this.tabPlacement === 'bottom',
      } }, convertToAbbreviationString(element.count))) : (''))))), h("div", { class: {
        'tab-active-underline': true,
        bottom: this.tabPlacement === 'bottom',
      }, style: { 'margin-left': `calc(${this.selectedIndex} * 5rem)` } })), h("div", { class: "content-container" }, h("slot", null))));
  }
  static get is() { return "ix-animated-tabs"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["animated-tabs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["animated-tabs.css"]
    };
  }
  static get properties() {
    return {
      "disableAnimations": {
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
              "name": "internal",
              "text": "For debugging purposes only"
            }],
          "text": ""
        },
        "attribute": "disable-animations",
        "reflect": false,
        "defaultValue": "false"
      },
      "selectedIndex": {
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
          "text": "Current selected tab index"
        },
        "attribute": "selected-index",
        "reflect": false,
        "defaultValue": "0"
      },
      "tabPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'top' | 'bottom'",
          "resolved": "\"bottom\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Placement of the tabs"
        },
        "attribute": "tab-placement",
        "reflect": false,
        "defaultValue": "'top'"
      }
    };
  }
  static get states() {
    return {
      "tabs": {},
      "activeIndex": {}
    };
  }
  static get events() {
    return [{
        "method": "tabClick",
        "name": "tabClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Tab navigated"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "selectedIndex",
        "methodName": "onTabSelectionChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "mouseup",
        "method": "onMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
