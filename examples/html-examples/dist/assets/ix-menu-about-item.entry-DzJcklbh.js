import { r as registerInstance, c as createEvent, h, H as Host } from "./global-wi9VneMU.js";
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
    return h(Host, { key: "2877a9c9386fb74d8c4fcfb72d5f31d8aa9057f1" }, h("slot", { key: "fc2e89e7a6a427dbbf3e2030949a4db31c34957e" }));
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
