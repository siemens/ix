import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-fQJuTF8s.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-CHSA-9_f.js";
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
    return h(Host, { key: "3b54fa41bf4ec730e7e8e079078153f1feb7f381" }, h("ix-tab-panel", { key: "2c4cb87b71ee1d14aee2a2e00d13f4ac353b8f33", tabKey: this.tabKey }, h("slot", { key: "a0f24645351a4b5e765f15a9e6c2f9031f622ea6" })));
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
