import { r as registerInstance, h, H as Host, g as getElement } from "./global.2bfd6008.js";
import { h as hasSlottedElements } from "./shadow-dom-cc0bc152.fe0cdd32.js";
const contentCss = ":host{display:flex;flex-direction:column;position:relative;padding:1.5rem 0rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;padding-right:1.5rem;position:relative}:host .content-header.slotted{margin-bottom:1rem;padding-right:1.5rem}";
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
    return h(Host, { key: "d507034393e0da4a209198ee007bcbda9d949acf" }, h("div", { key: "be4b20dad2d73b80dbdbd7720e608fcc063ae227", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "7053f639f4f42fdad91e82e6cd78022d703d7097", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "2a9e27c0685f5dd52a848764e937af1cc06b50d7", class: "content" }, h("slot", { key: "302af1dd73eda0b3b990545e986ed8c1b3182236" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Content.style = IxContentStyle0;
export {
  Content as ix_content
};
