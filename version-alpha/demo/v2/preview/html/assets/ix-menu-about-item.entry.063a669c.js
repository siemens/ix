import { r as registerInstance, c as createEvent, h, H as Host } from "./global.aa474cf6.js";
const menuAboutItemCss = ":host{display:block}";
const MenuAboutItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelChange = createEvent(this, "labelChange", 7);
  }
  watchLabel(newValue, oldValue) {
    this.labelChange.emit({
      name: "ix-menu-about-item",
      oldLabel: oldValue,
      newLabel: newValue
    });
  }
  render() {
    return h(Host, { key: "ae63769733f813931bac93bc8b38746a61338021" }, h("slot", { key: "9798db3fe19a2eaa22ce017e1ee404b666776686" }));
  }
  static get watchers() {
    return {
      "label": ["watchLabel"]
    };
  }
};
MenuAboutItem.style = menuAboutItemCss;
export {
  MenuAboutItem as ix_menu_about_item
};
