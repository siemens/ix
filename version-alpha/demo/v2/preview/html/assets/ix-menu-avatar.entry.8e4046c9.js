import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.aa474cf6.js";
import { g as getSlottedElements } from "./shadow-dom-i60z1FJC.6f08a0ce.js";
import { x as iconLogOut } from "./index-CrTP-icT.451e0ae2.js";
const menuAvatarCss = ":host{display:block;position:relative;margin-bottom:0.5rem;margin-right:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .avatar{all:unset;box-sizing:border-box;display:flex;align-items:center;height:2.5rem;width:100%;max-height:2.5rem;padding-left:0.25rem;margin-left:0.41rem;margin-right:0.35rem;transition:var(--theme-default-time);border-radius:1.25rem}:host .avatar .avatar-name{display:flex;flex-direction:column;overflow:hidden;white-space:nowrap;margin-left:1rem;line-height:1.14}:host .avatar .avatar-name .text-default-single{color:var(--theme-nav-item-primary--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):hover{background-color:var(--theme-avatar-btn--background--hover);color:var(--theme-avatar-btn--color--hover)}:host .avatar:not(.disabled):not(:disabled){cursor:pointer}:host .avatar:not(.disabled):not(:disabled):active,:host .avatar:not(.disabled):not(:disabled).active{background-color:var(--theme-avatar-btn--background--active);color:var(--theme-avatar-btn--color--active)}:host .avatar:focus-visible{outline:1px solid var(--theme-color-focus-bdr)}";
const MenuAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logoutClick = createEvent(this, "logoutClick", 7);
    this.i18nLogout = "Logout";
    this.showLogoutButton = true;
    this.showContextMenu = false;
    this.avatarElementId = "ix-menu-avatar-id";
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
    return h(Host, { key: "3bcb9db9a5f7b6e2b949a1b78d31ac4307d55a21", slot: "ix-menu-avatar" }, h("button", { key: "997f2a3ca9f419eb8618b7baecea9487fee4353a", class: "nav-item top-item avatar no-hover", title: this.top, id: this.avatarElementId, tabIndex: 0 }, h("ix-avatar", { key: "9f16020bf51db6289cdda6ec9f9576d5d1e0f30a", image: this.image, initials: this.initials }), h("div", { key: "bb5bc3adb3b7ec2973e2212fc913423ae69d2796", class: "avatar-name" }, h("span", { key: "efa4a3e92895392a7618db2f124228bb785717ae", class: "text-default-single", title: this.top }, this.top), h("span", { key: "eff8ba846915852b97771f1610f62450496f8c33", class: "text-default-single", title: this.bottom }, this.bottom))), h("ix-dropdown", { key: "51e2c74f032ef5960aa1b3491728545bd3d88557", trigger: this.hostElement, placement: "right-start", hidden: !this.showContextMenu && !this.showLogoutButton, offset: {
      mainAxis: 16
    } }, h("slot", { key: "28605745ab13750eba6842c78e42fac4ac705a51", onSlotchange: () => this.onSlotChange() }), this.showLogoutButton ? h("ix-menu-avatar-item", { label: this.i18nLogout, icon: iconLogOut, onClick: (e) => {
      this.logoutClick.emit(e);
    } }) : null));
  }
  get hostElement() {
    return getElement(this);
  }
};
MenuAvatar.style = menuAvatarCss;
export {
  MenuAvatar as ix_menu_avatar
};
