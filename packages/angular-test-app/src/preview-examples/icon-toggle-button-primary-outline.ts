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
  styleUrls: ['./styles-auto-gen/icon-toggle-button.css'],
  template: `
    <ix-icon-toggle-button
      variant="primary"
      outline
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="primary"
      outline
      pressed
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="primary"
      outline
      disabled
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="primary"
      outline
      disabled
      loading
      icon="checkboxes"
    ></ix-icon-toggle-button>
  `,
})
export default class Buttons {}
