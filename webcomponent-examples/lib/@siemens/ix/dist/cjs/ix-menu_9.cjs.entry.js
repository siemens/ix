'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const rwd_util = require('./rwd.util-482d41d4.js');

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class Popover {
  constructor(hostElement, popoverElement, outsideCallback) {
    this.hostElement = hostElement;
    this.popoverElement = popoverElement;
    this.outsideCallback = outsideCallback;
  }
  outside(e) {
    var _a;
    if (!((_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
      this.outsideCallback(e);
    }
  }
  open(maxWidth = 256) {
    this.popoverElement.style.transform = `
      translateX(${this.hostElement.offsetLeft + this.hostElement.offsetWidth}px)
      translateY(-${this.hostElement.offsetHeight}px)
    `;
    this.popoverElement.style.maxWidth = rwd_util.convertToRemString(maxWidth);
    document.body.addEventListener('click', this.outside.bind(this));
  }
  destroy() {
    document.body.removeEventListener('click', this.outside.bind(this));
  }
}

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

const Menu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.expandChange = index.createEvent(this, "expandChange", 7);
    this.mapExpandChange = index.createEvent(this, "mapExpandChange", 7);
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
    return rwd_util.convertToRemString(offset);
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
    return (index.h(index.Host, { class: {
        expanded: this.expand,
      } }, index.h("div", { class: {
        menu: true,
        expanded: this.expand,
      }, onClick: () => {
        this.resetActiveTab();
      } }, index.h("div", { onClick: async () => this.toggleMenu(), class: {
        'burger-menu-button': true,
        expanded: this.expand,
      } }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "32", height: "32" }, index.h("rect", { class: "line line-1", x: "5", y: "9.5", width: "22", height: "2" }), index.h("rect", { class: "line line-2", x: "5", y: "15.5", width: "22", height: "2" }), index.h("rect", { class: "line line-3", x: "5", y: "21.5", width: "22", height: "2" }))), index.h("div", { id: "avatar-tab-placeholder" }), index.h("div", { class: "tabs-top" }), index.h("slot", null), index.h("div", { class: "active-more-tab" }, this.activeTab ? (index.h("ix-menu-item", { class: "internal-tab", active: true, tabIcon: this.activeTab.tabIcon }, this.activeTab.innerText)) : null), index.h("ix-menu-item", { id: "more-tab", tabIcon: "more-menu", class: {
        'internal-tab': true,
      }, style: {
        display: this.showMoreButton() ? 'block' : 'none',
      }, title: "Show more", notifications: this.countMoreNotifications, onClick: () => this.toggleShowMoreDropdown() }, this.i18nMore, index.h("ix-dropdown", { show: this.showMoreItems }, this.menuItems
      .filter((elm, index) => !this.showTab(index) &&
      !this.isMenuItemActive(elm) &&
      this.isVisible(elm))
      .map((e) => {
      return (index.h("ix-menu-item", { tabIcon: e.tabIcon, active: e.active, class: "internal-tab appended", onClick: () => e.dispatchEvent(new CustomEvent('click')) }, e.innerText));
    }))), index.h("div", { class: "bottom-tab-divider" }), this.enableSettings && !this.isSettingsEmpty ? (index.h("ix-menu-item", { class: {
        'internal-tab': true,
        'bottom-tab': true,
        active: this.showSettings,
      }, tabIcon: "cogwheel", onClick: async () => this.toggleSettings(!this.showSettings) }, this.i18nSettings)) : null, index.h("slot", { name: "bottom" }), index.h("div", { id: "popover-area" }), this.about ? (index.h("ix-menu-item", { id: "aboutAndLegal", class: {
        'internal-tab': true,
        'bottom-tab': true,
        active: this.showAbout,
      }, tabIcon: "info", onClick: async () => this.toggleAbout(!this.showAbout) }, this.i18nLegal)) : null, this.enableToggleTheme ? (index.h("ix-menu-item", { id: "toggleTheme", onClick: () => toggleVariant(), class: "internal-tab bottom-tab", tabIcon: "bulb" }, this.i18nToggleTheme)) : null, this.enableMapExpand ? (index.h("ix-menu-item", { id: "menu-collapse", onClick: () => this.mapExpandChange.emit(this.mapExpand), class: "internal-tab bottom-tab", tabIcon: `${this.getCollapseIcon()}` }, this.getCollapseText())) : null), index.h("div", { class: {
        'menu-overlay': true,
        expanded: this.expand,
        'd-block': this.showAbout || this.showSettings,
      }, style: {
        opacity: this.showAbout || this.showSettings ? '1' : '0',
      } }), index.h("div", { class: "menu-overlay-invisible" })));
  }
  get hostElement() { return index.getElement(this); }
};
Menu.style = menuCss;

