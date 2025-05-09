import { r as registerInstance, h, H as Host, g as getElement } from "./global.e92797ea.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-CKM5pVsv.1bb1e898.js";
import { a as applicationLayoutService } from "./service-Ca8OHh45.7722d505.js";
import { m as menuController } from "./menu-service-Dl5Ra79J.c8dc5a6f.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC.6f08a0ce.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo.db6435f7.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./breakpoints-D6vSVaHq.92ad4801.js";
const applicationCss = ":host{display:flex;position:relative;width:100vw;height:100vh;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left)}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host(.breakpoint-md){--ix-application-menu-margin-left:calc(\n    3.25rem + var(--ix-application-menu-safe-area-left, 0rem)\n  )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(\n    --ix-application-menu-safe-area-left,\n    0rem\n  )}";
const Application = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.themeSystemAppearance = false;
    this.breakpoints = ["sm", "md", "lg"];
    this.breakpoint = "lg";
    this.applicationSidebarSlotted = false;
  }
  forceLayoutChange(newMode) {
    if (!newMode) {
      applicationLayoutService.enableBreakpointDetection();
      return;
    }
    applicationLayoutService.disableBreakpointDetection();
    applicationLayoutService.setBreakpoint(newMode);
  }
  onBreakpointsChange(breakpoints) {
    applicationLayoutService.setBreakpoints(breakpoints);
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot.querySelector(".application-sidebar slot");
  }
  onContentClick() {
    var _a;
    if (menuController.isPinned) {
      return;
    }
    (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggleMenu(false);
  }
  componentWillLoad() {
    applicationLayoutService.setBreakpoints(this.breakpoints);
    this.contextProvider = useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      host: "basic-navigation",
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
    this.changeTheme();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
  }
  changeTheme() {
    if (!this.theme) {
      if (this.themeSystemAppearance) {
        themeSwitcher.setVariant();
      }
      return;
    }
    if (themeSwitcher.hasVariantSuffix(this.theme)) {
      themeSwitcher.setTheme(`theme-${this.theme}`);
      return;
    }
    themeSwitcher.setTheme(`theme-${this.theme}-dark`, this.themeSystemAppearance);
  }
  onApplicationSidebarChange() {
    if (!this.contextProvider) {
      console.error("Context provider not available");
      return;
    }
    this.contextProvider.emit({
      hideHeader: false,
      host: "basic-navigation",
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
  }
  render() {
    return h(Host, { key: "12df5f0b5c589e0174dbf8459d92af4190a96c0f", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "a3d1468fbc1193ef21107a230d7306f75f35925b", name: "application-header" }), h("div", { key: "dc8ede839e213b5998a3ebd419ea2fded65da5eb", class: "application" }, h("slot", { key: "cfe19639784db5f834c1f19358221694d8a4ae67", name: "menu" }), h("aside", { key: "014df49acba12b350b853084e5a20296d1d905c6", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "522327d4f0e94b92d0437268e2a7126b153ebc92", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "72193d09002c9e34539c3f2f7134b25ec23ebdc3", class: "content-area" }, h("main", { key: "1aa61d4160d06dccda6934f4093148d75530e973", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "f893c9dd078ee90fdfc195a4a29677296c2e8856" })), h("footer", { key: "a8a3e42fc670b3e998e6eb6875e8b76878957b41", class: "footer" }, h("slot", { key: "cad5c975e5b9698197cdede76f0316264ca92dca", name: "bottom" })))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "breakpoints": ["onBreakpointsChange"],
      "theme": ["changeTheme"],
      "themeSystemAppearance": ["changeTheme"],
      "appSwitchConfig": ["onApplicationSidebarChange"],
      "applicationSidebarSlotted": ["onApplicationSidebarChange"]
    };
  }
};
Application.style = applicationCss;
export {
  Application as ix_application
};
