import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-cTztV9I4.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-BrsblVF6.js";
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
    return h(Host, { key: "1c9449c5b5601b534e24a16f35d1a3af2b32e2df" }, h("ix-tab-panel", { key: "38cc958152e0708d8f78f10e03e7d53df7f42240", tabKey: this.tabKey }, h("slot", { key: "3d5237b311894b7b4984d99abf3267247d304b0f" })));
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
