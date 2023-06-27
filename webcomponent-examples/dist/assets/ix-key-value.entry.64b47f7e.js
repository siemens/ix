import { r as registerInstance, h, H as Host } from "./index.c87d935b.js";
const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;align-items:flex-start}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = void 0;
    this.label = void 0;
    this.labelPosition = "top";
    this.value = void 0;
  }
  render() {
    return h(Host, { class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { name: this.icon, size: "24", class: "keyValue__icon" }), h("div", { class: "keyValue__content" }, h("div", { class: "content__label" }, this.label), h("div", { class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss;
export {
  KeyValue as ix_key_value
};
