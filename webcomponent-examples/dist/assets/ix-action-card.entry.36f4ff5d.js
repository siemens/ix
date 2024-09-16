import { r as registerInstance, h, H as Host } from "./global.00f6d77e.js";
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
    return h(Host, { key: "d868aba285518ab8a4f7c73261f42f9d35de76ed" }, h("ix-card", { key: "04582ff065c25edf375d19e27aa0e24c9ec6f4ad", selected: this.selected, variant: this.variant, class: "pointer" }, h("ix-card-content", { key: "789f09e149def95bd03c8c747a95263283672cbe" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("div", { key: "b29c5aed35ab9cb554a6893cbc5b0e25d0eb5c5e" }, this.heading ? h("ix-typography", { format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", color: this.getSubheadingColor() }, this.subheading) : null, h("slot", { key: "4659d8a59ee2bf88be8e1cd73d98e190659387f6" })))));
  }
};
IxActionCard.style = IxActionCardStyle0;
export {
  IxActionCard as ix_action_card
};
