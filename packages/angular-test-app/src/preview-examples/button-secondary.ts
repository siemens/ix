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
  template: buttonSecondary(),
})
export default class Buttons {}
function buttonSecondary(): string | undefined {
  return `
      <ix-button style="margin: 0.25rem" outline variant="primary">
        Button
      </ix-button>
      <ix-button style="margin: 0.25rem" disabled outline variant="primary">
        Button
      </ix-button>
  `;
}
