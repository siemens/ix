import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const dropdownItemCss = ".sc-ix-dropdown-item-h{display:block;min-width:10rem}.icon-only.sc-ix-dropdown-item-h{min-width:0}.icon-only.sc-ix-dropdown-item-h .dropdown-item.sc-ix-dropdown-item{padding:0.25rem 0.5rem}.icon-only.sc-ix-dropdown-item-h .dropdown-item.sc-ix-dropdown-item:not(.disabled):not(:disabled):focus-visible{border-color:#199fff}.sc-ix-dropdown-item-h .checkmark.sc-ix-dropdown-item{position:absolute;left:0.5rem}.checked.sc-ix-dropdown-item-h{background-color:var(--theme-select-list-item--background--selected)}.sc-ix-dropdown-item-h .label.sc-ix-dropdown-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";

const DropdownItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemClick = createEvent(this, "itemClick", 7);
    /**
     * Display hover state
     */
    this.hover = false;
    /**
     * Disable item and remove event listeners
     */
    this.disabled = false;
    /**
     * Whether the item is checked or not. If true a checkmark will mark the item as checked.
     */
    this.checked = false;
  }
  /**
   * Internal usage only
   */
  async emitItemClick() {
    this.itemClick.emit(this.hostElement);
  }
  render() {
    return (h(Host, { class: {
        checked: this.checked,
        'icon-text': this.label !== undefined && this.icon !== undefined,
        'icon-only': this.label === undefined && this.icon !== undefined,
      } }, h("button", { class: {
        'dropdown-item': true,
        hover: this.hover,
        disabled: this.disabled,
      }, onClick: () => this.emitItemClick() }, this.checked ? (h("ix-icon", { class: "checkmark", name: "single-check", size: "16" })) : null, this.icon ? (h("span", { class: {
        glyph: true,
        [`glyph-${this.icon}`]: true,
      } })) : null, this.label ? h("span", { class: "label" }, this.label) : null, h("slot", null))));
  }
  get hostElement() { return this; }
  static get style() { return dropdownItemCss; }
}, [6, "ix-dropdown-item", {
    "label": [1],
    "icon": [1],
    "hover": [4],
    "disabled": [4],
    "checked": [4],
    "emitItemClick": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-dropdown-item", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-dropdown-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownItem);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { DropdownItem as D, defineCustomElement as d };
