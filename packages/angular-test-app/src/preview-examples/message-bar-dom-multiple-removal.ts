/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

type Variant = 'info' | 'warning' | 'danger';

@Component({
  selector: 'app-message-bar-multiple-removal',
  template: `
    <ix-button (click)="handleShowMessageBar()">Show Message Bar</ix-button>
    <div class="message-bar">
      <ix-message-bar
        *ngFor="let bar of messageBars"
        [type]="bar.variant"
        (closeAnimationCompleted)="handleCloseAnimationCompleted(bar.id)"
      >
        Message text
      </ix-message-bar>
    </div>
  `,
  styleUrls: ['./message-bar.css']
})
export default class MessageBarDOMMultipleRemoval {
  messageBars: { id: number; variant: Variant }[] = [];
  variants: Variant[] = ['info', 'warning', 'danger'];

  handleCloseAnimationCompleted(id: number) {
    this.messageBars = this.messageBars.filter(bar => bar.id !== id);
  }

  handleShowMessageBar() {
    const randomVariant = this.variants[Math.floor(Math.random() * this.variants.length)];
    this.messageBars = [...this.messageBars, { id: Date.now(), variant: randomVariant }];
  }
}
