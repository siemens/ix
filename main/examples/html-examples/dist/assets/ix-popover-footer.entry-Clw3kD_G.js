import { r as registerInstance, h, H as Host } from "./global-B9zaqCXZ.js";
import { c as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-UgUryLm8-DN5Sb8-s.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
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
    return h(Host, { key: "c88afa12499280c36d4d748a2bc77a9b0b8ec2cd", class: { [`alignment-${this.alignment}`]: true }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("div", { key: "3567c53b205845278dcf0d1e06a1baeba64fa790", class: "footer-start" }, h("slot", { key: "1cefb4a1f01bc695b443fb2b29f5a3c386e68041", name: "start" })), h("div", { key: "4cf734d2c18649daa1f0b9e726d48f85de0f6f99", class: "footer-end" }, h("slot", { key: "791f3a3e601b660f9c646e394ca2aa0714006e68" })));
  }
};
PopoverFooter.style = popoverFooterCss();
export {
  PopoverFooter as ix_popover_footer
};
