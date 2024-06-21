import { r as registerInstance, b as readTask, h, F as Fragment, H as Host, g as getElement } from "./global.8b5b8f81.js";
import { s as showAppSwitch } from "./index-76b9c8de.7f9dd1e6.js";
import { a as applicationLayoutService } from "./service-02cc9011.c0252da5.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-c9078420.56584faa.js";
import { m as menuController } from "./menu-service-f974814b.d8879f58.js";
import { h as hasSlottedElements } from "./shadow-dom-60e9243d.05aee9aa.js";
import "./animation-4a73b1c3.59b7eda0.js";
import "./modal-54740f80.103c72e0.js";
import "./breakpoints-d5c2f627.f0d6212d.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;min-height:2.75rem;padding:0 1rem 0 0.625rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .app-switch{margin-right:1rem}:host .name{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap;max-width:50%;margin-left:1.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-left:0.375rem}:host .content{display:flex;position:relative;flex-direction:row;margin-left:auto;margin-right:0px}:host .dropdown{overflow:visible}:host .dropdown-content{padding:1rem}:host .context-menu{display:none}:host .context-menu.context-menu-visible{display:block}@media only screen and (max-width: 48em){:host .logo{display:none}}:host ::slotted(ix-avatar){margin-left:1rem}:host(.breakpoint-sm){padding-left:0.625rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";
const IxApplicationHeaderStyle0 = applicationHeaderCss;
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = void 0;
    this.breakpoint = "lg";
    this.menuExpanded = false;
    this.suppressResponsive = false;
    this.hasSlottedElements = false;
    this.applicationLayoutContext = void 0;
  }
  get contentBackground() {
    return this.hostElement.shadowRoot.querySelector(".dropdown-content");
  }
  componentWillLoad() {
    useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
      if ((ctx === null || ctx === void 0 ? void 0 : ctx.host) === "map-navigation") {
        this.suppressResponsive = true;
        this.breakpoint = "md";
        return;
      }
      this.breakpoint = applicationLayoutService.breakpoint;
      this.applicationLayoutContext = ctx;
      this.tryUpdateAppSwitch();
    }, true);
    this.menuDisposable = menuController.expandChange.on((show) => {
      this.menuExpanded = show;
    });
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      if (this.suppressResponsive) {
        this.breakpoint = "md";
        return;
      }
      this.breakpoint = mode;
    });
    this.updateIsSlottedContent();
  }
  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.menuDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
    (_b = this.modeDisposable) === null || _b === void 0 ? void 0 : _b.dispose();
  }
  isLogoSlotted() {
    const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
    const nodes = slotElement.assignedNodes({
      flatten: true
    });
    return nodes.length !== 0;
  }
  async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined("ix-siemens-logo");
    const logoElement = document.createElement("ix-siemens-logo");
    if (!this.isLogoSlotted()) {
      this.hostElement.shadowRoot.querySelector(".logo").appendChild(logoElement);
    }
  }
  async onMenuClick() {
    menuController.toggle();
  }
  resolveContextMenuButton() {
    return new Promise((resolve) => readTask(() => resolve(this.hostElement.shadowRoot.querySelector("[data-context-menu]"))));
  }
  tryUpdateAppSwitch() {
    var _a;
    if (!this.callbackUpdateAppSwitchModal) {
      return;
    }
    this.callbackUpdateAppSwitchModal((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig);
  }
  async showAppSwitch() {
    var _a;
    this.callbackUpdateAppSwitchModal = await showAppSwitch((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig);
  }
  updateIsSlottedContent() {
    const slotElement = this.hostElement.shadowRoot.querySelector(".content slot");
    this.hasSlottedElements = hasSlottedElements(slotElement);
  }
  onContentBgClick(e) {
    if (e.target === this.contentBackground) {
      e.preventDefault();
    }
  }
  render() {
    var _a;
    return h(Host, { key: "c01762e9d20ff8548902305b7d9be7f8a12894aa", class: { [`breakpoint-${this.breakpoint}`]: true }, slot: "application-header" }, this.breakpoint === "sm" && this.suppressResponsive === false && h("ix-menu-expand-icon", { onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) && this.breakpoint !== "sm" && this.suppressResponsive === false && h("ix-icon-button", { onClick: () => this.showAppSwitch(), icon: "apps", ghost: true, class: "app-switch" }), h("div", { key: "33b8633987e25b634baaf4ef1f65b926addc6a8f", class: "logo" }, h("slot", { key: "5c39691d0925e2a34fb8bb0c6f88e554f6919f65", name: "logo" })), h("div", { key: "a5b4df7e8a3e874eb44ff61cb564a3f561ae1478", class: "name" }, this.name), h("div", { key: "61bf1835be91495ea5e304a3cd95caa7a98cd0cd", class: "content" }, this.breakpoint === "sm" ? h(Fragment, null, h("ix-icon-button", { class: {
      ["context-menu"]: true,
      ["context-menu-visible"]: this.hasSlottedElements
    }, "data-context-menu": true, icon: "more-menu", ghost: true }), h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, h("div", { class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, h("slot", { onSlotchange: () => this.updateIsSlottedContent() })))) : h("slot", { onSlotchange: () => this.updateIsSlottedContent() }), h("slot", { key: "0598ccbf496428f299427f5e530e98cb2422d202", name: "ix-application-header-avatar" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
ApplicationHeader.style = IxApplicationHeaderStyle0;
export {
  ApplicationHeader as ix_application_header
};
