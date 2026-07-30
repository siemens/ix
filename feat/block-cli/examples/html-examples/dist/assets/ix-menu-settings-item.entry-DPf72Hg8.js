import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-J1r-v9CX.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-Dnq7pAkU.js";
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
    return h(Host, { key: "d71d7a4b0bcb7aa0d0f16dfb497942bed5296114" }, h("ix-tab-panel", { key: "27763dc094eb643cd3c25e30a7d33e4f6411b551", tabKey: this.tabKey }, h("slot", { key: "65f0f6f5ac5687db38f48adb2b0113d24463689a" })));
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
