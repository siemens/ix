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
    <ix-toggle-button>Normal</ix-toggle-button>
    <ix-toggle-button pressed> Pressed</ix-toggle-button>
    <ix-toggle-button disabled> Disabled</ix-toggle-button>
    <ix-toggle-button disabled loading> Loading</ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-secondary.css'],
})
export default class Buttons {}
