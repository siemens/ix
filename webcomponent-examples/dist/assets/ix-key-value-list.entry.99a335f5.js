import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { key: "fa00b89511cc190656652267cb8248aa962a787c", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "43a50b29be3802511b623891ea26e8f1495461b0" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
