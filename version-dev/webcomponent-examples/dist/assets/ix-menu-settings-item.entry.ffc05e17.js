import { r as registerInstance, c as createEvent, h, H as Host } from "./index.ff5c8c71.js";
const menuSettingsItemCss = ":host{display:block}";
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
    return h(Host, null, h("slot", null));
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
