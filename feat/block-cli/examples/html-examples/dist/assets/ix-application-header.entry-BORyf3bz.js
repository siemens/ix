import { r as registerInstance, c as createEvent, a as readTask, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { e as iconMoreMenu, f as iconApps } from "./index-8HpPmDK_-DinFJk0z.js";
import { a as a11yBoolean } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { s as showAppSwitch } from "./index-75AAQH08-BEc5f8Hi.js";
import { a as applicationLayoutService } from "./service-Da0kv8hS-ChZKlHDF.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-BniHpAE1-BXrc-Gwu.js";
import { g as getCurrentBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { m as menuController } from "./menu-service-BMvtckRa-Dk6abri9.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import "./animation-C5MWUgDN-BXCJNYHu.js";
import "./modal-DCXtePY2-Cy6rmdf-.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
const applicationHeaderCss = ":host{display:flex;flex-wrap:nowrap;align-items:end;justify-content:space-between;position:relative;width:100%;min-height:3rem;padding-top:var(--ix-safe-area-inset-top, 0rem);padding-right:calc(0.625rem + var(--ix-safe-area-inset-right, 0rem));padding-left:calc(0.625rem + var(--ix-safe-area-inset-left, 0rem));color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .left-side,:host .right-side{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;align-items:center;min-width:0;min-height:3rem;height:100%}:host .left-side{flex:0 1 auto}:host .left-side .app-icon{display:block;position:relative;width:2rem;min-width:2rem;max-width:2rem;height:2rem;min-height:2rem;max-height:2rem}:host .left-side .app-icon.app-icon-outline{outline:1px solid var(--theme-app-header-app-icon--outline-color);border-radius:0.125rem}:host .left-side .app-icon img{position:relative;display:block;width:100%;height:100%;border-radius:0.125rem}:host .left-side .app-switch{margin:0 0.625rem}:host .left-side .app-switch.without-app-icon{margin-left:0px}:host .left-side .name{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;margin-left:0.75rem;margin-right:0.75rem;color:var(--theme-app-header--color);min-width:0;gap:0.75rem;overflow:hidden}:host .left-side .application-name,:host .left-side .application-name-suffix{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name{flex:0 1 auto;min-width:0;flex-shrink:0;max-width:100%}:host .left-side .application-name-suffix{flex:1 1 auto;margin-top:0.4rem;min-width:0;flex-shrink:1;color:var(--theme-app-header-name-suffix--color)}:host .left-side .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color);margin-right:1rem;margin-left:1rem;min-width:-moz-fit-content;min-width:fit-content}:host .left-side .logo.hide-logo{display:none}:host .right-side{flex:1 1 auto;overflow:hidden;justify-content:space-between}:host .right-side .content,:host .right-side .secondary{display:flex;position:relative;align-items:center;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;height:100%}:host .right-side .content{min-width:-moz-max-content;min-width:max-content}:host .right-side .secondary{overflow:hidden}:host .right-side .dropdown{overflow:visible}:host .right-side .dropdown-content>.slot-content-active{padding:0.5rem 1.5rem 0.5rem 1.5rem;border-top:none}:host .right-side .dropdown-content .slot-content-active~.slot-content-active{border-top:1px solid var(--theme-color-x-weak-bdr)}:host .right-side .context-menu{display:none}:host .right-side .context-menu.context-menu-visible{display:block;margin-left:0.5rem}:host .right-side ::slotted(ix-avatar){margin-left:0.5rem}:host .right-side .primary-navigation{align-self:end}:host .right-side.sm{justify-content:end}@media only screen and (max-width: 48em){:host .logo{margin-left:0.5rem;display:none !important}:host .content,:host .secondary,:host .app-icon{display:none}}:host(.hide-bottom-border){border-bottom:none}";
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuToggle = createEvent(this, "menuToggle", 7);
    this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
    this.appIconOutline = false;
    this.hideBottomBorder = false;
    this.showMenu = false;
    this.enableTopLayer = false;
    this.breakpoint = "lg";
    this.menuExpanded = false;
    this.suppressResponsive = false;
    this.hasSlottedLogo = false;
    this.hasOverflowContextMenu = false;
    this.hasSecondarySlotElements = false;
    this.hasDefaultSlotElements = false;
    this.hasOverflowSlotElements = false;
  }
  get contentBackground() {
    return this.hostElement.shadowRoot.querySelector(".dropdown-content");
  }
  componentWillLoad() {
    this.breakpoint = getCurrentBreakpoint();
    useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
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
    this.updateHasSlotAssignedElementsStates();
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
  checkLogoSlot() {
    const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
    const isSiemensLogoDefined = window.customElements.get("ix-siemens-logo") !== void 0;
    if (isSiemensLogoDefined) {
      return hasSlottedElements(slotElement);
    }
    let assignedElements = slotElement === null || slotElement === void 0 ? void 0 : slotElement.assignedElements({ flatten: true });
    assignedElements = assignedElements === null || assignedElements === void 0 ? void 0 : assignedElements.filter((element) => element.tagName !== "IX-SIEMENS-LOGO");
    return (assignedElements === null || assignedElements === void 0 ? void 0 : assignedElements.length) !== 0;
  }
  attachSiemensLogoIfLoaded() {
    if (this.companyLogo) {
      return;
    }
    if (!this.checkLogoSlot()) {
      const logoElement = document.createElement("ix-siemens-logo");
      logoElement.slot = "logo";
      this.hostElement.appendChild(logoElement);
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
  updateHasSlotAssignedElementsStates() {
    const defaultSlot = this.hostElement.shadowRoot.querySelector(".content slot:not([name])");
    const secondarySlot = this.hostElement.shadowRoot.querySelector('.content slot[name="secondary"]');
    const overflowSlot = this.hostElement.shadowRoot.querySelector('.content slot[name="overflow"]');
    this.hasDefaultSlotElements = hasSlottedElements(defaultSlot);
    this.hasSecondarySlotElements = hasSlottedElements(secondarySlot);
    this.hasOverflowSlotElements = hasSlottedElements(overflowSlot);
    this.hasOverflowContextMenu = this.hasDefaultSlotElements || this.hasSecondarySlotElements;
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
    const showCompanyLogoByProperty = this.breakpoint !== "sm" && !!this.companyLogo;
    return h(Host, { key: "f3dd107219a3faf79b9e925597910b7991f9009a", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header" }, h("div", { key: "2f38f1cd1d808396aa9b8c9d166f951968dd3793", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "77a2a5c31867061418c085ba872098d214a3b4a0", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "38aa3f0e88c67e0a83182226973eb9161064abb7", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "a9fb125e9ed4a1ea45131046098af37f85ead4f7", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "534f0d283baa12db44892d82800c5a76c61b3297", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "cf9f0ffd5f057e045772dc67d26a2b4fa56fddca", class: "logo" }, h("img", { key: "e249c9bb8f8138c5149351c89b38999b78509d0f", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "1d6a335981778fb7c4652c06db15edb5e5af323e", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "1651a3ce68aa86280103d68fb93b67ea2fd5eed5", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "59e7f311a9bdf9b091471f49950ac6aedb6cda76", class: "name" }, h("ix-typography", { key: "83366e61f3eb7d909e126161a37855bc85def41f", format: "body-lg", class: "application-name" }, this.name), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "2ef48a86c1e1c872c0a6eb7c5ecb56b79ad72010", format: "body-xs", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "b4bb99e159039793491e716008b31b1be9039b38", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "140d23abc73e20d76050670dc2090dd496af25c5", class: "secondary" }, h("slot", { key: "cac8bf8cd238b9860c2ef251172cc380115e1554", name: "secondary" })), h("div", { key: "cde5ff613bd60f3576549057b2dc695eba856d0b", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "7835e9cecc2ffafdcbb54797f2d3957fca97476d" }), h("ix-icon-button", { key: "a3d3814d3a9a778c8b83409a51c5953a6c44535e", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu || this.hasOverflowSlotElements
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!(this.hasOverflowContextMenu || this.hasOverflowSlotElements)) }), h("ix-dropdown", { key: "a14638c36f60bdd064b9858cdbde8aa8e37dadc8", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!(this.hasOverflowContextMenu || this.hasOverflowSlotElements)), enableTopLayer: this.enableTopLayer }, h("div", { key: "41f38d4d8a622a4c3405e9e8c2e79946980daed5", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "762062aade74a75da35cdeefcef01dce5946c471", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "714f1623f4588ce66c82c929b0e65e3f7a2e3d97", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "d60eb42e2b681ab2bc8fef9201e61de10750fdd3", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "1d92c8d0d3ea5befa0c706e782b792623e131ce7", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "a13a82525a6933c80090f73532f449da693f433c", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "d4c10216c65a72525578c321362db4f3f9164017", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "7c16a2d249116fe92f8c3e0a269f8c1fce010423", name: "ix-application-header-avatar" }))));
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
