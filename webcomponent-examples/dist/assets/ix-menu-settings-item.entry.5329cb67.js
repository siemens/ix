import { r as registerInstance, c as createEvent, h, H as Host } from "./global.9430376f.js";
const menuSettingsItemCss = ":host{display:block}";
const IxMenuSettingsItemStyle0 = menuSettingsItemCss;
const MenuSettingsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
    this.label = void 0;
  }
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-settings-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "95940cf98b7f75afe704575f7379d9debf6f0666" }, h("slot", { key: "d65510239d1f1d0d4dcfc88288fbad819a5ca942" }));
  }
  static get watchers() {
    return {
      "label": ["watchLabel"]
    };
  }
};
MenuSettingsItem.style = IxMenuSettingsItemStyle0;
export {
  MenuSettingsItem as ix_menu_settings_item
};
