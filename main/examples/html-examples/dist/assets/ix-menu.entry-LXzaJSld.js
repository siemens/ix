import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Bs2gnYtf.js";
import { j as iconApps, O as iconCogwheel, P as iconLightDark, Q as iconAbout } from "./index-Bj5Kmzp6-B1fOSLOf.js";
import { a as animate, E as Easing } from "./animate-BQARm6pw-B-wfC2r4.js";
import { A as Animation } from "./animation-C2bTHF7D-HeOCyL6m.js";
import { s as showAppSwitch } from "./index-CMgMOuhq-S-ZXjK3_.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { a as applicationLayoutService } from "./service-DKBvU1dw-D-YD3fLa.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { c as convertToRemString } from "./rwd.util-DIEEaulE-B7dE3uhl.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./breakpoints-D_Hmobxf-DBbixPq4.js";
const menuCss = () => `@charset "UTF-8";:host{--ix-menu-tabs-shadow--border-color:var(--si-sys-color-border-4);--ix-menu-tabs-shadow--box-shadow:var(--si-sys-color-effects-shadow-2);--ix-menu-overlay--background:rgba(0, 0, 0, 0);--ix-menu-tabs--outline-color--focus:var(--si-sys-color-effects-focus);--ix-menu-navigation--outline-color--focus:var(--si-sys-color-effects-focus);--ix-menu--background:var(--si-sys-color-background-1);--ix-menu--box-shadow:var(--si-sys-color-effects-shadow-2)}:host{--ix-menu-overlay--blur-radius:1rem;--ix-menu-tabs-shadow-container--margin-bottom:var(--si-sys-sizing-spacing-y-50);--ix-menu--z-index:var(--theme-z-index-sticky);--ix-menu-tabs-shadow--transition-duration:var(--theme-default-time);--ix-menu-panel--transition-duration:var(--theme-default-time);--ix-menu-overlay--transition-duration:var(--theme-default-time);--ix-menu--expanded-width:var(--si-sys-sizing-size-160);--ix-menu--width:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-20) +       var(--ix-application-menu-safe-area-left, 0rem)   );--ix-menu--padding-block-end:calc(     var(--si-sys-sizing-spacing-y-60) + var(--ix-safe-area-inset-bottom, 0rem)   );--ix-menu-overlay--width:calc(     100vw - var(--si-sys-sizing-size-100) - var(--si-sys-sizing-spacing-x-20)   );--ix-menu-overlay--left:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-20)   );--ix-menu-avatar--max-height:var(--si-sys-sizing-size-100);--ix-menu-avatar--margin-bottom:var(--si-sys-sizing-spacing-y-90);--ix-menu-cui-imprint-product-name--margin-bottom:var(--si-sys-sizing-spacing-y-60);--ix-menu-cui-imprint-product-description--margin-bottom:var(--si-sys-sizing-spacing-y-90);--ix-menu-buttons--margin:var(--si-sys-sizing-spacing-y-50) 0 0 calc(var(--si-sys-sizing-spacing-x-40) +         var(--si-sys-sizing-spacing-x-10));--ix-menu-empty--margin-bottom:var(--si-sys-sizing-spacing-y-50);--ix-menu--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-menu-tabs--outline-offset:calc(     calc(var(--si-sys-sizing-focus-ring-offset) / 2) * -1   );--ix-menu-navigation--outline-offset:calc(     calc(var(--si-sys-sizing-focus-ring-offset) / 2) * -1   );--ix-menu-tabs-shadow--height:var(--si-sys-sizing-border-width-default)}:host{display:flex;flex-direction:row;position:absolute;height:100%;min-height:-moz-min-content;min-height:min-content;z-index:var(--ix-menu--z-index);width:auto;bottom:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tabs{height:100%;position:relative;overflow-y:auto;pointer-events:all;-ms-overflow-style:none;scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs:focus-visible{outline:var(--ix-menu--outline-width--focus) solid var(--ix-menu-tabs--outline-color--focus);outline-offset:var(--ix-menu-tabs--outline-offset)}:host .show-scrollbar{scrollbar-width:inherit}:host .show-scrollbar::-webkit-scrollbar{display:inherit}:host .tabs-shadow-container{overflow:hidden;display:block;position:relative;margin-bottom:var(--ix-menu-tabs-shadow-container--margin-bottom);flex:1 1 auto;min-height:0}:host .menu-navigation{display:flex;flex-direction:column;min-height:0}:host .menu-navigation.menu-navigation--fill{flex:1 1 auto}:host .menu-navigation:focus-visible{outline:var(--ix-menu--outline-width--focus) solid var(--ix-menu-navigation--outline-color--focus);outline-offset:var(--ix-menu-navigation--outline-offset)}:host .tabs--shadow{opacity:0;position:absolute;width:100%;height:var(--ix-menu-tabs-shadow--height);background-color:var(--ix-menu--background);box-sizing:border-box;box-shadow:var(--ix-menu-tabs-shadow--box-shadow);pointer-events:none;z-index:var(--ix-menu--z-index);transition:opacity var(--ix-menu-tabs-shadow--transition-duration)}:host .tabs--shadow-top{top:0}:host .tabs--shadow-bottom{transform:rotate(180deg)}:host .tabs--shadow--show{opacity:1}:host .menu{display:flex;flex-direction:column;position:relative;width:var(--ix-menu--width);height:100%;padding-block-end:var(--ix-menu--padding-block-end);overflow:hidden;padding-left:var(--ix-application-menu-safe-area-left, 0)}:host .menu.expanded{box-shadow:var(--ix-menu--box-shadow)}:host .menu{background-color:var(--ix-menu--background);transition:width var(--ix-menu-panel--transition-duration) ease-in-out}:host .menu-overlay{display:none;position:absolute;width:var(--ix-menu-overlay--width);height:100%;left:var(--ix-menu-overlay--left);z-index:-1;-webkit-backdrop-filter:blur(var(--ix-menu-overlay--blur-radius));backdrop-filter:blur(var(--ix-menu-overlay--blur-radius));background-color:var(--ix-menu-overlay--background);transition:left var(--ix-menu-overlay--transition-duration) ease-in-out}:host .menu-overlay.visible{display:block}:host .menu.expanded{width:var(--ix-menu--expanded-width)}:host .menu-overlay.expanded{width:calc(100vw - var(--ix-menu--expanded-width));left:var(--ix-menu--expanded-width)}:host .menu-overlay-container{display:contents}:host .menu-avatar{max-height:var(--ix-menu-avatar--max-height)}:host .avatar{margin-bottom:var(--ix-menu-avatar--margin-bottom)}:host #cui-imprint .cui-imprint-product-name{margin-bottom:var(--ix-menu-cui-imprint-product-name--margin-bottom)}:host #cui-imprint .cui-imprint-product-description{margin-bottom:var(--ix-menu-cui-imprint-product-description--margin-bottom)}:host #cui-imprint .cui-imprint-link-container{display:flex;align-items:center}:host .bottom-tab-divider{margin-top:auto}:host .menu-buttons{margin:var(--ix-menu-buttons--margin)}:host .menu-buttons:not(:empty){margin-bottom:var(--ix-menu-empty--margin-bottom)}:host(.breakpoint-sm) .menu:not(.expanded){width:0}:host(.breakpoint-sm) .menu-overlay{left:0;width:100vw}:host(.breakpoint-lg){position:relative}:host(.breakpoint-lg) .menu.expanded{box-shadow:none}:host ::slotted(a[href]){all:unset}`;
const Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expandChange = createEvent(this, "expandChange", 7);
    this.mapExpandChange = createEvent(this, "mapExpandChange", 7);
    this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
    this.openSettings = createEvent(this, "openSettings", 7);
    this.openAbout = createEvent(this, "openAbout", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Is settings tab visible
   */
  showSettings = false;
  /**
   * Is about tab visible
   */
  showAbout = false;
  /**
   * Show toggle between light and dark variant. Only if the provided theme have implemented both!
   */
  enableToggleTheme = false;
  /**
   * Should only be set if you use ix-menu standalone
   */
  applicationName;
  /**
   * Should only be set if you use ix-menu standalone
   */
  applicationDescription = "";
  /**
   *  Toggle the expand state of the menu
   */
  expand = false;
  expandChanged(newExpand, oldExpand) {
    if (newExpand === oldExpand) {
      return;
    }
    this.toggleMenu(newExpand);
  }
  /**
   *  If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'.
   */
  startExpanded = false;
  /**
   * Menu stays pinned to the left
   */
  pinned = false;
  pinnedChange(newPinned) {
    this.setPinned(this.pinned);
    if (newPinned) {
      applicationLayoutService.disableBreakpointDetection();
      applicationLayoutService.setBreakpoint("lg");
      return;
    }
    applicationLayoutService.enableBreakpointDetection();
  }
  /**
   * i18n aria-label for menu. Gets read out by screen readers when first focusing the menu
   *
   * @since 5.1.0
   */
  i18nAriaLabelMenu = "Application Navigation";
  /**
   * i18n description for menu keyboard navigation hint, read by screen readers when focusing the menu
   *
   * @since 5.1.0
   */
  i18nNavigationHint = "Use Up and Down arrow keys to navigate between menu items";
  /**
   *  i18n label for 'About & legal information' button
   */
  i18nLegal = "About & legal information";
  /**
   * i18n label for 'Settings' button
   */
  i18nSettings = "Settings";
  /**
   * i18n label for 'Toggle theme' button
   */
  i18nToggleTheme = "Toggle theme";
  /**
   * i18n label for 'Expand' button
   */
  i18nExpand = "Expand";
  /**
   * i18n label for 'Collapse' button
   */
  i18nCollapse = "Collapse";
  /**
   * Menu expanded
   */
  expandChange;
  /**
   * Map Sidebar expanded
   */
  mapExpandChange;
  /**
   * Event emitted when the app switch button is clicked
   *
   * @since 3.0.0
   */
  openAppSwitch;
  /**
   * Event emitted when the settings button is clicked
   * @since 3.0.0
   */
  openSettings;
  /**
   * Event emitted when the about button is clicked
   * @since 3.0.0
   */
  openAbout;
  showPinned = false;
  mapExpand = true;
  breakpoint = "lg";
  itemsScrollShadowTop = false;
  itemsScrollShadowBottom = false;
  hasBottomSlotItems = false;
  applicationLayoutContext;
  isDarkMode = false;
  isTransitionDisabled = false;
  lastFocusedMenuItem;
  themeNameDisposer;
  breakpointChangeDisposable;
  applicationLayoutContextSubscription;
  // FBC IAM workaround #488
  isVisible = (elm) => {
    return elm.style.display !== "none" && elm.parentElement?.parentElement?.style.display !== "none";
  };
  get popoverArea() {
    return this.hostElement.shadowRoot.querySelector("#popover-area");
  }
  get menu() {
    return this.hostElement.shadowRoot.querySelector(".menu");
  }
  get menuItemsContainer() {
    const menuItemsContainer = this.menu?.querySelector(".tabs");
    if (!menuItemsContainer) {
      throw new Error("Menu items container not found");
    }
    return menuItemsContainer;
  }
  get menuNavigationContainer() {
    const menu = this.menu;
    if (!menu) {
      throw new Error("Menu element not found");
    }
    const menuNavigationContainer = menu.querySelector(".menu-navigation");
    if (!menuNavigationContainer) {
      throw new Error("Menu navigation container not found");
    }
    return menuNavigationContainer;
  }
  get overlayContainer() {
    return this.hostElement.shadowRoot.querySelector(".menu-overlay");
  }
  get menuItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])')).filter((elm) => this.isVisible(elm));
  }
  get menuBottomItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)")).filter((elm) => this.isVisible(elm));
  }
  get homeTab() {
    return this.hostElement.querySelector("ix-menu-item.home-tab");
  }
  get moreItemsDropdown() {
    return this.hostElement.shadowRoot.querySelector(".internal-tab ix-dropdown");
  }
  get isMoreItemsDropdownEmpty() {
    return this.hostElement.shadowRoot.querySelectorAll(".internal-tab ix-dropdown .appended").length === 0;
  }
  get moreItemsDropdownItems() {
    return this.hostElement.shadowRoot.querySelectorAll(".internal-tab ix-dropdown ix-menu-item");
  }
  get activeMoreTabContainer() {
    return this.hostElement.shadowRoot.querySelector(".active-more-tab");
  }
  get activeMoreTab() {
    return this.hostElement.shadowRoot.querySelector(".active-more-tab ix-menu-item");
  }
  get aboutPopoverContainer() {
    return this.hostElement.querySelector(".about-news");
  }
  get aboutNewsPopover() {
    return document.querySelector("ix-menu-about-news") ?? this.hostElement.querySelector("ix-menu-about-news");
  }
  get aboutTab() {
    return this.hostElement.shadowRoot.querySelector("#aboutAndLegal");
  }
  get about() {
    return this.hostElement.querySelector("ix-menu-about");
  }
  get settings() {
    return this.hostElement.querySelector("ix-menu-settings");
  }
  get isSettingsEmpty() {
    return Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-menu-settings-item")).length === 0;
  }
  get hasUtilityMenuItems() {
    return !!this.settings || this.enableToggleTheme || !!this.about;
  }
  get shouldFillMenuNavigation() {
    return this.hasUtilityMenuItems || this.hasBottomSlotItems;
  }
  get tabsContainer() {
    return this.hostElement;
  }
  componentDidLoad() {
    requestAnimationFrame(() => {
      this.suppressAnchorWrapperTabStops();
      this.handleOverflowIndicator();
      const items = this.getAllFocusableItems();
      this.resetRovingTabIndex(items);
    });
    if (this.pinned) {
      this.pinnedChange(this.pinned);
    }
  }
  componentWillLoad() {
    this.updateBottomSlotState();
    this.consumeApplicationLayoutContext();
    this.onBreakpointChange(applicationLayoutService.breakpoint, true);
  }
  consumeApplicationLayoutContext() {
    this.applicationLayoutContextSubscription = useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
      this.applicationLayoutContext = ctx;
      if (ctx.hideHeader === true) {
        this.onBreakpointChange("md");
        return;
      }
      this.onBreakpointChange(applicationLayoutService.breakpoint);
    }, true);
  }
  componentDidRender() {
    if (!this.about && this.aboutNewsPopover) {
      this.aboutNewsPopover.show = false;
    }
    this.appendFragments();
  }
  connectedCallback() {
    menuController.register(this.hostElement);
    this.breakpointChangeDisposable?.dispose();
    this.breakpointChangeDisposable = applicationLayoutService.onChange.on((breakpoint) => this.onBreakpointChange(breakpoint));
    if (this.applicationLayoutContextSubscription) {
      this.consumeApplicationLayoutContext();
    }
    this.onBreakpointChange(applicationLayoutService.breakpoint);
    this.updateThemeState();
    this.themeNameDisposer?.dispose();
    this.themeNameDisposer = themeSwitcher.themeChanged.on(() => {
      this.updateThemeState();
    });
  }
  disconnectedCallback() {
    this.breakpointChangeDisposable?.dispose();
    this.breakpointChangeDisposable = void 0;
    this.themeNameDisposer?.dispose();
    this.themeNameDisposer = void 0;
    this.applicationLayoutContextSubscription?.unsubscribe();
    menuController.unregister(this.hostElement);
  }
  updateThemeState() {
    this.isDarkMode = themeSwitcher.getMode() === "dark";
  }
  setPinned(pinned) {
    this.showPinned = pinned;
    menuController.setIsPinned(pinned);
  }
  onBreakpointChange(mode, initial = false) {
    if (!this.applicationLayoutContext && mode === "sm") {
      return;
    }
    if (!this.applicationLayoutContext) {
      return;
    }
    if (this.applicationLayoutContext.hideHeader && mode === "sm") {
      return;
    }
    this.setPinned(mode === "lg");
    if (initial || mode !== this.breakpoint)
      this.toggleMenu(mode === "lg" && this.startExpanded);
    this.breakpoint = mode;
  }
  appendFragments() {
    this.appendAboutNewsPopover();
  }
  getAboutPopoverVerticalPosition() {
    const heightArrow = 12;
    const offsetArrow = 6;
    const rectAbout = this.aboutTab?.getBoundingClientRect() || {
      bottom: -window.innerHeight,
      height: 0
    };
    const offset = window.innerHeight - (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
    return convertToRemString(offset);
  }
  appendAboutNewsPopover() {
    if (!this.aboutNewsPopover || !this.about) {
      return;
    }
    this.aboutNewsPopover.style.bottom = this.getAboutPopoverVerticalPosition();
    if (!this.popoverArea?.contains(this.aboutNewsPopover)) {
      const showMore = () => {
        if (this.aboutNewsPopover?.activeAboutTabKey && this.about) {
          this.about.activeTabKey = this.aboutNewsPopover.activeAboutTabKey;
          this.toggleAbout(true);
        }
      };
      this.aboutNewsPopover.addEventListener("showMore", () => showMore());
      document.body.appendChild(this.aboutNewsPopover);
    }
  }
  /**
   * Toggle map sidebar expand
   * @param show
   */
  async toggleMapExpand(show) {
    if (show !== void 0) {
      this.mapExpand = show;
    } else {
      this.mapExpand = !this.mapExpand;
    }
  }
  /**
   * Toggle menu
   * @param show
   */
  async toggleMenu(show) {
    const oldExpand = this.expand;
    if (show !== void 0) {
      this.expand = show;
    } else {
      this.expand = !this.expand;
    }
    if (this.aboutNewsPopover) {
      this.aboutNewsPopover.expanded = this.expand;
    }
    const { defaultPrevented } = this.expandChange.emit(this.expand);
    if (defaultPrevented) {
      this.expand = oldExpand;
      if (this.aboutNewsPopover) {
        this.aboutNewsPopover.expanded = oldExpand;
      }
      return;
    }
    this.isTransitionDisabled = false;
    this.checkTransition();
    if (this.breakpoint == "sm" && this.expand) {
      setTimeout(() => {
        this.handleOverflowIndicator();
      }, 100);
    }
  }
  /**
   * Disable transition of overlay while menu animation is running.
   */
  checkTransition() {
    const container = this.overlayContainer;
    if (!container) {
      return;
    }
    if (this.isTransitionDisabled) {
      container.style.transitionProperty = "left";
    } else {
      container.style.transitionProperty = "all";
    }
  }
  isOverlayVisible() {
    return this.showAbout || this.showSettings;
  }
  /**
   * Toggle Settings tabs
   * @param show
   */
  async toggleSettings(show) {
    if (!this.settings) {
      return;
    }
    const { defaultPrevented } = this.openSettings.emit();
    if (defaultPrevented) {
      return;
    }
    if (!this.isOverlayVisible()) {
      this.animateOverlayFadeIn();
    }
    if (show) {
      this.resetOverlay();
      this.showSettings = show;
      this.settings.show = this.showSettings;
    } else {
      this.onOverlayClose();
    }
  }
  /**
   * Toggle About tabs
   * @param show
   */
  async toggleAbout(show) {
    if (!this.about) {
      return;
    }
    const { defaultPrevented } = this.openAbout.emit();
    if (defaultPrevented) {
      return;
    }
    if (!this.isOverlayVisible()) {
      this.animateOverlayFadeIn();
    }
    if (show) {
      this.resetOverlay();
      this.showAbout = show;
      this.about.show = this.showAbout;
    } else {
      this.onOverlayClose();
    }
  }
  resetOverlay() {
    this.showSettings = false;
    this.showAbout = false;
    if (this.settings) {
      this.settings.show = false;
    }
    if (this.about) {
      this.about.show = false;
    }
  }
  isMenuItemClicked(event) {
    if (event.target instanceof HTMLElement) {
      return event.target.tagName === "IX-MENU-ITEM";
    }
    return false;
  }
  handleOverflowIndicator() {
    const { clientHeight, scrollTop, scrollHeight } = this.menuItemsContainer;
    this.itemsScrollShadowTop = scrollTop > 0;
    this.itemsScrollShadowBottom = Math.round(scrollTop + clientHeight) < scrollHeight;
  }
  onOverlayClose(event) {
    const shouldRestoreFocus = this.shouldRestoreMenuFocus(event);
    this.animateOverlayFadeOut(() => {
      this.resetOverlay();
      if (shouldRestoreFocus) {
        this.focusMenuNavigationContainer();
      }
    });
  }
  shouldRestoreMenuFocus(event) {
    return !!event;
  }
  focusMenuNavigationContainer() {
    const menuNavigation = this.menuNavigationContainer;
    if (!menuNavigation) {
      return;
    }
    requestAnimationFrameNoNgZone(() => {
      menuNavigation.focus();
    });
  }
  animateOverlayFadeIn() {
    requestAnimationFrame(() => {
      const overlayContainer = this.overlayContainer;
      if (!overlayContainer) {
        return;
      }
      animate(overlayContainer, [
        {
          backdropFilter: "blur(0)",
          transform: "translateX(-4rem)",
          opacity: 0
        },
        {
          backdropFilter: "blur(1rem)",
          transform: "translateX(0)",
          opacity: 1
        }
      ], {
        duration: Animation.mediumTime,
        easing: Easing.easeOutQuad,
        onBegin: () => {
          if (this.showPinned) {
            return;
          }
          this.toggleMenu(false);
        }
      });
    });
  }
  animateOverlayFadeOut(onComplete) {
    requestAnimationFrame(() => {
      const overlayContainer = this.overlayContainer;
      if (!overlayContainer) {
        onComplete();
        return;
      }
      animate(overlayContainer, [
        {
          backdropFilter: "blur(1rem)",
          transform: "translateX(0)",
          opacity: 1
        },
        {
          backdropFilter: "blur(0)",
          transform: "translateX(-4rem)",
          opacity: 0
        }
      ], {
        duration: Animation.mediumTime,
        easing: Easing.easeOutQuad,
        onComplete: () => onComplete()
      });
    });
  }
  onMenuItemsClick(event) {
    if (this.isMenuItemClicked(event)) {
      if (!this.showPinned) {
        this.toggleMenu(false);
      }
      this.onOverlayClose();
    }
  }
  updateBottomSlotState() {
    this.hasBottomSlotItems = Array.from(this.hostElement.children).some((element) => element.getAttribute("slot") === "bottom");
  }
  isHiddenFromViewport() {
    return this.breakpoint === "sm" && this.expand === false;
  }
  updateRovingTabIndex(items, activeIndex) {
    this.updateMenuItemPositionMetadata(items);
    items.forEach((item, i) => {
      item.setTabIndex?.(i === activeIndex ? 0 : -1);
    });
  }
  resetRovingTabIndex(items = this.getAllFocusableItems()) {
    this.updateMenuItemPositionMetadata(items);
    items.forEach((item) => {
      item.setTabIndex?.(-1);
    });
  }
  // item positions and menu size has to be set manually because slotted items and utility controls are separated into two groups
  updateMenuItemPositionMetadata(items) {
    const allMenuItems = [
      ...Array.from(this.hostElement.querySelectorAll("ix-menu-item")),
      ...Array.from(this.hostElement.shadowRoot?.querySelectorAll(".menu-utility-controls > ix-menu-item") ?? [])
    ];
    allMenuItems.forEach((item) => {
      item.removeAttribute("aria-posinset");
      item.removeAttribute("aria-setsize");
    });
    const total = items.length;
    items.forEach((item, index) => {
      item.setAttribute("aria-posinset", String(index + 1));
      item.setAttribute("aria-setsize", String(total));
    });
  }
  handleMenuFocusIn(event) {
    const items = this.getAllFocusableItems();
    const path = event.composedPath();
    const activeIndex = items.findIndex((item) => path.includes(item));
    if (activeIndex !== -1) {
      this.lastFocusedMenuItem = items[activeIndex];
      this.updateRovingTabIndex(items, activeIndex);
    } else if (event.target instanceof HTMLElement) {
      this.resetRovingTabIndex(items);
    }
  }
  getAllFocusableItems() {
    const isNavigable = (el) => !el.hasAttribute("disabled") && !el.hasAttribute("hidden") && this.isVisible(el);
    const lightItems = Array.from(this.hostElement.querySelectorAll(":scope > ix-menu-item, :scope > ix-menu-category, :scope > a > ix-menu-item, :scope > a > ix-menu-category")).filter(isNavigable);
    const utilityItems = Array.from(this.hostElement.shadowRoot?.querySelectorAll(".menu-utility-controls > ix-menu-item") ?? []).filter(isNavigable);
    return [...lightItems, ...utilityItems];
  }
  suppressAnchorWrapperTabStops() {
    Array.from(this.hostElement.querySelectorAll(":scope > a")).filter((a) => a.querySelector("ix-menu-item, ix-menu-category")).forEach((a) => {
      if (a.getAttribute("tabindex") !== "-1") {
        a.setAttribute("tabindex", "-1");
      }
    });
  }
  isEventFromExpandedCategoryItems(event) {
    return event.composedPath().some((el) => el instanceof HTMLElement && el.getAttribute?.("role") === "menu");
  }
  handleMenuKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      return;
    }
    if (this.isEventFromExpandedCategoryItems(event)) {
      return;
    }
    const items = this.getAllFocusableItems();
    if (items.length === 0) {
      return;
    }
    const path = event.composedPath();
    const currentIndex = items.findIndex((item) => path.includes(item));
    const isMenuNavigationFocused = currentIndex === -1 && path.includes(this.menuNavigationContainer);
    if (!isMenuNavigationFocused && currentIndex === -1) {
      return;
    }
    event.preventDefault();
    if (isMenuNavigationFocused) {
      const lastFocusedMenuItem = this.lastFocusedMenuItem;
      let index = lastFocusedMenuItem ? items.indexOf(lastFocusedMenuItem) : -1;
      if (event.key === "Home") {
        index = 0;
      } else if (event.key === "End") {
        index = items.length - 1;
      } else if (index === -1) {
        index = event.key === "ArrowDown" ? 0 : items.length - 1;
      }
      this.updateRovingTabIndex(items, index);
      this.lastFocusedMenuItem = items[index];
      items[index].focus();
      return;
    }
    switch (event.key) {
      case "ArrowDown": {
        const next = (currentIndex + 1) % items.length;
        this.updateRovingTabIndex(items, next);
        this.lastFocusedMenuItem = items[next];
        items[next].focus();
        break;
      }
      case "ArrowUp": {
        const prev = (currentIndex - 1 + items.length) % items.length;
        this.updateRovingTabIndex(items, prev);
        this.lastFocusedMenuItem = items[prev];
        items[prev].focus();
        break;
      }
      case "Home":
        this.updateRovingTabIndex(items, 0);
        this.lastFocusedMenuItem = items[0];
        items[0].focus();
        break;
      case "End":
        this.updateRovingTabIndex(items, items.length - 1);
        this.lastFocusedMenuItem = items.at(-1);
        items.at(-1)?.focus();
        break;
    }
  }
  async showAppSwitch() {
    const { defaultPrevented } = this.openAppSwitch.emit();
    if (defaultPrevented) {
      return;
    }
    if (this.applicationLayoutContext?.appSwitchConfig) {
      showAppSwitch(this.applicationLayoutContext.appSwitchConfig);
    }
  }
  render() {
    let overlayLabel;
    if (this.showSettings) {
      overlayLabel = this.i18nSettings;
    } else if (this.showAbout) {
      overlayLabel = this.i18nLegal;
    }
    return h(Host, { key: "cb416e98d882093a6e3d9aba32ec0434b9917477", class: {
      expanded: this.expand,
      [`breakpoint-${this.breakpoint}`]: true
    }, slot: "menu" }, h("nav", { key: "e6c0c433f3b16c65f2f74f6dcac6c3bf30b9958d", "aria-label": this.applicationName, class: {
      menu: true,
      expanded: this.expand
    } }, h("div", { key: "7aed9b87e983ae03c92fd3dd83fe94726f693cdc", class: "menu-buttons" }, this.breakpoint !== "sm" && h("ix-menu-expand-icon", { key: "daf4212caa568546f71e3c0ad8dfae88a19a7886", breakpoint: this.breakpoint, expanded: this.expand, "i18n-expand": this.i18nExpand, "i18n-collapse": this.i18nCollapse, pinned: this.pinned, class: "menu-expand-icon", onClick: async () => this.toggleMenu(), "data-testid": "expand-collapse-menu" }), this.breakpoint === "sm" && this.applicationLayoutContext?.appSwitchConfig && h("ix-icon-button", { key: "bb050a627720dabea6fcb2d057735a371aee5adc", onClick: () => {
      this.showAppSwitch();
    }, icon: iconApps, variant: "subtle-tertiary" })), h("div", { key: "aa995e74825a930c0e188964911e62a92cf19cb6", role: "menubar", "aria-orientation": "vertical", "aria-label": this.i18nAriaLabelMenu, "aria-description": this.i18nNavigationHint, class: {
      "menu-navigation": true,
      "menu-navigation--fill": this.shouldFillMenuNavigation
    }, tabIndex: 0, onKeyDown: (e) => this.handleMenuKeyDown(e), onFocusin: (e) => this.handleMenuFocusIn(e), onFocusout: () => this.resetRovingTabIndex() }, h("div", { key: "085606e4c57dfdd113947fcc3e580570c937a299", id: "menu-tabs", style: {
      display: "contents"
    }, onClick: (e) => this.onMenuItemsClick(e) }, h("div", { key: "0849294dbe96b9da8100721e2df24cb9544bc834", class: "tabs-shadow-container" }, h("div", { key: "520ece8ed8f31dfc7534d8398f290ed9b0f48db4", class: {
      "tabs--shadow": true,
      "tabs--shadow-top": true,
      "tabs--shadow--show": this.itemsScrollShadowTop
    } }), h("div", { key: "0cdec805d9ea799832d529cf1a19390685189509", class: {
      tabs: true,
      "show-scrollbar": this.expand
    }, onScroll: () => this.handleOverflowIndicator() }, h("div", { key: "d30de07c9ed9290f38270220e6f07848d6ba3f49", class: "menu-avatar" }, h("slot", { key: "2ed7e56bde3b18cf999fb6d51c5d087deb8c8bfd", name: "ix-menu-avatar" })), h("slot", { key: "b51a0f0bafd4807fe0987905987632916627ab82", name: "home" }), this.breakpoint !== "sm" || !this.isHiddenFromViewport() ? h("slot", null) : null), h("div", { key: "c54339aa96c5bfc473dadc24391036cf8dcc5c60", class: {
      "tabs--shadow": true,
      "tabs--shadow-bottom": true,
      "tabs--shadow--show": this.itemsScrollShadowBottom
    } }))), h("div", { key: "8c91506e769c7b9808b91942e5aece8a25cb4cc1", onClick: (e) => this.onMenuItemsClick(e) }, h("slot", { key: "6f563da90166788ffd4788acd830b0247e525bf3", name: "bottom", onSlotchange: () => this.updateBottomSlotState() })), h("div", { key: "cceea370760393adf6392744717ff923bbda66af", class: "bottom-tab-divider" }), h("div", { key: "5a96bb9105f64033a3b9f9df195f26e21f786a0d", class: "menu-utility-controls" }, this.settings ? h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "settings", class: {
      "internal-tab": true,
      "bottom-tab": true,
      active: this.showSettings
    }, icon: iconCogwheel, onClick: async () => this.toggleSettings(!this.showSettings), label: this.i18nSettings, "aria-haspopup": "dialog", "aria-expanded": this.showSettings.toString(), "aria-controls": "menu-overlay" }) : null, this.enableToggleTheme ? h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "toggleTheme", onClick: () => themeSwitcher.toggleMode(), class: "internal-tab bottom-tab", icon: iconLightDark, label: this.i18nToggleTheme, role: "menuitemcheckbox", "aria-checked": this.isDarkMode.toString() }) : null, this.about ? h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "aboutAndLegal", class: {
      "internal-tab": true,
      "bottom-tab": true,
      active: this.showAbout
    }, icon: iconAbout, onClick: async () => this.toggleAbout(!this.showAbout), label: this.i18nLegal, "aria-haspopup": "dialog", "aria-expanded": this.showAbout.toString(), "aria-controls": "menu-overlay" }) : null)), h("div", { key: "7e0ff1e5aa63871b0d8f739355de93529aff1717", id: "popover-area" })), h("section", { key: "86d538981329df424f577490d95458de9d30c524", id: "menu-overlay", role: "dialog", "aria-label": overlayLabel, class: {
      "menu-overlay": true,
      visible: this.isOverlayVisible(),
      expanded: this.expand
    }, onTransitionEnd: () => {
      this.isTransitionDisabled = true;
      this.checkTransition();
    } }, h("div", { key: "784ed7ff9b6094598947525ef9bb030d581e90b8", class: "menu-overlay-container" }, this.showSettings ? h("slot", { name: "ix-menu-settings" }) : null), h("div", { key: "6642575a707331880cb0667cf2fc0278ec3909a2", class: "menu-overlay-container" }, this.showAbout ? h("slot", { name: "ix-menu-about" }) : null)));
  }
  static get watchers() {
    return {
      "expand": [{
        "expandChanged": 0
      }],
      "pinned": [{
        "pinnedChange": 0
      }]
    };
  }
};
Menu.style = menuCss();
export {
  Menu as ix_menu
};
