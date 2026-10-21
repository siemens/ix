import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-D_olgeRE.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-Dn6QDJ-X.js";
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
    return h(Host, { key: "3adbd42dd0586398225fd6519a54b2721564e257" }, h("ix-tab-panel", { key: "0f53567f744c152d7f22a754652669cf497ba764", tabKey: this.tabKey }, h("slot", { key: "397c7adb3186b63f1e8ff44d7394b72313d9ca27" })));
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
