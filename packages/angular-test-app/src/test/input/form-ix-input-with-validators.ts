/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'test-input-form-with-validators',
  template: `
    <form [formGroup]="form">
      <ix-input formControlName="name" [required]="true"> </ix-input>
    </form>
  `,
})
export class TestInputFormWithValidators {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
}
