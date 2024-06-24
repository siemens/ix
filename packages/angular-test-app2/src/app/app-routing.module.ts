/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ApplicationExample from '../preview-examples/application';

const routes: Routes = [
  {
    path: 'testing',
    children: [],
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
