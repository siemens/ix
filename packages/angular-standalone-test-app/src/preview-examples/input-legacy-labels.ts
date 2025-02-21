/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxInputGroup } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxInputGroup],
  template: `
    <form class="needs-validation">
      <ix-input-group style="margin-bottom: 0.5rem;">
        <span slot="input-start">Label Start</span>
        <input type="text" />
      </ix-input-group>

      <ix-input-group>
        <input type="text" />
        <span slot="input-end">Label End</span>
      </ix-input-group>
    </form>
  `,
})
export default class InputLegacyLabels {}
