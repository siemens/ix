import { r as registerInstance, h, H as Host } from "./global-CRrZCTD3.js";
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
    return h(Host, { key: "6e27379d8c5651ed56a84a5dd6f2365135173a76", class: `card-${this.variant}` }, h("ix-card", { key: "8a4de6d29b50bb6a7b90e8769db7572b1f669096", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "c196dad852670a96bc21e6a02976845d263ca0a3" }, h("ix-card-title", { key: "8cecc066c70d2092259aedbf985856a1446b186c" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "49778248f3ca5913ee76bcd4fdb215af508e9c0b", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "0f818d4b2ddc9261ffb012fac1077955cdf4b326", name: "title-action" })), h("ix-typography", { key: "6fa4f83a9602d9bb01da5b0964ed673c3acfff68", format: "h4" }, this.heading), h("ix-typography", { key: "29cd84b009e2268ac88b265dfe1a9bf934c64c82" }, this.subheading)), h("ix-card-accordion", { key: "79884f777efcdaf9f4ec48675c121a766a16a8f3", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "4962ebb8fcab8cdd862d423946a2afadd06755ce" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
