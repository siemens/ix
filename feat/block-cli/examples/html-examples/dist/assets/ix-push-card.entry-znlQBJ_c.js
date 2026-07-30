import { r as registerInstance, h, H as Host } from "./global-J1r-v9CX.js";
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
    return h(Host, { key: "87b5035706cb0185a134ddd2e45466b493f07fd5", class: `card-${this.variant}` }, h("ix-card", { key: "9be4da7c994904acef288fa1978e59686cae2421", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "3241cd3f4cc30d6ca22a3c46bbd9f568045658ba" }, h("ix-card-title", { key: "b21f1cc10189039f34b328039a97dea8ef86e555" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "1a01b13d94cabb28b6d43fe12adabc88a9c08df5", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "313b10ba169a70bffaec438844b9eb35ba9cf1f6", name: "title-action" })), h("ix-typography", { key: "f4a3a1ce51cc82227d4736f8364213b523471370", format: "h4" }, this.heading), h("ix-typography", { key: "046a64f0b207f8358200f1928e876efe87dfd1d0" }, this.subheading)), h("ix-card-accordion", { key: "602d1fc4384d5f0a6106394fa62e6f0477d1b602", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "ddee78cb129337d9b2cc780c625f200ee208bd69" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
