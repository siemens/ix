import { r as registerInstance, h, H as Host } from "./index.b5e9a656.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", null));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
