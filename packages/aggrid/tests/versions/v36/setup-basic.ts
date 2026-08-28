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
  ModuleRegistry,
} from 'ag-grid-community-36';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { getIxTheme } from '@siemens/ix-aggrid';
import { COLUMN_DEFS, ROW_DATA } from '../../utils/test/basic.const';
import * as agGridCommunity36 from 'ag-grid-community-36';
import './../../utils/test/runtime/main';

ModuleRegistry.registerModules([AllCommunityModule]);

const theme = getIxTheme(agGridCommunity36);

const gridOptions = {
  columnDefs: COLUMN_DEFS,
  rowData: ROW_DATA,
  rowSelection: {
    mode: 'multiRow',
  },
  suppressCellFocus: true,
  theme: theme,
} satisfies agGridCommunity36.GridOptions;

const myGridElement = document.querySelector('#testGrid') as HTMLElement;
createGrid(myGridElement, gridOptions);
