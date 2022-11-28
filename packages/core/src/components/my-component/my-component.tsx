/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <div
          style={{
            display: 'block',
            position: 'relative',
            minWidth: '100vw',
            minHeight: '100vh',
          }}
        >
          <ix-basic-navigation>
            <ix-menu>
              <ix-menu-avatar>
                <ix-menu-avatar-item label="test"></ix-menu-avatar-item>
              </ix-menu-avatar>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
              <ix-menu-item tabIcon="rocket">xxx</ix-menu-item>
            </ix-menu>
            <div
              style={{
                width: '40rem',
                height: '150vh',
                display: 'block',
                position: 'relative',
              }}
            >
              <ix-select>
                <ix-select-item value={'1'} label="2"></ix-select-item>
                <ix-select-item value={'2'} label="2"></ix-select-item>
              </ix-select>
              <ix-breadcrumb>
                <ix-breadcrumb-item label="22"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="23"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="24"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="25"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
                <ix-breadcrumb-item label="1"></ix-breadcrumb-item>
              </ix-breadcrumb>
              <ix-date-picker></ix-date-picker>
              <ix-group suppressHeaderSelection>
                <ix-dropdown-item slot="dropdown" label="1"></ix-dropdown-item>
                <ix-dropdown-item slot="dropdown" label="2"></ix-dropdown-item>
                <ix-dropdown-item slot="dropdown" label="3"></ix-dropdown-item>
                <ix-dropdown-item slot="dropdown" label="4"></ix-dropdown-item>
                <ix-group-item>123</ix-group-item>
                <ix-group-item>345</ix-group-item>
              </ix-group>
              <ix-split-button>
                <ix-split-button-item label="1"></ix-split-button-item>
                <ix-split-button-item label="2"></ix-split-button-item>
                <ix-split-button-item label="3"></ix-split-button-item>
                <ix-split-button-item label="4"></ix-split-button-item>
                <ix-split-button-item label="5"></ix-split-button-item>
              </ix-split-button>
              <form
                class="row g-3 needs-validation"
                novalidate
                onSubmit={(evt) => {
                  evt.preventDefault();
                  console.log(evt);
                }}
              >
                <div class="row">
                  <div class="col-md-4">
                    <label htmlFor="validationCustom01" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustom01"
                      value=""
                      required
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <label htmlFor="validationCustom02" class="form-label">
                      {' '}
                      Last name{' '}
                    </label>
                    <ix-validation-tooltip message="Cannot be empty!">
                      <input
                        type="text"
                        class="form-control"
                        id="validationCustom02"
                        value=""
                        required
                      />
                    </ix-validation-tooltip>
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <label
                      htmlFor="validationCustomUsername"
                      class="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      required
                      minlength="4"
                    />
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </ix-basic-navigation>
        </div>
      </Host>
    );
  }
}
