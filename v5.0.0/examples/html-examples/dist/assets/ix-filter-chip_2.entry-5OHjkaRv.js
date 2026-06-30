import { r as registerInstance, c as createEvent, g as getElement, h, H as Host, M as Mixin } from "./global-F68Qu5y3.js";
import { l as iconCloseSmall } from "./index-DgUGsIlh-CLxQRaVd.js";
import { b as a11yHostAttributes } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { I as IX_FOCUS_VISIBLE_ACTIVE, a as IX_FOCUS_VISIBLE } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { F as FocusVisibleMixin } from "./focus-visible.mixin-CaRK3Ex_-BfOaEFnR.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const filterChipCss = () => `:host{display:inline-flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid var(--theme-chip-primary-outline--border-color);border-radius:2rem;background-color:var(--theme-color-ghost);color:var(--theme-chip-primary-outline--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem}:host .slot-container :host-context(.disabled){background-color:var(--theme-color-ghost);border-color:var(--theme-color-component-4);color:var(--theme-color-weak-text)}:host ix-icon-button{height:1.5rem;margin-left:0.25rem}:host ix-icon-button:not(.disabled):not(:disabled):focus-visible{outline:none}:host(.disabled){border:var(--theme-focus--border-thickness) solid var(--theme-color-component-4);color:var(--theme-color-weak-text);padding-right:0.5rem;cursor:default}:host(.readonly){padding-right:0.5rem}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:hover:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--hover);border-color:var(--theme-chip-primary-outline--border-color--hover);color:var(--theme-chip-primary-outline--color--hover)}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:active:not(.disabled):not(:disabled)){background-color:var(--theme-color-ghost-primary--active);border-color:var(--theme-chip-primary-outline--border-color--active);color:var(--theme-chip-primary-outline--color--active)}`;
const FilterChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * If true the filter chip will be in disabled state
   */
  disabled = false;
  /**
   * If true the filter chip will be in readonly mode
   */
  readonly = false;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelCloseIconButton;
  /**
   * Close clicked
   */
  closeClick;
  onCloseClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeClick.emit();
  }
  render() {
    return h(Host, { key: "c526d0f991398b79ef08935c6e82f6c4d34bdf63", class: { disabled: this.disabled, readonly: this.readonly }, title: this.hostElement.textContent }, h("div", { key: "8a67c75f558b81892213678aacaa63cd87e64286", class: "slot-container" }, h("slot", { key: "a31867f306a7ac642906017094338a412eeebe3b" })), !this.disabled && !this.readonly ? h("ix-icon-button", { variant: "tertiary", oval: true, icon: iconCloseSmall, size: "16", disabled: this.disabled, onClick: (event) => {
      this.onCloseClick(event);
    }, onKeyDown: (event) => {
      switch (event.key) {
        case "Enter":
        case " ":
          this.onCloseClick(event);
          break;
        case "Tab":
          break;
        default:
          event.preventDefault();
          event.stopPropagation();
      }
    }, "aria-label": this.ariaLabelCloseIconButton }) : null);
  }
};
FilterChip.style = filterChipCss();
class IxSelectItemLabelChangeEvent extends CustomEvent {
  constructor(detail) {
    super("ix-select-item:labelChange", {
      bubbles: true,
      detail
    });
  }
}
class IxSelectItemValueChangeEvent extends CustomEvent {
  constructor(detail) {
    super("ix-select-item:valueChange", {
      bubbles: true,
      detail
    });
  }
}
const selectItemCss = () => `:host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host ix-dropdown-item{color:var(--theme-color-std-text)}:host .select-item-checked{background-color:var(--theme-select-list-item--background--selected);--ix-dropdown-item-checked-color:var(--theme-color-std-text)}:host(.display-none){display:none}:host([disabled]){pointer-events:none;cursor:default}`;
const SelectItem = class extends Mixin(...DefaultMixins, FocusVisibleMixin, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Displayed name of the item
   */
  label;
  /**
   * The value of the item.
   * Important: The select component uses string values to handle selection and will call toString() on this value.
   * Therefor a string should be passed to value to prevent unexpected behavior.
   */
  value;
  /**
   * Flag indicating whether the item is selected
   */
  selected = false;
  /**
   * Disable the item. A disabled item cannot be selected via mouse or keyboard
   * and is excluded from the focusable items of the parent ix-select.
   *
   * @since 5.1.0
   */
  disabled = false;
  /**
   * @internal
   */
  hover = false;
  /**
   * Item clicked
   */
  itemClick;
  componentLoaded = false;
  dropdownItemRef = makeRef();
  inheritAriaAttributes = {};
  componentDidLoad() {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement);
  }
  /** @internal */
  async getDropdownItemElement() {
    return this.dropdownItemRef.waitForCurrent();
  }
  componentDidRender() {
    if (this.value === void 0 || this.value === null) {
      console.warn("ix-select-item must have a `value` property");
    }
    this.componentLoaded = true;
  }
  onValueChange(newValue, oldValue) {
    if (this.componentLoaded) {
      this.hostElement.dispatchEvent(new IxSelectItemValueChangeEvent({
        newValue,
        oldValue
      }));
    }
  }
  labelChange(newValue, oldValue) {
    if (this.componentLoaded) {
      this.hostElement.dispatchEvent(new IxSelectItemLabelChangeEvent({
        newValue,
        oldValue
      }));
    }
  }
  render() {
    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      "aria-label": this.inheritAriaAttributes["aria-label"] ?? this.label
    };
    return h(Host, { key: "bcb2d51a1d4c033add92e5f2d8cbb9621029b4e1", ...ariaAttributes, id: this.getHostElementId(), disableAriaSelectHandling: true, class: {
      [IX_FOCUS_VISIBLE]: true
    }, "aria-hidden": "true", role: "presentation" }, h("ix-dropdown-item", { key: "b8c5ef9d0b587ee572afb6e9006a5a8961ae7c1b", "aria-hidden": "true", itemRole: "option", class: {
      "select-item-checked": this.selected,
      [IX_FOCUS_VISIBLE_ACTIVE]: this.ixFocusVisible
    }, checked: this.selected, disabled: this.disabled, label: this.label ? this.label : this.value, ref: this.dropdownItemRef }));
  }
  static get watchers() {
    return {
      "ixFocusVisible": [{
        "$internal_checkAriaSelected": 0
      }],
      "value": [{
        "onValueChange": 0
      }],
      "label": [{
        "labelChange": 0
      }]
    };
  }
};
SelectItem.style = selectItemCss();
export {
  FilterChip as ix_filter_chip,
  SelectItem as ix_select_item
};
