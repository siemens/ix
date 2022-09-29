import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './dropdown-item.js';
import { d as defineCustomElement$2 } from './icon.js';

const groupDropdownItemCss = ".sc-ix-group-dropdown-item-h{display:contents}";

const GroupDropdownItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("ix-dropdown-item", { label: this.label, icon: this.icon }, h("slot", null))));
  }
  static get style() { return groupDropdownItemCss; }
}, [6, "ix-group-dropdown-item", {
    "label": [1],
    "icon": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-group-dropdown-item", "ix-dropdown-item", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-group-dropdown-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GroupDropdownItem);
      }
      break;
    case "ix-dropdown-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxGroupDropdownItem = GroupDropdownItem;
const defineCustomElement = defineCustomElement$1;

export { IxGroupDropdownItem, defineCustomElement };
