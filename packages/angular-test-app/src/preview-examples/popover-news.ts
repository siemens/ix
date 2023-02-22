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
  template: `
    <ix-basic-navigation>
      <div class="placeholder-logo" slot="logo"></div>
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item label="Example"> </ix-menu-about-item>
        </ix-menu-about>
        <ix-menu-about-news label="Test" show about-item-label="Example">
          Test
        </ix-menu-about-news>
      </ix-menu>
    </ix-basic-navigation>
  `,
})
export default class PopoverNews {}
