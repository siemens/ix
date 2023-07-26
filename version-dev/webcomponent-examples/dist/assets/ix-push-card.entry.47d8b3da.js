import { r as registerInstance, h, H as Host } from "./index.6e87f0b8.js";
const pushCardCss = ":host{display:block;position:relative}:host .icon{transform:scale(1.25)}:host .notification{font-size:40px}:host ix-card-title{height:3rem}:host ix-card-content{height:7.875rem}:host(:hover) ix-card.card-insight:hover{--ix-card-background:var(--theme-color-ghost--hover)}:host(:hover) ix-card.card-notification:hover{--ix-card-background:var(--theme-color-component-1--hover)}:host(:hover) ix-card.card-alarm:hover{--ix-card-background:var(--theme-color-alarm--hover)}:host(:hover) ix-card.card-critical:hover{--ix-card-background:var(--theme-color-critical--hover)}:host(:hover) ix-card.card-warning:hover{--ix-card-background:var(--theme-color-warning--hover)}:host(:hover) ix-card.card-success:hover{--ix-card-background:var(--theme-color-success--hover)}:host(:hover) ix-card.card-info:hover{--ix-card-background:var(--theme-color-info--hover)}:host(:hover) ix-card.card-neutral:hover{--ix-card-background:var(--theme-color-neutral--hover)}:host(:active) ix-card.card-insight:active{--ix-card-background:var(--theme-color-ghost--active)}:host(:active) ix-card.card-notification:active{--ix-card-background:var(--theme-color-component-1--active)}:host(:active) ix-card.card-alarm:active{--ix-card-background:var(--theme-color-alarm--active)}:host(:active) ix-card.card-critical:active{--ix-card-background:var(--theme-color-critical--active)}:host(:active) ix-card.card-warning:active{--ix-card-background:var(--theme-color-warning--active)}:host(:active) ix-card.card-success:active{--ix-card-background:var(--theme-color-success--active)}:host(:active) ix-card.card-info:active{--ix-card-background:var(--theme-color-info--active)}:host(:active) ix-card.card-neutral:active{--ix-card-background:var(--theme-color-neutral--active)}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = void 0;
    this.notification = void 0;
    this.heading = void 0;
    this.subheading = void 0;
    this.variant = "insight";
  }
  render() {
    var _a;
    return h(Host, null, h("ix-card", { variant: this.variant }, h("ix-card-title", null, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { name: "title-action" })), h("ix-card-content", null, h("ix-typography", { variant: "default-title-single" }, this.heading), h("ix-typography", null, this.subheading)), h("ix-card-accordion", null, h("slot", null))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
