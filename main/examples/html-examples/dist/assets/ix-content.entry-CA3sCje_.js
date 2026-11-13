import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-DGToXfDo.js";
import { a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
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
    return h(Host, { key: "c285e79904d1d2d1cbc9c27c2646610d2be24911" }, h("div", { key: "f14cd7e1f4db02ef3ba7883d990c0e1c48c7bbac", class: {
      "content-header": true,
      slotted: this.isContentHeaderSlotted
    } }, h("slot", { key: "81173a4c5a1264e736a0015aa16e08768646742d", name: "header", onSlotchange: () => {
      this.isContentHeaderSlotted = hasSlottedElements(this.contentHeaderSlot);
    } })), h("div", { key: "e3f73b9879c414cb4a3a4772e576c828215239d8", class: "content" }, h("slot", { key: "362b9c8d071863b3169b777c294d8a515e4b411b" })));
  }
};
Content.style = contentCss();
export {
  Content as ix_content
};
