import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-F68Qu5y3.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-CFW3DMx1.js";
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
    return h(Host, { key: "69db4b42f3e35defc882542543b746c60a5ee188" }, h("ix-tab-panel", { key: "068ad6bbab1396ff476082064820d50de7e94985", tabKey: this.tabKey }, h("slot", { key: "fdcdc10ab6d6c1ac717d0de8b145f8f90baf5302" })));
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
