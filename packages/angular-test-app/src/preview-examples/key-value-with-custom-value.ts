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
    <ix-key-value label="Label">
      <input
        class="form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </ix-key-value>
  `,
})
export default class KeyValueWithCustomValue {}
