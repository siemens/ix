/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import {
  IxIconToggleButton,
  IxLayoutGrid,
  IxRow,
} from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxIconToggleButton, IxLayoutGrid, IxRow],
  template: `
    <ix-layout-grid>
      <ix-row>
        <ix-icon-toggle-button icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button
          pressed
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          disabled
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          disabled
          loading
          icon="checkboxes"
        ></ix-icon-toggle-button>
      </ix-row>
      <ix-row>
        <ix-icon-toggle-button icon="checkboxes" oval></ix-icon-toggle-button>
        <ix-icon-toggle-button
          pressed
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          disabled
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          disabled
          loading
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
      </ix-row>
    </ix-layout-grid>
  `,
  styleUrls: ['./icon-toggle-button-secondary.css'],
})
export default class Buttons {}
