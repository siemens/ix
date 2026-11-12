import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-vubC4vyH.js";
import { g as getFallbackLabelFromIconName, a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const actionCardCss = () => `@charset "UTF-8";:host{--ix-action-card--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-action-card--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-action-card--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-action-card--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-action-card--min-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100)   );--ix-action-card--width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100)   );--ix-action-card--height:var(--si-sys-sizing-size-140);--ix-action-card--min-height:var(--si-sys-sizing-size-140);--ix-action-card--margin:var(--si-sys-sizing-spacing-y-20) 0;--ix-action-card-content--padding:var(--si-sys-sizing-spacing-y-60)     var(--si-sys-sizing-spacing-x-60) var(--si-sys-sizing-spacing-y-60)}:host{display:block;position:relative;min-width:var(--ix-action-card--min-width);width:var(--ix-action-card--width);height:var(--ix-action-card--height);min-height:var(--ix-action-card--min-height);cursor:pointer;margin:var(--ix-action-card--margin)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host button{width:100%;height:100%;display:block;background:transparent;color:inherit;font:inherit;text-align:start;padding:0;border:0;border-radius:var(--ix-action-card--border-radius);box-shadow:initial}:host button:focus-visible{outline:var(--ix-action-card--outline-width--focus) solid var(--ix-action-card--outline-color--focus);outline-offset:var(--ix-action-card--focus--outline-offset)}:host button[disabled]{cursor:default}:host ix-card{width:100%;height:100%;--ix-card-content--padding:var(--ix-action-card-content--padding)}`;
const IxActionCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
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
   * Card icon
   */
  icon = void 0;
  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  ariaLabelIcon;
  /**
   * Card heading
   */
  heading;
  /**
   * Card subheading
   */
  subheading;
  /**
   * Card selection
   */
  selected = false;
  /**
   * ARIA label for the card
   *
   * @since 3.2.0
   */
  ariaLabelCard;
  /**
   * Enable pointer interaction on the action card.
   * When omitted, the card is clickable (`true`).
   * When `false`, the wrapping button is disabled.
   *
   * @since 6.0.0
   */
  clickable;
  get isOutline() {
    return this.outline !== false;
  }
  get isClickable() {
    return this.clickable !== false;
  }
  render() {
    const ariaLabelledBy = !this.ariaLabelCard && this.heading ? "ix-action-card-heading" : void 0;
    return h(Host, { key: "73216c887820918545a1424b68b1efbc46d3f788" }, h("button", { key: "0a2b1c424fd67b3e6d11d2bfb73b6db18837bc1c", type: "button", disabled: !this.isClickable, "aria-label": this.ariaLabelCard, "aria-labelledby": ariaLabelledBy }, h("ix-card", { key: "6c0789a2cb1f01df12d75e677f77226dc291a103", selected: this.selected, variant: this.variant, outline: this.isOutline, clickable: this.isClickable, class: this.isClickable ? "pointer" : void 0 }, h("ix-card-content", { key: "db38b3f674adbb8e5bdd684310230e0a3ee99a14" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon || getFallbackLabelFromIconName(this.icon) }) : null, h("div", { key: "77c7d19ee5ef0e34db493966fd9ae42b5841fe16" }, this.heading ? h("ix-typography", { id: "ix-action-card-heading", "aria-hidden": a11yBoolean(!ariaLabelledBy), format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", "text-color": "secondary" }, this.subheading) : null, h("slot", { key: "cd3de9b686aec45451544e142ecd674943bd15f7" }))))));
  }
};
IxActionCard.style = actionCardCss();
export {
  IxActionCard as ix_action_card
};
