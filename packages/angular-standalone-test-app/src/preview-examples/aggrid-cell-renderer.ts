import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IxButton],
  template: `<ix-button>{{ value() }}</ix-button>`,
})
export class AggridCellRenderer implements ICellRendererAngularComp {
  value = signal('');

  agInit(params: ICellRendererParams): void {
    this.refresh(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.value.set(params.value);
    return true;
  }
}
