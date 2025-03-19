import { r as registerInstance, h, H as Host } from "./global.aa474cf6.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "7d8dd7871cd6618bc773f7d71feea75fa0506d8e", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "1ad1d9d4acf4bdcbe766bb40583d4fe6e1fe60f3" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
