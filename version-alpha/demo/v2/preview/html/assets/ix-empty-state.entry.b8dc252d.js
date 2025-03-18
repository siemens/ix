import { r as registerInstance, c as createEvent, h, H as Host } from "./global.78f61b49.js";
const emptyStateCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .label__subHeader{color:var(--theme-color-soft-text)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--large) .emptyState__icon{width:3.5rem;height:3.5rem;display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem}:host(.emptyState.emptyState--large) .label__subHeader,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:1rem}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem}";
const EmptyState = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.actionClick = createEvent(this, "actionClick", 7);
    this.layout = "large";
  }
  render() {
    return h(Host, { key: "cbbe07a75484734b5db14c89545fe55efdf37d27", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "e415e4efa5f20e90618624d543dd133178867eef", class: "emptyState__icon" }, h("ix-icon", { key: "ce08a515b0200a8bf6edf46a548c3ab3c48bcc0d", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "color-soft-text" })), h("div", { key: "8ec2947856676415c31a7d931bf9ab17f15b4d17", class: "emptyState__content" }, h("div", { key: "82d5af7c13358d8aa1a92db475c489cf6ad84583", class: "content__label" }, h("ix-typography", { key: "b70f6a9386fb7de4edd5642f45c1966ba84c8981", format: this.layout === "large" ? "h3" : "body" }, this.header), this.subHeader && h("div", { key: "b2e7dec12f70f9676d47e34bb84edefd14101956", class: "label__subHeader" }, this.subHeader)), this.action && h("div", { key: "e7c5229d9de24354d25b35cfaf921a1e25b7eab3", class: "content__action" }, h("ix-button", { key: "30f464a500dde5debb39be4672d99f07097eac4b", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = emptyStateCss;
export {
  EmptyState as ix_empty_state
};
