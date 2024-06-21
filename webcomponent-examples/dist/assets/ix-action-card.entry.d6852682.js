import { r as registerInstance, h, H as Host } from "./global.8b5b8f81.js";
const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";
const IxActionCardStyle0 = actionCardCss;
const IxActionCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "insight";
    this.icon = void 0;
    this.heading = void 0;
    this.subheading = void 0;
    this.selected = false;
  }
  getSubheadingColor() {
    switch (this.variant) {
      case "insight":
      case "notification":
        return "soft";
      default:
        return void 0;
    }
  }
  render() {
    return h(Host, { key: "f83abb076a856034694fa17014a31c511508ac84" }, h("ix-card", { key: "e21ebb1bc1e27db30872b8c144001ea338c89ce2", selected: this.selected, variant: this.variant, class: "pointer" }, h("ix-card-content", { key: "6074ffb241993674c9b636d2b43c8cf0b76d3437" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("div", { key: "ee7c10340f5dd87d397f013de5879caddb37ca5d" }, this.heading ? h("ix-typography", { format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", color: this.getSubheadingColor() }, this.subheading) : null, h("slot", { key: "5ba86a041964d413a2f7ff7d323905ba9880543e" })))));
  }
};
IxActionCard.style = IxActionCardStyle0;
export {
  IxActionCard as ix_action_card
};
