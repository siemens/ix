import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const flipTileContentCss = ":host{display:block}";

const FlipTileContent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return flipTileContentCss; }
}, [1, "ix-flip-tile-content"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-flip-tile-content"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-flip-tile-content":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FlipTileContent);
      }
      break;
  } });
}

const IxFlipTileContent = FlipTileContent;
const defineCustomElement = defineCustomElement$1;

export { IxFlipTileContent, defineCustomElement };
