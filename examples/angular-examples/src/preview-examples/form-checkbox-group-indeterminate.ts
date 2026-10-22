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
  templateUrl: './form-checkbox-group-indeterminate.html',
  styleUrls: ['./form-checkbox-group-indeterminate.css'],
})
export default class FormCheckboxGroupIndeterminate {
  parentCheckbox = {
    indeterminate: true,
    checked: false,
    label: 'Option group',
  };
  childCheckboxes = [
    { checked: true, label: 'Sub option one' },
    { checked: true, label: 'Another sub option' },
    { checked: false, label: 'Another sub option' },
  ];

  parentCheckedChange() {
    this.parentCheckbox.indeterminate = false;
    this.childCheckboxes.forEach((cb) => {
      cb.checked = this.parentCheckbox.checked;
    });
  }

  checkedChange() {
    const checkedCount = this.childCheckboxes.filter((cb) => cb.checked).length;
    const totalCount = this.childCheckboxes.length;
    this.parentCheckbox.checked = checkedCount === totalCount;
    this.parentCheckbox.indeterminate = checkedCount > 0 && checkedCount < totalCount;
  }
}
