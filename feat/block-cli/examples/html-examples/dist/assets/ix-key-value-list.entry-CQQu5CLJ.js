import { r as registerInstance, h, H as Host } from "./global-C8IWpzMv.js";
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
    return h(Host, { key: "9b08172eda892b85a72c391416e4056a82818147", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "bb74f58dabe39f9d51f90e3c2f9c4d18cf17d02c" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
