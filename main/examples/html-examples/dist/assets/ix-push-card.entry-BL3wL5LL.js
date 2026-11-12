import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-CwYAT1Wh.js";
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
    return h(Host, { key: "c56b12a729fd98de31f09d9d35d7cf877b37e629" }, h("ix-card", { key: "85ab45c804a641c3d6f25aab66a9890c86403a45", variant: this.variant, outline: this.isOutline, clickable: this.clickable }, h("ix-card-content", { key: "e94865a4c5eaf0e19a5e7e8112d7b13514260a8b" }, h("ix-card-title", { key: "69756b96917c0abd925a4015f8e94240b311e71a" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "a55556aea29a75201fc077a4f1317fc0cd9627ad", format: "display-lg-sbold" }, this.notification ?? 0), h("slot", { key: "7c561ac0f83a4d891480529b9b6d687653c903e1", name: "title-action" })), h("ix-typography", { key: "6fa965f3dfb6a3ef4ca7c276fade7e89d92747ad", format: "h4" }, this.heading), h("ix-typography", { key: "f95830e052ffacfd4d3310bdb33a8f97aa52af15", format: "body-paragraph", "text-color": "secondary" }, this.subheading)), h("ix-card-accordion", { key: "e878efc20a8cac736017b2d9610d01bbcfd4b066", collapse: !this.expanded, outline: this.isOutline }, h("slot", { key: "531fd81963ed11887038a6870347a4b983a60359" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
