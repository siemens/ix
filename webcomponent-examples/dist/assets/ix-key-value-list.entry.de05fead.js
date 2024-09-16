import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { key: "41f224f172d1d9ed9a1eab8c1e1c434fa2e4e1c9", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "400532fe69d357f8bde037257f4397723c8129a0" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
