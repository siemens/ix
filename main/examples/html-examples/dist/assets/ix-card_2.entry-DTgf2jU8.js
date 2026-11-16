import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-C15cBwMn.js";
import "./preload-helper-UZRgTS1n.js";
const cardCss = () => `@charset "UTF-8";:host{--ix-card--border-color:var(--si-sys-color-border-3);--ix-card-accordion--color:var(--si-sys-color-text-primary);--ix-card--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-card--border-width:var(--si-sys-sizing-border-width-default);--ix-card--border-width-default:var(--si-sys-sizing-border-width-default);--ix-card--strip-height:var(--si-sys-sizing-border-width-emphasis);--ix-card--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-card-base--background:transparent;--ix-card-base--background--hover:var(--si-sys-color-background-hover);--ix-card-base--background--active:var(--si-sys-color-background-active);--ix-card-base--background--selected:var(--si-sys-color-background-active);--ix-card-base--border-color:var(--si-sys-color-border-3);--ix-card-base--border-color--hover:var(--si-sys-color-border-3);--ix-card-base--border-color--active:var(--si-sys-color-border-3);--ix-card-base--border-color--selected:var(--si-sys-color-border-accent-active);--ix-card-base--color:var(--si-sys-color-text-primary);--ix-card-filled--background:var(--si-sys-color-background-1);--ix-card-filled--background--hover:var(--si-sys-color-background-hover);--ix-card-filled--background--active:var(--si-sys-color-background-active);--ix-card-filled--background--selected:var(--si-sys-color-background-active);--ix-card-status-color:transparent}:host(.card-danger){--ix-card-status-color:var(--si-sys-color-border-danger)}:host(.card-warning){--ix-card-status-color:var(--si-sys-color-border-warning)}:host(.card-caution){--ix-card-status-color:var(--si-sys-color-border-caution)}:host(.card-information){--ix-card-status-color:var(--si-sys-color-border-information)}:host(.card-accent){--ix-card-status-color:var(--si-sys-color-border-accent)}:host(.card-critical){--ix-card-status-color:var(--si-sys-color-border-critical)}:host(.card-success){--ix-card-status-color:var(--si-sys-color-border-success)}:host(.card-neutral){--ix-card-status-color:var(--si-sys-color-border-neutral)}:host{--ix-card--width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-110) +       var(--si-sys-sizing-spacing-x-30)   );--ix-card-content--height:calc(100% - var(--si-sys-sizing-size-80))}:host{display:flex;position:relative;flex-direction:column;align-items:flex-start;align-self:flex-start;cursor:default;box-sizing:border-box;width:var(--ix-card--width);border-radius:var(--ix-card--border-radius);color:var(--ix-card-base--color);--ix-card-background:var(--ix-card-base--background);--ix-card-border-color:var(--ix-card-base--border-color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .card-chrome{display:flex;flex-direction:column;align-items:flex-start;width:100%;flex:1 1 auto;min-height:0;box-sizing:border-box;border:var(--ix-card--border-width) solid var(--ix-card-border-color, var(--ix-card--border-color));border-radius:inherit;overflow:hidden}:host .card-content{display:block;position:relative;flex-shrink:0;flex-grow:1;width:100%;height:var(--ix-card-content--height);background-color:var(--ix-card-background, transparent);overflow:hidden}:host .card-content-wrapper{height:100%;width:100%;box-sizing:border-box}:host .card-footer{display:flex;position:relative;width:100%}:host(.clickable){cursor:pointer}:host(:not(.outline)){--ix-card-background:var(--ix-card-filled--background);--ix-card-border-color:var(--ix-card-filled--background);--ix-card--border-width:0}:host(:not(.card-base))::before{content:"";position:absolute;top:0;left:0;right:0;height:var(--ix-card--strip-height);border-radius:var(--ix-card--border-radius) var(--ix-card--border-radius) 0 0;z-index:1;pointer-events:none;background-color:var(--ix-card-status-color)}:host(.outline:not(.card-base)){--ix-card-border-color:var(--ix-card-base--border-color)}:host(.clickable.outline:hover){--ix-card-background:var(--ix-card-base--background--hover)}:host(.clickable.outline:active){--ix-card-background:var(--ix-card-base--background--active)}:host(.clickable:not(.outline):hover){--ix-card-background:var(--ix-card-filled--background--hover);--ix-card-border-color:var(--ix-card-filled--background--hover)}:host(.clickable:not(.outline):active){--ix-card-background:var(--ix-card-filled--background--active);--ix-card-border-color:var(--ix-card-filled--background--active)}:host(.selected:not(.clickable)),:host(.selected){--ix-card-background:var(--ix-card-base--background--selected)}:host(.selected),:host(.outline.selected),:host(.selected:not(.outline)),:host(.selected.clickable:not(.outline)){--ix-card-border-color:var(--ix-card-base--border-color--selected)}:host(.selected:not(.outline)){--ix-card-background:var(--ix-card-filled--background--selected);--ix-card--border-width:var(--ix-card--border-width-default)}:host(.outline) ::slotted(ix-card-accordion),:host(:not(.outline)) ::slotted(ix-card-accordion){color:var(--ix-card-accordion--color)}`;
const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Card status variant
   *
   * @breaking-change 6.0.0 Status variant values renamed (`default` is now `base`), `outline` and `filled` replaced by the `outline` property
   */
  variant = "base";
  /**
   * Show the card with outline chrome.
   * When omitted, outline chrome is used (`true`).
   * When `false`, uses a filled surface; status variants then show a top color strip.
   *
   * @since 6.0.0
   * @breaking-change 6.0.0 Replaces the `outline` and `filled` values of `variant`
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
   * @breaking-change 6.0.0 Replaces the `passive` property
   */
  clickable = false;
  get isOutline() {
    return this.outline !== false;
  }
  render() {
    return h(Host, { key: "6f44330def39bcd497969d1a5fa4a18985121d53", class: {
      selected: this.selected,
      outline: this.isOutline,
      clickable: this.clickable,
      [`card-${this.variant}`]: true
    } }, h("div", { key: "38da72d0b7439e1a77d576240f013d6bc98a369e", class: "card-chrome" }, h("div", { key: "eca0b22b56d047024702a82f913fedf67974c083", class: "card-content" }, h("slot", { key: "553d521121456d51520bf4b26d16b55f4f6f034c" })), h("div", { key: "ed82405b7054599553f19ae330da0160557a85f5", class: "card-footer" }, h("slot", { key: "8cc66adfff4dec24b5ae66143989f1a25e525392", name: "card-accordion" }))));
  }
};
Card.style = cardCss();
const cardContentCss = () => `@charset "UTF-8";:host{--ix-card-content-content-wrapper--gap:var(--si-sys-sizing-spacing-y-40)}:host{box-sizing:border-box;display:flex;padding:var(--ix-card-content--padding, var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60));height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .content-wrapper{box-sizing:border-box;height:100%;width:100%;overflow:hidden;gap:var(--ix-card-content-content-wrapper--gap);display:flex;flex-direction:column;align-items:flex-start}`;
const CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "9c705721302068c43855b220881da904f86c6815" }, h("div", { key: "6b1d45f61bf461bc87461e9c9d8eecbe25497daa", class: "content-wrapper", part: "content" }, h("slot", { key: "b01299e9debfa37cc2b6b18906f0867c9e71fc06" })));
  }
};
CardContent.style = cardContentCss();
export {
  Card as ix_card,
  CardContent as ix_card_content
};
