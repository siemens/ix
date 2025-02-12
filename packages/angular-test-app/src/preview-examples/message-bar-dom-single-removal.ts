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
  selector: 'app-message-bar',
  template: `
    <ix-button (click)="handleShowMessageBar()">Show Message Bar</ix-button>
    <div class="message-bar">
      <ix-message-bar *ngIf="showMessageBar" (closeAnimationCompleted)="handleCloseAnimationCompleted()">
        Message text
      </ix-message-bar>
    </div>
  `,
  styleUrls: ['./message-bar.css']
})
export default class MessageBarDOMSingleRemoval {
  showMessageBar = false;

  handleCloseAnimationCompleted() {
    this.showMessageBar = false;
  }

  handleShowMessageBar() {
    this.showMessageBar = true;
  }
}
