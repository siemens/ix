import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
import { h as hasSlottedElements } from "./shadow-dom-cc0bc152.fe0cdd32.js";
const groupCss = ":host{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;width:19.75rem;min-width:12rem;border-color:var(--theme-group-item--border-color)}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;padding-right:0}:host .group-header-content .group-subheader{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}";
const IxGroupStyle0 = groupCss;
const Group = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectGroup = createEvent(this, "selectGroup", 7);
    this.selectItem = createEvent(this, "selectItem", 7);
    this.collapsedChanged = createEvent(this, "collapsedChanged", 7);
    this.observer = null;
    this.suppressHeaderSelection = false;
    this.header = void 0;
    this.subHeader = void 0;
    this.collapsed = true;
    this.selected = false;
    this.index = void 0;
    this.expandOnHeaderClick = false;
    this.itemSelected = false;
    this.slotSize = this.groupItems.length;
    this.footerVisible = false;
    this.showExpandCollapsedIcon = false;
  }
  selectedChanged(newSelected) {
    if (newSelected === false) {
      this.changeItemIndex();
    }
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-dropdown-item"));
  }
  get groupItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-item:not(.footer)"));
  }
  get groupContent() {
    var _a;
    return (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".group-content");
  }
  onExpandClick(event) {
    const oldCollapsed = this.collapsed;
    this.collapsed = !this.collapsed;
    const { defaultPrevented } = this.collapsedChanged.emit(this.collapsed);
    event.stopPropagation();
    if (defaultPrevented) {
      this.collapsed = oldCollapsed;
    }
  }
  onHeaderClick(event) {
    if (this.suppressHeaderSelection) {
      this.onExpandClick(event);
      return;
    }
    this.changeHeaderSelection(!this.selected);
    this.changeItemIndex();
  }
  changeHeaderSelection(newSelection) {
    const oldIsHeaderSelected = this.selected;
    const newIsHeaderSelected = newSelection;
    this.selected = newIsHeaderSelected;
    const { defaultPrevented } = this.selectGroup.emit(newIsHeaderSelected);
    if (defaultPrevented) {
      this.selected = oldIsHeaderSelected;
      return;
    }
  }
  changeItemIndex(index) {
    const oldIndex = this.index;
    const newIndex = index === this.index ? void 0 : index;
    if (this.index === newIndex) {
      return;
    }
    this.index = newIndex;
    const { defaultPrevented } = this.selectItem.emit(newIndex);
    if (defaultPrevented) {
      this.index = oldIndex;
      return;
    }
    const items = this.groupItems;
    items.forEach((item, i) => {
      item.selected = i === this.index;
    });
    this.itemSelected = items.some((item) => item.selected);
  }
  onSlotChange() {
    var _a;
    const slot = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="footer"]');
    if (slot) {
      this.footerVisible = hasSlottedElements(slot);
    }
  }
  componentWillRender() {
    this.groupItems.forEach((item, index) => {
      item.selected = index === this.index;
      item.index = index;
    });
  }
  componentDidLoad() {
    this.observer = createMutationObserver(() => {
      this.slotSize = this.groupItems.length;
    });
    if (!this.groupContent) {
      return;
    }
    this.observer.observe(this.groupContent, {
      childList: true
    });
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  onItemClicked(event) {
    if (event.target instanceof HTMLElement) {
      const item = event.target;
      const index = this.groupItems.indexOf(item);
      this.changeItemIndex(index);
    }
  }
  render() {
    return h(Host, { key: "812601d494909804a300f73d14e2e423e2c5cce9" }, h("div", { key: "2725ce086aee61abdfbf9e2db6bb1c1c1f936cc9", class: {
      "group-header": true,
      expand: !this.collapsed,
      selected: this.selected
    }, tabindex: "0" }, h("div", { key: "359308aacda0079e12bb33273b93aad571b2568e", class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: "e770dd6b563036aef00730a5d497cc8b777bf1f9", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "52d7d439f1f2af260bfa707a418bdfe5979ade02", class: "btn-expand-header" }, h("ix-icon", { key: "ab70e0357f2cd002412f950b6a770825f73e481d", "data-testid": "expand-collapsed-icon", class: {
      hidden: !this.showExpandCollapsedIcon
    }, name: this.collapsed ? "chevron-right-small" : "chevron-down-small", onClick: (e) => this.onExpandClick(e) })), h("div", { key: "ec04f3094c5949cd96dc1bcbf00434dff3012be4", class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { key: "3a056192f8217060b9ef9f90cba385028b26c04e", name: "header" }))), h("ix-group-context-menu", { key: "d3d14e900f4e6f6cbbbf27d76eab427f5149f900" }, h("slot", { key: "c538f3b3fd67f4d486a94c304f9cd938f0337af2", name: "dropdown" }))), h("div", { key: "ee27945481e3994204885fd6e0e6bd6f1601aaf5", class: {
      "group-content": true
    } }, h("div", { key: "5cd463be44651ec638b54ea469aa3dc077e3b04f", style: {
      display: this.collapsed ? "none" : "contents"
    } }, h("slot", { key: "1565d5c06d317e41f4d4851c69cd38af88e4918c", onSlotchange: () => {
      var _a;
      const slot = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot:not([name])");
      this.showExpandCollapsedIcon = hasSlottedElements(slot);
    } }), h("ix-group-item", { key: "5d5632cba350db31eb5fa1f64fe3d33e6e0e2748", suppressSelection: true, focusable: false, class: {
      footer: true,
      "footer-visible": this.footerVisible
    } }, h("slot", { key: "13741bc640b4bed51ffaa9e414cfc0c9efe06444", name: "footer", onSlotchange: () => this.onSlotChange() })))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["selectedChanged"]
    };
  }
};
Group.style = IxGroupStyle0;
export {
  Group as ix_group
};
