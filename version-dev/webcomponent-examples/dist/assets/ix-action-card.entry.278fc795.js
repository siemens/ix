import { r as registerInstance, h, H as Host } from "./index.7c90662d.js";
const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";
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
  render() {
    return h(Host, { key: "42f95fd1de84746fcad8094b51909364a10dddb3" }, h("ix-card", { key: "9dfb5ad9782e314dc4751cf2dd1cceebea9f3eca", selected: this.selected, variant: this.variant, class: "pointer" }, h("ix-card-content", { key: "29683fa1a1cc83dea13af3a26232f1b575788d3a" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "24" }) : null, h("div", { key: "125ac2f8b62cc1512b0a7c9d687a3f0a85eca5c3" }, this.heading ? h("ix-typography", { format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", color: this.variant === "insight" ? "soft" : void 0 }, this.subheading) : null, h("slot", { key: "7b76ddd1c734a4b741022914695bdeb3af2c2988" })))));
  }
};
IxActionCard.style = IxActionCardStyle0;
export {
  IxActionCard as ix_action_card
};
