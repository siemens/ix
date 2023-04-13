import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, f as forceUpdate } from "./index.47446461.js";
import { m as menuController, h as hostContext, i as isBasicNavigationLayout } from "./context-f6a2b727.b0a35cb0.js";
import { a as convertToRemString } from "./rwd.util-cfc2ea72.55fb8697.js";
import { s as screenMode } from "./service-fc436c5b.3249cd9f.js";
import { t as themeSwitcher } from "./theme-switcher-7498e4f2.143499f1.js";
import "./typed-event-a230184a.ccfb44d2.js";
const menuCss = "ix-menu{display:flex;flex-direction:row;position:absolute;height:100%;min-height:22.75rem;z-index:var(--theme-z-index-sticky);width:auto}ix-menu .menu{display:flex;flex-direction:column;position:relative;width:4rem;height:100%;-webkit-padding-after:1rem;padding-block-end:1rem;overflow:hidden;background-color:var(--theme-nav--background);transition:width var(--animate-duration)}ix-menu .menu.expanded{box-shadow:var(--theme-navigation--box-shadow)}ix-menu .menu .burger-menu{margin:0.75rem 0 1rem 0.75rem}ix-menu .menu-overlay{display:block;position:absolute;width:calc(100vw - 4rem);height:100%;left:4rem;z-index:-1;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);background-color:var(--theme-sidebar-overlay-blur);transition:all 300ms ease-out}ix-menu .menu-overlay-invisible{display:none}ix-menu .menu.expanded{width:16rem}ix-menu .menu-overlay.expanded{width:calc(100vw - 16rem);left:16rem}ix-menu #avatar-tab-placeholder{max-height:3rem}ix-menu .avatar{margin-bottom:2rem}ix-menu #cui-imprint .cui-imprint-product-name{margin-bottom:1rem}ix-menu #cui-imprint .cui-imprint-product-description{margin-bottom:2rem}ix-menu #cui-imprint .cui-imprint-link-container{display:flex;align-items:center}ix-menu .bottom-tab-divider{margin-top:auto}ix-menu.mode-mobile .menu:not(.expanded){width:0}ix-menu.mode-mobile .menu{padding-top:2rem}ix-menu.mode-mobile .menu .burger-menu{display:none}ix-menu.mode-mobile .menu-overlay{left:0px;width:100vw}a[href]:has(>ix-menu-item){text-decoration:none}";
const Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expandChange = createEvent(this, "expandChange", 7);
    this.mapExpandChange = createEvent(this, "mapExpandChange", 7);
    this.domObserver = new MutationObserver(this.onDomChange.bind(this));
    this.isVisible = (elm) => {
      var _a, _b;
      return elm.style.display !== "none" && ((_b = (_a = elm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.style.display) !== "none";
    };
    this.showSettings = false;
    this.showAbout = false;
    this.enableToggleTheme = false;
    this.enableSettings = true;
    this.enableMapExpand = false;
    this.applicationName = void 0;
    this.applicationDescription = "";
    this.maxVisibleMenuItems = 9;
    this.i18nLegal = "About & legal information";
    this.i18nSettings = "Settings";
    this.i18nToggleTheme = "Toggle theme";
    this.i18nExpand = " Expand";
    this.i18nCollapse = "Collapse";
    this.i18nMore = "More\u2026";
    this.expand = false;
    this.showMoreItems = false;
    this.visibleMenuItems = 0;
    this.countMoreNotifications = 0;
    this.mapExpand = true;
    this.activeTab = void 0;
    this.isMoreTabEmpty = false;
    this.mode = "desktop";
  }
  onWindowResize() {
    this.visibleMenuItems = this.getMaxTabCount();
  }
  handleNodeMutation(node) {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    if (node.matches(".tab")) {
      this.onWindowResize();
    }
    if (node.matches("ix-menu-about") && this.menu.contains(node)) {
      this.appendAbout();
    }
    if (node.matches("ix-menu-settings") && this.menu.contains(node)) {
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
    return this.hostElement.querySelector("#popover-area");
  }
  get overlayContainer() {
    return this.hostElement.querySelector(".menu-overlay");
  }
  get invisibleContainer() {
    return this.hostElement.querySelector(".menu-overlay-invisible");
  }
  get menu() {
    return this.hostElement.querySelector(".menu");
  }
  get menuItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])')).filter(this.isVisible);
  }
  get menuBottomItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)")).filter(this.isVisible);
  }
  get homeTab() {
    return this.hostElement.querySelector("ix-menu-item.home-tab");
  }
  get moreItemsDropdown() {
    return this.hostElement.querySelector(".internal-tab ix-dropdown");
  }
  get isMoreItemsDropdownEmpty() {
    return this.hostElement.querySelectorAll(".internal-tab ix-dropdown .appended").length === 0;
  }
  get moreItemsDropdownItems() {
    return this.hostElement.querySelectorAll(".internal-tab ix-dropdown ix-menu-item");
  }
  get activeMoreTabContainer() {
    return this.hostElement.querySelector(".active-more-tab");
  }
  get activeMoreTab() {
    return this.hostElement.querySelector(".active-more-tab ix-menu-item");
  }
  get aboutPopoverContainer() {
    return this.hostElement.querySelector(".about-news");
  }
  get aboutPopover() {
    return document.querySelector("ix-menu-about-news");
  }
  get aboutTab() {
    return this.hostElement.querySelector("#aboutAndLegal");
  }
  get about() {
    return this.hostElement.querySelector("ix-menu-about");
  }
  get settings() {
    return this.hostElement.querySelector("ix-menu-settings");
  }
  get isSettingsEmpty() {
    return Array.from(this.hostElement.querySelectorAll("ix-menu-settings-item")).length === 0;
  }
  get avatarItem() {
    return this.hostElement.querySelector("ix-menu-avatar");
  }
  get tabsContainer() {
    return this.hostElement.querySelector("#menu-tabs");
  }
  showTab(index) {
    return index + 1 <= this.visibleMenuItems;
  }
  componentDidLoad() {
    var _a, _b, _c, _d;
    (_a = this.settings) === null || _a === void 0 ? void 0 : _a.addEventListener("close", () => {
      this.showSettings = false;
      this.settings.show = this.showSettings;
    });
    (_b = this.settings) === null || _b === void 0 ? void 0 : _b.addEventListener("animationend", () => {
      if (!this.showSettings) {
        this.settings.classList.add("d-none");
        this.overlayContainer.classList.add("d-none");
      }
    });
    (_c = this.about) === null || _c === void 0 ? void 0 : _c.addEventListener("close", () => {
      this.showAbout = false;
      this.about.show = this.showAbout;
    });
    (_d = this.about) === null || _d === void 0 ? void 0 : _d.addEventListener("animationend", () => {
      if (!this.showAbout) {
        this.about.classList.add("d-none");
        this.overlayContainer.classList.add("d-none");
      }
    });
    this.overlayContainer.classList.add("d-none");
    this.onWindowResize();
    this.domObserver.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true
    });
  }
  componentWillLoad() {
    menuController.register(this.hostElement);
    const layout = hostContext("ix-basic-navigation", this.hostElement);
    if (isBasicNavigationLayout(layout) && layout.hideHeader === false) {
      screenMode.onChange.on((mode) => this.mode = mode);
      this.mode = screenMode.mode;
    }
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
    this.isMoreTabEmpty = this.isMoreItemsDropdownEmpty;
    this.countMoreNotifications = this.getMoreNotificationsCount();
  }
  resetActiveTab() {
    this.activeTab = null;
  }
  isMenuItemActive(item) {
    return item.active || item.classList.contains("active");
  }
  appendTabs() {
    this.activeTab = null;
    if (this.homeTab) {
      this.hostElement.querySelector(".tabs-top").appendChild(this.homeTab);
      this.homeTab.addEventListener("click", this.resetOverlay.bind(this));
    }
    this.menuItems.forEach((item, index) => {
      var _a;
      if (this.showTab(index)) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
        if (this.isMenuItemActive(item)) {
          this.activeTab = item;
        }
      }
      (_a = this.homeTab) === null || _a === void 0 ? void 0 : _a.classList.remove("d-none");
      item.addEventListener("click", this.resetOverlay.bind(this));
    });
  }
  appendAvatar() {
    var _a;
    const avatar = this.avatarItem;
    if (avatar) {
      avatar.style.marginBottom = "1rem";
      (_a = this.hostElement.querySelector("#avatar-tab-placeholder")) === null || _a === void 0 ? void 0 : _a.appendChild(avatar);
    }
  }
  getAboutPopoverVerticalPosition() {
    const heightArrow = 12;
    const offsetArrow = 6;
    const rectAbout = this.aboutTab.getBoundingClientRect();
    const offset = window.innerHeight - (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
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
        var _a2;
        if ((_a2 = this.aboutPopover) === null || _a2 === void 0 ? void 0 : _a2.aboutItemLabel) {
          this.about.activeTabLabel = this.aboutPopover.aboutItemLabel;
          this.toggleAbout(true);
        }
      };
      this.aboutPopover.addEventListener("showMore", showMore.bind(this));
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
    const moreTabs = (_a = this.moreItemsDropdown) === null || _a === void 0 ? void 0 : _a.querySelectorAll(".appended");
    let count = 0;
    moreTabs === null || moreTabs === void 0 ? void 0 : moreTabs.forEach((tab) => {
      if (tab["notifications"]) {
        count += tab["notifications"];
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
    availableHeight -= 2 * heightBottomTab;
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
  async toggleMapExpand(show) {
    this.skipAllOverlayAnimations();
    if (show !== void 0) {
      this.mapExpand = show;
    } else {
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
    const animateClass = "animate__animated";
    element === null || element === void 0 ? void 0 : element.classList.remove(animateClass);
    setTimeout(() => {
      element === null || element === void 0 ? void 0 : element.classList.add(animateClass);
    }, 300);
  }
  async toggleMenu(show) {
    this.skipAllOverlayAnimations();
    if (show !== void 0) {
      this.expand = show;
    } else {
      this.expand = !this.expand;
    }
    if (this.aboutPopover) {
      this.aboutPopover.expanded = this.expand;
    }
    this.expandChange.emit(this.expand);
  }
  async toggleSettings(show) {
    var _a;
    if (this.showAbout) {
      this.skipAllOverlayAnimations();
    } else {
      this.skipOverlayAnimationFor(this.about);
    }
    (_a = this.about) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
    this.resetOverlay();
    this.showSettings = show;
    this.settings.show = this.showSettings;
    this.settings.classList.remove("d-none");
    this.overlayContainer.classList.remove("d-none");
  }
  async toggleAbout(show) {
    var _a;
    if (this.showSettings) {
      this.skipAllOverlayAnimations();
    } else {
      this.skipOverlayAnimationFor(this.settings);
    }
    (_a = this.settings) === null || _a === void 0 ? void 0 : _a.classList.add("d-none");
    this.resetOverlay();
    this.showAbout = show;
    this.about.show = this.showAbout;
    this.about.classList.remove("d-none");
    this.overlayContainer.classList.remove("d-none");
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
    this.toggleMenu(false);
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
    return this.mapExpand ? "double-chevron-left" : "double-chevron-right";
  }
  isMenuItemClicked(event) {
    const path = event.composedPath();
    const menuItems = path.filter((element) => element.id !== "ix-menu-more-tab").filter((element) => {
      return element.tagName === "IX-MENU-ITEM";
    });
    return menuItems.some((menu) => this.tabsContainer.contains(menu));
  }
  render() {
    return h(Host, { class: {
      expanded: this.expand,
      [`mode-${this.mode}`]: true
    } }, h("div", { class: {
      menu: true,
      expanded: this.expand
    }, onClick: () => {
      this.resetActiveTab();
    } }, h("ix-burger-menu", { onClick: async () => this.toggleMenu(), expanded: this.expand, class: {
      "burger-menu": true
    } }), h("div", { id: "avatar-tab-placeholder" }), h("div", { id: "menu-tabs", style: {
      display: "contents"
    }, onClick: (event) => {
      if (this.isMenuItemClicked(event)) {
        this.resetOverlay();
      }
    } }, h("div", { class: "tabs-top" }), h("slot", null), h("div", { class: "active-more-tab" }, this.activeTab ? h("ix-menu-item", { class: "internal-tab", active: true, tabIcon: this.activeTab.tabIcon }, this.activeTab.innerText) : null), h("ix-menu-item", { id: "ix-menu-more-tab", tabIcon: "more-menu", class: {
      "internal-tab": true
    }, style: {
      display: this.showMoreButton() ? "block" : "none"
    }, title: "Show more", notifications: this.countMoreNotifications }, this.i18nMore, h("ix-dropdown", { trigger: "ix-menu-more-tab", positioningStrategy: "fixed", placement: "right-start" }, this.menuItems.filter((elm, index) => !this.showTab(index) && !this.isMenuItemActive(elm) && this.isVisible(elm)).map((e) => {
      return h("ix-menu-item", { tabIcon: e.tabIcon, active: e.active, class: "internal-tab appended", onClick: () => {
        this.resetOverlay();
        e.dispatchEvent(new CustomEvent("click"));
      } }, e.innerText);
    })))), h("div", { class: "bottom-tab-divider" }), this.enableSettings && !this.isSettingsEmpty ? h("ix-menu-item", { id: "settings", class: {
      "internal-tab": true,
      "bottom-tab": true,
      active: this.showSettings
    }, tabIcon: "cogwheel", onClick: async () => this.toggleSettings(!this.showSettings) }, this.i18nSettings) : null, h("slot", { name: "bottom" }), h("div", { id: "popover-area" }), this.about ? h("ix-menu-item", { id: "aboutAndLegal", class: {
      "internal-tab": true,
      "bottom-tab": true,
      active: this.showAbout
    }, tabIcon: "info", onClick: async () => this.toggleAbout(!this.showAbout) }, this.i18nLegal) : null, this.enableToggleTheme ? h("ix-menu-item", { id: "toggleTheme", onClick: () => themeSwitcher.toggleMode(), class: "internal-tab bottom-tab", tabIcon: "bulb" }, this.i18nToggleTheme) : null, this.enableMapExpand ? h("ix-menu-item", { id: "menu-collapse", onClick: () => this.mapExpandChange.emit(this.mapExpand), class: "internal-tab bottom-tab", tabIcon: `${this.getCollapseIcon()}` }, this.getCollapseText()) : null), h("div", { class: {
      "menu-overlay": true,
      expanded: this.expand,
      "d-block": this.showAbout || this.showSettings
    }, style: {
      opacity: this.showAbout || this.showSettings ? "1" : "0"
    } }), h("div", { class: "menu-overlay-invisible" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Menu.style = menuCss;
const menuAboutCss = ".text-xs.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-about{color:var(--theme-color-primary)}.sc-ix-menu-about-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-about-h .about-header.sc-ix-menu-about{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-about-h .about-header.sc-ix-menu-about h2.sc-ix-menu-about{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-about-h .about-tabs.sc-ix-menu-about{margin-bottom:1.5rem}.sc-ix-menu-about-h ix-menu-about-item.sc-ix-menu-about{display:none}";
const MenuAbout$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.close = createEvent(this, "close", 7);
    this.activeTabLabel = void 0;
    this.label = "About & legal information";
    this.show = false;
    this.labels = [];
  }
  get aboutItems() {
    return Array.from(this.el.querySelectorAll("ix-menu-about-item"));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.aboutItems.forEach((i) => {
      i.style.display = "none";
      if (i.label === this.activeTabLabel) {
        i.style.display = "block";
      }
    });
  }
  componentWillLoad() {
    if (this.aboutItems.length) {
      this.setTab(this.activeTabLabel || this.aboutItems[0].label);
    }
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  componentWillRender() {
    this.updateLabels();
  }
  updateLabels() {
    this.labels = this.aboutItems.map((i) => i.label);
  }
  watchActiveTabLabel(value) {
    setTimeout(() => this.setTab(value));
  }
  getSelectedTabIndex(label) {
    const selectedItem = this.aboutItems.find((item) => item.label === label);
    return this.aboutItems.indexOf(selectedItem);
  }
  getTabItems() {
    return this.aboutItems.map(({ label }) => {
      return h("ix-tab-item", { class: {
        active: label === this.activeTabLabel
      }, onClick: () => this.setTab(label) }, label);
    });
  }
  render() {
    return h(Host, { class: {
      animate__animated: true,
      animate__fadeInLeft: this.show,
      animate__fadeOutLeft: !this.show
    } }, h("div", { class: "about-header" }, h("h2", { class: "text-h2" }, this.label), h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), h("ix-tabs", { selected: this.getSelectedTabIndex(this.activeTabLabel), class: "about-tabs" }, this.getTabItems()), h("div", { class: "about-items" }, h("slot", null)));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "activeTabLabel": ["watchActiveTabLabel"]
    };
  }
};
MenuAbout$1.style = menuAboutCss;
const menuAboutItemCss = ".sc-ix-menu-about-item-h{display:block}";
const MenuAboutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
MenuAboutItem.style = menuAboutItemCss;
const menuAboutNewsCss = ".sc-ix-menu-about-news-h{--margin:0.5rem;display:block;position:fixed;width:20rem;height:auto;background-color:var(--theme-color-1);border:var(--theme-weak-bdr-1);border-radius:0.25rem;padding:1rem;left:4rem;z-index:10000;transition:left var(--animate-duration);margin-left:var(--margin) !important;box-shadow:var(--theme-box-shadow-level-4)}.expanded.sc-ix-menu-about-news-h{left:calc(4rem + 12rem)}.show.sc-ix-menu-about-news-h{display:none}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news{position:absolute;top:0.0625rem;left:1rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news{position:absolute;height:3.625rem;width:3rem}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news svg.sc-ix-menu-about-news polygon.sc-ix-menu-about-news{fill:var(--theme-color-primary)}.sc-ix-menu-about-news-h .banner-container.sc-ix-menu-about-news ix-icon.sc-ix-menu-about-news{margin:0.5rem;position:absolute;z-index:1}.sc-ix-menu-about-news-h .cui-popover-news-header.sc-ix-menu-about-news{margin-bottom:2rem;margin-left:4rem;margin-top:-0.25rem}.sc-ix-menu-about-news-h .popover-body.sc-ix-menu-about-news{color:var(--theme-color-std-text)}.sc-ix-menu-about-news-h .cui-popover-news-footer.sc-ix-menu-about-news{display:flex;justify-content:flex-end;margin-top:1rem}.sc-ix-menu-about-news-h ix-icon-button.sc-ix-menu-about-news{top:0.5rem;right:0.5rem;position:absolute}.sc-ix-menu-about-news-h #arrow.sc-ix-menu-about-news{position:absolute;width:0.5rem;height:0.5rem;background-color:var(--theme-color-1);border-left:var(--theme-weak-bdr-1);border-bottom:var(--theme-weak-bdr-1);transform:translateX(calc(var(--margin) * -1 - 0.8rem)) rotateZ(45deg)}";
const MenuAboutNews = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showMore = createEvent(this, "showMore", 7);
    this.closePopover = createEvent(this, "closePopover", 7);
    this.show = false;
    this.label = void 0;
    this.i18nShowMore = "Show more";
    this.aboutItemLabel = void 0;
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return h(Host, { class: {
      expanded: this.expanded,
      show: !this.show
    } }, h("div", { class: "banner-container" }, h("ix-icon", { color: "color-inv-contrast-text", name: "shout", size: "32" }), h("svg", { viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { class: "cui-popover-news-header" }, h("span", { class: "text-l-title" }, this.label)), h("ix-icon-button", { size: "24", icon: "close-small", ghost: true, onClick: () => {
      this.show = false;
      this.closePopover.emit();
    } }), h("slot", null), this.aboutItemLabel ? h("div", { class: "cui-popover-news-footer" }, h("button", { class: "btn btn-primary", onClick: (e) => {
      this.show = false;
      this.showMore.emit(e);
    } }, this.i18nShowMore)) : null, h("div", { id: "arrow" }));
  }
};
MenuAboutNews.style = menuAboutNewsCss;
const menuAvatarCss = ".sc-ix-menu-avatar-h{display:block;position:relative;margin-bottom:0.5rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar{display:flex;align-items:center;height:2.5rem;max-height:2.5rem;padding-left:0.25rem;margin-left:0.75rem;margin-right:0.75rem;transition:0.15s;border-radius:1.25rem}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar>.avatar-image.sc-ix-menu-avatar{height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar>.avatar-initials.sc-ix-menu-avatar{display:flex;align-items:center;justify-content:center;height:2rem;width:2rem;min-height:2rem;min-width:2rem;border-radius:100px;background-color:var(--theme-color-component-3)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-background.sc-ix-menu-avatar{fill:var(--theme-avatar--background)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar #avatar-path-person.sc-ix-menu-avatar{fill:var(--theme-color-4)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar .avatar-name.sc-ix-menu-avatar .text-default-single.sc-ix-menu-avatar{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-menu-avatar-h .avatar.sc-ix-menu-avatar:not(.disabled):not(:disabled):active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}";
function DefaultAvatar(props) {
  const { initials } = props;
  if (initials) {
    return h("div", { class: "avatar-initials" }, initials);
  }
  return h("svg", { class: "avatar-image", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32" }, h("g", { fill: "none", "fill-rule": "evenodd" }, h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n          16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n        6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n        9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n        6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" })));
}
const MenuAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logoutClick = createEvent(this, "logoutClick", 7);
    this.avatarElementId = "ix-menu-avatar-id";
    this.top = void 0;
    this.bottom = void 0;
    this.image = void 0;
    this.initials = void 0;
    this.i18nLogout = "Logout";
  }
  render() {
    return h(Host, null, h("li", { class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId }, this.image ? h("img", { src: this.image, class: "avatar-image" }) : h(DefaultAvatar, { initials: this.initials }), h("div", { class: "avatar-name" }, h("span", { class: "text-default-single", title: this.top }, this.top), h("span", { class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { trigger: this.avatarElementId, placement: "right-start", offset: {
      mainAxis: 12
    } }, h("slot", null), h("ix-menu-avatar-item", { label: this.i18nLogout, icon: "log-out", onClick: (e) => {
      this.logoutClick.emit(e);
    } })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuAvatar.style = menuAvatarCss;
const menuAvatarItemCss = ".sc-ix-menu-avatar-item-h{display:block}";
const MenuAvatarItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.icon = void 0;
    this.label = void 0;
  }
  render() {
    return h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) });
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuAvatarItem.style = menuAvatarItemCss;
const menuItemCss = '.sc-ix-menu-item-h{position:relative;display:block;cursor:pointer}.sc-ix-menu-item-h:not(.disabled):not(:disabled).hover,.sc-ix-menu-item-h:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}.sc-ix-menu-item-h:not(.disabled):not(:disabled).active,.sc-ix-menu-item-h:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}.sc-ix-menu-item-h .tab.sc-ix-menu-item{display:flex;position:relative;align-items:center;height:3rem;z-index:500;padding-left:1.25rem}.sc-ix-menu-item-h i.glyph.sc-ix-menu-item{color:var(--theme-nav-item-primary-icon--color);position:relative}.sc-ix-menu-item-h .tab.sc-ix-menu-item:focus-visible{outline:none}.sc-ix-menu-item-h:focus-visible{outline:none}.sc-ix-menu-item-h .tab.sc-ix-menu-item:not(:last-child){margin-bottom:0.5rem}.sc-ix-menu-item-h .notification.sc-ix-menu-item{display:inline-flex;position:absolute;top:-0.5rem;right:-50%}.sc-ix-menu-item-h .notification.sc-ix-menu-item .pill.sc-ix-menu-item{display:inline-flex;justify-content:center;align-items:center;height:1rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--theme-color-primary);border-radius:6.25rem;font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--theme-color-primary--contrast);padding:0.25rem}.sc-ix-menu-item-h .tab-text.sc-ix-menu-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-nav-item-primary--color);margin:0 1.25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.active.sc-ix-menu-item-h .tab.sc-ix-menu-item,.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item{background-color:var(--theme-nav-item-primary--background--selected)}.active.sc-ix-menu-item-h .tab.sc-ix-menu-item::before,.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item::before{content:"";background-color:var(--theme-nav-item-primary--border-color--selected);height:3rem;width:0.25rem;left:0;position:absolute}.active.sc-ix-menu-item-h .tab.sc-ix-menu-item>.glyph.sc-ix-menu-item,.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item>.glyph.sc-ix-menu-item{color:var(--theme-nav-item-primary-icon--color--selected)}.disabled.sc-ix-menu-item-h{color:var(--theme-color-weak-text);pointer-events:none;cursor:default}.disabled.sc-ix-menu-item-h .tab.sc-ix-menu-item>.glyph.sc-ix-menu-item{color:var(--theme-color-weak-text)}.disabled.sc-ix-menu-item-h .tab-text.sc-ix-menu-item{color:var(--theme-color-weak-text)}.home-tab.sc-ix-menu-item-h,[slot=home].sc-ix-menu-item-h{margin-bottom:1.5rem}.bottom-tab.sc-ix-menu-item-h,[slot=bottom].sc-ix-menu-item-h{height:2.25rem}.bottom-tab.sc-ix-menu-item-h .tab.sc-ix-menu-item,[slot=bottom].sc-ix-menu-item-h .tab.sc-ix-menu-item{height:2.25rem}.bottom-tab.sc-ix-menu-item-h .tab.sc-ix-menu-item::before,[slot=bottom].sc-ix-menu-item-h .tab.sc-ix-menu-item::before{height:2.25rem;background-color:transparent}.bottom-tab.active.sc-ix-menu-item-h .tab.sc-ix-menu-item,.bottom-tab.selected.sc-ix-menu-item-h .tab.sc-ix-menu-item,[slot=bottom].active.sc-ix-menu-item-h .tab.sc-ix-menu-item,[slot=bottom].selected.sc-ix-menu-item-h .tab.sc-ix-menu-item{background-color:var(--theme-nav-item-secondary--background--selected)}.bottom-tab.active.sc-ix-menu-item-h:hover,.bottom-tab.selected.sc-ix-menu-item-h:hover,[slot=bottom].active.sc-ix-menu-item-h:hover,[slot=bottom].selected.sc-ix-menu-item-h:hover{background-color:var(--theme-nav-item-secondary--background--selected)}.bottom-tab.active.sc-ix-menu-item-h:active,.bottom-tab.selected.sc-ix-menu-item-h:active,[slot=bottom].active.sc-ix-menu-item-h:active,[slot=bottom].selected.sc-ix-menu-item-h:active{background-color:var(--theme-nav-item-secondary--background--selected)}';
const MenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.home = false;
    this.bottom = false;
    this.tabIcon = "document";
    this.notifications = void 0;
    this.active = void 0;
    this.disabled = void 0;
    this.title = void 0;
  }
  get tabLabel() {
    return this.hostElement.querySelector(".tab-text");
  }
  componentDidRender() {
    const spanElement = this.tabLabel;
    const newTitle = spanElement.innerHTML.replace("&amp;", "&");
    if (this.title !== newTitle) {
      this.title = newTitle;
    }
  }
  render() {
    return h(Host, { class: {
      disabled: this.disabled,
      "home-tab": this.home,
      "bottom-tab": this.bottom,
      active: this.active
    } }, h("li", { class: "tab", title: this.title }, h("i", { class: `glyph glyph-${this.tabIcon}` }, h("div", { class: "notification" }, this.notifications ? h("div", { class: "pill" }, this.notifications) : null)), h("span", { class: "tab-text text-default" }, h("slot", null))));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuItem.style = menuItemCss;
const menuSettingsCss = ".text-xs.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-settings{color:var(--theme-color-primary)}.sc-ix-menu-settings-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings h2.sc-ix-menu-settings{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-settings-h .settings-tabs.sc-ix-menu-settings{margin-bottom:1.5rem}";
const MenuAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.close = createEvent(this, "close", 7);
    this.activeTabLabel = void 0;
    this.label = "Settings";
    this.show = false;
  }
  get settingsItems() {
    return Array.from(this.el.querySelectorAll("ix-menu-settings-item"));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.settingsItems.forEach((i) => {
      i.style.display = "none";
      if (i.label === this.activeTabLabel) {
        i.style.display = "block";
      }
    });
  }
  componentWillLoad() {
    if (this.settingsItems.length) {
      this.setTab(this.activeTabLabel || this.settingsItems[0].label);
    }
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  watchActiveTabLabel(value) {
    this.setTab(value);
  }
  getTabItems() {
    return this.settingsItems.map(({ label }) => {
      return h("ix-tab-item", { class: {
        active: label === this.activeTabLabel
      }, onClick: () => this.setTab(label) }, label);
    });
  }
  render() {
    return h(Host, { class: {
      animate__animated: true,
      animate__fadeInLeft: this.show,
      animate__fadeOutLeft: !this.show
    } }, h("div", { class: "settings-header" }, h("h2", { class: "text-h2" }, this.label), h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), h("ix-tabs", null, this.getTabItems()), h("slot", null));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "activeTabLabel": ["watchActiveTabLabel"]
    };
  }
};
MenuAbout.style = menuSettingsCss;
const menuSettingsItemCss = ".sc-ix-menu-settings-item-h{display:block}";
const MenuSettingsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
MenuSettingsItem.style = menuSettingsItemCss;
export {
  Menu as ix_menu,
  MenuAbout$1 as ix_menu_about,
  MenuAboutItem as ix_menu_about_item,
  MenuAboutNews as ix_menu_about_news,
  MenuAvatar as ix_menu_avatar,
  MenuAvatarItem as ix_menu_avatar_item,
  MenuItem as ix_menu_item,
  MenuAbout as ix_menu_settings,
  MenuSettingsItem as ix_menu_settings_item
};
