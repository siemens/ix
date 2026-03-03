/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getIxTheme } from '@siemens/ix-aggrid';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { defineCustomElements } from '@siemens/ix/loader';
import * as agGridCommunity from 'ag-grid-community';
import {
  AllCommunityModule,
  createGrid,
  ModuleRegistry,
  type ICellRendererParams,
} from 'ag-grid-community';

defineCustomElements();

ModuleRegistry.registerModules([AllCommunityModule]);

const theme = getIxTheme(agGridCommunity);

class DropdownButtonRenderer {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `
      <ix-dropdown-button label="${params.value}" enable-top-layer="true">
        <ix-dropdown-item label="Edit"></ix-dropdown-item>
        <ix-dropdown-item label="Delete"></ix-dropdown-item>
        <ix-dropdown-item label="Duplicate"></ix-dropdown-item>
        <ix-dropdown-item label="Export"></ix-dropdown-item>
        <ix-dropdown-item label="Archive"></ix-dropdown-item>
      </ix-dropdown-button>
    `;
  }

  getGui() {
    return this.eGui;
  }
}

class SelectRenderer {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `
      <ix-select value="${params.value}" enable-top-layer="true">
        <ix-select-item label="Active" value="active"></ix-select-item>
        <ix-select-item label="Inactive" value="inactive"></ix-select-item>
        <ix-select-item label="Pending" value="pending"></ix-select-item>
        <ix-select-item label="Archived" value="archived"></ix-select-item>
      </ix-select>
    `;
  }

  getGui() {
    return this.eGui;
  }
}

const ROW_DATA = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Row ${i + 1}`,
  actions: `Actions ${i + 1}`,
  status: i % 2 === 0 ? 'active' : 'inactive',
  price: 30000 + i * 1000,
}));

const gridOptions = {
  columnDefs: [
    { field: 'id' as const, width: 80 },
    { field: 'name' as const, width: 150 },
    {
      field: 'actions' as const,
      width: 200,
      cellRenderer: DropdownButtonRenderer,
    },
    {
      field: 'status' as const,
      width: 200,
      cellRenderer: SelectRenderer,
    },
    { field: 'price' as const, width: 150 },
  ],
  rowData: ROW_DATA,
  theme: theme,
  suppressCellFocus: true,
};

const myGridElement = document.querySelector('#testGrid') as HTMLElement;
createGrid(myGridElement, gridOptions);
