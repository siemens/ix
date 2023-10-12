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
      size="24"
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      outline
      size="24"
      pressed
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      outline
      size="24"
      disabled
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      outline
      size="24"
      disabled
      loading
      icon="checkboxes"
    ></ix-icon-toggle-button>
  `,
})
export default class Buttons {}
