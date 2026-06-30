import { r as registerInstance, h, H as Host } from "./global-F68Qu5y3.js";
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
    return h(Host, { key: "d6dcd90699720b33424e9d2cefcbefff12013e8e", class: `card-${this.variant}` }, h("ix-card", { key: "a0cd25ecca858d94b7799eeb31955877c1770e66", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "ed5b00c03c83ce979bd38a3335f7aa0f5a1183be" }, h("ix-card-title", { key: "f5d97ea43bb2e36bc8a99f23945f1ea386d30d1b" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "eb1676137cf1293c38167f64cffa3f489ee31a2a", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "bcef567f8c8167cae5fe7901c3bc445fc6cde5cc", name: "title-action" })), h("ix-typography", { key: "f61d5dd695b1e7bdb1eba6047530f540108ba09e", format: "h4" }, this.heading), h("ix-typography", { key: "1562b0237a5d55671e3dcd1174c27780419c7039" }, this.subheading)), h("ix-card-accordion", { key: "86d1de9256ff815550736694125733cc0c08cb7c", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "afbf2adf84c0007ec2873c012a6f7c89b18aba07" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
