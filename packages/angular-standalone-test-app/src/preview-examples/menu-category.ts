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
  IxMenu,
  IxMenuItem,
  IxMenuCategory,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxApplication, IxMenu, IxMenuItem, IxMenuCategory],
  templateUrl: './menu-category.html',
})
export default class MenuCategory {}
