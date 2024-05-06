<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { GridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3';

const gridOptions = {
  columnDefs: [
    {
      field: 'type',
      headerName: 'Type',
      resizable: true,
      checkboxSelection: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      resizable: true,
      sortable: true,
      filter: true,
    },
    { field: 'hwVersion', headerName: 'HW version', resizable: true },
  ],
  rowData: [
    {
      type: 'Equipment',
      status: 'Normal',
      hwVersion: '2.0',
      checked: false,
    },
    {
      type: 'Positioner',
      status: 'Maintenance',
      hwVersion: '1.0',
      checked: true,
    },
    {
      type: 'Pressure sensor',
      status: 'Unknown',
      hwVersion: 'N/A',
      checked: false,
    },
  ],
  rowSelection: 'multiple',
  suppressCellFocus: true,
  checkboxSelection: true,
} as GridOptions;
</script>

<template>
  <div
    style="height: 12rem; width: 100%"
    className="ag-theme-alpine-dark ag-theme-ix"
  >
    <AgGridVue :gridOptions="gridOptions" />
  </div>
</template>
