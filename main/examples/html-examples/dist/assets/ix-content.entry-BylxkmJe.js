import { r as registerInstance, g as getElement, h, H as Host } from "./global-DzKOIL47.js";
import { h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const contentCss = () => `@charset "UTF-8";:host{--ix-content--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-90)     var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-90);--ix-content-header--margin-bottom:var(--si-sys-sizing-spacing-y-80)}:host{display:flex;flex-direction:column;position:relative;padding:var(--ix-content--padding);width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;position:relative}:host .content-header.slotted{margin-bottom:var(--ix-content-header--margin-bottom)}`;
const Content = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  isContentHeaderSlotted = false;
  get contentHeaderSlot() {
    return this.hostElement.shadowRoot.querySelector(".content-header slot");
  }
  render() {
    return h(Host, { key: "c922d0deeec618081889ed2226c3693c9d1b796b" }, h("div", { key: "033067c7e116438b5d33f1ce331a7f0c2205d397", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "49618b1a7c21a7c7d0f3b678fc8640b269977e81", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "ec6f877c088f1b25b6eca04bc083029bc9775337", class: "content" }, h("slot", { key: "8a7b44546d48de1c140f8d2f3b2a0853e36e7f30" })));
  }
};
Content.style = contentCss();
export {
  Content as ix_content
};
