import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-BfsU3hSZ.js";
import "./preload-helper-UZRgTS1n.js";
const modalFooterCss = () => `@charset "UTF-8";:host{--ix-modal-footer--padding:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-modal-footer--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;padding:var(--ix-modal-footer--padding);justify-content:flex-end;align-items:center;gap:var(--ix-modal-footer--gap);align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const ModalFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "f0bbf24168573248f44453f05c5ef45be29c3555" }, h("slot", { key: "9ddab4fdd2e419f685c7b7bc202959191e63de99" }));
  }
};
ModalFooter.style = modalFooterCss();
export {
  ModalFooter as ix_modal_footer
};
