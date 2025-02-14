import { r as registerInstance, h, H as Host, g as getElement } from "./global.7dd975c7.js";
const cardCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;align-self:flex-start;overflow:hidden;cursor:pointer;width:20rem;border:1px solid var(--ix-card-border-color, var(--theme-color-soft-bdr));border-radius:var(--theme-default-border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card-content{display:block;position:relative;flex-shrink:0;flex-grow:1;width:100%;height:calc(100% - 2rem);background-color:var(--ix-card-background, transparent);border-top-left-radius:var(--theme-default-border-radius);border-top-right-radius:var(--theme-default-border-radius);overflow:hidden}:host .card-content-wrapper{height:100%;width:100%;box-sizing:border-box}:host .card-footer{display:flex;position:relative;width:100%}:host(.card-insight),:host(.card-outline){--ix-card-background:var(--theme-color-ghost);--ix-card-border-color:var(--theme-color-soft-bdr)}:host(.card-insight) ::slotted(ix-card-accordion),:host(.card-outline) ::slotted(ix-card-accordion){color:var(--theme-color-primary)}:host(.card-notification),:host(.card-filled){--ix-card-background:var(--theme-color-component-1)}:host(.card-notification) ::slotted(ix-card-accordion),:host(.card-filled) ::slotted(ix-card-accordion){color:var(--theme-color-primary)}:host(.card-alarm){--ix-card-background:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host(.card-critical){--ix-card-background:var(--theme-color-critical);color:var(--theme-color-critical--contrast)}:host(.card-warning){--ix-card-background:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host(.card-success){--ix-card-background:var(--theme-color-success);color:var(--theme-color-success--contrast)}:host(.card-info){--ix-card-background:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host(.card-neutral){--ix-card-background:var(--theme-color-neutral);color:var(--theme-color-neutral--contrast)}:host(.card-primary){--ix-card-background:var(--theme-color-primary);color:var(--theme-color-neutral--contrast)}:host(:not(.card-insight,.card-outline)){--ix-card-border-color:transparent}:host(.card-insight:hover),:host(.card-outline:hover){--ix-card-background:var(--theme-color-ghost--hover)}:host(.card-notification:hover),:host(.card-filled:hover){--ix-card-background:var(--theme-color-component-1--hover)}:host(.card-alarm:hover){--ix-card-background:var(--theme-color-alarm--hover)}:host(.card-critical:hover){--ix-card-background:var(--theme-color-critical--hover)}:host(.card-warning:hover){--ix-card-background:var(--theme-color-warning--hover)}:host(.card-success:hover){--ix-card-background:var(--theme-color-success--hover)}:host(.card-info:hover){--ix-card-background:var(--theme-color-info--hover)}:host(.card-neutral:hover){--ix-card-background:var(--theme-color-neutral--hover)}:host(.card-primary:hover){--ix-card-background:var(--theme-color-primary--hover)}:host(.card-insight:active),:host(.card-outline:active){--ix-card-background:var(--theme-color-ghost--active)}:host(.card-notification:active),:host(.card-filled:active){--ix-card-background:var(--theme-color-component-1--active)}:host(.card-alarm:active){--ix-card-background:var(--theme-color-alarm--active)}:host(.card-critical:active){--ix-card-background:var(--theme-color-critical--active)}:host(.card-warning:active){--ix-card-background:var(--theme-color-warning--active)}:host(.card-success:active){--ix-card-background:var(--theme-color-success--active)}:host(.card-info:active){--ix-card-background:var(--theme-color-info--active)}:host(.card-neutral:active){--ix-card-background:var(--theme-color-neutral--active)}:host(.card-primary:active){--ix-card-background:var(--theme-color-primary--active)}:host(.selected){--ix-card-border-color:var(--theme-color-dynamic)}:host(.selected.card-insight),:host(.selected.card-outline){--ix-card-background:var(--theme-color-ghost--selected)}:host(.selected.card-notification),:host(.selected.card-filled){--ix-card-background:var(--theme-color-ghost--selected)}:host(.selected.card-alarm){--ix-card-background:var(--theme-color-alarm--active)}:host(.selected.card-critical){--ix-card-background:var(--theme-color-critical--active)}:host(.selected.card-warning){--ix-card-background:var(--theme-color-warning--active)}:host(.selected.card-success){--ix-card-background:var(--theme-color-success--active)}:host(.selected.card-info){--ix-card-background:var(--theme-color-info--active)}:host(.selected.card-neutral){--ix-card-background:var(--theme-color-neutral--active)}:host(.selected.card-primary){--ix-card-background:var(--theme-color-primary--active)}";
const IxCardStyle0 = cardCss;
const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "insight";
    this.selected = false;
  }
  render() {
    return h(Host, { key: "47a06ae7be967b6077ec9851b22724f39f08bdb5", class: {
      selected: this.selected,
      [`card-${this.variant}`]: true
    } }, h("div", { key: "3bd791183108512f4f150e4223c6b3487104d9f6", class: "card-content" }, h("slot", { key: "7b500f330a7c751385deadaabf9f0a4fbaff7444" })), h("div", { key: "700082bfb35c5ecb56d70502500112e1232f2afb", class: "card-footer" }, h("slot", { key: "bd156f9ac6728f9cf5a92bb8a454083a50a40cce", name: "card-accordion" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Card.style = IxCardStyle0;
const cardContentCss = ":host{display:flex;padding:1rem;height:100%;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .content-wrapper{box-sizing:border-box;height:100%;width:100%;overflow:hidden;gap:0.5rem;display:flex;flex-direction:column;align-items:flex-start}";
const IxCardContentStyle0 = cardContentCss;
const CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "b158a08d7ca4779af659d4fa143e047dba41088e" }, h("div", { key: "abd538339ad50ba6430c834eb1283c20788d78e2", class: "content-wrapper" }, h("slot", { key: "86494d2878e0cb36e417a5d5868fff7f551b4de7" })));
  }
};
CardContent.style = IxCardContentStyle0;
export {
  Card as ix_card,
  CardContent as ix_card_content
};
