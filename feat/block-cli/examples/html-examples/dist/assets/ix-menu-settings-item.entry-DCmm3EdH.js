import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Cn4dOqNA.js";
const menuSettingsItemCss = ":host{display:block}";
const MenuSettingsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-settings-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "93bcd49368f3bcb45ca4405eb1f75d5a0699b784" }, h("slot", { key: "3d2fd58e28f27f3f8355dc915fc78e15fb64bf61" }));
  }
  static get watchers() {
    return {
      "label": ["watchLabel"]
    };
  }
};
MenuSettingsItem.style = menuSettingsItemCss;
export {
  MenuSettingsItem as ix_menu_settings_item
};
