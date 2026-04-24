import { r as registerInstance, h, H as Host } from "./global-B1t25MFd.js";
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
    return h(Host, { key: "4c39f890543185be43e42e793e892a34664e1008", class: { keyValueList: true, "keyValueList--striped": this.striped } }, h("slot", { key: "435a54fb3578f8935b65500d2f28025e6b1380c6" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
