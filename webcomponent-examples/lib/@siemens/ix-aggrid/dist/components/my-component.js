import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ix-ag-grid2.js';

const myComponentCss = ".sc-my-component-h{display:block}";

const columnDefs = [
  { field: 'make', resizable: true, checkboxSelection: true },
  { field: 'model', resizable: true, sortable: true, filter: true },
  { field: 'price', resizable: true },
];
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
  { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
  { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
];
const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      rowSelection: 'multiple',
      suppressCellFocus: true,
    };
  }
  render() {
    return (h(Host, { style: {
        height: '100%',
        width: '100%',
      } }, h("ix-ag-grid", { gridOptions: this.gridOptions })));
  }
  static get style() { return myComponentCss; }
}, [2, "my-component"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component", "ix-ag-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
    case "ix-ag-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
