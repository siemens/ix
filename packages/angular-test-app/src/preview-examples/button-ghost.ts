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
  template: buttonGhost(),
  styles: [`@import 'example-styles/dist/buttons.css';`],
})
export default class Buttons {}
function buttonGhost(): string | undefined {
  return `
      <ix-button ghost variant="primary">
        Button
      </ix-button>
      <ix-button disabled ghost variant="primary">
        Button
      </ix-button>
  `;
}
