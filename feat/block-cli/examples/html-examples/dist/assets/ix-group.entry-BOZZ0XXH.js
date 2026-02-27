import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-i60z1FJC-Cx4XiL3F.js";
import { r as iconChevronUpSmall, h as iconChevronDownSmall } from "./index-8HpPmDK_-DinFJk0z.js";
const groupCss = ":host{display:flex;flex-direction:column;position:relative;width:19.75rem;min-width:12rem;border-color:var(--theme-group-item--border-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover,:host .group-header:not(.disabled):not(:disabled).hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected,:host .group-header:not(.disabled):not(:disabled).hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{height:calc(4rem - 2px);min-height:calc(4rem - 2px);border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-selection-indicator{width:calc(0.25rem - 1px)}:host .group-header:not(.disabled):not(:disabled):focus-visible .group-header-content{padding:calc(0.5rem - 1px) calc(0.5rem - 1px) calc(0.5rem - 1px) 0}:host .group-header:not(.disabled):not(:disabled):focus-visible .btn-expand-header{margin-top:calc(0.5rem - 1px);margin-bottom:calc(0.5rem - 1px)}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{display:flex;width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{min-width:0;padding-right:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-subheader{height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}";
const Group = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectGroup = createEvent(this, "selectGroup", 7);
    this.selectItem = createEvent(this, "selectItem", 7);
    this.expandedChanged = createEvent(this, "expandedChanged", 7);
    this.suppressHeaderSelection = false;
    this.expanded = false;
    this.selected = false;
    this.expandOnHeaderClick = false;
    this.itemSelected = false;
    this.slotSize = this.groupItems.length;
    this.footerVisible = false;
    this.showExpandCollapsedIcon = false;
    this.hasDropdown = false;
    this.observer = null;
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
    var _a;
    const slot = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="footer"]');
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
    return h(Host, { key: "53f3bd406d5ae73fcc01148a8593cda0c58fb126" }, h("div", { key: "b3dac762bd3d7460d11ee5b8ca946a9b427db88b", class: {
      "group-header": true,
      expand: this.expanded,
      selected: this.selected
    }, tabindex: "0" }, h("div", { key: "ce1344c2dcec0198e4d4e034f2cb9972f0a6113a", class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: "8188311a80d843c14bed61a06967703cdf88cc13", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "3734538bc200c52b24a22ded55bef54c755569b3", class: "btn-expand-header" }, h("ix-icon", { key: "3f593ee5308815de5934e4eaeedad309a3a7616d", "data-testid": "expand-collapsed-icon", class: {
      hidden: !this.showExpandCollapsedIcon
    }, name: this.expanded ? iconChevronUpSmall : iconChevronDownSmall, onClick: (event) => this.onExpandClick(event) })), h("div", { key: "88f46419e1930d0b11b4944ee57fea01e8fe9cc2", class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { key: "4bf0eed96d005c0a64c101cce77138e474274a3d", name: "header" }))), this.hasDropdown && h("ix-group-context-menu", { key: "1104dab25e8f0f674a3f99738e8fd8aa12cfd144" }, h("slot", { key: "5e88d32919a7fee8d81d54fb0ca464adde8c0299", name: "dropdown" }))), h("div", { key: "d476809c9e66699b593b37c1fe90f370e8dfff46", class: {
      "group-content": true
    } }, h("div", { key: "acc40f4b81ad78ae94defefcdfbb921211480f8c", style: {
      display: this.expanded ? "contents" : "none"
    } }, h("slot", { key: "de99ca6880c9ccf93edaa460177b911e2f4c849a", onSlotchange: () => {
      var _a;
      const slot = (_a = this.hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot:not([name])");
      this.showExpandCollapsedIcon = hasSlottedElements(slot);
    } }), h("ix-group-item", { key: "261548bcced66ebf83c4c4f2f5344ef2013fd22b", class: {
      footer: true,
      "footer-visible": this.footerVisible
    }, groupFooter: true, suppressSelection: true }, h("slot", { key: "faa13724f7c85868443f6eada87f8f89af5ba7ff", name: "footer", onSlotchange: () => this.onSlotChange() })))));
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
Group.style = groupCss;
export {
  Group as ix_group
};
