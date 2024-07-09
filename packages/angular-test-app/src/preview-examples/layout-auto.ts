/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './layout-auto.html',
  styles: [
    `
      ix-layout-auto ix-typography {
        display: flex;
        padding: 0.15rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        border: 1px solid var(--theme-color-soft-bdr);
        background: var(--theme-color-ghost);
        border-radius: 3px;
      }
    `,
  ],
})
export default class LayoutAuto {}
