import { a as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-DX2OdaCL.js";
import { G as iconLogOut } from "./index-Cl7fhG1I-C77BCFLW.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { b as getSlottedElements } from "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
const menuAvatarCss = () => `:host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:var(--theme-default-time)}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar{border-radius:1.25rem}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover,:host .avatar:not(.disabled):not(:disabled).hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}`;
const MenuAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logoutClick = createEvent(this, "logoutClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * First line of text
   */
  top;
  /**
   * Second line of text
   */
  bottom;
  /**
   * Display a avatar image
   */
  image;
  /**
   * Display the initials of the user. Will be overwritten by image
   */
  initials;
  /**
   * Tooltip text to display on hover. If not set, the 'top' property (user name) will be used as the default tooltip text.
   *
   * @since 4.3.0.
   */
  tooltipText;
  /**
   * aria-label for the tooltip
   *
   * @since 4.3.0.
   */
  ariaLabelTooltip;
  /**
   * i18n label for 'Logout' button
   */
  i18nLogout = "Logout";
  /**
   *  Control the visibility of the logout button
   */
  hideLogoutButton = false;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Control the visibility of the dropdown menu
   */
  showContextMenu = false;
  /**
   * Logout click
   */
  logoutClick;
  avatarElementId = "ix-menu-avatar-id";
  tooltipRef = makeRef();
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
  }
  render() {
    const tooltipText = this.tooltipText ?? this.top;
    const ariaHidden = tooltipText === this.top;
    return h(Host, { key: "5c6f05897a9a1c5a24b8ac5ba87686b6f83ca090", slot: "ix-menu-avatar" }, h("button", { key: "4425caeee1c3ae0c74d45c3253190cc6272416a3", class: "nav-item top-item avatar no-hover", id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "c0141851636696906476abd3777f7e5bd64322b7", image: this.image, initials: this.initials }), h("div", { key: "3f79c860b22a4dbcc8e72e768a6709c27a6a78ea", class: "avatar-name" }, h("span", { key: "e901a92cee9be95d6602da989872c8870291418a", class: "text-default-single" }, this.top), h("span", { key: "7da5bba687c52d0fab08c8c4cdc992bdb3dbd7be", class: "text-default-single" }, this.bottom))), !!tooltipText && h("ix-tooltip", { key: "1dd0063f1e2ee34df0076dd7a19b885d19837d80", ref: this.tooltipRef, for: `#${this.avatarElementId}`, placement: "right", "aria-hidden": a11yBoolean(ariaHidden), "aria-label": this.ariaLabelTooltip }, tooltipText), h("ix-dropdown", { key: "6709e38d692c0f725ffbdd2531fa8d9b5d89bf3c", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && this.hideLogoutButton, offset: {
      mainAxis: 16
    }, onShowChanged: (event) => {
      if (event.detail && this.tooltipRef.current) {
        this.tooltipRef.current.hideTooltip(0);
      }
    }, enableTopLayer: this.enableTopLayer }, h("slot", { key: "40ebda089d3578ddd04b3a304b14406051760df8", onSlotchange: () => this.onSlotChange() }), !this.hideLogoutButton && h("ix-menu-avatar-item", { key: "7a0a8e9d709adb8e7cf851fa56e1943cdcd21966", label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } })));
  }
};
MenuAvatar.style = menuAvatarCss();
export {
  MenuAvatar as ix_menu_avatar
};
