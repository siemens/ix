import { r as registerInstance, h, H as Host } from "./global-EB1NlL0D.js";
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
    return h(Host, { key: "1ee115f428d7e5ae1623a9c8340f20ee4850f023" }, h("ix-card", { key: "b70aa38449bcea11d2345c97b0541dc3c038b9cf", variant: this.variant, outline: this.isOutline, clickable: this.clickable }, h("ix-card-content", { key: "a82bfef76375d010d1ea31f8b51d172828d1b30c" }, h("ix-card-title", { key: "61df3a7ad74a3e4fe3ed50cbc6f1577c457f8135" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "a7ae994c41effbde62ed12688d8b69a6b07d309e", format: "display-lg-sbold" }, this.notification ?? 0), h("slot", { key: "6fdf7317f5f4bb4dc766d4d07ee7751e1cb83b56", name: "title-action" })), h("ix-typography", { key: "b3838cbc9e7ffdacbed80062462336bbe88fd263", format: "h4" }, this.heading), h("ix-typography", { key: "12b4a185a2da386d7c1f8bef90ba660fb64d5aa7", format: "body-paragraph", "text-color": "secondary" }, this.subheading)), h("ix-card-accordion", { key: "75e774cc0bd16781713c5fd2b2874541bfa444f3", collapse: !this.expanded, outline: this.isOutline }, h("slot", { key: "6978a5acd5b8dcd8892f1f81742370b15cf3bbc3" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
