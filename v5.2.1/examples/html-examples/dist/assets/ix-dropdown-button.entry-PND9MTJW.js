import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { G as iconChevronUpSmall, t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { c as a11yHostAttributes, a as a11yBoolean, f as forceTabIndex } from "./a11y-DD206pTM-BiwZPW5s.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const dropdownButtonCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-effects-focus);--ix-button--border-radius:var(--theme-small-border-radius);--ix-button--border-width:var(--theme-border-width-default);--ix-button--focus--outline-offset:var(--theme-focus-outline-offset);--ix-button-danger-primary--background:var(--si-sys-background-danger);--ix-button-danger-primary--background--active:var(--si-sys-background-danger-active);--ix-button-danger-primary--background--disabled:var(--si-sys-background-1);--ix-button-danger-primary--background--hover:var(--si-sys-background-danger-hover);--ix-button-danger-primary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-primary--color:var(--si-sys-text-on-danger);--ix-button-danger-primary--color--active:var(--si-sys-text-on-danger);--ix-button-danger-primary--color--disabled:var(--si-sys-text-disabled);--ix-button-danger-primary--color--hover:var(--si-sys-text-on-danger);--ix-button-danger-secondary--background:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--active:var(--si-sys-background-danger-active);--ix-button-danger-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--hover:var(--si-sys-background-danger-hover);--ix-button-danger-secondary--border-color:var(--si-sys-text-danger);--ix-button-danger-secondary--border-color--active:var(--si-sys-background-danger-active);--ix-button-danger-secondary--border-color--disabled:var(--si-sys-border-3);--ix-button-danger-secondary--border-color--hover:var(--si-sys-background-danger-hover);--ix-button-danger-secondary--color:var(--si-sys-text-danger);--ix-button-danger-secondary--color--active:var(--si-sys-text-on-danger);--ix-button-danger-secondary--color--disabled:var(--si-sys-text-disabled);--ix-button-danger-secondary--color--hover:var(--si-sys-text-on-danger);--ix-button-danger-tertiary--background:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--active:var(--si-sys-background-danger-active);--ix-button-danger-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--hover:var(--si-sys-background-danger-hover);--ix-button-danger-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--color:var(--si-sys-text-danger);--ix-button-danger-tertiary--color--active:var(--si-sys-text-on-danger);--ix-button-danger-tertiary--color--disabled:var(--si-sys-text-disabled);--ix-button-danger-tertiary--color--hover:var(--si-sys-text-on-danger);--ix-button-primary--background:var(--si-sys-background-accent);--ix-button-primary--background--active:var(--si-sys-background-accent-active);--ix-button-primary--background--disabled:var(--si-sys-background-1);--ix-button-primary--background--hover:var(--si-sys-background-accent-hover);--ix-button-primary--background--pressed:var(--si-sys-background-accent-hover);--ix-button-primary--background--pressed-active:var(--si-sys-background-accent-active);--ix-button-primary--background--pressed-hover:var(--si-sys-background-accent-hover);--ix-button-primary--border-color:rgba(0, 0, 0, 0);--ix-button-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover-active:rgba(0, 0, 0, 0);--ix-button-primary--color:var(--si-sys-text-on-accent);--ix-button-primary--color--active:var(--si-sys-text-on-accent);--ix-button-primary--color--disabled:var(--si-sys-text-disabled);--ix-button-primary--color--hover:var(--si-sys-text-on-accent);--ix-button-primary--color--pressed:var(--si-sys-text-on-accent);--ix-button-primary--color--pressed-active:var(--si-sys-text-on-accent);--ix-button-primary--color--pressed-hover:var(--si-sys-text-on-accent);--ix-button-secondary--background:var(--si-sys-background-accent-secondary);--ix-button-secondary--background--active:var(--si-sys-background-accent-secondary-active);--ix-button-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-secondary--background--hover:var(--si-sys-background-accent-secondary-hover);--ix-button-secondary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-secondary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-secondary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-secondary--border-color:var(--si-sys-border-accent);--ix-button-secondary--border-color--active:var(--si-sys-border-accent-active);--ix-button-secondary--border-color--disabled:var(--si-sys-border-3);--ix-button-secondary--border-color--hover:var(--si-sys-border-accent-hover);--ix-button-secondary--border-color--pressed:var(--si-sys-border-accent-hover);--ix-button-secondary--border-color--pressed-active:var(--si-sys-border-accent-active);--ix-button-secondary--border-color--pressed-hover:var(--si-sys-border-accent-hover);--ix-button-secondary--color:var(--si-sys-text-accent);--ix-button-secondary--color--active:var(--si-sys-text-accent-active);--ix-button-secondary--color--disabled:var(--si-sys-text-disabled);--ix-button-secondary--color--hover:var(--si-sys-text-accent-hover);--ix-button-secondary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-secondary--color--pressed-active:var(--si-sys-text-accent-active);--ix-button-secondary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-subtle-primary--background:var(--si-sys-background-2);--ix-button-subtle-primary--background--active:var(--si-sys-background-active);--ix-button-subtle-primary--background--disabled:var(--si-sys-background-1);--ix-button-subtle-primary--background--hover:var(--si-sys-background-hover);--ix-button-subtle-primary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-subtle-primary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--color:var(--si-sys-text-primary);--ix-button-subtle-primary--color--active:var(--si-sys-text-primary);--ix-button-subtle-primary--color--disabled:var(--si-sys-text-disabled);--ix-button-subtle-primary--color--hover:var(--si-sys-text-primary);--ix-button-subtle-primary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-subtle-primary--color--pressed-active:var(--si-sys-text-accent-hover);--ix-button-subtle-primary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-subtle-secondary--background:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--active:var(--si-sys-background-active);--ix-button-subtle-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--hover:var(--si-sys-background-hover);--ix-button-subtle-secondary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-subtle-secondary--border-color:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--active:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--disabled:var(--si-sys-border-3);--ix-button-subtle-secondary--border-color--hover:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--pressed:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--pressed-active:var(--si-sys-border-2);--ix-button-subtle-secondary--border-color--pressed-hover:var(--si-sys-border-2);--ix-button-subtle-secondary--color:var(--si-sys-text-primary);--ix-button-subtle-secondary--color--active:var(--si-sys-text-primary);--ix-button-subtle-secondary--color--disabled:var(--si-sys-text-disabled);--ix-button-subtle-secondary--color--hover:var(--si-sys-text-primary);--ix-button-subtle-secondary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-subtle-secondary--color--pressed-active:var(--si-sys-text-accent-hover);--ix-button-subtle-secondary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-subtle-tertiary--background:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--active:var(--si-sys-background-active);--ix-button-subtle-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--hover:var(--si-sys-background-hover);--ix-button-subtle-tertiary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-subtle-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--color:var(--si-sys-text-primary);--ix-button-subtle-tertiary--color--active:var(--si-sys-text-primary);--ix-button-subtle-tertiary--color--disabled:var(--si-sys-text-disabled);--ix-button-subtle-tertiary--color--hover:var(--si-sys-text-primary);--ix-button-subtle-tertiary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-active:var(--si-sys-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-hover:var(--si-sys-text-accent-hover);--ix-button-tertiary--background:rgba(0, 0, 0, 0);--ix-button-tertiary--background--active:var(--si-sys-background-accent-secondary-active);--ix-button-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--background--hover:var(--si-sys-background-accent-secondary-hover);--ix-button-tertiary--background--pressed:var(--si-sys-background-accent-secondary-active);--ix-button-tertiary--background--pressed-active:var(--si-sys-background-accent-secondary-active);--ix-button-tertiary--background--pressed-hover:var(--si-sys-background-accent-secondary-hover);--ix-button-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-tertiary--color:var(--si-sys-text-accent);--ix-button-tertiary--color--active:var(--si-sys-text-accent-active);--ix-button-tertiary--color--disabled:var(--si-sys-text-disabled);--ix-button-tertiary--color--hover:var(--si-sys-text-accent-hover);--ix-button-tertiary--color--pressed:var(--si-sys-text-accent-hover);--ix-button-tertiary--color--pressed-active:var(--si-sys-text-accent-active);--ix-button-tertiary--color--pressed-hover:var(--si-sys-text-accent-hover)}:host{--ix-dropdown-button-border-radius-left:var(--ix-button--border-radius);--ix-dropdown-button-border-radius-right:var(--ix-button--border-radius)}:host{display:inline-block;position:relative;height:2rem;width:auto;border-top-left-radius:var(--ix-dropdown-button-border-radius-left);border-bottom-left-radius:var(--ix-dropdown-button-border-radius-left);border-top-right-radius:var(--ix-dropdown-button-border-radius-right);border-bottom-right-radius:var(--ix-dropdown-button-border-radius-right)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host ix-button,:host ix-icon-button{--ix-button-border-radius-left:var(     --ix-dropdown-button-border-radius-left   );--ix-button-border-radius-right:var(     --ix-dropdown-button-border-radius-right   )}:host .dropdown-button{display:block;position:relative;width:100%;height:100%}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:0.25rem}:host .triangle{position:absolute;margin-inline-start:1.5625rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--ix-button-primary--color)}:host .triangle.primary{color:var(--ix-button-primary--color)}:host .triangle.secondary{color:var(--ix-button-secondary--color)}:host .triangle.tertiary{color:var(--ix-button-tertiary--color)}:host .triangle.primary.disabled{color:var(--ix-button-primary--color--disabled)}:host .triangle.secondary.disabled{color:var(--ix-button-secondary--color--disabled)}:host .triangle.tertiary.disabled{color:var(--ix-button-tertiary--color--disabled)}:host .triangle.subtle-primary{color:var(--ix-button-subtle-primary--color)}:host .triangle.subtle-secondary{color:var(--ix-button-subtle-secondary--color)}:host .triangle.subtle-tertiary{color:var(--ix-button-subtle-tertiary--color)}:host .triangle.subtle-primary.disabled{color:var(--ix-button-subtle-primary--color--disabled)}:host .triangle.subtle-secondary.disabled{color:var(--ix-button-subtle-secondary--color--disabled)}:host .triangle.subtle-tertiary.disabled{color:var(--ix-button-subtle-tertiary--color--disabled)}:host .triangle.danger-primary{color:var(--ix-button-danger-primary--color)}:host .triangle.danger-secondary{color:var(--ix-button-danger-secondary--color)}:host .triangle.danger-tertiary{color:var(--ix-button-danger-tertiary--color)}:host .triangle.danger-primary.disabled{color:var(--ix-button-danger-primary--color--disabled)}:host .triangle.danger-secondary.disabled{color:var(--ix-button-danger-secondary--color--disabled)}:host .triangle.danger-tertiary.disabled{color:var(--ix-button-danger-tertiary--color--disabled)}:host .content{display:flex;align-items:center}:host .remove-button-min-width{min-width:0px}:host(.host-context-date-picker) .internal-button,:host(.host-context-breadcrumb) .internal-button{min-width:0px;padding:0}:host(.host-context-date-picker) ix-dropdown{max-height:15.625rem;overflow-y:scroll}:host(:focus-visible){outline:1px solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--focus--outline-offset)}:host([aria-expanded=true]){--ix-button-primary--color:var(     --ix-button-primary--color--active   );--ix-button-secondary--color:var(     --ix-button-secondary--color--active   );--ix-button-tertiary--color:var(     --ix-button-tertiary--color--active   );--ix-button-subtle-primary--color:var(     --ix-button-subtle-primary--color--active   );--ix-button-subtle-secondary--color:var(     --ix-button-subtle-secondary--color--active   );--ix-button-subtle-tertiary--color:var(     --ix-button-subtle-tertiary--color--active   );--ix-button-danger-primary--color:var(     --ix-button-danger-primary--color--active   );--ix-button-danger-secondary--color:var(     --ix-button-danger-secondary--color--active   );--ix-button-danger-tertiary--color:var(     --ix-button-danger-tertiary--color--active   )}:host([aria-expanded=true]:focus-visible){outline:none}:host(.disabled){pointer-events:none}`;
const DropdownButton = class extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.showChange = createEvent(this, "showChange", 7);
    this.showChanged = createEvent(this, "showChanged", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Button variant
   */
  variant = "primary";
  /**
   * Disable button
   */
  disabled = false;
  /**
   * Set label
   */
  label;
  /**
   * Button icon
   */
  icon;
  /**
   * Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
   */
  closeBehavior = "both";
  /**
   * Placement of the dropdown
   */
  placement;
  /**
   * ARIA label for the dropdown button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelDropdownButton;
  /**
   * If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
   *
   * @since 5.0.0
   */
  focusCheckedItem = false;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Suppress the use of the aria-activedescendant attribute and related focus proxy functionality.
   *
   * @internal
   * */
  suppressAriaActiveDescendant = false;
  /**
   * Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
   */
  showChange;
  /**
   * Fire event after visibility of dropdown has changed
   */
  showChanged;
  dropdownShow = false;
  inheritAriaAttributes = {};
  dropdownButtonId = this.getHostElementId();
  dropdownAnchor = makeRef();
  dropdownRef = makeRef();
  hostContext;
  getTriangle() {
    return h("div", { class: {
      triangle: true,
      [this.variant]: true,
      hide: !!this.label,
      disabled: this.disabled
    } });
  }
  onDropdownShowChanged = (event) => {
    if (this.disabled && event.detail) {
      return;
    }
    this.dropdownShow = event.detail;
  };
  componentDidLoad() {
    this.inheritAriaAttributes = a11yHostAttributes(this.hostElement, [
      "aria-label",
      "aria-activedescendant",
      "aria-haspopup",
      "aria-controls",
      "aria-disabled",
      "aria-expanded",
      "aria-current",
      "role"
    ]);
  }
  componentWillRender() {
    this.hostContext = {
      breadcrumb: !!closestPassShadow(this.hostElement, "ix-breadcrumb"),
      datePicker: !!closestPassShadow(this.hostElement, "ix-date-picker"),
      splitButton: !!closestPassShadow(this.hostElement, "ix-split-button"),
      tabs: !!closestPassShadow(this.hostElement, "ix-tabs")
    };
  }
  getControllingAriaElement() {
    return this.hostElement;
  }
  isAriaActiveDescendantActive() {
    return !this.suppressAriaActiveDescendant && this.dropdownShow;
  }
  getAriaActiveDescendantProxyItemId() {
    return false;
  }
  /**@internal */
  async getDropdownReference() {
    return this.dropdownRef.waitForCurrent();
  }
  render() {
    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      "aria-haspopup": "true",
      "aria-disabled": a11yBoolean(this.disabled),
      "aria-expanded": a11yBoolean(this.dropdownShow),
      role: "button"
    };
    if (!this.inheritAriaAttributes["aria-controls"]) {
      ariaAttributes["aria-controls"] = `dropdown-button-menu-${this.dropdownButtonId}`;
    }
    const commonProperties = {
      id: `dropdown-button-${this.dropdownButtonId}`,
      disabled: this.disabled,
      variant: this.variant
    };
    const hideChevron = this.hostContext?.breadcrumb || this.hostContext?.datePicker || this.hostContext?.splitButton || this.hostContext?.tabs;
    return h(Host, { key: "e24d9aa46d586b8a1db231cc7abcee1b35ce7bae", class: {
      disabled: this.disabled,
      "host-context-breadcrumb": !!this.hostContext?.breadcrumb,
      "host-context-date-picker": !!this.hostContext?.datePicker,
      "host-context-tabs": !!this.hostContext?.tabs
    }, ref: this.dropdownAnchor, tabIndex: this.disabled ? -1 : 0, ...ariaAttributes }, h("div", { key: "864ddb3e8d0e4145551c75f1f6bd55a47b956e7c", class: "dropdown-button" }, this.label || this.label === null ? h("ix-button", { ...commonProperties, class: {
      "internal-button": true,
      active: this.dropdownShow
    }, alignment: "start", ref: (ref) => forceTabIndex(ref, -1), ariaLabelButton: this.ariaLabelDropdownButton ?? (this.dropdownShow ? "Close dropdown" : "Open dropdown") }, h("div", { class: "content" }, this.icon ? h("ix-icon", { name: this.icon, size: "24", class: "dropdown-icon" }) : null, h("div", { class: "button-label" }, this.label), h("slot", { name: "button-label" }), !hideChevron && h("ix-icon", { "aria-hidden": "true", name: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, size: "24" }))) : h("div", null, h("ix-icon-button", { ...commonProperties, class: { active: this.dropdownShow }, icon: this.icon, ref: (ref) => forceTabIndex(ref, -1), "aria-label": this.ariaLabelDropdownButton ?? (this.dropdownShow ? "Close dropdown" : "Open dropdown") }), !hideChevron && this.getTriangle())), h("ix-dropdown", { key: "e39d7712fca19bdfc1e81a573698e594b701abe0", role: "menu", ref: this.dropdownRef, id: `dropdown-button-menu-${this.dropdownButtonId}`, "aria-labelledby": `dropdown-button-${this.dropdownButtonId}`, trigger: this.dropdownAnchor.waitForCurrent(), placement: this.placement, closeBehavior: this.closeBehavior, enableTopLayer: this.enableTopLayer, disableFocusTrap: true, focusCheckedItem: this.focusCheckedItem, onShowChanged: (event) => this.onDropdownShowChanged(event), onScroll: (event) => {
      const scrollEvent = new CustomEvent("scroll", {
        bubbles: event.bubbles,
        cancelable: event.cancelable,
        detail: event.detail
      });
      this.hostElement.dispatchEvent(scrollEvent);
    } }, h("slot", { key: "af0fab124742542138f8ea4beff409215536a0e5" })));
  }
};
DropdownButton.style = dropdownButtonCss();
export {
  DropdownButton as ix_dropdown_button
};
