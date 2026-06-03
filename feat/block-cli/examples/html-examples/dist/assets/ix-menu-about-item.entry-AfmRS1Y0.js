import { M as Mixin, a as registerInstance, c as createEvent, h, H as Host } from "./global-DUJ9DtiD.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-8IJAFkSg.js";
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
    return h(Host, { key: "c00fd906fa8770ba59a1cd67b938e97c2184328e" }, h("ix-tab-panel", { key: "7e337f652923c7a675b7f31fb74453ea11449de8", tabKey: this.tabKey }, h("slot", { key: "851d10091f5bb0251b7cd496076fb3dee2c117cd" })));
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
