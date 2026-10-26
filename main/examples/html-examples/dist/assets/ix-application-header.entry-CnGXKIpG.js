import { r as registerInstance, c as createEvent, g as getElement, a as readTask, h, H as Host } from "./global-CqiPKlnE.js";
import { e as iconMoreMenu, f as iconApps } from "./index-DwLtFbui-Caa0eG-T.js";
import { a as a11yBoolean } from "./a11y-ANrt3bGr-C77I4wL-.js";
import { s as showAppSwitch } from "./index-nCVTBc9Y-D1jH4M5R.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { g as getCurrentBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const applicationHeaderCss = () => `@charset "UTF-8";:host{--ix-application-header-dropdown-item--border-color:var(--si-sys-color-border-4);--ix-application-header--background:var(--si-sys-color-background-1);--ix-application-header--border-color:var(--si-sys-color-border-4);--ix-application-header--color:var(--si-sys-color-text-primary);--ix-application-header-app-icon--outline-color:var(--si-sys-color-border-2);--ix-application-header-logo--color:var(--si-sys-color-effects-logo);--ix-application-header-name-suffix--color:var(--si-sys-color-text-secondary)}:host{--ix-application-header--z-index:var(--theme-z-index-fixed);--ix-application-header--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header-dropdown-item--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header--min-height:var(--si-sys-sizing-size-100);--ix-application-header--padding-right:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) +       var(--ix-safe-area-inset-right, 0rem)   );--ix-application-header--padding-left:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) +       var(--ix-safe-area-inset-left, 0rem)   );--ix-application-header-right-side--min-height:var(--si-sys-sizing-size-100);--ix-application-header-app-icon--icon-size:var(--si-sys-sizing-size-80);--ix-application-header-app-icon--outline-width:var(--si-sys-sizing-border-width-default);--ix-application-header-app-icon--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-application-header-app-switch--margin:0     calc(       var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10)     );--ix-application-header-name--margin-left:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--margin-right:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--gap:var(--si-sys-sizing-spacing-x-50);--ix-application-header-logo--height:var(--si-sys-sizing-size-80);--ix-application-header-logo--margin-right:var(--si-sys-sizing-spacing-x-60);--ix-application-header-logo--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-application-header-slot-content-active--padding:var(--si-sys-sizing-spacing-y-40)     var(--si-sys-sizing-spacing-x-80);--ix-application-header-context-menu-visible--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-right-side--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-logo--margin-left--mobile:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;flex-wrap:nowrap;align-items:end;justify-content:space-between;position:relative;width:100%;min-height:var(--ix-application-header--min-height);padding-top:var(--ix-safe-area-inset-top, 0rem);padding-right:var(--ix-application-header--padding-right);padding-left:var(--ix-application-header--padding-left);color:var(--ix-application-header--color);background-color:var(--ix-application-header--background);border-bottom:var(--ix-application-header--border-width) solid var(--ix-application-header--border-color);z-index:var(--ix-application-header--z-index)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .left-side,:host .right-side{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;align-items:center;min-width:0;min-height:var(--ix-application-header-right-side--min-height);height:100%}:host .left-side{flex:0 1 auto}:host .left-side .app-icon{display:block;position:relative;width:var(--ix-application-header-app-icon--icon-size);min-width:var(--ix-application-header-app-icon--icon-size);max-width:var(--ix-application-header-app-icon--icon-size);height:var(--ix-application-header-app-icon--icon-size);min-height:var(--ix-application-header-app-icon--icon-size);max-height:var(--ix-application-header-app-icon--icon-size)}:host .left-side .app-icon.app-icon-outline{outline:var(--ix-application-header-app-icon--outline-width) solid var(--ix-application-header-app-icon--outline-color);border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-icon img{position:relative;display:block;width:100%;height:100%;border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-switch{margin:var(--ix-application-header-app-switch--margin)}:host .left-side .app-switch.without-app-icon{margin-left:0px}:host .left-side .name{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;align-items:baseline;margin-left:var(--ix-application-header-name--margin-left);margin-right:var(--ix-application-header-name--margin-right);color:var(--ix-application-header--color);min-width:0;gap:var(--ix-application-header-name--gap);overflow:hidden}:host .left-side .application-name,:host .left-side .application-name-suffix{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name{margin:0;padding:0;flex:0 1 auto;min-width:0;flex-shrink:0;max-width:100%}:host .left-side .application-name ix-typography{overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name-suffix{flex:1 1 auto;min-width:0;flex-shrink:1;color:var(--ix-application-header-name-suffix--color)}:host .left-side .logo{display:inline-flex;align-items:center;position:relative;height:var(--ix-application-header-logo--height);overflow:hidden;line-height:0rem;color:var(--ix-application-header-logo--color);margin-right:var(--ix-application-header-logo--margin-right);margin-left:var(--ix-application-header-logo--margin-left);min-width:-moz-fit-content;min-width:fit-content}:host .left-side .logo.hide-logo{display:none}:host .right-side{flex:1 1 auto;overflow:hidden;justify-content:space-between}:host .right-side .content,:host .right-side .secondary{display:flex;position:relative;align-items:center;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;height:100%}:host .right-side .content{min-width:-moz-max-content;min-width:max-content}:host .right-side .secondary{overflow:hidden}:host .right-side .dropdown{overflow:visible}:host .right-side .dropdown-content>.slot-content-active{padding:var(--ix-application-header-slot-content-active--padding);border-top:none}:host .right-side .dropdown-content .slot-content-active~.slot-content-active{border-top:var(--ix-application-header-dropdown-item--border-width) solid var(--ix-application-header-dropdown-item--border-color)}:host .right-side .context-menu{display:none}:host .right-side .context-menu.context-menu-visible{display:block;margin-left:var(--ix-application-header-context-menu-visible--margin-left)}:host .right-side ::slotted(ix-avatar){margin-left:var(--ix-application-header-right-side--margin-left)}:host .right-side .primary-navigation{align-self:end}:host .right-side.sm{justify-content:end}@media only screen and (max-width: 48em){:host .logo{margin-left:var(--ix-application-header-logo--margin-left--mobile);display:none !important}:host .content,:host .secondary,:host .app-icon{display:none}}:host(.hide-bottom-border){border-bottom:none}`;
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.menuToggle = createEvent(this, "menuToggle", 7);
    this.openAppSwitch = createEvent(this, "openAppSwitch", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Application name
   */
  name;
  /**
   * Define a suffix which will be displayed next to the application name
   *
   * @since 4.0.0
   */
  nameSuffix;
  /**
   * Company logo will be show on the left side of the application name.
   * It will be hidden on smaller screens.
   *
   * @since 4.0.0
   */
  companyLogo;
  /**
   * Alt text for the company logo
   *
   * @since 4.0.0
   */
  companyLogoAlt;
  /**
   * The app icon will be shown as the first element inside the header.
   * It will be hidden on smaller screens.
   *
   * @since 4.0.0
   */
  appIcon;
  /**
   * Alt text for the app icon
   *
   * @since 4.0.0
   */
  appIconAlt;
  /**
   * Render subtle outline around app icon to ensure proper contrast.
   *
   * @since 4.0.0
   */
  appIconOutline = false;
  /**
   * Hides the bottom border of the header
   *
   * @since 4.0.0
   */
  hideBottomBorder = false;
  /**
   * Controls the visibility of the menu toggle button based on the context of the application header.
   *
   * When the application header is utilized outside the application frame, the menu toggle button is displayed.
   * Conversely, if the header is within the application frame, this property is ineffective.
   */
  showMenu = false;
  /**
   * ARIA label for the app switch icon button
   *
   * @since 3.2.0
   */
  ariaLabelAppSwitchIconButton;
  /**
   * ARIA label for the more menu icon button
   *
   * @since 3.2.0
   */
  ariaLabelMoreMenuIconButton;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Event emitted when the menu toggle button is clicked
   */
  menuToggle;
  /**
   * Event emitted when the app switch button is clicked
   *
   * @since 3.0.0
   */
  openAppSwitch;
  breakpoint = "lg";
  menuExpanded = false;
  suppressResponsive = false;
  hasSlottedLogo = false;
  hasOverflowContextMenu = false;
  hasSecondarySlotElements = false;
  hasDefaultSlotElements = false;
  hasOverflowSlotElements = false;
  applicationLayoutContext;
  menuDisposable;
  modeDisposable;
  callbackUpdateAppSwitchModal;
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
    this.menuDisposable?.dispose();
    this.modeDisposable?.dispose();
  }
  watchApplicationLayoutContext() {
    if (this.applicationLayoutContext) {
      this.showMenu = false;
    }
  }
  watchSuppressResponsive() {
    this.breakpoint = "md";
  }
  watchBreakpoint() {
    this.updateHasSlotAssignedElementsStates();
  }
  checkLogoSlot() {
    const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
    const isSiemensLogoDefined = window.customElements.get("ix-siemens-logo") !== void 0;
    if (isSiemensLogoDefined) {
      return hasSlottedElements(slotElement);
    }
    let assignedElements = slotElement?.assignedElements({ flatten: true });
    assignedElements = assignedElements?.filter((element) => element.tagName !== "IX-SIEMENS-LOGO");
    return assignedElements?.length !== 0;
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
    if (!this.callbackUpdateAppSwitchModal || !this.applicationLayoutContext?.appSwitchConfig) {
      return;
    }
    this.callbackUpdateAppSwitchModal(this.applicationLayoutContext?.appSwitchConfig);
  }
  async showAppSwitch() {
    const { defaultPrevented } = this.openAppSwitch.emit();
    if (defaultPrevented) {
      return;
    }
    if (!this.applicationLayoutContext?.appSwitchConfig) {
      return;
    }
    this.callbackUpdateAppSwitchModal = await showAppSwitch(this.applicationLayoutContext?.appSwitchConfig);
  }
  updateHasSlotAssignedElementsStates() {
    const defaultSlot = this.hostElement.shadowRoot.querySelector(".content slot:not([name])");
    const secondarySlot = this.hostElement.shadowRoot.querySelector('.content slot[name="secondary"]');
    const overflowSlot = this.hostElement.shadowRoot.querySelector('.content slot[name="overflow"]');
    this.hasDefaultSlotElements = hasSlottedElements(defaultSlot);
    this.hasSecondarySlotElements = hasSlottedElements(secondarySlot);
    this.hasOverflowSlotElements = hasSlottedElements(overflowSlot);
    this.hasOverflowContextMenu = this.hasOverflowSlotElements || this.breakpoint === "sm" && (this.hasDefaultSlotElements || this.hasSecondarySlotElements);
  }
  onContentBgClick(e) {
    if (e.target === this.contentBackground) {
      e.preventDefault();
    }
  }
  render() {
    const hasApplicationContextAvailable = !!this.applicationLayoutContext;
    const showMenuByApplicationFrame = this.breakpoint === "sm" && this.suppressResponsive === false && hasApplicationContextAvailable;
    const showApplicationSwitch = this.applicationLayoutContext?.appSwitchConfig && this.breakpoint !== "sm" && this.suppressResponsive === false;
    const showCompanyLogoByProperty = this.breakpoint !== "sm" && !!this.companyLogo;
    return h(Host, { key: "19d99e6f475cc3aca62b2752d67b4033cd0c4183", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header", role: "banner" }, h("div", { key: "6ed67138b9a06af35f6087965cb3c789abd1116b", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "5a7f5c4b077d04eebc39c9da7515223ced400e55", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "b38b8e1718fc510e7952f944ab5e9f2cc3f5ce03", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "56a0fe05584d73c5b871b746215ac73f12c4339d", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "7b8eceb8f5878581c9789de8372708d9e554ceae", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "df961db21629c30a245e58b2827c7650453c98c1", class: "logo" }, h("img", { key: "9fe6f6e6a17ee206eeda4946a73dcb95d20e2647", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "931894d4525bb18eed6213342c4ee2186cc9d684", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "993b798b203a00d7fd56bcc05befa31480b3cda3", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "4efeae2078852620e1f2099a2f6cdec76e3ba464", class: "name" }, this.name && h("h1", { key: "e5526c90a2c4a8a7d3d91e21b7e42e2771c82ed9", class: "application-name" }, h("ix-typography", { key: "6dc4b79e1b037ddfabb6c16c5cab505d8d916b14", format: "body-lg" }, this.name)), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "52b1705de5b2f712321504ef471408cfbd551947", format: "body-sm", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "91338d717ec1c50dbfe4b12b4630db11f3ce59a3", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "47a619dd3e8874bdb9ed55897caf24e9c17c5fa1", class: "secondary" }, h("slot", { key: "50116778f09e60e314544272a56067fe5dd25c0c", name: "secondary" })), h("div", { key: "605212389aea62353a545819b38f1c46740d3d05", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "9d9210b04e51cb5696cb97b20c50dab7ddebc261" }), h("ix-icon-button", { key: "e18d39881254f31c027b3c2a98030e1caeef9d73", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu) }), h("ix-dropdown", { key: "e00dd3e92a6a2788e3fae409e6563f0a4c738ac4", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu), enableTopLayer: this.enableTopLayer }, h("div", { key: "2437a700ae3428519f41b356fb64750441724455", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "33f5388856ccd00fd8bf308f6c644d5de1e10012", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "99e96724ff9045bd49eaf3480e099b05cd6f449f", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "f93f4224644b7032058ad1e8b4cdab834c389666", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "82f94efdbaed62fda7e8a1d9a6402f62743910d9", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "010dcd196f3ad2566e907f5eb8bed3798d170b72", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "a284a9859dbab1e3b12cb16cbebdb11205333048", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "af3c6dc34ea373bfb8d4734b90ff4a7cc587294e", name: "ix-application-header-avatar" }))));
  }
  static get watchers() {
    return {
      "applicationLayoutContext": [{
        "watchApplicationLayoutContext": 0
      }],
      "suppressResponsive": [{
        "watchSuppressResponsive": 0
      }],
      "breakpoint": [{
        "watchBreakpoint": 0
      }]
    };
  }
};
ApplicationHeader.style = applicationHeaderCss();
export {
  ApplicationHeader as ix_application_header
};
