import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CtBDOAVb.js";
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
    return h(Host, { key: "6986595eaf68ba447540a10ad542b1783122d170" }, h("slot", { key: "f8327c82f2c73c998b1f7fd9bc49f66c2d44b47c" }));
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
