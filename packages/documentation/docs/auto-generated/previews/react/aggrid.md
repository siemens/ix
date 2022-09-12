<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/react-test-app/src/preview-examples/aggrid.tsx -->
```tsx
import { GridOptions } from 'ag-grid-community';

import { AgGridReact } from 'ag-grid-react';
import React from 'react';

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

export const AGGrid: React.FC = () => {
  return (
    <div
      style={{ height: '12rem', width: '100%' }}
      className="ag-theme-alpine-dark ag-theme-ix"
    >
      <AgGridReact gridOptions={gridOptions} />
    </div>
  );
};
```
