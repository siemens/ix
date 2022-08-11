import { Component, h, Host } from '@stencil/core';
import { ColDef, GridOptions } from 'ag-grid-community';

const columnDefs: ColDef[] = [
  { field: 'make', resizable: true, checkboxSelection: true },
  { field: 'model', resizable: true, sortable: true, filter: true },
  { field: 'price', resizable: true },
];

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
  { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
  { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
];

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  gridOptions: GridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    rowSelection: 'multiple',
    suppressCellFocus: true,
  };

  render() {
    return (
      <Host
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <ix-ag-grid gridOptions={this.gridOptions}></ix-ag-grid>
      </Host>
    );
  }
}
