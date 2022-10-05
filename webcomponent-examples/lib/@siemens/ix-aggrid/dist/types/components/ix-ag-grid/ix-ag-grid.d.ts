import { Grid, GridOptions } from 'ag-grid-community';
export declare class IxAgGrid {
  host: HTMLIxAgGridElement;
  gridOptions: GridOptions;
  grid: Grid;
  componentDidLoad(): void;
  private initializeGrid;
  disconnectedCallback(): void;
  render(): any;
}
