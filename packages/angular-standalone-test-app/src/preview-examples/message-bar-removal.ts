/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxButton, IxMessageBar } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxMessageBar, IxButton],
  template: `
    <div class="message-bar">
      @if (messageBarVisible) {
        <ix-message-bar
          (closeAnimationCompleted)="handleCloseAnimationCompleted()"
        >
          Message text
        </ix-message-bar>
      } @else {
        <ix-button (click)="handleShowMessage()">Show message bar</ix-button>
      }
    </div>
  `,
  styleUrls: ['./message-bar.css'],
})
export default class MessageBarRemoval {
  messageBarVisible = true;

  handleCloseAnimationCompleted() {
    this.messageBarVisible = false;
  }

  handleShowMessage() {
    this.messageBarVisible = true;
  }
}
