import { r as registerInstance, c as createEvent, h, H as Host } from "./global-X6m21_-k.js";
import { j as iconChevronRightSmall } from "./index-Dn2eQInl-mXhHymhu.js";
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
    return h(Host, { key: "52817f9eed914ee6b01b67848af3f7073f21d65c", class: {
      selected: !!this.context?.isSelected
    } }, h("div", { key: "95b40939dac08653e875985a160e5aa45ebc353c", class: "icon-toggle-container" }, this.hasChildren ? h("ix-icon", { name: iconChevronRightSmall, size: "24", class: {
      ["icon-toggle-down"]: !!this.context?.isExpanded
    }, color: "color-std-text", onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle.emit();
    }, "aria-label": this.ariaLabelChevronIcon ?? (this.context?.isExpanded ? "Collapse tree item" : "Expand tree item") }) : null), h("div", { key: "e2a4199f4e0a5fbb5073a33ba94d6d1fe37051bb", class: "tree-node-container", onClick: () => {
      this.itemClick.emit();
    } }, h("div", { key: "ae2b4ce33d8ffb412d570e159799940765bb2013", class: "tree-node-text" }, this.text), h("slot", { key: "f1e22a186686e968d471daf9bf7972d02904772b" })));
  }
};
TreeItem.style = treeItemCss();
export {
  TreeItem as ix_tree_item
};
