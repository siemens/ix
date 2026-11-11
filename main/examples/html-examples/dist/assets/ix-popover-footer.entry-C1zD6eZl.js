import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DSXWMbmA.js";
import { c as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap--BMv7KVW-iRNtP4uT.js";
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
    return h(Host, { key: "628582809934f6f2e4c5ba3e18ef930c5453def7", class: { [`alignment-${this.alignment}`]: true }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("div", { key: "ebc12950589741013de9b2f6082051aa09a02682", class: "footer-start" }, h("slot", { key: "1f490b48421e088993496c07329d1c1094e2990e", name: "start" })), h("div", { key: "25aae75c2e87dddf5bcfdcdf69e0054da6873dae", class: "footer-end" }, h("slot", { key: "3dd0d425acada9908f5fb29dc93b2da83f82e5e4" })));
  }
};
PopoverFooter.style = popoverFooterCss();
export {
  PopoverFooter as ix_popover_footer
};
