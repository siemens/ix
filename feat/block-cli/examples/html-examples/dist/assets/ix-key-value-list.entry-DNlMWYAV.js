import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
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
    return h(Host, { key: "9187278f16a615c841ada679fd18b0719363da3c", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "b27129c974e7ea231661cf4e8326116dc20c336d" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
