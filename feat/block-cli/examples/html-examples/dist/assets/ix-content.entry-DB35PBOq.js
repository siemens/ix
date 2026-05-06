import { r as registerInstance, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { h as hasSlottedElements } from "./shadow-dom-BIe8Nw9M-C-dhDpq3.js";
const contentCss = () => `:host{display:flex;flex-direction:column;position:relative;padding:1.5rem 2rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;position:relative}:host .content-header.slotted{margin-bottom:1rem}`;
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
    return h(Host, { key: "c5fecbc3b61d3c7160a3921700398a8938236158" }, h("div", { key: "4af1c5fd51eea1ffe311a30f602fafa33f1539aa", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "bc7a597eefb3bc4e7ce91585ba02ef93cc6e0510", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "cf1e52dd4e9c493687c60974bb072827e9cbd590", class: "content" }, h("slot", { key: "eac07e35e03ec8eec440fe38237e4db6f46bfb18" })));
  }
};
Content.style = contentCss();
export {
  Content as ix_content
};
