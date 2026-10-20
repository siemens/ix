import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-DzKOIL47.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-BfXdOefq.js";
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
    return h(Host, { key: "1e12f00f5bd9d4e11ae569bfd06015fdaef54369" }, h("ix-tab-panel", { key: "7a14c4eb3dda83d3712722f36d18111383a5812e", tabKey: this.tabKey }, h("slot", { key: "646e28450d5fa11e05f8fb1572c665fd0f92d860" })));
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
