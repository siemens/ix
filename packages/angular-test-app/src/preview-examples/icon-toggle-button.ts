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
    <ix-icon-toggle-button class="m-1"></ix-icon-toggle-button>
    <ix-icon-toggle-button class="m-1" pressed></ix-icon-toggle-button>
    <ix-icon-toggle-button class="m-1" disabled></ix-icon-toggle-button>

    <ix-icon-toggle-button class="m-1" size="16"></ix-icon-toggle-button>
    <ix-icon-toggle-button
      class="m-1"
      size="16"
      pressed
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      class="m-1"
      size="16"
      disabled
    ></ix-icon-toggle-button>

    <ix-icon-toggle-button class="m-1" size="24"></ix-icon-toggle-button>
    <ix-icon-toggle-button
      class="m-1"
      size="24"
      pressed
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      class="m-1"
      size="24"
      disabled
    ></ix-icon-toggle-button>
  `,
})
export default class Buttons {}
