import { r as registerInstance, h, H as Host, g as getElement } from "./index.18e27e15.js";
import { h as hasSlottedElements } from "./shadow-dom-60e9243d.05aee9aa.js";
const contentCss = ":host{display:flex;flex-direction:column;position:relative;padding:1.5rem 0rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;padding-right:1.5rem}:host .content-header.slotted{margin-bottom:1rem;padding-right:1.5rem}";
const IxContentStyle0 = contentCss;
const Content = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isContentHeaderSlotted = false;
  }
  get contentHeaderSlot() {
    return this.hostElement.shadowRoot.querySelector(".content-header slot");
  }
  render() {
    return h(Host, { key: "ac0576c27f8897bbbe595b2ff11c7be86ddd6fdf" }, h("div", { key: "31c3baff86a01c7b03faee1a130d64fcb54490f9", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "45f6106e8a7fa54510bb4d8c8d6989a277ff4435", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "d0e902811f8bb7947507021773b86bf9ec3a618d", class: "content" }, h("slot", { key: "12155146f6de963c2e6f7a9de034c90039fa6d11" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Content.style = IxContentStyle0;
export {
  Content as ix_content
};
