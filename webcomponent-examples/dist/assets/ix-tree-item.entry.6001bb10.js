import { r as registerInstance, c as createEvent, h, H as Host } from "./global.2bfd6008.js";
const treeItemCss = ":host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;min-width:2rem}:host .icon-toggle-container ix-icon{transition:transform var(--theme-default-time) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}";
const IxTreeItemStyle0 = treeItemCss;
const TreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.text = void 0;
    this.hasChildren = false;
    this.context = void 0;
  }
  render() {
    var _a, _b, _c;
    return h(Host, { key: "0e92eced558f94df77f6ce6ac359395ecd3b1623", class: {
      selected: !!((_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected)
    } }, h("div", { key: "51c671e62ef92b7dc7080194fd566d58261e7481", class: "icon-toggle-container", onClick: (e) => {
      e.preventDefault();
      this.toggle.emit();
    } }, this.hasChildren ? h("ix-icon", { name: "chevron-right", size: "16", class: {
      ["icon-toggle-down"]: !!((_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded)
    }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? "primary" : "std-text"}` }) : null), h("div", { key: "da22cba786a63d23dcb56cb393438b6aacbbf185", class: "tree-node-container", onClick: () => {
      this.itemClick.emit();
    } }, h("div", { key: "02989a25709e9d964b6ac4ddbb073b0b92347bd5", class: "tree-node-text" }, this.text), h("slot", { key: "d9acb398b2008935e305ef145cfca52f888e2334" })));
  }
};
TreeItem.style = IxTreeItemStyle0;
export {
  TreeItem as ix_tree_item
};
