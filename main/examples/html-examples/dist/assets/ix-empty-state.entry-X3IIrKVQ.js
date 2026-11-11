import { r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-DSXWMbmA.js";
import "./preload-helper-UZRgTS1n.js";
const emptyStateCss = () => `@charset "UTF-8";:host{--ix-empty-state-label--color:var(--si-sys-color-text-secondary)}:host{--ix-empty-state-large--gap:var(--si-sys-sizing-spacing-y-60);--ix-empty-state-icon-large--icon-size:calc(     var(--si-sys-sizing-icon-xxl) + var(--si-sys-sizing-spacing-x-40)   );--ix-empty-state-icon-large--icon-size--icon:calc(     var(--si-sys-sizing-icon-xxl) + var(--si-sys-sizing-spacing-y-40)   );--ix-empty-state-content-large--gap:var(--si-sys-sizing-spacing-y-80);--ix-empty-state-content-label-large--gap:var(--si-sys-sizing-spacing-y-40);--ix-empty-state-compact--gap:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-icon-compact--icon-size:var(--si-sys-sizing-size-90);--ix-empty-state-content-compact--gap:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-compact-break--gap:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-icon--icon-size:var(--si-sys-sizing-size-90);--ix-empty-state-content--gap:var(--si-sys-sizing-spacing-x-40);--ix-empty-state-content-label--gap:var(--si-sys-sizing-spacing-y-20)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .label__description{color:var(--ix-empty-state-label--color)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-large--gap)}:host(.emptyState.emptyState--large) .emptyState__icon{width:var(--ix-empty-state-icon-large--icon-size);height:var(--ix-empty-state-icon-large--icon-size--icon);display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-content-large--gap)}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-content-label-large--gap)}:host(.emptyState.emptyState--large) .label__description,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:var(--ix-empty-state-compact--gap)}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:var(--ix-empty-state-icon-compact--icon-size)}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:var(--ix-empty-state-content-compact--gap)}:host(.emptyState.emptyState--compact) .emptyState__content .content__label{display:flex;flex-direction:column;gap:var(--ix-empty-state-content-label--gap)}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:var(--ix-empty-state-compact-break--gap)}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:var(--ix-empty-state-icon--icon-size)}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ix-empty-state-content--gap)}:host(.emptyState.emptyState--compactBreak) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;gap:var(--ix-empty-state-content-label--gap);min-height:var(--ix-empty-state-icon--icon-size)}`;
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
   * Optional empty state description
   *
   * @since 6.0.0
   */
  description;
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
    return h(Host, { key: "257c70f0e77ea3812350f254ea0aa0df7949eb26", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "9b455a6d24b5f8cbe400f9b4055604b2c06e9ff8", class: "emptyState__icon" }, h("ix-icon", { key: "8959fe8d046fde1759376a043694255574833fc9", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "--si-sys-color-text-secondary", "aria-label": this.ariaLabelEmptyStateIcon })), h("div", { key: "d7e94d23fa3a0662f9757726995c45542a936bf1", class: "emptyState__content" }, h("div", { key: "7d409f8981969e450ef9e0ea08249f4b3b949082", class: "content__label" }, h("ix-typography", { key: "cd88ced4f4b86947d60a7cef7345e90463cadee2", format: this.layout === "large" ? "h3" : "body" }, this.header), this.description && h("div", { key: "020b57f2a2a33ce15566b457dde638c215f9d759", class: "label__description" }, this.description)), this.action && h("div", { key: "ba44aa33a2f6e6356dbdc9ab8796b4c1bc37e6e5", class: "content__action" }, h("ix-button", { key: "220f2dad63e38943738ea908898324076fdc937a", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = emptyStateCss();
export {
  EmptyState as ix_empty_state
};
