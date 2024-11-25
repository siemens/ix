import { r as registerInstance, c as createEvent, h, H as Host } from "./global.2bfd6008.js";
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
    return h(Host, { key: "7f91b18b72aa08bc94bca973e934a6b591d6466b" }, h("slot", { key: "56192b67632208075a544cfcb7970fe7d6e42cbc" }));
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
