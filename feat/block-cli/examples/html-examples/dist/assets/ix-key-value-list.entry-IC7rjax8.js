import { r as registerInstance, h, H as Host } from "./global-DXu0UsM0.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "272060edd4e32b4b051b7ff0e43d90a84a592d43", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "98adcfc2cf7bb07c3ca3f22b7024b7810c645f99" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
