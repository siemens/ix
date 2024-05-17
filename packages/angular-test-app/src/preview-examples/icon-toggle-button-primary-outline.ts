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
    <ix-icon-toggle-button variant="Primary" outline></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="Primary"
      outline
      pressed
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="Primary"
      outline
      disabled
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="Primary"
      outline
      disabled
      loading
    ></ix-icon-toggle-button>
  `,
  styles: [`@import 'example-styles/dist/icon-toggle-button.css';`],
})
export default class Buttons {}
