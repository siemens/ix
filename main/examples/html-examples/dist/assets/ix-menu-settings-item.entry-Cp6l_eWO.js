import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-CHSA-9_f.js";
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
    return h(Host, { key: "4f8562fe81e882d50dd2c9e20317eee5a85c993e" }, h("ix-tab-panel", { key: "693c473c116ae37ded55bdfcbebbded21ddbd1b7", tabKey: this.tabKey }, h("slot", { key: "3b39a84822c31fff2fab41365a27d370ebff2bef" })));
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
