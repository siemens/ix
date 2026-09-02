import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
const emptyStateCss = () => `@charset "UTF-8";:host{--ix-empty-state-label--color:var(--si-sys-text-secondary)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .label__subHeader{color:var(--ix-empty-state-label--color)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--large) .emptyState__icon{width:3.5rem;height:3.5rem;display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem}:host(.emptyState.emptyState--large) .label__subHeader,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:1rem}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem}`;
const EmptyState = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.actionClick = createEvent(this, "actionClick", 7);
  }
  /**
   * Optional empty state layout - one of 'large', 'compact' or 'compactBreak'
   */
  layout = "large";
  /**
   * Optional empty state icon
   */
  icon;
  /**
   * Empty state header
   */
  header;
  /**
   * Optional empty state sub header
   */
  subHeader;
  /**
   * Optional empty state action
   */
  action;
  /**
   * ARIA label for the empty state icon
   *
   * @since 3.2.0
   */
  ariaLabelEmptyStateIcon;
  /**
   * Empty state action click event
   */
  actionClick;
  render() {
    return h(Host, { key: "0106c26daa52d05aa4316092a824a7fa193fe021", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "7eaf3492453e588da3241c6b3666fc2b746cb923", class: "emptyState__icon" }, h("ix-icon", { key: "dff73cad199574dbb1a8b1b3db4530bf659f3ce8", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "--si-sys-text-secondary", "aria-label": this.ariaLabelEmptyStateIcon })), h("div", { key: "6a877176d71c8c7a125fb44179052edd8f55158d", class: "emptyState__content" }, h("div", { key: "8bc69ff3dc7a6b6a5e11e4433a6c247f13b9517d", class: "content__label" }, h("ix-typography", { key: "51340829a6da2958cb144fbfee37d2d03862bf80", format: this.layout === "large" ? "h3" : "body" }, this.header), this.subHeader && h("div", { key: "7148b0ec9eac615a20a8f7b59841b02adc978498", class: "label__subHeader" }, this.subHeader)), this.action && h("div", { key: "895bab3bca914ddafbcf6b88aa95042c9146535f", class: "content__action" }, h("ix-button", { key: "9567cc0d134865ea0c32a0d5c1bb06b9696788c5", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = emptyStateCss();
export {
  EmptyState as ix_empty_state
};
