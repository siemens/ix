import { r as registerInstance, c as createEvent, g as getElement, h, H as Host, M as Mixin } from "./global-CU4RCWGK.js";
import { $ as iconCloseSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
import { I as IX_FOCUS_VISIBLE_ACTIVE, a as IX_FOCUS_VISIBLE } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { F as FocusVisibleMixin } from "./focus-visible.mixin-82Sy1EJj-BNSkEnIy.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const filterChipCss = () => `@charset "UTF-8";:host{--ix-filter-chip--background:transparent;--ix-filter-chip--border-color--disabled:var(--si-sys-color-border-3);--ix-filter-chip--color--disabled:var(--si-sys-color-text-disabled);--ix-filter-chip--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-filter-chip--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-filter-chip-primary-outline--border-color:var(--si-sys-color-border-accent);--ix-filter-chip-primary-outline--border-color--active:var(--si-sys-color-border-accent-active);--ix-filter-chip-primary-outline--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-filter-chip-primary-outline--color:var(--si-sys-color-border-accent);--ix-filter-chip-primary-outline--color--active:var(--si-sys-color-border-accent-active);--ix-filter-chip-primary-outline--color--hover:var(--si-sys-color-border-accent-hover)}:host{--ix-filter-chip--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-filter-chip-icon--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-filter-chip-disabled--padding-right:var(--si-sys-sizing-spacing-x-40);--ix-filter-chip-hide-close-button-readonly--padding-right:var(--si-sys-sizing-spacing-x-40);--ix-filter-chip--border-width:var(--si-sys-sizing-border-width-default);--ix-filter-chip--height:var(--si-sys-sizing-size-70);--ix-filter-chip--border-radius:var(--si-sys-sizing-spacing-x-90);--ix-filter-chip-slot-container--line-height:var(--si-sys-sizing-size-70);--ix-filter-chip-icon--icon-size:var(--si-sys-sizing-size-70)}:host{display:inline-flex;align-items:center;justify-content:space-between;height:var(--ix-filter-chip--height);padding-left:var(--ix-filter-chip--padding-left);border:var(--ix-filter-chip--border-width) solid var(--ix-filter-chip-primary-outline--border-color);border-radius:var(--ix-filter-chip--border-radius);background-color:var(--ix-filter-chip--background);color:var(--ix-filter-chip-primary-outline--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:var(--ix-filter-chip-slot-container--line-height);min-width:0}:host .slot-container :host-context(.disabled){background-color:var(--ix-filter-chip--background);border-color:var(--ix-filter-chip--border-color--disabled);color:var(--ix-filter-chip--color--disabled)}:host ix-icon-button{height:var(--ix-filter-chip-icon--icon-size);margin-left:var(--ix-filter-chip-icon--margin-left)}:host ix-icon-button:not(.disabled):not(:disabled):focus-visible{outline:none}:host(.disabled){border:var(--ix-filter-chip--border-width) solid var(--ix-filter-chip--border-color--disabled);color:var(--ix-filter-chip--color--disabled);padding-right:var(--ix-filter-chip-disabled--padding-right);cursor:default}:host(.readonly),:host(.hide-close-button){padding-right:var(--ix-filter-chip-hide-close-button-readonly--padding-right)}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:hover:not(.disabled):not(:disabled)){background-color:var(--ix-filter-chip--background--hover);border-color:var(--ix-filter-chip-primary-outline--border-color--hover);color:var(--ix-filter-chip-primary-outline--color--hover)}:host(:not(.disabled):not(:disabled)){cursor:pointer}:host(:active:not(.disabled):not(:disabled)){background-color:var(--ix-filter-chip--background--active);border-color:var(--ix-filter-chip-primary-outline--border-color--active);color:var(--ix-filter-chip-primary-outline--color--active)}`;
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
   * If true the close button will not be rendered.
   * Primarily used for overflow chip.
   *
   */
  hideCloseButton = false;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelCloseIconButton;
  /**
   * Close clicked
   */
  closeClick;
  slotText = "";
  slotObserver;
  connectedCallback() {
    this.slotText = this.hostElement.textContent ?? "";
    this.slotObserver = new MutationObserver(() => {
      this.slotText = this.hostElement.textContent ?? "";
    });
    this.slotObserver.observe(this.hostElement, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    this.slotObserver?.disconnect();
  }
  onCloseClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeClick.emit();
  }
  render() {
    return h(Host, { key: "d3162a456f63e55bed7108301ac9fe0a3bf1e236", class: {
      disabled: this.disabled,
      readonly: this.readonly,
      "hide-close-button": this.hideCloseButton
    }, title: this.slotText }, h("div", { key: "c74e5dd865c99a9b57c9842448890be819becb3b", class: "slot-container" }, h("slot", { key: "a94269ec5b2bd3c2fb17c8cdf56cd5b9050a8e45" })), !this.disabled && !this.readonly && !this.hideCloseButton ? h("ix-icon-button", { variant: "tertiary", oval: true, icon: iconCloseSmall, size: "16", disabled: this.disabled, onClick: (event) => {
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
const selectItemCss = () => `@charset "UTF-8";:host{--ix-select-item--color:var(--si-sys-color-text-primary);--ix-select-item--background--selected:var(--si-sys-color-background-selected)}:host{display:block;position:relative}:host>ix-dropdown-item{width:100%}:host ix-dropdown-item{color:var(--ix-select-item--color)}:host .select-item-checked{background-color:var(--ix-select-item--background--selected);--ix-dropdown-item-checkmark--color:var(--ix-select-item--color)}:host(.display-none){display:none}:host([disabled]){pointer-events:none;cursor:default}`;
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
    return h(Host, { key: "3630568aa50d0240b8e98f6e9a92c26ee7d1c6e1", ...ariaAttributes, id: this.getHostElementId(), disableAriaSelectHandling: true, class: {
      [IX_FOCUS_VISIBLE]: true
    }, "aria-hidden": "true", role: "presentation" }, h("ix-dropdown-item", { key: "656a7297fb8b078283ecbbabf67d1994f929f4ee", "aria-hidden": "true", itemRole: "option", class: {
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
