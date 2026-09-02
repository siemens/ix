import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-DiyDw8WE.js";
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
    return h(Host, { key: "9ed877afbc33881c285a427da2fac69c10f37a72" }, h("ix-tab-panel", { key: "3187a5e84b0180703669b6fc4f5cdb74bfaeb848", tabKey: this.tabKey }, h("slot", { key: "f4f8e3083def0f748fb75b2cd427dd98e0f1b42e" })));
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
