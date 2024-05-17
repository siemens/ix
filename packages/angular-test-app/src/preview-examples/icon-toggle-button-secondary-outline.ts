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
    <ix-icon-toggle-button outline></ix-icon-toggle-button>
    <ix-icon-toggle-button outline></ix-icon-toggle-button>
    <ix-icon-toggle-button outline disabled></ix-icon-toggle-button>
    <ix-icon-toggle-button outline disabled loading></ix-icon-toggle-button>

    <ix-icon-toggle-button outline size="16"></ix-icon-toggle-button>
    <ix-icon-toggle-button outline size="16" pressed></ix-icon-toggle-button>
    <ix-icon-toggle-button outline size="16" disabled></ix-icon-toggle-button>
    <ix-icon-toggle-button
      outline
      size="16"
      disabled
      loading
    ></ix-icon-toggle-button>

    <ix-icon-toggle-button outline size="24"></ix-icon-toggle-button>
    <ix-icon-toggle-button outline size="24" pressed></ix-icon-toggle-button>
    <ix-icon-toggle-button outline size="24" disabled></ix-icon-toggle-button>
    <ix-icon-toggle-button
      outline
      size="24"
      disabled
      loading
    ></ix-icon-toggle-button>
  `,
  styles: [
    `
      @import 'example-styles/dist/icon-toggle-buttons.css';
    `,
  ],
})
export default class Buttons {}
