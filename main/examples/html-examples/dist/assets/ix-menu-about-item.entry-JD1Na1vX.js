import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-CqiPKlnE.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-B1RUl715.js";
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
    return h(Host, { key: "d015e321b80e809c67993949776701928dc9736f" }, h("ix-tab-panel", { key: "d3376714a24ffc11cb9c907fd1eeeadae598e4b5", tabKey: this.tabKey }, h("slot", { key: "0c9170cf9838bc809071d486ffc83d5b07af6a92" })));
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
