import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const myComponentCss = ".sc-my-component-h{display:flex;flex-direction:column;width:100vw;height:100vh}.sc-my-component-h main.sc-my-component{width:100%;padding:2rem}.sc-my-component-h ix-chip.sc-my-component{-webkit-margin-after:1rem;margin-block-end:1rem}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return h(Host, null);
  }
  static get style() { return myComponentCss; }
}, [2, "my-component"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
