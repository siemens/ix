/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxApplication, IxApplicationHeader, IxMenu, IxMenuItem],
  templateUrl: './basic-navigation-migration.html',
  styleUrls: ['./basic-navigation-migration.css'],
})
export default class BasicNavigationMigration {}
