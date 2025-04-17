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
  IxBasicNavigation,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxBasicNavigation, IxMenu, IxMenuItem],
  template: `
    <ix-basic-navigation applicationName="Application name">
      <div class="placeholder-logo" slot="logo"></div>
      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>
    </ix-basic-navigation>
  `,
  styleUrls: ['./basic-navigation.css'],
})
export default class BasicNavigation {}
