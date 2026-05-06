import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-Dfa5QLOG.js";
import { B as BaseTabMixin } from "./tab.mixin-2hU1i4Yk-CNnI76-6.js";
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
    return h(Host, { key: "0fb08779d5c8681bc167553f9f9a618e72f3f06c" }, h("ix-tab-panel", { key: "2e69024fcf33ae9538f32bb544329307b3c8fb7a", tabKey: this.tabKey }, h("slot", { key: "60eef5ef8f8946550a4ad0ea284684e14be657bb" })));
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
