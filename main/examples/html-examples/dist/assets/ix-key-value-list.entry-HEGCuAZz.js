import { r as registerInstance, h, H as Host } from "./global-BRajFsjN.js";
const keyValueListCss = () => `@charset "UTF-8";:host{--ix-key-value-list-item--border-color:var(--si-sys-color-border-4);--ix-key-value-list-item--background--alternating:var(--si-sys-color-background-1)}:host{--ix-key-value-list--border-width:var(--si-sys-sizing-border-width-default)}:host(.keyValueList) ::slotted(ix-key-value){border-bottom:var(--ix-key-value-list--border-width) solid var(--ix-key-value-list-item--border-color)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--ix-key-value-list-item--background--alternating)}`;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Optional striped key value list style
   */
  striped = false;
  render() {
    return h(Host, { key: "0bcd6d47d34a67eb88346338b13532d9bd65c68b", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "5622fbe047f19f5c69351ab257dab1d530cdb389" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
