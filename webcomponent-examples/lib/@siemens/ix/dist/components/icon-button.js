import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { g as getButtonClasses } from './base-button.js';
import { d as defineCustomElement$1 } from './icon.js';

const IconButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Variant of button
     */
    this.variant = 'Secondary';
    /**
     * Size of icon in button
     */
    this.size = '24';
    /**
     * Selected state only working with outline or invisible
     */
    this.selected = false;
    /**
     * Disabled
     */
    this.disabled = false;
    /**
     * Type of the button
     */
    this.type = 'button';
  }
  getIconButtonClasses() {
    return Object.assign({ 'btn-icon-xs': this.size === '12', 'btn-icon-s': this.size === '16' }, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled));
  }
  render() {
    return (h("button", { class: this.getIconButtonClasses(), type: this.type }, h("ix-icon", { size: this.size, name: this.icon, color: this.color }), h("div", { style: { display: 'none' } }, h("slot", null))));
  }
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
