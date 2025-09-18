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
  selector: 'app-example',
  imports: [IxToggleButton],
  template: `
    <ix-toggle-button variant="subtle-primary">Normal</ix-toggle-button>
    <ix-toggle-button pressed variant="subtle-primary">
      Pressed
    </ix-toggle-button>
    <ix-toggle-button disabled variant="subtle-primary">
      Disabled
    </ix-toggle-button>
    <ix-toggle-button disabled loading variant="subtle-primary">
      Loading
    </ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-primary-outline.css'],
})
export default class Buttons {}
