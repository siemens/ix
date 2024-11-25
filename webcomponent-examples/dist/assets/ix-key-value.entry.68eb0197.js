import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
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
    return h(Host, { key: "44e8dc174bc1098bbb777be9e35a09a5d4590c0a", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "f1aa9eddfeeb2abca0865660bfa86fbf57fa9e45", name: this.icon, size: "24", class: "keyValue__icon" }), h("div", { key: "09373c9da3a2554872e7c4de98f622c12ae29d2d", class: "keyValue__content" }, h("div", { key: "ac0959a100949b8cc4c277ff94597f334a980437", class: "content__label" }, this.label), h("div", { key: "e9ae9c4098d307801376b4e341ba9c42d806e106", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = IxKeyValueStyle0;
export {
  KeyValue as ix_key_value
};
