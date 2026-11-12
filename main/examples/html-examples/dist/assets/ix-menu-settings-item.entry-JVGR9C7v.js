import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-BfsU3hSZ.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-C0svn8cf.js";
import "./preload-helper-UZRgTS1n.js";
const MenuSettingsItem = class extends Mixin(BaseTabMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  /**
   * Settings Item label
   */
  label;
  /**
   * @internal
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
    return h(Host, { key: "b61e0c953c59ce3e9cc3089948d5a702d0f83f1b" }, h("ix-tab-panel", { key: "7b2d549939d38f65fb3c00ae5cd13aa626ae13f7", tabKey: this.tabKey }, h("slot", { key: "fb3c46e5e00c8a95bb71589112aaf74fb847d1d1" })));
  }
  static get watchers() {
    return {
      "label": [{
        "watchLabel": 0
      }]
    };
  }
};
export {
  MenuSettingsItem as ix_menu_settings_item
};
