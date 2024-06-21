import { r as registerInstance, c as createEvent, h, H as Host } from "./global.8b5b8f81.js";
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
    return h(Host, { key: "ece4d8e415ca694383a7a2e3bd55733e43521143" }, h("slot", { key: "3da9723abce35580aa1d6382ff936887a538fe9e" }));
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
