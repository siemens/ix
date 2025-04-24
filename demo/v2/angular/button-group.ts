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
    <div class="ix-button-group">
      <ix-button outline> Left </ix-button>
      <ix-button>Middle</ix-button>
      <ix-button outline> Right </ix-button>
    </div>
  `,
})
export default class ButtonGroup {}
