import { r as registerInstance, c as createEvent, g as getElement, a as readTask, h, H as Host } from "./index-CgUi6DzV-B0SX_BHQ.js";
import { h as iconMoreMenu, j as iconApps } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { s as showAppSwitch } from "./index-CMgMOuhq-S-ZXjK3_.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-LFrZudC6-CMyhWjAC.js";
import { g as getCurrentBreakpoint } from "./breakpoints-CngdN1zi-CCrbHAVS.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { a as applicationLayoutService } from "./service-C3ifmVz8-BWlcCSeE.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./modal-CT9wuOLE-HnuYCO1-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const applicationHeaderCss = () => `@charset "UTF-8";:host{--ix-application-header-dropdown-item--border-color:var(--si-sys-color-border-4);--ix-application-header--background:var(--si-sys-color-background-1);--ix-application-header--border-color:var(--si-sys-color-border-4);--ix-application-header--color:var(--si-sys-color-text-primary);--ix-application-header-app-icon--outline-color:var(--si-sys-color-border-2);--ix-application-header-logo--color:var(--si-sys-color-effects-logo);--ix-application-header-name-suffix--color:var(--si-sys-color-text-secondary)}:host{--ix-application-header--z-index:var(--theme-z-index-fixed);--ix-application-header--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header-dropdown-item--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header--min-height:var(--si-sys-sizing-size-100);--ix-application-header--padding-right:calc(var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) + var(--ix-safe-area-inset-right, 0rem));--ix-application-header--padding-left:calc(var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) + var(--ix-safe-area-inset-left, 0rem));--ix-application-header--padding-left--mobile:calc((var(--si-sys-sizing-size-100) - var(--si-sys-sizing-size-80)) / 2 + var(--ix-safe-area-inset-left, 0rem));--ix-application-header-right-side--min-height:var(--si-sys-sizing-size-100);--ix-application-header-app-icon--size:var(--si-sys-sizing-size-80);--ix-application-header-app-icon--outline-width:var(--si-sys-sizing-border-width-default);--ix-application-header-app-icon--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-application-header-app-switch--margin:0 calc(var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10));--ix-application-header-name--margin-left:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--margin-right:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--gap:var(--si-sys-sizing-spacing-x-50);--ix-application-header-logo--height:var(--si-sys-sizing-size-80);--ix-application-header-logo--margin-right:var(--si-sys-sizing-spacing-x-60);--ix-application-header-logo--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-application-header-slot-content--padding--active:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-80);--ix-application-header-context-menu-visible--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-right-side--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-logo--margin-left--mobile:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;flex-wrap:nowrap;align-items:end;justify-content:space-between;position:relative;width:100%;min-height:var(--ix-application-header--min-height);padding-top:var(--ix-safe-area-inset-top, 0rem);padding-right:var(--ix-application-header--padding-right);padding-left:var(--ix-application-header--padding-left);color:var(--ix-application-header--color);background-color:var(--ix-application-header--background);border-bottom:var(--ix-application-header--border-width) solid var(--ix-application-header--border-color);z-index:var(--ix-application-header--z-index)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .left-side,:host .right-side{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;align-items:center;min-width:0;min-height:var(--ix-application-header-right-side--min-height);height:100%}:host .left-side{flex:0 1 auto}:host .left-side .app-icon{display:block;position:relative;width:var(--ix-application-header-app-icon--size);min-width:var(--ix-application-header-app-icon--size);max-width:var(--ix-application-header-app-icon--size);height:var(--ix-application-header-app-icon--size);min-height:var(--ix-application-header-app-icon--size);max-height:var(--ix-application-header-app-icon--size)}:host .left-side .app-icon.app-icon-outline{outline:var(--ix-application-header-app-icon--outline-width) solid var(--ix-application-header-app-icon--outline-color);border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-icon img{position:relative;display:block;width:100%;height:100%;border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-switch{margin:var(--ix-application-header-app-switch--margin)}:host .left-side .app-switch.without-app-icon{margin-left:0px}:host .left-side .name{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;align-items:baseline;margin-left:var(--ix-application-header-name--margin-left);margin-right:var(--ix-application-header-name--margin-right);color:var(--ix-application-header--color);min-width:0;gap:var(--ix-application-header-name--gap);overflow:hidden}:host .left-side .application-name,:host .left-side .application-name-suffix{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name{margin:0;padding:0;flex:0 1 auto;min-width:0;flex-shrink:0;max-width:100%}:host .left-side .application-name ix-typography{overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name-suffix{flex:1 1 auto;min-width:0;flex-shrink:1;color:var(--ix-application-header-name-suffix--color)}:host .left-side .logo{display:inline-flex;align-items:center;position:relative;height:var(--ix-application-header-logo--height);overflow:hidden;line-height:0rem;color:var(--ix-application-header-logo--color);margin-right:var(--ix-application-header-logo--margin-right);margin-left:var(--ix-application-header-logo--margin-left);min-width:-moz-fit-content;min-width:fit-content}:host .left-side .logo.hide-logo{display:none}:host .right-side{flex:1 1 auto;overflow:hidden;justify-content:space-between}:host .right-side .content,:host .right-side .secondary{display:flex;position:relative;align-items:center;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;height:100%;padding:0 calc(var(--si-sys-sizing-focus-ring-offset) + var(--si-sys-sizing-focus-ring-width))}:host .right-side .content{min-width:-moz-max-content;min-width:max-content}:host .right-side .secondary{overflow:hidden}:host .right-side .dropdown{overflow:visible}:host .right-side .dropdown-content>.slot-content-active{padding:var(--ix-application-header-slot-content--padding--active);border-top:none}:host .right-side .dropdown-content .slot-content-active~.slot-content-active{border-top:var(--ix-application-header-dropdown-item--border-width) solid var(--ix-application-header-dropdown-item--border-color)}:host .right-side .context-menu{display:none}:host .right-side .context-menu.context-menu-visible{display:block;margin-left:var(--ix-application-header-context-menu-visible--margin-left)}:host .right-side ::slotted(ix-avatar){margin-left:var(--ix-application-header-right-side--margin-left)}:host .right-side .primary-navigation{align-self:end}:host .right-side.sm{justify-content:end}@media only screen and (max-width: 48em){:host{padding-left:var(--ix-application-header--padding-left--mobile)}:host .logo{margin-left:var(--ix-application-header-logo--margin-left--mobile);display:none !important}:host .content,:host .secondary,:host .app-icon{display:none}}:host(.hide-bottom-border){border-bottom:none}`;
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
   */
  nameSuffix;
  /**
   * Company logo will be show on the left side of the application name.
   * It will be hidden on smaller screens.
   */
  companyLogo;
  /**
   * Alt text for the company logo
   */
  companyLogoAlt;
  /**
   * The app icon will be shown as the first element inside the header.
   * It will be hidden on smaller screens.
   */
  appIcon;
  /**
   * Alt text for the app icon
   */
  appIconAlt;
  /**
   * Render subtle outline around app icon to ensure proper contrast.
   */
  appIconOutline = false;
  /**
   * Hides the bottom border of the header
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
   */
  ariaLabelAppSwitchIconButton;
  /**
   * ARIA label for the more menu icon button
   */
  ariaLabelMoreMenuIconButton;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   */
  enableTopLayer = false;
  /**
   * Event emitted when the menu toggle button is clicked
   */
  menuToggle;
  /**
   * Event emitted when the app switch button is clicked
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
    return h(Host, { key: "59e92cb0b8221dbb8fd09087da2aa35e780028b3", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header", role: "banner" }, h("div", { key: "0bf7d6691a88230d76d34d875e4426e187c09ff4", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "db4cef7d39c47fe08bc0b3bb76b1b6706987bc6a", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "649b96c939620f9baef393a767fb6c9479e313c0", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "7235bf9cac67834ad655c517e49123df7cf5d485", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "0b8039d950760a0a867cc43fabee59eb2bb75b1c", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "78011d42720b41e71eeed956c4e3b98b2d2d9a5e", class: "logo" }, h("img", { key: "d89ebe1027c6ff898d4b6a5c3d8dca5d555fc6e5", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "0300b36abbe430bf4cc1035e8be86d75582e8718", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "9480f9aaea31c119257a2df5fe4c9c748d318b37", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "8b2665fd8f1dbf223636a4f408def242cf830d9b", class: "name" }, this.name && h("h1", { key: "73a3a9c04a08af11d488ab593ca3ab2e4a4e19cd", class: "application-name" }, h("ix-typography", { key: "0400f3960de4644d8490d5773e8c6fb4aa62a453", format: "body-lg" }, this.name)), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "72fbb9492e1d908506d41970e1e8fdb7a77e177f", format: "body-sm", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "a3010ea776656fd8e02b45c2f8d7954044de7494", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "96eab573401e866cb98f7779a3c51ed08dac4b0e", class: "secondary" }, h("slot", { key: "44c8ad0031d407a10e082f52ff1fe7d14e8a31a5", name: "secondary" })), h("div", { key: "698248d3275598c1a872b65f4c8758b572d8d4fb", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "7f7bd58251fd60a3cc209ee7607a61fbdc8a9f7e" }), h("ix-icon-button", { key: "5ca07a8e4379706a341e8d833dce475b54f3f248", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu) }), h("ix-dropdown", { key: "90059758842df717af97ac13547baa376baf4c89", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu), enableTopLayer: this.enableTopLayer }, h("div", { key: "ffc8e80d6972abffafec85c34fd7d5c204001149", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "8c6700831a33e9cc8275f791e01347cefdff6007", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "2ad263f5b5b9e414ab717c8165987ffe9720b264", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "39ec1472adc70bcf13cc6bb4d7b85901e627e832", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "d3719026d67d112b4f0ab051ff168fbdce58f239", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "819b474a9e53b1eb6def45928e9d47571a9c3c89", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "f723c069397769905dcc0ecda5abd67849decccc", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "b53862bffef8ec989d66a10137f19b3a762cdd0b", name: "ix-application-header-avatar" }))));
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
