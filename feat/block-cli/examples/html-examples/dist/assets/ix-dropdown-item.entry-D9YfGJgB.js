import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { O as iconSingleCheck, j as iconChevronRightSmall } from "./index-DFdo1y_u-D_8X33yw.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { a as IX_FOCUS_VISIBLE } from "./focus-utilities-Cft9zvbS-CmL7xuFI.js";
import { D as DefaultMixins } from "./component-YJmg0LbX-Cdi_gd8D.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { F as FocusVisibleMixin } from "./focus-visible.mixin-CwMeP-AW-wPL5jGlQ.js";
import "./shadow-dom-T30VMB2R-DtdN3xF2.js";
const dropdownItemCss = () => `:host{--ix-dropdown-item-checked-color:var(--theme-color-primary);display:flex;flex-direction:row;position:relative;height:2.5rem;width:auto;overflow:hidden;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .dropdown-item{all:unset;display:flex;flex-direction:row;align-items:center;position:relative;height:calc(100% - 2px);border:0.0625rem solid transparent;white-space:nowrap;width:calc(100% - 0.5rem - 1.5rem);padding:0 0.5rem;padding-right:1.5rem}:host .dropdown-item.no-checked-field{width:calc(100% - 1rem - 1.5rem);padding:0 1rem;padding-right:1.5rem}:host .dropdown-item-checked{display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:1rem;min-width:1rem;margin-right:0.5rem;color:var(--ix-dropdown-item-checked-color)}:host .dropdown-item-icon{margin-right:0.5rem;color:var(--theme-color-std-text)}:host .dropdown-item-text{display:block;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:pre}:host .submenu-icon{margin-left:auto}:host(.icon-only) .dropdown-item-icon{margin-right:0px}:host(.icon-only) .dropdown-item-checked{display:none}:host(.icon-only) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(.submenu) .dropdown-item{width:calc(100% - 0.5rem - 0.5rem);padding:0 0.5rem;padding-right:0.5rem}:host(:not(.disabled):not(:disabled).hover),:host(:not(.disabled):not(:disabled):hover){background-color:var(--theme-ghost--background--hover)}:host(:not(.disabled):not(:disabled).active),:host(:not(.disabled):not(:disabled):active){background-color:var(--theme-ghost--background--active)}:host(.disabled){pointer-events:none;color:var(--theme-color-weak-text) !important}:host(.disabled) .dropdown-item-icon{color:var(--theme-color-weak-text) !important}:host(:focus-visible){outline:none}:host(:focus-visible) .dropdown-item{border-color:var(--theme-color-focus-bdr)}:host(.ix-focused){outline:none}:host(.ix-focused) .dropdown-item{border-color:var(--theme-color-focus-bdr)}:host(.outline-visible){outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:-0.0625rem}:host([hidden]){display:none !important}`;
const DropdownItem = class extends Mixin(...DefaultMixins, ComponentIdMixin, FocusVisibleMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Label of dropdown item
   */
  label;
  /**
   * Icon of dropdown item
   */
  icon;
  /**
   * ARIA label for the icon
   */
  ariaLabelIcon;
  /**
   * ARIA label for the item's button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelButton;
  /**
   * Display hover state
   */
  hover = false;
  /**
   * Disable item and remove event listeners
   */
  disabled = false;
  /**
   * Whether the item is checked or not. If true a checkmark will mark the item as checked.
   */
  checked = false;
  /** @internal */
  isSubMenu = false;
  /** @internal */
  suppressChecked = false;
  /** @internal */
  hasVisualFocus = false;
  /** @internal */
  itemClick;
  /** @internal */
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }
  /** @internal */
  async getDropdownItemElement() {
    return this.hostElement;
  }
  isIconOnly() {
    return this.label === void 0 && this.hostElement.innerText === "" && this.icon !== void 0;
  }
  render() {
    const id = this.getHostElementId();
    let submenuAriaAttributes = {};
    if (this.isSubMenu) {
      submenuAriaAttributes = {
        "aria-haspopup": "menu",
        "aria-expanded": "false"
      };
    }
    return h(Host, { key: "ca60ea13e3e7b6e495aa681e3ab484b6e89af203", id, role: "menuitem", "aria-disabled": a11yBoolean(this.disabled), "aria-label": this.hostElement.ariaLabel ?? this.ariaLabelButton, class: {
      hover: this.hover,
      "icon-only": this.isIconOnly(),
      disabled: this.disabled,
      submenu: this.isSubMenu,
      [IX_FOCUS_VISIBLE]: !this.disabled,
      "outline-visible": this.hasVisualFocus
    }, onClick: () => {
      if (!this.disabled) {
        this.emitItemClick();
      }
    }, onKeyDown: (event) => {
      if (!this.disabled && (event.key === "Enter" || event.key === " ")) {
        this.emitItemClick();
      }
    }, ...submenuAriaAttributes }, h("div", { key: "4d3ca113a674da2dbb4db63f9fa52f2500e5683d", class: {
      "dropdown-item": true,
      "no-checked-field": this.suppressChecked,
      disabled: this.disabled
    } }, !this.suppressChecked ? h("div", { class: "dropdown-item-checked" }, this.checked ? h("ix-icon", { "aria-hidden": "true", class: "checkmark", name: iconSingleCheck, size: "16" }) : null) : null, this.icon ? h("ix-icon", { class: "dropdown-item-icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("div", { key: "43469451ab664abfdee90428d32cc79a596d95fc", class: "dropdown-item-text" }, this.label, h("slot", { key: "ed11d6d629c39909c7a86a3b51619e8f1903282c" })), this.isSubMenu ? h("ix-icon", { name: iconChevronRightSmall, class: "submenu-icon" }) : null));
  }
  static get watchers() {
    return {
      "ixFocusVisible": [{
        "$internal_checkAriaSelected": 0
      }]
    };
  }
};
DropdownItem.style = dropdownItemCss();
export {
  DropdownItem as ix_dropdown_item
};
