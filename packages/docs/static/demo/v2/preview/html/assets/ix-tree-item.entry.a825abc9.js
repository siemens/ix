import { r as registerInstance, c as createEvent, h, H as Host } from "./global.e92797ea.js";
import { n as iconChevronRight } from "./index-CrTP-icT.451e0ae2.js";
const treeItemCss = ":host{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tree-node-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}:host .tree-node-container .tree-node-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .icon-toggle-container{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;min-width:2rem}:host .icon-toggle-container ix-icon{transition:transform var(--theme-default-time) ease-in-out}:host .icon-toggle-container ix-icon.icon-toggle-down{transform:rotate(90deg)}:host(:not(.disabled):not(:disabled):not(.selected).hover),:host(:not(.disabled):not(:disabled):not(.selected):hover){background-color:var(--theme-tree-item--background--hover)}:host(:not(.disabled):not(:disabled):not(.selected).active),:host(:not(.disabled):not(:disabled):not(.selected):active){background-color:var(--theme-tree-item--background--active)}:host(.selected){background-color:var(--theme-tree-item--background--selected)}:host(.selected.hover),:host(.selected:hover){background-color:var(--theme-tree-item--background--selected-hover)}:host(.selected.active),:host(.selected:active){background-color:var(--theme-tree-item--background--selected-active)}";
const TreeItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.hasChildren = false;
  }
  render() {
    var _a, _b, _c;
    return h(Host, { key: "bb6da9e7cfe6133c51d8aa4a6eebfb8e7fdb68b2", class: {
      selected: !!((_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected)
    } }, h("div", { key: "fe3053f50feb3a1f00c3bcefb5a1c5c78909b1aa", class: "icon-toggle-container" }, this.hasChildren ? h("ix-icon", { name: iconChevronRight, size: "16", class: {
      ["icon-toggle-down"]: !!((_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded)
    }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? "primary" : "std-text"}`, onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggle.emit();
    } }) : null), h("div", { key: "96bf8b81859c8292195f4418598057c0371259f9", class: "tree-node-container", onClick: () => {
      this.itemClick.emit();
    } }, h("div", { key: "bfd399d7d167978c6e4781fb1394957b48bf85b6", class: "tree-node-text" }, this.text), h("slot", { key: "df8688241a7fa8ae7046313e779e3937640ccdde" })));
  }
};
TreeItem.style = treeItemCss;
export {
  TreeItem as ix_tree_item
};
