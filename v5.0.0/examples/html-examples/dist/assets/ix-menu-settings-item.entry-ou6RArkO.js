import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-Cx3A0XQN.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-DLXcZW44.js";
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
    return h(Host, { key: "79270b08a47cb3334b995e470af9a8d0ba1858d0" }, h("ix-tab-panel", { key: "f9e58553b26a833db5819413cd9a4a8501de6796", tabKey: this.tabKey }, h("slot", { key: "79330fb164503f26ffe4c88a59e3820862a61c5f" })));
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
