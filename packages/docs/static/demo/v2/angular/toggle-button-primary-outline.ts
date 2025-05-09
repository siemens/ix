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
    <ix-toggle-button outline variant="primary">Normal</ix-toggle-button>
    <ix-toggle-button outline pressed variant="primary">
      Pressed
    </ix-toggle-button>
    <ix-toggle-button outline disabled variant="primary">
      Disabled
    </ix-toggle-button>
    <ix-toggle-button outline disabled loading variant="primary">
      Loading
    </ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-primary-outline.css'],
})
export default class Buttons {}
