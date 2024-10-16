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
  templateUrl: './form-checkbox-group-indeterminate.html',
  styleUrls: ['./form-checkbox-group-indeterminate.css'],
})
export default class FormCheckboxGroupIndeterminate {
  parentCheckbox = {indeterminate: true, checked: false, label: "Option group"};
  childCheckboxes = [
    {checked: true, label: "Sub option one"},
    {checked: true, label: "Another sub option"},
    {checked: false, label: "Another sub option"},
  ]

  parentCheckedChange() {
    this.parentCheckbox.indeterminate = false;
    this.childCheckboxes.forEach((cb) => {
      cb.checked = this.parentCheckbox.checked;
    });
  }

  checkedChange() {
    if(this.childCheckboxes.every((cb) => cb.checked)){
      this.parentCheckbox.indeterminate = false;
      this.parentCheckbox.checked = true;
    }
    else if(this.childCheckboxes.some((cb) => cb.checked)){
      this.parentCheckbox.indeterminate = true;
      this.parentCheckbox.checked = false;
    }
    else {
      this.parentCheckbox.indeterminate = false;
      this.parentCheckbox.checked = false;
    }
  }
}
