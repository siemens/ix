import { r as registerInstance, c as createEvent, g as getElement, a as readTask, h, H as Host } from "./index-CgUi6DzV-CwYAT1Wh.js";
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
const applicationHeaderCss = () => `@charset "UTF-8";:host{--ix-application-header-dropdown-item--border-color:var(--si-sys-color-border-4);--ix-application-header--background:var(--si-sys-color-background-1);--ix-application-header--border-color:var(--si-sys-color-border-4);--ix-application-header--color:var(--si-sys-color-text-primary);--ix-application-header-app-icon--outline-color:var(--si-sys-color-border-2);--ix-application-header-logo--color:var(--si-sys-color-effects-logo);--ix-application-header-name-suffix--color:var(--si-sys-color-text-secondary)}:host{--ix-application-header--z-index:var(--theme-z-index-fixed);--ix-application-header--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header-dropdown-item--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header--min-height:var(--si-sys-sizing-size-100);--ix-application-header--padding-right:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) +       var(--ix-safe-area-inset-right, 0rem)   );--ix-application-header--padding-left:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) +       var(--ix-safe-area-inset-left, 0rem)   );--ix-application-header--padding-left--mobile:calc(     (var(--si-sys-sizing-size-100) - var(--si-sys-sizing-size-80)) / 2 +       var(--ix-safe-area-inset-left, 0rem)   );--ix-application-header-right-side--min-height:var(--si-sys-sizing-size-100);--ix-application-header-app-icon--icon-size:var(--si-sys-sizing-size-80);--ix-application-header-app-icon--outline-width:var(--si-sys-sizing-border-width-default);--ix-application-header-app-icon--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-application-header-app-switch--margin:0     calc(       var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10)     );--ix-application-header-name--margin-left:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--margin-right:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--gap:var(--si-sys-sizing-spacing-x-50);--ix-application-header-logo--height:var(--si-sys-sizing-size-80);--ix-application-header-logo--margin-right:var(--si-sys-sizing-spacing-x-60);--ix-application-header-logo--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-application-header-slot-content-active--padding:var(--si-sys-sizing-spacing-y-40)     var(--si-sys-sizing-spacing-x-80);--ix-application-header-context-menu-visible--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-right-side--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-logo--margin-left--mobile:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;flex-wrap:nowrap;align-items:end;justify-content:space-between;position:relative;width:100%;min-height:var(--ix-application-header--min-height);padding-top:var(--ix-safe-area-inset-top, 0rem);padding-right:var(--ix-application-header--padding-right);padding-left:var(--ix-application-header--padding-left);color:var(--ix-application-header--color);background-color:var(--ix-application-header--background);border-bottom:var(--ix-application-header--border-width) solid var(--ix-application-header--border-color);z-index:var(--ix-application-header--z-index)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .left-side,:host .right-side{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;align-items:center;min-width:0;min-height:var(--ix-application-header-right-side--min-height);height:100%}:host .left-side{flex:0 1 auto}:host .left-side .app-icon{display:block;position:relative;width:var(--ix-application-header-app-icon--icon-size);min-width:var(--ix-application-header-app-icon--icon-size);max-width:var(--ix-application-header-app-icon--icon-size);height:var(--ix-application-header-app-icon--icon-size);min-height:var(--ix-application-header-app-icon--icon-size);max-height:var(--ix-application-header-app-icon--icon-size)}:host .left-side .app-icon.app-icon-outline{outline:var(--ix-application-header-app-icon--outline-width) solid var(--ix-application-header-app-icon--outline-color);border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-icon img{position:relative;display:block;width:100%;height:100%;border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-switch{margin:var(--ix-application-header-app-switch--margin)}:host .left-side .app-switch.without-app-icon{margin-left:0px}:host .left-side .name{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;align-items:baseline;margin-left:var(--ix-application-header-name--margin-left);margin-right:var(--ix-application-header-name--margin-right);color:var(--ix-application-header--color);min-width:0;gap:var(--ix-application-header-name--gap);overflow:hidden}:host .left-side .application-name,:host .left-side .application-name-suffix{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name{margin:0;padding:0;flex:0 1 auto;min-width:0;flex-shrink:0;max-width:100%}:host .left-side .application-name ix-typography{overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name-suffix{flex:1 1 auto;min-width:0;flex-shrink:1;color:var(--ix-application-header-name-suffix--color)}:host .left-side .logo{display:inline-flex;align-items:center;position:relative;height:var(--ix-application-header-logo--height);overflow:hidden;line-height:0rem;color:var(--ix-application-header-logo--color);margin-right:var(--ix-application-header-logo--margin-right);margin-left:var(--ix-application-header-logo--margin-left);min-width:-moz-fit-content;min-width:fit-content}:host .left-side .logo.hide-logo{display:none}:host .right-side{flex:1 1 auto;overflow:hidden;justify-content:space-between}:host .right-side .content,:host .right-side .secondary{display:flex;position:relative;align-items:center;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;height:100%;padding:0 calc(var(--si-sys-sizing-focus-ring-offset) + var(--si-sys-sizing-focus-ring-width))}:host .right-side .content{min-width:-moz-max-content;min-width:max-content}:host .right-side .secondary{overflow:hidden}:host .right-side .dropdown{overflow:visible}:host .right-side .dropdown-content>.slot-content-active{padding:var(--ix-application-header-slot-content-active--padding);border-top:none}:host .right-side .dropdown-content .slot-content-active~.slot-content-active{border-top:var(--ix-application-header-dropdown-item--border-width) solid var(--ix-application-header-dropdown-item--border-color)}:host .right-side .context-menu{display:none}:host .right-side .context-menu.context-menu-visible{display:block;margin-left:var(--ix-application-header-context-menu-visible--margin-left)}:host .right-side ::slotted(ix-avatar){margin-left:var(--ix-application-header-right-side--margin-left)}:host .right-side .primary-navigation{align-self:end}:host .right-side.sm{justify-content:end}@media only screen and (max-width: 48em){:host{padding-left:var(--ix-application-header--padding-left--mobile)}:host .logo{margin-left:var(--ix-application-header-logo--margin-left--mobile);display:none !important}:host .content,:host .secondary,:host .app-icon{display:none}}:host(.hide-bottom-border){border-bottom:none}`;
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
    return h(Host, { key: "f293150fee2e983b8e7148572cf549178a8fc0d7", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header", role: "banner" }, h("div", { key: "177480ada612c95474f76edb8fe1ec66145e0a89", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "51d41628fe428eaeabc1e795917f92c8a5832cdc", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "9267eb31ce19aa7492be8ae6d241b652c29daa25", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "6fa2955250a916463ee80990ff6637bcd644ea0f", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "d7daaaa04e338a8a7bbd0e1147de68123e73f268", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "6354a0e370212e2414ed7d3f41acff552638679f", class: "logo" }, h("img", { key: "5c9b3096c9e48f4215c81e7c869a751b2f877088", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "9c5b8a464ea55b8e8b73a608dabf08483d35ec96", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "14034fac312cffdd9a150c539b32a0c0e2b38ff9", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "4f74752bf74d15a41f0004f93b6b3bc901192b67", class: "name" }, this.name && h("h1", { key: "ddbc1793dfcceb1d444a5c735360f2d90e6dcd7e", class: "application-name" }, h("ix-typography", { key: "3bdc833cab85e9849db75be9f03da95de0ceff89", format: "body-lg" }, this.name)), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "c34b5743ebbcce49619e807bf3e18e4f840b22cf", format: "body-sm", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "cb594ec065f56c4b8a563886825e168543ed8e71", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "ff854b5595bc3ac693ebf4a763e3107e3efaed70", class: "secondary" }, h("slot", { key: "fad2c91d498103b4891015742d0dd04a93f4422b", name: "secondary" })), h("div", { key: "37c1151ae2b7c4876cdff26395caa8786ab00bb9", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "ea26e7231acbc2c5ea28ec250d62677da551cf2c" }), h("ix-icon-button", { key: "90ec9a55ad00c9bda515ebbc57f4ce71447282ad", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu) }), h("ix-dropdown", { key: "0e10a1328893a1b63159177fbcf261c3e319ceda", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu), enableTopLayer: this.enableTopLayer }, h("div", { key: "d60acf5189962051660e092175888a9f4201985f", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "6d758f873a967be11b58604211b449b4c0fe3e4e", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "a5ef206172d1fd21d1ec5b1068889202cd920eba", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "77df698230b20acdfe85dc8ab3788e4dd0718c05", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "be2c29ee02b041a806c6fb60ba585575a6f07391", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "4873887b6b38ea5effe972d11dab6c980268d8cb", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "e3ce4aed8c5364f6fbb410969d4a8660a7a35709", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "bd9ae1c115e5820984d2675efcb8b50bf4c1a361", name: "ix-application-header-avatar" }))));
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
