import { r as registerInstance, c as createEvent, h, H as Host } from "./global.8b5b8f81.js";
const menuAboutItemCss = ":host{display:block}";
const IxMenuAboutItemStyle0 = menuAboutItemCss;
const MenuAboutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
    this.label = void 0;
  }
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-about-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "db029b1d15d652d75c93dfc429bf154196d9b9aa" }, h("slot", { key: "8564c8182628fd41a29f5adc896d6482b5ce3ada" }));
  }
  static get watchers() {
    return {
      "label": ["watchLabel"]
    };
  }
};
MenuAboutItem.style = IxMenuAboutItemStyle0;
export {
  MenuAboutItem as ix_menu_about_item
};
