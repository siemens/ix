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
  template: buttonTextIcon(),
})
export default class Buttons {}
function buttonTextIcon(): string | undefined {
  return `
      <ix-button class="m-1" variant="primary">
        <ix-icon name="star"></ix-icon>Button
      </ix-button>
      <ix-button class="m-1" variant="secondary">
        <ix-icon name="star"></ix-icon>Button
      </ix-button>
      <ix-button class="m-1" outline>
        <ix-icon name="star"></ix-icon>Button
      </ix-button>
      <ix-button class="m-1" ghost>
        <ix-icon name="star"></ix-icon>Button
      </ix-button>
  `;
}
