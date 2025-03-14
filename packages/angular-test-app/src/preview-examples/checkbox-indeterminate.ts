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
    <div>
      <input
        class="ix-form-control"
        type="checkbox"
        id="checkbox_01"
        [indeterminate]="true"
      />
      <label class="ix-form-label" for="checkbox_01">Simple checkbox</label>
    </div>
  `,
})
export default class CheckboxIndeterminate {}
