import { a as registerInstance, h, H as Host } from "./global-Ba1Wm6ph.js";
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
    return h(Host, { key: "573ccbcfed15a321337bfa2f1fa9a96180b6e571", class: `card-${this.variant}` }, h("ix-card", { key: "e77892b11a58d8e9814ad78166a8075d84a9f186", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "06f1b9c474f2ad5601c4ffad3f4ccca8867bc02c" }, h("ix-card-title", { key: "e836bc895068068a84b68202aa2f9c45d1ea5451" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "155701be5e3541709b32eb9d64a5fd5b45a2c377", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "e6e3850edbbb81296c493c8d57c6c3dfc415b52b", name: "title-action" })), h("ix-typography", { key: "1c0291c775f4ac8183f7fa82482d009e7b87fe17", format: "h4" }, this.heading), h("ix-typography", { key: "4a25b6edbb37ec169fa6bd55b456d630d20c4ff4" }, this.subheading)), h("ix-card-accordion", { key: "3fbb451abc4cbdd7cfd83700a91c377743dd928d", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "f52aed47b047a496dc876a8c52eb756a55a3a1a6" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
