import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-vubC4vyH.js";
import "./preload-helper-UZRgTS1n.js";
const modalFooterCss = () => `@charset "UTF-8";:host{--ix-modal-footer--padding:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-modal-footer--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;padding:var(--ix-modal-footer--padding);justify-content:flex-end;align-items:center;gap:var(--ix-modal-footer--gap);align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const ModalFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "d693c0c7e8b238652363f11e9078495aed2854ba" }, h("slot", { key: "b0b90f92526d7f24ecdd2699bd3271fb0fd507f5" }));
  }
};
ModalFooter.style = modalFooterCss();
export {
  ModalFooter as ix_modal_footer
};
