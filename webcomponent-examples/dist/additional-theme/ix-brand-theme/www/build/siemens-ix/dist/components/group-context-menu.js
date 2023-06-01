import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './icon-button.js';

const groupContextMenuCss = ".sc-ix-group-context-menu-h{display:block;position:relative;-webkit-margin-before:0.3125rem;margin-block-start:0.3125rem;-webkit-margin-end:0.3125rem;margin-inline-end:0.3125rem;-webkit-margin-start:auto;margin-inline-start:auto}.sc-ix-group-context-menu-h ix-icon-button.sc-ix-group-context-menu::after{display:none}.sc-ix-group-context-menu-h .hide.sc-ix-group-context-menu{visibility:collapse}";

const GroupContextMenu = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.showContextMenu = false;
  }
  get dropdownElement() {
    return this.host.querySelector('ix-dropdown');
  }
  get groupDropdownItem() {
    return this.host.querySelectorAll('ix-group-dropdown-item');
  }
  configureDropdown(triggerElement) {
    this.dropdownElement.positioningStrategy = 'fixed';
    this.dropdownElement.trigger = triggerElement;
  }
  componentWillRender() {
    this.showContextMenu = !!this.dropdownElement;
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    return (h(Host, null, h("ix-icon-button", { class: { hide: !this.showContextMenu }, ref: (ref) => this.dropdownElement ? this.configureDropdown(ref) : null, size: "24", ghost: true, icon: "context-menu" }), h("slot", null)));
  }
  get host() { return this; }
  static get style() { return groupContextMenuCss; }
}, [6, "ix-group-context-menu", {
    "showContextMenu": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-group-context-menu", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-group-context-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GroupContextMenu);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GroupContextMenu as G, defineCustomElement as d };
