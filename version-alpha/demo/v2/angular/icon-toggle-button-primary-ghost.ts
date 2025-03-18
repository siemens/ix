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
    <ix-icon-toggle-button
      variant="primary"
      ghost
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="primary"
      ghost
      pressed
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="primary"
      ghost
      disabled
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      variant="primary"
      ghost
      disabled
      loading
      icon="checkboxes"
    ></ix-icon-toggle-button>
  `,
  styleUrls: ['./icon-toggle-button-primary-ghost.css'],
})
export default class Buttons {}
