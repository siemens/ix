/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxKeyValue } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxKeyValue],
  template: `
    <ix-key-value
      label="Label"
      labelPosition="left"
      value="Value"
    ></ix-key-value>
  `,
})
export default class KeyValueWithLabelLeft {}
