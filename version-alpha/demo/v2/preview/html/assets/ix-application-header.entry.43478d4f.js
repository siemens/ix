import { r as registerInstance, c as createEvent, a as readTask, h, F as Fragment, H as Host, g as getElement } from "./global.bff64ac3.js";
import { c as iconMoreMenu, i as iconApps } from "./index-CrTP-icT.451e0ae2.js";
import { s as showAppSwitch } from "./index-CpUAGkLr.026e3a87.js";
import { a as applicationLayoutService } from "./service-Ca8OHh45.7722d505.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-CKM5pVsv.1bb1e898.js";
import { m as menuController } from "./menu-service-Dl5Ra79J.c8dc5a6f.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC.6f08a0ce.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./breakpoints-D6vSVaHq.92ad4801.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
const applicationHeaderCss = ":host{display:flex;align-items:flex-end;flex-wrap:nowrap;position:relative;width:100%;height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));min-height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));padding-top:0;padding-right:calc(1rem + var(--ix-safe-area-inset-right, 0rem));padding-bottom:0.3rem;padding-left:calc(0.625rem + var(--ix-safe-area-inset-left, 0rem));color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .app-switch{margin-right:1rem}:host .name{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap;max-width:50%;margin-left:1.5rem;margin-right:2.5rem;margin-bottom:0.25rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-left:0.375rem}:host .content{display:flex;position:relative;flex-direction:row;margin-left:auto;margin-right:0px}:host .dropdown{overflow:visible}:host .dropdown-content{padding:1rem}:host .context-menu{display:none}:host .context-menu.context-menu-visible{display:block}@media only screen and (max-width: 48em){:host .logo{display:none}}:host ::slotted(ix-avatar){margin-left:1rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuToggle = createEvent(this, "menuToggle", 7);
    this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
    this.showMenu = false;
    this.breakpoint = "lg";
    this.menuExpanded = false;
    this.suppressResponsive = false;
    this.hasSlottedElements = false;
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
  watchApplicationLayoutContext() {
    if (this.applicationLayoutContext) {
      this.showMenu = false;
    }
  }
  watchSuppressResponsive() {
    this.breakpoint = "md";
  }
  isLogoSlotted() {
    const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
    const nodes = slotElement.assignedNodes({
      flatten: true
    });
    return nodes.length !== 0;
  }
  attachSiemensLogoIfLoaded() {
    var _a;
    const logoElement = document.createElement("ix-siemens-logo");
    if (!this.isLogoSlotted()) {
      (_a = this.hostElement.shadowRoot.querySelector(".logo")) === null || _a === void 0 ? void 0 : _a.appendChild(logoElement);
    }
  }
  async onMenuClick() {
    if (this.applicationLayoutContext) {
      menuController.toggle();
    } else {
      this.menuExpanded = !this.menuExpanded;
    }
    this.menuToggle.emit(this.menuExpanded);
  }
  resolveContextMenuButton() {
    return new Promise((resolve) => readTask(() => resolve(this.hostElement.shadowRoot.querySelector("[data-context-menu]"))));
  }
  tryUpdateAppSwitch() {
    var _a, _b;
    if (!this.callbackUpdateAppSwitchModal || !((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig)) {
      return;
    }
    this.callbackUpdateAppSwitchModal((_b = this.applicationLayoutContext) === null || _b === void 0 ? void 0 : _b.appSwitchConfig);
  }
  async showAppSwitch() {
    var _a, _b;
    const { defaultPrevented } = this.openAppSwitch.emit();
    if (defaultPrevented) {
      return;
    }
    if (!((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig)) {
      return;
    }
    this.callbackUpdateAppSwitchModal = await showAppSwitch((_b = this.applicationLayoutContext) === null || _b === void 0 ? void 0 : _b.appSwitchConfig);
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
    const hasApplicationContextAvailable = !!this.applicationLayoutContext;
    const showMenuByApplicationFrame = this.breakpoint === "sm" && this.suppressResponsive === false && hasApplicationContextAvailable;
    const showApplicationSwitch = ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) && this.breakpoint !== "sm" && this.suppressResponsive === false;
    return h(Host, { key: "fe720a3c6e78966c711e2cd9d213cb1550a534e0", class: {
      [`breakpoint-${this.breakpoint}`]: true
    }, slot: "application-header" }, (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "a5399f06220a5c96cc7466ddfb1f2a95736edc0d", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "1779c902e0a76eca78fd9222432b2320045e7044", onClick: () => this.showAppSwitch(), icon: iconApps, ghost: true, class: "app-switch" }), h("div", { key: "21e4ad40bd8baf97b23d53075db6f04d66fcf6bc", class: { logo: true } }, h("slot", { key: "1743adfec4b7789fed498b3786e34391555c5e4f", name: "logo" })), h("ix-typography", { key: "f0a8aa8b72907e205f90f6695bc747c8b9a391af", format: "body-lg", class: "name" }, this.name), h("div", { key: "951b9b3f6abdc2164fa500a92b5d726a71b668f7", class: "content" }, this.breakpoint === "sm" ? h(Fragment, null, h("ix-icon-button", { class: {
      ["context-menu"]: true,
      ["context-menu-visible"]: this.hasSlottedElements
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, ghost: true }), h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, h("div", { class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, h("slot", { onSlotchange: () => this.updateIsSlottedContent() })))) : h("slot", { onSlotchange: () => this.updateIsSlottedContent() }), h("slot", { key: "e6af4e7086bfb7d77e92e5f96148d03079c5fa82", name: "ix-application-header-avatar" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "applicationLayoutContext": ["watchApplicationLayoutContext"],
      "suppressResponsive": ["watchSuppressResponsive"]
    };
  }
};
ApplicationHeader.style = applicationHeaderCss;
export {
  ApplicationHeader as ix_application_header
};
