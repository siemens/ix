/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { IxButton } from '@siemens/ix-angular/standalone';

import { ToastService } from '@siemens/ix-angular';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxButton],
  template: `
    <ix-button (click)="showToastMessage()">Trigger toast</ix-button>
    <ng-template #customToast let-toast>
      <div>
        <div>Custom toast message</div>
        <ix-button (click)="toast.close('Action')">Action</ix-button>
      </div>
    </ng-template>
  `,
})
export default class ToastCustom {
  @ViewChild('customToast', { read: TemplateRef })
  customToastRef!: TemplateRef<any>;

  constructor(private readonly toastService: ToastService) {}

  async showToastMessage() {
    this.toastService.show({
      message: this.customToastRef,
    });
  }
}
