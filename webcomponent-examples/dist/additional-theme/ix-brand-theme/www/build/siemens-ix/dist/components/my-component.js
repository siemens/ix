import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './button.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './tooltip.js';
import { d as defineCustomElement$2 } from './typography.js';

const myComponentCss = ".sc-my-component-h{display:flex;position:relative;width:100vw;height:100vh}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { style: {
        padding: '12rem',
      } }, h("ix-button", { "data-tooltip": "Test1", style: { marginRight: '4rem' } }, "Long text"), h("ix-button", { "data-tooltip": "Test2", style: { marginRight: '4rem' } }, "Short"), h("ix-button", { "data-tooltip": "Test3", style: { marginRight: '4rem' } }, "Long text short words"), h("ix-button", { "data-tooltip": "with-title", style: { marginRight: '4rem' } }, "With title"), h("ix-tooltip", { for: '[data-tooltip="Test3"]', interactive: false, titleIcon: "rocket", titleContent: "test title" }, "Very very very very very very long long long text"), h("ix-tooltip", { for: '[data-tooltip="Test2"]', interactive: false }, "1"), h("ix-tooltip", { for: '[data-tooltip="Test1"]', interactive: true, titleIcon: "rocket", titleContent: "test title" }, "Very very very very very very looooooooooooooooooooooooooooooooooooooooong text"), h("ix-tooltip", { for: '[data-tooltip="with-title"]', interactive: true, titleIcon: "rocket", titleContent: "test title" }, "Some Content"), h("div", { style: {
        display: 'flex',
        flexDirection: 'column',
      } }, [
      'h2',
      'display-large',
      'large',
      'large-single',
      'default-title',
      'default-title-single',
      'default',
      'default-single',
      'caption',
      'caption-single',
      'small',
      'x-small',
    ].map((v) => (h("div", null, h("ix-typography", { variant: v }, v)))))));
  }
  static get style() { return myComponentCss; }
}, [2, "my-component"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component", "ix-button", "ix-icon", "ix-tooltip", "ix-typography"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
    case "ix-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-tooltip":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-typography":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
