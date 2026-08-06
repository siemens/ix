import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-DSse0xVy.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-CSDJeCNS.js";
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
    return h(Host, { key: "b8fa6de32062b801810c5766d84be794988ffc6b" }, h("ix-tab-panel", { key: "bad5b262ec57b961c8e4761bb0ad0da1656f7b35", tabKey: this.tabKey }, h("slot", { key: "b23a32a3e080406a3db30453783f28fefc699a4c" })));
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
