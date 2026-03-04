import { r as registerInstance, h, H as Host } from "./global-BRURWDG-.js";
const pushCardCss = () => `:host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}:host(.card-outline) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-outline-accordion--border-color)}:host(.card-filled) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-filled-accordion--border-color)}:host(.card-alarm) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-alarm-accordion--border-color)}:host(.card-critical) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-critical-accordion--border-color)}:host(.card-warning) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-warning-accordion--border-color)}:host(.card-success) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-success-accordion--border-color)}:host(.card-info) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-info-accordion--border-color)}:host(.card-neutral) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-neutral-accordion--border-color)}:host(.card-primary) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-primary-accordion--border-color)}`;
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "outline";
    this.expanded = false;
    this.passive = false;
  }
  render() {
    var _a;
    return h(Host, { key: "a625388dad951d4fecd08520f04b467b9ace38ba", class: `card-${this.variant}` }, h("ix-card", { key: "347e2d44652dca950616c95b938df427e815d85f", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "cee4c98862b477ad511e4bac28e87b5d43b9309c" }, h("ix-card-title", { key: "a0ec168f77f59c28b01b466051c302d66b149ee8" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "be0cf6478e7fd1645e877fe79b200dbe779be085", format: "display-xxl" }, (_a = this.notification) !== null && _a !== void 0 ? _a : 0), h("slot", { key: "b4aa5af01d011e29195b160cd550477ea8353cd0", name: "title-action" })), h("ix-typography", { key: "846c35cdca3572d8df358da2fe06cbfe693ddba2", format: "h4" }, this.heading), h("ix-typography", { key: "5d1c62eb6309165f5c88a18ecd39610bf16e08c1" }, this.subheading)), h("ix-card-accordion", { key: "cecc2fffa4b067db39af52305eb758c253bae76b", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "e94eee8890041c394de75a603c030c263291298e" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
