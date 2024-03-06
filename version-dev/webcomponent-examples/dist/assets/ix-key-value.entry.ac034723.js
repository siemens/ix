import { r as registerInstance, h, H as Host } from "./index.06e375ce.js";
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
    return h(Host, { key: "8223aa74048180df2c252d63f590902aa8a16562", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { name: this.icon, size: "24", class: "keyValue__icon" }), h("div", { key: "1f9edfe06188514b7dcb56b008ac563773219aac", class: "keyValue__content" }, h("div", { key: "9c1fcf4cc1b9013866283d77074349a7e9669194", class: "content__label" }, this.label), h("div", { key: "0748ee055c661f1c3652941e1e76c5e94c1f53ad", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = IxKeyValueStyle0;
export {
  KeyValue as ix_key_value
};
