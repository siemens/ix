import { r as registerInstance, c as createEvent, h, H as Host } from "./global-B1t25MFd.js";
import { j as iconChevronRightSmall } from "./index-CwfZ4aN6-mXhHymhu.js";
const treeItemCss = () => `:host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;min-width:2rem}:host .icon-toggle-container ix-icon{transition:transform var(--theme-default-time) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}`;
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
    return h(Host, { key: "9234690f964480b6593115ca2c94a5b25959ea5f", class: {
      selected: !!this.context?.isSelected
    } }, h("div", { key: "3d563cc1070e797ceebc675d15fdb7b8fd1cd90b", class: "icon-toggle-container" }, this.hasChildren ? h("ix-icon", { name: iconChevronRightSmall, size: "24", class: {
      ["icon-toggle-down"]: !!this.context?.isExpanded
    }, color: "color-std-text", onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle.emit();
    }, "aria-label": this.ariaLabelChevronIcon ?? (this.context?.isExpanded ? "Collapse tree item" : "Expand tree item") }) : null), h("div", { key: "45043b1c2fd00034a6d57c285a4aabcc9c1043b6", class: "tree-node-container", onClick: () => {
      this.itemClick.emit();
    } }, h("div", { key: "1b93005ff99213545c2b982008ec851c55d1e5d1", class: "tree-node-text" }, this.text), h("slot", { key: "7265a5615ed97f0947af434b683bdb14c22ba53c" })));
  }
};
TreeItem.style = treeItemCss();
export {
  TreeItem as ix_tree_item
};
