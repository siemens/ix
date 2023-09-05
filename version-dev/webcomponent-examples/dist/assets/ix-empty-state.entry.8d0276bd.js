import { r as registerInstance, c as createEvent, h, H as Host } from "./index.f1cc59d7.js";
const emptyStateCss = ":host *,:host *::after,:host *::before{box-sizing:border-box}:host .label__subHeader{color:var(--theme-color-soft-text)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--large) .emptyState__icon{width:3.5rem;height:3.5rem;display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:1rem}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem}";
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
    return h(Host, { class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { class: "emptyState__icon" }, h("ix-icon", { name: this.icon, size: this.layout === "large" ? "32" : "32", color: "color-soft-text" })), h("div", { class: "emptyState__content" }, h("div", { class: "content__label" }, h("ix-typography", { variant: this.layout === "large" ? "display-large" : "default" }, this.header), this.subHeader && h("div", { class: "label__subHeader" }, this.subHeader)), this.action && h("div", { class: "content__action" }, h("ix-button", { onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = emptyStateCss;
export {
  EmptyState as ix_empty_state
};
