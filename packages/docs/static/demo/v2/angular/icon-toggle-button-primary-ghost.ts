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
    <ix-layout-grid>
      <ix-row>
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
      </ix-row>
      <ix-row>
        <ix-icon-toggle-button
          variant="primary"
          ghost
          oval
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          variant="primary"
          ghost
          pressed
          oval
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          variant="primary"
          ghost
          disabled
          oval
          icon="checkboxes"
        ></ix-icon-toggle-button>
        <ix-icon-toggle-button
          variant="primary"
          ghost
          disabled
          loading
          oval
          icon="checkboxes"
        ></ix-icon-toggle-button>
      </ix-row>
    </ix-layout-grid>
  `,
  styleUrls: ['./icon-toggle-button-primary-ghost.css'],
})
export default class Buttons {}
