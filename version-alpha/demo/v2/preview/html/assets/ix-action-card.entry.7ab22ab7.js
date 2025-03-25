import { r as registerInstance, h, H as Host } from "./global.23f98c2e.js";
const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";
const IxActionCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.icon = void 0;
    this.selected = false;
  }
  render() {
    return h(Host, { key: "39a646f71db64b59ba53a54805663851a8f3e284" }, h("ix-card", { key: "e5eb68de78c4773d001bbabfc99f7bfbad374fe0", selected: this.selected, variant: this.variant, class: "pointer" }, h("ix-card-content", { key: "5da654e9f30859b19243fef30e5d60dc545a2463" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("div", { key: "8377281c7516efa2c0bd9dfce86b92aa01fb62f1" }, this.heading ? h("ix-typography", { format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5" }, this.subheading) : null, h("slot", { key: "f56da3824a2f808dc547044ae87afce70e3673ef" })))));
  }
};
IxActionCard.style = actionCardCss;
export {
  IxActionCard as ix_action_card
};
