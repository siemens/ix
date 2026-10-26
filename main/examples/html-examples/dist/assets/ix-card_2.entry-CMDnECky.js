import { r as registerInstance, g as getElement, h, H as Host } from "./global-D8caMIU9.js";
const cardCss = () => `@charset "UTF-8";:host{--ix-card--border-color:var(--si-sys-color-border-3);--ix-card-accordion--color:var(--si-sys-color-text-primary);--ix-card--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-card--border-width:var(--si-sys-sizing-border-width-default);--ix-card--strip-height:var(--si-sys-sizing-border-width-emphasis);--ix-card--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-card-base--background:transparent;--ix-card-base--background--hover:var(--si-sys-color-background-hover);--ix-card-base--background--active:var(--si-sys-color-background-active);--ix-card-base--background--selected:var(--si-sys-color-background-active);--ix-card-base--border-color:var(--si-sys-color-border-3);--ix-card-base--border-color--hover:var(--si-sys-color-border-3);--ix-card-base--border-color--active:var(--si-sys-color-border-3);--ix-card-base--border-color--selected:var(--si-sys-color-border-accent-hover);--ix-card-base--color:var(--si-sys-color-text-primary);--ix-card-filled--background:var(--si-sys-color-background-1);--ix-card-filled--background--hover:var(--si-sys-color-background-hover);--ix-card-filled--background--active:var(--si-sys-color-background-active);--ix-card-filled--background--selected:var(--si-sys-color-background-active);--ix-card-status-color:transparent}:host(.card-danger){--ix-card-status-color:var(--si-sys-color-border-danger)}:host(.card-warning){--ix-card-status-color:var(--si-sys-color-border-warning)}:host(.card-caution){--ix-card-status-color:var(--si-sys-color-border-caution)}:host(.card-information){--ix-card-status-color:var(--si-sys-color-border-information)}:host(.card-accent){--ix-card-status-color:var(--si-sys-color-border-accent)}:host(.card-critical){--ix-card-status-color:var(--si-sys-color-border-critical)}:host(.card-success){--ix-card-status-color:var(--si-sys-color-border-success)}:host(.card-neutral){--ix-card-status-color:var(--si-sys-color-border-neutral)}:host{--ix-card--width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-110) +       var(--si-sys-sizing-spacing-x-30)   );--ix-card-content--height:calc(100% - var(--si-sys-sizing-size-80))}:host{display:flex;position:relative;flex-direction:column;align-items:flex-start;align-self:flex-start;cursor:default;box-sizing:border-box;width:var(--ix-card--width);border-radius:var(--ix-card--border-radius);color:var(--ix-card-base--color);--ix-card-background:var(--ix-card-base--background);--ix-card-border-color:var(--ix-card-base--border-color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .card-chrome{display:flex;flex-direction:column;align-items:flex-start;width:100%;flex:1 1 auto;min-height:0;box-sizing:border-box;border:var(--ix-card--border-width) solid var(--ix-card-border-color, var(--ix-card--border-color));border-radius:inherit;overflow:hidden}:host .card-content{display:block;position:relative;flex-shrink:0;flex-grow:1;width:100%;height:var(--ix-card-content--height);background-color:var(--ix-card-background, transparent);overflow:hidden}:host .card-content-wrapper{height:100%;width:100%;box-sizing:border-box}:host .card-footer{display:flex;position:relative;width:100%}:host(.clickable){cursor:pointer}:host(:not(.outline)){--ix-card-background:var(--ix-card-filled--background);--ix-card-border-color:var(--ix-card-filled--background);--ix-card--border-width:0}:host(:not(.card-base))::before{content:"";position:absolute;top:0;left:0;right:0;height:var(--ix-card--strip-height);border-radius:var(--ix-card--border-radius) var(--ix-card--border-radius) 0 0;z-index:1;pointer-events:none;background-color:var(--ix-card-status-color)}:host(.selected){--ix-card-border-color:var(--ix-card-base--border-color--selected)}:host(.outline:not(.card-base)),:host(.outline.selected:not(.card-base)){--ix-card-border-color:var(--ix-card-base--border-color)}:host(.clickable.outline:hover){--ix-card-background:var(--ix-card-base--background--hover)}:host(.clickable.outline:active){--ix-card-background:var(--ix-card-base--background--active)}:host(.clickable:not(.outline):hover){--ix-card-background:var(--ix-card-filled--background--hover);--ix-card-border-color:var(--ix-card-filled--background--hover)}:host(.clickable:not(.outline):active){--ix-card-background:var(--ix-card-filled--background--active);--ix-card-border-color:var(--ix-card-filled--background--active)}:host(.selected:not(.clickable)),:host(.selected){--ix-card-background:var(--ix-card-base--background--selected)}:host(.selected:not(.outline)){--ix-card-background:var(--ix-card-filled--background--selected);--ix-card-border-color:var(--ix-card-filled--background--selected)}:host(.outline) ::slotted(ix-card-accordion),:host(:not(.outline)) ::slotted(ix-card-accordion){color:var(--ix-card-accordion--color)}`;
const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Card status variant
   */
  variant = "base";
  /**
   * Show the card with outline chrome.
   * When omitted, outline chrome is used (`true`).
   * When `false`, uses a filled surface; status variants then show a top color strip.
   *
   * @since 6.0.0
   */
  outline;
  /**
   * Show card in selected state
   */
  selected = false;
  /**
   * Enable pointer cursor and hover/active surface styles.
   * Default is `false` (non-clickable).
   *
   * @since 6.0.0
   */
  clickable = false;
  get isOutline() {
    return this.outline !== false;
  }
  render() {
    return h(Host, { key: "e68e62b23abb2bd21ac7e2759ae088565fd1d8c1", class: {
      selected: this.selected,
      outline: this.isOutline,
      clickable: this.clickable,
      [`card-${this.variant}`]: true
    } }, h("div", { key: "33ff6e4c9955822ac0214852d7ca098ee00bfb3b", class: "card-chrome" }, h("div", { key: "90858e96a7943185440b4cd38a4b3ae1caad115b", class: "card-content" }, h("slot", { key: "3f99708b5969aecdfbd4d33f0692c23df2c82e20" })), h("div", { key: "8016232a2d55fc3e44623c8d0d31030524c65172", class: "card-footer" }, h("slot", { key: "e2112ab9da1eba8ad89dfa682545e5212d2c0890", name: "card-accordion" }))));
  }
};
Card.style = cardCss();
const cardContentCss = () => `@charset "UTF-8";:host{--ix-card-content-content-wrapper--gap:var(--si-sys-sizing-spacing-y-40)}:host{box-sizing:border-box;display:flex;padding:var(--ix-card-content--padding, var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60));height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .content-wrapper{box-sizing:border-box;height:100%;width:100%;overflow:hidden;gap:var(--ix-card-content-content-wrapper--gap);display:flex;flex-direction:column;align-items:flex-start}`;
const CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "40e369a33dd928e6959121a4afbc2727c34debbc" }, h("div", { key: "e17ad8e47a5673c713ab430fea1c0451f75a5a23", class: "content-wrapper", part: "content" }, h("slot", { key: "7d21ee29db27379c7cabff909ee96fcebced6f7f" })));
  }
};
CardContent.style = cardContentCss();
export {
  Card as ix_card,
  CardContent as ix_card_content
};
