import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { u as iconChevronRightSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
const treeItemCss = () => `@charset "UTF-8";:host{--ix-tree-item-expand-icon--transition-duration:var(--theme-default-time);--ix-tree-item--background--active:var(--si-sys-background-active);--ix-tree-item--background--hover:var(--si-sys-background-hover);--ix-tree-item--background--selected:var(--si-sys-background-active);--ix-tree-item--background--selected-active:var(--si-sys-background-active);--ix-tree-item--background--selected-hover:var(--si-sys-background-hover)}:host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tree-node-container{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;min-width:2rem}:host .icon-toggle-container ix-icon{transition:transform var(--ix-tree-item-expand-icon--transition-duration) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(.selected).hover),:host(:not(.disabled):not(.selected):hover){background-color:var(--ix-tree-item--background--hover)}:host(:not(.disabled):not(.selected).active),:host(:not(.disabled):not(.selected):active){background-color:var(--ix-tree-item--background--active)}:host(.selected){background-color:var(--ix-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--ix-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--ix-tree-item--background--selected-active)}:host(.disabled){opacity:0.5;pointer-events:none}`;
const TreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.itemClick = createEvent(this, "itemClick", 7);
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
   * Disable tree item
   *
   * @since 5.0.0
   */
  disabled = false;
  /**
   * ARIA label for the chevron icon
   */
  ariaLabelChevronIcon;
  /**
   * Expand/Collapsed toggled
   */
  toggle;
  /**
   * Click on item not on the expand/collapse icon
   */
  itemClick;
  render() {
    const isDisabled = this.disabled || this.context?.isDisabled;
    return h(Host, { key: "d7e478a40d7fc79767698cea3053f361ef8b430c", class: {
      selected: !!this.context?.isSelected,
      disabled: !!isDisabled
    } }, h("div", { key: "5ef78638e5e22efc8ac0b4260a160a1226b48e04", class: "icon-toggle-container" }, this.hasChildren ? h("ix-icon", { name: iconChevronRightSmall, size: "24", class: {
      ["icon-toggle-down"]: !!this.context?.isExpanded
    }, color: "--si-sys-text-primary", onClick: (e) => {
      if (isDisabled) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      this.toggle.emit();
    }, "aria-label": this.ariaLabelChevronIcon ?? (this.context?.isExpanded ? "Collapse tree item" : "Expand tree item") }) : null), h("div", { key: "1f643e23753f4ac5563f284c5b66b4d855bbb7c0", class: "tree-node-container", onClick: () => {
      if (isDisabled) {
        return;
      }
      this.itemClick.emit();
    } }, h("div", { key: "03afb00c38a4c95b6623af2c6f7fae67d7abaeb8", class: "tree-node-text" }, this.text), h("slot", { key: "8500ee10778ea71580dbfe0ad34061a77b3395f2" })));
  }
};
TreeItem.style = treeItemCss();
export {
  TreeItem as ix_tree_item
};
