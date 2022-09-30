import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const menuSettingsItemCss = ".sc-ix-menu-settings-item-h{display:block}";

const MenuSettingsItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return menuSettingsItemCss; }
}, [6, "ix-menu-settings-item", {
    "label": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-settings-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-settings-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuSettingsItem);
      }
      break;
  } });
}

const IxMenuSettingsItem = MenuSettingsItem;
const defineCustomElement = defineCustomElement$1;

export { IxMenuSettingsItem, defineCustomElement };
