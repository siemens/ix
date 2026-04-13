import { r as registerInstance, h, H as Host } from "./global-CtBDOAVb.js";
const pushCardCss = () => `:host{display:block;position:relative}:host ix-card{cursor:default}:host ix-card-accordion{cursor:pointer}:host .icon{height:2.5rem;width:2.5rem}:host ix-card-title{height:2.5rem}:host ix-card-content{height:11rem}:host(.card-outline) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-outline-accordion--border-color)}:host(.card-filled) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-filled-accordion--border-color)}:host(.card-alarm) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-alarm-accordion--border-color)}:host(.card-critical) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-critical-accordion--border-color)}:host(.card-warning) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-warning-accordion--border-color)}:host(.card-success) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-success-accordion--border-color)}:host(.card-info) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-info-accordion--border-color)}:host(.card-neutral) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-neutral-accordion--border-color)}:host(.card-primary) ix-card-content{border-bottom:var(--theme-push-card--border-width) solid var(--theme-push-card-primary-accordion--border-color)}`;
const PushCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Card icon
   */
  icon;
  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  ariaLabelIcon;
  /**
   * Card KPI value
   */
  notification;
  /**
   * Card heading
   */
  heading;
  /**
   * Card subheading
   */
  subheading;
  /**
   * Card variant
   */
  variant = "outline";
  /**
   * Expand the card
   */
  expanded = false;
  /**
   * If true, disables hover and active styles and changes cursor to default
   */
  passive = false;
  render() {
    return h(Host, { key: "1efb1c175d30a0a1b6917775abde2afb35df3fc6", class: `card-${this.variant}` }, h("ix-card", { key: "25f536752cb9f1f10e21d41bf043ca28c376522c", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "b0c0d3f6a883d50f484d6969f6e7e754cc8a223c" }, h("ix-card-title", { key: "10e79c9e34161e3f3bd03710dbd10123317708c7" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "f6db7168864196fc9e95480f0147acd2fce4f65f", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "f8879268ece61d7ce5e1c34ec8a64aeac1d884f1", name: "title-action" })), h("ix-typography", { key: "0e32c2ee5765e6a6eff76ecbe08f77d205a384e3", format: "h4" }, this.heading), h("ix-typography", { key: "853a2774de8d15415ff4585b8574fd32647260db" }, this.subheading)), h("ix-card-accordion", { key: "25b5f8cd28ab547e6a2bb9e4bcbe9b6d5fb1d6dd", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "d97f10412942638c568c6448830b1559a18687ee" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
