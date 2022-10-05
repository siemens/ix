import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as Popover } from './popover.util.js';
import { a as convertToRemString } from './rwd.util.js';
import { d as defineCustomElement$3 } from './dropdown.js';
import { d as defineCustomElement$2 } from './menu-item.js';

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const toggleVariant = () => {
  let currentTheme = Array.from(document.body.classList).find((className) => className.includes('theme-'));
  if (!currentTheme) {
    currentTheme = 'theme-classic-dark';
  }
  const isDark = currentTheme.endsWith('-dark');
  let newTheme = currentTheme;
  if (isDark) {
    newTheme = currentTheme.replace(/-dark$/g, '-light');
  }
  else {
    newTheme = currentTheme.replace(/-light$/g, '-dark');
  }
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);
};

const menuCss = "ix-menu{display:flex;flex-direction:row;position:absolute;height:100%;min-height:22.75rem;z-index:var(--theme-z-index-sticky);width:auto}ix-menu .menu{display:flex;flex-direction:column;position:relative;width:4rem;height:100%;background-color:var(--theme-nav--background);transition:width var(--animate-duration)}ix-menu .menu.expanded{box-shadow:var(--theme-navigation--box-shadow)}ix-menu .menu .burger-menu-button{display:flex;justify-content:center;margin-top:0.75rem;margin-left:0.75rem;margin-bottom:1rem;height:2rem;width:2.5rem;border-radius:0.25rem}ix-menu .menu .burger-menu-button:not(.disabled):not(:disabled).hover,ix-menu .menu .burger-menu-button:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}ix-menu .menu .burger-menu-button:not(.disabled):not(:disabled).active,ix-menu .menu .burger-menu-button:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}ix-menu .menu .burger-menu-button svg{display:inline-block;fill:var(--theme-menu-btn--color);position:relative}ix-menu .menu .burger-menu-button svg .line{opacity:1;transform:rotate(0) translateY(0) translateX(0);transition:transform 0.3s ease-in-out, opacity 0.2s ease-in-out}ix-menu .menu .burger-menu-button.expanded svg .line-1{transform:translate(0.6875rem, -0.05rem) rotate(45deg)}ix-menu .menu .burger-menu-button.expanded svg .line-2{opacity:0}ix-menu .menu .burger-menu-button.expanded svg .line-3{transform:translate(-0.75625rem, 0.8125rem) rotate(-45deg)}ix-menu .menu-overlay{display:block;position:absolute;width:calc(100vw - 4rem);height:100%;left:4rem;z-index:-1;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);background-color:var(--theme-sidebar-overlay-blur);transition:all 150ms ease-out}ix-menu .menu-overlay-invisible{display:none}ix-menu :not(.active-more-tab)>.internal-tab:last-child{margin-bottom:1rem}ix-menu .menu.expanded{width:16rem}ix-menu .menu-overlay.expanded{width:calc(100vw - 16rem);left:16rem}ix-menu #avatar-tab-placeholder{max-height:3rem}ix-menu .avatar{margin-bottom:2rem}ix-menu #cui-imprint .cui-imprint-product-name{margin-bottom:1rem}ix-menu #cui-imprint .cui-imprint-product-description{margin-bottom:2rem}ix-menu #cui-imprint .cui-imprint-link-container{display:flex;align-items:center}ix-menu .bottom-tab-divider{margin-top:auto}";

