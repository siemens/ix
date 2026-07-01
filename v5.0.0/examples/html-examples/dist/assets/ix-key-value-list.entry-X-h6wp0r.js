import { r as registerInstance, h, H as Host } from "./global-Cx3A0XQN.js";
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
    return h(Host, { key: "fbd6b64a367c13a3cfeb7d802a7d579f3ecc4623", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "fa1030e65797c16bd81bf18eaa0500b00ea8cb11" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
