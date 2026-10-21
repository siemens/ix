import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-D_olgeRE.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-Dn6QDJ-X.js";
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
    return h(Host, { key: "38a916d9f963fc78f4b1dcd776f1ceb72247c874" }, h("ix-tab-panel", { key: "beb3415653062a59d3258d5abfdd040c646007d3", tabKey: this.tabKey }, h("slot", { key: "e491a020420afaec3c73842d4fad3a03e36ee4ad" })));
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
