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
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="ix-button-group">
      <ix-button variant="subtle-secondary"> Button 1 </ix-button>
      <ix-button> Button 2 </ix-button>
      <ix-button variant="subtle-secondary"> Button 3 </ix-button>
      <ix-button variant="subtle-secondary"> Button 4 </ix-button>
    </div>
  `,
})
export default class ButtonGroup {}
