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
        <span slot="input-start">Text:</span>
        <input placeholder="Enter text" type="text" />
      </ix-input-group>

      <ix-input-group style="margin-bottom: 0.5rem;">
        <span slot="input-start">Number:</span>
        <input type="number" />
        <span slot="input-end">.00</span>
        <span slot="input-end">$</span>
      </ix-input-group>

      <ix-input-group style="margin-bottom: 0.5rem;">
        <span slot="input-start">Password:</span>
        <input placeholder="Enter password" type="password" />
      </ix-input-group>

      <ix-input-group style="margin-bottom: 0.5rem;">
        <span slot="input-start">Email:</span>
        <input placeholder="example@domain.com" type="email" />
      </ix-input-group>

      <ix-input-group style="margin-bottom: 0.5rem;">
        <span slot="input-start">Telephone:</span>
        <input placeholder="111-111-111" type="tel" />
      </ix-input-group>
    </form>
  `,
})
export default class InputLegacyTypes {}
