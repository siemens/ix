import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-EB1NlL0D.js";
import { y as iconChevronRightSmall } from "./index-Bj5Kmzp6-B1fOSLOf.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
const treeItemCss = () => `@charset "UTF-8";:host{--ix-tree-item--background--active:var(--si-sys-color-background-selected);--ix-tree-item--background--hover:var(--si-sys-color-background-hover);--ix-tree-item--background--selected:var(--si-sys-color-background-selected);--ix-tree-item--background--selected-active:var(--si-sys-color-background-selected);--ix-tree-item--background--selected-hover:var(--si-sys-color-background-hover)}:host{--ix-tree-item-expand-icon--transition-duration:var(--theme-default-time);--ix-tree-item--height:var(--si-sys-sizing-size-80);--ix-tree-item-tree-node-container--height:var(--si-sys-sizing-size-80);--ix-tree-item-icon-toggle-container--icon-size:var(--si-sys-sizing-size-80);--ix-tree-item--outline-color--focus:var(--si-sys-color-effects-focus);--ix-tree-item--opacity:0.5}:host{display:flex;align-items:center;height:var(--ix-tree-item--height);width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tree-node-container{display:flex;align-items:center;height:var(--ix-tree-item-tree-node-container--height);flex-grow:1;align-items:center;outline:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .tree-node-container:focus-visible{outline:1px solid var(--ix-tree-item--outline-color--focus);outline-offset:-1px}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:var(--ix-tree-item-icon-toggle-container--icon-size);height:var(--ix-tree-item-icon-toggle-container--icon-size);min-width:var(--ix-tree-item-icon-toggle-container--icon-size)}:host .icon-toggle-container .icon-toggle{display:flex;outline:none}:host .icon-toggle-container .icon-toggle:focus-visible{outline:1px solid var(--ix-tree-item--outline-color--focus);outline-offset:-1px}:host .icon-toggle-container .icon-toggle ix-icon{transition:transform var(--ix-tree-item-expand-icon--transition-duration) ease-in-out}:host .icon-toggle-container .icon-toggle ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(.selected).hover),:host(:not(.disabled):not(.selected):hover){background-color:var(--ix-tree-item--background--hover)}:host(:not(.disabled):not(.selected).active),:host(:not(.disabled):not(.selected):active){background-color:var(--ix-tree-item--background--active)}:host(.selected){background-color:var(--ix-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--ix-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--ix-tree-item--background--selected-active)}:host(.disabled){opacity:var(--ix-tree-item--opacity);pointer-events:none}:host(:focus-visible){outline:1px solid var(--ix-tree-item--outline-color--focus);outline-offset:-1px}`;
const TreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Text
   */
  text;
  /**
   * Has tree item children
   */
  hasChildren = false;
  /**
   * Context
   */
  context;
  /**
   * Disable selection and expansion while keeping the tree item focusable.
   *
   * @since 5.0.0
   */
  disabled = false;
  /**
   * ARIA label for the expand/collapse button
   */
  ariaLabelChevronIcon;
  /**
   * ARIA label for the expand control when the tree item is collapsed.
   *
   * @since 6.0.0
   */
  ariaLabelTreeCollapsed = "Expand tree item";
  /**
   * ARIA label for the collapse control when the tree item is expanded.
   *
   * @since 6.0.0
   */
  ariaLabelTreeExpanded = "Collapse tree item";
  navigationTabIndex = 0;
  componentWillLoad() {
    this.navigationTabIndex = this.hostElement.dataset.treeNavigationTabIndex === "-1" ? -1 : 0;
  }
  onNavigationIndex(event) {
    this.navigationTabIndex = event.detail;
  }
  /**
   * Expand/Collapsed toggled
   */
  toggle;
  /**
   * Click on item not on the expand/collapse icon
   */
  itemClick;
  onToggle(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled || this.context?.isDisabled) {
      return;
    }
    this.toggle.emit();
  }
  render() {
    const isDisabled = this.disabled || this.context?.isDisabled;
    const isManagedTree = !!this.hostElement.closest("ix-tree");
    return h(Host, { key: "a4d8fba511758dbc8bf37029aed63fdfd8a081e7", role: "treeitem", "aria-disabled": a11yBoolean(!!isDisabled), tabIndex: this.navigationTabIndex, "aria-selected": a11yBoolean(!!this.context?.isSelected), "aria-expanded": this.hasChildren ? a11yBoolean(!!this.context?.isExpanded) : void 0, class: {
      selected: !!this.context?.isSelected,
      disabled: !!isDisabled
    }, onKeyDown: (event) => {
      if (event.composedPath()[0] !== this.hostElement || event.key !== " " && event.key !== "Enter") {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      if (isDisabled) {
        return;
      }
      this.hostElement.shadowRoot?.querySelector(".tree-node-container")?.click();
    } }, h("div", { key: "8b79e4d10825b17b9058a64778b1150e8eee90b3", class: "icon-toggle-container" }, this.hasChildren ? h("span", { class: "icon-toggle", role: "button", tabIndex: isDisabled || isManagedTree || this.navigationTabIndex < 0 ? -1 : 0, "aria-disabled": a11yBoolean(!!isDisabled), "aria-expanded": a11yBoolean(!!this.context?.isExpanded), "aria-label": this.ariaLabelChevronIcon ?? (this.context?.isExpanded ? this.ariaLabelTreeExpanded : this.ariaLabelTreeCollapsed), onClick: (event) => this.onToggle(event), onKeyDown: (event) => {
      if (event.key === " " || event.key === "Enter") {
        this.onToggle(event);
      }
    } }, h("ix-icon", { name: iconChevronRightSmall, size: "24", class: {
      "icon-toggle-down": !!this.context?.isExpanded
    }, color: "color-std-text", "aria-hidden": "true" })) : null), h("div", { key: "9368751a88f3a04d1c2dfee016eebca1ec9fef32", class: "tree-node-container", role: "button", tabIndex: isDisabled ? -1 : isManagedTree ? -1 : this.navigationTabIndex, "aria-disabled": a11yBoolean(!!isDisabled), onKeyDown: (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        if (isDisabled) {
          return;
        }
        e.currentTarget.click();
      }
    }, onClick: () => {
      if (isDisabled) {
        return;
      }
      this.itemClick.emit();
    } }, h("div", { key: "5559c477871d64c705cca34130ae5e645cc3d086", class: "tree-node-text" }, this.text), h("slot", { key: "9701b743bee40ade63d4131b9842c86fcdb51ff7" })));
  }
};
TreeItem.style = treeItemCss();
export {
  TreeItem as ix_tree_item
};
