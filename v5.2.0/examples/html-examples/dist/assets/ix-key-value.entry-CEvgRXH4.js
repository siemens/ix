import { r as registerInstance, h, H as Host } from "./global-CSIWS5Ku.js";
const keyValueCss = () => `:host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}`;
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Optional key value icon
   */
  icon;
  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  ariaLabelIcon;
  /**
   * Key value label
   */
  label;
  /**
   * Optional key value label position - 'top' or 'left'
   */
  labelPosition = "top";
  /**
   * Optional key value text value
   */
  value;
  render() {
    return h(Host, { key: "1fbc18c56d05895966689e648f811a960de02553", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "41c8f87cd6eef80a2b7d84e9e45b16a5e07d8593", name: this.icon, size: "24", class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "654ef8c2e2424924ba834c9928b52f4d5de9c1ba", class: "keyValue__content" }, h("div", { key: "48b089d47758c99675c4fd1461f34baf54aad561", class: "content__label" }, this.label), h("div", { key: "518943ef95244b2721067805cf4893b04992da70", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss();
export {
  KeyValue as ix_key_value
};
