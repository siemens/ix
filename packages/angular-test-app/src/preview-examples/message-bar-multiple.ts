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
export default class MessageBarMultiple {
  messageBars: { id: number; variant: Variant }[] = [
    { id: 1, variant: 'info' },
    { id: 2, variant: 'warning' },
    { id: 3, variant: 'danger' }
  ];

  handleCloseAnimationCompleted(id: number) {
    this.messageBars = this.messageBars.filter(bar => bar.id !== id);
  }
}
