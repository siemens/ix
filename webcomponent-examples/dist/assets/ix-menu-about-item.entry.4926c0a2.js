import { r as registerInstance, c as createEvent, h, H as Host } from "./global.2bfd6008.js";
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
    return h(Host, { key: "68812cdc3ba23e05419a02de3f3339ac6bb6b8b7" }, h("slot", { key: "7e4ea0cc6deaef2fd45e7eb91e99736afbdc2677" }));
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
