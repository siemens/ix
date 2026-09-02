import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const keyValueCss = () => `@charset "UTF-8";:host{--ix-key-value-label--color:var(--si-sys-text-secondary);--ix-key-value--border-color:var(--si-sys-border-4)}:host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.keyValue) .keyValue__content .content__label{color:var(--ix-key-value-label--color)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--ix-key-value--border-color)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}`;
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
    return h(Host, { key: "235e110b5d6daddd90553d0bd1074c6fd4d0ad08", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "03736402e529a00f0ac3f5777616b9b923735a8b", name: this.icon, size: "24", class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "c2860dcf90ca0674098ef53a24da09adceee140f", class: "keyValue__content" }, h("div", { key: "ced4413a40eef16cca10bf51ebb9a9e88ea8b8d9", class: "content__label" }, this.label), h("div", { key: "3b1c7d00b2ff91092ad18cd7052a47582d56e423", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss();
export {
  KeyValue as ix_key_value
};
