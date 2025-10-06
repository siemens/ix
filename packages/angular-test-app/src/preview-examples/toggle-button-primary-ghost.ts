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
    <ix-toggle-button variant="tertiary"> Normal</ix-toggle-button>
    <ix-toggle-button variant="tertiary" pressed>
      Pressed
    </ix-toggle-button>
    <ix-toggle-button variant="tertiary" disabled>
      Disabled
    </ix-toggle-button>
    <ix-toggle-button variant="tertiary" disabled loading>
      Loading
    </ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-primary-ghost.css'],
})
export default class Buttons {}
