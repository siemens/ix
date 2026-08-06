import { r as registerInstance, h, H as Host } from "./global-DSse0xVy.js";
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
    return h(Host, { key: "84f16c1dae0f83e1bc18a2fc61229b779bd4bb74", class: `card-${this.variant}` }, h("ix-card", { key: "def0d7b3dec5725a040c747b14c3bf6a4ea0b71a", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "a7bf2557b59a4cf309349ced90d3310a513dca65" }, h("ix-card-title", { key: "d526089ef1c6aa47eae26ad8a5eae50fddb49d08" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "7b51662e2222759341cc3e587903913ac6232ada", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "c1e3e021e29f81c6fa924c98cf7d2ca554973640", name: "title-action" })), h("ix-typography", { key: "6519160843ee6a57797aa0d5f10492608ac2564a", format: "h4" }, this.heading), h("ix-typography", { key: "7bf17fc5f68fb0358adb3857211109a8f3a79c6c" }, this.subheading)), h("ix-card-accordion", { key: "e52be8fae883e6a9cfc571d214a29a1f00755619", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "244b34b7ee6a8ff389061b9b16ac6ac37bd87266" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
