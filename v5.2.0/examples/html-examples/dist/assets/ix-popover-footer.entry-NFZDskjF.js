import { r as registerInstance, h, H as Host } from "./global-CSIWS5Ku.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-CffRa992.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const popoverFooterCss = () => `:host{display:flex;padding:0.75rem;justify-content:space-between;align-items:center;gap:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .footer-start,:host .footer-end{display:flex;gap:0.5rem}:host(.alignment-vertical) .footer-end{flex-direction:column;width:100%}:host(.alignment-vertical) .footer-end ::slotted(*){width:100%}`;
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
    return h(Host, { key: "6807df77153dc545a04a6babd5d55dcf9f3e0adb", class: { [`alignment-${this.alignment}`]: true }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("div", { key: "25af3f6651e72be055e0e4d0c4ff89c644b059dd", class: "footer-start" }, h("slot", { key: "43142b46cfe1334343d38cdc5d3b0340916cbfaf", name: "start" })), h("div", { key: "8cdd1696cc0bf0091266d40dad5aff071cb0e74d", class: "footer-end" }, h("slot", { key: "3810b5a7bdebd817494ccbf0e46e5d41db3cb43c" })));
  }
};
PopoverFooter.style = popoverFooterCss();
export {
  PopoverFooter as ix_popover_footer
};
