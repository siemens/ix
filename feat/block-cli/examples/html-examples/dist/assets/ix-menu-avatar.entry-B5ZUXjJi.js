import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-Cn4dOqNA.js";
import { y as iconLogOut } from "./index-8HpPmDK_-DinFJk0z.js";
import { a as a11yBoolean } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { g as getSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:var(--theme-default-time)}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar{border-radius:1.25rem}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover,:host .avatar:not(.disabled):not(:disabled).hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const MenuAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logoutClick = createEvent(this, "logoutClick", 7);
    this.i18nLogout = "Logout";
    this.hideLogoutButton = false;
    this.enableTopLayer = false;
    this.showContextMenu = false;
    this.avatarElementId = "ix-menu-avatar-id";
    this.tooltipRef = makeRef();
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
  }
  render() {
    var _a;
    const tooltipText = (_a = this.tooltipText) !== null && _a !== void 0 ? _a : this.top;
    const ariaHidden = tooltipText === this.top;
    return h(Host, { key: "63251d35fc15b945de3bae097702c3e0e7377568", slot: "ix-menu-avatar" }, h("button", { key: "f50dd772c58b7b20e966d0a992f6e2537ebbe5bc", class: "nav-item top-item avatar no-hover", id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "1b3ea2ab31cc248e021306b9399b5b2bbad1122f", image: this.image, initials: this.initials }), h("div", { key: "1e8aee8c464ebc41e99d00b6933f6682d1c98019", class: "avatar-name" }, h("span", { key: "3bc559472005be3d21b406fd9ea85fcb9737dcb6", class: "text-default-single" }, this.top), h("span", { key: "023fb55cd5229df9aadec9daf86834e16944a66f", class: "text-default-single" }, this.bottom))), !!tooltipText && h("ix-tooltip", { key: "8e13fc36570e1152049b636ecabb042e7288c3e8", ref: this.tooltipRef, for: `#${this.avatarElementId}`, placement: "right", "aria-hidden": a11yBoolean(ariaHidden), "aria-label": this.ariaLabelTooltip }, tooltipText), h("ix-dropdown", { key: "6a7e04c67894981100c3b81eb6ac9c5d9a16194a", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && this.hideLogoutButton, offset: {
      mainAxis: 16
    }, onShowChanged: (event) => {
      if (event.detail && this.tooltipRef.current) {
        this.tooltipRef.current.hideTooltip(0);
      }
    }, enableTopLayer: this.enableTopLayer }, h("slot", { key: "d7444d53d15826d0999476c55bc428a89a6b73fa", onSlotchange: () => this.onSlotChange() }), !this.hideLogoutButton && h("ix-menu-avatar-item", { key: "f6c1fc16b2b39ef2277ae01485f1b7014e72e568", label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } })));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuAvatar.style = menuAvatarCss;
export {
  MenuAvatar as ix_menu_avatar
};
