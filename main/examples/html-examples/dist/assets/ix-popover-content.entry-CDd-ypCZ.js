import { r as registerInstance, h, H as Host } from "./global-DtRSe4QO.js";
import { c as TRAP_FOCUS_INCLUDE_ATTRIBUTE } from "./focus-trap--BMv7KVW-iRNtP4uT.js";
import "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const popoverContentCss = () => `@charset "UTF-8";:host{--ix-popover-content--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50)}:host{display:block;position:relative;overflow:auto;padding:var(--ix-popover-content--padding);font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host(.no-padding){padding:0}`;
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
    return h(Host, { key: "c56375059c9f4a9beb45eecbb671023d87511914", class: { "no-padding": this.noPadding }, [TRAP_FOCUS_INCLUDE_ATTRIBUTE]: true }, h("slot", { key: "bc009b7d72a9decf199b19f172c3f08c641614ae" }));
  }
};
PopoverContent.style = popoverContentCss();
export {
  PopoverContent as ix_popover_content
};
