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
    <form
      class="needs-validation"
      [ngClass]="{ 'was-validated': wasValidated }"
      no-validate
      (submit)="onSubmit($event)"
    >
      <ix-layout-grid>
        <ix-row>
          <ix-col size="4">
            <label class="ix-form-label" for="validationCustom01"
              >First name</label
            >
            <input
              class="ix-form-control"
              name="firstName"
              type="text"
              id="validationCustom01"
              [(ngModel)]="data.firstName"
              #firstName="ngModel"
              required
            />
            <div class="invalid-feedback">Please choose a first name.</div>
            <div class="valid-feedback">Looks good!</div>
          </ix-col>
        </ix-row>
        <ix-row>
          <ix-col size="4">
            <ix-validation-tooltip message="Cannot be empty!">
              <label class="ix-form-label" for="validationCustom02"
                >Last name</label
              >
              <input
                class="ix-form-control"
                name="lastName"
                type="text"
                id="validationCustom02"
                [(ngModel)]="data.lastName"
                #lastName="ngModel"
                required
              />
            </ix-validation-tooltip>
          </ix-col>
        </ix-row>
        <ix-row>
          <ix-col size="4">
            <label class="ix-form-label" for="validationCustomUsername">
              Username
            </label>
            <input
              class="ix-form-control"
              name="userName"
              type="text"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              [(ngModel)]="data.userName"
              #userName="ngModel"
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </ix-col>
        </ix-row>
        <ix-row>
          <ix-col>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </ix-col>
        </ix-row>
      </ix-layout-grid>
    </form>
  `,
})
export default class Validation {
  data = {
    firstName: '',
    lastName: '',
    userName: '',
  };

  wasValidated = false;

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    this.wasValidated = true;
  }
}
