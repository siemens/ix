import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IxButton, IxPill } from '@siemens/ix-angular/standalone';

import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IxPill],
  template: `<ix-pill>{{ value() }}</ix-pill>`,
})
export class AggridCellRendererPill implements ICellRendererAngularComp {
  value = signal('');

  agInit(params: ICellRendererParams): void {
    this.refresh(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.value.set(params.value);
    return true;
  }
}
