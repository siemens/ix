/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { getIxTheme } from '@siemens/ix-aggrid';
import * as agGridCommunity from 'ag-grid-community';
import {
  AllCommunityModule,
  ModuleRegistry,
  createGrid,
  type GridOptions,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

type AgGridArgs = {
  gridOptions: GridOptions;
};

const rowData = [
  { type: 'Equipment', status: 'Normal', hwVersion: '2.0' },
  { type: 'Positioner', status: 'Maintenance', hwVersion: '1.0' },
  { type: 'Pressure sensor', status: 'Unknown', hwVersion: 'N/A' },
  { type: 'Flow meter', status: 'Normal', hwVersion: '3.1' },
  { type: 'Temperature sensor', status: 'Warning', hwVersion: '2.2' },
  { type: 'Valve', status: 'Normal', hwVersion: '1.5' },
  { type: 'Actuator', status: 'Maintenance', hwVersion: '2.0' },
  { type: 'Controller', status: 'Normal', hwVersion: '4.0' },
  { type: 'Safety relay', status: 'Unknown', hwVersion: 'N/A' },
  { type: 'Power supply', status: 'Normal', hwVersion: '1.8' },
];

function renderGrid(args: AgGridArgs) {
  const container = document.createElement('div');
  container.style.height = '20rem';
  container.style.width = '100%';

  createGrid(container, {
    ...args.gridOptions,
    theme: getIxTheme(agGridCommunity),
  });

  return container;
}

const meta = {
  title: 'Example/AgGrid',
  tags: [],
  render: (args) => renderGrid(args),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components---Brand-Dark?node-id=86777-15993&m=dev',
    },
  },
} satisfies Meta<AgGridArgs>;

export default meta;
type Story = StoryObj<AgGridArgs>;

export const Default: Story = {
  args: {
    gridOptions: {
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
          tooltipValueGetter: (params) =>
            `Status: ${params.value} - Type: ${params.data.type}`,
        },
        {
          field: 'hwVersion',
          headerName: 'HW version',
          resizable: true,
          tooltipValueGetter: (params) =>
            params.value === 'N/A'
              ? 'Hardware version not available'
              : `Hardware Version ${params.value}`,
        },
      ],
      autoSizeStrategy: {
        type: 'fitGridWidth',
      },
      rowData,
      suppressCellFocus: true,
    },
  },
};
