/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import { convertToRemString } from '../utils/rwd.util';
import { themeSwitcher } from '../utils/theme-switcher';
export class Menu {
  constructor() {
    this.domObserver = new MutationObserver(this.onDomChange.bind(this));
    // FBC IAM workaround #488
    this.isVisible = (elm) => {
      var _a, _b;
      return (elm.style.display !== 'none' &&
        ((_b = (_a = elm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.style.display) !== 'none');
    };
    this.showSettings = false;
    this.showAbout = false;
    this.enableToggleTheme = false;
    this.enableSettings = true;
    this.enableMapExpand = false;
    this.applicationName = undefined;
    this.applicationDescription = '';
    this.maxVisibleMenuItems = 9;
    this.i18nLegal = 'About & legal information';
    this.i18nSettings = 'Settings';
    this.i18nToggleTheme = 'Toggle theme';
    this.i18nExpand = ' Expand';
    this.i18nCollapse = 'Collapse';
    this.i18nMore = 'More…';
    this.expand = false;
    this.showMoreItems = false;
    this.visibleMenuItems = 0;
    this.countMoreNotifications = 0;
    this.mapExpand = true;
    this.activeTab = undefined;
    this.isMoreTabEmpty = false;
  }
  onWindowResize() {
    this.visibleMenuItems = this.getMaxTabCount();
  }
  handleNodeMutation(node) {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    if (node.matches('.tab')) {
      this.onWindowResize();
    }
    if (node.matches('ix-menu-about') && this.menu.contains(node)) {
      this.appendAbout();
    }
    if (node.matches('ix-menu-settings') && this.menu.contains(node)) {
      this.appendSettings();
    }
  }
  onDomChange(mutations) {
    mutations.forEach((mutationRecord) => {
      mutationRecord.addedNodes.forEach(this.handleNodeMutation.bind(this));
      mutationRecord.removedNodes.forEach(this.handleNodeMutation.bind(this));
    });
  }
  get popoverArea() {
    return this.hostElement.querySelector('#popover-area');
  }
  get overlayContainer() {
    return this.hostElement.querySelector('.menu-overlay');
  }
  get invisibleContainer() {
    return this.hostElement.querySelector('.menu-overlay-invisible');
  }
  get menu() {
    return this.hostElement.querySelector('.menu');
  }
  get menuItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab)')).filter(this.isVisible);
  }
  get menuBottomItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)')).filter(this.isVisible);
  }
  get homeTab() {
    return this.hostElement.querySelector('ix-menu-item.home-tab');
  }
  get moreItemsDropdown() {
    return this.hostElement.querySelector('.internal-tab ix-dropdown');
  }
  get isMoreItemsDropdownEmpty() {
    return (this.hostElement.querySelectorAll('.internal-tab ix-dropdown .appended')
      .length === 0);
  }
  get moreItemsDropdownItems() {
    return this.hostElement.querySelectorAll('.internal-tab ix-dropdown ix-menu-item');
  }
  get activeMoreTabContainer() {
    return this.hostElement.querySelector('.active-more-tab');
  }
  get activeMoreTab() {
    return this.hostElement.querySelector('.active-more-tab ix-menu-item');
  }
  get aboutPopoverContainer() {
    return this.hostElement.querySelector('.about-news');
  }
  get aboutPopover() {
    return document.querySelector('ix-menu-about-news');
  }
  get aboutTab() {
    return this.hostElement.querySelector('#aboutAndLegal');
  }
  get about() {
    return this.hostElement.querySelector('ix-menu-about');
  }
  get settings() {
    return this.hostElement.querySelector('ix-menu-settings');
  }
  get isSettingsEmpty() {
    return (Array.from(this.hostElement.querySelectorAll('ix-menu-settings-item'))
      .length === 0);
  }
  get avatarItem() {
    return this.hostElement.querySelector('ix-menu-avatar');
  }
  get tabsContainer() {
    return this.hostElement.querySelector('#menu-tabs');
  }
  showTab(index) {
    return index + 1 <= this.visibleMenuItems;
  }
  componentDidLoad() {
    var _a, _b, _c, _d;
    (_a = this.settings) === null || _a === void 0 ? void 0 : _a.addEventListener('close', () => {
      this.showSettings = false;
      this.settings.show = this.showSettings;
    });
    (_b = this.settings) === null || _b === void 0 ? void 0 : _b.addEventListener('animationend', () => {
      if (!this.showSettings) {
        this.settings.classList.add('d-none');
        this.overlayContainer.classList.add('d-none');
      }
    });
    (_c = this.about) === null || _c === void 0 ? void 0 : _c.addEventListener('close', () => {
      this.showAbout = false;
      this.about.show = this.showAbout;
    });
    (_d = this.about) === null || _d === void 0 ? void 0 : _d.addEventListener('animationend', () => {
      if (!this.showAbout) {
        this.about.classList.add('d-none');
        this.overlayContainer.classList.add('d-none');
      }
    });
    this.overlayContainer.classList.add('d-none');
    this.onWindowResize();
    this.domObserver.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }
  disconnectedCallback() { }
  componentWillRender() {
    this.appendTabs();
  }
  componentDidRender() {
    this.visibleMenuItems = this.getMaxTabCount();
    this.appendFragments();
  }
  appendFragments() {
    this.appendAvatar();
    this.appendAbout();
    this.appendSettings();
    this.appendAboutNewsPopover();
    // This lead to none infinite-loops and other bugs.
    this.isMoreTabEmpty = this.isMoreItemsDropdownEmpty;
    this.countMoreNotifications = this.getMoreNotificationsCount();
  }
  resetActiveTab() {
    this.activeTab = null;
  }
  isMenuItemActive(item) {
    return item.active || item.classList.contains('active');
  }
  appendTabs() {
    this.activeTab = null;
    if (this.homeTab) {
      this.hostElement.querySelector('.tabs-top').appendChild(this.homeTab);
      this.homeTab.addEventListener('click', this.resetOverlay);
    }
    this.menuItems.forEach((item, index) => {
      var _a;
      if (this.showTab(index)) {
        item.classList.remove('d-none');
      }
      else {
        item.classList.add('d-none');
        if (this.isMenuItemActive(item)) {
          this.activeTab = item;
        }
      }
      // TODO: Find better solution to handle home tab
      (_a = this.homeTab) === null || _a === void 0 ? void 0 : _a.classList.remove('d-none');
      item.addEventListener('click', this.resetOverlay);
    });
  }
  appendAvatar() {
    var _a;
    const avatar = this.avatarItem;
    if (avatar) {
      avatar.style.marginBottom = '1rem';
      (_a = this.hostElement
        .querySelector('#avatar-tab-placeholder')) === null || _a === void 0 ? void 0 : _a.appendChild(avatar);
    }
  }
  getAboutPopoverVerticalPosition() {
    const heightArrow = 12;
    const offsetArrow = 6;
    const rectAbout = this.aboutTab.getBoundingClientRect();
    const offset = window.innerHeight -
      (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
    return convertToRemString(offset);
  }
  appendAboutNewsPopover() {
    var _a;
    if (!this.aboutPopover) {
      return;
    }
    this.aboutPopover.style.bottom = this.getAboutPopoverVerticalPosition();
    if (!((_a = this.popoverArea) === null || _a === void 0 ? void 0 : _a.contains(this.aboutPopover))) {
      const showMore = () => {
        var _a;
        if ((_a = this.aboutPopover) === null || _a === void 0 ? void 0 : _a.aboutItemLabel) {
          this.about.activeTabLabel = this.aboutPopover.aboutItemLabel;
          this.toggleAbout(true);
        }
      };
      this.aboutPopover.addEventListener('showMore', showMore.bind(this));
      document.body.appendChild(this.aboutPopover);
    }
  }
  appendSettings() {
    if (this.settings) {
      this.overlayContainer.appendChild(this.settings);
    }
  }
  appendAbout() {
    if (this.about) {
      this.overlayContainer.appendChild(this.about);
    }
  }
  getMoreNotificationsCount() {
    var _a;
    const moreTabs = (_a = this.moreItemsDropdown) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.appended');
    let count = 0;
    moreTabs === null || moreTabs === void 0 ? void 0 : moreTabs.forEach((tab) => {
      if (tab['notifications']) {
        count += tab['notifications'];
      }
    });
    return count;
  }
  getAvailableHeight() {
    const heightBurgerMenu = 60;
    const heightHome = 72;
    const heightAvatar = 56;
    const heightBottomTab = 36;
    let availableHeight = this.hostElement.clientHeight;
    availableHeight -= heightBurgerMenu;
    if (this.avatarItem) {
      availableHeight -= heightAvatar;
    }
    if (this.homeTab) {
      availableHeight -= heightHome;
    }
    if (this.showAbout) {
      availableHeight -= heightBottomTab;
    }
    if (this.showSettings) {
      availableHeight -= heightBottomTab;
    }
    if (this.menuBottomItems.length) {
      availableHeight -= this.menuBottomItems.length * heightBottomTab;
    }
    if (this.enableMapExpand) {
      availableHeight -= heightBottomTab;
    }
    // Subtract height of imprint and theme toggle tabs
    availableHeight -= 2 * heightBottomTab;
    // Subtract bottom margin of bottom tabs
    availableHeight -= 16;
    return availableHeight;
  }
  getMaxTabCount() {
    const heightTab = 48;
    const availableHeight = this.getAvailableHeight();
    const visibleCount = Math.floor(availableHeight / heightTab);
    const menuItemCount = this.menuItems.length;
    if (menuItemCount === 1) {
      return 1;
    }
    if (menuItemCount < this.maxVisibleMenuItems) {
      if (visibleCount > menuItemCount) {
        return menuItemCount;
      }
      return Math.min(visibleCount - 2, menuItemCount);
    }
    if (menuItemCount === this.maxVisibleMenuItems) {
      if (visibleCount < this.maxVisibleMenuItems) {
        return visibleCount - 2;
      }
      if (visibleCount === this.maxVisibleMenuItems) {
        return this.maxVisibleMenuItems - 2;
      }
      return Math.min(visibleCount, this.maxVisibleMenuItems);
    }
    if (visibleCount === this.maxVisibleMenuItems) {
      return this.maxVisibleMenuItems - 2;
    }
    if (visibleCount >= this.maxVisibleMenuItems) {
      return this.maxVisibleMenuItems - 1;
    }
    return Math.min(visibleCount - 2, this.maxVisibleMenuItems);
  }
  /**
   * Toggle map sidebar expand
   * @param show
   */
  async toggleMapExpand(show) {
    this.skipAllOverlayAnimations();
    if (show !== undefined) {
      this.mapExpand = show;
    }
    else {
      this.mapExpand = !this.mapExpand;
    }
  }
  skipAllOverlayAnimations() {
    if (this.about) {
      this.skipOverlayAnimationFor(this.about);
    }
    if (this.settings) {
      this.skipOverlayAnimationFor(this.settings);
    }
  }
  skipOverlayAnimationFor(element) {
    const animateClass = 'animate__animated';
    element === null || element === void 0 ? void 0 : element.classList.remove(animateClass);
    setTimeout(() => {
      element === null || element === void 0 ? void 0 : element.classList.add(animateClass);
    }, 300);
  }
  /**
   * Toggle menu
   * @param show
   */
  async toggleMenu(show) {
    this.skipAllOverlayAnimations();
    if (show !== undefined) {
      this.expand = show;
    }
    else {
      this.expand = !this.expand;
    }
    if (this.aboutPopover) {
      this.aboutPopover.expanded = this.expand;
    }
    this.expandChange.emit(this.expand);
  }
  /**
   * Toggle Settings tabs
   * @param show
   */
  async toggleSettings(show) {
    var _a;
    if (this.showAbout) {
      this.skipAllOverlayAnimations();
    }
    else {
      this.skipOverlayAnimationFor(this.about);
    }
    (_a = this.about) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
    this.resetOverlay();
    this.showSettings = show;
    this.settings.show = this.showSettings;
    this.settings.classList.remove('d-none');
    this.overlayContainer.classList.remove('d-none');
  }
  /**
   * Toggle About tabs
   * @param show
   */
  async toggleAbout(show) {
    var _a;
    if (this.showSettings) {
      this.skipAllOverlayAnimations();
    }
    else {
      this.skipOverlayAnimationFor(this.settings);
    }
    (_a = this.settings) === null || _a === void 0 ? void 0 : _a.classList.add('d-none');
    this.resetOverlay();
    this.showAbout = show;
    this.about.show = this.showAbout;
    this.about.classList.remove('d-none');
    this.overlayContainer.classList.remove('d-none');
  }
  resetOverlay() {
    this.showSettings = false;
    this.showAbout = false;
    if (this.settings) {
      this.settings.show = this.showSettings;
    }
    if (this.about) {
      this.about.show = this.showAbout;
    }
  }
  showMoreButton() {
    const menuItemCount = this.menuItems.length;
    if (menuItemCount === 1) {
      return false;
    }
    if (menuItemCount < this.maxVisibleMenuItems) {
      return this.visibleMenuItems < menuItemCount;
    }
    if (menuItemCount > this.maxVisibleMenuItems) {
      return this.visibleMenuItems < this.maxVisibleMenuItems;
    }
    return this.visibleMenuItems <= this.maxVisibleMenuItems - 2;
  }
  getCollapseText() {
    return this.mapExpand ? this.i18nCollapse : this.i18nExpand;
  }
  getCollapseIcon() {
    return this.mapExpand ? 'double-chevron-left' : 'double-chevron-right';
  }
  isMenuItemClicked(event) {
    const path = event.composedPath();
    const menuItems = path
      .filter((element) => element.id !== 'ix-menu-more-tab')
      .filter((element) => {
      return element.tagName === 'IX-MENU-ITEM';
    });
    return menuItems.some((menu) => this.tabsContainer.contains(menu));
  }
  render() {
    return (h(Host, { class: {
        expanded: this.expand,
      } }, h("div", { class: {
        menu: true,
        expanded: this.expand,
      }, onClick: () => {
        this.resetActiveTab();
      } }, h("div", { onClick: async () => this.toggleMenu(), class: {
        'burger-menu-button': true,
        expanded: this.expand,
      } }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "32", height: "32" }, h("rect", { class: "line line-1", x: "5", y: "9.5", width: "22", height: "2" }), h("rect", { class: "line line-2", x: "5", y: "15.5", width: "22", height: "2" }), h("rect", { class: "line line-3", x: "5", y: "21.5", width: "22", height: "2" }))), h("div", { id: "avatar-tab-placeholder" }), h("div", { id: "menu-tabs", style: {
        display: 'contents',
      }, onClick: (event) => {
        if (this.isMenuItemClicked(event)) {
          this.resetOverlay();
        }
      } }, h("div", { class: "tabs-top" }), h("slot", null), h("div", { class: "active-more-tab" }, this.activeTab ? (h("ix-menu-item", { class: "internal-tab", active: true, tabIcon: this.activeTab.tabIcon }, this.activeTab.innerText)) : null), h("ix-menu-item", { id: "ix-menu-more-tab", tabIcon: "more-menu", class: {
        'internal-tab': true,
      }, style: {
        display: this.showMoreButton() ? 'block' : 'none',
      }, title: "Show more", notifications: this.countMoreNotifications }, this.i18nMore, h("ix-dropdown", { trigger: 'ix-menu-more-tab', positioningStrategy: 'fixed', placement: 'right-start' }, this.menuItems
      .filter((elm, index) => !this.showTab(index) &&
      !this.isMenuItemActive(elm) &&
      this.isVisible(elm))
      .map((e) => {
      return (h("ix-menu-item", { tabIcon: e.tabIcon, active: e.active, class: "internal-tab appended", onClick: () => e.dispatchEvent(new CustomEvent('click')) }, e.innerText));
    })))), h("div", { class: "bottom-tab-divider" }), this.enableSettings && !this.isSettingsEmpty ? (h("ix-menu-item", { id: "settings", class: {
        'internal-tab': true,
        'bottom-tab': true,
        active: this.showSettings,
      }, tabIcon: "cogwheel", onClick: async () => this.toggleSettings(!this.showSettings) }, this.i18nSettings)) : null, h("slot", { name: "bottom" }), h("div", { id: "popover-area" }), this.about ? (h("ix-menu-item", { id: "aboutAndLegal", class: {
        'internal-tab': true,
        'bottom-tab': true,
        active: this.showAbout,
      }, tabIcon: "info", onClick: async () => this.toggleAbout(!this.showAbout) }, this.i18nLegal)) : null, this.enableToggleTheme ? (h("ix-menu-item", { id: "toggleTheme", onClick: () => themeSwitcher.toggleMode(), class: "internal-tab bottom-tab", tabIcon: "bulb" }, this.i18nToggleTheme)) : null, this.enableMapExpand ? (h("ix-menu-item", { id: "menu-collapse", onClick: () => this.mapExpandChange.emit(this.mapExpand), class: "internal-tab bottom-tab", tabIcon: `${this.getCollapseIcon()}` }, this.getCollapseText())) : null), h("div", { class: {
        'menu-overlay': true,
        expanded: this.expand,
        'd-block': this.showAbout || this.showSettings,
      }, style: {
        opacity: this.showAbout || this.showSettings ? '1' : '0',
      } }), h("div", { class: "menu-overlay-invisible" })));
  }
  static get is() { return "ix-menu"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu.css"]
    };
  }
  static get properties() {
    return {
      "showSettings": {
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
          "text": "Is settings tab visible"
        },
        "attribute": "show-settings",
        "reflect": false,
        "defaultValue": "false"
      },
      "showAbout": {
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
          "text": "Is about tab visible"
        },
        "attribute": "show-about",
        "reflect": false,
        "defaultValue": "false"
      },
      "enableToggleTheme": {
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
          "text": "Show toggle between light and dark variant. Only if the provided theme have implemented both!"
        },
        "attribute": "enable-toggle-theme",
        "reflect": false,
        "defaultValue": "false"
      },
      "enableSettings": {
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
          "text": "Is settings tab is visible"
        },
        "attribute": "enable-settings",
        "reflect": false,
        "defaultValue": "true"
      },
      "enableMapExpand": {
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
          "text": "Internal"
        },
        "attribute": "enable-map-expand",
        "reflect": false,
        "defaultValue": "false"
      },
      "applicationName": {
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
          "text": "Should only be set if you use ix-menu standalone"
        },
        "attribute": "application-name",
        "reflect": false
      },
      "applicationDescription": {
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
          "text": "Should only be set if you use ix-menu standalone"
        },
        "attribute": "application-description",
        "reflect": false,
        "defaultValue": "''"
      },
      "maxVisibleMenuItems": {
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
          "text": "Maximum number of menu items to show in case enough vertical space is available.\nExtra menu items will be collapsed to 'show more' menu item."
        },
        "attribute": "max-visible-menu-items",
        "reflect": false,
        "defaultValue": "9"
      },
      "i18nLegal": {
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
        "attribute": "i-1-8n-legal",
        "reflect": false,
        "defaultValue": "'About & legal information'"
      },
      "i18nSettings": {
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
        "attribute": "i-1-8n-settings",
        "reflect": false,
        "defaultValue": "'Settings'"
      },
      "i18nToggleTheme": {
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
        "attribute": "i-1-8n-toggle-theme",
        "reflect": false,
        "defaultValue": "'Toggle theme'"
      },
      "i18nExpand": {
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
        "attribute": "i-1-8n-expand",
        "reflect": false,
        "defaultValue": "' Expand'"
      },
      "i18nCollapse": {
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
        "attribute": "i-1-8n-collapse",
        "reflect": false,
        "defaultValue": "'Collapse'"
      },
      "i18nMore": {
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
        "attribute": "i-1-8n-more",
        "reflect": false,
        "defaultValue": "'More\u2026'"
      },
      "expand": {
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
          "text": "Expand menu"
        },
        "attribute": "expand",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "showMoreItems": {},
      "visibleMenuItems": {},
      "countMoreNotifications": {},
      "mapExpand": {},
      "activeTab": {},
      "isMoreTabEmpty": {}
    };
  }
  static get events() {
    return [{
        "method": "expandChange",
        "name": "expandChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Menu expanded"
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }, {
        "method": "mapExpandChange",
        "name": "mapExpandChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Map Sidebar expanded"
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
      "toggleMapExpand": {
        "complexType": {
          "signature": "(show?: boolean) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "show"
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
          "text": "Toggle map sidebar expand",
          "tags": [{
              "name": "param",
              "text": "show"
            }]
        }
      },
      "toggleMenu": {
        "complexType": {
          "signature": "(show?: boolean) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "show"
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
          "text": "Toggle menu",
          "tags": [{
              "name": "param",
              "text": "show"
            }]
        }
      },
      "toggleSettings": {
        "complexType": {
          "signature": "(show: boolean) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "show"
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
          "text": "Toggle Settings tabs",
          "tags": [{
              "name": "param",
              "text": "show"
            }]
        }
      },
      "toggleAbout": {
        "complexType": {
          "signature": "(show: boolean) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "show"
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
          "text": "Toggle About tabs",
          "tags": [{
              "name": "param",
              "text": "show"
            }]
        }
      }
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
