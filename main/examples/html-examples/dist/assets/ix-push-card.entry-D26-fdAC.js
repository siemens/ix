import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-CWpkMnfL.js";
import "./preload-helper-UZRgTS1n.js";
const pushCardCss = () => `@charset "UTF-8";:host{--ix-push-card--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-push-card--border-width:var(--si-sys-sizing-border-width-default);--ix-push-card-accordion--border-color:var(--si-sys-color-background-0);--ix-push-card--width:var(--si-sys-sizing-size-170)}:host{--ix-push-card-icon--size:var(--si-sys-sizing-size-90);--ix-push-card-title--height:max(var(--si-sys-sizing-size-100), var(--si-sys-sizing-rem-size-100));--ix-push-card-content--height:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-y-100) + var(--si-sys-sizing-spacing-y-50) + var(--si-sys-sizing-size-30) - 2 * var(--si-sys-sizing-border-width-default) + max(0px, var(--si-sys-sizing-rem-size-100) - var(--si-sys-sizing-size-100)));--ix-push-card-content--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60) var(--si-sys-sizing-spacing-y-60);--ix-push-card-accordion-chrome-frame--border-width:var(--si-sys-sizing-border-width-none)}:host{--ix-card-content--padding:var(--ix-push-card-content--padding)}:host{display:block;position:relative;box-sizing:border-box;width:var(--ix-push-card--width);min-width:var(--ix-push-card--width)}:host ix-card{width:100%}:host ix-card-accordion{cursor:pointer}:host .icon{height:var(--ix-push-card-icon--size);width:var(--ix-push-card-icon--size);min-height:var(--ix-push-card-icon--size);min-width:var(--ix-push-card-icon--size)}:host ix-card-title{height:var(--ix-push-card-title--height);margin-top:0;margin-bottom:0}:host ix-card-content{height:var(--ix-push-card-content--height)}:host ix-card-content::part(content){overflow:visible}:host ix-card-accordion{--ix-card-accordion-expand-content--border-radius:0 0 var(--ix-push-card--border-radius) var(--ix-push-card--border-radius);--ix-card-accordion-chrome-frame--border-color:transparent;--ix-card-accordion-chrome-frame--border-width:var(--ix-push-card-accordion-chrome-frame--border-width);--ix-card-accordion-expand-action--border-top-width:var(--ix-push-card--border-width);--ix-card-accordion-expand-action--border-top-color:var(--ix-push-card-accordion--border-color)}`;
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
   *
   * @breaking-change 6.0.0 Status variant values renamed (`default` is now `base`), `outline` and `filled` replaced by the `outline` property
   */
  variant = "base";
  /**
   * Show the card with outline chrome.
   * When omitted, outline chrome is used (`true`).
   * When `false`, uses a filled surface; status variants then show a top color strip.
   *
   * @since 6.0.0
   * @breaking-change 6.0.0 Replaces the `outline` and `filled` values of `variant`
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
   * @breaking-change 6.0.0 Replaces the `passive` property
   */
  clickable = false;
  get isOutline() {
    return this.outline !== false;
  }
  render() {
    return h(Host, { key: "81690f88017e20d67fbfbe7085ce32c8f731eccf" }, h("ix-card", { key: "53439d6207511de8ec1b9ffa882b13771d091ce3", variant: this.variant, outline: this.isOutline, clickable: this.clickable }, h("ix-card-content", { key: "ecd4680df6a84901fa0fd02d23c7040ccf2dd513" }, h("ix-card-title", { key: "aba53b7f0d97e1f60c25b998c8b49c90a21a63fd" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "6cf962be3c99d697ceb0531c44e32602a85fe014", format: "display-lg-sbold" }, this.notification ?? 0), h("slot", { key: "1cdeab0096ba5221c3d2f64cada5d71da0312d5a", name: "title-action" })), h("ix-typography", { key: "c7b8285e455fba1311ff4f77669123dd8338d25a", format: "h4" }, this.heading), h("ix-typography", { key: "166a6b01c800f275e8c5afc4b5ee81f99bd43650", format: "body-paragraph", "text-color": "secondary" }, this.subheading)), h("ix-card-accordion", { key: "a42a2b15a2ba670391e2f6b9468621659322752b", collapse: !this.expanded, outline: this.isOutline }, h("slot", { key: "a9b16d7029cd97207a42696024ed1dc5ddef560a" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
