import { r as registerInstance, h, H as Host } from "./global-C8IWpzMv.js";
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
    return h(Host, { key: "6e818e8a8ed95f5506dfb9b75eb5606830208cc7", class: `card-${this.variant}` }, h("ix-card", { key: "19e4f01c66504adf99cda4323a3b876f77b6fbf2", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "2fe4c35857609d48ba84cc6dfb6accd9a9a1e8a0" }, h("ix-card-title", { key: "f89c8a2d4e848c5ce98f9fd76bdeb734d299ba3c" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "6e1e1dd7674ec754d08dd3f0ad59103d2196a297", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "fb3244e188f06f71bbbddc872ebb691be171c8f8", name: "title-action" })), h("ix-typography", { key: "141086ce1d837f6d965d3491a901a654a3c3576c", format: "h4" }, this.heading), h("ix-typography", { key: "e498fa519aef2f37d3a3b82eea1abc24c9c1b32c" }, this.subheading)), h("ix-card-accordion", { key: "50105de4ec87cec1df81b2c42b35f5b1e00a5f97", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "e61f24e3b3b7436688e4e031217c35b4f6cabfde" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
