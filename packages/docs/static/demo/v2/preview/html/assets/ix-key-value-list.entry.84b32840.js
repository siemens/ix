import { r as registerInstance, h, H as Host } from "./global.e92797ea.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "fe4120265311e472df052701a5f91112d42f4fe6", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "f2cb23adc21136d36cf9c32bf1496a4aceaa9c3b" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
