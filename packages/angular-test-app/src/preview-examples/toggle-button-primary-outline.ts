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
    <ix-toggle-button outline variant="Primary">Normal</ix-toggle-button>
    <ix-toggle-button outline pressed variant="Primary">
      Pressed
    </ix-toggle-button>
    <ix-toggle-button outline disabled variant="Primary">
      Disabled
    </ix-toggle-button>
    <ix-toggle-button outline disabled loading variant="Primary">
      Loading
    </ix-toggle-button>
  `,
})
export default class Buttons {}
