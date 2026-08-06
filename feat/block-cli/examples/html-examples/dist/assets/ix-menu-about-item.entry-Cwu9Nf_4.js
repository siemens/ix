import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-CSIWS5Ku.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-DwrdoSHu.js";
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
    return h(Host, { key: "6e6d66dfd0b1cec0075c90c719b27c713709073c" }, h("ix-tab-panel", { key: "afe34812950df764bdad4647754bf8609fc5d0c7", tabKey: this.tabKey }, h("slot", { key: "05b476fe2495fed4d5c4ee7b973f0f6c3c039eb3" })));
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
