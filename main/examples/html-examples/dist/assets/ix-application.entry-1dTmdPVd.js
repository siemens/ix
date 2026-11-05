import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-LFrZudC6-CMyhWjAC.js";
import { a as applicationLayoutService } from "./service-C3ifmVz8-BWlcCSeE.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { h as hasSlottedContent, a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./preload-helper-UZRgTS1n.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./breakpoints-CngdN1zi-CCrbHAVS.js";
const applicationCss = () => `@charset "UTF-8";:host{--ix-application-child-header--z-index:var(--theme-z-index-sticky);--ix-application-skip-link--background:var(--si-sys-color-background-1);--ix-application-skip-link--color:var(--si-sys-color-text-accent);--ix-application-skip-link--outline-color--focus:var(--si-sys-color-effects-focus);--ix-application-skip-link--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-application-skip-link--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-application-skip-link--padding:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-60);--ix-application--width:100vw;--ix-application--height:100vh;--ix-application-breakpoint-md--application-menu-margin-left:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-20) +       var(--ix-application-menu-safe-area-left, 0rem)   )}:host{display:flex;position:relative;width:var(--ix-application--width);height:var(--ix-application--height);flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .skip-links{margin:0;padding:0;list-style:none}:host .skip-link{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;position:absolute;inset-block-start:-100%;inset-inline-start:calc(var(--ix-safe-area-inset-left, 0rem) + var(--ix-application-skip-link--outline-width--focus) + var(--ix-application-skip-link--outline-offset--focus));z-index:calc(var(--theme-z-index-fixed) + 1);padding:var(--ix-application-skip-link--padding);background-color:var(--ix-application-skip-link--background);color:var(--ix-application-skip-link--color);white-space:nowrap}:host .skip-link:focus{inset-block-start:calc(var(--ix-safe-area-inset-top, 0rem) + var(--ix-application-skip-link--outline-width--focus) + var(--ix-application-skip-link--outline-offset--focus))}:host .skip-link:focus-visible{outline:var(--ix-application-skip-link--outline-width--focus) solid var(--ix-application-skip-link--outline-color--focus);outline-offset:var(--ix-application-skip-link--outline-offset--focus)}:host ix-application-header{z-index:calc(var(--ix-application-child-header--z-index) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left);min-width:0}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host footer[hidden]{display:none}:host(:dir(rtl)) .skip-link{inset-inline-start:calc(var(--ix-safe-area-inset-right, 0rem) + var(--ix-application-skip-link--outline-width--focus) + var(--ix-application-skip-link--outline-offset--focus))}:host(.breakpoint-md){--ix-application-menu-margin-left:var(     --ix-application-breakpoint-md--application-menu-margin-left   )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(     --ix-application-menu-safe-area-left,     0rem   )}`;
const DEFAULT_SKIP_LINK_MAIN_TARGET_ID = "ix-application-main-content";
const DEFAULT_SKIP_LINK_FOOTER_TARGET_ID = "ix-application-footer";
const Application = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Application theme
   */
  theme;
  /**
   * Color schema of the theme
   *
   * @since 5.0.0
   */
  colorSchema = "system";
  /**
   * Change the responsive layout of the menu structure
   */
  forceBreakpoint;
  onForceBreakpointChange(forceBreakpoint) {
    this.setBreakpoints(this.breakpoints);
    this.forceLayoutChange(forceBreakpoint);
    this.emitLayoutContext();
  }
  forceLayoutChange(newMode) {
    if (!newMode) {
      applicationLayoutService.enableBreakpointDetection();
      applicationLayoutService.debouncedOnResize();
      return;
    }
    applicationLayoutService.disableBreakpointDetection();
    applicationLayoutService.setBreakpoint(newMode);
  }
  /**
   * Supported layouts
   */
  breakpoints = ["sm", "md", "lg"];
  onBreakpointsChange(breakpoints) {
    this.setBreakpoints(breakpoints);
  }
  /**
   * Define application switch configuration
   *
   * Application `url`s are opened unchanged via `window.open()`. URL schemes such as
   * `javascript:` or `data:` are not rejected. Only configure trusted applications and do not
   * derive URLs from untrusted input.
   */
  appSwitchConfig;
  /**
   * Disable the built-in links for bypassing repeated application content.
   * Only disable them when an equivalent bypass mechanism is provided
   * elsewhere.
   *
   * @since 6.0.0
   */
  disableSkipLinks = false;
  /**
   * Localized text for the link that bypasses repeated application content and
   * focuses the main region.
   *
   * @since 6.0.0
   */
  i18nSkipToMain = "Skip to main content";
  /**
   * Localized text for the link that focuses the application footer.
   *
   * @since 6.0.0
   */
  i18nSkipToFooter = "Skip to footer";
  /**
   * Element, or ID of an element, to focus when the Main skip link is
   * activated. The element must be focusable, e.g. by setting `tabindex="-1"`.
   * Falls back to the internal main region when the element cannot be focused.
   *
   * @since 6.0.0
   */
  skipLinkMainTarget;
  breakpoint = "lg";
  applicationSidebarSlotted = false;
  footerSlotted = false;
  contextProvider;
  mainElement;
  footerElement;
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot.querySelector(".application-sidebar slot");
  }
  get footerSlot() {
    return this.hostElement.shadowRoot.querySelector('slot[name="bottom"]');
  }
  modeDisposable;
  onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }
  setBreakpoints(breakpoints) {
    if (this.forceBreakpoint) {
      applicationLayoutService.setBreakpoints([this.forceBreakpoint]);
    } else {
      applicationLayoutService.setBreakpoints(breakpoints);
    }
  }
  get skipLinkMainHref() {
    const target = this.skipLinkMainTarget;
    const targetId = typeof target === "string" && target ? target : DEFAULT_SKIP_LINK_MAIN_TARGET_ID;
    return `#${targetId}`;
  }
  resolveSkipLinkMainTarget() {
    const target = this.skipLinkMainTarget;
    if (typeof target !== "string") {
      return target;
    }
    const root = this.hostElement.getRootNode();
    return root.getElementById(target);
  }
  focusMainContent() {
    this.mainElement?.focus({ preventScroll: true });
    this.mainElement?.scrollTo({
      behavior: "instant",
      top: 0,
      left: 0
    });
  }
  onSkipLinkMainClick(event) {
    event.preventDefault();
    const target = this.resolveSkipLinkMainTarget();
    target?.focus();
    if (!target?.matches(":focus")) {
      this.focusMainContent();
    }
  }
  onSkipLinkFooterClick(event) {
    event.preventDefault();
    this.footerElement?.focus({ preventScroll: true });
  }
  updateFooterSlotted() {
    this.footerSlotted = hasSlottedContent(this.footerSlot);
  }
  componentWillLoad() {
    this.setBreakpoints(this.breakpoints);
    this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, this.createLayoutContext());
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = this.forceBreakpoint || mode;
    });
    this.breakpoint = this.forceBreakpoint || applicationLayoutService.breakpoint;
    this.forceLayoutChange(this.forceBreakpoint);
  }
  componentDidLoad() {
    this.updateFooterSlotted();
  }
  disconnectedCallback() {
    this.modeDisposable?.dispose();
  }
  changeTheme() {
    if (!this.theme) {
      return;
    }
    themeSwitcher.setTheme(this.theme);
  }
  changeColorSchema() {
    if (!this.colorSchema) {
      return;
    }
    themeSwitcher.setColorSchema(this.colorSchema);
  }
  onApplicationSidebarChange() {
    this.emitLayoutContext();
  }
  createLayoutContext() {
    return {
      hideHeader: false,
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig,
      forceBreakpoint: this.forceBreakpoint
    };
  }
  emitLayoutContext() {
    if (!this.contextProvider) {
      console.error("Context provider not available");
      return;
    }
    this.contextProvider.emit(this.createLayoutContext());
  }
  render() {
    return h(Host, { key: "433cf48c3216be99b1087ad8b19660802a214f6e", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, !this.disableSkipLinks && h("ul", { key: "4ad39eb9e7aee5cc3613515d717235cac7a9bff7", class: "skip-links", role: "list" }, h("li", { key: "87f88b9f55a726faafccafb6aaaba6aa8054d89b" }, h("a", { key: "db6e0e86c1eefbf6c74a2b2125951306b4e8ee1a", class: "skip-link", href: this.skipLinkMainHref, onClick: (event) => this.onSkipLinkMainClick(event) }, this.i18nSkipToMain)), this.footerSlotted && h("li", { key: "901d593830e235ef581f40ea0ed45e10e3c988da" }, h("a", { key: "a9420baded449541404f1f96779502ada2f1d65b", class: "skip-link", href: `#${DEFAULT_SKIP_LINK_FOOTER_TARGET_ID}`, onClick: (event) => this.onSkipLinkFooterClick(event) }, this.i18nSkipToFooter))), h("slot", { key: "ab944c0c30a5f8c1664c7ab16302f9db497f81d0", name: "application-header" }), h("div", { key: "30992643e7a6dc41808c5ed86e6e8b252e4bc07f", class: "application" }, h("slot", { key: "de3a2b501f532abb7c9c32b44efbd9d315dd9d40", name: "menu" }), h("aside", { key: "779c5f03d219da31d3c3c77cffc792e2a8103c3a", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "f7a8a7e434cf03c2ea38a496ed28459ac550e8d7", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "d952b32d821b4302d0082a86e06db676b65f6a04", class: "content-area" }, h("main", { key: "0f916a6ece4c5319a7c500e806c712c29e5c6343", class: "content", id: DEFAULT_SKIP_LINK_MAIN_TARGET_ID, tabIndex: -1, ref: (element) => this.mainElement = element, onClick: () => this.onContentClick() }, h("slot", { key: "6b8e3f539485c485e184e352e6d0ef626810af1f" })), h("footer", { key: "e746a83b300867c95e0189a6abb6344093527dc5", class: "footer", hidden: !this.footerSlotted, id: DEFAULT_SKIP_LINK_FOOTER_TARGET_ID, role: "contentinfo", tabIndex: -1, ref: (element) => this.footerElement = element }, h("slot", { key: "7611f77947704f30782ffec6221dc8d587a32d48", name: "bottom", onSlotchange: () => this.updateFooterSlotted() })))));
  }
  static get watchers() {
    return {
      "forceBreakpoint": [{
        "onForceBreakpointChange": 0
      }],
      "breakpoints": [{
        "onBreakpointsChange": 0
      }],
      "theme": [{
        "changeTheme": 0
      }],
      "colorSchema": [{
        "changeColorSchema": 0
      }],
      "appSwitchConfig": [{
        "onApplicationSidebarChange": 0
      }],
      "applicationSidebarSlotted": [{
        "onApplicationSidebarChange": 0
      }]
    };
  }
};
Application.style = applicationCss();
export {
  Application as ix_application
};
