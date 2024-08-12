import { r as registerInstance, c as createEvent, h, H as Host } from "./global.9430376f.js";
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
    return h(Host, { key: "8f4b3c1bc410eaf0fde9247cd99c18bba78fc628" }, h("slot", { key: "86fee42e74eb5ed0511c2fa3ae62efa57817fffa" }));
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
