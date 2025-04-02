/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxToggleButton],
  template: `
    <ix-toggle-button variant="primary" ghost> Normal</ix-toggle-button>
    <ix-toggle-button variant="primary" ghost pressed>
      Pressed
    </ix-toggle-button>
    <ix-toggle-button variant="primary" ghost disabled>
      Disabled
    </ix-toggle-button>
    <ix-toggle-button variant="primary" ghost disabled loading>
      Loading
    </ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-primary-ghost.css'],
})
export default class Buttons {}
