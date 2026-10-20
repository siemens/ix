import { r as registerInstance, h, H as Host } from "./global-DzKOIL47.js";
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
    return h(Host, { key: "df76acca3b11476c3925bb7ab3c2947c1a5bb978", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "02376e31169ed52df534e9e42a69ab671d2218b1", name: this.icon, class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "519b773339be76139c13a8391a164a19e29c6c62", class: "keyValue__content" }, h("div", { key: "00d37de43929dc99cc3c6bd3f1dd8eb9d677d58f", class: "content__label" }, this.label), h("div", { key: "b5d99d305ef497a0a615d807e8f23e267e3b5a5d", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss();
export {
  KeyValue as ix_key_value
};
