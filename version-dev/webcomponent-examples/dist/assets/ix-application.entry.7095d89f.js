import { r as registerInstance, h, H as Host, g as getElement } from "./index.18e27e15.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-c9078420.56584faa.js";
import { a as applicationLayoutService, m as menuController } from "./menu-service-9d8a1c99.c7215f41.js";
import { h as hasSlottedElements } from "./shadow-dom-60e9243d.05aee9aa.js";
import { t as themeSwitcher } from "./theme-switcher-b10fb4da.be4a72f4.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./breakpoints-d5c2f627.f0d6212d.js";
const applicationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .application{display:flex;position:relative;flex-direction:row;height:100%;width:100%;overflow:hidden}:host main{display:block;position:relative;height:100%;width:100%;overflow:hidden}:host(.breakpoint-md){--ix-application-menu-margin-left:3.25rem}:host(.breakpoint-md) aside.slotted{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-md) aside.slotted+main{margin-left:0}:host(.breakpoint-md) aside:not(.slotted)+main{margin-left:var(--ix-application-menu-margin-left)}:host(.breakpoint-lg){--ix-application-menu-margin-left:0}:host(.breakpoint-sm){--ix-application-menu-margin-left:0}";
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
    return h(Host, { key: "789995e737c862ab97b550de38a5fa4a605cb4a6", "data-role": "", class: {
      [`breakpoint-${this.breakpoint}`]: true
    } }, h("slot", { key: "addeacdfa12c56dc3ce47bbd513215f334e2a42a", name: "application-header" }), h("div", { key: "063b8e6164d1ec294bfd794c5bd4cadb82108da0", class: "application" }, h("slot", { key: "c4a2023ad6ea1a8fa5d581e3fbcfc5fbf2e76859", name: "menu" }), h("aside", { key: "4e1a879009118e6034febc5ac78f8f4e77dde52b", class: {
      "application-sidebar": true,
      slotted: this.applicationSidebarSlotted
    }, onClick: () => this.onContentClick() }, h("slot", { key: "490b9dbb42e8db573cc248f79526e09351e5b799", name: "application-sidebar", onSlotchange: () => this.applicationSidebarSlotted = hasSlottedElements(this.applicationSidebarSlot) })), h("main", { key: "0316d6d84d93388e344cfd7575b4153797cf5537", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "965b62723a698d07ee968982fe86a9e46e17e1b0" }))));
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
