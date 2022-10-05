import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const menuAboutItemCss = ".sc-ix-menu-about-item-h{display:block}";

const MenuAboutItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return menuAboutItemCss; }
}, [6, "ix-menu-about-item", {
    "label": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-about-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-about-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuAboutItem);
      }
      break;
  } });
}

const IxMenuAboutItem = MenuAboutItem;
const defineCustomElement = defineCustomElement$1;

export { IxMenuAboutItem, defineCustomElement };
