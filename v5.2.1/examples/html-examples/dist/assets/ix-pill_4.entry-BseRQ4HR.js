import { M as Mixin, r as registerInstance, g as getElement, h, H as Host, c as createEvent, a as readTask } from "./global-Do6maBom.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-DqJSHc3A-D5InBSMm.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { K as iconClose, e as iconMoreMenu } from "./index-BeX6RWvV-CXzUIwMU.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { B as BaseTabMixin } from "./tab.mixin-BjAM99yM-DiyDw8WE.js";
import { q as queryElements } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BmTKblYV-DYCoUX5J.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const pillCss = () => `@charset "UTF-8";:host{--ix-chip--outline-color--focus:var(--si-sys-effects-focus);--ix-chip-close--color:var(--si-sys-text-primary);--ix-chip-attachment--border-radius:var(--theme-small-border-radius);--ix-chip--focus--outline-offset:var(--theme-focus-outline-offset);--ix-chip-warning-icon--color:var(--si-sys-text-warning);--ix-chip-primary-icon--color:var(--si-sys-text-accent);--ix-chip-alarm--background:var(--si-sys-background-danger);--ix-chip-alarm--background--hover:var(--si-sys-background-danger-hover);--ix-chip-alarm--background--active:var(--si-sys-background-danger-active);--ix-chip-alarm--border-color:var(--si-sys-background-danger);--ix-chip-alarm--color:var(--si-sys-background-danger);--ix-chip-alarm--color--contrast:var(--si-sys-text-on-danger);--ix-chip-critical--background:var(--si-sys-background-critical);--ix-chip-critical--background--hover:var(--si-sys-background-critical-hover);--ix-chip-critical--background--active:var(--si-sys-background-critical-active);--ix-chip-critical--border-color:var(--si-sys-background-critical);--ix-chip-critical--color:var(--si-sys-background-critical);--ix-chip-critical--color--contrast:var(--si-sys-text-on-warning);--ix-chip-warning--background:var(--si-sys-background-warning);--ix-chip-warning--background--hover:var(--si-sys-background-warning-hover);--ix-chip-warning--background--active:var(--si-sys-background-warning-active);--ix-chip-warning--border-color:var(--si-sys-background-warning);--ix-chip-warning--color:var(--si-sys-background-warning);--ix-chip-warning--color--contrast:var(--si-sys-text-on-warning);--ix-chip-info--background:var(--si-sys-background-information);--ix-chip-info--background--hover:var(--si-sys-background-information-hover);--ix-chip-info--background--active:var(--si-sys-background-information-active);--ix-chip-info--border-color:var(--si-sys-background-information);--ix-chip-info--color:var(--si-sys-background-information);--ix-chip-info--color--contrast:var(--si-sys-text-on-information);--ix-chip-neutral--background:var(--si-sys-background-neutral);--ix-chip-neutral--background--hover:var(--si-sys-background-hover);--ix-chip-neutral--background--active:var(--si-sys-background-active);--ix-chip-neutral--border-color:var(--si-sys-background-neutral);--ix-chip-neutral--color:var(--si-sys-background-neutral);--ix-chip-neutral--color--contrast:var(--si-sys-text-primary);--ix-chip-success--background:var(--si-sys-background-success);--ix-chip-success--background--hover:var(--si-sys-background-success-hover);--ix-chip-success--background--active:var(--si-sys-background-success-active);--ix-chip-success--border-color:var(--si-sys-background-success);--ix-chip-success--color:var(--si-sys-background-success);--ix-chip-success--color--contrast:var(--si-sys-text-on-success);--ix-chip--background:var(--si-sys-background-1);--ix-chip--background--active:var(--si-sys-background-active);--ix-chip--background--hover:var(--si-sys-background-hover);--ix-chip--color:var(--si-sys-text-primary);--ix-chip-close-button--background:rgba(0, 0, 0, 0);--ix-chip-close-button--background--active:var(--si-sys-background-active);--ix-chip-close-button--background--hover:var(--si-sys-background-hover);--ix-chip-close-button--color:var(--si-sys-text-secondary);--ix-chip-outline--background:var(--si-sys-background-accent-secondary);--ix-chip-outline--background--active:var(--si-sys-background-active);--ix-chip-outline--background--hover:var(--si-sys-background-hover);--ix-chip-outline--color:var(--si-sys-text-primary);--ix-chip-primary--background:var(--si-sys-background-accent);--ix-chip-primary--background--active:var(--si-sys-background-accent-active);--ix-chip-primary--background--hover:var(--si-sys-background-accent-hover);--ix-chip-primary--color:var(--si-sys-text-on-accent);--ix-chip-primary--color--active:var(--si-sys-text-on-accent);--ix-chip-primary--color--hover:var(--si-sys-text-on-accent);--ix-chip-primary-outline--background:var(--si-sys-background-accent-secondary);--ix-chip-primary-outline--background--active:var(--si-sys-background-accent-secondary-active);--ix-chip-primary-outline--background--display:var(--si-sys-background-accent-secondary);--ix-chip-primary-outline--background--hover:var(--si-sys-background-accent-secondary-hover);--ix-chip-primary-outline--border-color:var(--si-sys-border-accent);--ix-chip-primary-outline--border-color--active:var(--si-sys-border-accent-active);--ix-chip-primary-outline--border-color--display:var(--si-sys-border-accent);--ix-chip-primary-outline--border-color--hover:var(--si-sys-border-accent-hover);--ix-chip-primary-outline--color:var(--si-sys-border-accent);--ix-chip-primary-outline--color--active:var(--si-sys-border-accent-active);--ix-chip-primary-outline--color--display:var(--si-sys-text-primary);--ix-chip-primary-outline--color--hover:var(--si-sys-border-accent-hover)}:host{--ix-pill-outline--background:var(--si-sys-background-accent-secondary)}:host{display:inline-block;position:relative;height:1.25rem;max-height:1.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}.container{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:center;border-radius:100px;padding:0.5rem;vertical-align:top;height:2rem;max-height:2rem;cursor:default}.container .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.container .with-icon{margin-right:0.25rem}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:0.5rem}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.centerContent .content-wrapper{justify-content:center;text-align:center}.container.outline{padding-left:calc(0.5rem - 0.0625rem)}.container.outline.icon.alarm .with-icon{color:var(--ix-chip-alarm--color)}.container.outline.icon.critical .with-icon{color:var(--ix-chip-critical--color)}.container.outline.icon.warning .with-icon{color:var(--ix-chip-warning-icon--color)}.container.outline.icon.info .with-icon{color:var(--ix-chip-info--color)}.container.outline.icon.neutral .with-icon{color:var(--ix-chip-neutral--color)}.container.outline.icon.success .with-icon{color:var(--ix-chip-success--color)}.container.outline.closable:not(.inactive){padding-right:calc(0.25rem - 0.0625rem)}.container.outline.closable.inactive,.container.outline:not(.closable){padding-right:calc(0.5rem - 0.0625rem)}.container:not(.outline){padding-left:0.5rem}.container:not(.outline).closable:not(.inactive){padding-right:0.25rem}.container:not(.outline).closable.inactive,.container:not(.outline):not(.closable){padding-right:0.5rem}.container.primary{background-color:var(--ix-chip-primary--background);color:var(--ix-chip-primary--color)}.container.primary .close-button{color:var(--ix-chip-primary--color);--ix-icon-button-color:var(--ix-chip-primary--color);pointer-events:auto}.container.primary.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-primary-outline--background);border:solid 0.0625rem var(--ix-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--ix-chip-outline--color);--ix-icon-button-color:var(--ix-chip-outline--color)}.container.primary.outline .with-icon{color:var(--ix-chip-primary-icon--color)}.container.outline{border-width:0.0625rem;border-style:solid}.container.alarm{color:var(--ix-chip-alarm--color--contrast)}.container.alarm:not(.outline){background-color:var(--ix-chip-alarm--background)}.container.alarm:not(.outline) .close-button{color:var(--ix-chip-alarm--color--contrast);--ix-icon-button-color:var(--ix-chip-alarm--color--contrast)}.container.alarm.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-alarm--border-color)}.container.critical{color:var(--ix-chip-critical--color--contrast)}.container.critical:not(.outline){background-color:var(--ix-chip-critical--background)}.container.critical:not(.outline) .close-button{color:var(--ix-chip-critical--color--contrast);--ix-icon-button-color:var(--ix-chip-critical--color--contrast)}.container.critical.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-critical--border-color)}.container.warning{color:var(--ix-chip-warning--color--contrast)}.container.warning:not(.outline){background-color:var(--ix-chip-warning--background)}.container.warning:not(.outline) .close-button{color:var(--ix-chip-warning--color--contrast);--ix-icon-button-color:var(--ix-chip-warning--color--contrast)}.container.warning.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-warning--border-color)}.container.info{color:var(--ix-chip-info--color--contrast)}.container.info:not(.outline){background-color:var(--ix-chip-info--background)}.container.info:not(.outline) .close-button{color:var(--ix-chip-info--color--contrast);--ix-icon-button-color:var(--ix-chip-info--color--contrast)}.container.info.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-info--border-color)}.container.neutral{color:var(--ix-chip-neutral--color--contrast)}.container.neutral:not(.outline){background-color:var(--ix-chip-neutral--background)}.container.neutral:not(.outline) .close-button{color:var(--ix-chip-neutral--color--contrast);--ix-icon-button-color:var(--ix-chip-neutral--color--contrast)}.container.neutral.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-neutral--border-color)}.container.success{color:var(--ix-chip-success--color--contrast)}.container.success:not(.outline){background-color:var(--ix-chip-success--background)}.container.success:not(.outline) .close-button{color:var(--ix-chip-success--color--contrast);--ix-icon-button-color:var(--ix-chip-success--color--contrast)}.container.success.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-success--border-color)}:host .container{height:100%;justify-content:center}:host .container .with-icon{margin-right:0}:host .container.outline{background-color:var(--ix-pill-outline--background)}:host .container.outline.icon{padding-left:0.4375rem;padding-right:0.4375rem}:host .container:not(.outline).icon{padding-left:0.5rem;padding-right:0.5rem}:host .with-gap{gap:0.25rem}:host(.align-left) .container{justify-content:flex-start}`;
const Pill = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Pill variant
   */
  variant = "primary";
  /**
   * Show pill as outline
   */
  outline = false;
  /**
   * Show icon
   */
  icon;
  /**
   * ARIA label for the icon
   *
   * @since 3.2.0
   */
  ariaLabelIcon;
  /**
   * Custom color for pill. Only working for `variant='custom'`
   */
  background;
  /**
   * Custom font color for pill. Only working for `variant='custom'`
   */
  pillColor;
  /**
   * Align pill content left
   */
  alignLeft = false;
  /**
   * Display a tooltip. By default, no tooltip will be displayed.
   * Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
   * @since 3.0.0
   */
  tooltipText = false;
  iconOnly = false;
  containerElementRef = makeRef();
  componentWillLoad() {
    this.checkIfContentAvailable();
  }
  checkIfContentAvailable() {
    const hasChildren = this.hostElement.children.length > 0;
    const hasTextContent = !!this.hostElement.textContent;
    this.iconOnly = !hasChildren && !hasTextContent;
  }
  getTooltip() {
    if (!this.tooltipText && !this.hostElement.hasAttribute("tooltip-text")) {
      return null;
    }
    const text = typeof this.tooltipText === "string" && this.tooltipText.trim() ? this.tooltipText : this.hostElement.textContent?.trim();
    return h("ix-tooltip", { for: this.containerElementRef.waitForCurrent(), "aria-label": text || void 0 }, text);
  }
  render() {
    let customStyle = {};
    if (this.variant === "custom") {
      customStyle = {
        color: this.pillColor,
        [this.outline ? "borderColor" : "backgroundColor"]: this.background
      };
    }
    const hasAccessibleName = this.hostElement.hasAttribute("aria-label") || this.hostElement.hasAttribute("aria-labelledby");
    let hostRole = void 0;
    if (this.hostElement.hasAttribute("role")) {
      hostRole = this.hostElement.getAttribute("role") ?? void 0;
    } else if (hasAccessibleName) {
      hostRole = "group";
    }
    const iconIsDecorative = !this.ariaLabelIcon?.trim();
    return h(Host, { key: "1ec68f2699446e29d01906fc0e1fabf5ebcd97e5", style: this.variant === "custom" ? {
      "--ix-icon-button-color": this.pillColor
    } : {}, class: {
      "align-left": this.alignLeft
    }, role: hostRole }, h("div", { key: "c780a509c3809df4a86c945fa807b2ec2de6b1cb", ref: this.containerElementRef, style: { ...customStyle }, class: {
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
    } }, this.icon && h("ix-icon", { key: "35b7669e1ed0008e14038b987c3c6a5d7ab33698", class: {
      "with-icon": true
    }, name: this.icon, size: "16", "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(iconIsDecorative) }), h("span", { key: "b1bc15578e674e13bf9cbbb164f4e81094031259", class: "slot-container" }, h("slot", { key: "84105f43ad8997c3f80426fca520bc6f3d598b94", onSlotchange: () => this.checkIfContentAvailable() }))), this.getTooltip());
  }
};
Pill.style = pillCss();
const tabItemCss = () => `@charset "UTF-8";:host{--ix-tab-item-pill--background:var(--si-sys-background-0);--ix-tab-item--outline-color--focus:var(--si-sys-effects-focus);--ix-tab-item-pill-outline--color:var(--si-sys-text-primary);--ix-tab-item-animated-circle--background:var(--si-sys-background-1);--ix-tab-item-animated-circle--background--active:var(--si-sys-background-accent-secondary-active);--ix-tab-item-animated-circle--background--disabled:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--background--hover:var(--si-sys-background-accent-secondary-hover);--ix-tab-item-animated-circle--background--selected:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--border-color:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--border-color--disabled:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--border-color--selected:var(--si-sys-border-accent-hover);--ix-tab-item-animated-icon--color:var(--si-sys-text-primary);--ix-tab-item-animated-icon--color--selected:var(--si-sys-text-accent-hover);--ix-tab-item--background:rgba(0, 0, 0, 0);--ix-tab-item--background--active:var(--si-sys-background-accent-secondary-active);--ix-tab-item--background--disabled:rgba(0, 0, 0, 0);--ix-tab-item--background--hover:var(--si-sys-background-accent-secondary-hover);--ix-tab-item--background--selected:rgba(0, 0, 0, 0);--ix-tab-item--color:var(--si-sys-text-primary);--ix-tab-item--color--active:var(--si-sys-text-primary);--ix-tab-item--color--disabled:var(--si-sys-text-disabled);--ix-tab-item--color--hover:var(--si-sys-text-primary);--ix-tab-item--color--selected:var(--si-sys-text-accent-hover);--ix-tab-item-indicator--background--disabled:var(--si-sys-border-3);--ix-tab-item-indicator--background--selected:var(--si-sys-background-accent-hover);--ix-tab-item-pill--border-color:var(--si-sys-border-3);--ix-tab-item-pill--border-color--disabled:var(--si-sys-border-3);--ix-tab-item-pill--border-color--selected:var(--si-sys-border-accent-hover)}:host{position:relative;display:flex;align-items:center;justify-content:center;line-height:20px;font-size:14px;font-weight:bold;background-color:var(--ix-tab-item--background);color:var(--ix-tab-item--color);touch-action:none;height:2.5rem;min-height:2.5rem;max-height:2.5rem;padding:0.0625rem 1.5rem;gap:0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .text span,:host .text span::before{pointer-events:none}:host .text{vertical-align:middle}:host slot{white-space:nowrap}:host .circle{display:flex;justify-content:center;align-items:center;height:3rem;width:3rem;background-color:var(--ix-tab-item-animated-circle--background);border-radius:50%;border:2px solid var(--ix-tab-item-animated-circle--border-color);color:var(--ix-tab-item-animated-icon--color);cursor:pointer}:host .circle:hover{background-color:var(--ix-tab-item-animated-circle--background--hover)}:host .circle:active{background-color:var(--ix-tab-item-animated-circle--background--active)}:host .counter{position:absolute;z-index:1;height:16px;width:auto;background-color:var(--ix-tab-item-pill--background);border:1px solid var(--ix-tab-item-pill--border-color);border-radius:100px;bottom:6px;display:flex;justify-content:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;font-size:12px;line-height:14px;color:var(--ix-tab-item-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--ix-tab-item-pill--border-color--selected)}:host .counter.disabled{border-color:var(--ix-tab-item-pill--border-color--disabled);cursor:default}:host .hidden{display:none}:host(:not(.disabled)){cursor:pointer}:host(.circle){height:4.5rem;min-height:4.5rem;max-height:4.5rem}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.stretched) div{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected:not(.disabled)){background-color:var(--ix-tab-item--background--selected);color:var(--ix-tab-item--color--selected)}:host(.selected:not(.disabled))::after{content:"";position:absolute;left:0;width:100%;height:2px;background-color:var(--ix-tab-item-indicator--background--selected)}:host(.selected:not(.disabled)) .circle{background-color:var(--ix-tab-item-animated-circle--background--selected);color:var(--ix-tab-item-animated-icon--color--selected);border-color:var(--ix-tab-item-animated-circle--border-color--selected)}:host(.selected:not(.disabled)) .circle:hover{background-color:var(--ix-tab-item-animated-circle--background--selected)}:host(.selected.bottom:not(.disabled)){background-color:var(--ix-tab-item--background--selected);color:var(--ix-tab-item--color--selected)}:host(.selected.bottom:not(.disabled))::after{bottom:0px}:host(.selected.top:not(.disabled))::after{top:0px}:host(:hover:not(.circle):not(.disabled)){background-color:var(--ix-tab-item--background--hover);color:var(--ix-tab-item--color--hover)}:host(:active:not(.circle):not(.disabled)){background-color:var(--ix-tab-item--background--active);color:var(--ix-tab-item--color--active)}:host(.disabled){cursor:default;color:var(--ix-tab-item--color--disabled);background-color:var(--ix-tab-item--background--disabled);pointer-events:none}:host(.disabled)::after{background-color:var(--ix-tab-item-indicator--background--disabled)}:host(.disabled) .circle{background-color:var(--ix-tab-item-animated-circle--background--disabled);border-color:var(--ix-tab-item-animated-circle--border-color--disabled);cursor:default}:host(.icon-only){display:flex;justify-content:center;align-items:center;padding:1.5rem 0.5rem}:host(.small-tab){height:2rem;min-height:2rem;max-height:2rem;padding:1rem}:host(.small-tab.icon){padding:1rem 0.25rem}:host(:not(.circle):focus-visible){outline-offset:-0.0625rem;outline:0.0625rem solid var(--ix-tab-item--outline-color--focus)}:host(.circle:focus-visible){outline:none}:host(.circle:focus-visible) .circle{outline-offset:0.125rem;outline:0.0625rem solid var(--ix-tab-item--outline-color--focus)}`;
const TabItem = class extends Mixin(...DefaultMixins, ComponentIdMixin, BaseTabMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.tabClick = createEvent(this, "tabClick", 7);
    this.tabClose = createEvent(this, "tabClose", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Set selected tab
   */
  selected = false;
  /**
   * Set disabled tab
   */
  disabled = false;
  /**
   * Set icon of the tab
   *
   * @since 5.0.0
   */
  icon;
  /**
   * Set counter value
   */
  counter;
  /**
   * If the tab can be closed
   *
   * @since 5.0.0
   */
  closable = false;
  /**
   * Tab label
   *
   * @since 5.0.0
   */
  label;
  /**
   * Aria label for the close button, important for accessibility
   *
   * @since 5.0.0
   */
  ariaLabelCloseButton = "Close tab";
  /** @internal */
  placement = "bottom";
  /** @internal */
  rounded = false;
  /** @internal */
  small = false;
  /** @internal */
  layout = "auto";
  /** @internal */
  iconOnly = false;
  /**
   * Emitted when the tab is clicked.
   */
  tabClick;
  /**
   * Emitted when the tab's close button is clicked.
   */
  tabClose;
  onTabSelect(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    const clientEvent = this.tabClick.emit({
      tabKey: this.tabKey,
      nativeEvent: event
    });
    if (clientEvent.defaultPrevented) {
      event.stopPropagation();
    }
  }
  render() {
    let variant = "normal";
    const label = this.label || this.hostElement.textContent?.trim();
    if (this.rounded) {
      variant = "rounded";
    } else if (this.icon && (label === void 0 || label === "")) {
      variant = "icon-only";
    } else {
      variant = "normal";
    }
    return h(Host, { key: "4fe046e0d80d1df1387d5f75ea2246daaa6a3241", id: this.getHostElementId(), role: "tab", "aria-selected": a11yBoolean(this.selected), tabIndex: this.selected && !this.disabled ? 0 : -1, class: {
      selected: this.selected,
      disabled: this.disabled,
      "small-tab": this.small,
      "icon-only": variant === "icon-only",
      stretched: this.layout === "stretched",
      bottom: this.placement === "bottom",
      top: this.placement === "top",
      circle: this.rounded
    }, onClick: (event) => this.onTabSelect(event), onKeyDown: (event) => {
      if (event.key === "Enter" || event.key === " ") {
        this.onTabSelect(event);
      }
      if (this.closable && event.key === "Delete") {
        event.preventDefault();
        this.tabClose.emit({
          tabKey: this.tabKey,
          nativeEvent: event
        });
      }
    } }, variant === "rounded" && h("div", { key: "7d335a123f25454ec719ed658911910e9f483b71", class: {
      circle: true
    } }, this.icon && h("ix-icon", { key: "1c242de4a15aeb52b11048464f5d7e3ab10c2439", name: this.icon, size: "24" }), h("slot", { key: "b9c73bd9ed4063ae8997c83029ac5c0c621b30c0" })), this.icon && variant !== "rounded" && h("ix-icon", { key: "0e56329574896a56069b498f78b14e6cc34e1791", name: this.icon, size: "16", class: "tab-icon" }), variant === "normal" && h("div", { key: "3b9ae6e0a98cb848b459b399ae5bd2c82b3190be", class: {
      text: !!this.label,
      selected: this.selected,
      disabled: this.disabled
    } }, this.label, h("slot", { key: "02f4b8b6be06074ee4ea6aff1c726386dba9305f" })), variant === "rounded" && this.counter !== void 0 && h("div", { key: "436545ac023445f440cf1858f19f9ae42226ef73", class: {
      counter: true,
      selected: this.selected,
      disabled: this.disabled
    } }, this.counter), this.counter && variant !== "rounded" && h("ix-pill", { key: "72299aa9bb00c51a924e68e7156d70139a4b6bab", variant: "primary", outline: true, class: "tab-counter" }, this.counter), this.closable && variant !== "rounded" && h("ix-icon-button", { key: "5c31dcf0596fe57a96f5016815800b83fae7971b", "aria-label": this.ariaLabelCloseButton, class: "close-tab", size: "12", variant: "subtle-tertiary", icon: iconClose, onClick: (event) => {
      event.stopPropagation();
      event.preventDefault();
      this.tabClose.emit({
        tabKey: this.tabKey,
        nativeEvent: event
      });
    } }));
  }
};
TabItem.style = tabItemCss();
const tabSetCss = () => `@charset "UTF-8";:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const TabSet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  get tabPanels() {
    return Array.from(queryElements(this.hostElement, "ix-tab-panel"));
  }
  get tabList() {
    return this.hostElement?.querySelector("ix-tabs");
  }
  get tabListItems() {
    if (!this.tabList) {
      return [];
    }
    return Array.from(this.tabList.querySelectorAll("ix-tab-item"));
  }
  panelsObserver;
  componentWillLoad() {
    this.panelsObserver = new MutationObserver(() => this.onPanelComponentsChange());
    this.panelsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
    this.onPanelComponentsChange();
  }
  componentDidLoad() {
    this.onPanelComponentsChange();
  }
  disconnectedCallback() {
    this.panelsObserver?.disconnect();
  }
  onPanelComponentsChange() {
    const tabs = this.tabList;
    const tabItems = this.tabListItems;
    const panels = this.tabPanels;
    if (!tabs || !tabItems || !panels) {
      return;
    }
    const activeTabKey = tabs.activeTabKey;
    if (!activeTabKey) {
      return;
    }
    const activeTabElement = tabItems.find((tab) => tab.tabKey === activeTabKey);
    const activeTabPanel = panels.find((panel) => panel.tabKey === activeTabKey);
    if (!activeTabElement || !activeTabPanel) {
      return;
    }
    const tabId = activeTabElement.getAttribute("id");
    activeTabPanel.setAttribute("aria-labelledby", tabId ?? "");
    const tabPanelId = activeTabPanel.getAttribute("id");
    activeTabElement.setAttribute("aria-controls", tabPanelId ?? "");
    this.checkPanelsVisibility();
  }
  checkPanelsVisibility() {
    const tabs = this.tabList?.querySelectorAll("ix-tab-item");
    const panels = this.tabPanels;
    if (!tabs || !panels) {
      return;
    }
    panels.forEach((panel) => {
      panel.hidden = panel.tabKey === this.tabList?.activeTabKey ? false : true;
    });
  }
  render() {
    return h(Host, { key: "b784e4d45c5c9a4b90a4ede786478448ffd32c4b", onTabChange: () => this.checkPanelsVisibility() }, h("slot", { key: "09dc901a5c9e02276bd21d0021cce74055826644" }));
  }
};
TabSet.style = tabSetCss();
function emitEvent(action, emitter, rollback) {
  const result = action();
  const { defaultPrevented } = emitter.emit(result.new);
  if (defaultPrevented) {
    rollback(result.old);
  }
  return result;
}
const tabsCss = () => `@charset "UTF-8";:host{--ix-tabs--outline-color--focus:var(--si-sys-effects-focus);--ix-tabs-indicator--background:var(--si-sys-border-3);--ix-tabs-indicator--background--selected:var(--si-sys-background-accent-hover);--ix-tabs-indicator--height:0.0625rem}:host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tabs-container{display:flex;flex-direction:row;position:relative;width:100%;justify-content:space-between;align-items:center}:host .tabs-container.top::before{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background);width:100%;height:var(--ix-tabs-indicator--height);left:0;bottom:0}:host .tabs-container.top::after{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--ix-tabs-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host .tabs-container.top::before,:host .tabs-container.top::after{top:0;bottom:auto}:host .tabs-container.bottom::before{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background);width:100%;height:var(--ix-tabs-indicator--height);left:0;bottom:0}:host .tabs-container.bottom::after{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--ix-tabs-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host .tabs-container.bottom::before,:host .tabs-container.bottom::after{top:auto;bottom:0}:host .tabs{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:auto;scroll-behavior:smooth;width:100%;touch-action:pan-y;padding-right:2.75rem;scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs.tabs-stretched{padding-right:0px}:host .tabs:focus-visible{outline-offset:-1px;outline:1px solid var(--ix-tabs--outline-color--focus)}:host .tabs-context-menu{margin-right:0.5rem}:host .overflow-shadow-container{display:block;position:relative;height:100%;width:100%;pointer-events:all;overflow:auto}:host .overflow-shadow{-webkit-mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - 45px), transparent 100%)}`;
const Tabs = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.tabClose = createEvent(this, "tabClose", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  getIgnoredAriaAttributes() {
    return ["role"];
  }
  /**
   * Set tab items to small size
   */
  small = false;
  /**
   * Set rounded tabs
   */
  rounded = false;
  /**
   * Set layout width style
   */
  layout = "auto";
  /**
   * Set placement style
   */
  placement = "bottom";
  /**
   * Aria label for the overflow menu button.
   *
   * @since 5.0.0
   */
  ariaLabelMoreTabs = "Show all tabs";
  /**
   * Active tab key.
   *
   * @since 5.0.0
   */
  activeTabKey;
  /**
   * Keyboard interaction behavior:
   * automatic:  A tabs widget where tabs are automatically activated and their panel is displayed when they receive focus.
   * manual: A tabs widget where users activate a tab and display its panel by pressing Space or Enter.
   *
   * @since 5.0.0
   */
  keyboardNavigation = "automatic";
  /**
   * Tab selection event. Event detail contains the new active tab key.
   *
   * @since 5.0.0
   */
  tabChange;
  /**
   * Tab close event. Event detail contains the closed tab key.
   *
   * @since 5.0.0
   */
  tabClose;
  isTabsOverflow = false;
  overflowMenuItems = [];
  resizeObserver;
  itemsObserver;
  tabsContainerRef = makeRef();
  tabsRef = makeRef();
  get tabs() {
    return Array.from(this.hostElement.querySelectorAll("ix-tab-item"));
  }
  componentDidLoad() {
    this.itemsObserver = new MutationObserver(() => {
      this.onComponentChildrenChange();
      requestAnimationFrameNoNgZone(() => this.onComponentResize());
    });
    this.itemsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    this.resizeObserver = new ResizeObserver(() => this.onComponentResize());
    this.resizeObserver.observe(this.hostElement);
    this.onComponentResize();
  }
  componentWillLoad() {
    super.componentWillLoad();
    this.onComponentChildrenChange();
    if (this.activeTabKey) {
      this.setTabActive(this.activeTabKey);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.itemsObserver) {
      this.itemsObserver.disconnect();
    }
  }
  onActiveTabChange(tabKey, oldTabKey) {
    const activeTab = this.tabs.find((tab) => tab.selected);
    if (activeTab?.tabKey === tabKey) {
      return;
    }
    this.emitTabChangeEvent(tabKey, oldTabKey);
  }
  setTabActive(tabKey) {
    const tabs = this.tabs;
    if (tabKey === void 0) {
      tabs.forEach((tab) => tab.selected = false);
      this.onComponentChildrenChange();
      this.activeTabKey = void 0;
      return;
    }
    const newTab = tabs.find((tab) => tab.tabKey === tabKey);
    if (!newTab) {
      return;
    }
    if (newTab.disabled) {
      return;
    }
    tabs.forEach((tab) => tab.selected = false);
    newTab.selected = true;
    this.onComponentChildrenChange();
    this.activeTabKey = newTab.tabKey;
    newTab.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
    return this.activeTabKey;
  }
  onComponentChildrenChange() {
    const tabItems = this.tabs;
    tabItems.forEach((tab) => {
      const propertiesToInherit = {
        layout: this.layout,
        small: this.small,
        rounded: this.rounded,
        placement: this.placement,
        iconOnly: tabItems.every((t) => !t.label && !!t.icon)
      };
      Object.assign(tab, propertiesToInherit);
    });
    this.overflowMenuItems = Array.from(tabItems).map((item) => ({
      tabKey: item.tabKey,
      label: item.label || item.textContent || "",
      icon: item.icon,
      disabled: item.disabled
    }));
    const isTabSelected = tabItems.some((tab) => tab.selected);
    if (!isTabSelected && tabItems.length > 0 && hasKeyboardMode()) {
      tabItems[0].focus();
      this.emitTabChangeEvent(tabItems[0].tabKey);
    }
  }
  onComponentResize() {
    const tabContainer = this.tabsRef.current;
    if (!tabContainer) {
      return;
    }
    readTask(() => {
      const isOverflowing = tabContainer.scrollWidth > tabContainer.clientWidth;
      this.isTabsOverflow = isOverflowing;
    });
  }
  onTabClick(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.detail.tabKey === void 0) {
      return;
    }
    this.emitTabChangeEvent(event.detail.tabKey);
  }
  emitTabChangeEvent(tabKey, oldTabKey = this.activeTabKey) {
    emitEvent(() => {
      const newKey = this.setTabActive(tabKey);
      return {
        new: newKey,
        old: oldTabKey
      };
    }, this.tabChange, (oldKey) => this.setTabActive(oldKey));
  }
  onTabsNavigate(event) {
    if (event.target instanceof HTMLElement && event.target.getAttribute("role") === "tablist") {
      return;
    }
    const tabs = this.tabs.filter((tab) => !tab.disabled);
    let currentIndex = tabs.findIndex((tab) => tab.selected);
    if (this.keyboardNavigation === "manual") {
      currentIndex = tabs.findIndex((tab) => tab === document.activeElement);
    }
    const activeTab = (tab) => {
      tab.focus();
      if (this.keyboardNavigation === "automatic") {
        this.emitTabChangeEvent(tab.tabKey);
      }
    };
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      if (currentIndex === -1) {
        return;
      }
      const indexOffset = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + indexOffset + tabs.length) % tabs.length;
      const nextTab = tabs[nextIndex];
      activeTab(nextTab);
    }
    if (event.key === "Home") {
      event.preventDefault();
      activeTab(tabs[0]);
    }
    if (event.key === "End") {
      event.preventDefault();
      activeTab(tabs[tabs.length - 1]);
    }
  }
  render() {
    return h(Host, { key: "54afc578a3f15c4a24f278de4f7904baec9774a9", onTabClick: (event) => this.onTabClick(event), class: {
      small: this.small
    } }, h("div", { key: "b4796748745d63bc0d4f7d558311bdc919d8bc0e", ref: this.tabsContainerRef, class: {
      "tabs-container": true,
      top: this.placement === "top",
      bottom: this.placement === "bottom"
    } }, h("div", { key: "863ba99b2a3e94351a5c4567429a64a09205704d", class: {
      "overflow-shadow-container": true,
      "overflow-shadow": this.isTabsOverflow
    } }, h("div", { key: "84d15a50a5facf8d979445930396e042d42d6bbb", role: "tablist", ...this.inheritAriaAttributes, ref: this.tabsRef, class: {
      tabs: true,
      "tabs-stretched": this.layout === "stretched"
    }, tabIndex: this.isTabsOverflow ? 0 : -1, onKeyDown: (event) => this.onTabsNavigate(event) }, h("slot", { key: "67216cb407d64cc7efad4c31ac0cd1b3f770dbab" }))), this.isTabsOverflow && this.layout !== "stretched" && h("ix-dropdown-button", { key: "89ced70893d7aa93544184123401844bb686c62b", ariaLabel: this.ariaLabelMoreTabs, icon: iconMoreMenu, class: {
      "tabs-context-menu": true
    }, variant: "subtle-tertiary" }, this.overflowMenuItems.map((item) => h("ix-dropdown-item", { key: item.tabKey, checked: item.tabKey === this.activeTabKey, icon: item.icon, label: item.label, disabled: item.disabled, onClick: () => this.activeTabKey = item.tabKey })))));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "activeTabKey": [{
        "onActiveTabChange": 0
      }]
    };
  }
};
Tabs.style = tabsCss();
export {
  Pill as ix_pill,
  TabItem as ix_tab_item,
  TabSet as ix_tab_set,
  Tabs as ix_tabs
};
