import { r as registerInstance, c as createEvent, h, H as Host } from "./global-BRURWDG-.js";
const menuAboutItemCss = () => `:host{display:block}`;
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
    return h(Host, { key: "a2212e75be4cd27ab020f8b5a9e06c3c1c8978d0" }, h("slot", { key: "b08b8c6476936c4f8c17e2622b51da205b3abce9" }));
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
