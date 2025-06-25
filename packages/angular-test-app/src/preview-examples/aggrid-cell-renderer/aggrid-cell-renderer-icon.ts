/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { iconStar } from '@siemens/ix-icons/icons';

import type { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ix-icon [name]="iconName"></ix-icon>`,
})
export class AggridCellRendererIcon implements ICellRendererAngularComp {
  readonly iconName = iconStar;

  value = signal('');

  agInit(params: ICellRendererParams): void {
    this.refresh(params);
  }

  refresh(params: ICellRendererParams): boolean {
    this.value.set(params.value);
    return true;
  }
}
