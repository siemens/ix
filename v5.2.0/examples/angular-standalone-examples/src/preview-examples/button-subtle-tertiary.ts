/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  template: buttonSubtleTertiary(),
  styleUrls: ['./button-subtle-tertiary.css'],
})
export default class Buttons {}

function buttonSubtleTertiary(): string | undefined {
  return `
      <ix-button variant="subtle-tertiary">
        Button
      </ix-button>
      <ix-button disabled variant="subtle-tertiary">
        Button
      </ix-button>
  `;
}
