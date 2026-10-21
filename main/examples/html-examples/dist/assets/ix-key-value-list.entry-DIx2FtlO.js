import { r as registerInstance, h, H as Host } from "./global-DZv3C4wT.js";
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
    return h(Host, { key: "11a829b9c6a3c62a22222e9d771e0e0b9c15d1c4", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "61aab4c2e56c0a6d23de878941649b55c917fb34" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
