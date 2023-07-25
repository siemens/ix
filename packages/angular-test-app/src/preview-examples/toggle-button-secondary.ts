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
    <ix-toggle-button class="m-1" outline="false">Normal</ix-toggle-button>
    <ix-toggle-button class="m-1" pressed outline="false">
      Pressed
    </ix-toggle-button>
    <ix-toggle-button class="m-1" disabled outline="false">
      Disabled
    </ix-toggle-button>
    <ix-toggle-button class="m-1" disabled loading outline="false">
      Loading
    </ix-toggle-button>
  `,
})
export default class Buttons {}
