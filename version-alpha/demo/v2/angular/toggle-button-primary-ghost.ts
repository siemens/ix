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
