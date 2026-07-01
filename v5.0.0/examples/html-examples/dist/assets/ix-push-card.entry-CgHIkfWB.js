import { r as registerInstance, h, H as Host } from "./global-Cx3A0XQN.js";
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
    return h(Host, { key: "3d966f88ee53b7434db82e236b6d5a3ed259e15a", class: `card-${this.variant}` }, h("ix-card", { key: "970a43dc207067a24f1192a366ad14bbea3ecc03", variant: this.variant, passive: this.passive }, h("ix-card-content", { key: "cda0a2f6275e2747f92122dfa878820d171ad4a5" }, h("ix-card-title", { key: "4c1c3adcda6f458dd6657b8ef459cdc3c4bc1837" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "8aa5e29bf268f7a8f8431e1505dc2616ae40b234", format: "display-xxl" }, this.notification ?? 0), h("slot", { key: "a48a6505a78b1fcc3ad0bd4d49b1238a1e011cb9", name: "title-action" })), h("ix-typography", { key: "76f13d039f2b061cd556157605e67962ec880583", format: "h4" }, this.heading), h("ix-typography", { key: "00a6874dab193c05556afcfb57344feffcd4b985" }, this.subheading)), h("ix-card-accordion", { key: "3cf8e3584a4549fbb7177db88a53b86c812dd3a2", collapse: !this.expanded, variant: this.variant }, h("slot", { key: "9e81eef77e8d53e366238c1a6a5d80ba967b8d40" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
