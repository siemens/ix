import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-P-1aad6e.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-CrOskIUC.js";
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
    return h(Host, { key: "3b2720e07e73d5205ec8594112e5f51f983f071d" }, h("ix-tab-panel", { key: "cb6af05d37e4f25aa440eb71bab47e8900f8e93c", tabKey: this.tabKey }, h("slot", { key: "532d285704755387752fae051cb94d16b062c858" })));
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
