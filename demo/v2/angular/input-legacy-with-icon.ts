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
    <form class="needs-validation">
      <ix-input-group>
        <input class="ix-form-control" type="text" />
        <span slot="input-end"><ix-icon name="about" size="16"></ix-icon></span>
      </ix-input-group>
    </form>
  `,
})
export default class InputLegacyWithIcon {}
