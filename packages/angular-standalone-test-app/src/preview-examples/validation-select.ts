/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import {
  IxSelect,
  IxSelectItem,
  IxButton,
  IxSelectValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxSelect,
    IxSelectItem,
    IxButton,
    IxSelectValueAccessorDirective,
    ReactiveFormsModule,
  ],
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
