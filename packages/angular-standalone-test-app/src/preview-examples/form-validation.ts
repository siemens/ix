/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  IxLayoutAuto,
  IxInput,
  IxIcon,
  IxRadioGroup,
  IxRadio,
  IxNumberInput,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxTextarea,
  IxCustomField,
  IxIconButton,
  IxCheckbox,
  IxButton,
  IxBooleanValueAccessorDirective,
  IxDateValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.untouched) {
      return Validators.required(control);
    }
    return null;
  };
}

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [
    IxLayoutAuto,
    IxInput,
    IxIcon,
    IxRadioGroup,
    IxRadio,
    IxNumberInput,
    IxTypography,
    IxSelect,
    IxSelectItem,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
    IxCheckbox,
    IxButton,
    IxBooleanValueAccessorDirective,
    IxDateValueAccessorDirective,
    IxRadioValueAccessorDirective,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
    ReactiveFormsModule,
  ],
  templateUrl: `./form-validation.html`,
  styles: [
    `
      @import './form-validation.css';
    `,
  ],
})
export default class FormValidation implements OnInit, OnDestroy {
  @ViewChild('upload') upload?: ElementRef<HTMLInputElement>;

  thresholdLimitAErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  thresholdLimitBWarning = false;

  exampleForm = new FormGroup({
    name: new FormControl('', [customRequiredValidator()]),
    'last-name': new FormControl('Muster', [customRequiredValidator()]),
    address: new FormControl('John Street 14', [Validators.required]),
    thresholdLimitA: new FormControl(6, [
      Validators.required,
      Validators.max(5),
    ]),
    thresholdLimitB: new FormControl(7, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
    upload: new FormControl('', []),
    uploadPath: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.thresholdLimitBWarning =
      !!value.thresholdLimitB && value.thresholdLimitB > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['thresholdLimitA'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['thresholdLimitA'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.thresholdLimitAErrorText =
        'The threshold must be equal or lesser than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  openFileUpload() {
    this.upload?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }
    // Store the file somewhere to upload the asset after the form is submitted
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    this.exampleForm.controls['uploadPath'].setValue(file.name);
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}
