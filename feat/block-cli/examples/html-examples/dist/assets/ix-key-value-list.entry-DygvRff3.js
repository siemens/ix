import { r as registerInstance, h, H as Host } from "./global-Cn4dOqNA.js";
const keyValueListCss = ":host(.keyValueList) ::slotted(ix-key-value){border-bottom:1px solid var(--theme-color-weak-bdr)}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--theme-color-ghost-alt)}";
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.striped = false;
  }
  render() {
    return h(Host, { key: "8ac8c1edacddbe11072e692c165c338bdaa6fcdf", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "844c573286e6022f4d3f53086b584425306f7f1e" }));
  }
};
KeyValueList.style = keyValueListCss;
export {
  KeyValueList as ix_key_value_list
};
