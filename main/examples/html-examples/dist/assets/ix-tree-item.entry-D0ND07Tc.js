import { r as registerInstance, c as createEvent, h, H as Host } from "./global-43rhC1fd.js";
import { u as iconChevronRightSmall } from "./index-GHlVc4OJ-sCaZA1R3.js";
const treeItemCss = () => `@charset "UTF-8";:host{--ix-tree-item--background--active:var(--si-sys-color-background-selected);--ix-tree-item--background--hover:var(--si-sys-color-background-hover);--ix-tree-item--background--selected:var(--si-sys-color-background-selected);--ix-tree-item--background--selected-active:var(--si-sys-color-background-selected);--ix-tree-item--background--selected-hover:var(--si-sys-color-background-hover)}:host{--ix-tree-item-expand-icon--transition-duration:var(--theme-default-time);--ix-tree-item--height:var(--si-sys-sizing-size-80);--ix-tree-item-tree-node-container--height:var(--si-sys-sizing-size-80);--ix-tree-item-icon-toggle-container--icon-size:var(--si-sys-sizing-size-80);--ix-tree-item--opacity:0.5}:host{display:flex;align-items:center;height:var(--ix-tree-item--height);width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tree-node-container{display:flex;align-items:center;height:var(--ix-tree-item-tree-node-container--height);flex-grow:1;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:var(--ix-tree-item-icon-toggle-container--icon-size);height:var(--ix-tree-item-icon-toggle-container--icon-size);min-width:var(--ix-tree-item-icon-toggle-container--icon-size)}:host .icon-toggle-container ix-icon{transition:transform var(--ix-tree-item-expand-icon--transition-duration) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(.selected).hover),:host(:not(.disabled):not(.selected):hover){background-color:var(--ix-tree-item--background--hover)}:host(:not(.disabled):not(.selected).active),:host(:not(.disabled):not(.selected):active){background-color:var(--ix-tree-item--background--active)}:host(.selected){background-color:var(--ix-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--ix-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--ix-tree-item--background--selected-active)}:host(.disabled){opacity:var(--ix-tree-item--opacity);pointer-events:none}`;
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
    return h(Host, { key: "9474f5edbd1a5cbf890d076a13490c0f51f8a003", class: {
      selected: !!this.context?.isSelected,
      disabled: !!isDisabled
    } }, h("div", { key: "4ae735e7a921020ecbf224197157dd8885ae8675", class: "icon-toggle-container" }, this.hasChildren ? h("ix-icon", { name: iconChevronRightSmall, class: {
      ["icon-toggle-down"]: !!this.context?.isExpanded
    }, color: "--si-sys-color-text-primary", onClick: (e) => {
      if (isDisabled) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      this.toggle.emit();
    }, "aria-label": this.ariaLabelChevronIcon ?? (this.context?.isExpanded ? "Collapse tree item" : "Expand tree item") }) : null), h("div", { key: "7b59bd52fed89c79e28ddac43d9f2d462ec7b8d4", class: "tree-node-container", onClick: () => {
      if (isDisabled) {
        return;
      }
      this.itemClick.emit();
    } }, h("div", { key: "03d94bdc4d0ccc79a2553e20ef57a8e7351f4016", class: "tree-node-text" }, this.text), h("slot", { key: "5eaf7d61ff0630a7c5fb96c889fe073d199d2bdf" })));
  }
};
TreeItem.style = treeItemCss();
export {
  TreeItem as ix_tree_item
};
