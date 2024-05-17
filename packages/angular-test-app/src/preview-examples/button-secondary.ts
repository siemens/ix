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
  styles: [`@import 'example-styles/dist/buttons.css';`],
})
export default class Buttons {}
function buttonSecondary(): string | undefined {
  return `
      <ix-button outline variant="primary">
        Button
      </ix-button>
      <ix-button disabled outline variant="primary">
        Button
      </ix-button>
  `;
}
