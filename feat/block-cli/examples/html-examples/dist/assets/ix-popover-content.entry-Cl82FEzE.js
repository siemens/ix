import { r as registerInstance, h, H as Host } from "./global-Cx3A0XQN.js";
import { b as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap-IK9ialav-CffRa992.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const popoverContentCss = () => `:host{display:block;position:relative;overflow:auto;padding:0.75rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.no-padding){padding:0}`;
const PopoverContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Remove default inner padding.
   *
   * @since 5.1.0
   */
  noPadding = false;
  render() {
    return h(Host, { key: "d370466293f95290e59ce22b66f429f0f762b6ac", class: { "no-padding": this.noPadding }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("slot", { key: "be9aca6352a86d50392e82ca968d5db7ba2403a5" }));
  }
};
PopoverContent.style = popoverContentCss();
export {
  PopoverContent as ix_popover_content
};
