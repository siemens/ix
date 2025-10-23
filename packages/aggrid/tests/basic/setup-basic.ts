/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  AllCommunityModule,
  createGrid,
  ModuleRegistry,
} from 'ag-grid-community';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { useIxTheme } from '@siemens/ix-aggrid';

ModuleRegistry.registerModules([AllCommunityModule]);

const columnDefs = [
  {
    field: 'make',
    resizable: true,
    tooltipValueGetter: (params) => params.value,
  },
  { field: 'model', resizable: true, sortable: true, filter: true },
  { field: 'price', resizable: true, editable: true },
];

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
  { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
  { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
];

const theme = await useIxTheme(() => import('ag-grid-community'));

const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  rowSelection: {
    mode: 'multiRow',
  },
  suppressCellFocus: true,
  theme: theme,
};

const myGridElement = document.querySelector('#testGrid') as HTMLElement;

createGrid(myGridElement, gridOptions);
