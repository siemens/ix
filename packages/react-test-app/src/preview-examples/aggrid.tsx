/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState, type FC } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { IxSelect, IxSelectItem } from '@siemens/ix-react';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  ModuleRegistry,
  AllCommunityModule,
  GridOptions,
  type ICellRendererParams,
} from 'ag-grid-community';
import * as agGrid from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

type AgGridPreviewRow = {
  type: string;
  status: string;
  assetId: string;
  category: string;
  location: string;
  costCenter: string;
  hwVersion: string;
  tags: string[];
  site: string;
  region: string;
  owner: string;
  lastAudit: string;
  protocol: string;
  notes: string;
};

const MultiSelectCell: FC<ICellRendererParams<AgGridPreviewRow>> = (props) => {
  if (!props.data) {
    return null;
  }

  const intersectionRoot =
    props.eGridCell.closest<HTMLElement>('.ag-body-viewport') ??
    props.eGridCell.closest<HTMLElement>('.ag-center-cols-viewport') ??
    undefined;

  return (
    <IxSelect
      mode="multiple"
      enableTopLayer
      intersectionRoot={intersectionRoot}
      value={props.data.tags}
      onValueChange={(e) => {
        props.node.setDataValue('tags', e.detail as string[]);
      }}
    >
      <IxSelectItem label="Monitoring" value="m"></IxSelectItem>
      <IxSelectItem label="Control" value="c"></IxSelectItem>
      <IxSelectItem label="Safety" value="s"></IxSelectItem>
      <IxSelectItem label="Communications" value="k"></IxSelectItem>
    </IxSelect>
  );
};

const TAG_OPTIONS = ['m', 'c', 's', 'k'] as const;

function buildAgGridPreviewRows(count: number): AgGridPreviewRow[] {
  const types = ['Equipment', 'Positioner', 'Pressure sensor'] as const;
  const statuses = ['Normal', 'Maintenance', 'Unknown'] as const;

  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    let tags: string[];
    if (i === 0) {
      tags = [...TAG_OPTIONS];
    } else if (i % 5 === 0) {
      tags = ['m', 'c'];
    } else if (i % 3 === 0) {
      tags = ['m', 'c', 's'];
    } else {
      tags = ['s'];
    }

    const regions = ['North', 'East', 'West', 'South', 'Central'] as const;
    const protocols = [
      'Modbus',
      'OPC UA',
      'MQTT',
      'Profinet',
      'EtherNet/IP',
    ] as const;
    const categories = [
      'Production',
      'Quality',
      'Logistics',
      'Utilities',
    ] as const;

    return {
      type: `${types[i % types.length]} ${n}`,
      status: statuses[i % statuses.length],
      assetId: `AST-${String(10000 + i).slice(-5)}`,
      category: categories[i % categories.length],
      location: `Hall ${(i % 8) + 1} · Bay ${(i % 6) + 1}`,
      costCenter: `CC-${4000 + (i % 20)}`,
      hwVersion: i % 7 === 0 ? 'N/A' : `${(i % 4) + 1}.0`,
      tags,
      site: `Plant ${(i % 6) + 1} · Line ${(i % 4) + 1}`,
      region: regions[i % regions.length],
      owner: `Team ${(i % 5) + 1}`,
      lastAudit: `2024-${String((i % 12) + 1).padStart(2, '0')}-15`,
      protocol: protocols[i % protocols.length],
      notes: `Ref-${1000 + i} (${i % 2 === 0 ? 'reviewed' : 'pending'})`,
    };
  });
}

export default () => {
  const [gridOptions, setGridOptions] =
    useState<GridOptions<AgGridPreviewRow> | null>(null);

  useEffect(() => {
    const initializeGrid = () => {
      const ixTheme = getIxTheme(agGrid);

      setGridOptions({
        theme: ixTheme,
        /**
         * Keep all column cells mounted. Default column virtualization destroys DOM for
         * horizontally scrolled-out columns — that disconnects `ix-select` / `ix-dropdown`
         * and closes the panel (see `ix-dropdown` `disconnectedCallback`), unrelated to
         * viewport intersection.
         */
        suppressColumnVirtualisation: true,
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
            minWidth: 180,
            flex: 0,
            resizable: true,
            rowDrag: true,
            tooltipField: 'type',
          },
          {
            field: 'status',
            headerName: 'Status',
            minWidth: 180,
            flex: 0,
            resizable: true,
            sortable: true,
            filter: true,
            tooltipValueGetter: (params) => {
              const type = params.data?.type ?? '';
              return `Status: ${params.value} - Type: ${type}`;
            },
          },
          {
            field: 'assetId',
            headerName: 'Asset ID',
            minWidth: 130,
            flex: 0,
            resizable: true,
            sortable: true,
          },
          {
            field: 'category',
            headerName: 'Category',
            minWidth: 140,
            flex: 0,
            resizable: true,
            sortable: true,
          },
          {
            field: 'location',
            headerName: 'Location',
            minWidth: 180,
            flex: 0,
            resizable: true,
          },
          {
            field: 'costCenter',
            headerName: 'Cost center',
            minWidth: 130,
            flex: 0,
            resizable: true,
            sortable: true,
          },
          {
            colId: 'tags',
            field: 'tags',
            headerName: 'Tags (multi ix-select)',
            minWidth: 220,
            flex: 0,
            sortable: false,
            filter: false,
            cellRenderer: MultiSelectCell,
          },
          {
            field: 'hwVersion',
            headerName: 'HW version',
            minWidth: 140,
            flex: 0,
            resizable: true,
            tooltipValueGetter: (params) => {
              if (params.value === 'N/A') {
                return 'Hardware version not available';
              }
              return `Hardware Version ${params.value}`;
            },
          },
          {
            field: 'site',
            headerName: 'Site / line',
            minWidth: 200,
            flex: 0,
            resizable: true,
          },
          {
            field: 'region',
            headerName: 'Region',
            minWidth: 120,
            flex: 0,
            resizable: true,
            sortable: true,
          },
          {
            field: 'owner',
            headerName: 'Owner',
            minWidth: 120,
            flex: 0,
            resizable: true,
          },
          {
            field: 'lastAudit',
            headerName: 'Last audit',
            minWidth: 140,
            flex: 0,
            resizable: true,
            sortable: true,
          },
          {
            field: 'protocol',
            headerName: 'Protocol',
            minWidth: 140,
            flex: 0,
            resizable: true,
          },
          {
            field: 'notes',
            headerName: 'Notes',
            minWidth: 200,
            flex: 0,
            resizable: true,
          },
        ],
        rowData: buildAgGridPreviewRows(48),
        suppressCellFocus: true,
      });
    };

    initializeGrid();
  }, []);

  if (!gridOptions) {
    return null;
  }

  return (
    <div
      style={{
        height: '600px',
        width: '100%',
        maxWidth: '1000px',
      }}
    >
      <AgGridReact gridOptions={gridOptions}></AgGridReact>
    </div>
  );
};
