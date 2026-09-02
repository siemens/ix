import { M as Mixin, r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { a0 as iconDocument } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BmTKblYV-DYCoUX5J.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { c as createSequentialId } from "./uuid-D3T7Lr4G-CKA8Zb0e.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const menuItemCss = () => `@charset "UTF-8";:host{--ix-menu-item-tab--outline-color--focus:var(--si-sys-effects-focus);--ix-menu-item-notification--background:var(--si-sys-text-accent);--ix-menu-item-notification--color:var(--si-sys-text-on-accent);--ix-menu-item--color--disabled:var(--si-sys-text-disabled);--ix-menu-item-primary--background--selected:var(--si-sys-background-0);--ix-menu-item-primary--border-color--selected:var(--si-sys-border-accent-hover);--ix-menu-item-primary--color:var(--si-sys-text-primary);--ix-menu-item-primary-icon--color:var(--si-sys-text-primary);--ix-menu-item-primary-icon--color--selected:var(--si-sys-text-primary);--ix-menu-item-secondary--background--selected:var(--si-sys-background-0)}:host{position:relative;display:block;cursor:pointer;height:var(--ix-menu-item-height, 3rem);min-height:var(--ix-menu-item-height, 3rem);max-height:var(--ix-menu-item-height, 3rem)}:host .tab{all:unset;box-sizing:border-box;display:flex;position:relative;align-items:center;height:var(--ix-menu-item-height, 3rem);width:100%;z-index:500;padding-left:0.875rem}:host .tab:not(.disabled):not(:disabled).hover,:host .tab:not(.disabled):not(:disabled):hover{background-color:var(--si-sys-background-hover)}:host .tab:not(.disabled):not(:disabled).active,:host .tab:not(.disabled):not(:disabled):active{background-color:var(--si-sys-background-active)}:host .tab-icon{color:var(--ix-menu-item-primary-icon--color);position:relative;pointer-events:none}:host .tab:focus-visible{outline:1px solid var(--ix-menu-item-tab--outline-color--focus);outline-offset:-1px}:host .notification{display:inline-flex;position:absolute;top:0.25rem;left:1.5rem}:host .notification .pill{display:inline-flex;justify-content:center;align-items:center;height:0.5rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--ix-menu-item-notification--background);font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--ix-menu-item-notification--color);padding:0.25rem}:host .tab-text{display:block;color:var(--ix-menu-item-primary--color);margin:0 1rem 0 1.25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.active) .tab,:host(.selected) .tab{background-color:var(--ix-menu-item-primary--background--selected)}:host(.active) .tab::before,:host(.selected) .tab::before{content:"";background-color:var(--ix-menu-item-primary--border-color--selected);height:var(--ix-menu-item-height, 3rem);width:0.25rem;left:0;position:absolute}:host(.active) .tab>.glyph,:host(.selected) .tab>.glyph{color:var(--ix-menu-item-primary-icon--color--selected)}:host(.disabled){color:var(--ix-menu-item--color--disabled);pointer-events:none;cursor:default}:host(.disabled) .tab>.tab-icon{color:var(--ix-menu-item--color--disabled)}:host(.disabled) .tab-text{color:var(--ix-menu-item--color--disabled)}:host(.bottom-tab),:host([slot=bottom]){min-height:2.25rem;height:2.25rem;max-height:2.25rem}:host(.bottom-tab) .tab,:host([slot=bottom]) .tab{height:2.25rem}:host(.bottom-tab) .tab::before,:host([slot=bottom]) .tab::before{height:2.25rem;background-color:transparent}:host(.bottom-tab).active:hover,:host(.bottom-tab).selected:hover,:host([slot=bottom]).active:hover,:host([slot=bottom]).selected:hover{background-color:var(--ix-menu-item-secondary--background--selected)}:host(.bottom-tab).active:active,:host(.bottom-tab).selected:active,:host([slot=bottom]).active:active,:host([slot=bottom]).selected:active{background-color:var(--ix-menu-item-secondary--background--selected)}:host(.bottom-tab.active) .tab,:host(.bottom-tab.selected) .tab,:host(.active[slot=bottom]) .tab,:host(.selected[slot=bottom]) .tab{background-color:var(--ix-menu-item-secondary--background--selected)}:host(.tab-nested) .tab{flex-direction:row;padding-left:1.375rem}:host(.tab-nested) .tab .notification{position:relative;top:0;left:0;padding-left:0.5rem}:host(.tab-nested) .tab .tab-icon{padding-left:0.5rem;padding-right:0.5rem}:host(.tab-nested) .tab .tab-text{margin-left:0.5rem}:host(.tab-nested) .tab::before{display:none}`;
let sequenceId = 0;
const MenuItem = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  /**
   * Label of the menu item. Will also be used as tooltip text
   */
  label;
  /**
   * Move the Tab to a top position.
   */
  home = false;
  /**
   * Caution: this is no longer working. Please use slot="bottom" instead.
   *
   * Place tab on bottom
   */
  bottom = false;
  /**
   * Name of the icon you want to display. Icon names can be resolved from the documentation {@link https://ix.siemens.io/docs/icon-library/icons}
   */
  icon;
  /**
   * Show notification count on tab
   */
  notifications;
  /**
   * State to display active
   */
  active = false;
  /**
   * Disable tab and remove event handlers
   */
  disabled = false;
  /**
   * Will be shown as tooltip text, if not provided menu text content will be used.
   *
   * @since 4.0.0
   */
  tooltipText;
  /**
   * URL for the button link. When provided, the button will render as an anchor tag.
   *
   * @since 4.0.0
   */
  href;
  /**
   * Specifies where to open the linked document when href is provided.
   *
   * @since 4.0.0
   */
  target = "_self";
  /**
   * Specifies the relationship between the current document and the linked document when href is provided.
   *
   * @since 4.0.0
   */
  rel;
  /** @internal */
  isCategory = false;
  /** @internal */
  menuCategoryLabel;
  get hostElement() {
    return getElement(this);
  }
  tooltip;
  menuExpanded = false;
  isInMenuContext = false;
  hostTabIndex = -1;
  /** @internal */
  async setTabIndex(value) {
    this.hostTabIndex = value;
  }
  internalItemId = createSequentialId("ix-menu-item-", sequenceId++);
  buttonRef = makeRef();
  isHostedInsideCategory = false;
  menuExpandedDisposer;
  observer = createMutationObserver(() => {
    this.setTooltip();
  });
  componentWillLoad() {
    super.componentWillLoad();
    this.isHostedInsideCategory = !!this.hostElement.closest("ix-menu-category");
    const rootNode = this.hostElement.getRootNode();
    const isInMenuShadowDOM = rootNode instanceof ShadowRoot && rootNode.host?.tagName?.toLowerCase() === "ix-menu";
    const directParent = this.hostElement.parentElement;
    const isMenuChild = !this.isHostedInsideCategory && (directParent?.tagName?.toLowerCase() === "ix-menu" || directParent?.tagName?.toLowerCase() === "a" && directParent?.parentElement?.tagName?.toLowerCase() === "ix-menu");
    this.isInMenuContext = isInMenuShadowDOM || isMenuChild;
    this.onIconChange();
    this.menuExpanded = menuController.nativeElement?.expand || false;
    this.menuExpandedDisposer = menuController.expandChange.on((expand) => this.menuExpanded = expand);
  }
  componentWillRender() {
    this.setTooltip();
  }
  setTooltip() {
    this.tooltip = this.tooltipText ?? this.label ?? this.hostElement.textContent ?? void 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.menuExpandedDisposer) {
      this.menuExpandedDisposer.dispose();
    }
  }
  onIconChange() {
    if (!this.isHostedInsideCategory && !this.hostElement.icon) {
      this.icon = iconDocument;
    }
  }
  handleCategoryKeyDown(e) {
    if ((e.key === "Enter" || e.key === " ") && this.isHostedInsideCategory) {
      this.returnFocusToParentCategoryMenuItem();
    }
  }
  getAriaLabel() {
    if ("aria-label" in this.inheritAriaAttributes) {
      return this.inheritAriaAttributes["aria-label"];
    }
    const hasDistinctTooltip = this.tooltipText && this.tooltipText !== this.label && this.tooltipText !== this.hostElement.textContent;
    if (hasDistinctTooltip) {
      return `${this.label ?? this.menuCategoryLabel ?? this.hostElement.textContent ?? ""} ${this.tooltipText}`;
    }
    return void 0;
  }
  getEffectiveRole(externalRole) {
    const internalRole = this.isHostedInsideCategory || this.isCategory || this.isInMenuContext ? "menuitem" : void 0;
    return externalRole ?? internalRole;
  }
  returnFocusToParentCategoryMenuItem() {
    const categoryElement = this.hostElement.closest("ix-menu-category");
    const categoryMenuItem = categoryElement?.shadowRoot?.querySelector("ix-menu-item.category-parent");
    categoryElement?.dispatchEvent(new CustomEvent("ixMenuCategoryItemSelect", {
      bubbles: true,
      composed: true
    }));
    categoryMenuItem?.focus();
  }
  render() {
    let extendedAttributes = {};
    if (this.home) {
      extendedAttributes = {
        slot: "home"
      };
    }
    if (this.bottom) {
      extendedAttributes = {
        slot: "bottom"
      };
    }
    const { role: externalRole, ...inheritedA11yWithoutRole } = this.inheritAriaAttributes;
    const effectiveRole = this.getEffectiveRole(externalRole);
    const commonAttributes = {
      class: "tab",
      ...inheritedA11yWithoutRole
    };
    const menuContent = [
      this.icon && h("ix-icon", { key: "42edd4f5cb0d80405323b9b539b75d69dac32c2b", class: "tab-icon", name: this.icon, "aria-hidden": "true" }),
      this.notifications ? h("div", { class: "notification" }, h("div", { class: "pill" }, this.notifications)) : null,
      h("span", { key: "bebc9698f494174ec21a35cc7d2a8e44e77bc310", id: this.internalItemId, class: "tab-text text-default" }, this.label, h("slot", { key: "39216c571fddba4f626e31977724abedf2d28398" }))
    ];
    const ariaLabel = this.getAriaLabel();
    return h(Host, { key: "b70c432c2a17576c04c32f185be885905bd3d43c", class: {
      disabled: this.disabled,
      "home-tab": this.home,
      "bottom-tab": this.bottom,
      active: this.active,
      "tab-nested": this.isHostedInsideCategory,
      "ix-focusable": !this.disabled
    }, ...extendedAttributes }, this.href ? h("a", { ...commonAttributes, role: effectiveRole, href: this.disabled ? void 0 : this.href, target: this.target, rel: this.rel, tabIndex: this.isInMenuContext || this.isCategory ? this.hostTabIndex : void 0, ref: this.buttonRef, onKeyDown: (e) => this.handleCategoryKeyDown(e), onClick: (e) => {
      if (this.disabled) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, "aria-disabled": a11yBoolean(this.disabled), "aria-label": ariaLabel, "aria-current": this.active ? "page" : void 0 }, menuContent) : h("button", { ...commonAttributes, role: effectiveRole, tabIndex: this.isInMenuContext || this.isCategory ? this.hostTabIndex : void 0, ref: this.buttonRef, onKeyDown: (e) => this.handleCategoryKeyDown(e), "aria-disabled": a11yBoolean(this.disabled), "aria-label": ariaLabel, "aria-current": this.active ? "page" : void 0 }, menuContent), h("ix-tooltip", { key: "fb1e8dd29fe6291a05e31f51ce71f2896884d1d8", for: this.buttonRef.waitForCurrent(), placement: "right", showDelay: 1e3, interactive: false, "aria-hidden": "true", "aria-labelledby": this.internalItemId }, this.tooltip));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "icon": [{
        "onIconChange": 0
      }]
    };
  }
};
MenuItem.style = menuItemCss();
export {
  MenuItem as ix_menu_item
};
