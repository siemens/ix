/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, inject } from '@angular/core';
import { IxButton, ToastService } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxButton],
  providers: [ToastService],
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class ToastPosition {
  private readonly toastService = inject(ToastService);

  async showToastMessage() {
    this.toastService.setPosition('top-right');
    this.toastService.show({
      message: 'My toast message!',
    });
  }
}
