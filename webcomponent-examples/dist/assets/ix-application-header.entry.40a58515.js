import { r as registerInstance, c as createEvent, a as readTask, h, F as Fragment, H as Host, g as getElement } from "./global.00f6d77e.js";
import { s as showAppSwitch } from "./index-76b9c8de.7f9dd1e6.js";
import { a as applicationLayoutService } from "./service-c7fc628b.ff41f9d5.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-82a1ccf8.27f3549a.js";
import { m as menuController } from "./menu-service-f974814b.d8879f58.js";
import { h as hasSlottedElements } from "./shadow-dom-cc0bc152.fe0cdd32.js";
import "./animation-4a73b1c3.59b7eda0.js";
import "./modal-54740f80.103c72e0.js";
import "./breakpoints-d5c2f627.f0d6212d.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const applicationHeaderCss = ":host{display:flex;align-items:flex-end;flex-wrap:nowrap;position:relative;width:100%;height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));min-height:calc(2.75rem + var(--ix-safe-area-inset-top, 0rem));padding-top:0;padding-right:calc(1rem + var(--ix-safe-area-inset-right, 0rem));padding-bottom:0.3rem;padding-left:calc(0.625rem + var(--ix-safe-area-inset-left, 0rem));color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .app-switch{margin-right:1rem}:host .name{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap;max-width:50%;margin-left:1.5rem;margin-right:2.5rem;margin-bottom:0.25rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-left:0.375rem}:host .content{display:flex;position:relative;flex-direction:row;margin-left:auto;margin-right:0px}:host .dropdown{overflow:visible}:host .dropdown-content{padding:1rem}:host .context-menu{display:none}:host .context-menu.context-menu-visible{display:block}@media only screen and (max-width: 48em){:host .logo{display:none}}:host ::slotted(ix-avatar){margin-left:1rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";
const IxApplicationHeaderStyle0 = applicationHeaderCss;
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuToggle = createEvent(this, "menuToggle", 7);
    this.name = void 0;
    this.showMenu = false;
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
  async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined("ix-siemens-logo");
    const logoElement = document.createElement("ix-siemens-logo");
    if (!this.isLogoSlotted()) {
      this.hostElement.shadowRoot.querySelector(".logo").appendChild(logoElement);
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
    const hasApplicationContextAvailable = !!this.applicationLayoutContext;
    const showMenuByApplicationFrame = this.breakpoint === "sm" && this.suppressResponsive === false && hasApplicationContextAvailable;
    const showApplicationSwitch = ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.appSwitchConfig) && this.breakpoint !== "sm" && this.suppressResponsive === false;
    return h(Host, { key: "d81892c63d0b963455f7b86741241528dd4e65a5", class: {
      [`breakpoint-${this.breakpoint}`]: true
    }, slot: "application-header" }, (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "db19b6cc240df8f3299e671d0ee8a56bdf7f6977", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "5a31ea7e0007c3ab3b78c96b649f917745bc7435", onClick: () => this.showAppSwitch(), icon: "apps", ghost: true, class: "app-switch" }), h("div", { key: "4b083dd5ce9023d17371364b541ef0f29ec6d76f", class: { logo: true } }, h("slot", { key: "7039706bbb7355302e069e22621b41cd756345d9", name: "logo" })), h("ix-typography", { key: "3f365f3947b52f3788f6d4ec4180c23ec12d2509", format: "body-lg", class: "name" }, this.name), h("div", { key: "20427a902bacbe4db73bbaf43fc8a5477d7a13a2", class: "content" }, this.breakpoint === "sm" ? h(Fragment, null, h("ix-icon-button", { class: {
      ["context-menu"]: true,
      ["context-menu-visible"]: this.hasSlottedElements
    }, "data-context-menu": true, icon: "more-menu", ghost: true }), h("ix-dropdown", { "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton() }, h("div", { class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, h("slot", { onSlotchange: () => this.updateIsSlottedContent() })))) : h("slot", { onSlotchange: () => this.updateIsSlottedContent() }), h("slot", { key: "baea46e8a2cec2e4fbdb99752bf6697cf314855e", name: "ix-application-header-avatar" })));
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
ApplicationHeader.style = IxApplicationHeaderStyle0;
export {
  ApplicationHeader as ix_application_header
};
