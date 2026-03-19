import { r as registerInstance, h, H as Host } from "./global-C_dy4gBz.js";
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
    return h(Host, { key: "75e5bcdfa2ce28b46f709e2385684974e04da69c", class: `card-${this.variant}` }, h("ix-card", { key: "152e151655dbdbdd9e1f93b84548236412aab23f", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "8132526a238a85b1b5964ccf15e976c57b8e6816" }, h("ix-card-title", { key: "f393bad7944ce33ea8fa4581c88a80736d547452" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "45d32b7afc8ddc5ddc5e64668b514e6fd3c67e77", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "850659545c532d45d59a4c0f73035376d21345a9", name: "title-action" })), h("ix-typography", { key: "cde3462a70296e6e1d3e24d2fa5504ff90086e95", format: "h4" }, this.heading), h("ix-typography", { key: "e41f3c9cfb4c6f9241125a0cbb55db0a9ce688c1" }, this.subheading)), h("ix-card-accordion", { key: "fd97bca7949aed0ea905daa93cb84f1e8dafb988", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "fd4aad05632c2547946c130714be78efe1e65414" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
