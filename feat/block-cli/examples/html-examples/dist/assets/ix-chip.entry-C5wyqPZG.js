import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { n as iconCloseSmall } from "./index-DLhpBBEI-C3tPjcQ4.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
const chipCss = () => `:host{display:inline-block;position:relative;height:2rem;max-height:2rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.inactive){pointer-events:none}.container{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;vertical-align:top;height:2rem;max-height:2rem;cursor:pointer}.container .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.container .with-icon{margin-right:0.25rem}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.centerContent .content-wrapper{justify-content:center;text-align:center}.container.outline{padding-left:calc(0.75rem - 1px)}.container.outline.icon.alarm .with-icon{color:var(--theme-color-alarm)}.container.outline.icon.critical .with-icon{color:var(--theme-color-critical)}.container.outline.icon.warning .with-icon{color:var(--theme-color-warning-text)}.container.outline.icon.info .with-icon{color:var(--theme-color-info)}.container.outline.icon.neutral .with-icon{color:var(--theme-color-neutral)}.container.outline.icon.success .with-icon{color:var(--theme-color-success)}.container.outline.closable:not(.inactive){padding-right:calc(0.25rem - 1px)}.container.outline.closable.inactive,.container.outline:not(.closable){padding-right:calc(0.75rem - 1px)}.container:not(.outline){padding-left:0.75rem}.container:not(.outline).closable:not(.inactive){padding-right:0.25rem}.container:not(.outline).closable.inactive,.container:not(.outline):not(.closable){padding-right:0.75rem}.container.primary{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.container.primary .close-button{color:var(--theme-chip-primary--color);--ix-icon-button-color:var(--theme-chip-primary--color);pointer-events:auto}.container.primary:hover{background-color:var(--theme-chip-primary--background--hover)}.container.primary:active{background-color:var(--theme-chip-primary--background--active)}.container.primary:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.primary.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-primary-outline--background);border:solid 1px var(--theme-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--theme-chip-outline--color);--ix-icon-button-color:var(--theme-chip-outline--color)}.container.primary.outline .with-icon{color:var(--theme-color-primary)}.container.primary.outline:hover{background-color:var(--theme-chip-primary-outline--background--hover)}.container.primary.outline:active{background-color:var(--theme-chip-primary-outline--background--active)}.container.outline{border-width:1px;border-style:solid}.container.alarm{color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline){background-color:var(--theme-color-alarm)}.container.alarm:not(.outline) .close-button{color:var(--theme-color-alarm--contrast);--ix-icon-button-color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline):hover{background-color:var(--theme-color-alarm--hover)}.container.alarm:not(.outline).active,.container.alarm:not(.outline):active{background-color:var(--theme-color-alarm--active)}.container.alarm.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-alarm)}.container.alarm.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.alarm.outline.active,.container.alarm.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.alarm:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.critical{color:var(--theme-color-critical--contrast)}.container.critical:not(.outline){background-color:var(--theme-color-critical)}.container.critical:not(.outline) .close-button{color:var(--theme-color-critical--contrast);--ix-icon-button-color:var(--theme-color-critical--contrast)}.container.critical:not(.outline):hover{background-color:var(--theme-color-critical--hover)}.container.critical:not(.outline).active,.container.critical:not(.outline):active{background-color:var(--theme-color-critical--active)}.container.critical.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-critical)}.container.critical.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.critical.outline.active,.container.critical.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.critical:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.warning{color:var(--theme-color-warning--contrast)}.container.warning:not(.outline){background-color:var(--theme-color-warning)}.container.warning:not(.outline) .close-button{color:var(--theme-color-warning--contrast);--ix-icon-button-color:var(--theme-color-warning--contrast)}.container.warning:not(.outline):hover{background-color:var(--theme-color-warning--hover)}.container.warning:not(.outline).active,.container.warning:not(.outline):active{background-color:var(--theme-color-warning--active)}.container.warning.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-warning)}.container.warning.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.warning.outline.active,.container.warning.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.warning:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.info{color:var(--theme-color-info--contrast)}.container.info:not(.outline){background-color:var(--theme-color-info)}.container.info:not(.outline) .close-button{color:var(--theme-color-info--contrast);--ix-icon-button-color:var(--theme-color-info--contrast)}.container.info:not(.outline):hover{background-color:var(--theme-color-info--hover)}.container.info:not(.outline).active,.container.info:not(.outline):active{background-color:var(--theme-color-info--active)}.container.info.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-info)}.container.info.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.info.outline.active,.container.info.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.info:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.neutral{color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline){background-color:var(--theme-color-neutral)}.container.neutral:not(.outline) .close-button{color:var(--theme-color-neutral--contrast);--ix-icon-button-color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline):hover{background-color:var(--theme-color-neutral--hover)}.container.neutral:not(.outline).active,.container.neutral:not(.outline):active{background-color:var(--theme-color-neutral--active)}.container.neutral.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-neutral)}.container.neutral.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.neutral.outline.active,.container.neutral.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.neutral:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.success{color:var(--theme-color-success--contrast)}.container.success:not(.outline){background-color:var(--theme-color-success)}.container.success:not(.outline) .close-button{color:var(--theme-color-success--contrast);--ix-icon-button-color:var(--theme-color-success--contrast)}.container.success:not(.outline):hover{background-color:var(--theme-color-success--hover)}.container.success:not(.outline).active,.container.success:not(.outline):active{background-color:var(--theme-color-success--active)}.container.success.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-success)}.container.success.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.success.outline.active,.container.success.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.success:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}.container.custom.outline:hover{background-color:var(--theme-chip-outline--background--hover)}.container.custom.outline.active,.container.custom.outline:active{background-color:var(--theme-chip-outline--background--active)}.container.custom:not(.outline):hover::after,.container.custom:not(.outline).active::after,.container.custom:not(.outline):active::after{content:"";display:block;position:absolute;width:100%;height:100%;left:0;border-radius:100px;pointer-events:none}.container.custom:not(.outline):hover::after{background-color:rgba(0, 0, 0, 0.1)}.container.custom:not(.outline).active::after,.container.custom:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.2)}`;
const Chip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeChip = createEvent(this, "closeChip", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Chip variant
   */
  variant = "primary";
  /**
   * Determines if the chip is interactive. If true no user input (e.g. mouse states, keyboard navigation)
   * will be possible and also the close button will not be present.
   */
  inactive = false;
  /**
   * Show close icon
   */
  closable = false;
  /**
   * Show icon
   */
  icon;
  /**
   * Custom background color.
   * Only has an effect on chips with `variant='custom'`
   */
  background;
  /**
   * Custom font and icon color.
   * Only has an effect on chips with `variant='custom'`
   */
  chipColor;
  /**
   * Show chip with outline style
   */
  outline = false;
  /**
   * Display a tooltip. By default, no tooltip will be displayed.
   * Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
   *
   * @since 3.0.0
   */
  tooltipText = false;
  /**
   * Center the content of the chip.
   * Set to false to disable centering.
   * @since 3.2.0
   */
  centerContent = false;
  /**
   * ARIA label for the close button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelCloseButton = "Close chip";
  /**
   * Fire event if close button is clicked
   */
  closeChip;
  containerElementRef = makeRef();
  getCloseButton() {
    return h("div", { class: "close-button-container" }, h("ix-icon-button", { type: "button", variant: "subtle-tertiary", icon: iconCloseSmall, class: "close-button", oval: true, size: "16", style: this.variant === "custom" ? { color: this.chipColor } : {}, onClick: (event) => {
      this.closeChip.emit(event);
      event.stopPropagation();
    }, "aria-label": this.ariaLabelCloseButton }));
  }
  getTooltip() {
    if (!this.tooltipText && !this.hostElement.hasAttribute("tooltip-text")) {
      return null;
    }
    const text = typeof this.tooltipText === "string" && this.tooltipText.trim() ? this.tooltipText : this.hostElement.textContent?.trim();
    return h("ix-tooltip", { for: this.containerElementRef.waitForCurrent() }, text);
  }
  render() {
    let customStyle = {};
    if (this.variant === "custom") {
      customStyle = {
        color: this.chipColor,
        [this.outline ? "borderColor" : "backgroundColor"]: this.background
      };
    }
    return h(Host, { key: "4b36901c414803b6c720f4f34868875b22c73923", tabIndex: "-1", class: {
      inactive: this.inactive
    }, style: this.variant === "custom" ? {
      "--ix-icon-button-color": this.chipColor
    } : {} }, h("div", { key: "1518b8abfea5cffb86cc6c8198d504ec845bc952", ref: this.containerElementRef, style: { ...customStyle }, class: {
      container: true,
      outline: this.outline,
      inactive: this.inactive,
      alarm: this.variant === "alarm",
      critical: this.variant === "critical",
      info: this.variant === "info",
      neutral: this.variant === "neutral",
      primary: this.variant === "primary",
      success: this.variant === "success",
      warning: this.variant === "warning",
      custom: this.variant === "custom",
      closable: this.closable,
      icon: !!this.icon,
      centerContent: this.centerContent
    } }, h("div", { key: "ca7202e7c0b159741bf5ebbf0b25986d6ff3f144", class: "content-wrapper" }, this.icon && h("ix-icon", { key: "982bf61d4428a14500f4d1f6dfdfb3a6b474f59e", class: {
      "with-icon": true
    }, name: this.icon, size: "24", style: this.variant === "custom" ? { color: this.outline ? this.background : this.chipColor } : void 0 }), h("span", { key: "c395f9383025b244d08d2ff50cabe4a1fc87e9a5", class: "slot-container" }, h("slot", { key: "48e29459b4559c4abbe7583cb189d27986d9a56c" }))), this.inactive === false && this.closable && this.getCloseButton()), this.getTooltip());
  }
};
Chip.style = chipCss();
export {
  Chip as ix_chip
};
