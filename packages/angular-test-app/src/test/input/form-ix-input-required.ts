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
  selector: 'test-input-form-required',
  template: `
    <form class="form-validation-example" [formGroup]="form">
      <ix-input
        label="Name:"
        helperText="Write down your name"
        invalidText="Value is required"
        formControlName="name"
        required
      >
      </ix-input>
    </form>
  `,
})
export class TestInputFormRequired {
  public form = new FormGroup({
    name: new FormControl('', Validators.compose([Validators.required])),
  });
}
