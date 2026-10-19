import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-BTJSiofB.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-C7YjbfZO.js";
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
    return h(Host, { key: "5346a4a302f6ff79a8f589ded55d6814db7bffbe" }, h("ix-tab-panel", { key: "5f83885abc4e428c8046b36250473626c980bfa5", tabKey: this.tabKey }, h("slot", { key: "12d5b224e08be295b8d39186100517e876db0814" })));
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
