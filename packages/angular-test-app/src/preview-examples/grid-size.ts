/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './grid-size.html',
  styles: [
    `
      ix-layout-grid {
        margin-bottom: 1rem;
      }

      ix-col {
        background-color: var(--theme-color-primary);
        border: var(--theme-std-bdr-2);
        text-align: center;
        color: var(--theme-color-inv-contrast-text);
      }
    `,
  ],
})
export default class GridSize {}
