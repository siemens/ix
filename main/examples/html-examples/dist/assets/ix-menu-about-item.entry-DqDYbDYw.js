import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-C-hoZ9qs.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-CRwnLS25.js";
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
    return h(Host, { key: "346ea7c241a66ee55c929f9c925ae44f2615648c" }, h("ix-tab-panel", { key: "14f924d482cd93ea14cc6fc9feb919d3270da17d", tabKey: this.tabKey }, h("slot", { key: "2e15e173dc67edb7c1ec8b61341877ad0124db7f" })));
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
