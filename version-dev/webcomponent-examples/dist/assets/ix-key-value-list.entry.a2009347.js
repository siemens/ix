import { r as registerInstance, h, H as Host } from "./index.18e27e15.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { key: "b346685746d0ea0221393886ebf61517f204dbea", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "ed17d8ac388731262d318c905c11254379aa8d14" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
