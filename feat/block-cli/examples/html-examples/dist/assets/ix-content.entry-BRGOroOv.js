import { r as registerInstance, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
const contentCss = ":host{display:flex;flex-direction:column;position:relative;padding:1.5rem 2rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;position:relative}:host .content-header.slotted{margin-bottom:1rem}";
const Content = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isContentHeaderSlotted = false;
  }
  get contentHeaderSlot() {
    return this.hostElement.shadowRoot.querySelector(".content-header slot");
  }
  render() {
    return h(Host, { key: "0d5716c0fdd0ce291c4a1471d5bedc73682a4399" }, h("div", { key: "394361439c6e81c84e14fae2e451de0365d0723b", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "63b494beb2bfee3f05e2ee71fd1a6644e9a221f6", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "844387a6c9f438f514e4bd8e8e5b8af0f9b2b7d8", class: "content" }, h("slot", { key: "e4d05368dc8a22fa93d6a3b027dfe6448f196b7c" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Content.style = contentCss;
export {
  Content as ix_content
};
