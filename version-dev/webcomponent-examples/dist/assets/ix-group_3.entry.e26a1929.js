import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.6e87f0b8.js";
import { c as createMutationObserver } from "./mutation-observer-7d01bbea.e6c38b94.js";
const groupCss = ".sc-ix-group-h{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;max-width:19.75rem;border-color:var(--theme-group-item--border-color)}.sc-ix-group-h .group-header.sc-ix-group{height:4rem;min-height:4rem;max-height:4rem;border-radius:var(--theme-group--border-radius) var(--theme-group--border-radius) 0 0;display:flex;background-color:var(--theme-group-item--background);color:var(--theme-group-header--color);cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):hover.selected{background-color:var(--theme-group-item--background--selected)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):active{background-color:var(--theme-group-item--background--active)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):active.selected{background-color:var(--theme-group-item--background--selected)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):focus-visible{border:1px solid var(--theme-color-focus-bdr);border-radius:var(--theme-default-border-radius) var(--theme-default-border-radius) 0px 0px;outline:none}.sc-ix-group-h .group-header.selected.sc-ix-group{background-color:var(--theme-group-item--background--selected)}.sc-ix-group-h .group-header.selected.sc-ix-group .group-header-selection-indicator.sc-ix-group{background-color:var(--theme-group-item-indicator--background--selected)}.sc-ix-group-h .group-header.sc-ix-group .group-header-selection-indicator.sc-ix-group{background-color:var(--theme-color-input--focus)}.sc-ix-group-h .group-header.sc-ix-group .group-header-selection-indicator.group-header-selection-indicator-item-selected.sc-ix-group{background-color:var(--theme-group-item-indicator--background--selected)}.sc-ix-group-h .group-header-clickable.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}.sc-ix-group-h .group-header-selection-indicator.sc-ix-group{width:0.25rem;border-top-left-radius:var(--theme-group--border-radius)}.sc-ix-group-h .group-header-content.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;padding:0.5rem;padding-left:0}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-props-container.sc-ix-group{width:100%}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-title.sc-ix-group{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-title.sc-ix-group>*.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.sc-ix-group-h .group-header-content.sc-ix-group .group-subheader.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}.sc-ix-group-h .expand-icon.sc-ix-group{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}.sc-ix-group-h .btn-expand-header.sc-ix-group{margin:0.5rem;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem;min-width:1.5rem}.sc-ix-group-h .group-content.sc-ix-group{display:flex;flex-direction:column}.sc-ix-group-h .footer.sc-ix-group{height:auto;min-height:0}.sc-ix-group-h .hidden.sc-ix-group{display:none}";
const Group = class {
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-dropdown-item"));
  }
  get groupItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-group-item:not(.footer)"));
  }
  get groupContent() {
    return this.hostElement.querySelector(".group-content");
  }
  get footer() {
    return this.hostElement.querySelector(".footer");
  }
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
  }
  async onKeyDown(event) {
    const targetElement = event.target;
    if (!this.hostElement.contains(targetElement)) {
      return;
    }
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      if (targetElement.classList.contains("group-header")) {
        if (this.suppressHeaderSelection) {
          this.collapsed = !this.collapsed;
        } else {
          this.selected = !this.selected;
        }
      } else if (targetElement.matches("ix-group-item")) {
        const groupItem = targetElement;
        groupItem.selected = !groupItem.selected;
      }
    }
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
  componentWillRender() {
    var _a;
    this.groupItems.forEach((item, index) => {
      var _a2;
      if (this.selected === true) {
        item.selected = false;
        this.index = void 0;
        this.itemSelected = false;
        return;
      }
      item.selected = index === this.index;
      item.index = index;
      item.classList.remove("last");
      if (!((_a2 = this.footer) === null || _a2 === void 0 ? void 0 : _a2.children.length) && index === this.slotSize - 1) {
        item.classList.add("last");
      }
    });
    if (((_a = this.footer) === null || _a === void 0 ? void 0 : _a.childElementCount) > 1) {
      this.groupContent.appendChild(this.footer);
    }
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
    return h(Host, null, h("div", { class: {
      "group-header": true,
      expand: !this.collapsed,
      selected: this.selected
    }, tabindex: "0" }, h("div", { class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { class: "btn-expand-header" }, h("ix-icon", { class: {
      hidden: this.slotSize === 0
    }, name: `chevron-${this.collapsed ? "right" : "down"}-small`, onClick: (e) => this.onExpandClick(e) })), h("div", { class: "group-header-content" }, this.header ? h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { name: "header" }))), h("ix-group-context-menu", null, h("slot", { name: "dropdown" }))), h("div", { class: {
      "group-content": true,
      "d-none": this.collapsed
    } }, h("slot", null)), h("div", { class: "d-none" }, h("ix-group-item", { class: "footer last", suppressSelection: true, focusable: false }, h("slot", { name: "footer" }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
Group.style = groupCss;
const groupDropdownItemCss = ".sc-ix-group-dropdown-item-h{display:contents}";
const GroupDropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.label = void 0;
    this.icon = void 0;
  }
  render() {
    return h(Host, null, h("ix-dropdown-item", { label: this.label, icon: this.icon }, h("slot", null)));
  }
};
GroupDropdownItem.style = groupDropdownItemCss;
const groupItemCss = ".sc-ix-group-item-h{display:flex;min-height:2.25rem;height:2.25rem;align-items:center;justify-content:space-between;padding:0.5rem 1.5rem 0.5rem 2.5rem;position:relative;margin-top:0.0625rem;outline:none;background-color:var(--theme-group-item--background)}.last.sc-ix-group-item-h{border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem}.sc-ix-group-item-h ix-icon.sc-ix-group-item{margin-right:0.25rem;margin-top:-0.125rem}.sc-ix-group-item-h .group-entry-selection-indicator.sc-ix-group-item{position:absolute;left:0;height:100%;width:0.25rem}.sc-ix-group-item-h .group-entry-text.sc-ix-group-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text);font-size:0.875rem}.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item,.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item span.sc-ix-group-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover);border-color:var(--theme-group-item--border-color--hover)}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):hover.selected{background-color:var(--theme-group-item--background--selected)}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):active{background-color:var(--theme-group-item--background--active);border-color:var(--theme-group-item--border-color--active)}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):active.selected{background-color:var(--theme-group-item--background--selected)}.selected.sc-ix-group-item-h{border-top-width:0.062rem !important;background-color:var(--theme-group-item--background--selected)}.selected.sc-ix-group-item-h .group-entry-selection-indicator.sc-ix-group-item{background-color:var(--theme-group-item-indicator--background--selected)}.sc-ix-group-item-h:not(.disabled):not(:disabled):focus-visible{border:1px solid var(--theme-color-focus-bdr) !important}";
const GroupItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
    this.icon = void 0;
    this.text = void 0;
    this.secondaryText = void 0;
    this.suppressSelection = false;
    this.selected = void 0;
    this.focusable = true;
    this.index = void 0;
  }
  clickListen() {
    if (this.suppressSelection) {
      return;
    }
    this.selectedChanged.emit(this.hostElement);
  }
  render() {
    return h(Host, { class: {
      selected: this.selected && !this.suppressSelection,
      "suppress-selection": this.suppressSelection
    }, tabindex: this.focusable ? 0 : -1 }, h("div", { class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text)) : null, this.secondaryText ? h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText)) : null, h("slot", null));
  }
  get hostElement() {
    return getElement(this);
  }
};
GroupItem.style = groupItemCss;
export {
  Group as ix_group,
  GroupDropdownItem as ix_group_dropdown_item,
  GroupItem as ix_group_item
};
