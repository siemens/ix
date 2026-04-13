import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CtBDOAVb.js";
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
    return h(Host, { key: "2c46c471680f6a653d64858cec0f991d9a557c02" }, h("slot", { key: "e840ca9e900cd45d31cbf41fcafa3e1feb4757a7" }));
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
