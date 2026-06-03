import { a as registerInstance, g as getElement, h, H as Host } from "./global-DUJ9DtiD.js";
import { a as useContextProvider, A as ApplicationLayoutContext } from "./context-zqk3Dkv--CsY55SLG.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import { m as menuController } from "./menu-service-DTIYRV47-C3CDZAa1.js";
import { h as hasSlottedElements } from "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
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
    return h(Host, { key: "09f4f29fe394082cbc7ea660c9df2c585e09e481", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "5bb748ae6dbfc6fe61ee1528a13dfbd379c2a256", name: "application-header" }), h("div", { key: "c5a7d21233e230906264f031d02904f0269bb961", class: "application" }, h("slot", { key: "8534cd24c57e5a5cf7e343fcbabbc54ab7033d9f", name: "menu" }), h("aside", { key: "a826b32ed73d55eb3d26893a06c3c30c92efe3b5", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "21f89288802ce0ed6e6a70ededc671d2e19882f3", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "212acfd5d86d065c3cd31d20bf79bfeedd694411", class: "content-area" }, h("main", { key: "0b035f3a860f0d8001995979a9bfd7ee59cab75d", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "66f0d9ea84354f28a09b6e4af0a865e59882747a" })), h("footer", { key: "1c9753af56388c6b58b98bcf9483ecedd2884f24", class: "footer" }, h("slot", { key: "eeec6a688a53e9aea8e15867682308ca0012a453", name: "bottom" })))));
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
