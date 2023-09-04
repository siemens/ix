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
  templateUrl: './grid-fluid.html',
  styles: [
    `
      ix-grid {
        margin-bottom: 1rem;
      }

      ix-col {
        background-color: var(--theme-color-primary);
        border: var(--theme-std-bdr-2);
        text-align: center;
        color: var(--theme-color-inv-contrast-text);
      }

      .example-parent {
        padding-top: 1rem;
        padding-bottom: 0.25rem;
        background-color: var(--theme-color-info-40);
      }
    `,
  ],
})
export default class GridFluid {}
