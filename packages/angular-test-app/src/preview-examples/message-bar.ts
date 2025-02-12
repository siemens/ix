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
    <div class="message-bar">
      <ix-message-bar dismissible="false">Message text</ix-message-bar>
      <ix-message-bar dismissible="false" type="warning">Message text</ix-message-bar>
      <ix-message-bar dismissible="false" type="danger">
        <div class="d-flex align-items-center justify-content-between">
          Message text
          <ix-button>Action</ix-button>
        </div>
      </ix-message-bar>
    </div>
  `,
  styleUrls: ['./message-bar.css'],
})
export default class MessageBar {}
