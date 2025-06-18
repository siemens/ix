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
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { applyIxTheme } from '@siemens/ix-aggrid';

console.log('This is a setup file for Playwright tests.');
ModuleRegistry.registerModules([AllCommunityModule]);

const gridOptions: GridOptions = {
  rowData: [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ],
  columnDefs: [
    { field: 'make', filter: true },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ],
  theme: await applyIxTheme(() => import('ag-grid-community')),
};

const myGridElement = document.querySelector('#myGrid') as HTMLElement;
createGrid(myGridElement, gridOptions);
