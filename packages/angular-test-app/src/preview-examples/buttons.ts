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
  selector: 'app-buttons',
  template: `
    <ix-button class="m-1" variant="primary">Button</ix-button>
    <ix-button class="m-1" variant="secondary">Button</ix-button>
    <ix-button class="m-1" outline>Button</ix-button>
    <ix-button class="m-1" invisible>Button</ix-button>

    <div>
        <ix-button class="m-1" variant="Primary">
          <ix-icon name="star"></ix-icon>Button
        </ix-button>
        <ix-button class="m-1" variant="Secondary">
          <ix-icon name="star"></ix-icon>Button
        </ix-button>
        <ix-button class="m-1" outline>
          <ix-icon name="star"></ix-icon>Button
        </ix-button>
        <ix-button class="m-1" ghost>
          <ix-icon name="star"></ix-icon>Button
        </ix-button>
      </div>
  `,
})
export class Buttons {}
