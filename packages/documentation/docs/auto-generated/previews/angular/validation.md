<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/validation.ts -->
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-validation',
  template: `
    <form
      class="row g-3 needs-validation"
      [ngClass]="{ 'was-validated': wasValidated }"
      no-validate
      (submit)="onSubmit($event)"
    >
      <div class="col-md-4">
        <label htmlFor="validationCustom01" class="form-label">
          First name
        </label>
        <input
          name="firstName"
          type="text"
          class="form-control"
          id="validationCustom01"
          [(ngModel)]="data.firstName"
          #firstName="ngModel"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label htmlFor="validationCustom02" class="form-label">
          Last name
        </label>
        <ix-validation-tooltip
          message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text"
        >
          <input
            name="lastName"
            type="text"
            class="form-control"
            id="validationCustom02"
            [(ngModel)]="data.lastName"
            #lastName="ngModel"
            required
          />
        </ix-validation-tooltip>
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label htmlFor="validationCustomUsername" class="form-label">
          Username
        </label>
        <input
          name="userName"
          type="text"
          class="form-control"
          id="validationCustomUsername"
          aria-describedby="inputGroupPrepend"
          [(ngModel)]="data.userName"
          #userName="ngModel"
          required
        />
        <div class="invalid-feedback">Please choose a username.</div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  `,
})
export class Validation {
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
```
