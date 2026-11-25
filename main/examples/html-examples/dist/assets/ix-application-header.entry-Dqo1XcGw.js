import { r as registerInstance, c as createEvent, g as getElement, a as readTask, h, H as Host } from "./index-CgUi6DzV-CSMVgu78.js";
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
const applicationHeaderCss = () => `@charset "UTF-8";:host{--ix-application-header-dropdown-item--border-color:var(--si-sys-color-border-4);--ix-application-header--background:var(--si-sys-color-background-1);--ix-application-header--border-color:var(--si-sys-color-border-4);--ix-application-header--color:var(--si-sys-color-text-primary);--ix-application-header-app-icon--outline-color:var(--si-sys-color-border-2);--ix-application-header-logo--color:var(--si-sys-color-effects-logo);--ix-application-header-name-suffix--color:var(--si-sys-color-text-secondary)}:host{--ix-application-header--z-index:var(--theme-z-index-fixed);--ix-application-header--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header-dropdown-item--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header--min-height:var(--si-sys-sizing-size-100);--ix-application-header--padding-right:calc(var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) + var(--ix-safe-area-inset-right, 0px));--ix-application-header--padding-left:calc(var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) + var(--ix-safe-area-inset-left, 0px));--ix-application-header--padding-left--mobile:calc((var(--si-sys-sizing-size-100) - var(--si-sys-sizing-size-80)) / 2 + var(--ix-safe-area-inset-left, 0px));--ix-application-header-right-side--min-height:var(--si-sys-sizing-size-100);--ix-application-header-app-icon--size:var(--si-sys-sizing-size-80);--ix-application-header-app-icon--outline-width:var(--si-sys-sizing-border-width-default);--ix-application-header-app-icon--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-application-header-app-switch--margin:0 calc(var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10));--ix-application-header-name--margin-left:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--margin-right:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--gap:var(--si-sys-sizing-spacing-x-50);--ix-application-header-logo--height:var(--si-sys-sizing-size-80);--ix-application-header-logo--margin-right:var(--si-sys-sizing-spacing-x-60);--ix-application-header-logo--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-application-header-slot-content--padding--active:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-80);--ix-application-header-context-menu-visible--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-right-side--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-logo--margin-left--mobile:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;flex-wrap:nowrap;align-items:end;justify-content:space-between;position:relative;width:100%;min-height:var(--ix-application-header--min-height);padding-top:var(--ix-safe-area-inset-top, 0px);padding-right:var(--ix-application-header--padding-right);padding-left:var(--ix-application-header--padding-left);color:var(--ix-application-header--color);background-color:var(--ix-application-header--background);border-bottom:var(--ix-application-header--border-width) solid var(--ix-application-header--border-color);z-index:var(--ix-application-header--z-index)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .left-side,:host .right-side{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;align-items:center;min-width:0;min-height:var(--ix-application-header-right-side--min-height);height:100%}:host .left-side{flex:0 1 auto}:host .left-side .app-icon{display:block;position:relative;width:var(--ix-application-header-app-icon--size);min-width:var(--ix-application-header-app-icon--size);max-width:var(--ix-application-header-app-icon--size);height:var(--ix-application-header-app-icon--size);min-height:var(--ix-application-header-app-icon--size);max-height:var(--ix-application-header-app-icon--size)}:host .left-side .app-icon.app-icon-outline{outline:var(--ix-application-header-app-icon--outline-width) solid var(--ix-application-header-app-icon--outline-color);border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-icon img{position:relative;display:block;width:100%;height:100%;border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-switch{margin:var(--ix-application-header-app-switch--margin)}:host .left-side .app-switch.without-app-icon{margin-left:0px}:host .left-side .name{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;align-items:baseline;margin-left:var(--ix-application-header-name--margin-left);margin-right:var(--ix-application-header-name--margin-right);color:var(--ix-application-header--color);min-width:0;gap:var(--ix-application-header-name--gap);overflow:hidden}:host .left-side .application-name,:host .left-side .application-name-suffix{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name{margin:0;padding:0;flex:0 1 auto;min-width:0;flex-shrink:0;max-width:100%}:host .left-side .application-name ix-typography{overflow:hidden;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name-suffix{flex:1 1 auto;min-width:0;flex-shrink:1;color:var(--ix-application-header-name-suffix--color)}:host .left-side .logo{display:inline-flex;align-items:center;position:relative;height:var(--ix-application-header-logo--height);overflow:hidden;line-height:0px;color:var(--ix-application-header-logo--color);margin-right:var(--ix-application-header-logo--margin-right);margin-left:var(--ix-application-header-logo--margin-left);min-width:-moz-fit-content;min-width:fit-content}:host .left-side .logo.hide-logo{display:none}:host .right-side{flex:1 1 auto;overflow:hidden;justify-content:space-between}:host .right-side .content,:host .right-side .secondary{display:flex;position:relative;align-items:center;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;height:100%;padding:0 calc(var(--si-sys-sizing-focus-ring-offset) + var(--si-sys-sizing-focus-ring-width))}:host .right-side .content{min-width:-moz-max-content;min-width:max-content}:host .right-side .secondary{overflow:hidden}:host .right-side .dropdown{overflow:visible}:host .right-side .dropdown-content>.slot-content-active{padding:var(--ix-application-header-slot-content--padding--active);border-top:none}:host .right-side .dropdown-content .slot-content-active~.slot-content-active{border-top:var(--ix-application-header-dropdown-item--border-width) solid var(--ix-application-header-dropdown-item--border-color)}:host .right-side .context-menu{display:none}:host .right-side .context-menu.context-menu-visible{display:block;margin-left:var(--ix-application-header-context-menu-visible--margin-left)}:host .right-side ::slotted(ix-avatar){margin-left:var(--ix-application-header-right-side--margin-left)}:host .right-side .primary-navigation{align-self:end}:host .right-side.sm{justify-content:end}@media only screen and (max-width: 48em){:host{padding-left:var(--ix-application-header--padding-left--mobile)}:host .logo{margin-left:var(--ix-application-header-logo--margin-left--mobile);display:none !important}:host .content,:host .secondary,:host .app-icon{display:none}}:host(.hide-bottom-border){border-bottom:none}`;
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
    return h(Host, { key: "1c5fdbb7ee9bb687229810fdc7e8ca9b891707c4", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header", role: "banner" }, h("div", { key: "c893541eb62de2a6b48a61265d93a2e200c2f59d", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "78944c761c7401a4eb2dc3ed87484c103fd3faf8", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "9c2acdd685b237453ce2633584e44624e8f61678", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "8c9404d6bf056f22bb20543d425c390786d98407", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "2937efca23206a327b6eedfd0570b9ea097ddd0d", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "5c7e482b2a22f806751686adee94704c738ed438", class: "logo" }, h("img", { key: "932ed2c39a35cd843c9b10d0bd77adad1b89b6ce", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "1555d1e8c1f78941c531f1f9dc11e60ce6612eba", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "1c5bf4372a5af39b7e5ca1b9294c20be36cf2efb", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "c3bca548a6f1daf7d005490afe9b8a124074409c", class: "name" }, this.name && h("h1", { key: "f7208660aa49781285f5136e42397f4217999eb9", class: "application-name" }, h("ix-typography", { key: "d2a65ad1146acec5c3b370d6947e7dea0e8edcb1", format: "body-lg" }, this.name)), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "b5253a6a11e521d98f74518752b7443de8f509ee", format: "body-sm", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "15c94631af92a98a93b719e32bb6ea7c8335adeb", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "724bbd3c79d09fbcf2e52c6492785994c4c21a1e", class: "secondary" }, h("slot", { key: "d1122ce9ea18cb24bf1a9d2b6be07091e9694b00", name: "secondary" })), h("div", { key: "5b30e4ed221052f4e843dacb3f369f2036c1ed33", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "4a235b4a6218c69527fda951c14edd8d13c1c55d" }), h("ix-icon-button", { key: "1c5e5f198620947bf942ffa5589d509f21ef0611", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu) }), h("ix-dropdown", { key: "ad0a950514fd58ec2dd3512f755d82cff3c1ed36", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu), enableTopLayer: this.enableTopLayer }, h("div", { key: "d494ca9150879e5ed440ff50c2efcd1149afdc9d", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "e44ebc09351f9b96122386cbe69fee79efdb05f8", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "a97f51b85d0afca967577614af85276d87748043", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "675e54eca8da63a6d1c3b74dda390177573bba41", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "2f2680acc7ef54b5eadb0e4eec900b2a08b5300c", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "e11088f01fe8a8afad67e586d13c8fae71485e19", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "67b6330b3fd927be0e1d57fe2b12bcb959c95b66", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "f87b3c166bd0a85cea8c41ee9ce96a3af1b95524", name: "ix-application-header-avatar" }))));
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
