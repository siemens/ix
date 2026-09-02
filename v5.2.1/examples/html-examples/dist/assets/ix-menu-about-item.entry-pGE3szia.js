import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-DiyDw8WE.js";
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
    return h(Host, { key: "15728eb77f2072524d09bfc79825d6a5ca199903" }, h("ix-tab-panel", { key: "17ebc4f4c12919992f08a6704a67ca1b17763cdf", tabKey: this.tabKey }, h("slot", { key: "6838d70ef4d79ec02c79304b1a2d752a060d181d" })));
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
