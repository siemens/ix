import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
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
    return h(Host, { key: "71cb83edc3e9e57a2f8a73e41e819b74e7ce0669" }, h("ix-card", { key: "71d1eb80d2ea03862547845d3cfaae96137d7e77", selected: this.selected, variant: this.variant, class: "pointer" }, h("ix-card-content", { key: "f615c68c98ddfd6447bc19b3b3a27008243c909a" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("div", { key: "b037e8ff7d345f00178c0fb0385e02e4e8738891" }, this.heading ? h("ix-typography", { format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", color: this.getSubheadingColor() }, this.subheading) : null, h("slot", { key: "b4a4fa2b7149d3ac4b95670f233795c29f25b966" })))));
  }
};
IxActionCard.style = IxActionCardStyle0;
export {
  IxActionCard as ix_action_card
};
