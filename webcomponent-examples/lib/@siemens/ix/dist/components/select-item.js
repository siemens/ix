import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './dropdown-item.js';
import { d as defineCustomElement$1 } from './icon.js';

const selectItemCss = ".sc-ix-select-item-h{display:block}.sc-ix-select-item-h ix-dropdown-item.sc-ix-select-item button.sc-ix-select-item{margin-left:1rem}";

const SelectItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemClick = createEvent(this, "itemClick", 7);
    /**
     * Whether the item is selected.
     */
    this.selected = false;
    /**
     * ***Internal***
     */
    this.hover = false;
  }
  /**
   * Internal
   * @param event
   */
  async onItemClick(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    this.itemClick.emit(this.value);
  }
  componentDidRender() {
    if (!this.value) {
      throw Error('ix-select-item must have a `value` property');
    }
  }
  render() {
    return (h(Host, null, h("ix-dropdown-item", { checked: this.selected, hover: this.hover, label: this.label ? this.label : this.value, onItemClick: (e) => this.onItemClick(e) })));
  }
  get hostElement() { return this; }
  static get style() { return selectItemCss; }
}, [2, "ix-select-item", {
    "label": [513],
    "value": [520],
    "selected": [4],
    "hover": [4],
    "onItemClick": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-select-item", "ix-dropdown-item", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-select-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SelectItem);
      }
      break;
    case "ix-dropdown-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { SelectItem as S, defineCustomElement as d };
