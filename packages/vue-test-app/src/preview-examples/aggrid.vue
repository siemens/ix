<script setup lang="ts">
import { GridOptions } from 'ag-grid-community';
import { AgGridVue } from 'ag-grid-vue3';

const gridOptions = {
  columnDefs: [
    { field: 'make', resizable: true, checkboxSelection: true },
    { field: 'model', resizable: true, sortable: true, filter: true },
    { field: 'price', resizable: true },
  ],
  rowData: [
    { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
    { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
    { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
  ],
  rowSelection: 'multiple',
  suppressCellFocus: true,
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
