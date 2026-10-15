import { r as registerInstance, h, H as Host } from "./global-D3pEBlWT.js";
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
    return h(Host, { key: "2499c88bce0b1e4349cee508123eeb541e3cbc1c", class: { [`alignment-${this.alignment}`]: true }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("div", { key: "a98270bec2a0350233307479af9f49c72ef7cd09", class: "footer-start" }, h("slot", { key: "4e532bab249490584a2b64a278752ff193cfb489", name: "start" })), h("div", { key: "f8e100d49c6509b3202c7ae1586e91d0625d4568", class: "footer-end" }, h("slot", { key: "ef6bcf00c6232ef40d10e1be978e958fb69db911" })));
  }
};
PopoverFooter.style = popoverFooterCss();
export {
  PopoverFooter as ix_popover_footer
};
