import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import { Grid, GridOptions } from 'ag-grid-community';

@Component({
  tag: 'ix-ag-grid',
  scoped: true,
})
export class IxAgGrid {
  @Element() host: HTMLIxAgGridElement;

  @Prop()
  gridOptions: GridOptions;

  grid: Grid;

  componentDidLoad() {
    this.initializeGrid();
  }

  @Watch('gridOptions')
  private initializeGrid() {
    if (!this.gridOptions) {
      return;
    }

    if (!this.grid) {
      const gridDiv = this.host.querySelector('div.ag-theme-ix-brand-dark') as HTMLElement;
      this.grid = new Grid(gridDiv, this.gridOptions);
    }
  }

  disconnectedCallback() {
    this.grid?.destroy();
  }

  render() {
    return (
      <Host>
        <div
          style={{
            height: '100%',
            width: '100%',
          }}
          class="ag-theme-alpine-dark ag-theme-ix"
        ></div>
      </Host>
    );
  }
}
