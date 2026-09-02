import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
import { g as getFallbackLabelFromIconName, a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
const actionCardCss = () => `@charset "UTF-8";:host{--ix-action-card--border-radius:var(--theme-default-border-radius);--ix-action-card--focus--outline-offset:var(--theme-focus-outline-offset);--ix-action-card--outline-color--focus:var(--si-sys-effects-focus)}:host{display:block;position:relative;min-width:13.375rem;width:13.375rem;height:7.5rem;min-height:7.5rem;cursor:pointer;margin:0.25rem 0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host button{width:100%;height:100%;display:block;background:transparent;color:inherit;font:inherit;text-align:start;padding:0;border:0;border-radius:var(--ix-action-card--border-radius);box-shadow:initial}:host button:focus-visible{outline:1px solid var(--ix-action-card--outline-color--focus);outline-offset:var(--ix-action-card--focus--outline-offset)}:host button[disabled]{cursor:default}:host ix-card{width:100%;height:100%}`;
const IxActionCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Card variant
   */
  variant = "outline";
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
   * If true, disables hover and active styles and changes cursor to default
   */
  passive = false;
  getSubheadingTextColor() {
    return this.variant === "outline" || this.variant === "filled" ? "soft" : void 0;
  }
  render() {
    const ariaLabelledBy = !this.ariaLabelCard && this.heading ? "ix-action-card-heading" : void 0;
    return h(Host, { key: "0198c32223a28cc0cb3f8334e87777984c507846" }, h("button", { key: "79c2b258940dbc197a18dba4770c31657846642e", type: "button", disabled: this.passive, "aria-label": this.ariaLabelCard, "aria-labelledby": ariaLabelledBy }, h("ix-card", { key: "5fb13c9d7f0f308645cc73877147fd655a0375be", selected: this.selected, variant: this.variant, passive: this.passive, class: this.passive ? void 0 : "pointer" }, h("ix-card-content", { key: "19e3466763cb0d5a3c2849337c5a7d8511c407b5" }, this.icon ? h("ix-icon", { class: "icon", name: this.icon, size: "32", "aria-label": this.ariaLabelIcon || getFallbackLabelFromIconName(this.icon) }) : null, h("div", { key: "375d3cb453a3012788eaa897618206ab2da4493f" }, this.heading ? h("ix-typography", { id: "ix-action-card-heading", "aria-hidden": a11yBoolean(!ariaLabelledBy), format: "h4" }, this.heading) : null, this.subheading ? h("ix-typography", { format: "h5", "text-color": this.getSubheadingTextColor() }, this.subheading) : null, h("slot", { key: "de221d989fb9fe8be1ee459d08949b4f5fed2891" }))))));
  }
};
IxActionCard.style = actionCardCss();
export {
  IxActionCard as ix_action_card
};
