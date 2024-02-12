import { r as registerInstance, h, H as Host } from "./index.b719f867.js";
const pushCardCss = ":host{display:block;position:relative}:host .icon{transform:scale(1.25)}:host .notification{font-size:40px}:host ix-card-content{height:11rem}:host(:hover) ix-card.card-insight:hover{--ix-card-background:var(--theme-color-ghost--hover)}:host(:hover) ix-card.card-notification:hover{--ix-card-background:var(--theme-color-component-1--hover)}:host(:hover) ix-card.card-alarm:hover{--ix-card-background:var(--theme-color-alarm--hover)}:host(:hover) ix-card.card-critical:hover{--ix-card-background:var(--theme-color-critical--hover)}:host(:hover) ix-card.card-warning:hover{--ix-card-background:var(--theme-color-warning--hover)}:host(:hover) ix-card.card-success:hover{--ix-card-background:var(--theme-color-success--hover)}:host(:hover) ix-card.card-info:hover{--ix-card-background:var(--theme-color-info--hover)}:host(:hover) ix-card.card-neutral:hover{--ix-card-background:var(--theme-color-neutral--hover)}:host(:hover) ix-card.card-primary:hover{--ix-card-background:var(--theme-color-primary--hover)}:host(:active) ix-card.card-insight:active{--ix-card-background:var(--theme-color-ghost--active)}:host(:active) ix-card.card-notification:active{--ix-card-background:var(--theme-color-component-1--active)}:host(:active) ix-card.card-alarm:active{--ix-card-background:var(--theme-color-alarm--active)}:host(:active) ix-card.card-critical:active{--ix-card-background:var(--theme-color-critical--active)}:host(:active) ix-card.card-warning:active{--ix-card-background:var(--theme-color-warning--active)}:host(:active) ix-card.card-success:active{--ix-card-background:var(--theme-color-success--active)}:host(:active) ix-card.card-info:active{--ix-card-background:var(--theme-color-info--active)}:host(:active) ix-card.card-neutral:active{--ix-card-background:var(--theme-color-neutral--active)}:host(:active) ix-card.card-primary:active{--ix-card-background:var(--theme-color-primary--active)}";
const IxPushCardStyle0 = pushCardCss;
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
    return h(Host, { key: "96529a9ec926a30bf0ff5609a215a50df3a77b8d" }, h("ix-card", { key: "5bd737a3a82658bfb9a778dd6202ddecd0a754b2", variant: this.variant }, h("ix-card-content", { key: "829626941478481b805a287f5ae56541556e7207" }, h("ix-card-title", { key: "30e966156649d54adabce3883ed182fe9ff0e42b" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32" }) : null, h("span", { key: "b09cc036a7b0b4aaf647cd432dfae8c6793ec91a", class: "notification" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "9f85511858f444cdb6629515c428a5454fe94525", name: "title-action" })), h("ix-typography", { key: "425a782ad84de4af28876cd268a7162b983830a0", color, format: "h4" }, this.heading), h("ix-typography", { key: "4da2386c51ae909c824c16215ffdd4daa6524225", color }, this.subheading)), h("ix-card-accordion", { key: "ac3701b2ab1caade4ca1ab810e1a47ac11c4e963", collapse: this.collapse }, h("slot", { key: "6ed725b03baaa16fbdc9ff42e8e8fd26be683013" }))));
  }
};
PushCard.style = IxPushCardStyle0;
export {
  PushCard as ix_push_card
};
