import { r as registerInstance, h, H as Host } from "./global.7dd975c7.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "d4ab851c75a56ddf32af42d1d4bfe8c4f5b3d8be", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "9fdfc75d9d264eeee5f10fc71f1915418aa1550d" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
