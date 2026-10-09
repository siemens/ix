import { r as registerInstance, h, H as Host } from "./global-CU4RCWGK.js";
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
    return h(Host, { key: "5e8317bb9504cb05239bd8ed836bd774e6bc4504", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "a71fda72b7c09bcd6b94f00af1e98c1f619be66c" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
