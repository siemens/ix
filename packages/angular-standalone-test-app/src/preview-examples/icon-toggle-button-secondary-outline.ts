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
        <ix-icon-toggle-button
          outline
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          pressed
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          disabled
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          disabled
          loading
          icon="checkboxes"
        ></ix-icon-toggle-button>

        <ix-icon-toggle-button
          outline
          size="16"
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="16"
          pressed
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="16"
          disabled
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="16"
          disabled
          loading
          icon="checkboxes"
        ></ix-icon-toggle-button>

        <ix-icon-toggle-button
          outline
          size="12"
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="12"
          pressed
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="12"
          disabled
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="12"
          disabled
          loading
          icon="checkboxes"
        ></ix-icon-toggle-button>
      </ix-row>
      <ix-row>
        <ix-icon-toggle-button
          outline
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          pressed
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          disabled
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          disabled
          loading
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>

        <ix-icon-toggle-button
          outline
          size="16"
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="16"
          pressed
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="16"
          disabled
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="16"
          disabled
          loading
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>

        <ix-icon-toggle-button
          outline
          size="12"
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="12"
          pressed
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="12"
          disabled
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          outline
          size="12"
          disabled
          loading
          icon="checkboxes"
          oval
        ></ix-icon-toggle-button>
      </ix-row>
    </ix-layout-grid>
  `,
  styleUrls: ['./icon-toggle-button-secondary-outline.css'],
})
export default class Buttons {}
