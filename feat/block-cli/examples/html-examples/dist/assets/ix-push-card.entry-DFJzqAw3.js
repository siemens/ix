import { r as registerInstance, h, H as Host } from "./global-BlVZeLef.js";
const pushCardCss = ":host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}:host(.card-outline) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-outline-accordion--border-color)}:host(.card-filled) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-filled-accordion--border-color)}:host(.card-alarm) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-alarm-accordion--border-color)}:host(.card-critical) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-critical-accordion--border-color)}:host(.card-warning) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-warning-accordion--border-color)}:host(.card-success) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-success-accordion--border-color)}:host(.card-info) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-info-accordion--border-color)}:host(.card-neutral) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-neutral-accordion--border-color)}:host(.card-primary) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-primary-accordion--border-color)}";
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.expanded = false;
    this.passive = false;
  }
  render() {
    var _a;
    return h(Host, { key: "09bdc9201608cf50be812e8a9eb9168870a30612", class: `card-${this.variant}` }, h("ix-card", { key: "ec32b2ac5f7dfeca1620df7e494427d8b49992ad", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "3743387fa85de00416d2ef9bb9855f9a9953b33d" }, h("ix-card-title", { key: "1f50f9a28c97b59dbaad16994a2aaa66b8ea46f9" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "a3138c9f8d6c37105a8e887134503f087b28c75a", format: "display-xxl" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "f49b413b6a8dfa11f7b463c2c1c432ed7e7ef37c", name: "title-action" })), h("ix-typography", { key: "ef6175de803330d4248fa5d54055e457fc6a34d9", format: "h4" }, this.heading), h("ix-typography", { key: "6a839dc8a19cd653f537c586ad71ae810825a093" }, this.subheading)), h("ix-card-accordion", { key: "145ecebd2d51eeb3f80e249cd0b5be1c39455b4e", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "aebdc1883e0805cfcaf31577208bc899479ec485" }))));
  }
};
PushCard.style = pushCardCss;
export {
  PushCard as ix_push_card
};
