import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { g as getButtonClasses } from './base-button.js';
import { d as defineCustomElement$1 } from './icon.js';

const iconButtonCss = ".disabled.sc-ix-icon-button-h{pointer-events:none}.sc-ix-icon-button-h .icon-button.sc-ix-icon-button{padding:0;overflow:hidden}";

const IconButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.variant = 'Secondary';
    this.outline = undefined;
    this.invisible = undefined;
    this.ghost = undefined;
    this.oval = undefined;
    this.icon = undefined;
    this.size = '24';
    this.color = undefined;
    this.selected = false;
    this.disabled = false;
    this.type = 'button';
  }
  getIconButtonClasses() {
    return Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled)), { 'icon-button': true, 'btn-icon-12': this.size === '12', 'btn-icon-16': this.size === '16', 'btn-icon-32': this.size === '32' || this.size === '24' || !this.size });
  }
  render() {
    return (h(Host, { class: { disabled: this.disabled } }, h("button", { class: this.getIconButtonClasses(), type: this.type }, h("ix-icon", { size: this.size, name: this.icon, color: this.color }), h("div", { style: { display: 'none' } }, h("slot", null)))));
  }
  static get style() { return iconButtonCss; }
}, [6, "ix-icon-button", {
    "variant": [1],
    "outline": [4],
    "invisible": [4],
    "ghost": [4],
    "oval": [4],
    "icon": [1],
    "size": [1],
    "color": [1],
    "selected": [4],
    "disabled": [4],
    "type": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-icon-button", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IconButton);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { IconButton as I, defineCustomElement as d };
