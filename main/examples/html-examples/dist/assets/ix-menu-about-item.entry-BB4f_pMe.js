import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-DSXWMbmA.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-Cb3swqD-.js";
import "./preload-helper-UZRgTS1n.js";
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
    return h(Host, { key: "ba94d249dacb0d0fdec36c5dd8eea59a9b47ab98" }, h("ix-tab-panel", { key: "3843f040a8c643330414ed007d1e2d08441d5254", tabKey: this.tabKey }, h("slot", { key: "286771221ee0f721121316e17a814ff66fddea62" })));
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
