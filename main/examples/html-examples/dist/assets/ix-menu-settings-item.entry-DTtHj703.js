import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-DPf-m4l1.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-CGQwdhZ-.js";
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
    return h(Host, { key: "4c4a8f48db364aa498b86a8c965c10d08a66e88e" }, h("ix-tab-panel", { key: "f9a9f8c7ec7a8f61ef852e616ca5336b0185a95d", tabKey: this.tabKey }, h("slot", { key: "5641690912153691094cd796b235e82a64cbbf7a" })));
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
