import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-F68Qu5y3.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-CFW3DMx1.js";
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
    return h(Host, { key: "f09e16a37cb8bccd62ae7af807f1dbd51893e98b" }, h("ix-tab-panel", { key: "03765583d0c50a882f98858840390af798e1c558", tabKey: this.tabKey }, h("slot", { key: "bf7539e559877e733c13f7f52028d45405f17fd7" })));
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
