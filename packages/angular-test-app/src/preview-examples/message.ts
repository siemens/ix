/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { MessageService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button (click)="triggerMessage()">Show 'success' message</ix-button>
  `,
})
export default class Message {
  constructor(private readonly messageService: MessageService) {}

  triggerMessage = async () => {
    (
      await this.messageService.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };
}
