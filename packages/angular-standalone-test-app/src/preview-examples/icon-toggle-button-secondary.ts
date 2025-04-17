/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxIconToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxIconToggleButton],
  template: `
    <ix-icon-toggle-button icon="checkboxes"></ix-icon-toggle-button>
    <ix-icon-toggle-button pressed icon="checkboxes"></ix-icon-toggle-button>
    <ix-icon-toggle-button disabled icon="checkboxes"></ix-icon-toggle-button>
    <ix-icon-toggle-button
      disabled
      loading
      icon="checkboxes"
    ></ix-icon-toggle-button>
  `,
  styleUrls: ['./icon-toggle-button-secondary.css'],
})
export default class Buttons {}
