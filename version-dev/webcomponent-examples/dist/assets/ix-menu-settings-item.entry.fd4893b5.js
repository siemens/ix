import { r as registerInstance, h, H as Host } from "./index.e8ee4cc3.js";
const menuSettingsItemCss = ":host{display:block}";
const MenuSettingsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
MenuSettingsItem.style = menuSettingsItemCss;
export {
  MenuSettingsItem as ix_menu_settings_item
};
