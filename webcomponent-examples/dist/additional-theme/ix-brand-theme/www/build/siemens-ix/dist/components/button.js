import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getButtonClasses } from './base-button.js';

const buttonCss = ".sc-ix-button-h{display:inline-block;height:2rem}.button-disabled.sc-ix-button-h{pointer-events:none}";

const Button = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.variant = 'Primary';
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.selected = false;
    this.disabled = false;
    this.type = 'button';
  }
  render() {
    return (h(Host, { class: {
        'button-disabled': this.disabled,
      } }, h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, h("slot", null))));
  }
  static get style() { return buttonCss; }
}, [6, "ix-button", {
    "variant": [1],
    "outline": [4],
    "invisible": [4],
    "ghost": [4],
    "selected": [4],
    "disabled": [516],
    "type": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
  } });
}

export { Button as B, defineCustomElement as d };
