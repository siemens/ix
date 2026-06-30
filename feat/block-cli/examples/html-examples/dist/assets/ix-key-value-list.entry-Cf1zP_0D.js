import { r as registerInstance, h, H as Host } from "./global-F68Qu5y3.js";
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
    return h(Host, { key: "530da2bb270e5fd2c239dcb78c34169f2217d7ad", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "6f1baa36215145e428d594334a25c8103532079a" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
