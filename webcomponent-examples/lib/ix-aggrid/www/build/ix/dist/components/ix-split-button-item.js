import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './dropdown-item.js';
import { d as defineCustomElement$2 } from './icon.js';

const splitButtonItemCss = ".sc-ix-split-button-item-h{display:block}";

const SplitButtonItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  render() {
    return (h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
  }
  get hostElement() { return this; }
  static get style() { return splitButtonItemCss; }
}, [2, "ix-split-button-item", {
    "icon": [1],
    "label": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-split-button-item", "ix-dropdown-item", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-split-button-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SplitButtonItem);
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

const IxSplitButtonItem = SplitButtonItem;
const defineCustomElement = defineCustomElement$1;

export { IxSplitButtonItem, defineCustomElement };
