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
} from 'ag-grid-community-34';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { getIxTheme } from '@siemens/ix-aggrid';
import { COLUMN_DEFS, ROW_DATA } from '../utils/test/basic.const';
import * as agGridCommunity34 from 'ag-grid-community-34';

ModuleRegistry.registerModules([AllCommunityModule]);

const theme = getIxTheme(agGridCommunity34);

const gridOptions = {
  columnDefs: COLUMN_DEFS,
  rowData: ROW_DATA,
  rowSelection: {
    mode: 'multiRow',
  },
  suppressCellFocus: true,
  theme: theme,
};

const myGridElement = document.querySelector('#testGrid') as HTMLElement;
createGrid(myGridElement, gridOptions);
