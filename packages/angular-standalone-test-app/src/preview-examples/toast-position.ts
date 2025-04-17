/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

import { ToastService } from '@siemens/ix-angular';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class ToastPosition {
  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.setPosition('top-right');
    this.toastService.show({
      message: 'My toast message!',
    });
  }
}
