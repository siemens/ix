import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./global-C8IWpzMv.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-C0-Pxbn4.js";
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
    return h(Host, { key: "d63a44180e4b7db91b1a4eb3fc8a5e85a674d87b" }, h("ix-tab-panel", { key: "4f19cf38585849cded7ec04f4b8505396f36a0dd", tabKey: this.tabKey }, h("slot", { key: "87542c0a4382720c5a2a956a7ef80fcb884a27d3" })));
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
