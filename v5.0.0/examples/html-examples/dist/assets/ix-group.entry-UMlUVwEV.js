import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-F68Qu5y3.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { t as iconChevronUpSmall, h as iconChevronDownSmall } from "./index-DgUGsIlh-CLxQRaVd.js";
const groupCss = () => `:host{display:flex;flex-direction:column;position:relative;width:19.75rem;min-width:12rem;border-color:var(--theme-group-item--border-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover,:host .group-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected,:host .group-header:not(.disabled):not(:disabled).hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{height:calc(4rem - 2px);min-height:calc(4rem - 2px);border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-selection-indicator{width:calc(0.25rem - 1px)}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-content{padding:calc(0.5rem - 1px) calc(0.5rem - 1px) calc(0.5rem - 1px) 0}:host .group-header:not(.disabled):not(:disabled):focus-visible .btn-expand-header{margin-top:calc(0.5rem - 1px);margin-bottom:calc(0.5rem - 1px)}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{display:flex;width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{min-width:0;padding-right:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-subheader{height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}`;
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
  observer = null;
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
    return h(Host, { key: "b113ca51d3f6a93a60937faae542458bc83b5cfc" }, h("div", { key: "d161632c1ba9be2e1f6fb4ce61c78d666d9c29d8", class: {
      "group-header": true,
      expand: this.expanded,
      selected: this.selected
    }, tabindex: "0" }, h("div", { key: "5954edfd29fab2b54b946669eb5f58863146479f", class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: "c15984bff40af2fc0b7bb193bdf72313fc6164a7", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "9bb49c1bcf72eccd8704bffd2fa9747bff194ea9", class: "btn-expand-header" }, h("ix-icon", { key: "3cdb4cfbb92358fa5d36b82809f47615f100b3a5", "data-testid": "expand-collapsed-icon", class: {
      hidden: !this.showExpandCollapsedIcon
    }, name: this.expanded ? iconChevronUpSmall : iconChevronDownSmall, onClick: (event) => this.onExpandClick(event) })), h("div", { key: "aee4f0e7c8a786690526a7e97add700ac30506ac", class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { key: "84ae7f71014940ba932551dffc6c93bc8bfe8aba", name: "header" }))), this.hasDropdown && h("ix-group-context-menu", { key: "111ee4fbbaad4036eea97e41287298dcf05b17df" }, h("slot", { key: "748418d3c2d8a04e3d538cb1add22f2e230f79b8", name: "dropdown" }))), h("div", { key: "9cd8315b23e01589d96ee884918425585ae67b71", class: {
      "group-content": true
    } }, h("div", { key: "84df9a5246673d4363ad9556aadf395341f27034", style: {
      display: this.expanded ? "contents" : "none"
    } }, h("slot", { key: "c72c4aa0a89993eda233baf1cf3afc3914271630", onSlotchange: () => {
      const slot = this.hostElement.shadowRoot?.querySelector("slot:not([name])");
      this.showExpandCollapsedIcon = hasSlottedElements(slot);
    } }), h("ix-group-item", { key: "e17d79015ea9d3fe5ae71167e3340b8d859973d9", class: {
      footer: true,
      "footer-visible": this.footerVisible
    }, groupFooter: true, suppressSelection: true }, h("slot", { key: "fd1431afa73b51e1b17dc589d87be970fb80ad04", name: "footer", onSlotchange: () => this.onSlotChange() })))));
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
