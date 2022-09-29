import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const breadcrumbItemCss = ".sc-ix-breadcrumb-item-h{display:block}";

const BreadcrumbItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return breadcrumbItemCss; }
}, [6, "ix-breadcrumb-item", {
    "label": [1],
    "icon": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-breadcrumb-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-breadcrumb-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BreadcrumbItem);
      }
      break;
  } });
}

const IxBreadcrumbItem = BreadcrumbItem;
const defineCustomElement = defineCustomElement$1;

export { IxBreadcrumbItem, defineCustomElement };
