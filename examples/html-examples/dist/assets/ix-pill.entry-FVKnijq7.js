import { r as registerInstance, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
const pillCss = ":host{display:inline-block;position:relative;height:1.25rem;max-height:1.25rem;margin-left:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.container{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;vertical-align:top;height:2rem;max-height:2rem;cursor:default}.container .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.container .with-icon{margin-right:0.25rem}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.centerContent .content-wrapper{justify-content:center;text-align:center}.container.outline.icon{padding-left:calc(0.75rem - 1px)}.container.outline.icon.alarm .with-icon{color:var(--theme-color-alarm)}.container.outline.icon.critical .with-icon{color:var(--theme-color-critical)}.container.outline.icon.warning .with-icon{color:var(--theme-color-warning-text)}.container.outline.icon.info .with-icon{color:var(--theme-color-info)}.container.outline.icon.neutral .with-icon{color:var(--theme-color-neutral)}.container.outline.icon.success .with-icon{color:var(--theme-color-success)}.container.outline:not(.icon){padding-left:calc(0.5rem - 1px)}.container.outline.closable:not(.inactive){padding-right:calc(0.25rem - 1px)}.container.outline.closable.inactive,.container.outline:not(.closable){padding-right:calc(0.5rem - 1px)}.container.outline.icon:not(.closable){padding-right:calc(0.75rem - 1px)}.container:not(.outline).icon{padding-left:0.75rem}.container:not(.outline):not(.icon){padding-left:0.5rem}.container:not(.outline).closable:not(.inactive){padding-right:0.25rem}.container:not(.outline).closable.inactive{padding-right:0.5rem}.container:not(.outline):not(.closable).icon{padding-right:0.75rem}.container:not(.outline):not(.closable):not(.icon){padding-right:0.5rem}.container.primary{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}.container.primary .close-button{color:var(--theme-chip-primary--color);--ix-icon-button-color:var(--theme-chip-primary--color);pointer-events:auto}.container.primary.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-primary-outline--background);border:solid 1px var(--theme-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--theme-chip-outline--color);--ix-icon-button-color:var(--theme-chip-outline--color)}.container.primary.outline .with-icon{color:var(--theme-color-primary)}.container.outline{border-width:1px;border-style:solid}.container.alarm{color:var(--theme-color-alarm--contrast)}.container.alarm:not(.outline){background-color:var(--theme-color-alarm)}.container.alarm:not(.outline) .close-button{color:var(--theme-color-alarm--contrast);--ix-icon-button-color:var(--theme-color-alarm--contrast)}.container.alarm.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-alarm)}.container.critical{color:var(--theme-color-critical--contrast)}.container.critical:not(.outline){background-color:var(--theme-color-critical)}.container.critical:not(.outline) .close-button{color:var(--theme-color-critical--contrast);--ix-icon-button-color:var(--theme-color-critical--contrast)}.container.critical.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-critical)}.container.warning{color:var(--theme-color-warning--contrast)}.container.warning:not(.outline){background-color:var(--theme-color-warning)}.container.warning:not(.outline) .close-button{color:var(--theme-color-warning--contrast);--ix-icon-button-color:var(--theme-color-warning--contrast)}.container.warning.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-warning)}.container.info{color:var(--theme-color-info--contrast)}.container.info:not(.outline){background-color:var(--theme-color-info)}.container.info:not(.outline) .close-button{color:var(--theme-color-info--contrast);--ix-icon-button-color:var(--theme-color-info--contrast)}.container.info.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-info)}.container.neutral{color:var(--theme-color-neutral--contrast)}.container.neutral:not(.outline){background-color:var(--theme-color-neutral)}.container.neutral:not(.outline) .close-button{color:var(--theme-color-neutral--contrast);--ix-icon-button-color:var(--theme-color-neutral--contrast)}.container.neutral.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-neutral)}.container.success{color:var(--theme-color-success--contrast)}.container.success:not(.outline){background-color:var(--theme-color-success)}.container.success:not(.outline) .close-button{color:var(--theme-color-success--contrast);--ix-icon-button-color:var(--theme-color-success--contrast)}.container.success.outline{color:var(--theme-chip-outline--color);background-color:var(--theme-chip-outline--background);border-color:var(--theme-color-success)}:host .container{height:100%;justify-content:center}:host .container .with-icon{margin-right:0}:host .container.outline{background-color:var(--theme-pill-outline--background)}:host .container.outline.icon{padding-left:0.4375rem;padding-right:0.4375rem}:host .container:not(.outline).icon{padding-left:0.5rem;padding-right:0.5rem}:host .with-gap{gap:0.25rem}:host(.align-left) .container{justify-content:flex-start}";
const Pill = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "primary";
    this.outline = false;
    this.alignLeft = false;
    this.tooltipText = false;
    this.iconOnly = false;
    this.containerElementRef = makeRef();
  }
  componentWillLoad() {
    this.checkIfContentAvailable();
  }
  checkIfContentAvailable() {
    const hasChildren = this.hostElement.children.length > 0;
    const hasTextContent = !!this.hostElement.textContent;
    this.iconOnly = !hasChildren && !hasTextContent;
  }
  getTooltip() {
    var _a;
    if (!this.tooltipText && !this.hostElement.hasAttribute("tooltip-text")) {
      return null;
    }
    const text = typeof this.tooltipText === "string" && this.tooltipText.trim() ? this.tooltipText : (_a = this.hostElement.textContent) === null || _a === void 0 ? void 0 : _a.trim();
    return h("ix-tooltip", { for: this.containerElementRef.waitForCurrent() }, text);
  }
  render() {
    let customStyle = {};
    if (this.variant === "custom") {
      customStyle = {
        color: this.pillColor,
        [this.outline ? "borderColor" : "backgroundColor"]: this.background
      };
    }
    return h(Host, { key: "92cc7c2458f3bbf26a62fb641a6a69c279aca3d4", style: this.variant === "custom" ? {
      "--ix-icon-button-color": this.pillColor
    } : {}, class: {
      "align-left": this.alignLeft
    } }, h("div", { key: "4b6a3abf6c93b8d8705e9e95738b0e2f1b270465", ref: this.containerElementRef, style: Object.assign({}, customStyle), class: {
      container: true,
      outline: this.outline,
      inactive: false,
      alarm: this.variant === "alarm",
      critical: this.variant === "critical",
      info: this.variant === "info",
      neutral: this.variant === "neutral",
      primary: this.variant === "primary",
      success: this.variant === "success",
      warning: this.variant === "warning",
      custom: this.variant === "custom",
      closable: false,
      icon: !!this.icon,
      "with-gap": !this.iconOnly
    } }, this.icon && h("ix-icon", { key: "4739a22536b12b5124fc11a6f72f664539c2b662", class: {
      "with-icon": true
    }, name: this.icon, size: "16", "aria-label": this.ariaLabelIcon }), h("span", { key: "90457e143210a0f070b775ba176aa35946e910c6", class: "slot-container" }, h("slot", { key: "bd7e9da045b7536b65a4c92ec37197bbfda0b478", onSlotchange: () => this.checkIfContentAvailable() }))), this.getTooltip());
  }
  get hostElement() {
    return getElement(this);
  }
};
Pill.style = pillCss;
export {
  Pill as ix_pill
};
