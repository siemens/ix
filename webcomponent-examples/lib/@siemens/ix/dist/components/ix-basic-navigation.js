import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './application-header.js';

const basicNavigationCss = ".sc-ix-basic-navigation-h{display:flex;position:relative;width:100%;height:100%;flex-direction:column}.sc-ix-basic-navigation-h ix-application-header.sc-ix-basic-navigation{z-index:calc(var(--theme-z-index-sticky) + 1)}.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{display:flex;height:calc(100% - 2.75rem);width:calc(100% - 4rem);position:relative;margin-left:4rem;overflow:auto}.hide-header.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{height:100%}";

const BasicNavigation = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Hide application header
     */
    this.hideHeader = false;
  }
  get menu() {
    return this.hostElement.querySelector('ix-menu');
  }
  componentDidRender() {
    if (this.menu) {
      this.appendMenu();
      this.adjustMenuHeight();
      this.menu.applicationName = this.applicationName;
    }
  }
  appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
  }
  adjustMenuHeight() {
    if (!this.hideHeader) {
      this.menu.style.height = 'calc(100% - 2.75rem)';
    }
  }
  render() {
    return (h(Host, { class: {
        'hide-header': this.hideHeader,
      } }, !this.hideHeader ? (h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo" }))) : null, h("div", { id: "menu-placeholder" }), h("div", { class: "content", onClick: () => this.menu.toggleMenu(false) }, h("slot", null))));
  }
  get hostElement() { return this; }
  static get style() { return basicNavigationCss; }
}, [6, "ix-basic-navigation", {
    "applicationName": [1, "application-name"],
    "hideHeader": [4, "hide-header"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-basic-navigation", "ix-application-header"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-basic-navigation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, BasicNavigation);
      }
      break;
    case "ix-application-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxBasicNavigation = BasicNavigation;
const defineCustomElement = defineCustomElement$1;

export { IxBasicNavigation, defineCustomElement };
