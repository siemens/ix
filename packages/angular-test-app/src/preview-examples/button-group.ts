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
  template: `
    <div class="btn-group">
      <ix-button variant="primary" outline> Left </ix-button>
      <ix-button variant="primary">Middle</ix-button>
      <ix-button variant="primary" outline> Right </ix-button>
    </div>
  `,
})
export default class ButtonGroup {}
