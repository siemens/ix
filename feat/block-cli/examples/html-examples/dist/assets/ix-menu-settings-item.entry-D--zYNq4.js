import { r as registerInstance, c as createEvent, h, H as Host } from "./global-C_dy4gBz.js";
const menuSettingsItemCss = () => `:host{display:block}`;
const MenuSettingsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  /**
   * Settings Item label
   */
  label;
  /**
   * Label changed
   */
  labelChange;
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-settings-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "69dac244a2c3b427237e8dceec64fad9c16600e9" }, h("slot", { key: "ccfc87d1f061f0d4195f943dec3782b655626aae" }));
  }
  static get watchers() {
    return {
      "label": [{
        "watchLabel": 0
      }]
    };
  }
};
MenuSettingsItem.style = menuSettingsItemCss();
export {
  MenuSettingsItem as ix_menu_settings_item
};
