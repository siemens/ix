import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-eKMhumbj.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const popoverFooterCss = () => `@charset "UTF-8";:host{display:flex;padding:0.75rem;justify-content:space-between;align-items:center;gap:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .footer-start,:host .footer-end{display:flex;gap:0.5rem}:host(.alignment-vertical) .footer-end{flex-direction:column;width:100%}:host(.alignment-vertical) .footer-end ::slotted(*){width:100%}`;
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
    return h(Host, { key: "237775c36d8ff300a3b3ea4362d5685ecea27767", class: { [`alignment-${this.alignment}`]: true }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("div", { key: "9a6ed90b41a3d449a604c7eab4046d3762b34547", class: "footer-start" }, h("slot", { key: "d6ba3626c758874d338013a898fade5648bc6c98", name: "start" })), h("div", { key: "441aaeadebf1a247d9d2c08390e091aae94b3e3e", class: "footer-end" }, h("slot", { key: "dcac0e3ffad7cdc04e9e359a98b38722d356d91c" })));
  }
};
PopoverFooter.style = popoverFooterCss();
export {
  PopoverFooter as ix_popover_footer
};
