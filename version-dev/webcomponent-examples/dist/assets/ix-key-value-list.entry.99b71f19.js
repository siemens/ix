import { r as registerInstance, h, H as Host } from "./index.dde3fc09.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { key: "46642ccf687b608a8db31936f492e56c6e360cb7", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "9888ad2f28136d0f354e1d14087fbcdd4d65c946" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
