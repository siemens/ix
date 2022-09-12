/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-navigation-without-header',
  template: `
    <ix-basic-navigation hideHeader>
      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>
    </ix-basic-navigation>
  `,
})
export class BasicNavigationWithOutHeader {}
