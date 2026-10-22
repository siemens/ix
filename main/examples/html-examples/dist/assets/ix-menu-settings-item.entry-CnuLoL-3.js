import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-DqdWS2Ng.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-BmAhn_LS.js";
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
    return h(Host, { key: "c25cad0bdedde24cbdf1b2ca8a717628e2f96285" }, h("ix-tab-panel", { key: "132fc80a3bdf29d1d65a674ad8e69cea12dff52b", tabKey: this.tabKey }, h("slot", { key: "2fccf9edca739bb2a2688a75343b502570a44bfd" })));
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
