import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const IxKeyValueStyle0 = keyValueCss;
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = void 0;
    this.label = void 0;
    this.labelPosition = "top";
    this.value = void 0;
  }
  render() {
    return h(Host, { key: "8431e1a89798f462874f9357d36bd0535c19da6c", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "193efc04890c932b8f5c0d075539dec5f49dc37c", name: this.icon, size: "24", class: "keyValue__icon" }), h("div", { key: "8fe5d19dd71dab858d1b70689649e9c50ba610a2", class: "keyValue__content" }, h("div", { key: "d8b2eee83899e12fe88afb3e453ca1a00560a200", class: "content__label" }, this.label), h("div", { key: "b0aef82462c4dbdd4cc0f0b878b5684f7154cb8f", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = IxKeyValueStyle0;
export {
  KeyValue as ix_key_value
};
