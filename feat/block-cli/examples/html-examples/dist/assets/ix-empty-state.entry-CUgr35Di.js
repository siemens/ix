import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CRrZCTD3.js";
const emptyStateCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .label__subHeader{color:var(--theme-color-soft-text)}:host(.emptyState.emptyState--large){display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--large) .emptyState__icon{width:3.5rem;height:3.5rem;display:flex;justify-content:center;align-items:center}:host(.emptyState.emptyState--large) .emptyState__icon ix-icon{transform:scale(1.75)}:host(.emptyState.emptyState--large) .emptyState__content{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem}:host(.emptyState.emptyState--large) .emptyState__content .content__label{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.5rem}:host(.emptyState.emptyState--large) .label__subHeader,:host(.emptyState.emptyState--large) ix-typography{text-align:center}:host(.emptyState.emptyState--compact){display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compact) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compact) .emptyState__content{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1rem}:host(.emptyState.emptyState--compactBreak){display:flex;flex-direction:row;align-items:flex-start;gap:1rem}:host(.emptyState.emptyState--compactBreak) .emptyState__icon{display:flex;flex-direction:row;align-items:center;height:2.5rem}:host(.emptyState.emptyState--compactBreak) .emptyState__content{display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem}`;
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
    return h(Host, { key: "f7c919dc749bb8870caff129ce9f647b24072a00", class: `emptyState emptyState--${this.layout}` }, this.icon && h("div", { key: "16e77d8fa3678d254beec3cf41beb53caf50e0bb", class: "emptyState__icon" }, h("ix-icon", { key: "151fbdb3ab65471e6237a05cae63234dae09d111", name: this.icon, size: this.layout === "large" ? "32" : "32", color: "color-soft-text", "aria-label": this.ariaLabelEmptyStateIcon })), h("div", { key: "5c155f3452c88af7f0d454582d0b64b9a2f89cee", class: "emptyState__content" }, h("div", { key: "abdad2c8946375d5086c63a676302da5033c18cd", class: "content__label" }, h("ix-typography", { key: "491710da97d42aae7e503cba5566506036c8af30", format: this.layout === "large" ? "h3" : "body" }, this.header), this.subHeader && h("div", { key: "5bf744213c7c9e574e772a0c129b80ea56b739a3", class: "label__subHeader" }, this.subHeader)), this.action && h("div", { key: "e80f4c9baed108315dd21fe598e10135aac3d4da", class: "content__action" }, h("ix-button", { key: "ea75764b420e62ec10c16b55f74a1a5474321f4c", onClick: () => this.actionClick.emit() }, this.action))));
  }
};
EmptyState.style = emptyStateCss();
export {
  EmptyState as ix_empty_state
};
