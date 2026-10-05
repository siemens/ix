/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  AllCommunityModule,
  createGrid,
  GridOptions,
  ModuleRegistry,
} from 'ag-grid-community';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { getIxTheme } from '@siemens/ix-aggrid';
import * as agGridCommunity from 'ag-grid-community';
import { COLUMN_DEFS, ROW_DATA } from '../utils/test/basic.const';

ModuleRegistry.registerModules([AllCommunityModule]);

const stripedTheme = getIxTheme(agGridCommunity, { stripedRows: true });

const gridOptions = {
  columnDefs: COLUMN_DEFS,
  rowData: ROW_DATA,
  suppressCellFocus: true,
  theme: stripedTheme,
} satisfies GridOptions;

const gridElement = document.querySelector('#testGrid') as HTMLElement;
createGrid(gridElement, gridOptions);
