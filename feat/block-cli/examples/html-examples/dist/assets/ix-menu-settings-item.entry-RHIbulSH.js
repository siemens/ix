import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-Dfa5QLOG.js";
import { B as BaseTabMixin } from "./tab.mixin-2hU1i4Yk-CNnI76-6.js";
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
    return h(Host, { key: "b51fdab7d0973597ef592dd81b712eba184f694f" }, h("ix-tab-panel", { key: "cb6789d2e4896fe4973fddbc4d4cd1984bf98c02", tabKey: this.tabKey }, h("slot", { key: "da92fd687d5f404abe6fbd08bd4bab038c02be90" })));
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
