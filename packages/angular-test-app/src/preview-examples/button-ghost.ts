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
})
export default class Buttons {}
function buttonGhost(): string | undefined {
  return `
      <ix-button style="margin: 0.25rem" ghost variant="primary">
        Button
      </ix-button>
      <ix-button style="margin: 0.25rem" disabled ghost variant="primary">
        Button
      </ix-button>
  `;
}
