import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-vubC4vyH.js";
import "./preload-helper-UZRgTS1n.js";
const pushCardCss = () => `@charset "UTF-8";:host{--ix-push-card--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-push-card--border-width:var(--si-sys-sizing-border-width-default);--ix-push-card--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-push-card-accordion--border-color:var(--si-sys-color-background-0);--ix-push-card--width:var(--si-sys-sizing-size-170)}:host{--ix-push-card-icon--icon-size:var(--si-sys-sizing-size-90);--ix-push-card--height:var(--si-sys-sizing-size-100);--ix-push-card-content--height:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-100) +       var(--si-sys-sizing-spacing-y-50) + var(--si-sys-sizing-size-30) -       2 * var(--si-sys-sizing-border-width-default)   );--ix-card-content--padding:var(--si-sys-sizing-spacing-y-60)     var(--si-sys-sizing-spacing-x-60) var(--si-sys-sizing-spacing-y-60);--ix-push-card-accordion-chrome-frame--border-width:var(--si-sys-sizing-border-width-none)}:host{display:block;position:relative;box-sizing:border-box;width:var(--ix-push-card--width);min-width:var(--ix-push-card--width)}:host ix-card{width:100%}:host ix-card-accordion{cursor:pointer}:host .icon{height:var(--ix-push-card-icon--icon-size);width:var(--ix-push-card-icon--icon-size);min-height:var(--ix-push-card-icon--icon-size);min-width:var(--ix-push-card-icon--icon-size)}:host ix-card-title{height:var(--ix-push-card--height);margin-top:0;margin-bottom:0}:host ix-card-content{height:var(--ix-push-card-content--height)}:host ix-card-content::part(content){overflow:visible}:host ix-card-accordion{--ix-card-accordion-expand-content--border-radius:0 0     var(--ix-push-card--border-radius) var(--ix-push-card--border-radius);--ix-card-accordion-chrome-frame--border-color:transparent;--ix-card-accordion-chrome-frame--border-width:var(     --ix-push-card-accordion-chrome-frame--border-width   );--ix-card-accordion-expand-action--border-top-width:var(     --ix-push-card--border-width   );--ix-card-accordion-expand-action--border-top-color:var(     --ix-push-card-accordion--border-color   )}`;
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
   * Card status variant
   */
  variant = "base";
  /**
   * Show the card with outline chrome.
   * When omitted, outline chrome is used (`true`).
   * When `false`, uses a filled surface; status variants then show a top color strip.
   *
   * @since 6.0.0
   */
  outline;
  /**
   * Expand the card
   */
  expanded = false;
  /**
   * Enable pointer interaction on the upper card region.
   * Default is `false`; only the accordion control is interactive.
   *
   * @since 6.0.0
   */
  clickable = false;
  get isOutline() {
    return this.outline !== false;
  }
  render() {
    return h(Host, { key: "daa5022914b785269617ab0a36bf3bfc0c9b9464" }, h("ix-card", { key: "872aa9d14672a61709e60406515be17129eb2416", variant: this.variant, outline: this.isOutline, clickable: this.clickable }, h("ix-card-content", { key: "bccd840e7ac21c719c19ffa15c85755951ba86a4" }, h("ix-card-title", { key: "bc476c62c2bf9bd216bb30ad4f32a0a2003084b0" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "fada0d9fc1121536c521bb03d282c089f3b462c1", format: "display-lg-sbold" }, this.notification ?? 0), h("slot", { key: "faa09405d493115f47a3c59ea4a8a3b4d1883745", name: "title-action" })), h("ix-typography", { key: "89e3d7c89ad9842d18b68e01081aa9e98d4473bd", format: "h4" }, this.heading), h("ix-typography", { key: "61e3a801e04d1dc6faacba3f369bc6f515c8e712", format: "body-paragraph", "text-color": "secondary" }, this.subheading)), h("ix-card-accordion", { key: "46733106162b5f5048fb889391408a087f33261d", collapse: !this.expanded, outline: this.isOutline }, h("slot", { key: "514dbc238c4230f58f95e285533b6877dcbb2d5e" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
