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
  template: `
    <ix-menu>
      <ix-menu-item home-tab tab-icon="home"> Home </ix-menu-item>
      <ix-menu-item tab-icon="info" slot="bottom"> Bottom tab </ix-menu-item>
    </ix-menu>
  `,
  styleUrls: ['./styles/menu.css'],
})
export default class VerticalTabs {}
