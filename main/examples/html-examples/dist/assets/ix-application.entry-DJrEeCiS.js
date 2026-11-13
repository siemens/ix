import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-DGToXfDo.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-LFrZudC6-CMyhWjAC.js";
import { a as applicationLayoutService } from "./service-C3ifmVz8-BWlcCSeE.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { h as hasSlottedContent, a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./preload-helper-UZRgTS1n.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./breakpoints-CngdN1zi-CCrbHAVS.js";
const applicationCss = () => `@charset "UTF-8";:host{--ix-application-child-header--z-index:var(--theme-z-index-sticky);--ix-application-skip-link--background:var(--si-sys-color-background-1);--ix-application-skip-link--color:var(--si-sys-color-text-accent);--ix-application-skip-link--outline-color--focus:var(--si-sys-color-effects-focus);--ix-application-skip-link--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-application-skip-link--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-application-skip-link--padding:var(--si-sys-sizing-spacing-y-40)     var(--si-sys-sizing-spacing-x-60);--ix-application--width:100vw;--ix-application--height:100vh;--ix-application-breakpoint-md--application-menu-margin-left:calc(     var(--si-sys-sizing-size-100) +       var(--ix-application-menu-safe-area-left, 0rem)   )}:host{display:flex;position:relative;width:var(--ix-application--width);height:var(--ix-application--height);flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .skip-links{margin:0;padding:0;list-style:none}:host .skip-link{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;position:absolute;inset-block-start:-100%;inset-inline-start:calc(var(--ix-safe-area-inset-left, 0rem) + var(--ix-application-skip-link--outline-width--focus) + var(--ix-application-skip-link--outline-offset--focus));z-index:calc(var(--theme-z-index-fixed) + 1);padding:var(--ix-application-skip-link--padding);background-color:var(--ix-application-skip-link--background);color:var(--ix-application-skip-link--color);white-space:nowrap}:host .skip-link:focus{inset-block-start:calc(var(--ix-safe-area-inset-top, 0rem) + var(--ix-application-skip-link--outline-width--focus) + var(--ix-application-skip-link--outline-offset--focus))}:host .skip-link:focus-visible{outline:var(--ix-application-skip-link--outline-width--focus) solid var(--ix-application-skip-link--outline-color--focus);outline-offset:var(--ix-application-skip-link--outline-offset--focus)}:host ix-application-header{z-index:calc(var(--ix-application-child-header--z-index) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left);min-width:0}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host footer[hidden]{display:none}:host(:dir(rtl)) .skip-link{inset-inline-start:calc(var(--ix-safe-area-inset-right, 0rem) + var(--ix-application-skip-link--outline-width--focus) + var(--ix-application-skip-link--outline-offset--focus))}:host(.breakpoint-md){--ix-application-menu-margin-left:var(     --ix-application-breakpoint-md--application-menu-margin-left   )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(     --ix-application-menu-safe-area-left,     0rem   )}`;
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
    return h(Host, { key: "0214b443ce24a4a612bebac6c553ea27805abe65", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, !this.disableSkipLinks && h("ul", { key: "02e114ea7ab2d76b0b081eeb8559702168c2cac4", class: "skip-links", role: "list" }, h("li", { key: "e82a40ffc2248b8d7794cee3d13e62ba46f78c38" }, h("a", { key: "aef61c27d2a46172153a30ca95e220ebb820b8c3", class: "skip-link", href: this.skipLinkMainHref, onClick: (event) => this.onSkipLinkMainClick(event) }, this.i18nSkipToMain)), this.footerSlotted && h("li", { key: "da5e4e636e3990fd3f45c4a881844201b96a31cf" }, h("a", { key: "405f4b98d04befee3aee0234682142c8d4ad5097", class: "skip-link", href: `#${DEFAULT_SKIP_LINK_FOOTER_TARGET_ID}`, onClick: (event) => this.onSkipLinkFooterClick(event) }, this.i18nSkipToFooter))), h("slot", { key: "698e57a572f6f77c782a74c3e30901faf0ba8113", name: "application-header" }), h("div", { key: "5a4f029192a8e7541ff8694476e5f4a3d804b8fe", class: "application" }, h("slot", { key: "b0f817077025c2265fdb20b0fbe388d955676696", name: "menu" }), h("aside", { key: "faa0432b0b39e28f99ece118b357e27ddc79d692", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "266608ddedb2865d9950d4998434a61582c5d9d7", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "7814f4c123632f9fe034d08698b1c47bf4b3a7b5", class: "content-area" }, h("main", { key: "e4960d8609dee63249e8d5e40702c0fdd4a7d080", class: "content", id: DEFAULT_SKIP_LINK_MAIN_TARGET_ID, tabIndex: -1, ref: (element) => this.mainElement = element, onClick: () => this.onContentClick() }, h("slot", { key: "fb61d6e79b5ea436677b4112bd5c04c8391e5016" })), h("footer", { key: "8b9d64bcfb58ca41001285fd4be5d428327c419c", class: "footer", hidden: !this.footerSlotted, id: DEFAULT_SKIP_LINK_FOOTER_TARGET_ID, role: "contentinfo", tabIndex: -1, ref: (element) => this.footerElement = element }, h("slot", { key: "da3021258a9c352ba6663663627da7c9cf89ccd7", name: "bottom", onSlotchange: () => this.updateFooterSlotted() })))));
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
