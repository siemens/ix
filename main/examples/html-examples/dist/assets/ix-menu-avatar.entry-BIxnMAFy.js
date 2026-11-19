import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-CNdMQz6S.js";
import { I as iconLogOut } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { b as getSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const menuAvatarCss = () => `@charset "UTF-8";:host{--ix-menu-avatar-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-menu-avatar-button--background--active:var(--si-sys-color-background-selected);--ix-menu-avatar-button--background--hover:var(--si-sys-color-background-hover);--ix-menu-avatar-button--color--active:var(--si-sys-color-text-primary);--ix-menu-avatar-button--color--hover:var(--si-sys-color-text-primary);--ix-menu-avatar-text--color--primary:var(--si-sys-color-text-primary)}:host{--ix-menu-avatar-button--transition-duration:var(--theme-default-time);--ix-menu-avatar--margin-bottom:var(--si-sys-sizing-spacing-y-40);--ix-menu-avatar--margin-right:var(--si-sys-sizing-spacing-x-50);--ix-menu-avatar-avatar--height:var(--si-sys-sizing-size-90);--ix-menu-avatar-avatar--max-height:var(--si-sys-sizing-size-90);--ix-menu-avatar-avatar--padding-left:var(--si-sys-sizing-spacing-x-20);--ix-menu-avatar-avatar--margin-left:var(--si-sys-sizing-spacing-x-30);--ix-menu-avatar-avatar--margin-right:var(--si-sys-sizing-spacing-x-30);--ix-menu-avatar-avatar-name--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-menu-avatar-avatar--border-radius:var(--si-sys-sizing-border-radius-full);--ix-menu-avatar--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-menu-avatar--outline-offset--focus:calc(-1 * var(--ix-menu-avatar--outline-width--focus))}:host{display:block;position:relative;margin-bottom:var(--ix-menu-avatar--margin-bottom);margin-right:var(--ix-menu-avatar--margin-right)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:var(--ix-menu-avatar-avatar--height);width:100%;max-height:var(--ix-menu-avatar-avatar--max-height);padding-left:var(--ix-menu-avatar-avatar--padding-left);margin-left:var(--ix-menu-avatar-avatar--margin-left);margin-right:var(--ix-menu-avatar-avatar--margin-right);transition:var(--ix-menu-avatar-button--transition-duration)}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:var(--ix-menu-avatar-avatar-name--margin-left);line-height:1.14}:host .avatar .avatar-name .typography-body{color:var(--ix-menu-avatar-text--color--primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar{border-radius:var(--ix-menu-avatar-avatar--border-radius)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover,:host .avatar:not(.disabled):not(:disabled).hover{background-color:var(--ix-menu-avatar-button--background--hover);color:var(--ix-menu-avatar-button--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--ix-menu-avatar-button--background--active);color:var(--ix-menu-avatar-button--color--active)}:host .avatar:focus-visible{outline:var(--ix-menu-avatar--outline-width--focus) solid var(--ix-menu-avatar-button--outline-color--focus);outline-offset:var(--ix-menu-avatar--outline-offset--focus)}`;
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
   */
  tooltipText;
  /**
   * aria-label for the tooltip
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
    return h(Host, { key: "637dc518057ce364eec41afa12f42ebbe982853c", slot: "ix-menu-avatar" }, h("button", { key: "e363f358053330352858ff59fa13dbe477cbfe46", class: "nav-item top-item avatar no-hover", id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "2834c1d9601baef58ba363648ba065733d360549", image: this.image, initials: this.initials }), h("div", { key: "da55ba18170cc6fb656e2c0730ea3977a982d921", class: "avatar-name" }, h("span", { key: "47e9a87fc64ce38bbba2fcb3e12cfb0aad7f7250", class: "typography-body" }, this.top), h("span", { key: "dcf78186ccc8b95d099ee4774c1a69e26d0d52ec", class: "typography-body" }, this.bottom))), !!tooltipText && h("ix-tooltip", { key: "b0fa707220282fbfb30e1da0eedd7574ea0f6706", ref: this.tooltipRef, for: `#${this.avatarElementId}`, placement: "right", "aria-hidden": a11yBoolean(ariaHidden), "aria-label": this.ariaLabelTooltip }, tooltipText), h("ix-dropdown", { key: "c232158d3ae6fb9eec8079b1cbc8d31f884ec281", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && this.hideLogoutButton, offset: {
      mainAxis: 16
    }, onShowChanged: (event) => {
      if (event.detail && this.tooltipRef.current) {
        this.tooltipRef.current.hideTooltip(0);
      }
    }, enableTopLayer: this.enableTopLayer }, h("slot", { key: "d3c07d20dadb9e9b82b3fb3f8a7f81bf97d28ff6", onSlotchange: () => this.onSlotChange() }), !this.hideLogoutButton && h("ix-menu-avatar-item", { key: "cda64007146a04f048388afaef8fe540d39d52a6", label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } })));
  }
};
MenuAvatar.style = menuAvatarCss();
export {
  MenuAvatar as ix_menu_avatar
};
