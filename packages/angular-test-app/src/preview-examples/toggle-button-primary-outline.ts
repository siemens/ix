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
  standalone: false,
  selector: 'app-example',
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
