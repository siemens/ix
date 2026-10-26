import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CqiPKlnE.js";
const emptyStateCss = () => `@charset "UTF-8";:host{--ix-empty-state-label--color:var(--si-sys-color-text-secondary)}:host{--ix-empty-state-large--gap:var(--si-sys-sizing-spacing-y-60);--ix-empty-state-icon-large--icon-size:calc(     var(--si-sys-sizing-icon-xxl) + var(--si-sys-sizing-spacing-x-40)   );--ix-empty-state-icon-large--icon-size--icon:calc(     var(--si-sys-sizing-icon-xxl) + var(--si-sys-sizing-spacing-y-40)   );--ix-empty-state-content-large--gap:var(--si-sys-sizing-spacing-y-80);--ix-empty-state-content-label-large--gap:var(--si-sys-sizing-spacing-y-40);--ix-empty-state-compact--gap:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-icon-compact--icon-size:var(--si-sys-sizing-size-90);--ix-empty-state-content-compact--gap:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-compact-break--gap:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-icon--icon-size:var(--si-sys-sizing-size-90);--ix-empty-state-content--gap:var(--si-sys-sizing-spacing-x-40);--ix-empty-state-content-label--gap:var(--si-sys-sizing-spacing-y-20)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .label__subHeader{color:var(--ix-empty-state-label--color)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-large--gap)}:host(.emptyState.emptyState--large) .emptyState__icon{width:var(--ix-empty-state-icon-large--icon-size);height:var(--ix-empty-state-icon-large--icon-size--icon);display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-content-large--gap)}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-content-label-large--gap)}:host(.emptyState.emptyState--large) .label__subHeader,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:var(--ix-empty-state-compact--gap)}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:var(--ix-empty-state-icon-compact--icon-size)}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:var(--ix-empty-state-content-compact--gap)}:host(.emptyState.emptyState--compact) .emptyState__content .content__label{display:flex;flex-direction:column;gap:var(--ix-empty-state-content-label--gap)}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:var(--ix-empty-state-compact-break--gap)}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:var(--ix-empty-state-icon--icon-size)}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ix-empty-state-content--gap)}:host(.emptyState.emptyState--compactBreak) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;gap:var(--ix-empty-state-content-label--gap);min-height:var(--ix-empty-state-icon--icon-size)}`;
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
    return h(Host, { key: "ea6c89135e1386c8ff26a8134fdd9672876e12bb", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "885c64452ab20c643909766c55080ebbb91c4310", class: "emptyState__icon" }, h("ix-icon", { key: "1d8091ae3bb39fb56861295f76bed211569421f2", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "--si-sys-color-text-secondary", "aria-label": this.ariaLabelEmptyStateIcon })), h("div", { key: "6fde8819d6361f9a1994f4e2eb50c7f459a98b3c", class: "emptyState__content" }, h("div", { key: "9d1ee4066e4e97c49e8e1c2e93f61ad20daf0cb2", class: "content__label" }, h("ix-typography", { key: "695b7bbbc38d91c77568a0b5b61e39d58efe6235", format: this.layout === "large" ? "h3" : "body" }, this.header), this.subHeader && h("div", { key: "9e7b499a8efedfe469efd83cc2ae2114ee7fdfbf", class: "label__subHeader" }, this.subHeader)), this.action && h("div", { key: "9461faf5488b388a27ff223de63d640dfba7934a", class: "content__action" }, h("ix-button", { key: "6b21df71591b4368602854f4b30110b52c2b3a67", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = emptyStateCss();
export {
  EmptyState as ix_empty_state
};
