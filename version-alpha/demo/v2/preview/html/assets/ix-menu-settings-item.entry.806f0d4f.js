import { r as registerInstance, c as createEvent, h, H as Host } from "./global.aa474cf6.js";
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
    return h(Host, { key: "85b9c341a93a6a5d2c401d7c998e9d6701c04854" }, h("slot", { key: "ac7e21786837e0a89dea3523d4c5e189e3f2fea6" }));
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
