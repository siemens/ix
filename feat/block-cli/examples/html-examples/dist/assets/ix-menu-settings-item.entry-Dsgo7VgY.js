import { M as Mixin, a as registerInstance, c as createEvent, h, H as Host } from "./global-DX2OdaCL.js";
import { B as BaseTabMixin } from "./tab.mixin-2hU1i4Yk-BN1-AAu5.js";
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
    return h(Host, { key: "8e3648fc2d1a95f5ae6bae557df77544183980c4" }, h("ix-tab-panel", { key: "731b83b26520bc07a61c27699ae19095f71098f5", tabKey: this.tabKey }, h("slot", { key: "a9452a0ea918f74ad222d2b5d1da6a74a387e283" })));
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
