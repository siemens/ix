import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-DNhYiKCd.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-DHwrjENv.js";
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
    return h(Host, { key: "d1ff0f80e040207a5ea574efee12c984bd1a9020" }, h("ix-tab-panel", { key: "fa689667406d3a07da219a4fa00d58af6d0386dd", tabKey: this.tabKey }, h("slot", { key: "609836938835ba7315bed5e09137f7d686ac53d5" })));
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
