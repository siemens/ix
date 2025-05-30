/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <div class="ix-button-group">
      <ix-button outline> Left </ix-button>
      <ix-button>Middle</ix-button>
      <ix-button outline> Right </ix-button>
    </div>
  `,
})
export default class ButtonGroup {}
