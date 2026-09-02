import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const keyValueListCss = () => `@charset "UTF-8";:host{--ix-key-value-list-item--border-color:var(--si-sys-border-4);--ix-key-value-list-item--background--alternating:var(--si-sys-background-1)}:host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--ix-key-value-list-item--border-color)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--ix-key-value-list-item--background--alternating)}`;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Optional striped key value list style
   */
  striped = false;
  render() {
    return h(Host, { key: "f8d6cfca1a867bec50aa6ddb546901f00a8c3d89", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "a9c7aab4e4b1d650edb4d244017dd0bf30490778" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
