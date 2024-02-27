import { r as registerInstance, h, H as Host, g as getElement } from "./index.ae9ec291.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
const menuItemCss = ':host{position:relative;display:block;cursor:pointer;height:var(--ix-menu-item-height, 3rem);min-height:var(--ix-menu-item-height, 3rem);max-height:var(--ix-menu-item-height, 3rem)}:host .tab{all:unset;box-sizing:border-box;display:flex;position:relative;align-items:center;height:var(--ix-menu-item-height, 3rem);width:100%;z-index:500;padding-left:0.875rem}:host .tab:not(.disabled):not(:disabled).hover,:host .tab:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .tab:not(.disabled):not(:disabled).active,:host .tab:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .tab-icon{color:var(--theme-nav-item-primary-icon--color);position:relative;pointer-events:none}:host .tab:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:-1px}:host .tab:not(:last-child){margin-bottom:0.5rem}:host .notification{display:inline-flex;position:absolute;top:0.25rem;left:1.5rem}:host .notification .pill{display:inline-flex;justify-content:center;align-items:center;height:0.5rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--theme-color-primary);border-radius:6.25rem;font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--theme-color-primary--contrast);padding:0.25rem}:host .tab-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-nav-item-primary--color);margin:0 1.25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}:host(.active) .tab,:host(.selected) .tab{background-color:var(--theme-nav-item-primary--background--selected)}:host(.active) .tab::before,:host(.selected) .tab::before{content:"";background-color:var(--theme-nav-item-primary--border-color--selected);height:var(--ix-menu-item-height, 3rem);width:0.25rem;left:0;position:absolute}:host(.active) .tab>.glyph,:host(.selected) .tab>.glyph{color:var(--theme-nav-item-primary-icon--color--selected)}:host(.disabled){color:var(--theme-color-weak-text);pointer-events:none;cursor:default}:host(.disabled) .tab>.tab-icon{color:var(--theme-color-weak-text)}:host(.disabled) .tab-text{color:var(--theme-color-weak-text)}:host(.bottom-tab),:host([slot=bottom]){min-height:2.25rem;height:2.25rem;max-height:2.25rem}:host(.bottom-tab) .tab,:host([slot=bottom]) .tab{height:2.25rem}:host(.bottom-tab) .tab::before,:host([slot=bottom]) .tab::before{height:2.25rem;background-color:transparent}:host(.bottom-tab).active:hover,:host(.bottom-tab).selected:hover,:host([slot=bottom]).active:hover,:host([slot=bottom]).selected:hover{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.bottom-tab).active:active,:host(.bottom-tab).selected:active,:host([slot=bottom]).active:active,:host([slot=bottom]).selected:active{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.bottom-tab.active) .tab,:host(.bottom-tab.selected) .tab,:host(.active[slot=bottom]) .tab,:host(.selected[slot=bottom]) .tab{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.tab-nested) .tab{flex-direction:row;padding-left:1.375rem}:host(.tab-nested) .tab .notification{position:relative;top:0;left:0;padding-left:0.5rem}:host(.tab-nested) .tab .tab-icon{padding-left:0.5rem;padding-right:0.5rem}:host(.tab-nested) .tab .tab-text{margin-left:0.5rem}:host(.tab-nested) .tab::before{display:none}';
const IxMenuItemStyle0 = menuItemCss;
const MenuItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isHostedInsideCategory = false;
    this.home = false;
    this.bottom = false;
    this.tabIcon = void 0;
    this.icon = void 0;
    this.notifications = void 0;
    this.active = void 0;
    this.disabled = void 0;
    this.title = void 0;
  }
  componentWillLoad() {
    this.isHostedInsideCategory = !!this.hostElement.closest("ix-menu-category");
    this.onIconChange();
    this.onTabIconChange();
  }
  componentWillRender() {
    this.title = this.hostElement.innerText;
  }
  connectedCallback() {
    this.observer = createMutationObserver(() => {
      this.title = this.hostElement.innerText;
    });
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
  }
  onIconChange() {
    if (!this.isHostedInsideCategory && !this.hostElement.icon && !this.hostElement.tabIcon) {
      this.icon = "document";
    }
  }
  onTabIconChange() {
    if (!this.isHostedInsideCategory && !this.hostElement.icon && !this.hostElement.tabIcon) {
      this.tabIcon = "document";
    }
  }
  render() {
    var _a;
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
    return h(Host, Object.assign({ key: "cf7c3ee73c7ff53d9825bc64460a72a876c46f03", class: {
      disabled: this.disabled,
      "home-tab": this.home,
      "bottom-tab": this.bottom,
      active: this.active,
      "tab-nested": this.isHostedInsideCategory
    } }, extendedAttributes), h("button", { key: "d79e9ab5097e712949a65e59e08426166dfa4091", class: "tab", title: this.title, tabIndex: this.disabled ? -1 : 0, role: "listitem" }, (this.icon || this.tabIcon) && h("ix-icon", { class: "tab-icon", name: (_a = this.icon) !== null && _a !== void 0 ? _a : this.tabIcon }), this.notifications ? h("div", { class: "notification" }, h("div", { class: "pill" }, this.notifications)) : null, h("span", { key: "edbdefc1edd5b572c49d2f74e184a466989500e6", class: "tab-text text-default" }, h("slot", { key: "f3d75d13c9b68b69e7731f9c947c423e304a76d6" }))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "icon": ["onIconChange"],
      "tabIcon": ["onTabIconChange"]
    };
  }
};
MenuItem.style = IxMenuItemStyle0;
export {
  MenuItem as ix_menu_item
};
