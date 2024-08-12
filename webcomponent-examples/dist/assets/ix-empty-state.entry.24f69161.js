import { r as registerInstance, c as createEvent, h, H as Host } from "./global.9430376f.js";
const emptyStateCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .label__subHeader{color:var(--theme-color-soft-text)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--large) .emptyState__icon{width:3.5rem;height:3.5rem;display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem}:host(.emptyState.emptyState--large) .label__subHeader,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:1rem}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem}";
const IxEmptyStateStyle0 = emptyStateCss;
const EmptyState = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.actionClick = createEvent(this, "actionClick", 7);
    this.layout = "large";
    this.icon = void 0;
    this.header = void 0;
    this.subHeader = void 0;
    this.action = void 0;
  }
  render() {
    return h(Host, { key: "6a35699c05f5c71ac06952275054124e827f11d1", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "d5461a77a1e97b201bc93735b9984071f5bbb8eb", class: "emptyState__icon" }, h("ix-icon", { key: "540eb6f4f0413685dc4b5dec247e79b1ab7c984f", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "color-soft-text" })), h("div", { key: "30d14aa2ca5f1b6597ee1e7aefa930f6592f1b7b", class: "emptyState__content" }, h("div", { key: "c3f75186476392f25251701003bba78d23f7a2bb", class: "content__label" }, h("ix-typography", { key: "357899084359203cc8b06f508658462ed04f9241", variant: this.layout === "large" ? "display-large" : "default" }, this.header), this.subHeader && h("div", { key: "a0ce178dc2ab263ec5e1a6627aeb740fce0539fd", class: "label__subHeader" }, this.subHeader)), this.action && h("div", { key: "ce163e65fb307b5c5b32fd63e1750caa7456ff41", class: "content__action" }, h("ix-button", { key: "3e32f02186912b49a2b7e9e314531e2a26b79a3b", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = IxEmptyStateStyle0;
export {
  EmptyState as ix_empty_state
};
