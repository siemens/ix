import { r as registerInstance, h, H as Host } from "./global-J1r-v9CX.js";
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
    return h(Host, { key: "d4b2a29d4fd7dba6897a4fec53213b829b1506ac", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "a03d330d077140250f8f2d22eff0b6f872da772f" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
