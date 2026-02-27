import { r as registerInstance, h, H as Host } from "./global-DXu0UsM0.js";
const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelPosition = "top";
  }
  render() {
    return h(Host, { key: "885f0840349f6652843bea49fad0c9b14619ce0a", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "04f836927163a04a35a18dc763c260f8554e4cf1", name: this.icon, size: "24", class: "keyValue__icon", "aria-label": this.ariaLabelIcon }), h("div", { key: "086d98c12d490a6b58d65418b3119481a5e9c688", class: "keyValue__content" }, h("div", { key: "68b97fad8849a5f96240ec988fb818b39b62eaf4", class: "content__label" }, this.label), h("div", { key: "da772609559d2635ffbaa60a41c9ac72271c39c5", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss;
export {
  KeyValue as ix_key_value
};
