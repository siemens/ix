import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-CU4RCWGK.js";
import { B as BaseTabMixin } from "./tab.mixin-CEGZUg-G-UBKZbcrd.js";
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
    return h(Host, { key: "a5b938bb17f2b1909c8fa8b39a68b77c0932884b" }, h("ix-tab-panel", { key: "e845f54b8d344ba57ad9cdb960b48ec519dec94c", tabKey: this.tabKey }, h("slot", { key: "d18df6181b7fe9d90c508f5ee694720231f3b392" })));
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