const menuAboutCss = ".text-xs.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-about{color:var(--theme-color-primary)}.sc-ix-menu-about-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-about-h .about-header.sc-ix-menu-about{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-about-h .about-header.sc-ix-menu-about h2.sc-ix-menu-about{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-about-h .about-tabs.sc-ix-menu-about{margin-bottom:1.5rem}.sc-ix-menu-about-h ix-menu-about-item.sc-ix-menu-about{display:none}";

const MenuAbout$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.close = index.createEvent(this, "close", 7);
    /**
     *
     */
    this.i18nImprintLabel = 'Imprint';
    /**
     * Active tab
     */
    this.activeTabLabel = this.i18nImprintLabel;
    /**
     * Label of first tab
     */
    this.label = 'About & legal information';
    /**
     * Internal
     */
    this.show = false;
    this.labels = [];
  }
  get aboutItems() {
    return Array.from(this.el.querySelectorAll('ix-menu-about-item'));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.aboutItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }
  componentWillLoad() {
    var _a;
    this.setTab(this.activeTabLabel || ((_a = this.aboutItems[0]) === null || _a === void 0 ? void 0 : _a.label));
  }
  componentDidLoad() {
    var _a;
    this.setTab(this.activeTabLabel || ((_a = this.aboutItems[0]) === null || _a === void 0 ? void 0 : _a.label));
    index.forceUpdate(this.el);
  }
  componentWillRender() {
    this.updateLabels();
  }
  updateLabels() {
    this.labels = this.aboutItems.map((i) => i.label);
  }
  watchActiveTabLabel(value) {
    // Wait a DOM render cycle to get changed labels
    setTimeout(() => this.setTab(value));
  }
  getSelectedTabIndex(label) {
    const selectedItem = this.aboutItems.find((item) => item.label === label);
    return this.aboutItems.indexOf(selectedItem);
  }
  render() {
    return (index.h(index.Host, { class: {
        animate__animated: true,
        animate__fadeInLeft: this.show,
        animate__fadeOutLeft: !this.show,
      } }, index.h("div", { class: "about-header" }, index.h("h2", { class: "text-h2" }, this.label), index.h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), index.h("ix-tabs", { selected: this.getSelectedTabIndex(this.activeTabLabel), class: "about-tabs" }, this.labels.map((label) => (index.h("ix-tab-item", { onClick: () => this.setTab(label) }, label)))), index.h("div", { class: "about-items" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "activeTabLabel": ["watchActiveTabLabel"]
  }; }
};
MenuAbout$1.style = menuAboutCss;

const menuAboutItemCss = ".sc-ix-menu-about-item-h{display:block}";

const MenuAboutItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MenuAboutItem.style = menuAboutItemCss;

const menuAboutNewsCss = ".sc-ix-menu-about-news-h{display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-1);border:var(--theme-weak-bdr-1);border-radius:0.25rem;padding:1rem;left:4rem;z-index:10000;transition:left var(--animate-duration);margin-left:0.5rem !important;box-shadow:var(--theme-box-shadow-level-2)}.expanded.sc-ix-menu-about-news-h{left:calc(4rem + 12rem)}.show.sc-ix-menu-about-news-h{display:none}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news{position:absolute;top:0.0625rem;left:1rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news{position:absolute;height:3.625rem;width:3rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news polygon.sc-ix-menu-about-news{fill:var(--theme-color-primary)}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news ix-icon.sc-ix-menu-about-news{margin:0.5rem;position:absolute;z-index:1}.sc-ix-menu-about-news-h .cui-popover-news-header.sc-ix-menu-about-news{margin-bottom:2rem;margin-left:4rem;margin-top:-0.25rem}.sc-ix-menu-about-news-h .popover-body.sc-ix-menu-about-news{color:var(--theme-color-std-text)}.sc-ix-menu-about-news-h .cui-popover-news-footer.sc-ix-menu-about-news{display:flex;justify-content:flex-end;margin-top:1rem}.sc-ix-menu-about-news-h #arrow.sc-ix-menu-about-news{bottom:14px;position:relative;left:-10px}.sc-ix-menu-about-news-h ix-icon-button.sc-ix-menu-about-news{top:0.5rem;right:0.5rem;position:absolute}.sc-ix-menu-about-news-h svg#arrow.sc-ix-menu-about-news{position:absolute;left:-0.5rem;bottom:0.4rem}.sc-ix-menu-about-news-h svg#arrow.sc-ix-menu-about-news path.sc-ix-menu-about-news{fill:var(--theme-color-1);stroke:var(--theme-color-weak-bdr-1)}";

const MenuAboutNews = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.showMore = index.createEvent(this, "showMore", 7);
    this.closePopover = index.createEvent(this, "closePopover", 7);
    /**
     * Show about news
     */
    this.show = false;
    /**
     *
     */
    this.i18nShowMore = 'Show more';
    /**
     * Bottom offset
     */
    this.offsetBottom = 0;
    /**
     * Internal
     */
    this.expanded = false;
  }
  render() {
    return (index.h(index.Host, { class: {
        expanded: this.expanded,
        show: !this.show,
      } }, index.h("div", { class: "banner-container" }, index.h("ix-icon", { color: "color-inv-contrast-text", name: "shout", size: "32" }), index.h("svg", { viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, index.h("polygon", { points: "0 0 48 0 48 56 24 48 0 56" }))), index.h("div", { class: "cui-popover-news-header" }, index.h("span", { class: "text-l-title" }, this.label)), index.h("ix-icon-button", { size: "24", icon: "close-small", ghost: true, onClick: () => {
        this.show = false;
        this.closePopover.emit();
      } }), index.h("slot", null), this.aboutItemLabel ? (index.h("div", { class: "cui-popover-news-footer" }, index.h("button", { class: "btn btn-primary", onClick: (e) => {
        this.show = false;
        this.showMore.emit(e);
      } }, this.i18nShowMore))) : null, index.h("svg", { id: "arrow", xmlns: "http://www.w3.org/2000/svg", width: "8", height: "12", viewBox: "0 0 8 12" }, index.h("path", { d: "M8 0 L0 6 L8 12" }))));
  }
};
MenuAboutNews.style = menuAboutNewsCss;

const menuAvatarCss = ".sc-ix-menu-avatar-h{display:block;position:relative;margin-bottom:0.5rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar{display:flex;align-items:center;height:2.5rem;max-height:2.5rem;padding-left:0.25rem;margin-left:0.75rem;margin-right:0.75rem;transition:0.15s;border-radius:1.25rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar>svg.sc-ix-menu-avatar{height:2rem;width:2rem;min-height:2rem;min-width:2rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-background.sc-ix-menu-avatar{fill:var(--theme-avatar--background)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-person.sc-ix-menu-avatar{fill:var(--theme-avatar--person)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar .text-default-single.sc-ix-menu-avatar{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}";

const MenuAvatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.logoutClick = index.createEvent(this, "logoutClick", 7);
    /**
     *
     */
    this.i18nLogout = 'Logout';
  }
  toggleMenu() {
    this.outsideListener.open();
    this.displayMenu = !this.displayMenu;
  }
  componentDidLoad() {
    this.outsideListener = new Popover(this.hostElement, this.hostElement.querySelector('ix-dropdown'), () => {
      this.displayMenu = false;
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.outsideListener) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (index.h(index.Host, null, index.h("li", { class: "nav-item top-item avatar no-hover", title: this.top }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32" }, index.h("g", { fill: "none", "fill-rule": "evenodd" }, index.h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n                    16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), index.h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n                  6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n                  9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n                  6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" }))), index.h("div", { class: "avatar-name" }, index.h("span", { class: "text-default-single", title: this.top }, this.top), index.h("span", { class: "text-default-single", title: this.bottom }, this.bottom))), index.h("ix-dropdown", { show: this.displayMenu }, index.h("slot", null), index.h("ix-menu-avatar-item", { label: this.i18nLogout, icon: "log-out", onClick: (e) => {
        this.logoutClick.emit(e);
      } }))));
  }
  get hostElement() { return index.getElement(this); }
};
MenuAvatar.style = menuAvatarCss;

