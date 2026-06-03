import { a as registerInstance, h, H as Host } from "./global-DUJ9DtiD.js";
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
    return h(Host, { key: "1a7c62e7e09127b40f27e1a23542d8cf713409c4", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "2dbe70cd3168f162d76834a86baff8b364e8a1aa" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
