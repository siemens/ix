/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
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
export class MyComponent {
  constructor() {
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
  static get is() { return "my-component"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["my-component.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["my-component.css"]
    };
  }
}
