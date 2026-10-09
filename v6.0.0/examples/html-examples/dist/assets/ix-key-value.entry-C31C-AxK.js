import { r as registerInstance, h, H as Host } from "./global-CU4RCWGK.js";
const keyValueCss = () => `@charset "UTF-8";:host{--ix-key-value-label--color:var(--si-sys-color-text-secondary);--ix-key-value--border-color:var(--si-sys-color-border-4)}:host{--ix-key-value--gap:var(--si-sys-sizing-spacing-x-60);--ix-key-value-icon--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-key-value-column--padding:var(--si-sys-sizing-spacing-y-40) 0;--ix-key-value-column-content--padding:var(--si-sys-sizing-spacing-y-10) 0;--ix-key-value-row--padding:var(--si-sys-sizing-spacing-y-20) 0;--ix-key-value-content--gap:var(--si-sys-sizing-spacing-x-60);--ix-key-value-row-content--padding:var(--si-sys-sizing-spacing-y-30) 0;--ix-key-value-content-label--min-width:calc(     var(--si-sys-sizing-size-140) + var(--si-sys-sizing-spacing-x-40)   );--ix-key-value--border-width:var(--si-sys-sizing-border-width-default)}:host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:var(--ix-key-value--gap)}:host(.keyValue) .keyValue__icon{padding:var(--ix-key-value-icon--padding)}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.keyValue) .keyValue__content .content__label{color:var(--ix-key-value-label--color)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:var(--ix-key-value-column--padding);border-bottom:var(--ix-key-value--border-width) solid var(--ix-key-value--border-color)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:var(--ix-key-value-column-content--padding)}:host(.keyValue.keyValue--row){padding:var(--ix-key-value-row--padding)}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:var(--ix-key-value-content--gap);align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:var(--ix-key-value-row-content--padding)}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:var(--ix-key-value-content-label--min-width)}`;
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
    return h(Host, { key: "9e0f3ed0c520bc4a7f15d4ec142f52fc7e8834a3", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "67df0cd1737666c49f5eca90167276d2f6f5cd4a", name: this.icon, class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "93fa6453cde65e0c19a5ff77026470fbfec23073", class: "keyValue__content" }, h("div", { key: "b3d28dd38f8047ae307689c66d1705cb76eef823", class: "content__label" }, this.label), h("div", { key: "74009c8e6a577ff5e4b768d55f3d410ec1ce263d", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss();
export {
  KeyValue as ix_key_value
};
