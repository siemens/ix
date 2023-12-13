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
  styleUrls: ['./styles-auto-gen/toggle-button.css'],
  template: `
    <ix-toggle-button variant="primary" ghost> Normal </ix-toggle-button>
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
})
export default class Buttons {}
