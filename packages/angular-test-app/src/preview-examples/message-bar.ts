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
    <div style='margin: 0.5rem'>
      <ix-message-bar style="margin-bottom: 0.5rem; display: block">Message text</ix-message-bar>
      <ix-message-bar style="margin-bottom: 0.5rem; display: block" type="warning">Message text</ix-message-bar>
      <ix-message-bar style="display: block" type="danger">
        <div class="d-flex align-items-center justify-content-between">
          Message text <ix-button>Action</ix-button>
        </div>
      </ix-message-bar>
    </div>
  `,
})
export default class MessageBar {}
