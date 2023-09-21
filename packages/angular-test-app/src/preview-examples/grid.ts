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
  templateUrl: './grid.html',
  styles: [
    `
      ix-layout-grid {
        margin-bottom: 1rem;
      }

      ix-col > ix-typography {
        display: flex;
        padding: 0.15rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        align-self: stretch;
        border: 1px solid var(--theme-color-soft-bdr);
        background: var(--theme-color-ghost);
        border-radius: 3px;
      }
    `,
  ],
})
export default class Grid {}
