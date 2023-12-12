/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
          <ix-col size="8">
            <ix-date-input></ix-date-input>
            <div class="valid-feedback">Looks good!</div>
          </ix-col>
        </ix-row>
        <ix-row>
          <ix-col>
            <ix-button type="submit">Submit form</ix-button>
          </ix-col>
        </ix-row>
      </ix-layout-grid>
    </form> 
  `,
})
export default class DateInput {
  wasValidated = false;

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    this.wasValidated = true;
  }
}
