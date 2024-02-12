import { r as registerInstance, h, H as Host, g as getElement } from "./index.b719f867.js";
const cardCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;align-self:flex-start;overflow:hidden;width:20rem;border:1px solid var(--ix-card-border-color, var(--theme-color-soft-bdr));border-radius:var(--theme-default-border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .card-content{display:block;position:relative;flex-shrink:0;flex-grow:1;width:100%;height:calc(100% - 2rem);background-color:var(--ix-card-background, transparent);border-top-left-radius:var(--theme-default-border-radius);border-top-right-radius:var(--theme-default-border-radius)}:host .card-footer{display:flex;position:relative;width:100%}:host(.card-insight){--ix-card-background:transparent;--ix-card-border-color:var(--theme-color-soft-bdr)}:host(.card-notification){--ix-card-background:var(--theme-color-component-1)}:host(.card-alarm){--ix-card-background:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host(.card-critical){--ix-card-background:var(--theme-color-critical);color:var(--theme-color-critical--contrast)}:host(.card-warning){--ix-card-background:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host(.card-success){--ix-card-background:var(--theme-color-success);color:var(--theme-color-success--contrast)}:host(.card-info){--ix-card-background:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host(.card-neutral){--ix-card-background:var(--theme-color-neutral);color:var(--theme-color-neutral--contrast)}:host(.card-primary){--ix-card-background:var(--theme-color-primary);color:var(--theme-color-neutral--contrast)}:host(:not(.card-insight)){--ix-card-border-color:transparent}";
const IxCardStyle0 = cardCss;
const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "insight";
  }
  render() {
    return h(Host, { key: "1400295cbd52991dcd9a15240919b8c8a57f8543", class: `card-${this.variant}` }, h("div", { key: "4b98f1a17ea28c12790e88223a583d388576f213", class: "card-content" }, h("slot", { key: "79128897b09ee594e113ed03469f3c6bcf7e6420" })), h("div", { key: "d0e80d0b216840d12edfb418b52d254f0b200bc7", class: "card-footer" }, h("slot", { key: "a21cb2fe9942019cb238955fc65644b408e70e40", name: "card-accordion" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Card.style = IxCardStyle0;
const cardContentCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;gap:0.5rem;padding:1rem;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const IxCardContentStyle0 = cardContentCss;
const CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "ee46815485376b646616fe68d59f5057438e91f5" }, h("slot", { key: "4fe9415fb686a5700a81ce5a9584ceebd441d67d" }));
  }
};
CardContent.style = IxCardContentStyle0;
export {
  Card as ix_card,
  CardContent as ix_card_content
};
