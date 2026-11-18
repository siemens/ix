import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-CdodJUXO.js";
import { y as iconChevronUpSmall, l as iconChevronDownSmall } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { b as a11yHostAttributes, a as a11yBoolean, f as forceTabIndex } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-Crf0HAxu-86bOXquG.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { c as closestPassShadow } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const dropdownButtonCss = () => `@charset "UTF-8";:host{--ix-dropdown-button--border-radius-left:var(--si-sys-sizing-border-radius-xs);--ix-dropdown-button--border-radius-right:var(--si-sys-sizing-border-radius-xs);--ix-dropdown-button--height:var(--si-sys-sizing-size-80);--ix-dropdown-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-dropdown-button-dropdown-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-dropdown-button-dropdown-chevron--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-dropdown-button-host-context-date-picker--max-height:calc(var(--si-sys-sizing-size-140) * 2 + var(--si-sys-sizing-spacing-y-40) + var(--si-sys-sizing-spacing-y-10));--ix-dropdown-button--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-dropdown-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-dropdown-button--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset)}:host{display:inline-block;position:relative;height:var(--ix-dropdown-button--height);width:auto;border-top-left-radius:var(--ix-dropdown-button--border-radius-left);border-bottom-left-radius:var(--ix-dropdown-button--border-radius-left);border-top-right-radius:var(--ix-dropdown-button--border-radius-right);border-bottom-right-radius:var(--ix-dropdown-button--border-radius-right)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .hide{display:none}:host ix-button,:host ix-icon-button{--ix-button--border-radius-left:var(--ix-dropdown-button--border-radius-left);--ix-button--border-radius-right:var(--ix-dropdown-button--border-radius-right)}:host .dropdown-button{display:block;position:relative;width:100%;height:100%;cursor:pointer}:host .dropdown-button>ix-button{--ix-button--padding:var(--ix-dropdown-button--padding);width:100%;height:100%}:host .dropdown-button .button-label{margin-right:auto;min-width:0px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .dropdown-button .dropdown-icon{margin-right:var(--ix-dropdown-button-dropdown-icon--margin-right)}:host .dropdown-button .dropdown-chevron{margin-left:var(--ix-dropdown-button-dropdown-chevron--margin-left)}:host .content{display:flex;align-items:center}:host .remove-button-min-width{min-width:0px}:host(.host-context-date-picker) .internal-button,:host(.host-context-breadcrumb) .internal-button{min-width:0px;padding:0}:host(.icon-only){width:var(--ix-dropdown-button--height)}:host(.host-context-date-picker) ix-dropdown{max-height:var(--ix-dropdown-button-host-context-date-picker--max-height);overflow-y:scroll}:host(:focus-visible){outline:var(--ix-dropdown-button--outline-width--focus) solid var(--ix-dropdown-button--outline-color--focus);outline-offset:var(--ix-dropdown-button--outline-offset--focus)}:host([aria-expanded=true]:focus-visible){outline:none}:host(.disabled){pointer-events:none}`;
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
   * Set label text.
   * An empty or omitted label renders an icon-only trigger.
   * Set to `null` to keep the standard trigger layout for custom `button-label` slot content.
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
   * ARIA label for the dropdown button.
   * Set as `aria-label` on the host, which is the interactive control.
   * The nested button is inert and is not exposed to assistive technology.
   */
  ariaLabelDropdownButton;
  /**
   * If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
   *
   * @since 5.0.0
   */
  focusCheckedItem = false;
  /**
   * Controls how keyboard navigation moves focus between dropdown items.
   *
   * - `active-descendant`: DOM focus stays on the dropdown button while a visual
   *   focus indicator moves between the items, exposed via `aria-activedescendant`.
   * - `roving-tabindex`: real DOM focus is moved to each item using a roving
   *   `tabindex` (`0` for the active item, `-1` for the others). No
   *   `aria-activedescendant` is used because the focused item is announced
   *   directly.
   *
   * @since 5.2.0
   */
  navigationMode = "active-descendant";
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   */
  enableTopLayer = false;
  /**
   * Resolves the item to activate when arrow keys move past the first or last
   * item, instead of wrapping around.
   *
   * @internal
   */
  navigationBoundaryHandler;
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
  hostAriaLabel;
  buttonLabelSlotText;
  ariaLabelObserver;
  buttonLabelObserver;
  hasConnected = false;
  renderedAriaLabel;
  renderedAriaLabelMutation;
  dropdownButtonId = this.getHostElementId();
  dropdownAnchor = makeRef();
  dropdownRef = makeRef();
  hostContext;
  getTextLabel() {
    if (typeof this.label !== "string") {
      return void 0;
    }
    return this.label.trim() || void 0;
  }
  isIconOnly() {
    return this.label !== null && this.getTextLabel() === void 0;
  }
  getButtonLabelSlotText(nodes = []) {
    const slottedNodes = nodes.length > 0 ? nodes : Array.from(this.hostElement.children).filter((element) => element.getAttribute("slot") === "button-label");
    const text = slottedNodes.map((node) => node.textContent).join(" ").replace(/\s+/g, " ").trim();
    return text || void 0;
  }
  onDropdownShowChanged = (event) => {
    if (this.disabled && event.detail) {
      return;
    }
    this.dropdownShow = event.detail;
  };
  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    const hostAriaLabel = this.getHostAriaLabel();
    if (!this.hasConnected || hostAriaLabel !== this.renderedAriaLabel) {
      this.hostAriaLabel = hostAriaLabel;
    }
    this.hasConnected = true;
    this.buttonLabelSlotText = this.getButtonLabelSlotText();
    if (hostAriaLabel === void 0 && this.hostElement.hasAttribute("aria-label")) {
      this.hostElement.setAttribute("aria-label", this.getFallbackAriaLabel());
    }
    if (typeof MutationObserver === "undefined") {
      return;
    }
    this.ariaLabelObserver ??= new MutationObserver(() => {
      const ariaLabel = this.hostElement.getAttribute("aria-label") ?? void 0;
      if (this.renderedAriaLabelMutation !== void 0 && ariaLabel === this.renderedAriaLabelMutation) {
        this.renderedAriaLabelMutation = void 0;
        return;
      }
      const normalizedAriaLabel = this.getHostAriaLabel();
      if (normalizedAriaLabel === void 0) {
        this.hostAriaLabel = void 0;
        const fallbackAriaLabel = this.getFallbackAriaLabel();
        this.renderedAriaLabelMutation = fallbackAriaLabel;
        this.hostElement.setAttribute("aria-label", fallbackAriaLabel);
        return;
      }
      this.hostAriaLabel = normalizedAriaLabel;
    });
    this.ariaLabelObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["aria-label"]
    });
    this.buttonLabelObserver ??= new MutationObserver(() => {
      this.buttonLabelSlotText = this.getButtonLabelSlotText();
    });
    this.buttonLabelObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["slot"],
      characterData: true,
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.ariaLabelObserver?.disconnect();
    this.buttonLabelObserver?.disconnect();
  }
  getHostAriaLabel() {
    const ariaLabel = this.hostElement.getAttribute("aria-label");
    return ariaLabel?.trim() ? ariaLabel : void 0;
  }
  getLabelAriaLabel() {
    const configuredAriaLabel = typeof this.ariaLabelDropdownButton === "string" ? this.ariaLabelDropdownButton.trim() || void 0 : void 0;
    return configuredAriaLabel || this.getTextLabel() || (this.label === null ? this.buttonLabelSlotText : void 0);
  }
  getFallbackAriaLabel() {
    return this.getLabelAriaLabel() || (this.dropdownShow ? "Close dropdown" : "Open dropdown");
  }
  getMenuAriaLabel() {
    return this.hostAriaLabel || this.getLabelAriaLabel() || "Menu";
  }
  getAriaLabel() {
    return this.hostAriaLabel !== void 0 ? this.hostAriaLabel : this.getFallbackAriaLabel();
  }
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
    const ariaLabel = this.getAriaLabel();
    this.renderedAriaLabelMutation = this.hostElement.getAttribute("aria-label") !== ariaLabel ? ariaLabel : void 0;
    this.renderedAriaLabel = ariaLabel;
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
    return !this.suppressAriaActiveDescendant && this.dropdownShow && this.navigationMode !== "roving-tabindex";
  }
  getAriaActiveDescendantProxyItemId() {
    return false;
  }
  /**@internal */
  async getDropdownReference() {
    return this.dropdownRef.waitForCurrent();
  }
  render() {
    const isIconOnly = this.isIconOnly();
    const ariaLabel = this.getAriaLabel();
    const ariaAttributes = {
      ...this.inheritAriaAttributes,
      "aria-label": ariaLabel,
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
    return h(Host, { key: "ef9afa229b300ec85abe9f6730d798184fd55eb2", class: {
      disabled: this.disabled,
      "icon-only": isIconOnly,
      "host-context-breadcrumb": !!this.hostContext?.breadcrumb,
      "host-context-date-picker": !!this.hostContext?.datePicker,
      "host-context-tabs": !!this.hostContext?.tabs
    }, ref: this.dropdownAnchor, tabIndex: this.disabled ? -1 : 0, ...ariaAttributes }, h("div", { key: "c7b71555a77d8c256ff64a5bfab7b9857bee1041", class: "dropdown-button" }, !isIconOnly ? h("ix-button", { ...commonProperties, class: {
      "internal-button": true,
      active: this.dropdownShow
    }, alignment: "start", "aria-hidden": "true", inert: true, ref: (ref) => forceTabIndex(ref, -1) }, h("div", { class: "content" }, this.icon ? h("ix-icon", { "aria-hidden": "true", name: this.icon, class: "dropdown-icon" }) : null, h("div", { class: "button-label" }, this.label), h("slot", { name: "button-label" }), !hideChevron && h("ix-icon", { "aria-hidden": "true", name: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, class: "dropdown-chevron" }))) : h("div", null, h("ix-icon-button", { ...commonProperties, class: { active: this.dropdownShow }, icon: this.icon, dropdownIndicator: !hideChevron, "aria-hidden": "true", inert: true, ref: (ref) => forceTabIndex(ref, -1) }))), h("ix-dropdown", { key: "16bca5720c439acfc7082c78cf37ecfae15d3df9", role: "menu", ref: this.dropdownRef, id: `dropdown-button-menu-${this.dropdownButtonId}`, "aria-label": this.getMenuAriaLabel(), trigger: this.dropdownAnchor.waitForCurrent(), placement: this.placement, closeBehavior: this.closeBehavior, enableTopLayer: this.enableTopLayer, disableFocusTrap: true, focusCheckedItem: this.focusCheckedItem, navigationMode: this.navigationMode, navigationBoundaryHandler: this.navigationBoundaryHandler, onShowChanged: (event) => this.onDropdownShowChanged(event), onScroll: (event) => {
      const scrollEvent = new CustomEvent("scroll", {
        bubbles: event.bubbles,
        cancelable: event.cancelable,
        detail: event.detail
      });
      this.hostElement.dispatchEvent(scrollEvent);
    } }, h("slot", { key: "acd64f26f7c904e4031062584efa7c4db6784851" })));
  }
};
DropdownButton.style = dropdownButtonCss();
export {
  DropdownButton as ix_dropdown_button
};
