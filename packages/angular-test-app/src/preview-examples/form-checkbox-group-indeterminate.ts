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
    <ix-checkbox-group>
      <ix-checkbox indeterminate="true" label="Option group"></ix-checkbox>
      <ix-checkbox checked label="Sub option one" class="cb-padding"></ix-checkbox>
      <ix-checkbox checked label="Another sub option" class="cb-padding"></ix-checkbox>
      <ix-checkbox label="Another sub option" class="cb-padding"></ix-checkbox>
    </ix-checkbox-group>
  `,
  styleUrls: ['./styles/form-checkbox-group-indeterminate.css'],
})
export default class FormCheckboxGroupIndeterminate {}
