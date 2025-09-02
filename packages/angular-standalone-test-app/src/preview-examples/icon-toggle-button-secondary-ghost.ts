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
  selector: 'app-example',
  imports: [IxIconToggleButton, IxLayoutGrid, IxRow],
  template: `
    <ix-layout-grid>
      <ix-row>
        <ix-icon-toggle-button variant="tertiary" icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" pressed icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled loading icon="checkboxes"></ix-icon-toggle-button>
      </ix-row>
      <ix-row>
        <ix-icon-toggle-button variant="tertiary" icon="checkboxes" oval></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" pressed icon="checkboxes" oval></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled icon="checkboxes" oval></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled loading icon="checkboxes" oval></ix-icon-toggle-button>
      </ix-row>
    </ix-layout-grid>
  `,
  styleUrls: ['./icon-toggle-button-secondary-ghost.css'],
})
export default class Buttons {}
