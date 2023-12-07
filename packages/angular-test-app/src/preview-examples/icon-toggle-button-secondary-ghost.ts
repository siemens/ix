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
  styleUrls: [`../../../styles/icon-toggle-button.css`],
  template: `
    <ix-icon-toggle-button ghost icon="checkboxes"></ix-icon-toggle-button>
    <ix-icon-toggle-button
      ghost
      pressed
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      ghost
      disabled
      icon="checkboxes"
    ></ix-icon-toggle-button>
    <ix-icon-toggle-button
      ghost
      disabled
      loading
      icon="checkboxes"
    ></ix-icon-toggle-button>
  `,
})
export default class Buttons {}
