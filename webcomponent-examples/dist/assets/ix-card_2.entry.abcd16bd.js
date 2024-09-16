import { r as registerInstance, h, H as Host, g as getElement } from "./global.00f6d77e.js";
const cardCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;align-self:flex-start;overflow:hidden;width:20rem;border:1px solid var(--ix-card-border-color, var(--theme-color-soft-bdr));border-radius:var(--theme-default-border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card-content{display:block;position:relative;flex-shrink:0;flex-grow:1;width:100%;height:calc(100% - 2rem);background-color:var(--ix-card-background, transparent);border-top-left-radius:var(--theme-default-border-radius);border-top-right-radius:var(--theme-default-border-radius)}:host .card-footer{display:flex;position:relative;width:100%}:host(.card-insight),:host(.card-outline){--ix-card-background:transparent;--ix-card-border-color:var(--theme-color-soft-bdr)}:host(.card-notification),:host(.card-filled){--ix-card-background:var(--theme-color-component-1)}:host(.card-alarm){--ix-card-background:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host(.card-critical){--ix-card-background:var(--theme-color-critical);color:var(--theme-color-critical--contrast)}:host(.card-warning){--ix-card-background:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host(.card-success){--ix-card-background:var(--theme-color-success);color:var(--theme-color-success--contrast)}:host(.card-info){--ix-card-background:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host(.card-neutral){--ix-card-background:var(--theme-color-neutral);color:var(--theme-color-neutral--contrast)}:host(.card-primary){--ix-card-background:var(--theme-color-primary);color:var(--theme-color-neutral--contrast)}:host(:not(.card-insight)){--ix-card-border-color:transparent}:host(.card-insight:hover){--ix-card-background:var(--theme-color-ghost--hover)}:host(.card-notification:hover){--ix-card-background:var(--theme-color-component-1--hover)}:host(.card-alarm:hover){--ix-card-background:var(--theme-color-alarm--hover)}:host(.card-critical:hover){--ix-card-background:var(--theme-color-critical--hover)}:host(.card-warning:hover){--ix-card-background:var(--theme-color-warning--hover)}:host(.card-success:hover){--ix-card-background:var(--theme-color-success--hover)}:host(.card-info:hover){--ix-card-background:var(--theme-color-info--hover)}:host(.card-neutral:hover){--ix-card-background:var(--theme-color-neutral--hover)}:host(.card-primary:hover){--ix-card-background:var(--theme-color-primary--hover)}:host(.card-insight:active){--ix-card-background:var(--theme-color-ghost--active)}:host(.card-notification:active){--ix-card-background:var(--theme-color-component-1--active)}:host(.card-alarm:active){--ix-card-background:var(--theme-color-alarm--active)}:host(.card-critical:active){--ix-card-background:var(--theme-color-critical--active)}:host(.card-warning:active){--ix-card-background:var(--theme-color-warning--active)}:host(.card-success:active){--ix-card-background:var(--theme-color-success--active)}:host(.card-info:active){--ix-card-background:var(--theme-color-info--active)}:host(.card-neutral:active){--ix-card-background:var(--theme-color-neutral--active)}:host(.card-primary:active){--ix-card-background:var(--theme-color-primary--active)}:host(.selected){--ix-card-border-color:var(--theme-color-dynamic)}:host(.selected.card-insight){--ix-card-background:var(--theme-color-ghost--selected)}:host(.selected.card-notification){--ix-card-background:var(--theme-color-ghost--selected)}:host(.selected.card-alarm){--ix-card-background:var(--theme-color-alarm--active)}:host(.selected.card-critical){--ix-card-background:var(--theme-color-critical--active)}:host(.selected.card-warning){--ix-card-background:var(--theme-color-warning--active)}:host(.selected.card-success){--ix-card-background:var(--theme-color-success--active)}:host(.selected.card-info){--ix-card-background:var(--theme-color-info--active)}:host(.selected.card-neutral){--ix-card-background:var(--theme-color-neutral--active)}:host(.selected.card-primary){--ix-card-background:var(--theme-color-primary--active)}";
const IxCardStyle0 = cardCss;
const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "insight";
    this.selected = void 0;
  }
  render() {
    return h(Host, { key: "4d096be9c3db2847204633f22624296d892e2fb9", class: {
      selected: this.selected,
      [`card-${this.variant}`]: true
    } }, h("div", { key: "e80707eb333158ac4f90fa0feaaede7309fa3567", class: "card-content" }, h("slot", { key: "50b6d4885936ff438c4fcab7c7b1b9d5e54137f3" })), h("div", { key: "c964e703c4c7783fd30a889838583d8e0426994b", class: "card-footer" }, h("slot", { key: "df4b7c7e9f8fbdea42c2e9b657dc6e4488ea4562", name: "card-accordion" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Card.style = IxCardStyle0;
const cardContentCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;gap:0.5rem;padding:1rem;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxCardContentStyle0 = cardContentCss;
const CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "816fee4fedc0535d0a8991bf6a58a97fecd27069" }, h("slot", { key: "136f2bfa5fd08ff95aa0d3f7a2bed5297aaf57e5" }));
  }
};
CardContent.style = IxCardContentStyle0;
export {
  Card as ix_card,
  CardContent as ix_card_content
};
