/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-example',
  template: `
    <ag-grid-angular
      style="height: 12rem; width: 100%"
      class="ag-theme-alpine-dark ag-theme-ix"
      [gridOptions]="gridOptions"
    ></ag-grid-angular>
  `,
})
export default class AGGrid {
  gridOptions = {
    columnDefs: [
      { field: 'make', resizable: true, checkboxSelection: true },
      { field: 'model', resizable: true, sortable: true, filter: true },
      { field: 'price', resizable: true },
    ],
    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
      { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
      { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
    ],
    rowSelection: 'multiple',
    suppressCellFocus: true,
  } as GridOptions;
}
