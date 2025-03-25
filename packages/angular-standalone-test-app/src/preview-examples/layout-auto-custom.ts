/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxLayoutAuto, IxTypography } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxLayoutAuto, IxTypography],
  templateUrl: './layout-auto-custom.html',
  styleUrls: ['./layout-auto.css'],
})
export default class LayoutAutoCustom {
  layout = [
    { minWidth: '0', columns: 1 },
    { minWidth: '35rem', columns: 2 },
    { minWidth: '50rem', columns: 4 },
  ];
}
