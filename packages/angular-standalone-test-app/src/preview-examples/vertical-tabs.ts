/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxMenu, IxMenuItem } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxMenu, IxMenuItem],
  template: `
    <ix-menu>
      <ix-menu-item home-tab icon="home">Home</ix-menu-item>
      <ix-menu-item icon="globe">Normal tab</ix-menu-item>
      <ix-menu-item icon="star" disabled>Disabled tab</ix-menu-item>
      <ix-menu-item icon="star">With other icon</ix-menu-item>
      <ix-menu-item icon="globe" style="display: none">
        Should not be visible
      </ix-menu-item>
    </ix-menu>
  `,
  styleUrls: ['./vertical-tabs.css'],
})
export default class VerticalTabs {}
