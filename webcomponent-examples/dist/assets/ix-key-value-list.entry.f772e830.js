import { r as registerInstance, h, H as Host } from "./global.8b5b8f81.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const IxKeyValueListStyle0 = keyValueListCss;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = void 0;
  }
  render() {
    return h(Host, { key: "754310ec87f8ab82d3cddc18beea932d72136d73", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "2dc0039fc53a720330b1e9b175ff668b72dd80f6" }));
  }
};
KeyValueList.style = IxKeyValueListStyle0;
export {
  KeyValueList as ix_key_value_list
};
