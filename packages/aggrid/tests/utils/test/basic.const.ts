export const COLUMN_DEFS = [
  {
    field: 'make',
    resizable: true,
    tooltipValueGetter: (params) => params.value,
  },
  { field: 'model', resizable: true, sortable: true, filter: true },
  { field: 'price', resizable: true, editable: true },
];

export const ROW_DATA = [
  { make: 'Toyota', model: 'Celica', price: 35000, checked: false },
  { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },
  { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },
];