const Menu = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.expandChange = createEvent(this, "expandChange", 7);
    this.mapExpandChange = createEvent(this, "mapExpandChange", 7);
    /**
     * Is settings tab visible
     */
    this.showSettings = false;
    /**
     * Is about tab visible
     */
    this.showAbout = false;
    /**
     * Show toggle between light and dark variant. Only if the provided theme have implemented both!
     */
    this.enableToggleTheme = false;
    /**
     * Is settings tab is visible
     */
    this.enableSettings = true;
    /**
     * Internal
     */
    this.enableMapExpand = false;
    /**
     * Should only be set if you use ix-menu standalone
     */
    this.applicationDescription = '';
    /**
     * Maximum number of menu items to show in case enough vertical space is available.
     * Extra menu items will be collapsed to 'show more' menu item.
     */
    this.maxVisibleMenuItems = 9;
    /**
     */
    this.i18nLegal = 'About & legal information';
    /**
     */
    this.i18nSettings = 'Settings';
    /**
     */
    this.i18nToggleTheme = 'Toggle theme';
    /**
     */
    this.i18nExpand = ' Expand';
    /**
     */
    this.i18nCollapse = 'Collapse';
    /**
     */
    this.i18nMore = 'More…';
    /**
     * Expand menu
     */
    this.expand = false;
    this.showMoreItems = false;
    this.visibleMenuItems = 0;
    this.countMoreNotifications = 0;
    this.mapExpand = true;
    this.isMoreTabEmpty = false;
    this.domObserver = new MutationObserver(this.onDomChange.bind(this));
    // FBC IAM workaround #488
    this.isVisible = (elm) => {
      var _a, _b;
      return (elm.style.display !== 'none' &&
        ((_b = (_a = elm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.style.display) !== 'none');
    };
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
  showTab(index) {
    return index + 1 <= this.visibleMenuItems;
  }
  componentDidLoad() {
    var _a, _b, _c, _d;
    const anchor = this.hostElement.querySelector('#more-tab');
    this.popoverListener = new Popover(anchor, this.moreItemsDropdown, () => {
      this.showMoreItems = false;
    });
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
  disconnectedCallback() {
    var _a;
    (_a = this.popoverListener) === null || _a === void 0 ? void 0 : _a.destroy();
  }
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
  toggleShowMoreDropdown() {
    if (this.moreItemsDropdown.querySelectorAll('.appended').length === 0) {
      return;
    }
    this.popoverListener.open();
    this.showMoreItems = !this.showMoreItems;
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
      } }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "32", height: "32" }, h("rect", { class: "line line-1", x: "5", y: "9.5", width: "22", height: "2" }), h("rect", { class: "line line-2", x: "5", y: "15.5", width: "22", height: "2" }), h("rect", { class: "line line-3", x: "5", y: "21.5", width: "22", height: "2" }))), h("div", { id: "avatar-tab-placeholder" }), h("div", { class: "tabs-top" }), h("slot", null), h("div", { class: "active-more-tab" }, this.activeTab ? (h("ix-menu-item", { class: "internal-tab", active: true, tabIcon: this.activeTab.tabIcon }, this.activeTab.innerText)) : null), h("ix-menu-item", { id: "more-tab", tabIcon: "more-menu", class: {
        'internal-tab': true,
      }, style: {
        display: this.showMoreButton() ? 'block' : 'none',
      }, title: "Show more", notifications: this.countMoreNotifications, onClick: () => this.toggleShowMoreDropdown() }, this.i18nMore, h("ix-dropdown", { show: this.showMoreItems }, this.menuItems
      .filter((elm, index) => !this.showTab(index) &&
      !this.isMenuItemActive(elm) &&
      this.isVisible(elm))
      .map((e) => {
      return (h("ix-menu-item", { tabIcon: e.tabIcon, active: e.active, class: "internal-tab appended", onClick: () => e.dispatchEvent(new CustomEvent('click')) }, e.innerText));
    }))), h("div", { class: "bottom-tab-divider" }), this.enableSettings && !this.isSettingsEmpty ? (h("ix-menu-item", { class: {
        'internal-tab': true,
        'bottom-tab': true,
        active: this.showSettings,
      }, tabIcon: "cogwheel", onClick: async () => this.toggleSettings(!this.showSettings) }, this.i18nSettings)) : null, h("slot", { name: "bottom" }), h("div", { id: "popover-area" }), this.about ? (h("ix-menu-item", { id: "aboutAndLegal", class: {
        'internal-tab': true,
        'bottom-tab': true,
        active: this.showAbout,
      }, tabIcon: "info", onClick: async () => this.toggleAbout(!this.showAbout) }, this.i18nLegal)) : null, this.enableToggleTheme ? (h("ix-menu-item", { id: "toggleTheme", onClick: () => toggleVariant(), class: "internal-tab bottom-tab", tabIcon: "bulb" }, this.i18nToggleTheme)) : null, this.enableMapExpand ? (h("ix-menu-item", { id: "menu-collapse", onClick: () => this.mapExpandChange.emit(this.mapExpand), class: "internal-tab bottom-tab", tabIcon: `${this.getCollapseIcon()}` }, this.getCollapseText())) : null), h("div", { class: {
        'menu-overlay': true,
        expanded: this.expand,
        'd-block': this.showAbout || this.showSettings,
      }, style: {
        opacity: this.showAbout || this.showSettings ? '1' : '0',
      } }), h("div", { class: "menu-overlay-invisible" })));
  }
  get hostElement() { return this; }
  static get style() { return menuCss; }
}, [4, "ix-menu", {
    "showSettings": [1028, "show-settings"],
    "showAbout": [1028, "show-about"],
    "enableToggleTheme": [4, "enable-toggle-theme"],
    "enableSettings": [4, "enable-settings"],
    "enableMapExpand": [4, "enable-map-expand"],
    "applicationName": [1, "application-name"],
    "applicationDescription": [1, "application-description"],
    "maxVisibleMenuItems": [2, "max-visible-menu-items"],
    "i18nLegal": [1, "i-1-8n-legal"],
    "i18nSettings": [1, "i-1-8n-settings"],
    "i18nToggleTheme": [1, "i-1-8n-toggle-theme"],
    "i18nExpand": [1, "i-1-8n-expand"],
    "i18nCollapse": [1, "i-1-8n-collapse"],
    "i18nMore": [1, "i-1-8n-more"],
    "expand": [1540],
    "showMoreItems": [32],
    "visibleMenuItems": [32],
    "countMoreNotifications": [32],
    "mapExpand": [32],
    "activeTab": [32],
    "isMoreTabEmpty": [32],
    "toggleMapExpand": [64],
    "toggleMenu": [64],
    "toggleSettings": [64],
    "toggleAbout": [64]
  }, [[9, "resize", "onWindowResize"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu", "ix-dropdown", "ix-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Menu);
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-menu-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxMenu = Menu;
const defineCustomElement = defineCustomElement$1;

export { IxMenu, defineCustomElement };
