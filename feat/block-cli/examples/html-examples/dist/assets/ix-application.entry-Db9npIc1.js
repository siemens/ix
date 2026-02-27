import { r as registerInstance, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-BniHpAE1-BXrc-Gwu.js";
import { a as applicationLayoutService } from "./service-Da0kv8hS-ChZKlHDF.js";
import { m as menuController } from "./menu-service-BMvtckRa-Dk6abri9.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { t as themeSwitcher } from "./theme-switcher-DRqJGlG2-DVSIP9tc.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./breakpoints-D_Hmobxf-DBbixPq4.js";
const applicationCss = ":host{display:flex;position:relative;width:100vw;height:100vh;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host .content-area{display:flex;position:relative;flex-direction:column;flex-wrap:nowrap;height:calc(100% - var(--ix-safe-area-inset-bottom, 0px));width:100%;margin-left:var(--ix-application-menu-margin-left);min-width:0}:host main{display:block;position:relative;flex-grow:1;width:100%;padding-bottom:var(--ix-safe-area-inset-bottom);overflow:auto}:host footer{display:block;position:relative;width:100%}:host(.breakpoint-md){--ix-application-menu-margin-left:calc(\n    3.25rem + var(--ix-application-menu-safe-area-left, 0rem)\n  )}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+.content-area{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+.content-area{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:var(\n    --ix-application-menu-safe-area-left,\n    0rem\n  )}";
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
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig
    });
  }
  render() {
    return h(Host, { key: "d2ec05af1e558ae084ab6d3a8f6554358be148f1", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "25efc474f19ba9dcc76f4657eb58b3e51e50bcfa", name: "application-header" }), h("div", { key: "228976607eb37c7e234760998cb64c29b49f1ee0", class: "application" }, h("slot", { key: "5a2a36d378f7586ee43103f0d1f354dd66ded0a9", name: "menu" }), h("aside", { key: "d55ed72ff43a9235db3ececfc24acb3b5281673d", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "800589836de8afdaf0ef1cacbca154386763c8cf", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("div", { key: "c53dd5dd3bee42184fe065d0acdf18f33569922b", class: "content-area" }, h("main", { key: "c1ad1b56ded7759df22844048fbb7fb3f6ca2545", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "b705ea30e5148d41cfddc270204e57925a94009b" })), h("footer", { key: "fe58877f6a97c26ccafcb0ea10dd6919f32e7030", class: "footer" }, h("slot", { key: "3bbb5c5f41aed2d82d79dcc3a9a49937ff8041b8", name: "bottom" })))));
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
