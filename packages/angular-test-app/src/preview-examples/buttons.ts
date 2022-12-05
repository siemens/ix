/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
    <ix-button class="m-1" variant="Primary"> Button </ix-button>
    <ix-button class="m-1" disabled variant="Primary"> Button </ix-button>
  `,
})
export default class Buttons {}
