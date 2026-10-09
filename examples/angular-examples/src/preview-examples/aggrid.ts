/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  GridOptions,
  AllCommunityModule,
  ModuleRegistry,
} from 'ag-grid-community';
import * as agGrid from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './aggrid.html',
})
export default class AGGrid implements OnInit {
  gridOptions: GridOptions | null = null;

  ngOnInit() {
    const ixTheme = getIxTheme(agGrid);

    this.gridOptions = {
      theme: ixTheme,
      rowDragManaged: true,
      tooltipShowDelay: 500,
      rowSelection: {
        mode: 'multiRow',
        checkboxes: true,
        headerCheckbox: true,
        selectAll: 'filtered',
      },
      columnDefs: [
        {
          field: 'type',
          headerName: 'Type',
          resizable: true,
          rowDrag: true,
          tooltipField: 'type',
        },
        {
          field: 'status',
          headerName: 'Status',
          resizable: true,
          sortable: true,
          filter: true,
          tooltipValueGetter: (params) => {
            return `Status: ${params.value} - Type: ${params.data.type}`;
          },
        },
        {
          field: 'hwVersion',
          headerName: 'HW version',
          resizable: true,
          tooltipValueGetter: (params) => {
            if (params.value === 'N/A') {
              return 'Hardware version not available';
            }
            return `Hardware Version ${params.value}`;
          },
        },
      ],
      autoSizeStrategy: {
        type: 'fitGridWidth',
      },
      rowData: [
        {
          type: 'Equipment',
          status: 'Normal',
          hwVersion: '2.0',
        },
        {
          type: 'Positioner',
          status: 'Maintenance',
          hwVersion: '1.0',
        },
        {
          type: 'Pressure sensor',
          status: 'Unknown',
          hwVersion: 'N/A',
        },
        {
          type: 'Flow meter',
          status: 'Normal',
          hwVersion: '3.1',
        },
        {
          type: 'Temperature sensor',
          status: 'Warning',
          hwVersion: '2.2',
        },
        {
          type: 'Valve',
          status: 'Normal',
          hwVersion: '1.5',
        },
        {
          type: 'Actuator',
          status: 'Maintenance',
          hwVersion: '2.0',
        },
        {
          type: 'Controller',
          status: 'Normal',
          hwVersion: '4.0',
        },
        {
          type: 'Safety relay',
          status: 'Unknown',
          hwVersion: 'N/A',
        },
        {
          type: 'Power supply',
          status: 'Normal',
          hwVersion: '1.8',
        },
      ],
      suppressCellFocus: true,
    };
  }
}
