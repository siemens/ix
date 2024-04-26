import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from "./index.918151cc.js";
import { c as createMutationObserver } from "./mutation-observer-db8757e6.4a24be36.js";
import { h as hasSlottedElements } from "./shadow-dom-60e9243d.05aee9aa.js";
const groupCss = ":host{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;max-width:19.75rem;border-color:var(--theme-group-item--border-color)}:host .group-header{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--theme-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled):focus-visible{border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}:host .group-header.selected{background-color:var(--theme-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--theme-color-input--focus)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--theme-group-item-indicator--background--selected)}:host .group-header-clickable{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}:host .group-header-selection-indicator{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}:host .group-header-content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:0.5rem;padding-left:0}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}:host .group-header-content .group-header-title>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;padding-right:0}:host .group-header-content .group-subheader{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}:host .expand-icon{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}:host .btn-expand-header{margin:0.5rem;margin-inline-end:0.25rem;min-width:1.5rem}:host .group-content{display:flex;flex-direction:column;gap:1px;margin-top:1px}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}";
const IxGroupStyle0 = groupCss;
const Group = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectGroup = createEvent(this, "selectGroup", 7);
    this.selectItem = createEvent(this, "selectItem", 7);
    this.collapsedChanged = createEvent(this, "collapsedChanged", 7);
    this.suppressHeaderSelection = false;
    this.header = void 0;
    this.subHeader = void 0;
    this.collapsed = true;
    this.selected = void 0;
    this.index = void 0;
    this.expandOnHeaderClick = false;
    this.itemSelected = false;
    this.dropdownTriggerRef = void 0;
    this.slotSize = this.groupItems.length;
    this.footerVisible = false;
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-dropdown-item"));
  }
  get groupItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-item:not(.footer)"));
  }
  get groupContent() {
    return this.hostElement.shadowRoot.querySelector(".group-content");
  }
  onExpandClick(event) {
    this.collapsed = !this.collapsed;
    this.collapsedChanged.emit(this.collapsed);
    event.stopPropagation();
  }
  onHeaderClick(event) {
    this.setGroupSelection(!this.selected);
    if (this.suppressHeaderSelection) {
      this.onExpandClick(event);
    }
  }
  onItemClick(index) {
    if (index === this.index) {
      this.index = void 0;
      this.selectItem.emit(void 0);
    } else {
      this.index = index;
      this.selectItem.emit(index);
    }
    if (this.index >= 0) {
      this.itemSelected = true;
    } else
      this.itemSelected = false;
    this.setGroupSelection(false);
  }
  setGroupSelection(selection) {
    if (!this.suppressHeaderSelection) {
      this.selected = selection;
      this.selectGroup.emit(this.selected);
    }
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector('slot[name="footer"]');
    if (slot) {
      this.footerVisible = hasSlottedElements(slot);
    }
  }
  componentWillRender() {
    this.groupItems.forEach((item, index) => {
      if (this.selected === true) {
        item.selected = false;
        this.index = void 0;
        this.itemSelected = false;
        return;
      }
      item.selected = index === this.index;
      item.index = index;
    });
  }
  componentDidLoad() {
    this.observer = createMutationObserver(() => {
      this.slotSize = this.groupItems.length;
    });
    this.observer.observe(this.groupContent, {
      childList: true
    });
    this.groupContent.addEventListener("selectedChanged", (evt) => {
      this.onItemClick(evt.detail.index);
    });
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  render() {
    return h(Host, { key: "ae563c8c4bd705c6c290eda0654aecabd90b441d" }, h("div", { key: "833310ab5fb8f61ba9fd02ffe484e3357cdf8ba1", class: {
      "group-header": true,
      expand: !this.collapsed,
      selected: this.selected
    }, tabindex: "0" }, h("div", { key: "e19b49f36efe557aa18aa9b2f536fa0b5fe1c532", class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { key: "82ac45359bd081ca6b0ebf725cc1c95e594edcbc", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "6854fb9a7d061149fc1d19329bad6b7b67277f15", class: "btn-expand-header" }, h("ix-icon", { key: "342017a6a8dccb6d29c0ada93ee37620f7ab0237", class: {
      hidden: this.slotSize === 0
    }, name: this.collapsed ? "chevron-right-small" : "chevron-down-small", onClick: (e) => this.onExpandClick(e) })), h("div", { key: "b829051829db7df20de99a3a523ced036acf3392", class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { key: "61e4435295d8875eac855da9542c89707bce9936", name: "header" }))), h("ix-group-context-menu", { key: "d88cfb86005c5ea3342d6327c799d2a80e0bb281" }, h("slot", { key: "9bf82a1c5ff2c931995fff0a92eac522d5515bca", name: "dropdown" }))), h("div", { key: "b4b412f8704f3618443a18d191b05a4fa9604df7", class: {
      "group-content": true
    } }, !this.collapsed ? h(Fragment, null, h("slot", null), h("ix-group-item", { suppressSelection: true, focusable: false, class: {
      footer: true,
      "footer-visible": this.footerVisible
    } }, h("slot", { name: "footer", onSlotchange: () => this.onSlotChange() }))) : null));
  }
  get hostElement() {
    return getElement(this);
  }
};
Group.style = IxGroupStyle0;
export {
  Group as ix_group
};
