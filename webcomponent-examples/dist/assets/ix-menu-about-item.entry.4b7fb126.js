import { r as registerInstance, c as createEvent, h, H as Host } from "./global.7dd975c7.js";
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
    return h(Host, { key: "64625e5eb62e019f6e42a9a36dae6207bad0701f" }, h("slot", { key: "519c77be9ef20bc794b1840c4a0f4cba4f924994" }));
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
