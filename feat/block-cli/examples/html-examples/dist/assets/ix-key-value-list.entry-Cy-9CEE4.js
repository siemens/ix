import { r as registerInstance, h, H as Host } from "./global-CRrZCTD3.js";
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
    return h(Host, { key: "b66516c3463768940dfc6a9b5700596e59127465", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "ff2c879222bc98869dc2561eddc2c69347d2a51d" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
