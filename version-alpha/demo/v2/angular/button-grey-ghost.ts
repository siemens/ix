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
  template: buttonGreyGhost(),
  styleUrls: ['./button-grey-ghost.css'],
})
export default class Buttons {}

function buttonGreyGhost(): string | undefined {
  return `
      <ix-button ghost variant="secondary">
        Button
      </ix-button>
      <ix-button disabled ghost variant="secondary">
        Button
      </ix-button>
  `;
}
