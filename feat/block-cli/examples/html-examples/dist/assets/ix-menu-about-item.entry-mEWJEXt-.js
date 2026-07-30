import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-J1r-v9CX.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-Dnq7pAkU.js";
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
    return h(Host, { key: "fbf9982ccd7becf90ede8ab2a11d153376010865" }, h("ix-tab-panel", { key: "25dc2215d5f84761ba0f0c23a9b957952d5be032", tabKey: this.tabKey }, h("slot", { key: "df3f19d3eff5c017dd8c34b883042630f67b333d" })));
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
