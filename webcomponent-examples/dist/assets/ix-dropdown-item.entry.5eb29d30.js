import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.918151cc.js";
const dropdownItemCss = ":host{--ix-dropdown-item-checked-color:var(--theme-color-primary);display:flex;flex-direction:row;position:relative;height:2.5rem;width:auto;overflow:hidden;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-item{all:unset;display:flex;flex-direction:row;align-items:center;position:relative;height:calc(100% - 2px);width:calc(100% - 0.5rem - 1.5rem);padding:0 0.5rem;padding-right:1.5rem;border:0.0625rem solid transparent;white-space:nowrap}:host .dropdown-item.no-checked-field{width:calc(100% - 1rem - 1.5rem);padding:0 1rem;padding-right:1.5rem}:host .dropdown-item:focus-visible{border-color:var(--theme-color-focus-bdr)}:host .dropdown-item-checked{display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:1rem;min-width:1rem;margin-right:0.25rem;color:var(--ix-dropdown-item-checked-color)}:host .dropdown-item-icon{margin-right:0.25rem;color:var(--theme-color-soft-text)}:host .dropdown-item-text{display:block;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .dropdown-item:focus-visible{outline:1px solid yellow}:host .submenu-icon{margin-left:auto}:host(.icon-only) .dropdown-item-icon{margin-right:0px}:host(.icon-only) .dropdown-item-checked{display:none}:host(.icon-only) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(.submenu) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(:not(.disabled):not(:disabled).hover),:host(:not(.disabled):not(:disabled):hover){background-color:var(--theme-ghost--background--hover)}:host(:not(.disabled):not(:disabled).active),:host(:not(.disabled):not(:disabled):active){background-color:var(--theme-ghost--background--active)}:host(.disabled){pointer-events:none;color:var(--theme-color-weak-text) !important}:host(.disabled) .dropdown-item-icon{color:var(--theme-color-weak-text) !important}";
const IxDropdownItemStyle0 = dropdownItemCss;
const DropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.label = void 0;
    this.icon = void 0;
    this.hover = false;
    this.disabled = false;
    this.checked = false;
    this.isSubMenu = false;
    this.suppressChecked = false;
  }
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }
  async getDropdownItemElement() {
    return this.hostElement;
  }
  isIconOnly() {
    return this.label === void 0 && this.hostElement.innerText === "" && this.icon !== void 0;
  }
  render() {
    return h(Host, { key: "d2972c4154e4f43f3fc9b7b9d6726c05923109c6", class: {
      hover: this.hover,
      "icon-only": this.isIconOnly(),
      disabled: this.disabled,
      submenu: this.isSubMenu
    }, role: "listitem" }, h("button", { key: "7148b3977626016ffcb818384175e3b1feda5c62", type: "button", tabIndex: 0, class: {
      "dropdown-item": true,
      "no-checked-field": this.suppressChecked
    }, onClick: () => this.emitItemClick() }, !this.suppressChecked ? h("div", { class: "dropdown-item-checked" }, this.checked ? h("ix-icon", { class: "checkmark", name: "single-check", size: "16" }) : null) : null, this.icon ? h("ix-icon", { class: "dropdown-item-icon", name: this.icon }) : null, h("div", { key: "e347baeb8cf93401a7d92210cb5102301e41133b", class: "dropdown-item-text" }, this.label, h("slot", { key: "fc99370903e7e37d3903f42451c3992b32d0399b" })), this.isSubMenu ? h("ix-icon", { name: "chevron-right-small", class: "submenu-icon" }) : null));
  }
  get hostElement() {
    return getElement(this);
  }
};
DropdownItem.style = IxDropdownItemStyle0;
export {
  DropdownItem as ix_dropdown_item
};
