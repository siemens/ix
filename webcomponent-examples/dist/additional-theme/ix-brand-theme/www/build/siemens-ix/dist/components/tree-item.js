import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const treeItemCss = ".sc-ix-tree-item-h{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).hover,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):hover{background-color:var(--theme-tree-item--background--hover)}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).active,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):active{background-color:var(--theme-tree-item--background--active)}.selected.sc-ix-tree-item-h{background-color:var(--theme-tree-item--background--selected)}.selected.hover.sc-ix-tree-item-h,.selected.sc-ix-tree-item-h:hover{background-color:var(--theme-tree-item--background--selected-hover)}.selected.active.sc-ix-tree-item-h,.selected.sc-ix-tree-item-h:active{background-color:var(--theme-tree-item--background--selected-active)}.sc-ix-tree-item-h .tree-node-container.sc-ix-tree-item{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.sc-ix-tree-item{transition:transform 150ms ease-in-out}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.icon-toggle-down.sc-ix-tree-item{transform:rotate(90deg)}";

const TreeItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.toggle = createEvent(this, "toggle", 7);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.text = undefined;
    this.hasChildren = undefined;
    this.context = undefined;
  }
  render() {
    var _a, _b, _c;
    return (h(Host, { class: {
        selected: (_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected,
      } }, h("div", { class: "icon-toggle-container", onClick: (e) => {
        e.preventDefault();
        this.toggle.emit();
      } }, this.hasChildren ? (h("ix-icon", { name: "chevron-right", size: "16", class: {
        ['icon-toggle-down']: (_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded,
      }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? 'primary' : 'std-text'}` })) : null), h("div", { class: "tree-node-container", onClick: (e) => {
        e.preventDefault();
        this.itemClick.emit();
      } }, this.text, h("slot", null))));
  }
  static get style() { return treeItemCss; }
}, [6, "ix-tree-item", {
    "text": [1],
    "hasChildren": [4, "has-children"],
    "context": [16]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-tree-item", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-tree-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TreeItem);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { TreeItem as T, defineCustomElement as d };
