/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { GridOptions } from 'ag-grid-community';
import {
  AllCommunityModule,
  createGrid,
  ModuleRegistry,
} from 'ag-grid-community';
import { useIxTheme } from '@siemens/ix-aggrid';

ModuleRegistry.registerModules([AllCommunityModule]);

const columnDefs = [
  { field: 'make', resizable: true, checkboxSelection: true },
  { field: 'model', resizable: true, sortable: true, filter: true },
  { field: 'price', resizable: true },
];

const rowData = (() => {
  const data = [];
  for (let i = 0; i < 500; i++) {
    data.push({
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
      checked: false,
    });
  }
  return data;
})();

const gridOptions: GridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  rowSelection: 'multiple',
  suppressCellFocus: true,
  pagination: true,
  theme: await useIxTheme(() => import('ag-grid-community')),
};

const myGridElement = document.querySelector('#testGrid') as HTMLElement;
createGrid(myGridElement, gridOptions);
