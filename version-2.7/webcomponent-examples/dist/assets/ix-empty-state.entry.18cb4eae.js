import { r as registerInstance, c as createEvent, h, H as Host } from "./global.7dd975c7.js";
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
    return h(Host, { key: "cb312e54bc903b7f3d59faed9850e9500847869e", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "c901252f66e6f97ef42808c1e881bac76b40674a", class: "emptyState__icon" }, h("ix-icon", { key: "1ee24a795580830a364f8b541b94e230d7797365", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "color-soft-text" })), h("div", { key: "ab641cce5937da8014ec76af23349dd629575a2e", class: "emptyState__content" }, h("div", { key: "8d6340d04768a47ccd1333d628342bb894d7387a", class: "content__label" }, h("ix-typography", { key: "f27adb6c7a93e36117022dd2294b46a34b0f4c79", format: this.layout === "large" ? "h3" : "body" }, this.header), this.subHeader && h("div", { key: "ca49901be387ce044c5aa6da90fab8d8f2dc06a1", class: "label__subHeader" }, this.subHeader)), this.action && h("div", { key: "76755b670cae1926e6d976244a81f1b3c9eca76b", class: "content__action" }, h("ix-button", { key: "937d705608063a0e586d112f7c848883abd361fb", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = IxEmptyStateStyle0;
export {
  EmptyState as ix_empty_state
};
