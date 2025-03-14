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
      <input
        value="Some example text"
        placeholder="Enter text here"
        type="text"
        class="ix-form-control"
      />
    </form>
  `,
})
export default class InputLegacy {}
