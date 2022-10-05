import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header-logo--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem}:host .logo{display:inline-block;position:relative;height:32px;overflow:hidden}";

const ApplicationHeader = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("div", { class: "logo" }, h("slot", { name: "logo" })), h("span", { class: "name" }, this.name), h("slot", null)));
  }
  static get style() { return applicationHeaderCss; }
}, [1, "ix-application-header", {
    "name": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-application-header"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-application-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ApplicationHeader);
      }
      break;
  } });
}

export { ApplicationHeader as A, defineCustomElement as d };
