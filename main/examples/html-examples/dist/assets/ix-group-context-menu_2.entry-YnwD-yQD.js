import { r as registerInstance, g as getElement, h, H as Host, c as createEvent } from "./global-CU4RCWGK.js";
import { X as iconContextMenu } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { b as getSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const groupContextMenuCss = () => `@charset "UTF-8";:host{--ix-group-header--border-color--focus:var(--si-sys-color-effects-focus);--ix-group-expand-icon--color:var(--si-sys-color-text-primary);--ix-group-header-selection-indicator--background:rgba(0, 0, 0, 0);--ix-group-header--color:var(--si-sys-color-text-primary);--ix-group-item--background:var(--si-sys-color-background-1);--ix-group-item--background--active:var(--si-sys-color-background-selected);--ix-group-item--background--hover:var(--si-sys-color-background-hover);--ix-group-item--background--selected:var(--si-sys-color-background-selected);--ix-group-item--border-color:rgba(0, 0, 0, 0);--ix-group-item-indicator--background--selected:var(--si-sys-color-background-accent-hover);--ix-group-subheader--color:var(--si-sys-color-text-primary)}:host{--ix-group-header--font:var(--si-sys-typography-h4);--ix-group-header--border-radius--focus:var(--si-sys-sizing-border-radius-sm);--ix-group--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-group-subheader--font:var(--si-sys-typography-body-paragraph);--ix-group-context-menu--height:var(--si-sys-sizing-size-80);--ix-group-context-menu--width:var(--si-sys-sizing-size-80);--ix-group-context-menu--margin-block-start:calc(     var(--si-sys-sizing-spacing-y-20) + var(--si-sys-sizing-border-width-default)   );--ix-group-context-menu--margin-inline-end:calc(     var(--si-sys-sizing-spacing-x-20) + var(--si-sys-sizing-border-width-default)   );--ix-group--header-height:var(--si-sys-sizing-size-110);--ix-group--width:calc(     var(--si-sys-sizing-size-170) - var(--si-sys-sizing-spacing-x-20)   );--ix-group--min-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-90)   );--ix-group-header-selection-indicator--width:var(--si-sys-sizing-spacing-x-20);--ix-group-header-content--padding:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-group-header-title--height:var(--si-sys-sizing-size-70);--ix-group-subheader--height:var(--si-sys-sizing-size-60);--ix-group-expand-icon--padding:var(--si-sys-sizing-spacing-y-10) calc(var(--si-sys-sizing-spacing-x-60) *         0.437);--ix-group-button-expand-header--margin:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-group-button-expand-header--margin-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-group-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-group-content--gap:calc(var(--si-sys-sizing-spacing-y-10) / 2);--ix-group-content--margin-top:calc(var(--si-sys-sizing-spacing-y-10) / 2)}:host{display:block;position:relative;height:var(--ix-group-context-menu--height);width:var(--ix-group-context-menu--width);margin-block-start:var(--ix-group-context-menu--margin-block-start);margin-inline-end:var(--ix-group-context-menu--margin-inline-end);margin-inline-start:auto}:host .hide{visibility:collapse}:host ::slotted(ix-dropdown){cursor:default}`;
const GroupContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  showContextMenu = false;
  dropdownShow = false;
  dropdownElement;
  getTrigger() {
    return this.hostElement;
  }
  onDropdownShowChanged = (event) => {
    this.dropdownShow = event.detail;
  };
  unbindDropdown() {
    this.dropdownElement?.removeEventListener("showChanged", this.onDropdownShowChanged);
    this.dropdownElement = void 0;
  }
  configureDropdown(dropdownElement, triggerElement) {
    if (this.dropdownElement !== dropdownElement) {
      this.unbindDropdown();
      dropdownElement.addEventListener("showChanged", this.onDropdownShowChanged);
      this.dropdownElement = dropdownElement;
    }
    this.dropdownShow = dropdownElement.show;
    dropdownElement.positioningStrategy = "fixed";
    dropdownElement.trigger = triggerElement;
  }
  disconnectedCallback() {
    this.unbindDropdown();
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
    const dropdownElement = elements.find((elm) => elm.tagName === "IX-DROPDOWN");
    const triggerElement = this.getTrigger();
    if (!triggerElement || !dropdownElement) {
      this.unbindDropdown();
      this.dropdownShow = false;
      return;
    }
    this.configureDropdown(dropdownElement, triggerElement);
    dropdownElement.hostRole = "menu";
  }
  render() {
    return h(Host, { key: "85e176a22ccde929be4d492687fa6e249edf8947" }, h("ix-icon-button", { key: "72f3d9716e964c12672f242090b4296b3283d813", class: {
      hide: !this.showContextMenu,
      active: this.dropdownShow
    }, variant: "subtle-tertiary", icon: iconContextMenu, "aria-expanded": a11yBoolean(this.dropdownShow), "aria-haspopup": "menu" }), h("slot", { key: "2f19652b764a70be89a478e4dd040fbcd20812e2", onSlotchange: () => this.onSlotChange() }));
  }
};
GroupContextMenu.style = groupContextMenuCss();
const groupItemCss = () => `@charset "UTF-8";:host{--ix-group-item--color:var(--si-sys-color-text-primary);--ix-group-item--border-color--focus:var(--si-sys-color-effects-focus);--ix-group-item-subtitle--color:var(--si-sys-color-text-secondary);--ix-group-item--background--selected:var(--si-sys-color-background-selected);--ix-group-item--background--selected-hover:var(--si-sys-color-background-hover);--ix-group-item--background--selected-active:var(--si-sys-color-background-selected);--ix-group-item--color--disabled:var(--si-sys-color-text-disabled);--ix-group-item--background:var(--si-sys-color-background-1);--ix-group-item--border-color--active:rgba(0, 0, 0, 0);--ix-group-item--border-color--hover:rgba(0, 0, 0, 0);--ix-group-item-indicator--background--selected:var(--si-sys-color-background-accent-hover)}:host{--ix-group-item--font:var(--si-sys-typography-body-paragraph);--ix-group-item--min-height:calc(     var(--si-sys-sizing-size-80) + var(--si-sys-sizing-spacing-y-20)   );--ix-group-item--height:calc(     var(--si-sys-sizing-size-80) + var(--si-sys-sizing-spacing-y-20)   );--ix-group-item-group-footer--padding-left:var(--si-sys-sizing-spacing-x-100);--ix-group-item-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-group-item-group-entry-selection-indicator--width:var(--si-sys-sizing-spacing-x-20);--ix-group-item--border-width--focus:var(--si-sys-sizing-border-width-default);--ix-group-item-group-footer--border-width:var(     --ix-group-item--border-width--focus   );--ix-group-item-icon--margin-top:calc(     var(--si-sys-sizing-spacing-y-10) * -1   );--ix-group-item--border-top-width:calc(     var(--si-sys-sizing-border-width-default) * 0.992   )}:host{display:flex;min-height:var(--ix-group-item--min-height);height:var(--ix-group-item--height)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host>button,:host>.group-footer{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--ix-group-item--background);border:var(--ix-group-item-group-footer--border-width) solid transparent;color:var(--ix-group-item--color);cursor:pointer;padding-left:var(--ix-group-item-group-footer--padding-left)}:host>button:focus-visible,:host>.group-footer:focus-visible{border:var(--ix-group-item--border-width--focus) solid var(--ix-group-item--border-color--focus)}:host>button:disabled,:host>.group-footer:disabled{cursor:default;pointer-events:none}:host .group-footer{cursor:default;border:none}:host ix-icon{margin-right:var(--ix-group-item-icon--margin-right);margin-top:var(--ix-group-item-icon--margin-top)}:host .group-entry-selection-indicator{position:absolute;left:calc(0px - var(--ix-group-item--border-width--focus));height:calc(100% + 2 * var(--ix-group-item--border-width--focus));width:var(--ix-group-item-group-entry-selection-indicator--width)}:host .group-entry-text{font:var(--ix-group-item--font);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--ix-group-item-subtitle--color)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{font:var(--ix-group-item--font);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:var(--ix-group-item--border-top-width) !important;background-color:var(--ix-group-item--background--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--ix-group-item-indicator--background--selected)}:host(:not(.suppress-mouse-states):hover){background-color:var(--ix-group-item--background--selected-hover);border-color:var(--ix-group-item--border-color--hover)}:host(:not(.suppress-mouse-states).selected:hover){background-color:var(--ix-group-item--background--selected-hover)}:host(:not(.suppress-mouse-states):active):not(.suppress-mouse-states){background-color:var(--ix-group-item--background--selected-active);border-color:var(--ix-group-item--border-color--active)}:host(:not(.suppress-mouse-states).selected:active):not(.suppress-mouse-states){background-color:var(--ix-group-item--background--selected-active)}:host([disabled]){pointer-events:none;color:var(--ix-group-item--color--disabled)}`;
const GroupItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Group item icon
   */
  icon;
  /**
   * ARIA label for the icon
   */
  ariaLabelIcon;
  /**
   * Group item text
   */
  text;
  /**
   * Group item secondary text
   */
  secondaryText;
  /**
   * Supress the selection of the group
   */
  suppressSelection = false;
  /**
   * @internal
   * Item represents the footer of the group
   */
  groupFooter = false;
  /**
   * Show selected state
   */
  selected = false;
  /**
   * Disable the group item.
   * The elements tabindex attribute will get set accordingly.
   *
   * If false tabindex will be 0, -1 otherwise.
   */
  disabled = false;
  /**
   * Selection changed
   */
  selectedChanged;
  /**
   * Index
   */
  index;
  clickListen() {
    if (this.suppressSelection || this.disabled) {
      return;
    }
    this.selectedChanged.emit(this.hostElement);
  }
  render() {
    if (this.groupFooter) {
      return h(Host, { class: "suppress-mouse-states" }, h("div", { class: "group-footer" }, h("slot", null)));
    }
    return h(Host, { class: {
      selected: this.selected && !this.suppressSelection
    } }, h("button", { tabindex: this.disabled ? -1 : 0, disabled: this.disabled, "aria-pressed": this.suppressSelection ? void 0 : a11yBoolean(this.selected) }, h("div", { class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, this.text ? h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text)) : null, this.secondaryText ? h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText)) : null, h("slot", null)));
  }
};
GroupItem.style = groupItemCss();
export {
  GroupContextMenu as ix_group_context_menu,
  GroupItem as ix_group_item
};
