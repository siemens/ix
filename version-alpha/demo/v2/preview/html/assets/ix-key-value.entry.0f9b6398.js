import { r as registerInstance, h, H as Host } from "./global.aa474cf6.js";
const keyValueCss = ":host(.keyValue){display:flex;flex-direction:row;align-items:center;gap:1rem}:host(.keyValue) .keyValue__icon{padding:0.25rem 0}:host(.keyValue) .keyValue__content{display:flex;flex-grow:1;align-items:flex-start}:host(.keyValue) .keyValue__content,:host(.keyValue) .keyValue__content .content__label,:host(.keyValue) .keyValue__content .content__value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%}:host(.keyValue) .keyValue__content .content__label{color:var(--theme-color-soft-text)}:host(.keyValue) .keyValue__content .content__value{width:100%}:host(.keyValue.keyValue--column){padding:0.5rem 0;border-bottom:1px solid var(--theme-color-soft-bdr)}:host(.keyValue.keyValue--column) .keyValue__content{flex-direction:column}:host(.keyValue.keyValue--column) .keyValue__content .content__label,:host(.keyValue.keyValue--column) .keyValue__content .content__value:not(.has-customValue){padding:2px 0}:host(.keyValue.keyValue--row){padding:0.25rem 0}:host(.keyValue.keyValue--row) .keyValue__content{flex-direction:row;gap:1rem;align-items:center}:host(.keyValue.keyValue--row) .keyValue__content .content__label,:host(.keyValue.keyValue--row) .keyValue__content .content__value:not(.has-customValue){padding:6px 0}:host(.keyValue.keyValue--row) .keyValue__content .content__label{min-width:8rem}";
const KeyValue = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelPosition = "top";
  }
  render() {
    return h(Host, { key: "56d07ea92ae483d5e01bd69b4062657df1e24dd6", class: `keyValue keyValue--${this.labelPosition === "top" ? "column" : "row"}` }, this.icon && h("ix-icon", { key: "1efbf65a72598d94983da8351dc30ec31098e5c5", name: this.icon, size: "24", class: "keyValue__icon" }), h("div", { key: "ad6c0511942410bceb233563c2abd44af22d53a2", class: "keyValue__content" }, h("div", { key: "4a53d43ee6748c872ba908744b909af87fa9a618", class: "content__label" }, this.label), h("div", { key: "6a92c9afbabc7cf22574d0302e2310a7178f2562", class: {
      content__value: true,
      "has-customValue": this.value === void 0
    } }, this.value !== void 0 ? this.value : h("slot", { name: "custom-value" }))));
  }
};
KeyValue.style = keyValueCss;
export {
  KeyValue as ix_key_value
};
