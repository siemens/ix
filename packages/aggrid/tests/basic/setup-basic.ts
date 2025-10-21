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

// Add global error handlers
window.addEventListener('error', (e) => {
  console.error('Global error caught:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

console.log('=== SETUP START ===');

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

// Load theme with comprehensive debugging
console.log('Attempting to load theme...');
const theme = await (async () => {
  try {
    const result = await useIxTheme(() => {
      console.log('Theme callback executing - importing ag-grid-community...');
      return import('ag-grid-community');
    });
    console.log(
      'Theme loaded:',
      result ? 'SUCCESS' : 'FAILED (null/undefined)'
    );
    console.log('Theme type:', typeof result);
    console.log('Theme value:', result);
    return result;
  } catch (error) {
    console.error('Theme loading error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    throw error; // Re-throw to make the failure visible
  }
})();

if (!theme) {
  console.error('WARNING: No theme available - grid may not render correctly!');
}

const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  rowSelection: {
    mode: 'multiRow',
  },
  suppressCellFocus: true,
  theme: theme,
};

console.log('=== CREATING GRID ===');
const myGridElement = document.querySelector('#testGrid') as HTMLElement;
console.log('Grid element found:', !!myGridElement);
console.log('Grid element:', myGridElement);

if (!myGridElement) {
  console.error('ERROR: Grid element #testGrid not found!');
} else {
  console.log('Creating grid with options:', {
    hasColumnDefs: !!gridOptions.columnDefs,
    hasRowData: !!gridOptions.rowData,
    hasTheme: !!gridOptions.theme,
    themeType: typeof gridOptions.theme,
  });

  createGrid(myGridElement, gridOptions);
  console.log('=== GRID CREATED ===');

  // Verify grid was created
  setTimeout(() => {
    const gridRoot = document.querySelector('.ag-root-wrapper');
    console.log('Grid root element exists:', !!gridRoot);
    if (gridRoot) {
      console.log('Grid appears to be rendered successfully');
    } else {
      console.error('Grid root not found - rendering may have failed');
    }
  }, 100);
}

console.log('=== SETUP COMPLETE ===');
