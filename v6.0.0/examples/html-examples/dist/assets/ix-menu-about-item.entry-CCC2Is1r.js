import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-CU4RCWGK.js";
import { B as BaseTabMixin } from "./tab.mixin-CEGZUg-G-UBKZbcrd.js";
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
    return h(Host, { key: "a816d0d8dfb9637d0947d51ca62d8df9a80f6128" }, h("ix-tab-panel", { key: "97252c6795dca6d6a712a8596f3101c06ee68e89", tabKey: this.tabKey }, h("slot", { key: "a3085560cc943faed688a93faa6b3047be980a46" })));
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
