/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { themeSwitcher } from './utils/test/theme-switcher.js';

themeSwitcher();

(() => {
  const columnDefs = [
    { field: 'make', resizable: true, checkboxSelection: true },
    { field: 'model', resizable: true, sortable: true, filter: true },
    { field: 'price', resizable: true, editable: true },
  ];

  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
    { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
    { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
  ];

  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    rowSelection: 'multiple',
    suppressCellFocus: true,
  };

  const gridDiv = document.querySelector('div.ag-theme-ix');
  new agGrid.Grid(gridDiv, gridOptions);
})();
