import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-Cx3A0XQN.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-DLXcZW44.js";
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
    return h(Host, { key: "7eba5219e16b1c0aa69ae3a20a49414857ed25fc" }, h("ix-tab-panel", { key: "634b2455398f1c68e5e0cc362cbde0444c8f8126", tabKey: this.tabKey }, h("slot", { key: "865457be090e3f631bc0a86c95a164e4716bfdeb" })));
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
