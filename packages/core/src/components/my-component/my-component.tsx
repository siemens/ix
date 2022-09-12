// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() wasValidated = false;

  private inputElement: HTMLElement;

  componentDidLoad() {}

  render() {
    return (
      <Host>
        <form
          class={`row g-3`}
          novalidate
          onSubmit={(evt) => {
            evt.preventDefault();

            this.wasValidated = true;
            this.inputElement.classList.add('is-invalid');
          }}
        >
          <div class="col-md-4">
            <label htmlFor="validationCustom01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              value=""
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label htmlFor="validationCustom02" class="form-label">
              Last name
            </label>
            <ix-validation-tooltip message="Error hint text">
              <input
                ref={(r) => (this.inputElement = r as HTMLElement)}
                type="text"
                class="form-control"
                id="validationCustom02"
                value=""
              />
            </ix-validation-tooltip>
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label htmlFor="validationCustomUsername" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </Host>
    );
  }
}
