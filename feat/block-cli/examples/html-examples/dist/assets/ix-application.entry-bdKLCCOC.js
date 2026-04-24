import { r as registerInstance, g as getElement, h, H as Host } from "./global-B1t25MFd.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import { m as menuController } from "./menu-service-DTIYRV47-C3CDZAa1.js";
import { h as hasSlottedElements } from "./shadow-dom-T30VMB2R-DtdN3xF2.js";
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
  forceLayoutChange(newMode) {
    if (!newMode) {
      applicationLayoutService.enableBreakpointDetection();
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
    applicationLayoutService.setBreakpoints(breakpoints);
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
  componentWillLoad() {
    applicationLayoutService.setBreakpoints(this.breakpoints);
    this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = mode;
    });
    this.breakpoint = applicationLayoutService.breakpoint;
    if (this.forceBreakpoint) {
      this.forceLayoutChange(this.forceBreakpoint);
    }
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
    return h(Host, { key: "b5c142a36409c388a8013350650adf384babc032", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "0f739231eab829d7bdc2d2ea78b24357142c7de9", name: "application-header" }), h("div", { key: "306fab1cae6f3a532c2e0b37333646c8c60e102f", class: "application" }, h("slot", { key: "01c86b46e6a1338bd8615515469e96ec6136e360", name: "menu" }), h("aside", { key: "9eb26f863429c369f4e99e3e28f7769ecc276fd9", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "fc81eaef00b6bf18280be8a65a5d68bbc0a73ec6", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "c21afd7f005c79d850b6948e266a4c9690f6e1bf", class: "content-area" }, h("main", { key: "da345baa24ba0ab8b581956e9bc90688c31718f0", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "f24620a8b681a0316e0146fbaca77c46c6d3938f" })), h("footer", { key: "8daa940fb2e397660ccc24e8897044216230b37c", class: "footer" }, h("slot", { key: "120978ba3f159e3aff46f2978d672f4345aefde8", name: "bottom" })))));
  }
  static get watchers() {
    return {
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
