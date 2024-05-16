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
  template: buttonTextIcon(),
})
export default class Buttons {}
function buttonTextIcon(): string | undefined {
  return `
      <ix-button style="margin: 0.25rem" variant="primary" icon="star">
        Button
      </ix-button>
      <ix-button style="margin: 0.25rem" variant="secondary" icon="star">
        Button
      </ix-button>
      <ix-button style="margin: 0.25rem" outline icon="star">
        Button
      </ix-button>
      <ix-button style="margin: 0.25rem" ghost icon="star">
        Button
      </ix-button>
  `;
}
