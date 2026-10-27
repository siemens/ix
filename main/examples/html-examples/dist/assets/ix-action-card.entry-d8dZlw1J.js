import { r as registerInstance, h, H as Host } from "./global-Bs2gnYtf.js";
import { g as getFallbackLabelFromIconName, a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const actionCardCss = () => `@charset "UTF-8";:host{--ix-action-card--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-action-card--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-action-card--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-action-card--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-action-card--min-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100)   );--ix-action-card--width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100)   );--ix-action-card--height:var(--si-sys-sizing-size-140);--ix-action-card--min-height:var(--si-sys-sizing-size-140);--ix-action-card--margin:var(--si-sys-sizing-spacing-y-20) 0;--ix-action-card-content--padding:var(--si-sys-sizing-spacing-y-60)     var(--si-sys-sizing-spacing-x-60) var(--si-sys-sizing-spacing-y-60)}:host{display:block;position:relative;min-width:var(--ix-action-card--min-width);width:var(--ix-action-card--width);height:var(--ix-action-card--height);min-height:var(--ix-action-card--min-height);cursor:pointer;margin:var(--ix-action-card--margin)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host button{width:100%;height:100%;display:block;background:transparent;color:inherit;font:inherit;text-align:start;padding:0;border:0;border-radius:var(--ix-action-card--border-radius);box-shadow:initial}:host button:focus-visible{outline:var(--ix-action-card--outline-width--focus) solid var(--ix-action-card--outline-color--focus);outline-offset:var(--ix-action-card--focus--outline-offset)}:host button[disabled]{cursor:default}:host ix-card{width:100%;height:100%;--ix-card-content--padding:var(--ix-action-card-content--padding)}`;
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
    return h(Host, { key: "3c4d92a236966ebffa14479260541e658886faa1" }, h("button", { key: "556e576eeebab6ce9c9ee634cd793ebf09e15ac8", type: "button", disabled: !this.isClickable, "aria-label": this.ariaLabelCard, "aria-labelledby": ariaLabelledBy }, h("ix-card", { key: "d6d582e5c7b68fc2d70e449dabacedc4b005d1f8", selected: this.selected, variant: this.variant, outline: this.isOutline, clickable: this.isClickable, class: this.isClickable ? "pointer" : void 0 }, h("ix-card-content", { key: "0d60344301d1645319ca663203dd373513483d92" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon || getFallbackLabelFromIconName(this.icon) }) : null, h("div", { key: "3d632df1bd5bb9dc7ee7bf297577a52d6f219eb2" }, this.heading ? h("ix-typography", { id: "ix-action-card-heading", "aria-hidden": a11yBoolean(!ariaLabelledBy), format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", "text-color": "soft" }, this.subheading) : null, h("slot", { key: "bd6c4afc8a5a1916b600edd32fcd3c72fb9165bf" }))))));
  }
};
IxActionCard.style = actionCardCss();
export {
  IxActionCard as ix_action_card
};
