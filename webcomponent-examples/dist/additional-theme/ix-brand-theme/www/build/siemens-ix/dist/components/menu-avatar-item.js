import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './dropdown-item.js';
import { d as defineCustomElement$1 } from './icon.js';

const menuAvatarItemCss = ".sc-ix-menu-avatar-item-h{display:block}";

const MenuAvatarItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemClick = createEvent(this, "itemClick", 7);
    this.icon = undefined;
    this.label = undefined;
  }
  render() {
    return (h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
  }
  get hostElement() { return this; }
  static get style() { return menuAvatarItemCss; }
}, [2, "ix-menu-avatar-item", {
    "icon": [1],
    "label": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-avatar-item", "ix-dropdown-item", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-avatar-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuAvatarItem);
      }
      break;
    case "ix-dropdown-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MenuAvatarItem as M, defineCustomElement as d };
