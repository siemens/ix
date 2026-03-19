import { r as registerInstance, h, H as Host } from "./global-C_dy4gBz.js";
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
    return h(Host, { key: "92288773924731843108fddde8a0459b50c64201", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "b836c2ec4e72776712e6d5061f233ecb9c06ac4f" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
