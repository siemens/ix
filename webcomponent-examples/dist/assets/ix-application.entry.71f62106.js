import { r as registerInstance, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-82a1ccf8.27f3549a.js";
import { a as applicationLayoutService } from "./service-c7fc628b.ff41f9d5.js";
import { m as menuController } from "./menu-service-f974814b.d8879f58.js";
import { h as hasSlottedElements } from "./shadow-dom-cc0bc152.fe0cdd32.js";
import { t as themeSwitcher } from "./theme-switcher-b10fb4da.be4a72f4.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./breakpoints-d5c2f627.f0d6212d.js";
const applicationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left)}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host(.breakpoint-md){--ix-application-menu-margin-left:calc(\n    3.25rem + var(--ix-application-menu-safe-area-left, 0rem)\n  )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(\n    --ix-application-menu-safe-area-left,\n    0rem\n  )}";
const IxApplicationStyle0 = applicationCss;
const Application = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.theme = void 0;
    this.themeSystemAppearance = false;
    this.forceBreakpoint = void 0;
    this.breakpoints = ["sm", "md", "lg"];
    this.appSwitchConfig = void 0;
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
    this.contextProvider.emit({
      hideHeader: false,
      host: "basic-navigation",
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
  }
  render() {
    return h(Host, { key: "4e8314dec7968a3b9b2e00a7852dc53c924d0c53", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "2f4a52a13679af639648164eff165d5dd37ec951", name: "application-header" }), h("div", { key: "b316ff04f23e4606d54ddcc5531ed884b988e360", class: "application" }, h("slot", { key: "40f4800917fa9f24cdc50c72543e2c7181878775", name: "menu" }), h("aside", { key: "62e0120b64ad942e7dd991b6fe9912b60e36e04f", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "211f35df78de174484e914fa646227ba290fb9ae", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "5913187261ced8e7ff12ee3d352d33b0c5e9f49b", class: "content-area" }, h("main", { key: "ae580e752d753b0dbbdc4743f538d0a0bf8320eb", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "7954efb9b316bfd53191569e1b5bb32b8fafae2e" })), h("footer", { key: "3c41b12023cfb59373efe0fa88db93236f6f0f01", class: "footer" }, h("slot", { key: "9307b5f999ffcd96b7cd6f7b217f10b94c1a901f", name: "bottom" })))));
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
Application.style = IxApplicationStyle0;
export {
  Application as ix_application
};
