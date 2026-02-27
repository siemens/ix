import { r as registerInstance, h, H as Host } from "./global-DXu0UsM0.js";
import { g as getFallbackLabelFromIconName, a as a11yBoolean } from "./a11y-DAzBNVe7-CO1Uj69l.js";
const actionCardCss = ":host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host ix-card{width:100%;height:100%}";
const IxActionCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.icon = void 0;
    this.selected = false;
    this.passive = false;
  }
  getSubheadingTextColor() {
    return this.variant === "outline" || this.variant === "filled" ? "soft" : void 0;
  }
  render() {
    const ariaLabelledBy = !this.ariaLabelCard && this.heading ? "ix-action-card-heading" : void 0;
    return h(Host, { key: "98354c99a3d8a22977badbc3280ddd7b7fe534b4" }, h("ix-card", { key: "04c6d897c88538eafc9b25a6fe16167d5976e96e", selected: this.selected, variant: this.variant, passive: this.passive, class: "pointer", "aria-label": this.ariaLabelCard, "aria-labelledby": ariaLabelledBy, role: ariaLabelledBy ? "group" : void 0 }, h("ix-card-content", { key: "388c76378f874caaed6b14a48f24c29613a25a2a" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon || getFallbackLabelFromIconName(this.icon) }) : null, h("div", { key: "0d736ba11c0fa06be5a20dd7196235d989c60af0" }, this.heading ? h("ix-typography", { id: "ix-action-card-heading", "aria-hidden": a11yBoolean(!ariaLabelledBy), format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", "text-color": this.getSubheadingTextColor() }, this.subheading) : null, h("slot", { key: "1f2960c5bebfc2e42b4d03cee64afe0b09ec175d" })))));
  }
};
IxActionCard.style = actionCardCss;
export {
  IxActionCard as ix_action_card
};
