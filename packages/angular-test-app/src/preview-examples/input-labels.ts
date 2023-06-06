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
    <form class="needs-validation m-2">
      <ix-input-group style="margin-bottom: 0.5rem;">
        <span slot="input-start">Label Start</span>
        <input type="text" class="form-control" />
      </ix-input-group>

      <ix-input-group>
        <input type="text" class="form-control" />
        <span slot="input-end">Label End</span>
      </ix-input-group>
    </form>
  `,
})
export default class Input {}
