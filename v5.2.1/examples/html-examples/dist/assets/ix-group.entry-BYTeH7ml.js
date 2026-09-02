import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { G as iconChevronUpSmall, t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
const groupCss = () => `@charset "UTF-8";:host{--ix-group-header--border-color--focus:var(--si-sys-effects-focus);--ix-group-header--border-radius--focus:var(--theme-default-border-radius);--ix-group-expand-icon--color:var(--si-sys-text-primary);--ix-group-header-selection-indicator--background:rgba(0, 0, 0, 0);--ix-group--border-radius:var(--theme-default-border-radius);--ix-group-header--color:var(--si-sys-text-primary);--ix-group-item--background:var(--si-sys-background-1);--ix-group-item--background--active:var(--si-sys-background-active);--ix-group-item--background--hover:var(--si-sys-background-hover);--ix-group-item--background--selected:var(--si-sys-background-active);--ix-group-item--border-color:rgba(0, 0, 0, 0);--ix-group-item-indicator--background--selected:var(--si-sys-background-accent-hover);--ix-group-subheader--color:var(--si-sys-text-primary)}:host{display:flex;flex-direction:column;position:relative;width:19.75rem;min-width:12rem;border-color:var(--ix-group-item--border-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--ix-group--border-radius) var(--ix-group--border-radius) 0 0;display:flex;background-color:var(--ix-group-item--background);color:var(--ix-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover,:host .group-header:not(.disabled):not(:disabled).hover{background-color:var(--ix-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected,:host .group-header:not(.disabled):not(:disabled).hover.selected{background-color:var(--ix-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--ix-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--ix-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{height:calc(4rem - 2px);min-height:calc(4rem - 2px);border:1px solid var(--ix-group-header--border-color--focus);border-radius:var(--ix-group-header--border-radius--focus) var(--ix-group-header--border-radius--focus) 0px 0px;outline:none}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-selection-indicator{width:calc(0.25rem - 1px)}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-content{padding:calc(0.5rem - 1px) calc(0.5rem - 1px) calc(0.5rem - 1px) 0}:host .group-header:not(.disabled):not(:disabled):focus-visible .btn-expand-header{margin-top:calc(0.5rem - 1px);margin-bottom:calc(0.5rem - 1px)}:host .group-header.selected{background-color:var(--ix-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--ix-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--ix-group-header-selection-indicator--background)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--ix-group-item-indicator--background--selected)}:host .group-header-clickable{display:flex;width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--ix-group--border-radius)}:host .group-header-content{display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{min-width:0;padding-right:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-subheader{height:1.25rem;font-size:0.875rem;color:var(--ix-group-subheader--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--ix-group-expand-icon--color)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}`;
const Group = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectGroup = createEvent(this, "selectGroup", 7);
    this.selectItem = createEvent(this, "selectItem", 7);
    this.expandedChanged = createEvent(this, "expandedChanged", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Prevent header from being selectable
   */
  suppressHeaderSelection = false;
  /**
   * Group header
   */
  header;
  /**
   * Group header subtitle
   */
  subHeader;
  /**
   * Whether the group is expanded or collapsed. Defaults to false.
   */
  expanded = false;
  /**
   * Whether the group is selected.
   */
  selected = false;
  /**
   * The index of the selected group entry.
   * If undefined no group item is selected.
   */
  index;
  /**
   * Expand the group if the header is clicked
   */
  expandOnHeaderClick = false;
  /**
   * Emits when whole group gets selected.
   */
  selectGroup;
  /**
   * Emits when group item gets selected.
   */
  selectItem;
  /**
   * Group expanded
   */
  expandedChanged;
  itemSelected = false;
  slotSize = 0;
  footerVisible = false;
  showExpandCollapsedIcon = false;
  hasDropdown = false;
  observer;
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
    return this.hostElement.shadowRoot?.querySelector(".group-content");
  }
  onExpandClick(event) {
    const oldExpanded = this.expanded;
    this.expanded = !this.expanded;
    const { defaultPrevented } = this.expandedChanged.emit(this.expanded);
    event.stopPropagation();
    if (defaultPrevented) {
      this.expanded = oldExpanded;
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
    const slot = this.hostElement.shadowRoot?.querySelector('slot[name="footer"]');
    if (slot) {
      this.footerVisible = hasSlottedElements(slot);
    }
  }
  checkDropdownSlot() {
    this.hasDropdown = !!this.hostElement.querySelector('[slot="dropdown"]');
  }
  componentWillRender() {
    this.groupItems.forEach((item, index) => {
      item.selected = index === this.index;
      item.index = index;
    });
    this.checkDropdownSlot();
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
    this.checkDropdownSlot();
    this.slotSize = this.groupItems.length;
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
    return h(Host, { key: "5c5f41902192cd493d530fb0f30ec2ab5773918a" }, h("div", { key: "e67da80ac0f8f8ab3073a2cd94486ede90534e56", class: {
      "group-header": true,
      expand: this.expanded,
      selected: this.selected
    }, tabindex: "0" }, h("div", { key: "eb8583e91b340945d81a369d79155e73da5d5a4e", class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: "95e1ce12adb4313780129cde491937e3bbf9052c", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "e1e947e37d09a09798074504f8458e531c701bb9", class: "btn-expand-header" }, h("ix-icon", { key: "3176b2ae1ba63c883e381fe3e75c8537e7dd0254", "data-testid": "expand-collapsed-icon", class: {
      hidden: !this.showExpandCollapsedIcon
    }, name: this.expanded ? iconChevronUpSmall : iconChevronDownSmall, onClick: (event) => this.onExpandClick(event) })), h("div", { key: "d236e2e98fef2ae5ef5cbc83d85fe2b03c087953", class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { key: "b69efab708ec99348aff8711169ecc94a86d5f35", name: "header" }))), this.hasDropdown && h("ix-group-context-menu", { key: "706e2a037150acbc9e5dc8b083d319cee06242ff" }, h("slot", { key: "a17e80c974474af72427b4cd2c6c0be4a0ffa57d", name: "dropdown" }))), h("div", { key: "dea74d382195d37ed56772cac73f25b17877259c", class: {
      "group-content": true
    } }, h("div", { key: "3922174edd35b7a39002576d6076e1c6393bc163", style: {
      display: this.expanded ? "contents" : "none"
    } }, h("slot", { key: "186b2b84442929226375a696215c7c66e4b8f0b5", onSlotchange: () => {
      const slot = this.hostElement.shadowRoot?.querySelector("slot:not([name])");
      this.showExpandCollapsedIcon = hasSlottedElements(slot);
    } }), h("ix-group-item", { key: "0aa83b840c9a1fc7fef802bea86a8e44cd836276", class: {
      footer: true,
      "footer-visible": this.footerVisible
    }, groupFooter: true, suppressSelection: true }, h("slot", { key: "e0442592b5b8788eb6f6fe79ea3abd24245e62a9", name: "footer", onSlotchange: () => this.onSlotChange() })))));
  }
  static get watchers() {
    return {
      "selected": [{
        "selectedChanged": 0
      }]
    };
  }
};
Group.style = groupCss();
export {
  Group as ix_group
};
