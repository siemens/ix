import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CRrZCTD3.js";
import { t as iconChevronUpSmall, h as iconChevronDownSmall } from "./index-DgUGsIlh-CLxQRaVd.js";
import { b as a11yHostAttributes, a as a11yBoolean, f as forceTabIndex } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const dropdownButtonCss = () => `:host{display:inline-block;position:relative;height:2rem;width:auto;--ix-dropdown-button-border-radius-left:var(--theme-btn--border-radius);--ix-dropdown-button-border-radius-right:var(--theme-btn--border-radius);border-top-left-radius:var(--ix-dropdown-button-border-radius-left);border-bottom-left-radius:var(--ix-dropdown-button-border-radius-left);border-top-right-radius:var(--ix-dropdown-button-border-radius-right);border-bottom-right-radius:var(--ix-dropdown-button-border-radius-right)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host ix-button,:host ix-icon-button{--ix-button-border-radius-left:var(     --ix-dropdown-button-border-radius-left   );--ix-button-border-radius-right:var(     --ix-dropdown-button-border-radius-right   )}:host .dropdown-button{display:block;position:relative;width:100%;height:100%}:host .dropdown-button>ix-button{width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:0.25rem}:host .triangle{position:absolute;margin-inline-start:1.5625rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--theme-btn-primary--color)}:host .triangle.primary{color:var(--theme-btn-primary--color)}:host .triangle.secondary{color:var(--theme-btn-secondary--color)}:host .triangle.tertiary{color:var(--theme-btn-tertiary--color)}:host .triangle.primary.disabled{color:var(--theme-btn-primary--color--disabled)}:host .triangle.secondary.disabled{color:var(--theme-btn-secondary--color--disabled)}:host .triangle.tertiary.disabled{color:var(--theme-btn-tertiary--color--disabled)}:host .triangle.subtle-primary{color:var(--theme-btn-subtle-primary--color)}:host .triangle.subtle-secondary{color:var(--theme-btn-subtle-secondary--color)}:host .triangle.subtle-tertiary{color:var(--theme-btn-subtle-tertiary--color)}:host .triangle.subtle-primary.disabled{color:var(--theme-btn-subtle-primary--color--disabled)}:host .triangle.subtle-secondary.disabled{color:var(--theme-btn-subtle-secondary--color--disabled)}:host .triangle.subtle-tertiary.disabled{color:var(--theme-btn-subtle-tertiary--color--disabled)}:host .triangle.danger-primary{color:var(--theme-btn-danger-primary--color)}:host .triangle.danger-secondary{color:var(--theme-btn-danger-secondary--color)}:host .triangle.danger-tertiary{color:var(--theme-btn-danger-tertiary--color)}:host .triangle.danger-primary.disabled{color:var(--theme-btn-danger-primary--color--disabled)}:host .triangle.danger-secondary.disabled{color:var(--theme-btn-danger-secondary--color--disabled)}:host .triangle.danger-tertiary.disabled{color:var(--theme-btn-danger-tertiary--color--disabled)}:host .content{display:flex;align-items:center}:host .remove-button-min-width{min-width:0px}:host(.host-context-date-picker) .internal-button,:host(.host-context-breadcrumb) .internal-button{min-width:0px;padding:0}:host(.host-context-date-picker) ix-dropdown{max-height:15.625rem;overflow-y:scroll}:host(:focus-visible){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host([aria-expanded=true]:focus-visible){outline:none}:host(.disabled){pointer-events:none}`;
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
    return h(Host, { key: "cf1734668373b0559015b9566dec0d78724055c2", class: {
      disabled: this.disabled,
      "host-context-breadcrumb": !!this.hostContext?.breadcrumb,
      "host-context-date-picker": !!this.hostContext?.datePicker,
      "host-context-tabs": !!this.hostContext?.tabs
    }, ref: this.dropdownAnchor, tabIndex: this.disabled ? -1 : 0, ...ariaAttributes }, h("div", { key: "6436280ebbab7366677d5608353d3863d5050bf7", class: "dropdown-button" }, this.label || this.label === null ? h("ix-button", { ...commonProperties, class: "internal-button", alignment: "start", ref: (ref) => forceTabIndex(ref, -1), ariaLabelButton: this.ariaLabelDropdownButton ?? (this.dropdownShow ? "Close dropdown" : "Open dropdown") }, h("div", { class: "content" }, this.icon ? h("ix-icon", { name: this.icon, size: "24", class: "dropdown-icon" }) : null, h("div", { class: "button-label" }, this.label), h("slot", { name: "button-label" }), !hideChevron && h("ix-icon", { "aria-hidden": "true", name: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, size: "24" }))) : h("div", null, h("ix-icon-button", { ...commonProperties, icon: this.icon, ref: (ref) => forceTabIndex(ref, -1), "aria-label": this.ariaLabelDropdownButton ?? (this.dropdownShow ? "Close dropdown" : "Open dropdown") }), !hideChevron && this.getTriangle())), h("ix-dropdown", { key: "08eaf44c97fa26a20fa3589a4033b11fcae8bbfb", role: "menu", ref: this.dropdownRef, id: `dropdown-button-menu-${this.dropdownButtonId}`, "aria-labelledby": `dropdown-button-${this.dropdownButtonId}`, trigger: this.dropdownAnchor.waitForCurrent(), placement: this.placement, closeBehavior: this.closeBehavior, enableTopLayer: this.enableTopLayer, disableFocusTrap: true, focusCheckedItem: this.focusCheckedItem, onShowChanged: (event) => this.onDropdownShowChanged(event), onScroll: (event) => {
      const scrollEvent = new CustomEvent("scroll", {
        bubbles: event.bubbles,
        cancelable: event.cancelable,
        detail: event.detail
      });
      this.hostElement.dispatchEvent(scrollEvent);
    } }, h("slot", { key: "83d99fd78b27dda09f49ebb7ea7fe37ef096965a" })));
  }
};
DropdownButton.style = dropdownButtonCss();
export {
  DropdownButton as ix_dropdown_button
};
