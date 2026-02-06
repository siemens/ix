import { r as registerInstance, c as createEvent, a as readTask, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
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
    return h(Host, { key: "f70c16368414080ba826e2009b1e0f3f65cb2ff1", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header" }, h("div", { key: "aa68f775dc1b58aafdf4b4d37700113fbc509e2d", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "ae9b4672c1348d21c9c48421e867634af213a5c7", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "2bf6e28d9867f08a6d954e132ece2c149e20f1b5", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "64ba854155f4ab55ff7aa2f2b15b2feb19145a4e", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "265abaec15030ee7dc41a1e0535f09e32b99ff01", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "34e1ee388c68ec1e5a4c5ab0a67ae07f66d3b2ef", class: "logo" }, h("img", { key: "86bb6a77c06e0f30ce41de66a4fe813bc236b536", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "3391b44a0cdaaa1b8b60e29fe71c9f9a04473919", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "e0e554af7fe4746a6b12ada015f0f129b96bdd76", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "cf3bca529813307e538a13ddc454d01cce5a8689", class: "name" }, h("ix-typography", { key: "9e4d9c3b6a3f45e6ceba918bc17fd4ff4a5453c3", format: "body-lg", class: "application-name" }, this.name), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "9f7780499e2fb19e622e16a4f7e46084e5713f68", format: "body-xs", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "3a4dee26b48e356c2652517dd88887d936f926d5", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "fd961eea6ec62a745dc2b6c9842a7dcd777c9218", class: "secondary" }, h("slot", { key: "c214a8d62f28268acb56f1ecb88115d82f14cf0a", name: "secondary" })), h("div", { key: "48bb5fd5dbb93f25c933436ce5033fbb75db6962", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "868289b10946d895af657afb22d047a2864a9e8a" }), h("ix-icon-button", { key: "6b83cf6c6f04a1435c21a6f1a61a54f82531db48", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu || this.hasOverflowSlotElements
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!(this.hasOverflowContextMenu || this.hasOverflowSlotElements)) }), h("ix-dropdown", { key: "e0c44a160fccfc5d02672b09abff3ea209df4056", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!(this.hasOverflowContextMenu || this.hasOverflowSlotElements)), enableTopLayer: this.enableTopLayer }, h("div", { key: "d17c4e3695fdcc517272552b4420175dfbd2f2c8", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "6e96017787c861308cd4dbcaca0312dd0601746b", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "d078fd257e64da944799047951c8b9ab2d762e0d", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "64d3c501c11859ed9c27d3a8f64294a080925ca4", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "aa759b7edbfa50848887dc23e649ffe85fd296fa", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "caf2086cb213c9650e52df3433eac548a7a5510e", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "e4bf46ff49a8416e405513115db147994a2c6df6", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "17038a34906a10b5f0014a3f9f0e4bf8362f5695", name: "ix-application-header-avatar" }))));
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
