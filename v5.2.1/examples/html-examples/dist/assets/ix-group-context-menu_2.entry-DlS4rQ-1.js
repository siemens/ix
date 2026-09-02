import { r as registerInstance, g as getElement, h, H as Host, c as createEvent } from "./global-Do6maBom.js";
import { X as iconContextMenu } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { b as getSlottedElements } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const groupContextMenuCss = () => `:host{display:block;position:relative;height:2rem;width:2rem;margin-block-start:0.3125rem;margin-inline-end:0.3125rem;margin-inline-start:auto}:host .hide{visibility:collapse}:host ::slotted(ix-dropdown){cursor:default}`;
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
  }
  render() {
    return h(Host, { key: "5de3f5daa321f3fb05722cd017cf4c9dbf63fdb0" }, h("ix-icon-button", { key: "e40c8ca6f7537d48b1920600cd8ca1351909af5e", class: {
      hide: !this.showContextMenu,
      active: this.dropdownShow
    }, size: "24", variant: "subtle-tertiary", icon: iconContextMenu, "aria-expanded": a11yBoolean(this.dropdownShow), "aria-haspopup": "true" }), h("slot", { key: "047b712720def30a60dc5b0dc266fb2c3ccfcc1f", onSlotchange: () => this.onSlotChange() }));
  }
};
GroupContextMenu.style = groupContextMenuCss();
const groupItemCss = () => `@charset "UTF-8";:host{--ix-group-item--color:var(--si-sys-text-primary);--ix-group-item--border-color--focus:var(--si-sys-effects-focus);--ix-group-item-subtitle--color:var(--si-sys-text-secondary);--ix-group-item--background--selected:var(--si-sys-background-active);--ix-group-item--background--selected-hover:var(--si-sys-background-hover);--ix-group-item--background--selected-active:var(--si-sys-background-active);--ix-group-item--color--disabled:var(--si-sys-text-disabled);--ix-group-item--background:var(--si-sys-background-1);--ix-group-item--border-color--active:rgba(0, 0, 0, 0);--ix-group-item--border-color--hover:rgba(0, 0, 0, 0);--ix-group-item-indicator--background--selected:var(--si-sys-background-accent-hover)}:host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host>button,:host>.group-footer{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--ix-group-item--background);border:1px solid transparent;color:var(--ix-group-item--color);cursor:pointer;padding-left:2.5rem}:host>button:focus-visible,:host>.group-footer:focus-visible{border:1px solid var(--ix-group-item--border-color--focus)}:host>button:disabled,:host>.group-footer:disabled{cursor:default;pointer-events:none}:host .group-footer{cursor:default;border:none}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--ix-group-item-subtitle--color)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--ix-group-item--background--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--ix-group-item-indicator--background--selected)}:host(:not(.suppress-mouse-states):hover){background-color:var(--ix-group-item--background--selected-hover);border-color:var(--ix-group-item--border-color--hover)}:host(:not(.suppress-mouse-states).selected:hover){background-color:var(--ix-group-item--background--selected-hover)}:host(:not(.suppress-mouse-states):active):not(.suppress-mouse-states){background-color:var(--ix-group-item--background--selected-active);border-color:var(--ix-group-item--border-color--active)}:host(:not(.suppress-mouse-states).selected:active):not(.suppress-mouse-states){background-color:var(--ix-group-item--background--selected-active)}:host([disabled]){pointer-events:none;color:var(--ix-group-item--color--disabled)}`;
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
    } }, h("button", { tabindex: this.disabled ? -1 : 0, disabled: this.disabled }, h("div", { class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon, "aria-label": this.ariaLabelIcon }) : null, this.text ? h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text)) : null, this.secondaryText ? h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText)) : null, h("slot", null)));
  }
};
GroupItem.style = groupItemCss();
export {
  GroupContextMenu as ix_group_context_menu,
  GroupItem as ix_group_item
};
