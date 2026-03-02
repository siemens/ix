/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  ModuleRegistry,
  AllCommunityModule,
  GridOptions,
} from 'ag-grid-community';
import * as agGrid from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

export default () => {
  const [gridOptions, setGridOptions] = useState<GridOptions | null>(null);

  useEffect(() => {
    const initializeGrid = () => {
      const ixTheme = getIxTheme(agGrid);

      setGridOptions({
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
        ],
        suppressCellFocus: true,
      });
    };

    initializeGrid();
  }, []);

  if (!gridOptions) {
    return null;
  }

  return (
    <div style={{ height: '12rem', width: '100%' }}>
      <AgGridReact gridOptions={gridOptions}></AgGridReact>
    </div>
  );
};
