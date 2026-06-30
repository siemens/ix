import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-F68Qu5y3.js";
import { l as iconCloseSmall } from "./index-DgUGsIlh-CLxQRaVd.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-nCmPujqf-BcHNlwum.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const CHIP_VARIANTS = [
  "primary",
  "alarm",
  "critical",
  "warning",
  "info",
  "neutral",
  "success",
  "custom"
];
const chipCss = () => `:host{display:inline-block;position:relative;height:2rem;max-height:2rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host(.inactive){pointer-events:none}.chip-wrap{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:stretch;border-radius:100px;vertical-align:top;min-height:2rem;max-height:2rem}.chip-wrap .chip-main{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;margin:0;box-sizing:border-box;display:inline-flex;align-items:center;flex:1 1 auto;min-width:0;width:100%;border-radius:inherit;padding-block:0.5rem;padding-inline:0.75rem;font:inherit;text-align:inherit;color:inherit;cursor:pointer;background:transparent}.chip-wrap .chip-main:disabled{cursor:default}.chip-wrap .chip-main:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.chip-wrap .chip-main .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.chip-wrap .chip-main .with-icon{margin-right:0.25rem}.chip-wrap .chip-main .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chip-wrap.centerContent .chip-main .content-wrapper{justify-content:center;text-align:center}.chip-wrap.outline .chip-main{padding-left:calc(0.75rem - 0.0625rem)}.chip-wrap.outline:not(.closable) .chip-main,.chip-wrap.outline.closable.inactive .chip-main{padding-right:calc(0.75rem - 0.0625rem)}.chip-wrap.outline.closable:not(.inactive) .chip-main{padding-right:calc(0.25rem + 1.5rem + 0.375rem - 0.0625rem)}.chip-wrap:not(.outline) .chip-main{padding-left:0.75rem}.chip-wrap:not(.outline):not(.closable) .chip-main,.chip-wrap:not(.outline).closable.inactive .chip-main{padding-right:0.75rem}.chip-wrap:not(.outline).closable:not(.inactive) .chip-main{padding-right:calc(0.25rem + 1.5rem + 0.375rem)}.chip-wrap .chip-close{position:absolute;right:0.25rem;top:50%;transform:translateY(-50%);width:1.5rem;height:1.5rem;box-sizing:border-box;border:0;margin:0;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;font:inherit;color:var(--theme-color-std-text);border-radius:50%;flex-shrink:0;z-index:1}.chip-wrap .chip-close:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}.chip-wrap .chip-close__icon{display:block;pointer-events:none}.chip-wrap.outline{border-width:0.0625rem;border-style:solid}.chip-wrap.primary:not(.outline){color:var(--theme-chip-primary--color)}.chip-wrap.primary:not(.outline) .chip-main{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.chip-wrap.primary:not(.outline) .chip-main:hover{background-color:var(--theme-chip-primary--background--hover)}.chip-wrap.primary:not(.outline) .chip-main:active{background-color:var(--theme-chip-primary--background--active)}.chip-wrap.primary:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.primary:not(.outline) .chip-close:hover{background-color:var(--theme-chip-primary--background--hover)}.chip-wrap.primary:not(.outline) .chip-close:active{background-color:var(--theme-chip-primary--background--active)}.chip-wrap.primary.outline{color:var(--theme-chip-primary-outline--color--display);background-color:var(--theme-chip-primary-outline--background);border:solid 0.0625rem var(--theme-chip-primary-outline--border-color)}.chip-wrap.primary.outline:hover:not(.inactive){border-color:var(--theme-chip-primary-outline--border-color--hover)}.chip-wrap.primary.outline:active:not(.inactive){border-color:var(--theme-chip-primary-outline--border-color--active)}.chip-wrap.primary.outline .chip-main{background-color:transparent;color:var(--theme-chip-primary-outline--color--display)}.chip-wrap.primary.outline .chip-main:hover{background-color:var(--theme-chip-primary-outline--background--hover)}.chip-wrap.primary.outline .chip-main:active{background-color:var(--theme-chip-primary-outline--background--active)}.chip-wrap.primary.outline.icon .with-icon{color:var(--theme-color-primary)}.chip-wrap.primary.outline:hover:not(.inactive).icon .with-icon{color:var(--theme-chip-primary-outline--color--hover)}.chip-wrap.primary.outline:active:not(.inactive).icon .with-icon{color:var(--theme-chip-primary-outline--color--active)}.chip-wrap.primary.outline .chip-close{color:inherit}.chip-wrap.primary.outline .chip-close:hover{background-color:var(--theme-chip-primary-outline--background--hover)}.chip-wrap.primary.outline .chip-close:active{background-color:var(--theme-chip-primary-outline--background--active)}.chip-wrap.alarm:not(.outline){color:var(--theme-color-alarm--contrast)}.chip-wrap.alarm:not(.outline) .chip-main{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}.chip-wrap.alarm:not(.outline) .chip-main:hover{background-color:var(--theme-color-alarm--hover)}.chip-wrap.alarm:not(.outline) .chip-main:active{background-color:var(--theme-color-alarm--active)}.chip-wrap.alarm:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.alarm:not(.outline) .chip-close:hover{background-color:var(--theme-color-alarm--hover)}.chip-wrap.alarm:not(.outline) .chip-close:active{background-color:var(--theme-color-alarm--active)}.chip-wrap.alarm.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-alarm)}.chip-wrap.alarm.outline .chip-main{background-color:transparent;color:var(--theme-chip-outline--color)}.chip-wrap.alarm.outline .chip-main:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.alarm.outline .chip-main:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.alarm.outline.icon .with-icon{color:var(--theme-color-alarm)}.chip-wrap.alarm.outline .chip-close{color:inherit}.chip-wrap.alarm.outline .chip-close:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.alarm.outline .chip-close:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.critical:not(.outline){color:var(--theme-color-critical--contrast)}.chip-wrap.critical:not(.outline) .chip-main{background-color:var(--theme-color-critical);color:var(--theme-color-critical--contrast)}.chip-wrap.critical:not(.outline) .chip-main:hover{background-color:var(--theme-color-critical--hover)}.chip-wrap.critical:not(.outline) .chip-main:active{background-color:var(--theme-color-critical--active)}.chip-wrap.critical:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.critical:not(.outline) .chip-close:hover{background-color:var(--theme-color-critical--hover)}.chip-wrap.critical:not(.outline) .chip-close:active{background-color:var(--theme-color-critical--active)}.chip-wrap.critical.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-critical)}.chip-wrap.critical.outline .chip-main{background-color:transparent;color:var(--theme-chip-outline--color)}.chip-wrap.critical.outline .chip-main:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.critical.outline .chip-main:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.critical.outline.icon .with-icon{color:var(--theme-color-critical)}.chip-wrap.critical.outline .chip-close{color:inherit}.chip-wrap.critical.outline .chip-close:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.critical.outline .chip-close:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.warning:not(.outline){color:var(--theme-color-warning--contrast)}.chip-wrap.warning:not(.outline) .chip-main{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}.chip-wrap.warning:not(.outline) .chip-main:hover{background-color:var(--theme-color-warning--hover)}.chip-wrap.warning:not(.outline) .chip-main:active{background-color:var(--theme-color-warning--active)}.chip-wrap.warning:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.warning:not(.outline) .chip-close:hover{background-color:var(--theme-color-warning--hover)}.chip-wrap.warning:not(.outline) .chip-close:active{background-color:var(--theme-color-warning--active)}.chip-wrap.warning.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-warning)}.chip-wrap.warning.outline .chip-main{background-color:transparent;color:var(--theme-chip-outline--color)}.chip-wrap.warning.outline .chip-main:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.warning.outline .chip-main:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.warning.outline.icon .with-icon{color:var(--theme-color-warning-text)}.chip-wrap.warning.outline .chip-close{color:inherit}.chip-wrap.warning.outline .chip-close:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.warning.outline .chip-close:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.info:not(.outline){color:var(--theme-color-info--contrast)}.chip-wrap.info:not(.outline) .chip-main{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}.chip-wrap.info:not(.outline) .chip-main:hover{background-color:var(--theme-color-info--hover)}.chip-wrap.info:not(.outline) .chip-main:active{background-color:var(--theme-color-info--active)}.chip-wrap.info:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.info:not(.outline) .chip-close:hover{background-color:var(--theme-color-info--hover)}.chip-wrap.info:not(.outline) .chip-close:active{background-color:var(--theme-color-info--active)}.chip-wrap.info.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-info)}.chip-wrap.info.outline .chip-main{background-color:transparent;color:var(--theme-chip-outline--color)}.chip-wrap.info.outline .chip-main:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.info.outline .chip-main:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.info.outline.icon .with-icon{color:var(--theme-color-info)}.chip-wrap.info.outline .chip-close{color:inherit}.chip-wrap.info.outline .chip-close:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.info.outline .chip-close:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.neutral:not(.outline){color:var(--theme-color-neutral--contrast)}.chip-wrap.neutral:not(.outline) .chip-main{background-color:var(--theme-color-neutral);color:var(--theme-color-neutral--contrast)}.chip-wrap.neutral:not(.outline) .chip-main:hover{background-color:var(--theme-color-neutral--hover)}.chip-wrap.neutral:not(.outline) .chip-main:active{background-color:var(--theme-color-neutral--active)}.chip-wrap.neutral:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.neutral:not(.outline) .chip-close:hover{background-color:var(--theme-color-neutral--hover)}.chip-wrap.neutral:not(.outline) .chip-close:active{background-color:var(--theme-color-neutral--active)}.chip-wrap.neutral.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-neutral)}.chip-wrap.neutral.outline .chip-main{background-color:transparent;color:var(--theme-chip-outline--color)}.chip-wrap.neutral.outline .chip-main:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.neutral.outline .chip-main:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.neutral.outline.icon .with-icon{color:var(--theme-color-neutral)}.chip-wrap.neutral.outline .chip-close{color:inherit}.chip-wrap.neutral.outline .chip-close:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.neutral.outline .chip-close:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.success:not(.outline){color:var(--theme-color-success--contrast)}.chip-wrap.success:not(.outline) .chip-main{background-color:var(--theme-color-success);color:var(--theme-color-success--contrast)}.chip-wrap.success:not(.outline) .chip-main:hover{background-color:var(--theme-color-success--hover)}.chip-wrap.success:not(.outline) .chip-main:active{background-color:var(--theme-color-success--active)}.chip-wrap.success:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.success:not(.outline) .chip-close:hover{background-color:var(--theme-color-success--hover)}.chip-wrap.success:not(.outline) .chip-close:active{background-color:var(--theme-color-success--active)}.chip-wrap.success.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-success)}.chip-wrap.success.outline .chip-main{background-color:transparent;color:var(--theme-chip-outline--color)}.chip-wrap.success.outline .chip-main:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.success.outline .chip-main:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.success.outline.icon .with-icon{color:var(--theme-color-success)}.chip-wrap.success.outline .chip-close{color:inherit}.chip-wrap.success.outline .chip-close:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.success.outline .chip-close:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.outline .chip-close{background-color:var(--theme-chip-close-btn--background)}.chip-wrap.outline .chip-close:hover{background-color:var(--theme-chip-close-btn--background--hover)}.chip-wrap.outline .chip-close:active{background-color:var(--theme-chip-close-btn--background--active)}.chip-wrap.custom.outline{background-color:var(--theme-chip-outline--background)}.chip-wrap.custom.outline .chip-main{background-color:transparent}.chip-wrap.custom.outline .chip-main:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.custom.outline .chip-main:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.custom.outline .chip-close{color:inherit}.chip-wrap.custom.outline .chip-close:hover{background-color:var(--theme-chip-outline--background--hover)}.chip-wrap.custom.outline .chip-close:active{background-color:var(--theme-chip-outline--background--active)}.chip-wrap.custom:not(.outline) .chip-main{position:relative}.chip-wrap.custom:not(.outline) .chip-main:hover::after,.chip-wrap.custom:not(.outline) .chip-main:active::after{content:"";display:block;position:absolute;inset:0;border-radius:100px;pointer-events:none}.chip-wrap.custom:not(.outline) .chip-main:hover::after{background-color:color-mix(in srgb, currentColor 10%, transparent)}.chip-wrap.custom:not(.outline) .chip-main:active::after{background-color:color-mix(in srgb, currentColor 20%, transparent)}.chip-wrap.custom:not(.outline) .chip-close{color:inherit;background-color:var(--theme-chip-close-btn--background)}.chip-wrap.custom:not(.outline) .chip-close:hover{background-color:color-mix(in srgb, currentColor 10%, transparent)}.chip-wrap.custom:not(.outline) .chip-close:active{background-color:color-mix(in srgb, currentColor 20%, transparent)}`;
const Chip = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.closeChip = createEvent(this, "closeChip", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Chip variant.
   * Defaults to `primary`. When unset or set to an unknown value the chip falls back to `primary` styling.
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
   * Accessible name for the leading icon.
   * When unset, the icon is treated as decorative (hidden from assistive tech) when the default slot supplies a visible label.
   *
   * @since 5.0.0
   */
  ariaLabelIcon;
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
  getIgnoredAriaAttributes() {
    return ["role"];
  }
  componentWillLoad() {
    super.componentWillLoad();
  }
  getTooltip() {
    if (!this.tooltipText && !this.hostElement.hasAttribute("tooltip-text")) {
      return null;
    }
    const text = typeof this.tooltipText === "string" && this.tooltipText.trim() ? this.tooltipText : this.hostElement.textContent?.trim();
    return h("ix-tooltip", { for: this.containerElementRef.waitForCurrent(), "aria-label": text || void 0 }, text);
  }
  getCustomStyles(variant) {
    const wrap = {};
    const main = {};
    if (variant !== "custom") {
      return { wrap, main };
    }
    main.color = this.chipColor;
    if (this.chipColor) {
      wrap.color = this.chipColor;
    }
    if (this.outline && this.background) {
      wrap.borderColor = this.background;
    } else if (!this.outline && this.background) {
      main.backgroundColor = this.background;
    }
    return { wrap, main };
  }
  getIconStyle(variant) {
    if (variant !== "custom") {
      return void 0;
    }
    return { color: this.outline ? this.background : this.chipColor };
  }
  getHostRole(needsGroupRole) {
    if (this.hostElement.hasAttribute("role")) {
      return this.hostElement.getAttribute("role") ?? void 0;
    }
    return needsGroupRole ? "group" : void 0;
  }
  render() {
    const variant = CHIP_VARIANTS.includes(this.variant) ? this.variant : "primary";
    const { wrap: customWrapStyle, main: customMainStyle } = this.getCustomStyles(variant);
    const showClose = !this.inactive && this.closable;
    const wrapClasses = {
      "chip-wrap": true,
      outline: this.outline,
      inactive: this.inactive,
      alarm: variant === "alarm",
      critical: variant === "critical",
      info: variant === "info",
      neutral: variant === "neutral",
      primary: variant === "primary",
      success: variant === "success",
      warning: variant === "warning",
      custom: variant === "custom",
      closable: this.closable,
      icon: !!this.icon,
      centerContent: this.centerContent
    };
    const iconIsDecorative = !this.ariaLabelIcon?.trim();
    const hasAccessibleName = !!this.inheritAriaAttributes["aria-label"]?.trim() || !!this.inheritAriaAttributes["aria-labelledby"]?.trim();
    const hasTooltip = !!this.tooltipText || this.hostElement.hasAttribute("tooltip-text");
    const needsGroupRole = hasAccessibleName && (showClose || hasTooltip);
    return h(Host, { key: "ec29ee16546ae83cee1a8210057ab20621ddf886", role: this.getHostRole(needsGroupRole), class: {
      inactive: this.inactive
    } }, h("div", { key: "05b67f082d8fc58db97692bff9c036ea834bd3f2", ref: this.containerElementRef, class: wrapClasses, style: customWrapStyle }, h("button", { key: "ed89e29542fe8a6bd6b891ba6bf9e804f2d3cce8", type: "button", class: "chip-main", ...this.inheritAriaAttributes, disabled: this.inactive, style: customMainStyle }, h("div", { key: "baa75dac52863368053562608aa4b80c15adbe87", class: "content-wrapper" }, this.icon && h("ix-icon", { key: "1b4d7f27495007f64d6537f5a3af7182adb03658", class: {
      "with-icon": true
    }, name: this.icon, size: "24", "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(iconIsDecorative), style: this.getIconStyle(variant) }), h("span", { key: "eb1539d853045401dc13adb6f5e7f46e838e5c66", class: "slot-container" }, h("slot", { key: "fb7f8343d47b339fbf034bf64e008e183bb1f70b" })))), showClose && h("button", { key: "846facd70ec0ae5144e94596d7f55299b109f329", type: "button", class: "chip-close", "aria-label": this.ariaLabelCloseButton, onClick: (event) => {
      this.closeChip.emit(event);
      event.stopPropagation();
    } }, h("ix-icon", { key: "4596c7aa298e8dba25b4b9a799ddaeb85797e215", class: "chip-close__icon", name: iconCloseSmall, size: "16", "aria-hidden": "true" }))), this.getTooltip());
  }
  static get watchers() {
    return {
      "role": [{
        "ariaAttributeChanged": 0
      }],
      "aria-activedescendant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-atomic": [{
        "ariaAttributeChanged": 0
      }],
      "aria-autocomplete": [{
        "ariaAttributeChanged": 0
      }],
      "aria-braillelabel": [{
        "ariaAttributeChanged": 0
      }],
      "aria-brailleroledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-busy": [{
        "ariaAttributeChanged": 0
      }],
      "aria-checked": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-controls": [{
        "ariaAttributeChanged": 0
      }],
      "aria-current": [{
        "ariaAttributeChanged": 0
      }],
      "aria-describedby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-description": [{
        "ariaAttributeChanged": 0
      }],
      "aria-details": [{
        "ariaAttributeChanged": 0
      }],
      "aria-disabled": [{
        "ariaAttributeChanged": 0
      }],
      "aria-errormessage": [{
        "ariaAttributeChanged": 0
      }],
      "aria-expanded": [{
        "ariaAttributeChanged": 0
      }],
      "aria-flowto": [{
        "ariaAttributeChanged": 0
      }],
      "aria-haspopup": [{
        "ariaAttributeChanged": 0
      }],
      "aria-hidden": [{
        "ariaAttributeChanged": 0
      }],
      "aria-invalid": [{
        "ariaAttributeChanged": 0
      }],
      "aria-keyshortcuts": [{
        "ariaAttributeChanged": 0
      }],
      "aria-label": [{
        "ariaAttributeChanged": 0
      }],
      "aria-labelledby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-level": [{
        "ariaAttributeChanged": 0
      }],
      "aria-live": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiline": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiselectable": [{
        "ariaAttributeChanged": 0
      }],
      "aria-orientation": [{
        "ariaAttributeChanged": 0
      }],
      "aria-owns": [{
        "ariaAttributeChanged": 0
      }],
      "aria-placeholder": [{
        "ariaAttributeChanged": 0
      }],
      "aria-posinset": [{
        "ariaAttributeChanged": 0
      }],
      "aria-pressed": [{
        "ariaAttributeChanged": 0
      }],
      "aria-readonly": [{
        "ariaAttributeChanged": 0
      }],
      "aria-relevant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-required": [{
        "ariaAttributeChanged": 0
      }],
      "aria-roledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-selected": [{
        "ariaAttributeChanged": 0
      }],
      "aria-setsize": [{
        "ariaAttributeChanged": 0
      }],
      "aria-sort": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemax": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemin": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuenow": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuetext": [{
        "ariaAttributeChanged": 0
      }]
    };
  }
};
Chip.style = chipCss();
export {
  Chip as ix_chip
};
