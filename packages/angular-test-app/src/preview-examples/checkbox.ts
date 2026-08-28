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
    <ix-checkbox-group label="Checkbox group label">
      <ix-checkbox label="Option 1" name="checkbox-1"></ix-checkbox>
      <ix-checkbox label="Option 2" name="checkbox-2"></ix-checkbox>
    </ix-checkbox-group>
  `,
})
export default class Checkbox {}
