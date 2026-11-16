/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, inject } from '@angular/core';
import type { ToastType } from '@siemens/ix';
import { ToastService } from '@siemens/ix-angular';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
  `,
})
export default class Toast {
  private readonly toastService = inject(ToastService);

  async showToastMessage() {
    const toastTypes: ToastType[] = [
      'information',
      'success',
      'caution',
      'warning',
      'danger',
      'critical',
      'error',
    ];

    for (const type of toastTypes) {
      await this.toastService.show({
        type,
        title: 'Toast headline',
        message: 'This is a toast test message!',
        autoClose: false,
      });
    }
  }
}
