import { r as registerInstance, h, H as Host, g as getElement } from "./index.918151cc.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-c9078420.56584faa.js";
import { a as applicationLayoutService } from "./service-02cc9011.c0252da5.js";
import { m as menuController } from "./menu-service-f974814b.d8879f58.js";
import "./typed-event-ad6484c5.eb731a3b.js";
import "./breakpoints-d5c2f627.f0d6212d.js";
const basicNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .content{display:flex;height:100%;width:100%;position:relative;margin-left:3.25rem;overflow:auto}:host .navigation-content{display:flex;position:relative;flex-direction:row;height:calc(100% - 2.75rem);width:100%}:host(.hide-header) .navigation-content,:host(.hide-header) .content{height:100%}:host(.breakpoint-lg) .content{margin-left:0rem}:host(.breakpoint-sm) .content{margin-left:0px;width:100%}";
const IxBasicNavigationStyle0 = basicNavigationCss;
const BasicNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.applicationName = void 0;
    this.hideHeader = false;
    this.forceBreakpoint = void 0;
    this.breakpoints = ["sm", "md", "lg"];
    this.breakpoint = "lg";
  }
  onHideHeaderChange() {
    var _a;
    (_a = this.contextProvider) === null || _a === void 0 ? void 0 : _a.emit({
      hideHeader: this.hideHeader,
      host: "basic-navigation"
    });
    this.breakpoint = applicationLayoutService.breakpoint;
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
      hideHeader: this.hideHeader,
      host: "basic-navigation"
    });
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = mode;
    });
    this.breakpoint = applicationLayoutService.breakpoint;
    if (this.forceBreakpoint) {
      this.forceLayoutChange(this.forceBreakpoint);
    }
  }
  componentDidRender() {
    if (this.menu) {
      this.menu.applicationName = this.applicationName;
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
  }
  render() {
    return h(Host, { key: "2cf2956b483d753bb1966c9f4546c261add88f2f", "data-role": "", class: {
      "hide-header": this.hideHeader,
      [`breakpoint-${this.breakpoint}`]: true
    } }, !this.hideHeader ? h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo", slot: "logo" })) : null, h("div", { key: "779599a5b282004c8facd68d15ba5eea32390632", class: "navigation-content" }, h("slot", { key: "ec656284ec6266b8d620c26723d002839614a016", name: "menu" }), h("div", { key: "f3bc4ea5a2afc2e67a0abff808659043468baf7b", class: "content", onClick: () => this.onContentClick() }, h("slot", { key: "a690de1ab1bfc9bacc6828b405772a25280a4be0" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "hideHeader": ["onHideHeaderChange"],
      "breakpoints": ["onBreakpointsChange"]
    };
  }
};
BasicNavigation.style = IxBasicNavigationStyle0;
export {
  BasicNavigation as ix_basic_navigation
};
