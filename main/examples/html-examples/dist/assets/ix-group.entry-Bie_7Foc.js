import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { G as iconChevronUpSmall, t as iconChevronDownSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const groupCss = () => `@charset "UTF-8";:host{--ix-group-header--border-color--focus:var(--si-sys-color-effects-focus);--ix-group-expand-icon--color:var(--si-sys-color-text-primary);--ix-group-header-selection-indicator--background:rgba(0, 0, 0, 0);--ix-group-header--color:var(--si-sys-color-text-primary);--ix-group-item--background:var(--si-sys-color-background-1);--ix-group-item--background--active:var(--si-sys-color-background-selected);--ix-group-item--background--hover:var(--si-sys-color-background-hover);--ix-group-item--background--selected:var(--si-sys-color-background-selected);--ix-group-item--border-color:rgba(0, 0, 0, 0);--ix-group-item-indicator--background--selected:var(--si-sys-color-background-accent-hover);--ix-group-subheader--color:var(--si-sys-color-text-primary)}:host{--ix-group-header--font:var(--si-sys-typography-h4);--ix-group-header--border-radius--focus:var(--si-sys-sizing-border-radius-sm);--ix-group--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-group-subheader--font:var(--si-sys-typography-body-paragraph);--ix-group-context-menu--height:var(--si-sys-sizing-size-80);--ix-group-context-menu--width:var(--si-sys-sizing-size-80);--ix-group-context-menu--margin-block-start:calc(     var(--si-sys-sizing-spacing-y-20) + var(--si-sys-sizing-border-width-default)   );--ix-group-context-menu--margin-inline-end:calc(     var(--si-sys-sizing-spacing-x-20) + var(--si-sys-sizing-border-width-default)   );--ix-group--header-height:var(--si-sys-sizing-size-110);--ix-group--width:calc(     var(--si-sys-sizing-size-170) - var(--si-sys-sizing-spacing-x-20)   );--ix-group--min-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-90)   );--ix-group-header-selection-indicator--width:var(--si-sys-sizing-spacing-x-20);--ix-group-header-content--padding:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-group-header-title--height:var(--si-sys-sizing-size-70);--ix-group-subheader--height:var(--si-sys-sizing-size-60);--ix-group-expand-icon--padding:var(--si-sys-sizing-spacing-y-10) calc(var(--si-sys-sizing-spacing-x-60) *         0.437);--ix-group-button-expand-header--margin:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-group-button-expand-header--margin-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-group-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-group-content--gap:calc(var(--si-sys-sizing-spacing-y-10) / 2);--ix-group-content--margin-top:calc(var(--si-sys-sizing-spacing-y-10) / 2)}:host{display:flex;flex-direction:column;position:relative;width:var(--ix-group--width);min-width:var(--ix-group--min-width);border-color:var(--ix-group-item--border-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header{height:var(--ix-group--header-height);min-height:var(--ix-group--header-height);max-height:var(--ix-group--header-height);border-radius:var(--ix-group--border-radius) var(--ix-group--border-radius) 0 0;display:flex;background-color:var(--ix-group-item--background);color:var(--ix-group-header--color)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):hover,:host .group-header:not(.disabled):not(:disabled).hover{background-color:var(--ix-group-item--background--hover)}:host .group-header:not(.disabled):not(:disabled):hover.selected,:host .group-header:not(.disabled):not(:disabled).hover.selected{background-color:var(--ix-group-item--background--selected)}:host .group-header:not(.disabled):not(:disabled){cursor:pointer}:host .group-header:not(.disabled):not(:disabled):active,:host .group-header:not(.disabled):not(:disabled).active{background-color:var(--ix-group-item--background--active)}:host .group-header:not(.disabled):not(:disabled):active.selected,:host .group-header:not(.disabled):not(:disabled).active.selected{background-color:var(--ix-group-item--background--selected)}:host .group-header.selected{background-color:var(--ix-group-item--background--selected)}:host .group-header.selected .group-header-selection-indicator{background-color:var(--ix-group-item-indicator--background--selected)}:host .group-header .group-header-selection-indicator{background-color:var(--ix-group-header-selection-indicator--background)}:host .group-header .group-header-selection-indicator.group-header-selection-indicator-item-selected{background-color:var(--ix-group-item-indicator--background--selected)}:host .group-header-clickable{display:flex;width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-actions{display:flex;flex:1;min-width:0}:host .group-header-selection-indicator{width:var(--ix-group-header-selection-indicator--width);border-top-left-radius:var(--ix-group--border-radius)}:host .group-header-select-area{position:relative;display:flex;flex:1;min-width:0}:host .group-header-select-area--static{cursor:pointer}:host .group-header-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;inset:0;z-index:1;margin:0;padding:0;border:none;background:transparent;cursor:pointer}:host .group-header-select:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--ix-group-header--border-color--focus);outline-offset:-1px}:host .group-header-content{display:flex;flex-direction:row;justify-content:space-between;min-width:0;flex-grow:1;flex-basis:0;padding:var(--ix-group-header-content--padding);padding-left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-header-props-container{width:100%}:host .group-header-content .group-header-title{display:flex;align-items:center;font:var(--ix-group-header--font);height:var(--ix-group-header-title--height)}:host .group-header-content .group-header-title>*{min-width:0;padding-right:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-header-content .group-subheader{height:var(--ix-group-subheader--height);font:var(--ix-group-subheader--font);color:var(--ix-group-subheader--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .expand-icon{padding:var(--ix-group-expand-icon--padding);color:var(--ix-group-expand-icon--color)}:host .btn-expand-header{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;align-items:flex-start;align-self:flex-start;order:-1;margin:var(--ix-group-button-expand-header--margin);margin-inline-end:var(--ix-group-button-expand-header--margin-inline-end);padding:0;border:none;background:transparent;color:inherit;line-height:0;cursor:pointer;border-radius:var(--ix-group-header--border-radius--focus)}:host .btn-expand-header ix-icon:not([size]){block-size:var(--ix-group-icon--icon-size);inline-size:var(--ix-group-icon--icon-size);min-block-size:var(--ix-group-icon--icon-size);min-inline-size:var(--ix-group-icon--icon-size)}:host .btn-expand-header:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--ix-group-header--border-color--focus);outline-offset:-1px}:host .group-content{display:flex;flex-direction:column;gap:var(--ix-group-content--gap);margin-top:var(--ix-group-content--margin-top)}:host .footer{visibility:collapse;height:auto;min-height:0}:host .footer-visible{visibility:visible}:host .hidden{display:none}`;
const Group = class extends Mixin(...DefaultMixins, ComponentIdMixin) {
  constructor(hostRef) {
    super();
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
   * ARIA label for the header select button.
   * Falls back to **header** when unset.
   *
   * @since 6.0.0
   */
  ariaLabelSelect;
  /**
   * ARIA label for the expand disclosure button.
   * Falls back to **header** when unset.
   * Expanded/collapsed state comes from **aria-expanded**.
   *
   * @since 6.0.0
   */
  ariaLabelExpand;
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
  expandButtonEl;
  skipEscapeCollapse = false;
  get contentId() {
    return `${this.getHostElementId()}-content`;
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
    return this.hostElement.shadowRoot?.querySelector(".group-content");
  }
  toggleExpanded(event) {
    const oldExpanded = this.expanded;
    this.expanded = !this.expanded;
    const { defaultPrevented } = this.expandedChanged.emit(this.expanded);
    event?.stopPropagation();
    if (defaultPrevented) {
      this.expanded = oldExpanded;
    }
  }
  collapseAndFocusExpand() {
    if (!this.expanded) {
      return;
    }
    const oldExpanded = this.expanded;
    this.expanded = false;
    const { defaultPrevented } = this.expandedChanged.emit(this.expanded);
    if (defaultPrevented) {
      this.expanded = oldExpanded;
      return;
    }
    if (this.showExpandCollapsedIcon) {
      this.expandButtonEl?.focus();
    }
  }
  isGroupDropdownOpen() {
    const dropdown = this.hostElement.querySelector("ix-dropdown");
    return !!dropdown?.show;
  }
  onExpandClick(event) {
    this.toggleExpanded(event);
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
  onDefaultSlotChange() {
    const slot = this.hostElement.shadowRoot?.querySelector("slot:not([name])");
    this.showExpandCollapsedIcon = hasSlottedElements(slot);
  }
  componentWillRender() {
    this.groupItems.forEach((item, index) => {
      item.selected = index === this.index;
      item.index = index;
    });
    this.checkDropdownSlot();
  }
  componentDidLoad() {
    super.componentDidLoad?.();
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
    this.onDefaultSlotChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback?.();
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
  /**
   * Capture before dropdown trigger closes the menu on Escape (bubble),
   * so we can skip collapsing on the same key press.
   * `@Listen` re-binds on connect/disconnect (unlike `componentDidLoad`).
   */
  onKeyDownCapture(event) {
    if (event.key !== "Escape") {
      return;
    }
    this.skipEscapeCollapse = this.expanded && this.isGroupDropdownOpen();
  }
  onKeyDown(event) {
    if (event.key !== "Escape") {
      return;
    }
    const skip = this.skipEscapeCollapse;
    this.skipEscapeCollapse = false;
    if (!this.expanded || event.defaultPrevented || skip || this.isGroupDropdownOpen()) {
      return;
    }
    event.preventDefault();
    this.collapseAndFocusExpand();
  }
  renderHeaderContent(options) {
    return h("div", { class: "group-header-content", id: options?.contentId }, this.header ? h("div", { class: "group-header-props-container", "aria-hidden": options?.ariaHidden ? "true" : void 0 }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader)) : null, h("slot", { name: "header" }));
  }
  renderHeaderSelect() {
    const headerContentId = `${this.getHostElementId()}-header-content`;
    const selectLabel = this.ariaLabelSelect || this.header || void 0;
    if (this.suppressHeaderSelection) {
      return h("div", { class: "group-header-select-area group-header-select-area--static", onClick: (e) => this.onHeaderClick(e) }, this.renderHeaderContent());
    }
    return h("div", { class: "group-header-select-area" }, h("button", { type: "button", class: "group-header-select", "aria-pressed": a11yBoolean(this.selected), "aria-label": selectLabel, "aria-labelledby": selectLabel ? void 0 : headerContentId, onClick: (e) => this.onHeaderClick(e) }), this.renderHeaderContent({
      contentId: headerContentId,
      ariaHidden: !!selectLabel
    }));
  }
  renderExpandButton() {
    return h("button", { type: "button", class: {
      "btn-expand-header": true,
      hidden: !this.showExpandCollapsedIcon
    }, "data-testid": "expand-collapsed-button", "aria-expanded": a11yBoolean(this.expanded), "aria-controls": this.contentId, "aria-label": this.ariaLabelExpand || this.header || void 0, ref: (el) => this.expandButtonEl = el, onClick: (event) => this.onExpandClick(event) }, h("ix-icon", { "data-testid": "expand-collapsed-icon", "aria-hidden": "true", name: this.expanded ? iconChevronUpSmall : iconChevronDownSmall }));
  }
  render() {
    return h(Host, { key: "51747064213fce337992b941581a2dedbf8e47a1", onKeyDown: (event) => this.onKeyDown(event) }, h("div", { key: "6812b13cfe7dd23936411d41c76a71aabe5429d0", class: {
      "group-header": true,
      expand: this.expanded,
      selected: this.selected
    } }, h("div", { key: "2e7d0a2026339f15d98c2252205ce44cff4fcdcb", class: "group-header-clickable" }, h("div", { key: "70069349539be9c20c264f4e1da2294027b0552d", class: {
      "group-header-selection-indicator": true,
      "group-header-selection-indicator-item-selected": this.itemSelected
    } }), h("div", { key: "b457c91e51fe03ca769cc453e6dc04f8d5f6f858", class: "group-header-actions" }, this.renderHeaderSelect(), this.renderExpandButton())), this.hasDropdown && h("ix-group-context-menu", { key: "20dba82d0a637ab406c57d436d558bd54e9cc8db" }, h("slot", { key: "de3ae663de26a3e32ecb5bac67e44904991b8fe6", name: "dropdown" }))), h("div", { key: "0e9fa1dcc77ed6418e16eb96731ef5af272d17ff", id: this.contentId, class: {
      "group-content": true
    } }, h("div", { key: "5d066882825b6646d30e7f24936586905509852d", style: {
      display: this.expanded ? "contents" : "none"
    } }, h("slot", { key: "f97fcf88d924feb7209f9f03f0130097a7fea552", onSlotchange: () => this.onDefaultSlotChange() }), h("ix-group-item", { key: "5669b9bf3061e46bf38004dc5658a94d01e5b453", class: {
      footer: true,
      "footer-visible": this.footerVisible
    }, groupFooter: true, suppressSelection: true }, h("slot", { key: "e4c260d3c6246646307caacd0e3e18dfca24bf3c", name: "footer", onSlotchange: () => this.onSlotChange() })))));
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
