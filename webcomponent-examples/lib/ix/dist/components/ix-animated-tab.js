import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const animatedTabCss = ".sc-ix-animated-tab-h{display:block;height:100%;width:100%;position:absolute}";

const AnimatedTab = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return animatedTabCss; }
}, [6, "ix-animated-tab", {
    "icon": [1],
    "count": [514]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-animated-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-animated-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AnimatedTab);
      }
      break;
  } });
}

const IxAnimatedTab = AnimatedTab;
const defineCustomElement = defineCustomElement$1;

export { IxAnimatedTab, defineCustomElement };
