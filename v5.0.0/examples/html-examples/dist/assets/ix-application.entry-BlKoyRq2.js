import { r as registerInstance, g as getElement, h, H as Host } from "./global-C8IWpzMv.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { h as hasSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { t as themeSwitcher } from "./theme-switcher-CRVG13AN-OnrBiSI3.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./breakpoints-D_Hmobxf-DBbixPq4.js";
const applicationCss = () => `:host{display:flex;position:relative;width:100vw;height:100vh;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left);min-width:0}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host(.breakpoint-md){--ix-application-menu-margin-left:calc(     3.25rem + var(--ix-application-menu-safe-area-left, 0rem)   )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(     --ix-application-menu-safe-area-left,     0rem   )}`;
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
   */
  appSwitchConfig;
  breakpoint = "lg";
  applicationSidebarSlotted = false;
  contextProvider;
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot.querySelector(".application-sidebar slot");
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
    return h(Host, { key: "95d3d183afdacf7f8f6a94f1144e646704917716", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "1197ede4a0f29190631b5dbad1cd2d47e6ae7587", name: "application-header" }), h("div", { key: "2d3f179a3fbd8cdc5e92542b957674ba26e89d64", class: "application" }, h("slot", { key: "933296242a5e23c9c18839b4dd44c7470e640948", name: "menu" }), h("aside", { key: "5be88a6802f3445b6426d2050ffa6216e884d983", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "d36bae57827750152a77dc1b8b31fc166a1e742b", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "02e56b5339bb36a97cf147eb7c246f552aedf262", class: "content-area" }, h("main", { key: "b75d65989c4c45145cf6eb673692cf4944c3e522", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "2be410981842d164895fcabdb6044ffb0c775314" })), h("footer", { key: "3d001d6be295e2f6726791d2baf1604c53d1df25", class: "footer" }, h("slot", { key: "e475cc060f1130f1d92af97c5f5bc7b20e2a672d", name: "bottom" })))));
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
