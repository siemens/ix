import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-CWpkMnfL.js";
import { a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
const contentCss = () => `@charset "UTF-8";:host{--ix-content--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-90) var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-90);--ix-content-slotted-header--margin-bottom:var(--si-sys-sizing-spacing-y-80)}:host{display:flex;flex-direction:column;position:relative;padding:var(--ix-content--padding);width:100%;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .content{flex-grow:1;overflow:auto;position:relative}:host .content-header.slotted{margin-bottom:var(--ix-content-slotted-header--margin-bottom)}`;
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
    return h(Host, { key: "8bf63af2de9b6cd8ee45a63c2128375cf8ffc27e" }, h("div", { key: "396e16bacb4a0430f99ed93d52559e24cb826446", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "18d3d6763fcae85f67d32b72b6a620d9bf4936fb", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "3ec6c099c3185263ee197900ea94e62f0c0cfc5c", class: "content" }, h("slot", { key: "ca4cd38009077ac8129c35b8bcba8736cd6026c7" })));
  }
};
Content.style = contentCss();
export {
  Content as ix_content
};
