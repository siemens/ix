import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-CuKOf_Vj.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { a as applicationLayoutService } from "./service-DKBvU1dw-D-YD3fLa.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { h as hasSlottedContent, a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./preload-helper-UZRgTS1n.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./breakpoints-D_Hmobxf-DBbixPq4.js";
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
    this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
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
    if (!this.contextProvider) {
      console.error("Context provider not available");
      return;
    }
    this.contextProvider.emit({
      hideHeader: false,
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
  }
  render() {
    return h(Host, { key: "c0fd568f00c720eda47d09d54b59611acb9e3cd0", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, !this.disableSkipLinks && h("ul", { key: "c6308fa0139e10e27a640a75fb86a6010f8fe404", class: "skip-links", role: "list" }, h("li", { key: "98ebdd7179f75af6ed9258fce71d4442eb0a1cc3" }, h("a", { key: "697b9d61d0857e2e9ef91405b3f9376cd45be178", class: "skip-link", href: this.skipLinkMainHref, onClick: (event) => this.onSkipLinkMainClick(event) }, this.i18nSkipToMain)), this.footerSlotted && h("li", { key: "8200dd120a0f627986a86696cd95c2962adf6e40" }, h("a", { key: "9e7198a9aba9253bc715102cab5129105948a38b", class: "skip-link", href: `#${DEFAULT_SKIP_LINK_FOOTER_TARGET_ID}`, onClick: (event) => this.onSkipLinkFooterClick(event) }, this.i18nSkipToFooter))), h("slot", { key: "17fbec79b88facde7b79bdd3abb88feb9b6e062d", name: "application-header" }), h("div", { key: "672c7f7a6b408351bcb4eed7d246a0139b81afad", class: "application" }, h("slot", { key: "c92d8fc5abbfc5e1c57a9742903500b84caaef95", name: "menu" }), h("aside", { key: "673e85e8f8a4470c00b6bf21ac4637ab176c14c6", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "2d68e540ff490059acbf1d5ef3e1bc5224941f66", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "a203d308d8180a05bda0b9a579d596cf454f09c9", class: "content-area" }, h("main", { key: "d534c0f3842b4bf08b0c74f4da1d842682cb7950", class: "content", id: DEFAULT_SKIP_LINK_MAIN_TARGET_ID, tabIndex: -1, ref: (element) => this.mainElement = element, onClick: () => this.onContentClick() }, h("slot", { key: "4a6e6062e40464544c474fdd0937e9120097f153" })), h("footer", { key: "ccea332b60fb628d830c948401eaa27adfd32cdd", class: "footer", hidden: !this.footerSlotted, id: DEFAULT_SKIP_LINK_FOOTER_TARGET_ID, role: "contentinfo", tabIndex: -1, ref: (element) => this.footerElement = element }, h("slot", { key: "22311e2ca9d446f41b52a9c91258c3170bccd352", name: "bottom", onSlotchange: () => this.updateFooterSlotted() })))));
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
