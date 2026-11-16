import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-17Qxv5n9.js";
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
    return h(Host, { key: "db0293a178fc9550e135489482ca69537896e27c" }, h("ix-card", { key: "56f4895693015da6248c439493dd10820c110de3", variant: this.variant, outline: this.isOutline, clickable: this.clickable }, h("ix-card-content", { key: "389caf9ab9c757c70b9899e7254b2ed07b65a29c" }, h("ix-card-title", { key: "68e1056e26101c26d2fc9c88ab27aaa3882984a2" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, h("ix-typography", { key: "b8f7ac09e64701cf71ba620d9ab22a055433018d", format: "display-lg-sbold" }, this.notification ?? 0), h("slot", { key: "c44973fe8d6dc5486bcf91669a731b258c5a406b", name: "title-action" })), h("ix-typography", { key: "848bd7c44c79c20b8efa217ae6c1906fde078693", format: "h4" }, this.heading), h("ix-typography", { key: "9b3d82ed3b7a98f7674b804a960868ed3611f926", format: "body-paragraph", "text-color": "secondary" }, this.subheading)), h("ix-card-accordion", { key: "803fd2c50c9565bd299a67d65ca1a0c1f695dd83", collapse: !this.expanded, outline: this.isOutline }, h("slot", { key: "70d9da31045c5f76fe2f3a686b8d9a31ac376c15" }))));
  }
};
PushCard.style = pushCardCss();
export {
  PushCard as ix_push_card
};
