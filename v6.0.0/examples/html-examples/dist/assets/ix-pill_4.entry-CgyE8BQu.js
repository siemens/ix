import { M as Mixin, r as registerInstance, g as getElement, h, H as Host, c as createEvent, a as readTask } from "./global-CU4RCWGK.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { K as iconClose, e as iconMoreMenu } from "./index-BeX6RWvV-CXzUIwMU.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { B as BaseTabMixin } from "./tab.mixin-CEGZUg-G-UBKZbcrd.js";
import { q as queryElements } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-D76QMfpO-DgBj8N2Y.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const pillCss = () => `@charset "UTF-8";:host{--ix-chip--outline-color--focus:var(--si-sys-color-effects-focus);--ix-chip-close--color:var(--si-sys-color-text-primary);--ix-chip-warning-icon--color:var(--si-sys-color-text-warning);--ix-chip-primary-icon--color:var(--si-sys-color-text-accent);--ix-chip-alarm--background:var(--si-sys-color-background-danger);--ix-chip-alarm--background--hover:var(--si-sys-color-background-danger-hover);--ix-chip-alarm--background--active:var(--si-sys-color-background-danger-active);--ix-chip-alarm--border-color:var(--si-sys-color-background-danger);--ix-chip-alarm--color:var(--si-sys-color-background-danger);--ix-chip-alarm--color--contrast:var(--si-sys-color-text-on-danger);--ix-chip-critical--background:var(--si-sys-color-background-critical);--ix-chip-critical--background--hover:var(--si-sys-color-background-critical-hover);--ix-chip-critical--background--active:var(--si-sys-color-background-critical-active);--ix-chip-critical--border-color:var(--si-sys-color-background-critical);--ix-chip-critical--color:var(--si-sys-color-background-critical);--ix-chip-critical--color--contrast:var(--si-sys-color-text-on-critical);--ix-chip-warning--background:var(--si-sys-color-background-warning);--ix-chip-warning--background--hover:var(--si-sys-color-background-warning-hover);--ix-chip-warning--background--active:var(--si-sys-color-background-warning-active);--ix-chip-warning--border-color:var(--si-sys-color-background-warning);--ix-chip-warning--color:var(--si-sys-color-background-warning);--ix-chip-warning--color--contrast:var(--si-sys-color-text-on-warning);--ix-chip-info--background:var(--si-sys-color-background-information);--ix-chip-info--background--hover:var(--si-sys-color-background-information-hover);--ix-chip-info--background--active:var(--si-sys-color-background-information-active);--ix-chip-info--border-color:var(--si-sys-color-background-information);--ix-chip-info--color:var(--si-sys-color-background-information);--ix-chip-info--color--contrast:var(--si-sys-color-text-on-information);--ix-chip-neutral--background:var(--si-sys-color-background-neutral);--ix-chip-neutral--background--hover:var(--si-sys-color-background-neutral-hover);--ix-chip-neutral--background--active:var(--si-sys-color-background-neutral-active);--ix-chip-neutral--border-color:var(--si-sys-color-background-neutral);--ix-chip-neutral--color:var(--si-sys-color-background-neutral);--ix-chip-neutral--color--contrast:var(--si-sys-color-text-on-neutral);--ix-chip-success--background:var(--si-sys-color-background-success);--ix-chip-success--background--hover:var(--si-sys-color-background-success-hover);--ix-chip-success--background--active:var(--si-sys-color-background-success-active);--ix-chip-success--border-color:var(--si-sys-color-background-success);--ix-chip-success--color:var(--si-sys-color-background-success);--ix-chip-success--color--contrast:var(--si-sys-color-text-on-success);--ix-chip--background:var(--si-sys-color-background-1);--ix-chip--background--active:var(--si-sys-color-background-selected);--ix-chip--background--hover:var(--si-sys-color-background-hover);--ix-chip--color:var(--si-sys-color-text-primary);--ix-chip-close-button--background:rgba(0, 0, 0, 0);--ix-chip-close-button--background--active:var(--si-sys-color-background-selected);--ix-chip-close-button--background--hover:var(--si-sys-color-background-hover);--ix-chip-close-button--color:var(--si-sys-color-text-secondary);--ix-chip-outline--background:var(--si-sys-color-background-accent-secondary);--ix-chip-outline--background--active:var(--si-sys-color-background-selected);--ix-chip-outline--background--hover:var(--si-sys-color-background-hover);--ix-chip-outline--color:var(--si-sys-color-text-primary);--ix-chip-primary--background:var(--si-sys-color-background-accent);--ix-chip-primary--background--active:var(--si-sys-color-background-accent-active);--ix-chip-primary--background--hover:var(--si-sys-color-background-accent-hover);--ix-chip-primary--color:var(--si-sys-color-text-on-accent);--ix-chip-primary--color--active:var(--si-sys-color-text-on-accent);--ix-chip-primary--color--hover:var(--si-sys-color-text-on-accent);--ix-chip-primary-outline--background:var(--si-sys-color-background-accent-secondary);--ix-chip-primary-outline--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-chip-primary-outline--background--display:var(--si-sys-color-background-accent-secondary);--ix-chip-primary-outline--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-chip-primary-outline--border-color:var(--si-sys-color-border-accent);--ix-chip-primary-outline--border-color--active:var(--si-sys-color-border-accent-active);--ix-chip-primary-outline--border-color--display:var(--si-sys-color-border-accent);--ix-chip-primary-outline--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-chip-primary-outline--color:var(--si-sys-color-border-accent);--ix-chip-primary-outline--color--active:var(--si-sys-color-border-accent-active);--ix-chip-primary-outline--color--display:var(--si-sys-color-text-primary);--ix-chip-primary-outline--color--hover:var(--si-sys-color-border-accent-hover);--ix-chip-container--outline-color--focus:#199fff;--ix-chip-container--background-color--hover:rgba(0, 0, 0, 0.1);--ix-chip-container--background-color--active:rgba(0, 0, 0, 0.2)}:host{--ix-chip-attachment--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-chip--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-chip--padding-inline:var(--si-sys-sizing-spacing-x-50);--ix-chip-container--padding:var(--si-sys-sizing-spacing-y-40);--ix-chip-container--height:var(--si-sys-sizing-size-80);--ix-chip-container--max-height:var(--si-sys-sizing-size-80);--ix-chip-with-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-chip-close-button-container--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-chip-inactive-outline--padding-right:var(--si-sys-sizing-spacing-x-20);--ix-chip--close-size:var(--si-sys-sizing-size-70);--ix-chip--close-inset:var(--si-sys-sizing-spacing-x-20);--ix-chip--height:var(--si-sys-sizing-size-80);--ix-chip--max-height:var(--si-sys-sizing-size-80);--ix-chip-wrap--min-height:var(--si-sys-sizing-size-80);--ix-chip-wrap--max-height:var(--si-sys-sizing-size-80);--ix-chip-main--padding-block:var(--si-sys-sizing-spacing-y-40);--ix-chip-main-outline--padding-right:var(--si-sys-sizing-spacing-x-30);--ix-chip--border-radius:var(--si-sys-sizing-border-radius-full);--ix-chip--border-width--focus:var(--si-sys-sizing-border-width-default);--ix-chip--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{--ix-pill-outline--background:var(--si-sys-color-background-accent-secondary)}:host{--ix-pill--height:var(--si-sys-sizing-size-60);--ix-pill--max-height:var(--si-sys-sizing-size-60);--ix-pill--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-pill-outline-icon--padding-left:calc(     var(--si-sys-sizing-spacing-x-40) - var(--si-sys-sizing-border-width-default)   );--ix-pill-outline-icon--padding-right:calc(     var(--si-sys-sizing-spacing-x-40) - var(--si-sys-sizing-border-width-default)   );--ix-pill-solid-icon--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-pill-solid-icon--padding-right:var(--si-sys-sizing-spacing-x-40);--ix-pill-with-gap--gap:var(--si-sys-sizing-spacing-x-20)}:host{display:inline-block;position:relative;height:var(--ix-pill--height);max-height:var(--ix-pill--max-height)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}.container{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:center;border-radius:var(--ix-chip--border-radius);padding:var(--ix-chip-container--padding);vertical-align:top;height:var(--ix-chip-container--height);max-height:var(--ix-chip-container--max-height);cursor:default}.container .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.container .with-icon{margin-right:var(--ix-chip-with-icon--margin-right)}.container .close-button-container{display:inline-flex;margin-left:auto;padding-left:var(--ix-chip-close-button-container--padding-left)}.container .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container.centerContent .content-wrapper{justify-content:center;text-align:center}.container.outline{padding-left:calc(var(--ix-pill--padding-inline) - var(--ix-chip--border-width--focus))}.container.outline.icon.alarm .with-icon{color:var(--ix-chip-alarm--color)}.container.outline.icon.critical .with-icon{color:var(--ix-chip-critical--color)}.container.outline.icon.warning .with-icon{color:var(--ix-chip-warning-icon--color)}.container.outline.icon.info .with-icon{color:var(--ix-chip-info--color)}.container.outline.icon.neutral .with-icon{color:var(--ix-chip-neutral--color)}.container.outline.icon.success .with-icon{color:var(--ix-chip-success--color)}.container.outline.closable:not(.inactive){padding-right:calc(var(--ix-chip-inactive-outline--padding-right) - var(--ix-chip--border-width--focus))}.container.outline.closable.inactive,.container.outline:not(.closable){padding-right:calc(var(--ix-pill--padding-inline) - var(--ix-chip--border-width--focus))}.container:not(.outline){padding-left:var(--ix-pill--padding-inline)}.container:not(.outline).closable:not(.inactive){padding-right:var(--ix-chip-inactive-outline--padding-right)}.container:not(.outline).closable.inactive,.container:not(.outline):not(.closable){padding-right:var(--ix-pill--padding-inline)}.container.primary{background-color:var(--ix-chip-primary--background);color:var(--ix-chip-primary--color)}.container.primary .close-button{color:var(--ix-chip-primary--color);--ix-icon-button-color:var(--ix-chip-primary--color);pointer-events:auto}.container.primary.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-primary-outline--background);border:solid var(--ix-chip--border-width--focus) var(--ix-chip-primary-outline--border-color)}.container.primary.outline .close-button{color:var(--ix-chip-outline--color);--ix-icon-button-color:var(--ix-chip-outline--color)}.container.primary.outline .with-icon{color:var(--ix-chip-primary-icon--color)}.container.outline{border-width:var(--ix-chip--border-width--focus);border-style:solid}.container.alarm{color:var(--ix-chip-alarm--color--contrast)}.container.alarm:not(.outline){background-color:var(--ix-chip-alarm--background)}.container.alarm:not(.outline) .close-button{color:var(--ix-chip-alarm--color--contrast);--ix-icon-button-color:var(--ix-chip-alarm--color--contrast)}.container.alarm.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-alarm--border-color)}.container.critical{color:var(--ix-chip-critical--color--contrast)}.container.critical:not(.outline){background-color:var(--ix-chip-critical--background)}.container.critical:not(.outline) .close-button{color:var(--ix-chip-critical--color--contrast);--ix-icon-button-color:var(--ix-chip-critical--color--contrast)}.container.critical.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-critical--border-color)}.container.warning{color:var(--ix-chip-warning--color--contrast)}.container.warning:not(.outline){background-color:var(--ix-chip-warning--background)}.container.warning:not(.outline) .close-button{color:var(--ix-chip-warning--color--contrast);--ix-icon-button-color:var(--ix-chip-warning--color--contrast)}.container.warning.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-warning--border-color)}.container.info{color:var(--ix-chip-info--color--contrast)}.container.info:not(.outline){background-color:var(--ix-chip-info--background)}.container.info:not(.outline) .close-button{color:var(--ix-chip-info--color--contrast);--ix-icon-button-color:var(--ix-chip-info--color--contrast)}.container.info.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-info--border-color)}.container.neutral{color:var(--ix-chip-neutral--color--contrast)}.container.neutral:not(.outline){background-color:var(--ix-chip-neutral--background)}.container.neutral:not(.outline) .close-button{color:var(--ix-chip-neutral--color--contrast);--ix-icon-button-color:var(--ix-chip-neutral--color--contrast)}.container.neutral.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-neutral--border-color)}.container.success{color:var(--ix-chip-success--color--contrast)}.container.success:not(.outline){background-color:var(--ix-chip-success--background)}.container.success:not(.outline) .close-button{color:var(--ix-chip-success--color--contrast);--ix-icon-button-color:var(--ix-chip-success--color--contrast)}.container.success.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-success--border-color)}:host .container{height:100%;justify-content:center}:host .container .with-icon{margin-right:0}:host .container.outline{background-color:var(--ix-pill-outline--background)}:host .container.outline.icon{padding-left:var(--ix-pill-outline-icon--padding-left);padding-right:var(--ix-pill-outline-icon--padding-right)}:host .container:not(.outline).icon{padding-left:var(--ix-pill-solid-icon--padding-left);padding-right:var(--ix-pill-solid-icon--padding-right)}:host .with-gap{gap:var(--ix-pill-with-gap--gap)}:host(.align-left) .container{justify-content:flex-start}`;
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
    return h(Host, { key: "698bd1a1222b6138f0a487680178b7b3ed86d2ac", style: this.variant === "custom" ? {
      "--ix-icon-button-color": this.pillColor
    } : {}, class: {
      "align-left": this.alignLeft
    }, role: hostRole }, h("div", { key: "5dff963f83f7209f68bc60f5ab38c72866518711", ref: this.containerElementRef, style: { ...customStyle }, class: {
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
    } }, this.icon && h("ix-icon", { key: "9122c276604af50eeab14e7e5269425c8009b9e2", class: {
      "with-icon": true
    }, name: this.icon, size: "16", "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(iconIsDecorative) }), h("span", { key: "8a612de4febb1585a19703c6ae4ab5b8a48759c5", class: "slot-container" }, h("ix-typography", { key: "7ad6cf2374e0b0ec30d3cdaf57a07788bb0769f9", format: "body" }, h("slot", { key: "90629ddd80072c9211bcf27e27959b27577e6dcf", onSlotchange: () => this.checkIfContentAvailable() })))), this.getTooltip());
  }
};
Pill.style = pillCss();
const tabItemCss = () => `@charset "UTF-8";:host{--ix-tab-item-pill--background:var(--si-sys-color-background-0);--ix-tab-item--outline-color--focus:var(--si-sys-color-effects-focus);--ix-tab-item-pill-outline--color:var(--si-sys-color-text-primary);--ix-tab-item-animated-circle--background:var(--si-sys-color-background-1);--ix-tab-item-animated-circle--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-tab-item-animated-circle--background--disabled:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-tab-item-animated-circle--background--selected:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--border-color:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--border-color--disabled:rgba(0, 0, 0, 0);--ix-tab-item-animated-circle--border-color--selected:var(--si-sys-color-border-accent-hover);--ix-tab-item-animated-icon--color:var(--si-sys-color-text-primary);--ix-tab-item-animated-icon--color--selected:var(--si-sys-color-text-accent-hover);--ix-tab-item--background:rgba(0, 0, 0, 0);--ix-tab-item--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-tab-item--background--disabled:rgba(0, 0, 0, 0);--ix-tab-item--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-tab-item--background--selected:rgba(0, 0, 0, 0);--ix-tab-item--color:var(--si-sys-color-text-primary);--ix-tab-item--color--active:var(--si-sys-color-text-primary);--ix-tab-item--color--disabled:var(--si-sys-color-text-disabled);--ix-tab-item--color--hover:var(--si-sys-color-text-primary);--ix-tab-item--color--selected:var(--si-sys-color-text-accent-hover);--ix-tab-item-indicator--background--disabled:var(--si-sys-color-border-3);--ix-tab-item-indicator--background--selected:var(--si-sys-color-background-accent-hover);--ix-tab-item-pill--border-color:var(--si-sys-color-border-3);--ix-tab-item-pill--border-color--disabled:var(--si-sys-color-border-3);--ix-tab-item-pill--border-color--selected:var(--si-sys-color-border-accent-hover)}:host{--ix-tab-item--font:var(--si-sys-typography-h5);--ix-tab-item-pill--font:var(--si-sys-typography-body-sm);--ix-tab-item--size-size:var(--si-sys-sizing-size-90);--ix-tab-item--min-height:var(--si-sys-sizing-size-90);--ix-tab-item--max-height:var(--si-sys-sizing-size-90);--ix-tab-item--padding:calc(var(--si-sys-sizing-spacing-y-10) / 2) var(--si-sys-sizing-spacing-x-80);--ix-tab-item--gap:var(--si-sys-sizing-spacing-x-40);--ix-tab-item-circle--height:var(--si-sys-sizing-size-100);--ix-tab-item-circle--width:var(--si-sys-sizing-size-100);--ix-tab-item-circle--height--circle:calc(     var(--si-sys-sizing-size-110) + var(--si-sys-sizing-spacing-y-40)   );--ix-tab-item-circle--min-height:calc(     var(--si-sys-sizing-size-110) + var(--si-sys-sizing-spacing-y-40)   );--ix-tab-item-circle--max-height:calc(     var(--si-sys-sizing-size-110) + var(--si-sys-sizing-spacing-y-40)   );--ix-tab-item-icon-only--padding:var(--si-sys-sizing-spacing-y-60);--ix-tab-item-small-tab--height:var(--si-sys-sizing-size-80);--ix-tab-item-small-tab--min-height:var(--si-sys-sizing-size-80);--ix-tab-item-small-tab--max-height:var(--si-sys-sizing-size-80);--ix-tab-item-small-tab--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-tab-item-icon--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-20);--ix-tab-item-circle--border-width:var(--si-sys-sizing-border-width-selected);--ix-tab-item-counter--height:16px;--ix-tab-item-counter--border-width:var(--si-sys-sizing-border-width-default);--ix-tab-item-counter--border-radius:var(--si-sys-sizing-border-radius-full);--ix-tab-item-counter--bottom:var(--si-sys-sizing-spacing-y-30);--ix-tab-item-counter--padding-left:var(--si-sys-sizing-spacing-x-20);--ix-tab-item-counter--padding-right:var(--si-sys-sizing-spacing-x-20);--ix-tab-item-indicator--height:var(--si-sys-sizing-border-width-selected);--ix-tab-item-circle--outline-offset:calc(     calc(var(--si-sys-sizing-focus-ring-offset) / 2) * -1   );--ix-tab-item--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-tab-item-circle--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset)}:host{position:relative;display:flex;align-items:center;justify-content:center;font:var(--ix-tab-item--font);background-color:var(--ix-tab-item--background);color:var(--ix-tab-item--color);touch-action:none;height:var(--ix-tab-item--size-size);min-height:var(--ix-tab-item--min-height);max-height:var(--ix-tab-item--max-height);padding:var(--ix-tab-item--padding);gap:var(--ix-tab-item--gap)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .text span,:host .text span::before{pointer-events:none}:host .text{vertical-align:middle}:host slot{white-space:nowrap}:host .circle{display:flex;justify-content:center;align-items:center;height:var(--ix-tab-item-circle--height);width:var(--ix-tab-item-circle--width);background-color:var(--ix-tab-item-animated-circle--background);border-radius:50%;border:var(--ix-tab-item-circle--border-width) solid var(--ix-tab-item-animated-circle--border-color);color:var(--ix-tab-item-animated-icon--color);cursor:pointer}:host .circle:hover{background-color:var(--ix-tab-item-animated-circle--background--hover)}:host .circle:active{background-color:var(--ix-tab-item-animated-circle--background--active)}:host .counter{position:absolute;z-index:1;height:var(--ix-tab-item-counter--height);width:auto;background-color:var(--ix-tab-item-pill--background);border:var(--ix-tab-item-counter--border-width) solid var(--ix-tab-item-pill--border-color);border-radius:var(--ix-tab-item-counter--border-radius);bottom:var(--ix-tab-item-counter--bottom);display:flex;justify-content:center;align-items:center;padding-left:var(--ix-tab-item-counter--padding-left);padding-right:var(--ix-tab-item-counter--padding-right);font:var(--ix-tab-item-pill--font);color:var(--ix-tab-item-pill-outline--color);cursor:pointer}:host .counter.selected{border-color:var(--ix-tab-item-pill--border-color--selected)}:host .counter.disabled{border-color:var(--ix-tab-item-pill--border-color--disabled);cursor:default}:host .hidden{display:none}:host(:not(.disabled)){cursor:pointer}:host(.circle){height:var(--ix-tab-item-circle--height--circle);min-height:var(--ix-tab-item-circle--min-height);max-height:var(--ix-tab-item-circle--max-height)}:host(.stretched){flex-basis:100%;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.stretched) div{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected:not(.disabled)){background-color:var(--ix-tab-item--background--selected);color:var(--ix-tab-item--color--selected)}:host(.selected:not(.disabled))::after{content:"";position:absolute;left:0;width:100%;height:var(--ix-tab-item-indicator--height);background-color:var(--ix-tab-item-indicator--background--selected)}:host(.selected:not(.disabled)) .circle{background-color:var(--ix-tab-item-animated-circle--background--selected);color:var(--ix-tab-item-animated-icon--color--selected);border-color:var(--ix-tab-item-animated-circle--border-color--selected)}:host(.selected:not(.disabled)) .circle:hover{background-color:var(--ix-tab-item-animated-circle--background--selected)}:host(.selected.bottom:not(.disabled)){background-color:var(--ix-tab-item--background--selected);color:var(--ix-tab-item--color--selected)}:host(.selected.bottom:not(.disabled))::after{bottom:0px}:host(.selected.top:not(.disabled))::after{top:0px}:host(:hover:not(.circle):not(.disabled)){background-color:var(--ix-tab-item--background--hover);color:var(--ix-tab-item--color--hover)}:host(:active:not(.circle):not(.disabled)){background-color:var(--ix-tab-item--background--active);color:var(--ix-tab-item--color--active)}:host(.disabled){cursor:default;color:var(--ix-tab-item--color--disabled);background-color:var(--ix-tab-item--background--disabled);pointer-events:none}:host(.disabled)::after{background-color:var(--ix-tab-item-indicator--background--disabled)}:host(.disabled) .circle{background-color:var(--ix-tab-item-animated-circle--background--disabled);border-color:var(--ix-tab-item-animated-circle--border-color--disabled);cursor:default}:host(.icon-only){display:flex;justify-content:center;align-items:center;padding:var(--ix-tab-item-icon-only--padding)}:host(.small-tab){height:var(--ix-tab-item-small-tab--height);min-height:var(--ix-tab-item-small-tab--min-height);max-height:var(--ix-tab-item-small-tab--max-height);padding:var(--ix-tab-item-small-tab--padding)}:host(.small-tab.icon){padding:var(--ix-tab-item-icon--padding)}:host(:not(.circle):focus-visible){outline-offset:var(--ix-tab-item-circle--outline-offset);outline:var(--ix-tab-item--outline-width--focus) solid var(--ix-tab-item--outline-color--focus)}:host(.circle:focus-visible){outline:none}:host(.circle:focus-visible) .circle{outline-offset:var(--ix-tab-item-circle--outline-offset--focus);outline:var(--ix-tab-item--outline-width--focus) solid var(--ix-tab-item--outline-color--focus)}:host(.bottom)::before{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background);width:100%;height:var(--ix-tabs-indicator--height);left:0;bottom:0}:host(.bottom)::after{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--ix-tabs-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host(.bottom)::before,:host(.bottom)::after{top:auto;bottom:0}:host(.top)::before{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background);width:100%;height:var(--ix-tabs-indicator--height);left:0;bottom:0}:host(.top)::after{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--ix-tabs-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host(.top)::before,:host(.top)::after{top:0;bottom:auto}`;
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
    return h(Host, { key: "8eab02e2dbc77b6fcba8f9cc940a86a3e3ff01af", id: this.getHostElementId(), role: "tab", "aria-selected": a11yBoolean(this.selected), tabIndex: this.selected && !this.disabled ? 0 : -1, class: {
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
    } }, variant === "rounded" && h("div", { key: "21ec643ce7e2583d2c0f203674f641ad4b17a641", class: {
      circle: true
    } }, this.icon && h("ix-icon", { key: "b8f4e180b82236e97485494d61b80eb7e1fb51a8", name: this.icon, size: "32" }), h("slot", { key: "85bf6aaf329f147ef24efe248f56a4500e26be78" })), this.icon && variant === "icon-only" && h("ix-icon", { key: "4745e7d98bda15a70eac760d8e9d4d8c4fbce093", name: this.icon, class: "tab-icon" }), this.icon && variant === "normal" && h("ix-icon", { key: "c71fa6b1e293afd20f0eaf78d8ce3b709cd99c6a", name: this.icon, class: "tab-icon" }), variant === "normal" && h("div", { key: "ea3efe4f37ed52f700168d345605678554c5eb11", class: {
      text: !!this.label,
      selected: this.selected,
      disabled: this.disabled
    } }, this.label, h("slot", { key: "05c14fe873dbff0cf2c3b1d2eb280525a138ebc5" })), variant === "rounded" && this.counter !== void 0 && h("div", { key: "f6fad3b14dc084d13049bc28f32bc1370b134c1b", class: {
      counter: true,
      selected: this.selected,
      disabled: this.disabled
    } }, this.counter), this.counter && variant !== "rounded" && h("ix-pill", { key: "d594057038c323029a26b23a0025bb09c3094779", variant: "primary", outline: true, class: "tab-counter" }, this.counter), this.closable && variant !== "rounded" && h("ix-icon-button", { key: "e204061659cc6251307b3173f022600d06e48318", "aria-label": this.ariaLabelCloseButton, class: "close-tab", size: "12", variant: "subtle-tertiary", icon: iconClose, onClick: (event) => {
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
const tabSetCss = () => `@charset "UTF-8";:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
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
    return h(Host, { key: "21a73b0f2f082f2b92e626c9181a425e211c8d3e", onTabChange: () => this.checkPanelsVisibility() }, h("slot", { key: "fc18d6e6cc340996bd90275692986d3293552960" }));
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
const tabsCss = () => `@charset "UTF-8";:host{--ix-tabs--outline-color--focus:var(--si-sys-color-effects-focus);--ix-tabs-indicator--background:var(--si-sys-color-border-3);--ix-tabs-indicator--background--selected:var(--si-sys-color-background-accent-hover)}:host{--ix-tabs-overflow-shadow--fade-width:calc(     var(--ix-tabs--padding-right) + var(--si-sys-sizing-border-width-default)   );--ix-tabs-indicator--height:var(--si-sys-sizing-border-width-default);--ix-tabs--padding-right:calc(     var(--si-sys-sizing-spacing-x-100) + var(--si-sys-sizing-spacing-x-20)   );--ix-tabs-context-menu--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-tabs--outline-offset:calc(     calc(var(--si-sys-sizing-focus-ring-offset) / 2) * -1   );--ix-tabs--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{width:auto;display:flex;align-items:center;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tabs-container{display:flex;flex-direction:row;position:relative;width:100%;justify-content:space-between;align-items:center}:host .tabs-container.top::before{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background);width:100%;height:var(--ix-tabs-indicator--height);left:0;bottom:0}:host .tabs-container.top::after{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--ix-tabs-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host .tabs-container.top::before,:host .tabs-container.top::after{top:0;bottom:auto}:host .tabs-container.bottom::before{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background);width:100%;height:var(--ix-tabs-indicator--height);left:0;bottom:0}:host .tabs-container.bottom::after{content:"";position:absolute;background-color:var(--ix-tabs-indicator--background--selected);width:var(--ix-tab-active-indicator-width);height:var(--ix-tabs-indicator--height);left:0;bottom:0;transform:translateX(var(--ix-tab-active-indicator-offset))}:host .tabs-container.bottom::before,:host .tabs-container.bottom::after{top:auto;bottom:0}:host .tabs{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;overflow:auto;scroll-behavior:smooth;width:100%;touch-action:pan-y;padding-right:var(--ix-tabs--padding-right);scrollbar-width:none}:host .tabs::-webkit-scrollbar{display:none}:host .tabs.tabs-stretched{padding-right:0px}:host .tabs:focus-visible{outline-offset:var(--ix-tabs--outline-offset);outline:var(--ix-tabs--outline-width--focus) solid var(--ix-tabs--outline-color--focus)}:host .tabs-context-menu{margin-right:var(--ix-tabs-context-menu--margin-right)}:host .overflow-shadow-container{display:block;position:relative;height:100%;width:100%;pointer-events:all;overflow:auto}:host .overflow-shadow{-webkit-mask-image:linear-gradient(90deg, black calc(100% - var(--ix-tabs-overflow-shadow--fade-width)), transparent 100%);mask-image:linear-gradient(90deg, black calc(100% - var(--ix-tabs-overflow-shadow--fade-width)), transparent 100%)}`;
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
      if (this.activeTabKey !== void 0) {
        this.onActiveTabChange(this.activeTabKey, this.tabs.find((tab) => tab.selected)?.tabKey);
      }
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
    const tabs = this.tabs;
    const activeTab = tabs.find((tab) => tab.selected);
    if (activeTab?.tabKey === tabKey) {
      return;
    }
    if (tabKey !== void 0 && !tabs.some((tab) => tab.tabKey === tabKey && !tab.disabled)) {
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
    return h(Host, { key: "5ff835e781f4c341c615c52feeabdce8d24692f3", onTabClick: (event) => this.onTabClick(event), class: {
      small: this.small
    } }, h("div", { key: "44d39f28ba1d4e9f7325184d51188e73871b4e08", ref: this.tabsContainerRef, class: {
      "tabs-container": true,
      top: this.placement === "top",
      bottom: this.placement === "bottom"
    } }, h("div", { key: "806115fc72dbb5d32c269edd111501a761c68949", class: {
      "overflow-shadow-container": true,
      "overflow-shadow": this.isTabsOverflow
    } }, h("div", { key: "e80ab1be1a7508eb254f63e68b692c16695c99bb", role: "tablist", ...this.inheritAriaAttributes, ref: this.tabsRef, class: {
      tabs: true,
      "tabs-stretched": this.layout === "stretched"
    }, tabIndex: this.isTabsOverflow ? 0 : -1, onKeyDown: (event) => this.onTabsNavigate(event) }, h("slot", { key: "37a0c05492186683da4a81228f4c9112d137883a" }))), this.isTabsOverflow && this.layout !== "stretched" && h("ix-dropdown-button", { key: "9117ab21d71f6667aa640ff4df39d4ea4cba779f", ariaLabel: this.ariaLabelMoreTabs, icon: iconMoreMenu, class: {
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
