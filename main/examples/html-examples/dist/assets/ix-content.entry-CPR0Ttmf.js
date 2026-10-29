import { r as registerInstance, g as getElement, h, H as Host } from "./global-DV2yP7rM.js";
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
    return h(Host, { key: "dd09def971dbe22cb1d6fe44d5b83a8f3d15d2aa" }, h("div", { key: "a402f200fec5b8c77bd0439e5a2f585f5d4d14a1", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "77b42bfd3e4a07cac207ce60cb70f16b239c839e", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "cc727dae6b4192519eea0f6d76975d0ff1a48d35", class: "content" }, h("slot", { key: "3053f5af3c37149dcdb3849c0b68fa51516e64ac" })));
  }
};
Content.style = contentCss();
export {
  Content as ix_content
};
