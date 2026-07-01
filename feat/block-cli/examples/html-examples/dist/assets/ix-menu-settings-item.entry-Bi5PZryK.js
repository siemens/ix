import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-C8IWpzMv.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-C0-Pxbn4.js";
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
    return h(Host, { key: "5eecb87ce886eddaffd04bd2e7eef83b41d22c7a" }, h("ix-tab-panel", { key: "87e11e280fd2a65e6af9bfe2468f683dc2855b44", tabKey: this.tabKey }, h("slot", { key: "573da2e120a7c5dafc2f5362a33e6d21fafd6aa5" })));
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
