import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-Dp-uZHvv.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-_9Zt0dza.js";
import "./preload-helper-UZRgTS1n.js";
const MenuAboutItem = class extends Mixin(BaseTabMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  /**
   * About Item label
   */
  label;
  /**
   * Label changed
   */
  labelChange;
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-about-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "2e97c293e91f3e15c9aa57d116c342699bcd57b4" }, h("ix-tab-panel", { key: "0cf1b13fd2c7df41d697dcaa9d7e2e1c83c68bad", tabKey: this.tabKey }, h("slot", { key: "aee8364a2d047efd6db0eb606ac8d508828e4ba8" })));
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
  MenuAboutItem as ix_menu_about_item
};