const menuAvatarItemCss = ".sc-ix-menu-avatar-item-h{display:block}";

const MenuAvatarItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.itemClick = index.createEvent(this, "itemClick", 7);
  }
  render() {
    return (index.h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
  }
  get hostElement() { return index.getElement(this); }
};
MenuAvatarItem.style = menuAvatarItemCss;

const menuItemCss = "ix-menu-item{position:relative;display:block}ix-menu-item .tab{display:flex;position:relative;align-items:center;height:3rem;z-index:500;padding-left:1.25rem}ix-menu-item .tab:not(.selected){cursor:pointer}ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled).hover,ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled).active,ix-menu-item .tab:not(.selected):not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}ix-menu-item i.glyph{color:var(--theme-nav-item-primary-icon--color);position:relative}ix-menu-item .tab:focus{outline:none}ix-menu-item:focus{outline:none}ix-menu-item .tab:not(:last-child){margin-bottom:0.5rem}ix-menu-item .notification{display:inline-flex;position:absolute;top:-0.5rem;right:-50%}ix-menu-item .notification .pill{display:inline-flex;justify-content:center;align-items:center;height:1rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--theme-color-primary);border-radius:6.25rem;font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--theme-color-primary--contrast);padding:0.25rem}ix-menu-item .tab-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-nav-item-primary--color);margin:0 1.25rem}ix-menu-item.active .tab,ix-menu-item.selected .tab{background-color:var(--theme-nav-item-primary--background--selected)}ix-menu-item.active .tab::before,ix-menu-item.selected .tab::before{content:\"\";background-color:var(--theme-nav-item-primary--border-color--selected);height:3rem;width:0.25rem;left:0;position:absolute}ix-menu-item.active .tab>.glyph,ix-menu-item.selected .tab>.glyph{color:var(--theme-nav-item-primary-icon--color--selected)}ix-menu-item.disabled{color:var(--theme-color-weak-text);pointer-events:none;cursor:default}ix-menu-item.disabled .tab>.glyph{color:var(--theme-color-weak-text)}ix-menu-item.disabled .tab-text{color:var(--theme-color-weak-text)}ix-menu-item.home-tab,ix-menu-item[slot=home]{margin-bottom:1.5rem}ix-menu-item.bottom-tab,ix-menu-item[slot=bottom]{height:2.25rem}ix-menu-item.bottom-tab .tab,ix-menu-item[slot=bottom] .tab{height:2.25rem}ix-menu-item.bottom-tab .tab::before,ix-menu-item[slot=bottom] .tab::before{height:2.25rem}ix-menu-item.bottom-tab.active .tab,ix-menu-item.bottom-tab.selected .tab,ix-menu-item[slot=bottom].active .tab,ix-menu-item[slot=bottom].selected .tab{background-color:var(--theme-color-1)}";

const MenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Move the Tab to a top position.
     */
    this.home = false;
    /**
     * Place tab on bottom
     */
    this.bottom = false;
    /**
     * Icon name from @siemens/ix-icons
     */
    this.tabIcon = 'document';
  }
  get tabLabel() {
    return this.hostElement.querySelector('.tab-text');
  }
  componentDidRender() {
    const spanElement = this.tabLabel;
    const newTitle = spanElement.innerHTML.replace('&amp;', '&');
    if (this.title !== newTitle) {
      this.title = newTitle;
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        disabled: this.disabled,
        'home-tab': this.home,
        'bottom-tab': this.bottom,
        active: this.active,
      } }, index.h("li", { class: "tab", title: this.title }, index.h("i", { class: `glyph glyph-${this.tabIcon}` }, index.h("div", { class: "notification" }, this.notifications ? (index.h("div", { class: "pill" }, this.notifications)) : null)), index.h("span", { class: "tab-text text-default" }, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
};
MenuItem.style = menuItemCss;

const menuSettingsCss = ".text-xs.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-settings{color:var(--theme-color-primary)}.sc-ix-menu-settings-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings h2.sc-ix-menu-settings{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-settings-h .settings-tabs.sc-ix-menu-settings{margin-bottom:1.5rem}";

const MenuAbout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.close = index.createEvent(this, "close", 7);
    /**
     * Label
     */
    this.label = 'Settings';
    /**
     * Internal
     */
    this.show = false;
  }
  get settingsItems() {
    return Array.from(this.el.querySelectorAll('ix-menu-settings-item'));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.settingsItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }
  componentWillLoad() {
    if (this.settingsItems.length) {
      this.setTab(this.activeTabLabel || this.settingsItems[0].label);
    }
  }
  componentDidLoad() {
    index.forceUpdate(this.el);
  }
  watchActiveTabLabel(value) {
    this.setTab(value);
  }
  getTabItems() {
    return this.settingsItems.map(({ label }) => {
      return (index.h("ix-tab-item", { class: {
          active: label === this.activeTabLabel,
        }, onClick: () => this.setTab(label) }, label));
    });
  }
  render() {
    return (index.h(index.Host, { class: {
        animate__animated: true,
        animate__fadeInLeft: this.show,
        animate__fadeOutLeft: !this.show,
      } }, index.h("div", { class: "settings-header" }, index.h("h2", { class: "text-h2" }, this.label), index.h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), index.h("ix-tabs", null, this.getTabItems()), index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "activeTabLabel": ["watchActiveTabLabel"]
  }; }
};
MenuAbout.style = menuSettingsCss;

const menuSettingsItemCss = ".sc-ix-menu-settings-item-h{display:block}";

const MenuSettingsItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MenuSettingsItem.style = menuSettingsItemCss;

exports.ix_menu = Menu;
exports.ix_menu_about = MenuAbout$1;
exports.ix_menu_about_item = MenuAboutItem;
exports.ix_menu_about_news = MenuAboutNews;
exports.ix_menu_avatar = MenuAvatar;
exports.ix_menu_avatar_item = MenuAvatarItem;
exports.ix_menu_item = MenuItem;
exports.ix_menu_settings = MenuAbout;
exports.ix_menu_settings_item = MenuSettingsItem;
