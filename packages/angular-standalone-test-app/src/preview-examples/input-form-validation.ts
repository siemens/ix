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
  IxInput,
  IxButton,
  IxTextValueAccessorDirective,
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
    IxInput,
    IxButton,
    IxTextValueAccessorDirective,
    ReactiveFormsModule,
  ],
  templateUrl: `./input-form-validation.html`,
})
export default class InputFormValidation {
  exampleForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  submit() {
    console.log(this.exampleForm.value);
  }
}
