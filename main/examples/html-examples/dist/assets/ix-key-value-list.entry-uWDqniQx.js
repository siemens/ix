import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DmPVhzFD.js";
import "./preload-helper-UZRgTS1n.js";
const keyValueListCss = () => `@charset "UTF-8";:host{--ix-key-value-list-item--border-color:var(--si-sys-color-border-4);--ix-key-value-list-item--background--alternating:var(--si-sys-color-background-1)}:host{--ix-key-value-list--border-width:var(--si-sys-sizing-border-width-default)}:host(.keyValueList) ::slotted(ix-key-value){border-bottom-width:var(--ix-key-value-list--border-width)}:host(.keyValueList) ::slotted(ix-key-value:not(.keyValue--no-divider)){border-bottom-color:var(--ix-key-value-list-item--border-color)}:host(.keyValueList.keyValueList--no-divider) ::slotted(ix-key-value){border-bottom-color:transparent}@media (forced-colors: active){:host(.keyValueList) ::slotted(ix-key-value.keyValue--no-divider),:host(.keyValueList.keyValueList--no-divider) ::slotted(ix-key-value){border-bottom-style:none;margin-bottom:var(--ix-key-value-list--border-width)}}:host(.keyValueList.keyValueList--striped) ::slotted(ix-key-value:nth-child(odd)){background:var(--ix-key-value-list-item--background--alternating)}`;
const KeyValueList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Optional striped key value list style
   */
  striped = false;
  /**
   * Hide the divider lines below all key value items.
   *
   * @since 6.0.0
   */
  hideDividers = false;
  render() {
    return h(Host, { key: "971c05a9cfe19b63251108eccd23aeff6b43d719", class: {
      keyValueList: true,
      "keyValueList--striped": this.striped,
      "keyValueList--no-divider": this.hideDividers
    } }, h("slot", { key: "cc641e60aaf2ea2ade75e6d577bf999d32dcffcb" }));
  }
};
KeyValueList.style = keyValueListCss();
export {
  KeyValueList as ix_key_value_list
};
