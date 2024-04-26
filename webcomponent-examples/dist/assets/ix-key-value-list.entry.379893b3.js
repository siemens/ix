import { r as registerInstance, h, H as Host } from "./index.918151cc.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { key: "93f8b95ef19267858e92d059f1b2840ecf3a2e5c", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "7a41ec73e964e56550283fc740bb752e54e09882" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
