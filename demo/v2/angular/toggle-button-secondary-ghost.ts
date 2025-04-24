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
    <ix-toggle-button ghost> Normal</ix-toggle-button>
    <ix-toggle-button pressed ghost> Pressed</ix-toggle-button>
    <ix-toggle-button disabled ghost> Disabled</ix-toggle-button>
    <ix-toggle-button disabled loading ghost> Loading</ix-toggle-button>
  `,
  styleUrls: ['./toggle-button-secondary-ghost.css'],
})
export default class Buttons {}
