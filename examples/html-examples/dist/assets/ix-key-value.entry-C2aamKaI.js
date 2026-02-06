import { r as registerInstance, h, H as Host } from "./global-wi9VneMU.js";
const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelPosition = "top";
  }
  render() {
    return h(Host, { key: "ee855752985c8321f4f9608cb957acd093293a9f", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "6bfb94d5df575189c0df6e86cd65ea25a2dddecc", name: this.icon, size: "24", class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "028c1ca00511298ae99c1088a2800c0b7ccd97bd", class: "keyValue__content" }, h("div", { key: "1b61165be2e1462f3d18e325236f9175b3a84a0d", class: "content__label" }, this.label), h("div", { key: "d778bac4980281cce97bade4247b8f3b62191e1b", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss;
export {
  KeyValue as ix_key_value
};
