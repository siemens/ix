/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { AggridCellRenderer } from './aggrid-cell-renderer';
import { AggridCellRendererIcon } from './aggrid-cell-renderer-icon';
import { AggridCellRendererPill } from './aggrid-cell-renderer-pill';
import { IxModule } from '@siemens/ix-angular';

@NgModule({
  declarations: [
    AggridCellRenderer,
    AggridCellRendererIcon,
    AggridCellRendererPill,
  ],
  imports: [IxModule],
  providers: [],
  exports: [AggridCellRenderer, AggridCellRendererIcon, AggridCellRendererPill],
})
export class AgGridCustomRendererModule {}
