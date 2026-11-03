import { M as Mixin, r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-DNhYiKCd.js";
import { B as BaseTabMixin } from "./tab.mixin-BoblZX4j-DHwrjENv.js";
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
    return h(Host, { key: "7bc33ce6c2b4b72246e9bdbc700638a271823400" }, h("ix-tab-panel", { key: "9c4d463c696711692b289acaded6452a3e16d49e", tabKey: this.tabKey }, h("slot", { key: "35228076b2eb9c2a9ed0b3b16fe538a14bc7b9a7" })));
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
