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
  selector: 'app-button-secondary',
  template: buttonGreySecondary(),
})
export class Buttons {}
function buttonGreySecondary(): string | undefined {
  return `
      <ix-button class="m-1" outline variant="Secondary">
        Button
      </ix-button>
      <ix-button class="m-1" disabled outline variant="Secondary">
        Button
      </ix-button>
  `;
}

