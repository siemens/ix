import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-BfsU3hSZ.js";
import { d as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-wdvfXiKy-B0gJlu0v.js";
import "./preload-helper-UZRgTS1n.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const popoverFooterCss = () => `@charset "UTF-8";:host{--ix-popover-footer--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50);--ix-popover-footer--gap:var(--si-sys-sizing-spacing-x-40);--ix-popover-footer-footer-end--gap:var(--si-sys-sizing-spacing-x-40)}:host{display:flex;padding:var(--ix-popover-footer--padding);justify-content:space-between;align-items:center;gap:var(--ix-popover-footer--gap)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .footer-start,:host .footer-end{display:flex;gap:var(--ix-popover-footer-footer-end--gap)}:host(.alignment-vertical) .footer-end{flex-direction:column;width:100%}:host(.alignment-vertical) .footer-end ::slotted(*){width:100%}`;
const PopoverFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Button layout direction
   *
   * @since 5.1.0
   */
  alignment = "horizontal";
  render() {
    return h(Host, { key: "8c4a8353bd82fdf7813d88e58347121415127e8f", class: { [`alignment-${this.alignment}`]: true }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("div", { key: "bddc8741dc971b4bb2d886dc91c8478a2d7d092c", class: "footer-start" }, h("slot", { key: "adb6babd5e261aebc14467534ad884b02574eafa", name: "start" })), h("div", { key: "ac64d7f2ec91625138ee91068d20fa3d9b23bd49", class: "footer-end" }, h("slot", { key: "4013b4511dd01c97c34cb60d9f8f418ee45506f5" })));
  }
};
PopoverFooter.style = popoverFooterCss();
export {
  PopoverFooter as ix_popover_footer
};
