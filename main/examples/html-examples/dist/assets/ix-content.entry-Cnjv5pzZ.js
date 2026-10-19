import { r as registerInstance, g as getElement, h, H as Host } from "./global-BTJSiofB.js";
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
    return h(Host, { key: "1c6d832e516bd694b4800517d2ddf11068b152a5" }, h("div", { key: "3935b032bfdaa244f5a4f326644457abbdfbc2a5", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "20680819b04907d3f7e69ed90eb0965b34f6168b", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "f3d02dae77938b372b10f14811ac2a5d28fc86e1", class: "content" }, h("slot", { key: "65a1da4790563ad18fb252064537b21991c67063" })));
  }
};
Content.style = contentCss();
export {
  Content as ix_content
};
