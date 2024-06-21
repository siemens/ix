import { r as registerInstance, c as createEvent, h, H as Host } from "./global.8b5b8f81.js";
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
    return h(Host, { key: "d4948b49bb9fab021917a1e59191f8d12d26d336", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { class: "emptyState__icon" }, h("ix-icon", { name: this.icon, size: this.layout === "large" ? "32" : "32", color: "color-soft-text" })), h("div", { key: "f7e619a388d459d74efe6927ee2efd044346b1da", class: "emptyState__content" }, h("div", { key: "676824c13fcdff2a071b9dacf98e2536a373ae5c", class: "content__label" }, h("ix-typography", { key: "53a08238276da07a1bf4c10ad8cd76952124af7c", variant: this.layout === "large" ? "display-large" : "default" }, this.header), this.subHeader && h("div", { class: "label__subHeader" }, this.subHeader)), this.action && h("div", { class: "content__action" }, h("ix-button", { onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = IxEmptyStateStyle0;
export {
  EmptyState as ix_empty_state
};
