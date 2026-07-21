import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-CRrZCTD3.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-CYp9Ronz.js";
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
    return h(Host, { key: "c6306dabda11bdfdf519320ce89eb009b50d3c77" }, h("ix-tab-panel", { key: "e31eafb131b148bcc66899ceee72887bf961f485", tabKey: this.tabKey }, h("slot", { key: "7a8ed3080859e684c1f573e4bdc997c9902ae5e0" })));
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
