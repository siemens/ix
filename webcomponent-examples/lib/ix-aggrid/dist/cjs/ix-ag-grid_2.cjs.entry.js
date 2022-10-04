'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-15264d0e.js');
const agGridCommunity_auto_esm = require('./ag-grid-community.auto.esm-6aabb45a.js');

const IxAgGrid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.initializeGrid();
  }
  initializeGrid() {
    if (!this.gridOptions) {
      return;
    }
    if (!this.grid) {
      const gridDiv = this.host.querySelector('div.ag-theme-ix');
      this.grid = new agGridCommunity_auto_esm.Grid(gridDiv, this.gridOptions);
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.grid) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { style: {
        height: '100%',
        width: '100%',
      }, class: "ag-theme-alpine-dark ag-theme-ix" })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "gridOptions": ["initializeGrid"]
  }; }
};

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
const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      rowSelection: 'multiple',
      suppressCellFocus: true,
    };
  }
  render() {
    return (index.h(index.Host, { style: {
        height: '100%',
        width: '100%',
      } }, index.h("ix-ag-grid", { gridOptions: this.gridOptions })));
  }
};
MyComponent.style = myComponentCss;

exports.ix_ag_grid = IxAgGrid;
exports.my_component = MyComponent;
