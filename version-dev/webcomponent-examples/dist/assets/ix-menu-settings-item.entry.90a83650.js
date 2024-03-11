import { r as registerInstance, c as createEvent, h, H as Host } from "./index.a3ddea4c.js";
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
    return h(Host, { key: "16ae09324b5ce5e94886e7738cfee131ed8c711c" }, h("slot", { key: "fc064333e928f4b54a4ea9d3f0849ad27964a72d" }));
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
