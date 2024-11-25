import { r as registerInstance, c as createEvent, h, H as Host } from "./global.2bfd6008.js";
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
    return h(Host, { key: "724769e68ca03e809c7c1b520fd27ddf0f851e00", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "30038117755c9f30e0a90a6c4e2ab03fb559fa2d", class: "emptyState__icon" }, h("ix-icon", { key: "96c477d16bec8a73843981731ff6cb8830c27d39", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "color-soft-text" })), h("div", { key: "eac1e4371be1427d7126f134bee2f74550f09fe9", class: "emptyState__content" }, h("div", { key: "462298153f1e35f9fcc43fe7d42e15fe6efa2351", class: "content__label" }, h("ix-typography", { key: "d52a79a4e27938d59231a3e39cc38b53a5799a5f", format: this.layout === "large" ? "h3" : "body" }, this.header), this.subHeader && h("div", { key: "9667dc6eaba88a1ce663e66deda0d447f91db7f0", class: "label__subHeader" }, this.subHeader)), this.action && h("div", { key: "6b435724ffb7e2cc758b43cd76e452b241aab028", class: "content__action" }, h("ix-button", { key: "a6257e01ae753fee88b61de3b9ffccdc68596485", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = IxEmptyStateStyle0;
export {
  EmptyState as ix_empty_state
};
