import { r as registerInstance, h, H as Host } from "./global-Dfa5QLOG.js";
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
    return h(Host, { key: "155f94e09a5af4f1bed8ef1c7aed77e4635c2f81", class: `card-${this.variant}` }, h("ix-card", { key: "4ab2ff0601194913af965463c846520a48b3bed7", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "e2463c37c415f120dd07fbf7654ea7b45a41d06d" }, h("ix-card-title", { key: "47e49f9ed645e6e67e2f4bf2f33614f7beba1a3d" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "60a754f536402475bae23fea1ad1b544cf732479", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "90e28ab3363d29c4de713745f6a9147896573af9", name: "title-action" })), h("ix-typography", { key: "254328562a34eae9f15c5870328a96b43ef335e8", format: "h4" }, this.heading), h("ix-typography", { key: "a64a4f8cc0056d266c64f853978f51c73042fb5b" }, this.subheading)), h("ix-card-accordion", { key: "8e9806f9066f45e02373f34e56d6c231e28d799c", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "2ad5a468a3dd8e6bbd7f3386e11089c0e94e0a8c" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
