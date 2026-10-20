import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-DzKOIL47.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-BfXdOefq.js";
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
    return h(Host, { key: "5f9293cf2d38f229c8139c75e30c2e900e584988" }, h("ix-tab-panel", { key: "93ad2d2526ac0d3795c7fee1bce6c82c3680e2af", tabKey: this.tabKey }, h("slot", { key: "b16a6fa94dd05dbd867f11e1501ea882826dc41f" })));
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
