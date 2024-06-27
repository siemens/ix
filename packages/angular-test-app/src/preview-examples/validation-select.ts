/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: `./validation-select.html`,
})
export default class ValidationSelect {
  exampleForm = new FormGroup({
    car: new FormControl('', [Validators.required]),
  });

  submit() {
    console.log(this.exampleForm.value);
  }
}
