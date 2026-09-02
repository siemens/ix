import { r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { h as hasSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const contentCss = () => `@charset "UTF-8";:host{display:flex;flex-direction:column;position:relative;padding:0.75rem 2rem 0.25rem 2rem;width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;position:relative}:host .content-header.slotted{margin-bottom:1.5rem}`;
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
    return h(Host, { key: "0a6e088d2fa2c7ac5d3cc54a0bdad16010439056" }, h("div", { key: "d0569699600935c821ae9d317ea9e01209824b96", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "c2fa0f92dccbea3094b3203fda9f71336104d57b", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "ee9697f37fccbb1de25f78b2d483effc803f8db0", class: "content" }, h("slot", { key: "a9844aa5618706602fdd39482d2cfa9dd0a041cb" })));
  }
};
Content.style = contentCss();
export {
  Content as ix_content
};
