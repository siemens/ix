import { r as registerInstance, h, H as Host } from "./global-DSse0xVy.js";
const keyValueListCss = () => `:host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}`;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Optional striped key value list style
   */
  striped = false;
  render() {
    return h(Host, { key: "80b9fb04677dbd4ce019632f8981f45de8ed396b", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "0a48fb37d41b8de6d9831f072222fa830c9dd745" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
