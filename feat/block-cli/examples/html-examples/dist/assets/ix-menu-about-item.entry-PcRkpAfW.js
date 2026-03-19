import { r as registerInstance, c as createEvent, h, H as Host } from "./global-C_dy4gBz.js";
const menuAboutItemCss = () => `:host{display:block}`;
const MenuAboutItem = class {
  constructor(hostRef) {
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
    return h(Host, { key: "47dc8fc01ea02b25aeba55a3f2e5f07fc6f30b6d" }, h("slot", { key: "b13f1791b0cb71606fdfcfd27c929af19c3c8ea0" }));
  }
  static get watchers() {
    return {
      "label": [{
        "watchLabel": 0
      }]
    };
  }
};
MenuAboutItem.style = menuAboutItemCss();
export {
  MenuAboutItem as ix_menu_about_item
};
