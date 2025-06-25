/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { AggridCellRenderer } from './aggrid-cell-renderer';
import { AggridCellRendererIcon } from './aggrid-cell-renderer-icon';
import { AggridCellRendererPill } from './aggrid-cell-renderer-pill';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [AgGridAngular],
  templateUrl: './aggrid.html',
})
export default class AGGrid {
  gridOptions = {
    columnDefs: [
      {
        field: 'type',
        headerName: 'Type',
        resizable: true,
        checkboxSelection: true,
        cellRenderer: AggridCellRendererPill,
      },
      {
        field: 'status',
        headerName: 'Status',
        resizable: true,
        sortable: true,
        filter: true,
        cellRenderer: AggridCellRendererIcon,
      },
      {
        field: 'hwVersion',
        headerName: 'HW version',
        resizable: true,
        cellRenderer: AggridCellRenderer,
      },
    ],
    rowData: Array.from({ length: 10000 }).map((_, index) => {
      return {
        type: 'Equipment' + index,
        status: 'Normal',
        hwVersion: '2.0',
        checked: false,
      };
    }),
    rowSelection: 'multiple',
    suppressCellFocus: true,
    checkboxSelection: true,
  } as GridOptions;
}
