import { r as registerInstance, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
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
    return h(Host, { key: "2ca4af3b088beab36b86cb3431f1d1b59fcf8756" }, h("div", { key: "04f73ba733dc7fbf57ecf6fdc0afc1fec8249b8e", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "962e83643e1ebcd86384cae1e7a3632b6f47554e", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "4315ac1e71743ba30c7b8f592997c662eed392b4", class: "content" }, h("slot", { key: "c1f31f8e283bcc55011b9f2d5746d9b7c10988da" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Content.style = contentCss;
export {
  Content as ix_content
};
