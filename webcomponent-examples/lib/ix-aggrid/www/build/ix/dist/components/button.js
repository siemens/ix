import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { g as getButtonClasses } from './base-button.js';

const buttonCss = ".sc-ix-button-h{display:inline-block;height:2rem}";

const Button = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Button varaint
     */
    this.variant = 'Primary';
    /**
     * Outline button
     */
    this.outline = false;
    /**
     * Invisible button
     *
     * @deprecated use ghost property
     */
    this.invisible = false;
    /**
     * Button with no background or outline
     */
    this.ghost = false;
    /**
     * Show button as selected. Should be used with outline or invisible
     */
    this.selected = false;
    /**
     * Disable the button
     */
    this.disabled = false;
    /**
     * Type of the button
     */
    this.type = 'button';
  }
  render() {
    return (h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, h("slot", null)));
  }
  static get style() { return buttonCss; }
}, [6, "ix-button", {
    "variant": [1],
    "outline": [4],
    "invisible": [4],
    "ghost": [4],
    "selected": [4],
    "disabled": [4],
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
