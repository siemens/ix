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
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-layout-grid>
      <ix-row>
        <ix-icon-toggle-button variant="tertiary" icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" pressed icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled loading icon="checkboxes"></ix-icon-toggle-button>
      </ix-row>
      <ix-row>
        <ix-icon-toggle-button variant="tertiary" oval icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" pressed oval icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled oval icon="checkboxes"></ix-icon-toggle-button>
        <ix-icon-toggle-button variant="tertiary" disabled loading oval icon="checkboxes"></ix-icon-toggle-button>
      </ix-row>
    </ix-layout-grid>
  `,
  styleUrls: ['./icon-toggle-button-primary-ghost.css'],
})
export default class Buttons {}
