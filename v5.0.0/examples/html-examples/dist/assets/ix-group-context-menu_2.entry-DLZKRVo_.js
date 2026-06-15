import { a as registerInstance, g as getElement, h, H as Host, c as createEvent } from "./global-B8nXsUf-.js";
import { b as getSlottedElements } from "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
import { u as iconContextMenu } from "./index-DgUGsIlh-FNhczk6p.js";
const groupContextMenuCss = () => `:host{display:block;position:relative;height:2rem;width:2rem;margin-block-start:0.3125rem;margin-inline-end:0.3125rem;margin-inline-start:auto}:host .hide{visibility:collapse}:host ::slotted(ix-dropdown){cursor:default}`;
const GroupContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  showContextMenu = false;
  getTrigger() {
    return this.hostElement;
  }
  configureDropdown(dropdownElement, triggerElement) {
    dropdownElement.positioningStrategy = "fixed";
    dropdownElement.trigger = triggerElement;
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
    if (!triggerElement) {
      return;
    }
    if (!dropdownElement) {
      return;
    }
    this.configureDropdown(dropdownElement, triggerElement);
  }
  render() {
    return h(Host, { key: "3440dd5a4f2bab1b2c3448f5fcec00770892ab01" }, h("ix-icon-button", { key: "ba6c8170bed28cb7060dc70fa457dfa41ec19e6c", class: { hide: !this.showContextMenu }, size: "24", variant: "subtle-tertiary", icon: iconContextMenu }), h("slot", { key: "217eae86a7748599fa9a5cab3e76fa27710e6c66", onSlotchange: () => this.onSlotChange() }));
  }
};
GroupContextMenu.style = groupContextMenuCss();
const groupItemCss = () => `:host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host>button,:host>.group-footer{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--theme-group-item--background);border:1px solid transparent;color:var(--theme-color-std-text);cursor:pointer;padding-left:2.5rem}:host>button:focus-visible,:host>.group-footer:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host>button:disabled,:host>.group-footer:disabled{cursor:default;pointer-events:none}:host .group-footer{cursor:default;border:none}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--theme-color-ghost--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host(:not(.suppress-mouse-states):hover){background-color:var(--theme-color-ghost--selected-hover);border-color:var(--theme-group-item--border-color--hover)}:host(:not(.suppress-mouse-states).selected:hover){background-color:var(--theme-color-ghost--selected-hover)}:host(:not(.suppress-mouse-states):active):not(.suppress-mouse-states){background-color:var(--theme-color-ghost--selected-active);border-color:var(--theme-group-item--border-color--active)}:host(:not(.suppress-mouse-states).selected:active):not(.suppress-mouse-states){background-color:var(--theme-color-ghost--selected-active)}:host([disabled]){pointer-events:none;color:var(--theme-color-weak-text)}`;
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
