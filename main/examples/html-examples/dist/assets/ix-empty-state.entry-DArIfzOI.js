import { r as registerInstance, c as createEvent, h, H as Host } from "./index-CgUi6DzV-DmPVhzFD.js";
import "./preload-helper-UZRgTS1n.js";
const emptyStateCss = () => `@charset "UTF-8";:host{--ix-empty-state-label--color:var(--si-sys-color-text-secondary)}:host{--ix-empty-state--gap--large:var(--si-sys-sizing-spacing-y-60);--ix-empty-state-icon--width--large:calc(var(--si-sys-sizing-icon-xxl) + var(--si-sys-sizing-spacing-x-40));--ix-empty-state-icon--height--large:calc(var(--si-sys-sizing-icon-xxl) + var(--si-sys-sizing-spacing-y-40));--ix-empty-state-content--gap--large:var(--si-sys-sizing-spacing-y-80);--ix-empty-state-content-label--gap--large:var(--si-sys-sizing-spacing-y-40);--ix-empty-state--gap--compact:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-icon--size--compact:var(--si-sys-sizing-size-90);--ix-empty-state-content--gap--compact:var(--si-sys-sizing-spacing-x-60);--ix-empty-state--gap--compact-break:var(--si-sys-sizing-spacing-x-60);--ix-empty-state-icon--size:var(--si-sys-sizing-size-90);--ix-empty-state-content--gap:var(--si-sys-sizing-spacing-x-40);--ix-empty-state-content-label--gap:var(--si-sys-sizing-spacing-y-20)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .label__description{color:var(--ix-empty-state-label--color)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state--gap--large)}:host(.emptyState.emptyState--large) .emptyState__icon{width:var(--ix-empty-state-icon--width--large);height:var(--ix-empty-state-icon--height--large);display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-content--gap--large)}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:var(--ix-empty-state-content-label--gap--large)}:host(.emptyState.emptyState--large) .label__description,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:var(--ix-empty-state--gap--compact)}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:var(--ix-empty-state-icon--size--compact)}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:var(--ix-empty-state-content--gap--compact)}:host(.emptyState.emptyState--compact) .emptyState__content .content__label{display:flex;flex-direction:column;gap:var(--ix-empty-state-content-label--gap)}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:var(--ix-empty-state--gap--compact-break)}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:var(--ix-empty-state-icon--size)}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:var(--ix-empty-state-content--gap)}:host(.emptyState.emptyState--compactBreak) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;gap:var(--ix-empty-state-content-label--gap);min-height:var(--ix-empty-state-icon--size)}`;
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
   * @breaking-change 6.0.0 Replaces the removed `subHeader` property
   */
  description;
  /**
   * Optional empty state action
   */
  action;
  /**
   * ARIA label for the empty state icon
   */
  ariaLabelEmptyStateIcon;
  /**
   * Empty state action click event
   */
  actionClick;
  render() {
    return h(Host, { key: "c35e6cdd5bcb06da34c19606a4d634278fda740a", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "01840eae4525c4e8373426cf57f1b01b42ad8a17", class: "emptyState__icon" }, h("ix-icon", { key: "47ca01b7db5779ca87c1c34ecf3a6347c88984aa", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "--si-sys-color-text-secondary", "aria-label": this.ariaLabelEmptyStateIcon })), h("div", { key: "dd5d55d2d8dca1603f46bb869b8a78766c3a19f8", class: "emptyState__content" }, h("div", { key: "c45f6078b064b33068746e6eea2c1553f70c31e8", class: "content__label" }, h("ix-typography", { key: "bc00ebcaa0bb49feb43c961caa8cd7155b9b75aa", format: this.layout === "large" ? "h3" : "body" }, this.header), this.description && h("div", { key: "6981766d5e185ea127faadc193e92c610ea20239", class: "label__description" }, this.description)), this.action && h("div", { key: "b25a6d096d465d2e081b9c8fd5be64e3d5516e11", class: "content__action" }, h("ix-button", { key: "5d48421b13814a75e7aaadabf55bdec2d9d908ed", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = emptyStateCss();
export {
  EmptyState as ix_empty_state
};
