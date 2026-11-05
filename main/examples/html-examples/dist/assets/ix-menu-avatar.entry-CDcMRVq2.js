import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import { U as iconLogOut } from "./index-CYGHrGrm-D-7vpgvu.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { b as getSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const menuAvatarCss = () => `@charset "UTF-8";:host{--ix-menu-avatar-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-menu-avatar-button--background--active:var(--si-sys-color-background-selected);--ix-menu-avatar-button--background--hover:var(--si-sys-color-background-hover);--ix-menu-avatar-button--color--active:var(--si-sys-color-text-primary);--ix-menu-avatar-button--color--hover:var(--si-sys-color-text-primary);--ix-menu-avatar-item-primary--color:var(--si-sys-color-text-primary)}:host{--ix-menu-avatar-button--transition-duration:var(--theme-default-time);--ix-menu-avatar--margin-bottom:var(--si-sys-sizing-spacing-y-40);--ix-menu-avatar--margin-right:var(--si-sys-sizing-spacing-x-50);--ix-menu-avatar-avatar--height:var(--si-sys-sizing-size-90);--ix-menu-avatar-avatar--max-height:var(--si-sys-sizing-size-90);--ix-menu-avatar-avatar--padding-left:var(--si-sys-sizing-spacing-x-20);--ix-menu-avatar-avatar--margin-left:var(--si-sys-sizing-spacing-x-30);--ix-menu-avatar-avatar--margin-right:var(--si-sys-sizing-spacing-x-30);--ix-menu-avatar-avatar-name--margin-left:var(--si-sys-sizing-spacing-x-60);--ix-menu-avatar-avatar--border-radius:var(--si-sys-sizing-border-radius-full);--ix-menu-avatar--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:block;position:relative;margin-bottom:var(--ix-menu-avatar--margin-bottom);margin-right:var(--ix-menu-avatar--margin-right)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:var(--ix-menu-avatar-avatar--height);width:100%;max-height:var(--ix-menu-avatar-avatar--max-height);padding-left:var(--ix-menu-avatar-avatar--padding-left);margin-left:var(--ix-menu-avatar-avatar--margin-left);margin-right:var(--ix-menu-avatar-avatar--margin-right);transition:var(--ix-menu-avatar-button--transition-duration)}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:var(--ix-menu-avatar-avatar-name--margin-left);line-height:1.14}:host .avatar .avatar-name .typography-body{color:var(--ix-menu-avatar-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar{border-radius:var(--ix-menu-avatar-avatar--border-radius)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover,:host .avatar:not(.disabled):not(:disabled).hover{background-color:var(--ix-menu-avatar-button--background--hover);color:var(--ix-menu-avatar-button--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--ix-menu-avatar-button--background--active);color:var(--ix-menu-avatar-button--color--active)}:host .avatar:focus-visible{outline:var(--ix-menu-avatar--outline-width--focus) solid var(--ix-menu-avatar-button--outline-color--focus)}`;
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
    return h(Host, { key: "683b1bf80e0fad041115d84dd493b5e6c9c05045", slot: "ix-menu-avatar" }, h("button", { key: "39a48e0c448db314372a3b3a77c6ef6228a55189", class: "nav-item top-item avatar no-hover", id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "801760903455cf1c7ae3464d864ace46e600c8b4", image: this.image, initials: this.initials }), h("div", { key: "1fc52ba46f29004c9ab98fa9e5b39e979fb7531a", class: "avatar-name" }, h("span", { key: "98e96b8357caf6106108963a0684e9c037758d60", class: "typography-body" }, this.top), h("span", { key: "6d17586353fe883dda199b8b86eec302dc8c78b0", class: "typography-body" }, this.bottom))), !!tooltipText && h("ix-tooltip", { key: "8c0d50399fe9216d12069da346e28d03e45b7ec2", ref: this.tooltipRef, for: `#${this.avatarElementId}`, placement: "right", "aria-hidden": a11yBoolean(ariaHidden), "aria-label": this.ariaLabelTooltip }, tooltipText), h("ix-dropdown", { key: "f3bc28cc19459753298d94ba615ba1c3facd7da6", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && this.hideLogoutButton, offset: {
      mainAxis: 16
    }, onShowChanged: (event) => {
      if (event.detail && this.tooltipRef.current) {
        this.tooltipRef.current.hideTooltip(0);
      }
    }, enableTopLayer: this.enableTopLayer }, h("slot", { key: "1b3218d2b15f27f5bb4a4482edd8a4b89741ab3c", onSlotchange: () => this.onSlotChange() }), !this.hideLogoutButton && h("ix-menu-avatar-item", { key: "3f19c8e19b47ae5c6d01ee70fc24ba362415a01c", label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } })));
  }
};
MenuAvatar.style = menuAvatarCss();
export {
  MenuAvatar as ix_menu_avatar
};
