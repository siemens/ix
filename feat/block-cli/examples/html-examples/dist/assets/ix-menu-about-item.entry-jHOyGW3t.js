import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-CRrZCTD3.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-CYp9Ronz.js";
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
    return h(Host, { key: "76bea55f25990e49809ff9409fb991fb3008255c" }, h("ix-tab-panel", { key: "9ec646ddd629e416d609f622ca91513efc95db8e", tabKey: this.tabKey }, h("slot", { key: "c6ae7173c8bbffb6c9564f83a222f88eeecb529d" })));
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
