/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxInputGroup, IxIcon } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxInputGroup, IxIcon],
  template: `
    <form class="needs-validation">
      <ix-input-group>
        <input type="text" />
        <span slot="input-end"><ix-icon name="about" size="16"></ix-icon></span>
      </ix-input-group>
    </form>
  `,
})
export default class InputLegacyWithIcon {}
