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
    <ix-icon-toggle-button outline icon="checkboxes"></ix-icon-toggle-button>
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
  `,
  styleUrls: ['./icon-toggle-button-secondary-outline.css'],
})
export default class Buttons {}
