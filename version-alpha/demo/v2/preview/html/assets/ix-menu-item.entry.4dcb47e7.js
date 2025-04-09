import { r as registerInstance, h, H as Host, g as getElement } from "./global.bff64ac3.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk.55d80c4d.js";
import { m as makeRef } from "./make-ref-bcj7UEIC.8e199155.js";
import { m as menuController } from "./menu-service-Dl5Ra79J.c8dc5a6f.js";
import { N as iconDocument } from "./index-CrTP-icT.451e0ae2.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
const menuItemCss = ':host{position:relative;display:block;cursor:pointer;height:var(--ix-menu-item-height, 3rem);min-height:var(--ix-menu-item-height, 3rem);max-height:var(--ix-menu-item-height, 3rem)}:host .tab{all:unset;box-sizing:border-box;display:flex;position:relative;align-items:center;height:var(--ix-menu-item-height, 3rem);width:100%;z-index:500;padding-left:0.875rem}:host .tab:not(.disabled):not(:disabled).hover,:host .tab:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .tab:not(.disabled):not(:disabled).active,:host .tab:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .tab-icon{color:var(--theme-nav-item-primary-icon--color);position:relative;pointer-events:none}:host .tab:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:-1px}:host .notification{display:inline-flex;position:absolute;top:0.25rem;left:1.5rem}:host .notification .pill{display:inline-flex;justify-content:center;align-items:center;height:0.5rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--theme-color-primary);font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--theme-color-primary--contrast);padding:0.25rem}:host .tab-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-nav-item-primary--color);margin:0 1rem 0 1.25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}:host(.active) .tab,:host(.selected) .tab{background-color:var(--theme-nav-item-primary--background--selected)}:host(.active) .tab::before,:host(.selected) .tab::before{content:"";background-color:var(--theme-nav-item-primary--border-color--selected);height:var(--ix-menu-item-height, 3rem);width:0.25rem;left:0;position:absolute}:host(.active) .tab>.glyph,:host(.selected) .tab>.glyph{color:var(--theme-nav-item-primary-icon--color--selected)}:host(.disabled){color:var(--theme-color-weak-text);pointer-events:none;cursor:default}:host(.disabled) .tab>.tab-icon{color:var(--theme-color-weak-text)}:host(.disabled) .tab-text{color:var(--theme-color-weak-text)}:host(.bottom-tab),:host([slot=bottom]){min-height:2.25rem;height:2.25rem;max-height:2.25rem}:host(.bottom-tab) .tab,:host([slot=bottom]) .tab{height:2.25rem}:host(.bottom-tab) .tab::before,:host([slot=bottom]) .tab::before{height:2.25rem;background-color:transparent}:host(.bottom-tab).active:hover,:host(.bottom-tab).selected:hover,:host([slot=bottom]).active:hover,:host([slot=bottom]).selected:hover{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.bottom-tab).active:active,:host(.bottom-tab).selected:active,:host([slot=bottom]).active:active,:host([slot=bottom]).selected:active{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.bottom-tab.active) .tab,:host(.bottom-tab.selected) .tab,:host(.active[slot=bottom]) .tab,:host(.selected[slot=bottom]) .tab{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.tab-nested) .tab{flex-direction:row;padding-left:1.375rem}:host(.tab-nested) .tab .notification{position:relative;top:0;left:0;padding-left:0.5rem}:host(.tab-nested) .tab .tab-icon{padding-left:0.5rem;padding-right:0.5rem}:host(.tab-nested) .tab .tab-text{margin-left:0.5rem}:host(.tab-nested) .tab::before{display:none}';
const MenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.home = false;
    this.bottom = false;
    this.active = false;
    this.disabled = false;
    this.isCategory = false;
    this.menuExpanded = false;
    this.buttonRef = makeRef();
    this.isHostedInsideCategory = false;
    this.observer = createMutationObserver(() => {
      this.setTooltip();
    });
  }
  componentWillLoad() {
    var _a;
    this.isHostedInsideCategory = !!this.hostElement.closest("ix-menu-category");
    this.onIconChange();
    this.menuExpanded = ((_a = menuController.nativeElement) === null || _a === void 0 ? void 0 : _a.expand) || false;
    this.menuExpandedDisposer = menuController.expandChange.on((expand) => this.menuExpanded = expand);
  }
  componentWillRender() {
    this.setTooltip();
  }
  setTooltip() {
    var _a, _b;
    this.tooltip = (_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.hostElement.textContent) !== null && _b !== void 0 ? _b : void 0;
  }
  connectedCallback() {
    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }
  disconnectedCallback() {
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
    return h(Host, Object.assign({ key: "338303e3fa74e42da6937c88c76aa8ae967c28cd", class: {
      disabled: this.disabled,
      "home-tab": this.home,
      "bottom-tab": this.bottom,
      active: this.active,
      "tab-nested": this.isHostedInsideCategory
    } }, extendedAttributes), h("button", { key: "c171aa4703864f4a8eab96e85c959292669d5e9a", class: "tab", tabIndex: this.disabled ? -1 : 0, ref: this.buttonRef }, this.icon && h("ix-icon", { key: "d09d3827395b46f368d26b9a81d9da764fdaf5cb", class: "tab-icon", name: this.icon }), this.notifications ? h("div", { class: "notification" }, h("div", { class: "pill" }, this.notifications)) : null, h("span", { key: "f9d95782c3e509252c03dcc771001ffeb9fac768", class: "tab-text text-default" }, this.label, h("slot", { key: "57546e469c63601edce1d37ba552bae4b6969179" }))), !this.isCategory && !this.isHostedInsideCategory && !this.menuExpanded && h("ix-tooltip", { key: "c4a895fca8ba28f9a6f78596c9a32b66ca67f4bc", for: this.buttonRef.waitForCurrent(), placement: "right", showDelay: 1e3 }, this.tooltip));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "icon": ["onIconChange"]
    };
  }
};
MenuItem.style = menuItemCss;
export {
  MenuItem as ix_menu_item
};
