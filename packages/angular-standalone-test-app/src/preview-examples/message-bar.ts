/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxMessageBar, IxButton } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxMessageBar, IxButton],
  template: `
    <div class="message-bar">
      <ix-message-bar>Message text</ix-message-bar>
      <ix-message-bar type="warning">Message text</ix-message-bar>
      <ix-message-bar type="danger">
        <div class="message-bar-danger">
          Message text
          <ix-button>Action</ix-button>
        </div>
      </ix-message-bar>
    </div>
  `,
  styleUrls: ['./message-bar.css'],
})
export default class MessageBar {}
