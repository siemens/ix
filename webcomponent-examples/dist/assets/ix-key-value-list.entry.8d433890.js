import { r as registerInstance, h, H as Host } from "./index.8b3d29f9.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { key: "8d21b4ebf885e1ca21fddb7c6dc94b7d46940f95", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "782c4a007ea866740087f022bf7c6661aa8eea5a" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
