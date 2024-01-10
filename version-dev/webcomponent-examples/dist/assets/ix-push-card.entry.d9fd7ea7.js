import { r as registerInstance, h, H as Host } from "./index.e885955d.js";
const pushCardCss = ":host{display:block;position:relative}:host .icon{transform:scale(1.25)}:host .notification{font-size:40px}:host ix-card-content{height:11rem}:host(:hover) ix-card.card-insight:hover{--ix-card-background:var(--theme-color-ghost--hover)}:host(:hover) ix-card.card-notification:hover{--ix-card-background:var(--theme-color-component-1--hover)}:host(:hover) ix-card.card-alarm:hover{--ix-card-background:var(--theme-color-alarm--hover)}:host(:hover) ix-card.card-critical:hover{--ix-card-background:var(--theme-color-critical--hover)}:host(:hover) ix-card.card-warning:hover{--ix-card-background:var(--theme-color-warning--hover)}:host(:hover) ix-card.card-success:hover{--ix-card-background:var(--theme-color-success--hover)}:host(:hover) ix-card.card-info:hover{--ix-card-background:var(--theme-color-info--hover)}:host(:hover) ix-card.card-neutral:hover{--ix-card-background:var(--theme-color-neutral--hover)}:host(:hover) ix-card.card-primary:hover{--ix-card-background:var(--theme-color-primary--hover)}:host(:active) ix-card.card-insight:active{--ix-card-background:var(--theme-color-ghost--active)}:host(:active) ix-card.card-notification:active{--ix-card-background:var(--theme-color-component-1--active)}:host(:active) ix-card.card-alarm:active{--ix-card-background:var(--theme-color-alarm--active)}:host(:active) ix-card.card-critical:active{--ix-card-background:var(--theme-color-critical--active)}:host(:active) ix-card.card-warning:active{--ix-card-background:var(--theme-color-warning--active)}:host(:active) ix-card.card-success:active{--ix-card-background:var(--theme-color-success--active)}:host(:active) ix-card.card-info:active{--ix-card-background:var(--theme-color-info--active)}:host(:active) ix-card.card-neutral:active{--ix-card-background:var(--theme-color-neutral--active)}:host(:active) ix-card.card-primary:active{--ix-card-background:var(--theme-color-primary--active)}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = void 0;
    this.notification = void 0;
    this.heading = void 0;
    this.subheading = void 0;
    this.variant = "insight";
    this.collapse = true;
  }
  render() {
    var _a;
    const color = this.variant === "insight" || this.variant === "notification" ? "std" : void 0;
    return h(Host, null, h("ix-card", { variant: this.variant }, h("ix-card-content", null, h("ix-card-title", null, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { name: "title-action" })), h("ix-typography", { color, format: "h4" }, this.heading), h("ix-typography", { color }, this.subheading)), h("ix-card-accordion", { collapse: this.collapse }, h("slot", null))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
