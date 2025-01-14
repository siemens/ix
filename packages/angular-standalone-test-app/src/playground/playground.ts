/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  IxBooleanValueAccessorDirective,
  IxDateValueAccessorDirective,
  IxIcon,
  IxInput,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (control.dirty && !control.value) {
      return Validators.required(control);
    }
    return null;
  };
}

/* Zum testen lokal definiert. Auch als export verfügbar */
export const IxValueAccessorDirectives = [
  IxBooleanValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
  IxDateValueAccessorDirective,
];

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ReactiveFormsModule, IxInput, IxIcon],
  templateUrl: './playground.html',
  styleUrls: ['./playground.css'],
  hostDirectives: [...IxValueAccessorDirectives],
})
export default class Playground implements OnInit {
  firstNameLength = 10;
  lastNameLength = 15;

  form = new FormGroup({
    first: new FormControl('', [
      customRequiredValidator(),
      Validators.maxLength(this.firstNameLength),
    ]),
    last: new FormControl('', [
      customRequiredValidator(),
      Validators.maxLength(this.lastNameLength),
    ]),
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
