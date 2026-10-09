import { r as registerInstance, c as createEvent, g as getElement, a as readTask, h, H as Host } from "./global-CU4RCWGK.js";
import { e as iconMoreMenu, f as iconApps } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { s as showAppSwitch } from "./index-nCVTBc9Y-D1jH4M5R.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-zqk3Dkv--Bgf_9ScM.js";
import { g as getCurrentBreakpoint } from "./breakpoints-D_Hmobxf-DBbixPq4.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { a as applicationLayoutService } from "./service-CEglFEKY-CaUBmgY_.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const applicationHeaderCss = () => `@charset "UTF-8";:host{--ix-application-header-dropdown-item--border-color:var(--si-sys-color-border-4);--ix-application-header--background:var(--si-sys-color-background-1);--ix-application-header--border-color:var(--si-sys-color-border-4);--ix-application-header--color:var(--si-sys-color-text-primary);--ix-application-header-app-icon--outline-color:var(--si-sys-color-border-2);--ix-application-header-logo--color:var(--si-sys-color-effects-logo);--ix-application-header-name-suffix--color:var(--si-sys-color-text-secondary)}:host{--ix-application-header--z-index:var(--theme-z-index-fixed);--ix-application-header--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header-dropdown-item--border-width:var(--si-sys-sizing-border-width-default);--ix-application-header--min-height:var(--si-sys-sizing-size-100);--ix-application-header--padding-right:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) +       var(--ix-safe-area-inset-right, 0rem)   );--ix-application-header--padding-left:calc(     var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10) +       var(--ix-safe-area-inset-left, 0rem)   );--ix-application-header-right-side--min-height:var(--si-sys-sizing-size-100);--ix-application-header-app-icon--icon-size:var(--si-sys-sizing-size-80);--ix-application-header-app-icon--outline-width:var(--si-sys-sizing-border-width-default);--ix-application-header-app-icon--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-application-header-app-switch--margin:0     calc(       var(--si-sys-sizing-spacing-x-40) + var(--si-sys-sizing-spacing-x-10)     );--ix-application-header-name--margin-left:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--margin-right:var(--si-sys-sizing-spacing-x-50);--ix-application-header-name--gap:var(--si-sys-sizing-spacing-x-50);--ix-application-header-logo--height:var(--si-sys-sizing-size-80);--ix-application-header-logo--margin-right:var(--si-sys-sizing-spacing-x-60);--ix-application-header-logo--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-application-header-slot-content-active--padding:var(--si-sys-sizing-spacing-y-40)     var(--si-sys-sizing-spacing-x-80);--ix-application-header-context-menu-visible--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-right-side--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-application-header-logo--margin-left--mobile:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;flex-wrap:nowrap;align-items:end;justify-content:space-between;position:relative;width:100%;min-height:var(--ix-application-header--min-height);padding-top:var(--ix-safe-area-inset-top, 0rem);padding-right:var(--ix-application-header--padding-right);padding-left:var(--ix-application-header--padding-left);color:var(--ix-application-header--color);background-color:var(--ix-application-header--background);border-bottom:var(--ix-application-header--border-width) solid var(--ix-application-header--border-color);z-index:var(--ix-application-header--z-index)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .left-side,:host .right-side{display:flex;flex-direction:row;flex-wrap:nowrap;position:relative;align-items:center;min-width:0;min-height:var(--ix-application-header-right-side--min-height);height:100%}:host .left-side{flex:0 1 auto}:host .left-side .app-icon{display:block;position:relative;width:var(--ix-application-header-app-icon--icon-size);min-width:var(--ix-application-header-app-icon--icon-size);max-width:var(--ix-application-header-app-icon--icon-size);height:var(--ix-application-header-app-icon--icon-size);min-height:var(--ix-application-header-app-icon--icon-size);max-height:var(--ix-application-header-app-icon--icon-size)}:host .left-side .app-icon.app-icon-outline{outline:var(--ix-application-header-app-icon--outline-width) solid var(--ix-application-header-app-icon--outline-color);border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-icon img{position:relative;display:block;width:100%;height:100%;border-radius:var(--ix-application-header-app-icon--border-radius)}:host .left-side .app-switch{margin:var(--ix-application-header-app-switch--margin)}:host .left-side .app-switch.without-app-icon{margin-left:0px}:host .left-side .name{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap;align-items:baseline;margin-left:var(--ix-application-header-name--margin-left);margin-right:var(--ix-application-header-name--margin-right);color:var(--ix-application-header--color);min-width:0;gap:var(--ix-application-header-name--gap);overflow:hidden}:host .left-side .application-name,:host .left-side .application-name-suffix{overflow:hidden;overflow-wrap:anywhere;text-overflow:ellipsis;text-wrap:nowrap}:host .left-side .application-name{flex:0 1 auto;min-width:0;flex-shrink:0;max-width:100%}:host .left-side .application-name-suffix{flex:1 1 auto;min-width:0;flex-shrink:1;color:var(--ix-application-header-name-suffix--color)}:host .left-side .logo{display:inline-flex;align-items:center;position:relative;height:var(--ix-application-header-logo--height);overflow:hidden;line-height:0rem;color:var(--ix-application-header-logo--color);margin-right:var(--ix-application-header-logo--margin-right);margin-left:var(--ix-application-header-logo--margin-left);min-width:-moz-fit-content;min-width:fit-content}:host .left-side .logo.hide-logo{display:none}:host .right-side{flex:1 1 auto;overflow:hidden;justify-content:space-between}:host .right-side .content,:host .right-side .secondary{display:flex;position:relative;align-items:center;justify-content:space-between;flex-direction:row;flex-wrap:nowrap;height:100%}:host .right-side .content{min-width:-moz-max-content;min-width:max-content}:host .right-side .secondary{overflow:hidden}:host .right-side .dropdown{overflow:visible}:host .right-side .dropdown-content>.slot-content-active{padding:var(--ix-application-header-slot-content-active--padding);border-top:none}:host .right-side .dropdown-content .slot-content-active~.slot-content-active{border-top:var(--ix-application-header-dropdown-item--border-width) solid var(--ix-application-header-dropdown-item--border-color)}:host .right-side .context-menu{display:none}:host .right-side .context-menu.context-menu-visible{display:block;margin-left:var(--ix-application-header-context-menu-visible--margin-left)}:host .right-side ::slotted(ix-avatar){margin-left:var(--ix-application-header-right-side--margin-left)}:host .right-side .primary-navigation{align-self:end}:host .right-side.sm{justify-content:end}@media only screen and (max-width: 48em){:host .logo{margin-left:var(--ix-application-header-logo--margin-left--mobile);display:none !important}:host .content,:host .secondary,:host .app-icon{display:none}}:host(.hide-bottom-border){border-bottom:none}`;
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
    return h(Host, { key: "3c321be26f680a63ac31c42600de4b53ade65549", class: {
      [`breakpoint-${this.breakpoint}`]: true,
      "hide-bottom-border": this.hideBottomBorder
    }, slot: "application-header", role: "banner" }, h("div", { key: "e4d815dcf6d57507c4977473702dd6466c553775", class: "left-side" }, this.appIcon && this.breakpoint !== "sm" && h("div", { key: "edb0783d14035aeb2cdddb2ce6c8f59e9bb54bd4", class: {
      "app-icon": true,
      "app-icon-outline": this.appIconOutline
    } }, h("img", { key: "3a2335846aed49a9e103a8e04c8c47c2f0d848fc", src: this.appIcon, alt: this.appIconAlt })), (this.showMenu || showMenuByApplicationFrame) && h("ix-menu-expand-icon", { key: "87219f101be5641e6d751c9648467f02449a32b3", onClick: () => this.onMenuClick(), expanded: this.menuExpanded }), showApplicationSwitch && h("ix-icon-button", { key: "66479e69b35f45c610ca20fbfaef440cc204bd54", onClick: () => this.showAppSwitch(), icon: iconApps, variant: "subtle-tertiary", class: {
      "app-switch": true,
      "without-app-icon": !this.appIcon
    }, "aria-label": this.ariaLabelAppSwitchIconButton }), showCompanyLogoByProperty && h("div", { key: "a2443c4d02b04c55da91725110de5e861728a0a3", class: "logo" }, h("img", { key: "cb386b0e26aad2aa69b42637bbc181540f17ec60", src: this.companyLogo, alt: this.companyLogoAlt })), h("div", { key: "77d1639b64626393cb60a0b7d08ca29f86265a0f", class: {
      logo: true,
      "hide-logo": !this.hasSlottedLogo
    } }, h("slot", { key: "84e5283da634f58d9ca2662e62da6862dcd3e939", name: "logo", onSlotchange: () => this.hasSlottedLogo = this.checkLogoSlot() })), h("div", { key: "234df00a334124221f4bdeb9e64edca3fce8b5c5", class: "name" }, h("ix-typography", { key: "28f21431ee3bdef776a47b0c1c3aea84d06cef3f", format: "body-lg", class: "application-name" }, this.name), this.nameSuffix && this.breakpoint !== "sm" && h("ix-typography", { key: "eed45c807ccd06aacba0388a10db8a6f88942b58", format: "body-sm", class: "application-name-suffix" }, this.nameSuffix))), h("div", { key: "0d181a25fc4e42fe77f599ab465288b48f7752dc", class: { "right-side": true, sm: this.breakpoint === "sm" } }, this.breakpoint !== "sm" && h("div", { key: "23b6275e2fb15ca4307b02151a8062cd89e230e1", class: "secondary" }, h("slot", { key: "b629ed9da754d1aa858b93b8cb941f32e0043f10", name: "secondary" })), h("div", { key: "05197e9ce9f6da4545501c9476ddfc967bc67005", class: "content" }, this.breakpoint !== "sm" && h("slot", { key: "65891ce51b2132f1fa0905442f145cec38110e79" }), h("ix-icon-button", { key: "7a04fb020202ae39c7501458d5d674f4a07d3620", class: {
      "context-menu": true,
      "context-menu-visible": this.hasOverflowContextMenu
    }, "data-context-menu": true, "data-testid": "show-more", icon: iconMoreMenu, size: "24", variant: "subtle-tertiary", "aria-label": this.ariaLabelMoreMenuIconButton, "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu) }), h("ix-dropdown", { key: "899d750faecdf6cdb758bacb7ce3291f53503e34", "data-overflow-dropdown": true, class: "dropdown", discoverAllSubmenus: true, trigger: this.resolveContextMenuButton(), "aria-hidden": a11yBoolean(!this.hasOverflowContextMenu), enableTopLayer: this.enableTopLayer }, h("div", { key: "918407e0d6f350e349f92841404620d50df72727", class: "dropdown-content", onClick: (e) => this.onContentBgClick(e) }, this.breakpoint === "sm" && h("div", { key: "87ae1f3b6f83bdd913ed7237e930cffac684c027", class: {
      "slot-content": true,
      "slot-content-active": this.hasSecondarySlotElements
    } }, h("slot", { key: "01de57f801545f0914fac5f4fba7b3473509d285", name: "secondary", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), this.breakpoint === "sm" && h("div", { key: "dd8873b281c4f95d63df257b5d295b388089a73f", class: {
      "slot-content": true,
      "slot-content-active": this.hasDefaultSlotElements
    } }, h("slot", { key: "3f94623d6e1066e1c1215d17130b71fb48102884", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })), h("div", { key: "3046fd43754e70aac5702ef10616d6d9775c5b1d", class: {
      "slot-content": true,
      "slot-content-active": this.hasOverflowSlotElements
    } }, h("slot", { key: "795441b68628db7f46bb0c6f330548e336f284c8", name: "overflow", onSlotchange: () => this.updateHasSlotAssignedElementsStates() })))), h("slot", { key: "ed5b5fa6644a1cf60454a5808488a72541440c05", name: "ix-application-header-avatar" }))));
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
