/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Routes } from '@angular/router';
import ApplicationExample from '../preview-examples/application';
import Playground from '../playground/playground';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'playground',
    pathMatch: 'full',
  },
  {
    path: 'playground',
    component: Playground,
  },
  {
    path: 'preview',
    children: [
      {
        path: 'application',
        component: ApplicationExample,
      },
    ],
  },
];
