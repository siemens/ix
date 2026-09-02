import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { M as iconLogOut } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { b as getSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const menuAvatarCss = () => `@charset "UTF-8";:host{--ix-menu-avatar-button--transition-duration:var(--theme-default-time);--ix-menu-avatar-button--outline-color--focus:var(--si-sys-effects-focus);--ix-menu-avatar-button--background--active:var(--si-sys-background-active);--ix-menu-avatar-button--background--hover:var(--si-sys-background-hover);--ix-menu-avatar-button--color--active:var(--si-sys-text-primary);--ix-menu-avatar-button--color--hover:var(--si-sys-text-primary);--ix-menu-avatar-item-primary--color:var(--si-sys-text-primary)}:host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:var(--ix-menu-avatar-button--transition-duration)}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--ix-menu-avatar-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar{border-radius:1.25rem}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover,:host .avatar:not(.disabled):not(:disabled).hover{background-color:var(--ix-menu-avatar-button--background--hover);color:var(--ix-menu-avatar-button--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--ix-menu-avatar-button--background--active);color:var(--ix-menu-avatar-button--color--active)}:host .avatar:focus-visible{outline:1px solid var(--ix-menu-avatar-button--outline-color--focus)}`;
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
    return h(Host, { key: "44d01e9219d36f3b39f600a8af6be363b599e57a", slot: "ix-menu-avatar" }, h("button", { key: "5721f28acf285346930ba37f024b4c958bb26585", class: "nav-item top-item avatar no-hover", id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "0365f6596eba65770c0a88de625a3f2779aca574", image: this.image, initials: this.initials }), h("div", { key: "2259c04de595191cc70b9bf178385a2a7c34c018", class: "avatar-name" }, h("span", { key: "6bd21984f9227ea13c284e7d41f017ad63bf1bc7", class: "text-default-single" }, this.top), h("span", { key: "5b4d3e6b341e9b7e3c373f8378fefb0643903b2d", class: "text-default-single" }, this.bottom))), !!tooltipText && h("ix-tooltip", { key: "6d784650467028bbf591b2ebfb8e6b9b0d2699f6", ref: this.tooltipRef, for: `#${this.avatarElementId}`, placement: "right", "aria-hidden": a11yBoolean(ariaHidden), "aria-label": this.ariaLabelTooltip }, tooltipText), h("ix-dropdown", { key: "9a64566f2445095ebb759458a004047e9dbaadd9", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && this.hideLogoutButton, offset: {
      mainAxis: 16
    }, onShowChanged: (event) => {
      if (event.detail && this.tooltipRef.current) {
        this.tooltipRef.current.hideTooltip(0);
      }
    }, enableTopLayer: this.enableTopLayer }, h("slot", { key: "5b35457aaa4da12088322566f35d0f45dcd50b91", onSlotchange: () => this.onSlotChange() }), !this.hideLogoutButton && h("ix-menu-avatar-item", { key: "5d30da2c7570d92c85979f513e799f7260030278", label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } })));
  }
};
MenuAvatar.style = menuAvatarCss();
export {
  MenuAvatar as ix_menu_avatar
};
